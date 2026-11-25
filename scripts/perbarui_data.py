#!/usr/bin/env python3
"""
Penarik data otomatis — Indikator Strategis Kabupaten Sigi.

Mengambil angka terbaru dari Web API BPS (webapi.bps.go.id) lalu menulis
ulang angka di assets/data.js. Teks narasi, rekomendasi, dan judul TIDAK
diubah (itu tetap diisi manual).

Kunci API dibaca dari variabel lingkungan BPS_API_KEY. Di GitHub, kunci
itu disimpan sebagai "Repository secret" bernama BPS_API_KEY, sehingga
tidak pernah tertulis di kode situs.

Jalankan:  BPS_API_KEY=xxxx python3 scripts/perbarui_data.py
"""
import json
import os
import re
import sys
import time
import urllib.error
import urllib.request
from datetime import datetime, timedelta, timezone

DASAR = "https://webapi.bps.go.id/v1/api/list/model"
DOMAIN_KAB = "7210"   # BPS Kabupaten Sigi
DOMAIN_PROV = "7200"  # BPS Provinsi Sulawesi Tengah
NAMA_KAB = "Sigi"
NAMA_PROV = "Sulawesi Tengah"
BERKAS = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "assets", "data.js")
WITA = timezone(timedelta(hours=8))

# Nomor tabel (var_id) di Web API BPS. Bila BPS mengganti tabel, cukup ubah di sini.
VAR = {
    "ipm_kabkota": (DOMAIN_PROV, 278),   # IPM dan komponen IPM menurut kab/kota
    "p0_kabkota": (DOMAIN_PROV, 90),     # Persentase penduduk miskin
    "p1_kabkota": (DOMAIN_PROV, 79),     # Indeks kedalaman kemiskinan
    "p2_kabkota": (DOMAIN_PROV, 88),     # Indeks keparahan kemiskinan
    "garis_kabkota": (DOMAIN_PROV, 56),  # Garis kemiskinan
    "tpt_kabkota": (DOMAIN_PROV, 92),    # TPT
    "tpak_kabkota": (DOMAIN_PROV, 91),   # TPAK
    "gini_kabkota": (DOMAIN_PROV, 52),   # Gini rasio
    "ikg_kabkota": (DOMAIN_PROV, 296),   # Indeks ketimpangan gender
    "pdrbkap_kabkota": (DOMAIN_PROV, 261),  # PDRB per kapita (ribu Rp)
    "pdrb_adhb_tw": (DOMAIN_PROV, 287),  # PDRB triwulanan ADHB kab/kota (miliar Rp)
    "pdrb_adhk_tw": (DOMAIN_PROV, 288),  # PDRB triwulanan ADHK kab/kota
    "pdrb_yoy_tw": (DOMAIN_PROV, 292),   # Laju pertumbuhan y-on-y
    "pdrb_qtq_tw": (DOMAIN_PROV, 290),   # Laju pertumbuhan q-to-q
    "pdrb_ctc_tw": (DOMAIN_PROV, 293),   # Laju pertumbuhan c-to-c
    "pend_kabkota_lk": (DOMAIN_PROV, 238),  # Proyeksi penduduk laki-laki (ribu)
    "pend_kabkota_pr": (DOMAIN_PROV, 239),  # Proyeksi penduduk perempuan (ribu)
    "pend_umur": (DOMAIN_KAB, 106),      # Penduduk Sigi menurut kelompok umur & jenis kelamin
}

# Tabel per kecamatan (domain Sigi). kolom → (var_id, turvar, keterangan)
VAR_KEC = {
    "penduduk": (45, "Jumlah", "Jumlah penduduk (jiwa)"),
    "laki": (45, "Laki-laki", "Penduduk laki-laki (jiwa)"),
    "perempuan": (45, "Perempuan", "Penduduk perempuan (jiwa)"),
    "luas": (149, None, "Luas wilayah (km²)"),
    "kepadatan": (286, None, "Kepadatan penduduk (jiwa/km²)"),
    "rumahtangga": (287, None, "Jumlah rumah tangga"),
    "desa": (296, None, "Jumlah desa/kelurahan"),
    "nakes": (52, "*", "Tenaga kesehatan (orang)"),
    "tinggi": (299, None, "Tinggi wilayah (m dpl)"),
    "jarak": (158, None, "Jarak ke ibu kota kabupaten (km)"),
}

KUNCI = os.environ.get("BPS_API_KEY", "").strip()


def norm(s):
    s = (s or "").lower().replace("-", "").replace(" ", "")
    return {"kotapalu": "palu"}.get(s, s)


def panggil(jalur, coba=0):
    url = f"{DASAR}/{jalur}/key/{KUNCI}"
    req = urllib.request.Request(url, headers={"User-Agent": "indikator-strategis-sigi/1.0"})
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            d = json.load(r)
    except urllib.error.HTTPError as e:
        try:
            d = json.load(e)
        except Exception:
            d = {"status": "error", "message": f"HTTP {e.code}"}
    except Exception as e:  # jaringan putus
        d = {"status": "error", "message": str(e)}
    if str(d.get("code", "")).upper() == "RATE_LIMITED" and coba < 4:
        time.sleep(int(d.get("retry_after", 60)) + 2)
        return panggil(jalur, coba + 1)
    time.sleep(1.2)  # sopan: jangan membanjiri API
    return d


class Tabel:
    """Satu tabel dinamis BPS, beberapa tahun terakhir digabung."""

    def __init__(self, domain, var, n_tahun=6, sampai=None):
        self.domain, self.var = domain, var
        semua, hal = [], 1
        while True:
            d = panggil(f"th/domain/{domain}/var/{var}/page/{hal}")
            if d.get("data-availability") != "available":
                break
            info, isi = d["data"][0], d["data"][1]
            semua += isi
            if hal >= int(info.get("pages", 1)):
                break
            hal += 1
        semua.sort(key=lambda x: int(x["th_id"]))
        if sampai:
            semua = [x for x in semua if int(x["th"]) <= int(sampai)]
        ids = [x["th_id"] for x in semua][-n_tahun:]
        self.vervar, self.turvar, self.tahun, self.turtahun, self.isi = [], [], {}, [], {}
        self.label = ""
        for i in range(0, len(ids), 3):
            potong = ";".join(str(t) for t in ids[i:i + 3])
            d = panggil(f"data/domain/{domain}/var/{var}/th/{potong}")
            if d.get("data-availability") != "available":
                continue
            self.label = d["var"][0]["label"]
            self.vervar = d["vervar"] or self.vervar
            self.turvar = d["turvar"] or self.turvar
            self.turtahun = d["turtahun"] or self.turtahun
            for t in d["tahun"]:
                self.tahun[str(t["val"])] = t["label"]
            self.isi.update(d.get("datacontent") or {})
        if not self.isi:
            raise RuntimeError(f"Tabel {var} (domain {domain}) kosong / tidak tersedia")

    def daftar_tahun(self):
        return sorted(self.tahun.items(), key=lambda kv: int(kv[0]))

    def kode(self, daftar, label):
        if label is None:
            return str(daftar[0]["val"]) if daftar else "0"
        for x in daftar:
            if norm(x["label"]) == norm(label):
                return str(x["val"])
        for x in daftar:
            if norm(label) in norm(x["label"]):
                return str(x["val"])
        return None

    def nilai(self, vervar=None, turvar=None, tahun=None, turtahun=None):
        vv = self.kode(self.vervar, vervar)
        tv = self.kode(self.turvar, turvar)
        tt = self.kode(self.turtahun, turtahun)
        th = None
        for k, lab in self.tahun.items():
            if lab == str(tahun):
                th = k
        if None in (vv, tv, tt, th):
            return None
        v = self.isi.get(f"{vv}{self.var}{tv}{th}{tt}")
        return None if v in (None, "") else float(v)

    def deret(self, vervar=None, turvar=None, turtahun=None):
        """[(tahun, nilai)] berurutan, hanya yang ada isinya."""
        out = []
        for _, lab in self.daftar_tahun():
            v = self.nilai(vervar, turvar, lab, turtahun)
            if v is not None:
                out.append((lab, v))
        return out


def fmt(v, dec=2):
    s = f"{v:,.{dec}f}"
    return s.replace(",", "X").replace(".", ",").replace("X", ".")


def tanda(v, dec=2):
    return ("+" if v >= 0 else "−") + fmt(abs(v), dec)


def baca_data():
    teks = open(BERKAS, encoding="utf-8").read()
    m = re.search(r"const DATA = (\{.*\});\s*\n\s*/\*", teks, re.S)
    if not m:
        sys.exit("Tidak menemukan objek DATA di assets/data.js")
    return teks, m, json.loads(m.group(1))


def tulis_data(teks, m, data):
    baru = json.dumps(data, ensure_ascii=False, indent=2)
    teks = teks[:m.start(1)] + baru + teks[m.end(1):]
    open(BERKAS, "w", encoding="utf-8").write(teks)


def kartu(data, id_):
    for it in data["indikator"]:
        if it["id"] == id_:
            return it
    return None


def main():
    if not KUNCI:
        sys.exit("BPS_API_KEY belum diisi. Simpan kunci di GitHub → Settings → Secrets and variables → Actions.")
    teks, m, D = baca_data()
    log = []
    gagal = []

    def ambil(nama, n=6, sampai=None):
        dom, var = VAR[nama]
        try:
            t = Tabel(dom, var, n, sampai)
            log.append(f"✓ {nama}: tabel {var} '{t.label}' tahun {[l for _, l in t.daftar_tahun()]}")
            return t
        except Exception as e:  # satu tabel gagal tidak menghentikan yang lain
            gagal.append(f"✗ {nama}: {e}")
            return None

    W = {norm(w["nama"]): w for w in D.get("wilayah", [])}
    B = D.setdefault("banding", {})
    P = D.setdefault("pembaruan", {})
    sekarang = datetime.now(WITA).isoformat(timespec="seconds")

    def set_kartu(id_, nilai, abbr=None, seri=None):
        k = kartu(D, id_)
        if k is not None and nilai is not None:
            k["value"] = round(nilai, k.get("dec", 2))
            if abbr:
                k["abbr"] = abbr
            if seri:
                seri = [(str(a), b) for a, b in seri if b is not None][-6:]
                k["seri"] = {"label": [a for a, _ in seri], "nilai": [round(b, 4) for _, b in seri]}

    # ---------------- IPM & komponen ----------------
    t = ambil("ipm_kabkota", 6)
    if t:
        komp = {"uhh": "Umur Harapan Hidup", "hls": "Harapan Lama Sekolah", "rls": "Rata-Rata Lama Sekolah",
                "ppp": "Pengeluaran per Kapita", "ipm": "Indeks Pembangunan Manusia"}
        der = t.deret(NAMA_KAB, komp["ipm"])
        if der:
            th = der[-1][0]
            D["ipm"]["label"] = [x[0] for x in der[-5:]]
            D["ipm"]["nilai"] = [x[1] for x in der[-5:]]
            D["ipm"]["judul"] = f"Perkembangan IPM {der[-5:][0][0]}–{th}"
            satuan = {"uhh": "tahun", "hls": "tahun", "rls": "tahun", "ppp": "ribu Rp"}
            nama = {"uhh": "Umur Harapan Hidup saat Lahir", "hls": "Harapan Lama Sekolah",
                    "rls": "Rata-Rata Lama Sekolah", "ppp": "Pengeluaran Riil per Kapita"}
            daftar = []
            for k in ["uhh", "hls", "rls", "ppp"]:
                dk = t.deret(NAMA_KAB, komp[k])
                if not dk:
                    continue
                v = dk[-1][1]
                sebelum = dk[-2][1] if len(dk) > 1 else v
                dec = 0 if k == "ppp" else 2
                set_kartu(k, v, f"{k.upper()} · {dk[-1][0]}", dk)
                daftar.append({"nama": nama[k], "nilai": fmt(v, dec), "satuan": satuan[k],
                               "delta": (("+Rp" if v >= sebelum else "−Rp") + fmt(abs(v - sebelum), 0) + " ribu") if k == "ppp" else (tanda(v - sebelum) + " tahun")})
                B["prov" + k.capitalize()] = t.nilai(NAMA_PROV, komp[k], th)
                for w in W.values():
                    w[k] = t.nilai(w["nama"], komp[k], th)
            D["ipm"]["komponen"] = daftar
            D["ipm"]["subKomponen"] = f"Perubahan dibanding tahun {der[-2][0]}" if len(der) > 1 else ""
            set_kartu("ipm", der[-1][1], f"IPM · Tahun {th}", der)
            B["provIpm"] = t.nilai(NAMA_PROV, komp["ipm"], th)
            B["tahunIpm"] = th
            for w in W.values():
                w["ipm"] = t.nilai(w["nama"], komp["ipm"], th)
            P["ipm"] = {"periode": th, "pada": sekarang, "oleh": f"Web API BPS — tabel {t.var} BPS Sulteng"}

    # ---------------- Kemiskinan ----------------
    t0, t1, t2, tg = ambil("p0_kabkota", 5), ambil("p1_kabkota", 5), ambil("p2_kabkota", 5), ambil("garis_kabkota", 5)
    if t0:
        der = t0.deret(NAMA_KAB)
        K = D["kemiskinan"]
        K["label"] = [x[0] for x in der]
        K["p0"] = [x[1] for x in der]
        if t1:
            K["p1"] = [t1.nilai(NAMA_KAB, None, th) for th in K["label"]]
        if t2:
            K["p2"] = [t2.nilai(NAMA_KAB, None, th) for th in K["label"]]
        if tg:
            K["garis"] = [tg.nilai(NAMA_KAB, None, th) for th in K["label"]]
        rentang = f"{K['label'][0]}–{K['label'][-1]}"
        K["judul"] = f"P0, P1, dan P2 Kemiskinan {rentang}"
        K["judulGaris"] = f"Perkembangan Garis Kemiskinan {rentang}"
        th = der[-1][0]
        set_kartu("p0", der[-1][1], f"P0 · Tahun {th}", der)
        B["provMiskin"] = t0.nilai(NAMA_PROV, None, th)
        B["tahunMiskin"] = th
        for w in W.values():
            w["miskin"] = t0.nilai(w["nama"], None, th)
        P["kemiskinan"] = {"periode": th, "pada": sekarang, "oleh": f"Web API BPS — tabel {t0.var} BPS Sulteng"}

    # ---------------- Ketenagakerjaan ----------------
    for nama, id_, kunci_w in [("tpt_kabkota", "tpt", "tpt"), ("tpak_kabkota", "tpak", None)]:
        t = ambil(nama, 6)
        if not t:
            continue
        der = t.deret(NAMA_KAB)
        if not der:
            continue
        th = der[-1][0]
        set_kartu(id_, der[-1][1], f"{id_.upper()} · Agustus {th}", der)
        if kunci_w:
            B["provTpt"] = t.nilai(NAMA_PROV, None, th)
            B["tahunTpt"] = th
            for w in W.values():
                w["tpt"] = t.nilai(w["nama"], None, th)
        P["naker"] = {"periode": th, "pada": sekarang, "oleh": f"Web API BPS — tabel {t.var} BPS Sulteng"}

    # ---------------- Gini, IKG, PDRB per kapita ----------------
    for nama, id_, kw, prov, thk, ubah, label in [
        ("gini_kabkota", "gini", "gini", "provGini", "tahunGini", 1, "Gini"),
        ("ikg_kabkota", "ikg", None, None, None, 1, "IKG"),
        ("pdrbkap_kabkota", "pdrb-kapita", "pdrbKapita", "provPdrbKapita", "tahunPdrbKapita", 0.001, "PDRB per kapita"),
    ]:
        t = ambil(nama, 6)
        if not t:
            continue
        der = t.deret(NAMA_KAB)
        if not der:
            continue
        th = der[-1][0]
        set_kartu(id_, der[-1][1] * ubah, f"{label} · {th}", [(a, b * ubah) for a, b in der])
        if kw:
            v = t.nilai(NAMA_PROV, None, th)
            B[prov] = None if v is None else round(v * ubah, 3)
            B[thk] = th
            for w in W.values():
                v = t.nilai(w["nama"], None, th)
                w[kw] = None if v is None else round(v * ubah, 3)

    # ---------------- PDRB triwulanan & tahunan ----------------
    ta, tk, ty = ambil("pdrb_adhb_tw", 6), ambil("pdrb_adhk_tw", 6), ambil("pdrb_yoy_tw", 6)
    tq, tc = ambil("pdrb_qtq_tw", 3), ambil("pdrb_ctc_tw", 3)
    if ta and tk and ty:
        tw_label = [x["label"] for x in ta.turtahun if "triwulan" in x["label"].lower()]
        romawi = {"Triwulan I": "I", "Triwulan II": "II", "Triwulan III": "III", "Triwulan IV": "IV"}
        urut = []
        for _, th in ta.daftar_tahun():
            for tl in tw_label:
                v = ta.nilai(NAMA_KAB, None, th, tl)
                vk = tk.nilai(NAMA_KAB, None, th, tl)
                if v is None or vk is None:
                    continue
                if v <= vk:  # ADHB mestinya > ADHK; bila tidak, angka di tabel BPS kemungkinan salah isi
                    gagal.append(f"! PDRB {tl} {th}: ADHB ({v}) tidak lebih besar dari ADHK ({vk}) — triwulan ini dilewati, mohon cek tabel {ta.var}")
                    continue
                urut.append((th, tl, v))
        lima = urut[-5:]
        if lima:
            PT = D["pdrbTriwulan"]
            PT["label"] = [f"TW {romawi.get(tl, tl)}-{th}" for th, tl, _ in lima]
            PT["adhb"] = [v for _, _, v in lima]
            PT["adhk"] = [tk.nilai(NAMA_KAB, None, th, tl) for th, tl, _ in lima]
            PT["lpe"] = [ty.nilai(NAMA_KAB, None, th, tl) for th, tl, _ in lima]
            PT["sub"] = f"Perbandingan lima triwulan terakhir, {PT['label'][0]} sampai {PT['label'][-1]} (tabel PDRB triwulanan kab/kota BPS Sulteng)."
            th, tl, vadhb = lima[-1]
            total = sum(v for v in (ta.nilai(x["label"], None, th, tl) for x in ta.vervar) if v)
            yoy = ty.nilai(NAMA_KAB, None, th, tl)
            qtq = tq.nilai(NAMA_KAB, None, th, tl) if tq else None
            ctc = tc.nilai(NAMA_KAB, None, th, tl) if tc else None
            lab = PT["label"][-1]
            S = D.setdefault("sorotan", {}).setdefault("ekonomi", [])
            baru = []
            if yoy is not None:
                baru.append({"judul": f"Pertumbuhan Ekonomi {lab} (y-on-y)", "nilai": fmt(yoy) + "%", "gaya": "",
                             "ket": f"Dibanding triwulan yang sama tahun sebelumnya" + (f"; {fmt(qtq)}% dibanding triwulan sebelumnya (q-to-q)." if qtq is not None else ".")})
            if ctc is not None:
                baru.append({"judul": f"Pertumbuhan kumulatif s.d. {lab} (c-to-c)", "nilai": fmt(ctc) + "%", "gaya": "",
                             "ket": f"PDRB sejak awal tahun {th} dibanding periode yang sama tahun sebelumnya."})
            if total:
                baru.append({"judul": f"Kontribusi terhadap PDRB {NAMA_PROV}", "nilai": fmt(vadhb / total * 100) + "%", "gaya": "",
                             "ket": f"PDRB ADHB {NAMA_KAB} {lab} Rp{fmt(vadhb)} miliar dari Rp{fmt(total)} miliar jumlah 13 kabupaten/kota."})
            if baru:
                D["sorotan"]["ekonomi"] = baru
            P["pdrbTw"] = {"periode": lab, "pada": sekarang, "oleh": f"Web API BPS — tabel {ta.var} BPS Sulteng"}
        # tahunan: kolom "Jumlah" hanya bila keempat triwulan sudah ada
        jumlah = [x["label"] for x in ta.turtahun if "triwulan" not in x["label"].lower()]
        if jumlah:
            jl = jumlah[0]
            thn = [(th, ta.nilai(NAMA_KAB, None, th, jl)) for _, th in ta.daftar_tahun()]
            thn = [(th, v) for th, v in thn if v is not None
                   and tk.nilai(NAMA_KAB, None, th, jl) is not None and ty.nilai(NAMA_KAB, None, th, jl) is not None][-5:]
            if thn:
                PY = D["pdrbTahun"]
                PY["label"] = [th for th, _ in thn]
                PY["adhb"] = [v for _, v in thn]
                PY["adhk"] = [tk.nilai(NAMA_KAB, None, th, jl) for th, _ in thn]
                PY["lpe"] = [ty.nilai(NAMA_KAB, None, th, jl) for th, _ in thn]
                PY["sub"] = f"Perkembangan tahunan {thn[0][0]}–{thn[-1][0]}."
                th = thn[-1][0]
                set_kartu("pdrb-adhb", PY["adhb"][-1], f"PDRB ADHB · Tahun {th}", list(zip(PY["label"], PY["adhb"])))
                set_kartu("pdrb-adhk", PY["adhk"][-1], f"PDRB ADHK · Tahun {th}", list(zip(PY["label"], PY["adhk"])))
                set_kartu("lpe", PY["lpe"][-1], f"LPE · Tahun {th}", list(zip(PY["label"], PY["lpe"])))
                B["tahunLpe"] = th
                for w in W.values():
                    w["lpe"] = ty.nilai(w["nama"], None, th, jl)

    # ---------------- Penduduk kab/kota (proyeksi SP2020) ----------------
    tahun_kini = datetime.now(WITA).year
    tl_, tp_ = ambil("pend_kabkota_lk", 6, tahun_kini - 1), ambil("pend_kabkota_pr", 6, tahun_kini - 1)
    if tl_ and tp_:
        tahun_ini = str(datetime.now(WITA).year)
        cocok = [lab for _, lab in tl_.daftar_tahun() if lab <= tahun_ini]
        if cocok:
            th = cocok[-1]
            jumlah_umur = [x["label"] for x in tl_.turvar if "jumlah" in x["label"].lower() or "total" in x["label"].lower()]
            if jumlah_umur:
                for w in W.values():
                    lk = tl_.nilai(w["nama"], jumlah_umur[0], th)
                    pr = tp_.nilai(w["nama"], jumlah_umur[0], th)
                    if lk is not None and pr is not None:
                        w["laki"], w["perempuan"] = lk, pr
                B["tahunPenduduk"] = th
                # Laju pertumbuhan penduduk per tahun, dihitung dari proyeksi SP2020
                th0 = tl_.daftar_tahun()[0][1]
                p0 = (tl_.nilai(NAMA_KAB, jumlah_umur[0], th0) or 0) + (tp_.nilai(NAMA_KAB, jumlah_umur[0], th0) or 0)
                p1 = (tl_.nilai(NAMA_KAB, jumlah_umur[0], th) or 0) + (tp_.nilai(NAMA_KAB, jumlah_umur[0], th) or 0)
                n = int(th) - int(th0)
                if p0 and p1 and n > 0:
                    lpp = ((p1 / p0) ** (1 / n) - 1) * 100
                    set_kartu("lpp", lpp, f"LPP {th0}–{th} (dari proyeksi SP2020)")
                    for s in D.get("demografiStat", []):
                        if s["label"].startswith("Laju pertumbuhan penduduk"):
                            s["label"] = f"Laju pertumbuhan penduduk {th0}–{th}"
                            s["value"] = fmt(lpp) + "%"
                D.setdefault("teks", {}).setdefault("peta", {})["judul"] = f"Peta Sebaran Kabupaten/Kota di {NAMA_PROV}, {th}"

    # ---------------- Penduduk Sigi menurut umur → kartu, generasi, demografi ----------------
    t = ambil("pend_umur", 3)
    if t:
        th = t.daftar_tahun()[-1][1]
        umur = [x["label"] for x in t.vervar]
        total_lab = [u for u in umur if not re.search(r"\d", u)]  # baris jumlah (mis. "Sigi" / "Jumlah")
        def jml(u, jk="Jumlah"):
            return t.nilai(u, jk, th) or 0.0
        kelompok = [u for u in umur if u not in total_lab]
        def bawah(u):
            a = re.findall(r"\d+", u)
            return int(a[0]) if a else 0
        tot = jml(total_lab[0]) if total_lab else sum(jml(u) for u in kelompok)
        if tot:
            set_kartu("penduduk", tot, f"Jumlah penduduk tahun {th}")
            def porsi(lo, hi):
                return sum(jml(u) for u in kelompok if lo <= bawah(u) <= hi) / tot * 100
            g = {"Post Gen Z": porsi(0, 14), "Gen Z": porsi(15, 29), "Milenial": porsi(30, 39),
                 "Gen X": porsi(40, 59), "Baby Boomer & Pre Boomer": porsi(60, 200)}
            for x in D.get("generasi", []):
                if x["nama"] in g:
                    x["nilai"] = round(g[x["nama"]], 1)
            D["teks"].setdefault("generasi", {})["judul"] = f"Komposisi Penduduk Menurut Generasi, {th}"
            lk = jml(total_lab[0], "Laki-laki") if total_lab else 0
            pr = jml(total_lab[0], "Perempuan") if total_lab else 0
            stat = {s["label"]: s for s in D.get("demografiStat", [])}
            for s in D.get("demografiStat", []):
                if s["label"].startswith("Rasio jenis kelamin") and lk and pr:
                    s["value"] = fmt(lk / pr * 100)
                elif s["label"].startswith("Penduduk usia produktif"):
                    s["value"] = fmt(porsi(15, 64)) + "%"
                elif s["label"].startswith("Penduduk lansia"):
                    s["value"] = fmt(porsi(60, 200)) + "%"
            D["kependudukanAngka"] = {"tahun": th, "total": tot, "laki": lk, "perempuan": pr}

    # ---------------- Data per kecamatan (untuk peta) ----------------
    KC = D.setdefault("kecamatan", {})
    daftar = KC.setdefault("daftar", [])
    daftar[:] = [b for b in daftar if norm(b.get("nama")) not in ("kabupaten" + norm(NAMA_KAB), norm(NAMA_KAB))]
    th_kolom = KC.setdefault("tahun_kolom", {})
    KC["keterangan_kolom"] = {k: v[2] for k, v in VAR_KEC.items()}
    cache_tabel = {}
    for kolom, (var, turvar, _) in VAR_KEC.items():
        if var not in cache_tabel:
            try:
                cache_tabel[var] = Tabel(DOMAIN_KAB, var, 1)
                log.append(f"✓ kecamatan/{var}: '{cache_tabel[var].label}' tahun {[l for _, l in cache_tabel[var].daftar_tahun()]}")
            except Exception as e:
                cache_tabel[var] = None
                gagal.append(f"✗ kecamatan/{var}: {e}")
        t = cache_tabel[var]
        if not t:
            continue
        th = t.daftar_tahun()[-1][1]
        if th_kolom.get(kolom) and str(th_kolom[kolom]) > str(th):
            continue  # angka manual yang lebih baru tidak ditimpa
        isi_baru = {}
        for vv in t.vervar:
            if not re.search(r"[a-z]", vv["label"], re.I) or norm(vv["label"]) in (norm(NAMA_KAB), "kabupaten" + norm(NAMA_KAB), "jumlah", "total"):
                continue
            if turvar == "*":
                vals = [t.nilai(vv["label"], tv["label"], th) for tv in t.turvar]
                vals = [x for x in vals if x is not None]
                v = sum(vals) if vals else None
            else:
                v = t.nilai(vv["label"], turvar, th)
            if v is not None:
                isi_baru[" ".join(vv["label"].split())] = v
        if not isi_baru:
            continue
        for nama, v in isi_baru.items():
            baris = next((b for b in daftar if norm(b["nama"]) == norm(nama)), None)
            if baris is None:
                baris = {"nama": nama}
                daftar.append(baris)
            baris[kolom] = v
        th_kolom[kolom] = th
    KC["sumber"] = "Tabel dinamis BPS Kabupaten Sigi (Web API BPS). Tahun data berbeda per kolom; lihat tahun_kolom. Angka yang lebih baru boleh diisi manual dari publikasi Kecamatan Dalam Angka."

    # ---------------- Rilis terbaru: BRS, publikasi, infografis ----------------
    def bersih(html):
        t = re.sub(r"<[^>]+>", " ", html or "").replace("&nbsp;", " ")
        return " ".join(t.split())[:260]
    R = D.setdefault("rilis", {})
    for model, kunci, peta in [
        ("pressrelease", "brs", lambda x: {"judul": bersih(x.get("title")), "tanggal": x.get("rl_date"), "ringkas": bersih(x.get("abstract")), "unduh": x.get("pdf"), "gambar": x.get("thumbnail")}),
        ("publication", "publikasi", lambda x: {"judul": bersih(x.get("title")), "tanggal": x.get("rl_date"), "ringkas": bersih(x.get("abstract")), "unduh": x.get("pdf"), "gambar": x.get("cover"), "ukuran": x.get("size")}),
        ("infographic", "infografis", lambda x: {"judul": bersih(x.get("title")), "tanggal": x.get("date"), "ringkas": bersih(x.get("desc")), "unduh": x.get("dl"), "gambar": x.get("img")}),
    ]:
        d = panggil(f"{model}/lang/ind/domain/{DOMAIN_KAB}")
        if d.get("data-availability") == "available" and len(d.get("data", [])) > 1:
            isi = sorted(d["data"][1], key=lambda x: str(x.get("rl_date") or x.get("date") or ""), reverse=True)
            R[kunci] = [peta(x) for x in isi[:8]]
            log.append(f"✓ rilis/{kunci}: {len(R[kunci])} butir")
        else:
            gagal.append(f"✗ rilis/{kunci}: {d.get('message', 'tidak tersedia')}")

    D.setdefault("meta", {})
    D["meta"]["terbit"] = sekarang
    D["meta"]["sinkron_terakhir"] = sekarang
    D["meta"]["catatan"] = "Angka diperbarui otomatis dari Web API BPS oleh GitHub Actions."
    tulis_data(teks, m, D)

    print("\n".join(log))
    if gagal:
        print("\nTabel yang gagal (angka lama tetap dipakai):")
        print("\n".join(gagal))
    print(f"\nSelesai. assets/data.js diperbarui {sekarang}.")


if __name__ == "__main__":
    main()

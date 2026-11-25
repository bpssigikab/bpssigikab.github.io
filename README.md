# Indikator Strategis Kabupaten Sigi

Dashboard web interaktif indikator strategis **Kabupaten Sigi** (demografi, ketenagakerjaan,
PDRB, IPM, kemiskinan, pemerataan) dengan angka yang **diperbarui otomatis dari Web API BPS**.

🔗 **Situs:** https://bpssigi.github.io/

Tampilan dan susunan menu diadaptasi dari situs
[Indikator Strategis BPS Kabupaten Kutai Kartanegara](https://github.com/bpskukar/indikator-strategis-bpskukar)
(lisensi MIT).

## Menu

Peta · Ringkasan · Ekonomi · Kependudukan · Pembangunan Manusia · Kemiskinan · Bandingkan · Rilis · Rekomendasi · Sumber

## Fitur khas Sigi

- **Peta kecamatan interaktif** di beranda (Leaflet): warnai menurut penduduk, kepadatan, luas, desa, tenaga kesehatan, dll.; klik kecamatan untuk profil; peta dasar biasa/satelit.
- **Rilis terbaru** (BRS, publikasi, infografis BPS Sigi) ditarik otomatis dari Web API BPS.
- **Tren mini & peringkat se-Sulteng** di tiap kartu indikator.
- **Unduh data (CSV)** semua angka situs.

## Cara angka diperbarui

1. GitHub Actions (`.github/workflows/perbarui-data.yml`) jalan **tiap Senin 07.00 WITA**,
   atau manual lewat tab **Actions → Perbarui data dari Web API BPS → Run workflow**.
2. Skrip `scripts/perbarui_data.py` menarik tabel dinamis BPS (domain 7210 Sigi dan 7200 Sulteng)
   memakai kunci yang disimpan di **Settings → Secrets and variables → Actions → `BPS_API_KEY`**.
3. Angka baru ditulis ke `assets/data.js`, lalu disimpan (commit) otomatis. Situs ikut berubah
   dalam 1–2 menit.

Kunci API **tidak pernah** tertulis di kode situs, jadi aman walaupun repositori ini publik.

## Mengubah teks

Narasi, rekomendasi, judul, dan catatan ada di `assets/data.js` (bagian `narasi`, `rekomendasi`,
`teks`, `sorotan`). Tulis `{{ipm}}`, `{{p0}}`, `{{tpt}}` dan seterusnya untuk menyisipkan angka
terbaru kartu indikator, atau `{{banding.provIpm}}` untuk angka provinsi. **Angka** jangan diubah
manual karena akan tertimpa saat pembaruan otomatis.

## Struktur berkas

```
index.html                       halaman
assets/data.js                   isi: angka (otomatis) + teks (manual)
assets/app.js                    gambar kartu, grafik, peta, pembanding
assets/style.css                 tampilan + mode gelap
assets/pintar.js                 bilah atas + tombol tema
assets/kartu.js                  kartu angka siap bagikan (PNG)
assets/peta.js                   peta kecamatan interaktif
assets/sigi-kecamatan.js         batas kecamatan (GADM, disederhanakan)
assets/muat.js                   pemuat isi
scripts/perbarui_data.py         penarik data Web API BPS
.github/workflows/perbarui-data.yml   jadwal pembaruan otomatis
```

## Catatan

Situs ini adalah penyajian ulang data publik BPS dalam bentuk web dan **bukan publikasi resmi
Badan Pusat Statistik**. Untuk keperluan resmi gunakan https://sigikab.bps.go.id.

Kode: MIT (lihat `LICENSE`). Data statistik milik Badan Pusat Statistik.

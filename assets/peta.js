/* ==========================================================================
   Peta interaktif kecamatan — Indikator Strategis Kabupaten Sigi.
   Batas wilayah: assets/sigi-kecamatan.js (window.SIGI_GEO).
   Angka per kecamatan: bagian "kecamatan" di assets/data.js (diperbarui
   otomatis dari Web API BPS; boleh dilengkapi manual dari publikasi
   Kecamatan Dalam Angka).
   ========================================================================== */
(function () {
  'use strict';

  const D = window.INDIKATOR_AWAL || {};
  const GEO = window.SIGI_GEO;
  const el = (id) => document.getElementById(id);
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const fmt = (n, dec = 0) => Number(n).toLocaleString('id-ID', { minimumFractionDigits: dec, maximumFractionDigits: dec });
  const norm = (s) => String(s || '').toLowerCase().replace(/[^a-z]/g, '');

  /* Kecamatan pemekaran yang belum punya batas sendiri di peta → digabung ke induknya */
  const GABUNG = { sigibiromaru: ['sigikota'] };

  const KC = D.kecamatan || {};
  const TH = KC.tahun_kolom || {};
  const METRIK = [
    { k: 'penduduk',    label: 'Jumlah penduduk',          unit: 'jiwa',       dec: 0 },
    { k: 'kepadatan',   label: 'Kepadatan penduduk',       unit: 'jiwa/km²',   dec: 0 },
    { k: 'luas',        label: 'Luas wilayah',             unit: 'km²',        dec: 0 },
    { k: 'desa',        label: 'Jumlah desa/kelurahan',    unit: 'desa',       dec: 0 },
    { k: 'nakes',       label: 'Tenaga kesehatan',         unit: 'orang',      dec: 0 },
    { k: 'rumahtangga', label: 'Jumlah rumah tangga',      unit: 'RT',         dec: 0 },
    { k: 'tinggi',      label: 'Ketinggian wilayah',       unit: 'm dpl',      dec: 0 },
    { k: 'jarak',       label: 'Jarak ke ibu kota kabupaten', unit: 'km',      dec: 0 }
  ];
  const SKALA = ['#FFF1DF', '#FDD1A0', '#F9A65A', '#E8761E', '#B5470A'];

  /* ---------- data per kecamatan, sudah digabung untuk poligon peta ---------- */
  const baris = {};
  (KC.daftar || []).forEach((b) => { baris[norm(b.nama)] = b; });
  function dataPoligon(nama) {
    const k = norm(nama), induk = Object.assign({}, baris[k] || { nama });
    (GABUNG[k] || []).forEach((anak) => {
      const a = baris[anak]; if (!a) return;
      METRIK.forEach((m) => {
        if (a[m.k] == null) return;
        if (m.k === 'penduduk' || m.k === 'desa' || m.k === 'nakes' || m.k === 'rumahtangga' || m.k === 'luas')
          induk[m.k] = (Number(induk[m.k]) || 0) + Number(a[m.k]);
      });
      induk._gabung = (induk._gabung || []).concat(a.nama);
    });
    return induk;
  }
  const METRIK_ADA = METRIK.filter((m) => (KC.daftar || []).some((b) => b[m.k] != null));

  let peta = null, lapisan = null, dasar = {}, dipilih = null, metrik = (METRIK_ADA[0] || METRIK[0]).k;
  const poligon = {};

  function nilai(nama, k) { const v = dataPoligon(nama)[k]; return v == null || v === '' ? null : Number(v); }
  function semuaNilai(k) { return (GEO ? GEO.features : []).map((f) => nilai(f.properties.nama, k)).filter((v) => v != null); }
  function ambang(k) {
    const v = semuaNilai(k).sort((a, b) => a - b);
    if (!v.length) return [];
    return [0.2, 0.4, 0.6, 0.8].map((q) => v[Math.min(v.length - 1, Math.floor(q * v.length))]);
  }
  function warna(v, amb) {
    if (v == null) return '#D9D2CA';
    let i = 0; while (i < amb.length && v >= amb[i]) i++;
    return SKALA[i];
  }
  function info(k) { return METRIK.find((m) => m.k === k); }
  function thn(k) { return TH[k] ? ' (' + TH[k] + ')' : ''; }

  function gaya(f) {
    const amb = ambang(metrik), nm = f.properties.nama;
    return {
      color: dipilih === nm ? '#1d0f08' : '#ffffff', weight: dipilih === nm ? 3 : 1.4, opacity: 1,
      fillColor: warna(nilai(nm, metrik), amb), fillOpacity: dasar.aktif === 'satelit' ? 0.55 : 0.82
    };
  }

  /* ---------- legenda ---------- */
  function gambarLegenda() {
    const amb = ambang(metrik), m = info(metrik), v = semuaNilai(metrik);
    if (!v.length) { el('petaLegenda').innerHTML = ''; return; }
    const min = Math.min(...v), max = Math.max(...v);
    const batas = [min].concat(amb, [max]);
    el('petaLegenda').innerHTML =
      '<div class="petahero__skala">' + SKALA.map((c, i) =>
        `<span style="background:${c}" title="${fmt(batas[i], m.dec)} – ${fmt(batas[i + 1], m.dec)}"></span>`).join('') + '</div>' +
      `<div class="petahero__ujung"><span>${fmt(min, m.dec)}</span><span>${esc(m.unit)}</span><span>${fmt(max, m.dec)}</span></div>`;
  }

  /* ---------- panel profil ---------- */
  function urutan(k) {
    return (GEO ? GEO.features : []).map((f) => ({ n: f.properties.nama, v: nilai(f.properties.nama, k) }))
      .filter((x) => x.v != null).sort((a, b) => b.v - a.v);
  }
  function profilKabupaten() {
    const total = (k) => (KC.daftar || []).reduce((t, b) => t + (Number(b[k]) || 0), 0);
    const m = info(metrik), u = urutan(metrik);
    const kartu = (D.indikator || []);
    const pend = kartu.find((x) => x.id === 'penduduk');
    el('profilKec').innerHTML = `
      <div class="profil__kepala">
        <span class="profil__label">Kabupaten</span>
        <h3>Sigi</h3>
        <p>${GEO ? GEO.features.length : 0} kecamatan pada peta · ${fmt(total('desa'))} desa/kelurahan${thn('desa')}</p>
      </div>
      <dl class="profil__angka">
        ${pend && pend.value ? `<div><dt>Penduduk</dt><dd>${fmt(pend.value)} <small>jiwa</small></dd></div>` : ''}
        <div><dt>Luas wilayah</dt><dd>${fmt(total('luas'))} <small>km²</small></dd></div>
      </dl>
      <h4 class="profil__sub">${esc(m.label)} tertinggi${thn(metrik)}</h4>
      <ol class="profil__top">${u.slice(0, 5).map((x) =>
        `<li><button type="button" data-kec="${esc(x.n)}">${esc(x.n)}</button><span>${fmt(x.v, m.dec)}</span></li>`).join('')}</ol>
      <p class="profil__petunjuk">Klik kecamatan pada peta untuk melihat profilnya.</p>`;
    el('profilKec').querySelectorAll('[data-kec]').forEach((b) => { b.onclick = () => pilih(b.dataset.kec, true); });
  }
  function profilKecamatan(nama) {
    const d = dataPoligon(nama), u = urutan(metrik), m = info(metrik);
    const rank = u.findIndex((x) => x.n === nama) + 1;
    const pendKab = (KC.daftar || []).reduce((t, b) => t + (Number(b.penduduk) || 0), 0);
    const rasio = d.laki && d.perempuan ? fmt(d.laki / d.perempuan * 100, 1) : null;
    const baris = METRIK_ADA.map((mm) => {
      const v = d[mm.k]; if (v == null) return '';
      const mx = Math.max(...semuaNilai(mm.k));
      return `<div class="${mm.k === metrik ? 'is-aktif' : ''}"><dt>${esc(mm.label)}<small>${esc(TH[mm.k] || '')}</small></dt>
        <dd>${fmt(v, mm.dec)} <small>${esc(mm.unit)}</small></dd>
        <span class="profil__bar"><i style="width:${mx ? Math.max(3, v / mx * 100) : 0}%"></i></span></div>`;
    }).join('');
    const pub = ((D.rilis || {}).publikasi || []).find((p) => norm(p.judul).includes(norm('kecamatan ' + nama)));
    el('profilKec').innerHTML = `
      <div class="profil__kepala">
        <span class="profil__label">Kecamatan</span>
        <h3>${esc(nama)}</h3>
        <p>${rank ? `Peringkat <b>${rank}</b> dari ${u.length} untuk ${esc(m.label.toLowerCase())}` : ''}
          ${d.penduduk && pendKab ? ` · ${fmt(d.penduduk / pendKab * 100, 1)}% penduduk Sigi${thn('penduduk')}` : ''}</p>
        ${d._gabung ? `<p class="profil__catatan">Termasuk ${esc(d._gabung.join(', '))} (pemekaran) untuk kolom yang tersedia.</p>` : ''}
      </div>
      <dl class="profil__daftar">${baris}${rasio ? `<div><dt>Rasio jenis kelamin<small>${esc(TH.laki || '')}</small></dt><dd>${rasio} <small>L per 100 P</small></dd></div>` : ''}</dl>
      <div class="profil__aksi">
        <button type="button" class="btn btn--ghost btn--sm" id="profilKembali">← Seluruh Sigi</button>
        <a class="btn btn--ghost btn--sm" href="${pub && pub.unduh ? esc(pub.unduh) : 'https://sigikab.bps.go.id/id/publication'}" target="_blank" rel="noopener">${pub ? 'Unduh ' + esc(pub.judul) : 'Kecamatan Dalam Angka'}</a>
      </div>`;
    el('profilKembali').onclick = () => pilih(null, true);
  }

  function pilih(nama, zoom) {
    dipilih = nama;
    if (lapisan) lapisan.setStyle(gaya);
    if (nama && poligon[nama]) { poligon[nama].bringToFront(); if (zoom) peta.flyToBounds(poligon[nama].getBounds(), { padding: [40, 40], maxZoom: 11, duration: .6 }); profilKecamatan(nama); }
    else { if (zoom && lapisan) peta.flyToBounds(lapisan.getBounds(), { padding: [16, 16], duration: .6 }); profilKabupaten(); }
  }

  /* ---------- peta dasar ---------- */
  function gelap() { return document.documentElement.getAttribute('data-theme') === 'dark'; }
  function pasangDasar(jenis) {
    if (!peta) return;
    Object.values(dasar).forEach((l) => { if (l && l.remove) l.remove(); });
    const atr = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a> · Batas: GADM · Data: BPS';
    dasar.lapis = jenis === 'satelit'
      ? L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { maxZoom: 18, attribution: 'Citra &copy; Esri · Batas: GADM · Data: BPS' })
      : L.tileLayer(`https://{s}.basemaps.cartocdn.com/${gelap() ? 'dark_all' : 'light_all'}/{z}/{x}/{y}{r}.png`, { maxZoom: 18, subdomains: 'abcd', attribution: atr });
    dasar.lapis.addTo(peta);
    dasar.aktif = jenis;
    if (lapisan) lapisan.setStyle(gaya);
    document.querySelectorAll('[data-dasar]').forEach((b) => b.classList.toggle('is-active', b.dataset.dasar === jenis));
  }

  function mulai() {
    const wadah = el('petaSigi');
    if (!wadah) return;
    const sel = el('petaMetrik');
    sel.innerHTML = METRIK_ADA.map((m) => `<option value="${m.k}">${esc(m.label)}${esc(thn(m.k))}</option>`).join('');
    sel.value = metrik;
    sel.onchange = () => { metrik = sel.value; lapisan && lapisan.setStyle(gaya); gambarLegenda(); dipilih ? profilKecamatan(dipilih) : profilKabupaten(); perbaruiLabel(); };

    const cat = el('petaCatatanKec');
    if (cat) cat.innerHTML = 'Angka per kecamatan: tabel dinamis BPS Kabupaten Sigi (tahun data di tiap pilihan). ' +
      'Batas wilayah: GADM, disederhanakan; Kecamatan Sigi Kota belum terpisah dari Sigi Biromaru pada peta. Batas pada peta bukan rujukan batas resmi.';

    if (!window.L || !GEO) { el('petaGagal').hidden = false; profilKabupaten(); gambarLegenda(); return; }

    peta = L.map(wadah, { zoomControl: true, scrollWheelZoom: false, attributionControl: true, zoomSnap: 0.25 });
    lapisan = L.geoJSON(GEO, {
      style: gaya,
      onEachFeature: (f, layer) => {
        const nm = f.properties.nama;
        poligon[nm] = layer;
        layer.on({
          mouseover: () => { layer.setStyle({ weight: 3, color: '#1d0f08' }); layer.bringToFront(); },
          mouseout: () => layer.setStyle(gaya(f)),
          click: () => pilih(nm, true)
        });
        layer.bindTooltip('', { sticky: true, direction: 'top', className: 'petahero__tip' });
      }
    }).addTo(peta);
    peta.fitBounds(lapisan.getBounds(), { padding: [16, 16] });
    peta.on('focus', () => peta.scrollWheelZoom.enable());
    peta.on('blur', () => peta.scrollWheelZoom.disable());

    /* label nama kecamatan */
    GEO.features.forEach((f) => {
      const t = f.properties.titik;
      if (!t) return;
      L.marker(t, { interactive: false, keyboard: false, icon: L.divIcon({ className: 'petahero__nama', html: `<span>${esc(f.properties.nama)}</span>`, iconSize: null }) }).addTo(peta);
    });
    perbaruiLabel();
    pasangDasar('peta');
    document.querySelectorAll('[data-dasar]').forEach((b) => { b.onclick = () => pasangDasar(b.dataset.dasar); });
    window.addEventListener('pintar:tema', () => { if (dasar.aktif === 'peta') pasangDasar('peta'); });
    gambarLegenda();
    profilKabupaten();
  }

  function perbaruiLabel() {
    const m = info(metrik);
    Object.entries(poligon).forEach(([nm, layer]) => {
      const v = nilai(nm, metrik);
      layer.setTooltipContent(`<b>${esc(nm)}</b><br>${esc(m.label)}: ${v == null ? '–' : fmt(v, m.dec) + ' ' + esc(m.unit)}`);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mulai); else mulai();
})();

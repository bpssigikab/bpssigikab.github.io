/* ============================================================================
   Pemuat isi Indikator Strategis Kabupaten Sigi.
   Isi situs ada di assets/data.js. Angkanya diperbarui otomatis oleh GitHub
   Actions (scripts/perbarui_data.py) dari Web API BPS, jadi situs ini tidak
   memerlukan server atau kunci API apa pun di peramban.
   ========================================================================== */
window.INDIKATOR = (function () {
  "use strict";
  function awal() { return window.INDIKATOR_AWAL || null; }
  function sahih(d) { return d && typeof d === "object" && Array.isArray(d.indikator) && d.periode && d.teks; }
  function muat() {
    var d = awal();
    return Promise.resolve({ data: d, sumber: "awal", diubah_pada: d && d.meta && d.meta.terbit });
  }
  return { muat: muat, awal: awal, terhubung: function () { return false; }, sahih: sahih, berkasLebihBaru: function () { return false; } };
})();

/* ==========================================================================
   DATA — Indikator Strategis Kabupaten Sigi
   ANGKA di berkas ini diperbarui OTOMATIS tiap minggu oleh GitHub Actions
   (scripts/perbarui_data.py, sumber: Web API BPS). Jangan ubah angka manual —
   akan tertimpa. TEKS (narasi, rekomendasi, judul, catatan) boleh diubah bebas.
   Tulis {{id}} untuk menyisipkan angka kartu, mis. {{ipm}} atau {{p0}},
   dan {{banding.provIpm}} untuk angka pembanding provinsi.
   Teks boleh memakai **tebal** (dua bintang).
   ========================================================================== */

const DATA = {
  "periode": {
    "terkini": {
      "kode": "terkini",
      "nama": "Data terkini 2026",
      "volume": "Web API BPS",
      "terbit": "otomatis",
      "catatan": "Angka ditarik otomatis dari Web API BPS (tabel dinamis BPS Kabupaten Sigi dan BPS Provinsi Sulawesi Tengah). Tiap indikator memakai tahun rilis terbarunya masing-masing."
    }
  },
  "indikator": [
    {
      "id": "penduduk",
      "label": "Jumlah Penduduk",
      "abbr": "Jumlah penduduk tahun 2025",
      "value": 279104.0,
      "dec": 0,
      "unit": "jiwa",
      "kat": "demografi",
      "icon": "👥",
      "accent": "#ED7014",
      "note": "Jumlah penduduk Kabupaten Sigi menurut tabel BPS Kabupaten Sigi.",
      "tag": "",
      "tagType": ""
    },
    {
      "id": "lpp",
      "label": "Laju Pertumbuhan Penduduk",
      "abbr": "LPP 2020–2025 (dari proyeksi SP2020)",
      "value": 1.26,
      "dec": 2,
      "unit": "%",
      "kat": "demografi",
      "icon": "📈",
      "accent": "#F5B32B",
      "note": "Rata-rata pertumbuhan penduduk per tahun, dihitung dari proyeksi penduduk hasil SP2020.",
      "tag": "",
      "tagType": ""
    },
    {
      "id": "tpak",
      "label": "Tingkat Partisipasi Angkatan Kerja",
      "abbr": "TPAK · Agustus 2026",
      "value": 76.04,
      "dec": 2,
      "unit": "%",
      "kat": "ketenagakerjaan",
      "icon": "🧑‍🌾",
      "accent": "#2C8F8B",
      "note": "Sekitar {{tpak}} dari 100 penduduk usia kerja aktif di pasar kerja (bekerja atau mencari kerja).",
      "tag": "",
      "tagType": "",
      "seri": {
        "label": [
          "2021",
          "2022",
          "2023",
          "2024",
          "2025",
          "2026"
        ],
        "nilai": [
          70.76,
          72.69,
          70.94,
          75.92,
          76.03,
          76.04
        ]
      }
    },
    {
      "id": "tpt",
      "label": "Tingkat Pengangguran Terbuka",
      "abbr": "TPT · Agustus 2026",
      "value": 2.3,
      "dec": 2,
      "unit": "%",
      "kat": "ketenagakerjaan",
      "icon": "🔍",
      "accent": "#D9534F",
      "note": "Dari 100 angkatan kerja, sekitar {{tpt}} orang belum terserap pasar kerja. TPT Sulteng {{banding.provTpt}}%.",
      "tag": "",
      "tagType": "",
      "seri": {
        "label": [
          "2021",
          "2022",
          "2023",
          "2024",
          "2025",
          "2026"
        ],
        "nilai": [
          2.38,
          3.02,
          2.6,
          2.55,
          2.3,
          2.3
        ]
      }
    },
    {
      "id": "pdrb-adhb",
      "label": "PDRB Atas Dasar Harga Berlaku",
      "abbr": "PDRB ADHB · Tahun 2025",
      "value": 13589.21,
      "dec": 2,
      "unit": "miliar Rp",
      "kat": "ekonomi",
      "icon": "🏭",
      "accent": "#ED7014",
      "note": "Nilai seluruh barang dan jasa yang dihasilkan di Sigi menurut harga pada tahun berjalan.",
      "tag": "",
      "tagType": "",
      "seri": {
        "label": [
          "2023",
          "2024",
          "2025"
        ],
        "nilai": [
          11372.65,
          12562.35,
          13589.21
        ]
      }
    },
    {
      "id": "pdrb-adhk",
      "label": "PDRB Atas Dasar Harga Konstan",
      "abbr": "PDRB ADHK · Tahun 2025",
      "value": 7425.48,
      "dec": 2,
      "unit": "miliar Rp",
      "kat": "ekonomi",
      "icon": "⚙️",
      "accent": "#6C63A6",
      "note": "Nilai riil ekonomi tanpa pengaruh inflasi, dipakai untuk menghitung pertumbuhan ekonomi.",
      "tag": "",
      "tagType": "",
      "seri": {
        "label": [
          "2023",
          "2024",
          "2025"
        ],
        "nilai": [
          6904.56,
          7146.18,
          7425.48
        ]
      }
    },
    {
      "id": "lpe",
      "label": "Laju Pertumbuhan Ekonomi (Y-on-Y)",
      "abbr": "LPE · Tahun 2025",
      "value": 3.5,
      "dec": 2,
      "unit": "%",
      "kat": "ekonomi",
      "icon": "📊",
      "accent": "#4B9E5F",
      "note": "Pertumbuhan ekonomi tahunan Sigi; motor utamanya sektor pertanian, kehutanan, dan perikanan.",
      "tag": "",
      "tagType": "",
      "seri": {
        "label": [
          "2023",
          "2024",
          "2025"
        ],
        "nilai": [
          3.31,
          3.5,
          3.5
        ]
      }
    },
    {
      "id": "pdrb-kapita",
      "label": "PDRB Per Kapita Harga Berlaku",
      "abbr": "PDRB per kapita · 2025",
      "value": 49.73,
      "dec": 2,
      "unit": "juta Rp",
      "kat": "ekonomi",
      "icon": "💰",
      "accent": "#F5B32B",
      "note": "Rata-rata nilai tambah ekonomi per penduduk dalam setahun.",
      "tag": "",
      "tagType": "",
      "seri": {
        "label": [
          "2020",
          "2021",
          "2022",
          "2023",
          "2024",
          "2025"
        ],
        "nilai": [
          35.1919,
          37.4174,
          40.2541,
          42.6491,
          46.534,
          49.733
        ]
      }
    },
    {
      "id": "uhh",
      "label": "Umur Harapan Hidup",
      "abbr": "UHH · 2026",
      "value": 71.82,
      "dec": 2,
      "unit": "tahun",
      "kat": "manusia",
      "icon": "❤️",
      "accent": "#D9534F",
      "note": "Bayi yang lahir tahun ini diperkirakan hidup rata-rata hingga {{uhh}} tahun.",
      "tag": "",
      "tagType": "",
      "seri": {
        "label": [
          "2021",
          "2022",
          "2023",
          "2024",
          "2025",
          "2026"
        ],
        "nilai": [
          70.87,
          70.91,
          71.11,
          71.33,
          71.63,
          71.82
        ]
      }
    },
    {
      "id": "hls",
      "label": "Harapan Lama Sekolah",
      "abbr": "HLS · 2026",
      "value": 13.46,
      "dec": 2,
      "unit": "tahun",
      "kat": "manusia",
      "icon": "🏫",
      "accent": "#2C8F8B",
      "note": "Anak usia 7 tahun diperkirakan bersekolah selama {{hls}} tahun, setara jenjang diploma awal.",
      "tag": "",
      "tagType": "",
      "seri": {
        "label": [
          "2021",
          "2022",
          "2023",
          "2024",
          "2025",
          "2026"
        ],
        "nilai": [
          12.88,
          12.97,
          13.05,
          13.13,
          13.3,
          13.46
        ]
      }
    },
    {
      "id": "rls",
      "label": "Rata-Rata Lama Sekolah",
      "abbr": "RLS · 2026",
      "value": 9.34,
      "dec": 2,
      "unit": "tahun",
      "kat": "manusia",
      "icon": "📚",
      "accent": "#6C63A6",
      "note": "Penduduk 25 tahun ke atas rata-rata bersekolah {{rls}} tahun, setara kelas 9 (tamat SMP).",
      "tag": "",
      "tagType": "",
      "seri": {
        "label": [
          "2021",
          "2022",
          "2023",
          "2024",
          "2025",
          "2026"
        ],
        "nilai": [
          8.82,
          8.84,
          9.03,
          9.04,
          9.05,
          9.34
        ]
      }
    },
    {
      "id": "ppp",
      "label": "Pengeluaran Per Kapita Disesuaikan",
      "abbr": "PPP · 2026",
      "value": 10022.0,
      "dec": 0,
      "unit": "ribu Rp/tahun",
      "kat": "manusia",
      "icon": "🛒",
      "accent": "#4B9E5F",
      "note": "Pengeluaran riil per orang per tahun yang disesuaikan, cermin daya beli masyarakat.",
      "tag": "",
      "tagType": "",
      "seri": {
        "label": [
          "2021",
          "2022",
          "2023",
          "2024",
          "2025",
          "2026"
        ],
        "nilai": [
          8171.0,
          8498.0,
          8891.0,
          9254.0,
          9659.0,
          10022.0
        ]
      }
    },
    {
      "id": "ipm",
      "label": "Indeks Pembangunan Manusia",
      "abbr": "IPM · Tahun 2026",
      "value": 72.65,
      "dec": 2,
      "unit": "",
      "kat": "manusia",
      "icon": "🌟",
      "accent": "#ED7014",
      "note": "Kategori Tinggi (70–80). IPM Sulawesi Tengah {{banding.provIpm}}.",
      "tag": "",
      "tagType": "",
      "seri": {
        "label": [
          "2021",
          "2022",
          "2023",
          "2024",
          "2025",
          "2026"
        ],
        "nilai": [
          68.84,
          69.4,
          70.28,
          70.9,
          71.68,
          72.65
        ]
      }
    },
    {
      "id": "gini",
      "label": "Koefisien Gini (Gini Rasio)",
      "abbr": "Gini · 2025",
      "value": 0.252,
      "dec": 3,
      "unit": "",
      "kat": "pemerataan",
      "icon": "⚖️",
      "accent": "#2C8F8B",
      "note": "Di bawah 0,3: ketimpangan pengeluaran antarpenduduk tergolong rendah.",
      "tag": "",
      "tagType": "",
      "seri": {
        "label": [
          "2020",
          "2021",
          "2022",
          "2023",
          "2024",
          "2025"
        ],
        "nilai": [
          0.281,
          0.291,
          0.265,
          0.281,
          0.246,
          0.252
        ]
      }
    },
    {
      "id": "ikg",
      "label": "Indeks Ketimpangan Gender",
      "abbr": "IKG · 2025",
      "value": 0.374,
      "dec": 3,
      "unit": "",
      "kat": "pemerataan",
      "icon": "♀♂",
      "accent": "#6C63A6",
      "note": "Makin mendekati 0, makin kecil ketimpangan antara laki-laki dan perempuan.",
      "tag": "",
      "tagType": "",
      "seri": {
        "label": [
          "2020",
          "2021",
          "2022",
          "2023",
          "2024",
          "2025"
        ],
        "nilai": [
          0.56,
          0.502,
          0.47,
          0.517,
          0.444,
          0.374
        ]
      }
    },
    {
      "id": "p0",
      "label": "Persentase Penduduk Miskin",
      "abbr": "P0 · Tahun 2026",
      "value": 9.76,
      "dec": 2,
      "unit": "%",
      "kat": "pemerataan",
      "icon": "🏚️",
      "accent": "#D9534F",
      "note": "Sekitar {{p0}} dari 100 penduduk Sigi hidup di bawah garis kemiskinan. Sulteng {{banding.provMiskin}}%.",
      "tag": "",
      "tagType": "",
      "seri": {
        "label": [
          "2022",
          "2023",
          "2024",
          "2025",
          "2026"
        ],
        "nilai": [
          12.3,
          12.83,
          12.06,
          10.47,
          9.76
        ]
      }
    }
  ],
  "kategori": [
    {
      "id": "semua",
      "label": "Semua indikator"
    },
    {
      "id": "demografi",
      "label": "Demografi"
    },
    {
      "id": "ketenagakerjaan",
      "label": "Ketenagakerjaan"
    },
    {
      "id": "ekonomi",
      "label": "Ekonomi"
    },
    {
      "id": "manusia",
      "label": "Pembangunan Manusia"
    },
    {
      "id": "pemerataan",
      "label": "Pemerataan & Kemiskinan"
    }
  ],
  "pdrbTriwulan": {
    "sub": "Perbandingan lima triwulan terakhir, TW I-2025 sampai TW I-2026 (tabel PDRB triwulanan kab/kota BPS Sulteng).",
    "label": [
      "TW I-2025",
      "TW II-2025",
      "TW III-2025",
      "TW IV-2025",
      "TW I-2026"
    ],
    "adhb": [
      3247.47,
      3362.68,
      3376.66,
      3602.4,
      3569.78
    ],
    "adhk": [
      1802.44,
      1842.64,
      1841.12,
      1939.28,
      1884.65
    ],
    "lpe": [
      4.36,
      3.83,
      3.63,
      3.83,
      4.56
    ]
  },
  "pdrbTahun": {
    "sub": "Perkembangan tahunan 2023–2025.",
    "label": [
      "2023",
      "2024",
      "2025"
    ],
    "adhb": [
      11372.65,
      12562.35,
      13589.21
    ],
    "adhk": [
      6904.56,
      7146.18,
      7425.48
    ],
    "lpe": [
      3.31,
      3.5,
      3.5
    ]
  },
  "ipm": {
    "judul": "Perkembangan IPM 2022–2026",
    "sub": "Peningkatan tahun 2026 didorong oleh naiknya seluruh indikator penyusun.",
    "judulKomponen": "Indikator Penyusun IPM",
    "subKomponen": "Perubahan dibanding tahun 2025",
    "label": [
      "2022",
      "2023",
      "2024",
      "2025",
      "2026"
    ],
    "nilai": [
      69.4,
      70.28,
      70.9,
      71.68,
      72.65
    ],
    "komponen": [
      {
        "nama": "Umur Harapan Hidup saat Lahir",
        "nilai": "71,82",
        "satuan": "tahun",
        "delta": "+0,19 tahun"
      },
      {
        "nama": "Harapan Lama Sekolah",
        "nilai": "13,46",
        "satuan": "tahun",
        "delta": "+0,16 tahun"
      },
      {
        "nama": "Rata-Rata Lama Sekolah",
        "nilai": "9,34",
        "satuan": "tahun",
        "delta": "+0,29 tahun"
      },
      {
        "nama": "Pengeluaran Riil per Kapita",
        "nilai": "10.022",
        "satuan": "ribu Rp",
        "delta": "+Rp363 ribu"
      }
    ]
  },
  "generasi": [
    {
      "nama": "Post Gen Z",
      "nilai": 23.9,
      "ket": "Usia 0–14 tahun",
      "warna": "#5A3A22"
    },
    {
      "nama": "Gen Z",
      "nilai": 25.3,
      "ket": "Usia 15–29 tahun",
      "warna": "#F5B32B"
    },
    {
      "nama": "Milenial",
      "nilai": 14.8,
      "ket": "Usia 30–39 tahun",
      "warna": "#D9534F"
    },
    {
      "nama": "Gen X",
      "nilai": 25.8,
      "ket": "Usia 40–59 tahun",
      "warna": "#ED7014"
    },
    {
      "nama": "Baby Boomer & Pre Boomer",
      "nilai": 10.2,
      "ket": "Usia 60 tahun ke atas",
      "warna": "#C4A484"
    }
  ],
  "demografiStat": [
    {
      "label": "Laju pertumbuhan penduduk 2020–2025",
      "value": "1,26%"
    },
    {
      "label": "Rasio jenis kelamin (per 100 perempuan)",
      "value": "105,08"
    },
    {
      "label": "Penduduk usia produktif (15–64 th)",
      "value": "69,51%"
    },
    {
      "label": "Penduduk lansia (60 tahun ke atas)",
      "value": "10,22%"
    }
  ],
  "kemiskinan": {
    "judul": "P0, P1, dan P2 Kemiskinan 2022–2026",
    "sub": "P0 pada sumbu kanan (%), P1 dan P2 pada sumbu kiri (indeks).",
    "judulGaris": "Perkembangan Garis Kemiskinan 2022–2026",
    "subGaris": "Rupiah per kapita per bulan.",
    "label": [
      "2022",
      "2023",
      "2024",
      "2025",
      "2026"
    ],
    "p0": [
      12.3,
      12.83,
      12.06,
      10.47,
      9.76
    ],
    "p1": [
      2.01,
      2.4,
      2.52,
      1.77,
      1.71
    ],
    "p2": [
      0.48,
      0.64,
      0.7,
      0.44,
      0.51
    ],
    "garis": [
      409679.0,
      445106.0,
      463011.0,
      474669.0,
      523384.0
    ]
  },
  "banding": {
    "tahunIpm": "2026",
    "tahunMiskin": "2026",
    "tahunPenduduk": "2025",
    "tahunTpt": "2026",
    "tahunLpe": "2025",
    "tahunPdrbKapita": "2025",
    "tahunGini": "2025",
    "provIpm": 73.69,
    "provUhh": 71.29,
    "provHls": 13.36,
    "provRls": 9.39,
    "provPpp": 11390.0,
    "provMiskin": 10.46,
    "provTpt": 2.94,
    "provLpe": null,
    "provPdrbKapita": 131.643,
    "provGini": 0.279,
    "sumber": "BPS Provinsi Sulawesi Tengah, tabel dinamis Web API BPS: IPM dan komponennya, persentase penduduk miskin, TPT, PDRB triwulanan, PDRB per kapita, Gini rasio, dan proyeksi penduduk menurut kabupaten/kota."
  },
  "wilayah": [
    {
      "nama": "Tolitoli",
      "kode": "TLI",
      "bps": "7206",
      "row": 1,
      "col": 1,
      "uhh": 71.81,
      "hls": 13.19,
      "rls": 9.23,
      "ppp": 9835.0,
      "ipm": 72.05,
      "miskin": 12.08,
      "tpt": 3.28,
      "gini": 0.269,
      "pdrbKapita": 50.421,
      "lpe": 3.32,
      "laki": 120.22,
      "perempuan": 115.8
    },
    {
      "nama": "Buol",
      "kode": "BUL",
      "bps": "7207",
      "row": 1,
      "col": 2,
      "uhh": 71.84,
      "hls": 13.2,
      "rls": 9.5,
      "ppp": 9885.0,
      "ipm": 72.45,
      "miskin": 12.34,
      "tpt": 3.2,
      "gini": 0.288,
      "pdrbKapita": 56.128,
      "lpe": 3.31,
      "laki": 79.03,
      "perempuan": 75.13
    },
    {
      "nama": "Donggala",
      "kode": "DGL",
      "bps": "7203",
      "row": 2,
      "col": 1,
      "uhh": 71.23,
      "hls": 12.79,
      "rls": 8.32,
      "ppp": 9593.0,
      "ipm": 70.02,
      "miskin": 14.47,
      "tpt": 2.78,
      "gini": 0.281,
      "pdrbKapita": 58.102,
      "lpe": 3.77,
      "laki": 160.87,
      "perempuan": 152.75
    },
    {
      "nama": "Parigi Moutong",
      "kode": "PMO",
      "bps": "7208",
      "row": 2,
      "col": 2,
      "uhh": 69.16,
      "hls": 12.54,
      "rls": 8.08,
      "ppp": 11782.0,
      "ipm": 70.54,
      "miskin": 13.38,
      "tpt": 2.26,
      "gini": 0.251,
      "pdrbKapita": 54.892,
      "lpe": 3.58,
      "laki": 237.87,
      "perempuan": 226.91
    },
    {
      "nama": "Tojo Una-Una",
      "kode": "TUN",
      "bps": "7209",
      "row": 2,
      "col": 3,
      "uhh": 71.46,
      "hls": 12.72,
      "rls": 8.88,
      "ppp": 9584.0,
      "ipm": 70.73,
      "miskin": 13.42,
      "tpt": 2.68,
      "gini": 0.244,
      "pdrbKapita": 46.555,
      "lpe": 3.69,
      "laki": 88.87,
      "perempuan": 83.73
    },
    {
      "nama": "Banggai Kepulauan",
      "kode": "BKP",
      "bps": "7201",
      "row": 2,
      "col": 4,
      "uhh": 68.01,
      "hls": 13.13,
      "rls": 8.89,
      "ppp": 9158.0,
      "ipm": 69.06,
      "miskin": 10.65,
      "tpt": 1.63,
      "gini": 0.281,
      "pdrbKapita": 46.829,
      "lpe": 4.03,
      "laki": 63.52,
      "perempuan": 62.19
    },
    {
      "nama": "Kota Palu",
      "kode": "PAL",
      "bps": "7271",
      "row": 3,
      "col": 1,
      "uhh": 74.48,
      "hls": 16.54,
      "rls": 12.07,
      "ppp": 16810.0,
      "ipm": 85.33,
      "miskin": 4.75,
      "tpt": 5.48,
      "gini": 0.298,
      "pdrbKapita": 88.383,
      "lpe": 4.61,
      "laki": 199.23,
      "perempuan": 198.24
    },
    {
      "nama": "Poso",
      "kode": "PSO",
      "bps": "7204",
      "row": 3,
      "col": 2,
      "uhh": 73.41,
      "hls": 13.77,
      "rls": 10.09,
      "ppp": 10687.0,
      "ipm": 75.26,
      "miskin": 11.69,
      "tpt": 1.76,
      "gini": 0.258,
      "pdrbKapita": 53.881,
      "lpe": 3.78,
      "laki": 131.89,
      "perempuan": 124.54
    },
    {
      "nama": "Banggai",
      "kode": "BGI",
      "bps": "7202",
      "row": 3,
      "col": 3,
      "uhh": 72.71,
      "hls": 13.54,
      "rls": 9.24,
      "ppp": 11409.0,
      "ipm": 74.38,
      "miskin": 5.74,
      "tpt": 3.1,
      "gini": 0.256,
      "pdrbKapita": 116.747,
      "lpe": 3.63,
      "laki": 194.05,
      "perempuan": 187.35
    },
    {
      "nama": "Banggai Laut",
      "kode": "BLT",
      "bps": "7211",
      "row": 3,
      "col": 4,
      "uhh": 71.73,
      "hls": 13.36,
      "rls": 8.77,
      "ppp": 9522.0,
      "ipm": 71.3,
      "miskin": 12.38,
      "tpt": 3.76,
      "gini": 0.243,
      "pdrbKapita": 47.112,
      "lpe": 3.52,
      "laki": 37.79,
      "perempuan": 37.15
    },
    {
      "nama": "Sigi",
      "kode": "SGI",
      "bps": "7210",
      "row": 4,
      "col": 1,
      "home": true,
      "uhh": 71.82,
      "hls": 13.46,
      "rls": 9.34,
      "ppp": 10022.0,
      "ipm": 72.65,
      "miskin": 9.76,
      "tpt": 2.3,
      "gini": 0.252,
      "pdrbKapita": 49.733,
      "lpe": 3.5,
      "laki": 139.6,
      "perempuan": 133.64
    },
    {
      "nama": "Morowali Utara",
      "kode": "MRU",
      "bps": "7212",
      "row": 4,
      "col": 2,
      "uhh": 72.79,
      "hls": 12.71,
      "rls": 9.45,
      "ppp": 10668.0,
      "ipm": 73.14,
      "miskin": 10.3,
      "tpt": 2.4,
      "gini": 0.216,
      "pdrbKapita": 292.019,
      "lpe": 14.03,
      "laki": 67.54,
      "perempuan": 62.1
    },
    {
      "nama": "Morowali",
      "kode": "MRW",
      "bps": "7205",
      "row": 4,
      "col": 3,
      "uhh": 71.45,
      "hls": 13.41,
      "rls": 9.4,
      "ppp": 13184.0,
      "ipm": 75.28,
      "miskin": 10.08,
      "tpt": 2.78,
      "gini": 0.268,
      "pdrbKapita": 1072.574,
      "lpe": 16.26,
      "laki": 96.73,
      "perempuan": 79.35
    }
  ],
  "kecamatan": {
    "tahun": "",
    "sumber": "Tabel dinamis BPS Kabupaten Sigi (Web API BPS). Tahun data berbeda per kolom; lihat tahun_kolom. Angka yang lebih baru boleh diisi manual dari publikasi Kecamatan Dalam Angka.",
    "daftar": [
      {
        "nama": "Pipikoro",
        "penduduk": 8716.0,
        "laki": 4449.0,
        "perempuan": 4267.0,
        "luas": 956.0,
        "desa": 19.0,
        "kepadatan": 9.0,
        "rumahtangga": 2105.0,
        "nakes": 78.0,
        "tinggi": 931.0,
        "jarak": 123.0
      },
      {
        "nama": "Kulawi Selatan",
        "penduduk": 9436.0,
        "laki": 4941.0,
        "perempuan": 4495.0,
        "luas": 418.0,
        "desa": 12.0,
        "kepadatan": 23.0,
        "rumahtangga": 2072.0,
        "nakes": 69.0,
        "tinggi": 425.0,
        "jarak": 96.0
      },
      {
        "nama": "Kulawi",
        "penduduk": 15806.0,
        "laki": 8096.0,
        "perempuan": 7710.0,
        "luas": 1054.0,
        "desa": 16.0,
        "kepadatan": 15.0,
        "rumahtangga": 3726.0,
        "nakes": 88.0,
        "tinggi": 567.0,
        "jarak": 62.0
      },
      {
        "nama": "Lindu",
        "penduduk": 5254.0,
        "laki": 2775.0,
        "perempuan": 2479.0,
        "luas": 552.0,
        "desa": 5.0,
        "kepadatan": 10.0,
        "rumahtangga": 1151.0,
        "nakes": 66.0,
        "tinggi": 995.0,
        "jarak": 89.0
      },
      {
        "nama": "Nokilalaki",
        "penduduk": 6262.0,
        "laki": 3170.0,
        "perempuan": 3092.0,
        "luas": 75.0,
        "desa": 5.0,
        "kepadatan": 83.0,
        "rumahtangga": 1518.0,
        "nakes": 35.0,
        "tinggi": 651.0,
        "jarak": 35.0
      },
      {
        "nama": "Palolo",
        "penduduk": 30443.0,
        "laki": 15955.0,
        "perempuan": 14488.0,
        "luas": 626.0,
        "desa": 21.0,
        "kepadatan": 49.0,
        "rumahtangga": 7460.0,
        "nakes": 108.0,
        "tinggi": 585.0,
        "jarak": 25.0
      },
      {
        "nama": "Gumbasa",
        "penduduk": 13011.0,
        "laki": 6712.0,
        "perempuan": 6299.0,
        "luas": 176.0,
        "desa": 7.0,
        "kepadatan": 74.0,
        "rumahtangga": 2980.0,
        "nakes": 56.0,
        "tinggi": 131.0,
        "jarak": 32.0
      },
      {
        "nama": "Dolo Selatan",
        "penduduk": 16083.0,
        "laki": 8312.0,
        "perempuan": 7771.0,
        "luas": 585.0,
        "desa": 12.0,
        "kepadatan": 28.0,
        "rumahtangga": 3671.0,
        "nakes": 67.0,
        "tinggi": 131.0,
        "jarak": 13.0
      },
      {
        "nama": "Dolo Barat",
        "penduduk": 14008.0,
        "laki": 7081.0,
        "perempuan": 6927.0,
        "luas": 112.0,
        "desa": 12.0,
        "kepadatan": 125.0,
        "rumahtangga": 3251.0,
        "nakes": 90.0,
        "tinggi": 46.0,
        "jarak": 7.0
      },
      {
        "nama": "Tanambulava",
        "penduduk": 22926.0,
        "laki": 11864.0,
        "perempuan": 11062.0,
        "luas": 36.0,
        "desa": 5.0,
        "kepadatan": 636.0,
        "rumahtangga": 5073.0,
        "nakes": 71.0,
        "tinggi": 32.0,
        "jarak": 7.0
      },
      {
        "nama": "Dolo",
        "penduduk": 8773.0,
        "laki": 4488.0,
        "perempuan": 4285.0,
        "luas": 56.0,
        "desa": 9.0,
        "kepadatan": 156.0,
        "rumahtangga": 2146.0,
        "nakes": 50.0,
        "tinggi": 76.0,
        "jarak": 17.0
      },
      {
        "nama": "Sigi Biromaru",
        "penduduk": 47709.0,
        "laki": 24261.0,
        "perempuan": 23448.0,
        "luas": 290.0,
        "desa": 10.0,
        "kepadatan": 165.0,
        "rumahtangga": 11123.0,
        "nakes": 110.0,
        "tinggi": 65.0,
        "jarak": 14.0
      },
      {
        "nama": "Marawola",
        "penduduk": 23356.0,
        "laki": 11682.0,
        "perempuan": 11674.0,
        "luas": 39.0,
        "desa": 11.0,
        "kepadatan": 604.0,
        "rumahtangga": 5371.0,
        "nakes": 132.0,
        "tinggi": 71.0,
        "jarak": 18.0
      },
      {
        "nama": "Marawola Barat",
        "penduduk": 7097.0,
        "laki": 3572.0,
        "perempuan": 3525.0,
        "luas": 151.0,
        "desa": 12.0,
        "kepadatan": 47.0,
        "rumahtangga": 2047.0,
        "nakes": 53.0,
        "tinggi": 1350.0,
        "jarak": 33.0
      },
      {
        "nama": "Kinovaro",
        "penduduk": 10541.0,
        "laki": 5342.0,
        "perempuan": 5199.0,
        "luas": 70.0,
        "desa": 10.0,
        "kepadatan": 150.0,
        "rumahtangga": 2614.0,
        "nakes": 64.0,
        "tinggi": 201.0,
        "jarak": 20.0
      },
      {
        "nama": "Sigi Kota",
        "desa": 11.0,
        "nakes": 9.0
      }
    ],
    "tahun_kolom": {
      "penduduk": "2019",
      "laki": "2019",
      "perempuan": "2019",
      "luas": "2019",
      "kepadatan": "2019",
      "rumahtangga": "2019",
      "desa": "2023",
      "nakes": "2023",
      "tinggi": "2019",
      "jarak": "2019"
    },
    "keterangan_kolom": {
      "penduduk": "Jumlah penduduk (jiwa)",
      "laki": "Penduduk laki-laki (jiwa)",
      "perempuan": "Penduduk perempuan (jiwa)",
      "luas": "Luas wilayah (km²)",
      "kepadatan": "Kepadatan penduduk (jiwa/km²)",
      "rumahtangga": "Jumlah rumah tangga",
      "desa": "Jumlah desa/kelurahan",
      "nakes": "Tenaga kesehatan (orang)",
      "tinggi": "Tinggi wilayah (m dpl)",
      "jarak": "Jarak ke ibu kota kabupaten (km)"
    }
  },
  "rekomendasi": [
    {
      "judul": "Pengentasan Kemiskinan Tepat Sasaran",
      "poin": [
        [
          "Intervensi kelompok rentan",
          "Perkuat bantuan sosial terpadu bagi rumah tangga miskin dan rentan miskin, terutama di kecamatan pegunungan dengan akses terbatas."
        ],
        [
          "Pemberdayaan ekonomi keluarga",
          "Program usaha mikro dan pelatihan keterampilan yang menyasar langsung rumah tangga miskin."
        ]
      ]
    },
    {
      "judul": "Hilirisasi Pertanian & Perkebunan",
      "poin": [
        [
          "Nilai tambah hasil bumi",
          "Dorong pengolahan kakao, kopi, kelapa, dan hortikultura di dalam daerah agar nilai tambah dinikmati petani Sigi."
        ],
        [
          "Akses modal & pasar",
          "Fasilitasi permodalan, sertifikasi, dan pemasaran bagi UMKM olahan pangan."
        ]
      ]
    },
    {
      "judul": "Kesetaraan Gender & Ketahanan Keluarga",
      "poin": [
        [
          "Pemberdayaan perempuan",
          "Tingkatkan akses perempuan pada modal usaha, pelatihan, dan layanan kesehatan reproduksi untuk menekan IKG."
        ],
        [
          "Layanan ramah lansia",
          "Siapkan perlindungan sosial dan fasilitas kesehatan ramah lansia sejak dini."
        ]
      ]
    },
    {
      "judul": "Kualitas SDM & Pendidikan",
      "poin": [
        [
          "Menaikkan RLS",
          "Program kejar paket dan beasiswa pendidikan tinggi untuk penduduk dewasa."
        ],
        [
          "Vokasi sesuai potensi lokal",
          "Selaraskan kurikulum SMK dengan kebutuhan pertanian modern, pariwisata, dan konstruksi."
        ]
      ]
    },
    {
      "judul": "Optimalisasi Bonus Demografi",
      "poin": [
        [
          "Lapangan kerja bagi generasi muda",
          "Ruang inkubasi usaha dan kewirausahaan muda untuk menyerap angkatan kerja Gen Z dan Milenial."
        ],
        [
          "Menjaga TPT tetap rendah",
          "Bursa kerja berkala dan kemitraan antara dunia usaha dan angkatan kerja lokal."
        ]
      ]
    }
  ],
  "narasi": {
    "ekonomi": [
      [
        "PDRB Harga Berlaku — Rp{{pdrb-adhb}} miliar",
        "Nilai total barang dan jasa yang dihasilkan di Kabupaten Sigi secara nominal. Perekonomian Sigi **bertumpu pada sektor pertanian, kehutanan, dan perikanan**, didukung perdagangan dan konstruksi."
      ],
      [
        "PDRB Harga Konstan — Rp{{pdrb-adhk}} miliar",
        "Nilai riil ekonomi Sigi tanpa pengaruh kenaikan harga — dasar perhitungan pertumbuhan ekonomi."
      ],
      [
        "Laju Pertumbuhan Ekonomi — {{lpe}}%",
        "Ekonomi Sigi **tumbuh positif** secara tahunan. Menjaga laju ini perlu hilirisasi hasil pertanian dan perkebunan agar nilai tambah tinggal di daerah."
      ],
      [
        "PDRB Per Kapita — Rp{{pdrb-kapita}} juta",
        "Rata-rata nilai tambah per penduduk. Angka per kapita Sulawesi Tengah jauh lebih tinggi karena terdorong industri pengolahan nikel di Morowali dan Morowali Utara."
      ]
    ],
    "manusia": [
      [
        "Umur Harapan Hidup — {{uhh}} tahun",
        "Bayi yang lahir tahun ini diperkirakan dapat hidup hingga {{uhh}} tahun — cermin derajat kesehatan: akses layanan medis, sanitasi, dan gizi."
      ],
      [
        "Harapan Lama Sekolah — {{hls}} tahun",
        "Anak usia 7 tahun diharapkan dapat menempuh pendidikan selama {{hls}} tahun — lebih dari 12 tahun wajib belajar."
      ],
      [
        "Rata-Rata Lama Sekolah — {{rls}} tahun",
        "Penduduk usia 25 tahun ke atas rata-rata bersekolah {{rls}} tahun — setara tamat SMP/sederajat. Selisihnya dengan HLS menunjukkan generasi muda bersekolah lebih lama daripada generasi sebelumnya."
      ],
      [
        "Pengeluaran Per Kapita — Rp{{ppp}} ribu",
        "Pengeluaran riil per kapita yang disesuaikan — **menggambarkan daya beli dan standar hidup** masyarakat."
      ],
      [
        "IPM — {{ipm}}",
        "IPM Sigi tergolong kategori **Tinggi** (70–80) dan terus meningkat sejak 2022, ditopang naiknya seluruh komponen: kesehatan, pendidikan, dan daya beli."
      ]
    ],
    "pemerataan": [
      [
        "Koefisien Gini — {{gini}}",
        "Angka di bawah 0,3 menunjukkan ketimpangan pengeluaran antarpenduduk di Sigi **tergolong rendah**."
      ],
      [
        "Indeks Ketimpangan Gender — {{ikg}}",
        "IKG mengukur ketimpangan laki-laki dan perempuan dalam kesehatan reproduksi, pemberdayaan, dan pasar kerja. **Makin kecil makin setara.**"
      ]
    ]
  },
  "sumber": [
    [
      "Tabel dinamis BPS Kabupaten Sigi (Web API BPS, domain 7210)",
      "BPS Kabupaten Sigi"
    ],
    [
      "Tabel dinamis BPS Provinsi Sulawesi Tengah: IPM dan komponen, kemiskinan, ketenagakerjaan, PDRB, dan Gini menurut kabupaten/kota (Web API BPS, domain 7200)",
      "BPS Provinsi Sulawesi Tengah"
    ],
    [
      "Survei Sosial Ekonomi Nasional (Susenas)",
      "Badan Pusat Statistik"
    ],
    [
      "Survei Angkatan Kerja Nasional (Sakernas)",
      "Badan Pusat Statistik"
    ],
    [
      "Proyeksi Penduduk Kabupaten/Kota Provinsi Sulawesi Tengah 2020–2035 (SP2020)",
      "Badan Pusat Statistik"
    ],
    [
      "Produk Domestik Regional Bruto Kabupaten/Kota",
      "BPS Provinsi Sulawesi Tengah"
    ]
  ],
  "sorotan": {
    "ekonomi": [
      {
        "judul": "Pertumbuhan Ekonomi TW I-2026 (y-on-y)",
        "nilai": "4,56%",
        "gaya": "",
        "ket": "Dibanding triwulan yang sama tahun sebelumnya; -2,82% dibanding triwulan sebelumnya (q-to-q)."
      },
      {
        "judul": "Pertumbuhan kumulatif s.d. TW I-2026 (c-to-c)",
        "nilai": "4,56%",
        "gaya": "",
        "ket": "PDRB sejak awal tahun 2026 dibanding periode yang sama tahun sebelumnya."
      },
      {
        "judul": "Kontribusi terhadap PDRB Sulawesi Tengah",
        "nilai": "3,24%",
        "gaya": "",
        "ket": "PDRB ADHB Sigi TW I-2026 Rp3.569,78 miliar dari Rp110.264,07 miliar jumlah 13 kabupaten/kota."
      }
    ],
    "kemiskinan": [
      {
        "judul": "Penduduk miskin {{banding.tahunMiskin}}",
        "nilai": "{{p0}}%",
        "gaya": "amber",
        "ket": "Persentase penduduk yang pengeluaran per kapitanya di bawah garis kemiskinan."
      },
      {
        "judul": "Garis kemiskinan {{banding.tahunMiskin}}",
        "nilai": "Rp{{kemiskinan.garis}}",
        "gaya": "",
        "ket": "Penduduk dikategorikan miskin bila pengeluaran per kapita per bulan di bawah garis kemiskinan."
      },
      {
        "judul": "Dibanding Sulawesi Tengah",
        "nilai": "{{banding.provMiskin}}%",
        "gaya": "amber",
        "ket": "Persentase penduduk miskin Provinsi Sulawesi Tengah pada tahun yang sama."
      }
    ]
  },
  "teks": {
    "hero": {
      "judul": "Potret **pembangunan daerah** Kabupaten Sigi dalam angka",
      "lede": "Ringkasan indikator strategis yang menggambarkan kondisi demografi, ketenagakerjaan, perekonomian, pembangunan manusia, serta pemerataan dan kemiskinan Kabupaten Sigi — angka ditarik otomatis dari Web API BPS.",
      "mini": [
        "penduduk",
        "lpe",
        "ipm",
        "tpt"
      ]
    },
    "pengantar": {
      "ringkasan": "Indikator strategis digunakan untuk mengukur **capaian pembangunan daerah** di berbagai bidang, meliputi demografi, ekonomi, kesejahteraan masyarakat, dan kesetaraan gender. Cari indikator atau saring berdasarkan kategori.",
      "ekonomi": "Produk Domestik Regional Bruto (PDRB) adalah nilai keseluruhan semua barang dan jasa yang diproduksi pada suatu wilayah dalam jangka waktu tertentu — atas dasar harga berlaku (nominal) dan atas dasar harga konstan (riil).",
      "kependudukan": "Kabupaten Sigi berbatasan langsung dengan Kota Palu, dengan struktur usia yang **didominasi kelompok usia produktif**.",
      "manusia": "Indeks Pembangunan Manusia Kabupaten Sigi mencapai **{{ipm}}** — kategori Tinggi, dan meningkat konsisten sejak 2022.",
      "kemiskinan": "Persentase penduduk miskin Sigi tercatat **{{p0}}%** pada {{banding.tahunMiskin}}. Grafik di bawah memperlihatkan pula kedalaman (P1) dan keparahan (P2) kemiskinan.",
      "rekomendasi": "Lima arah kebijakan yang dapat dipertimbangkan berdasarkan angka-angka di atas. Klik untuk membuka rinciannya.",
      "sumber": "Seluruh angka pada halaman ini ditarik dari tabel dinamis Badan Pusat Statistik melalui Web API BPS. Halaman ini adalah penyajian ulang dalam bentuk web, bukan publikasi resmi BPS."
    },
    "peta": {
      "judul": "Peta Sebaran Kabupaten/Kota di Sulawesi Tengah, 2025",
      "sub": "Kartogram skematis — posisi kotak mendekati letak geografis. Klik atau arahkan kursor untuk melihat rincian.",
      "catatan": "Angka penduduk kabupaten/kota adalah **proyeksi penduduk SP2020** (ribu jiwa); angka kemiskinan adalah persentase penduduk miskin (P0)."
    },
    "generasi": {
      "judul": "Komposisi Penduduk Menurut Generasi, 2025",
      "sub": "Gen Z dan Post Gen Z menyumbang sekitar separuh penduduk — peluang bonus demografi."
    },
    "catatanKependudukan": [
      {
        "judul": "Total Penduduk Kabupaten Sigi",
        "warna": "",
        "isi": "**{{penduduk}} jiwa**. Struktur umurnya didominasi usia produktif — modal penting pembangunan bila diimbangi lapangan kerja dan layanan publik."
      },
      {
        "judul": "Ketenagakerjaan",
        "warna": "teal",
        "isi": "TPAK **{{tpak}}%** menunjukkan sebagian besar penduduk usia kerja aktif di pasar kerja. TPT **{{tpt}}%** tergolong rendah — dari 100 angkatan kerja, sekitar {{tpt}} orang belum terserap pasar kerja. TPT Sulawesi Tengah {{banding.provTpt}}%."
      }
    ],
    "penutup": {
      "judul": "Catatan penutup",
      "isi": "Kabupaten Sigi mencatat **IPM kategori Tinggi** dan pengangguran yang rendah. Tantangan utamanya adalah **menurunkan angka kemiskinan** lebih cepat dan **meningkatkan nilai tambah sektor pertanian** sebagai tulang punggung ekonomi daerah."
    },
    "catatanSumber": "Tanda * menunjukkan angka sementara dan ** angka sangat sementara, sesuai penulisan BPS. Angka kependudukan kabupaten/kota merupakan hasil proyeksi penduduk 2020–2035 berbasis Sensus Penduduk 2020.",
    "footer": {
      "deskripsi": "Dashboard web interaktif indikator strategis Kabupaten Sigi. Angka ditarik otomatis dari Web API BPS. Bukan produk resmi Badan Pusat Statistik.",
      "slogan": "Bersama data, wujudkan Sigi maju, inklusif, dan berkelanjutan."
    }
  },
  "pembaruan": {
    "ipm": {
      "periode": "2026",
      "pada": "2026-11-25T09:06:47+08:00",
      "oleh": "Web API BPS — tabel 278 BPS Sulteng"
    },
    "kemiskinan": {
      "periode": "2026",
      "pada": "2026-11-25T09:06:47+08:00",
      "oleh": "Web API BPS — tabel 90 BPS Sulteng"
    },
    "naker": {
      "periode": "2026",
      "pada": "2026-11-25T09:06:47+08:00",
      "oleh": "Web API BPS — tabel 91 BPS Sulteng"
    },
    "pdrbTw": {
      "periode": "TW I-2026",
      "pada": "2026-11-25T09:06:47+08:00",
      "oleh": "Web API BPS — tabel 287 BPS Sulteng"
    }
  },
  "meta": {
    "terbit": "2026-11-25T09:06:47+08:00",
    "versi_berkas": "sigi-awal",
    "catatan": "Angka diperbarui otomatis dari Web API BPS oleh GitHub Actions.",
    "sinkron_terakhir": "2026-11-25T09:06:47+08:00"
  },
  "kependudukanAngka": {
    "tahun": "2025",
    "total": 279104.0,
    "laki": 143006.0,
    "perempuan": 136098.0
  },
  "rilis": {
    "brs": [
      {
        "judul": "Pada tahun 2026, jumlah penduduk miskin di Kabupaten Sigi berjumlah 24,43 ribu orang (9,76 persen dari total penduduk).",
        "tanggal": "2026-11-05",
        "ringkas": "Pada tahun 2026, jumlah penduduk miskin di Kabupaten Sigi berjumlah 24,43 ribu orang (9,76 persen dari total penduduk). Secara persentase, persentase penduduk miskin di kabupaten Sigi Tahun 2026 (9,76 persen) menurun dibandingkan dengan tahun 2025 (10,47 perse",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQADDbcDyGwzLGuYlTu2lTbUXWCCpqb-FNPRJu1yPM4zYnE1-Phx9WugIr6cZ_AQ9TKJNYnBGnIyYP4DHeVB7pC99XLKKeUJppoO_Zfk7dxEGBjkvNTc8AW2gBBJFHc0-8ERoIO-78svjh6qqxbED-MGhJ8jAK5nBbUMC56QDKwUxHNNQSceeCKzMW6Ayl7pdPPHH0_yfUK-tkIsVchXphys9fuUjznAnUleJKVNaBd95dfWahhxtzY5cnMkRpnppb7Scq6l4gYS-n0ls4CTwxM",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQADWQ_LzpkBS3j_JH74fyMLY4Gae0LMzK15zca1AxfjQqCjwnzUma4Gzb3-XRfqNAPegkYpHFY3IbiaIpqgVVkoMXqe5M5B321Cjc6JQdevayMEgz72nRqxjhOYMiGc4tcL2o46ug3kHHgwgI02iVIGHPkuYmMavL_K8jJSzOiZyIJkDzBw4l9FBjYx2NSP3IPYIeF4s0lK1M-Lkch8UY82D8z5D-7WdmCb7SA3kfctE3zn7dEIiNA6Wci6Hc7-949NbbHc4XeVKfasrnc7gurC5gxWzqWZCjg"
      },
      {
        "judul": "Pertumbuhan IPM 2026 mengalami percepatan dari tahun sebelumnya. Seluruh dimensi pembentuk IPM mengalami peningkatan terutama standar hidup layak.",
        "tanggal": "2026-11-05",
        "ringkas": "Pembangunan manusia di Kabupaten Sigi terus mengalami kemajuan. Status pembangunan manusia di Kabupaten Sigi sudah berada di level “tinggi”. Selama 2023–2026, IPM Kabupaten Sigi terus mengalami peningkatan setiap tahunnya, dari 70,28 pada tahun 2023 menjadi 72",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQADgS9KPT_fnaElp9LSeHkzZr02jEAAQ1pBB0PABSs6nsziUbt20BS-lV6w_PXvclPiuQKFpJD46-BL3mZYIzGN-AwLK_dalQjaUGj57CrbhJOlr3cWHhiaVDUpTCbbPeDHPmentKSLFCnvVPKBrzGMBuwQUMl2MwKUzMu9pjyKss4gEkpqDLu4d6oZMu4nnqwpWzHd4YSgi5PZDl6qoFkHBUx880gqW_-A5J439KJwTt6CpH8VmgzqyE413B5s6m268lQkBToHGQNgokFo94FhfyVBDkd27aie9aRH21E",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQAD71pj3B9b9OvhJI7oTyCndhm7lWQH2gf8ELmG6ApQNDHGNN37yQXGI9ApLV026TpniSGr4ByG0iV_9_JFsWmClr81L6_B7sr80SNiOpHJSf7COpfUDOF1r4mzxpDiMgORKiiBn6T8tz2Jba5SvF2XXmSIWQ0RsMmiGQgqg6EKoVgYiFGmwQysGVMRXm_2lx9lgHXnZS-lD-ZzogtwTc4F_QIYgINNLw-U4SfGwqmUvxSOYHBpuWr8nhCcwrZj-cEGL1KCH3B0Jsu2IExdFgoIXTZ-S4xw9tEuylmkzgg8anrD8qvjydo"
      },
      {
        "judul": "Indeks Pembangunan Manusia (IPM) Kabupaten Sigi tahun 2025 mencapai 71,68, meningkat 0,78 poin dibandingkan tahun sebelumnya (70,90).",
        "tanggal": "2026-04-06",
        "ringkas": "Pembangunan manusia di Kabupaten Sigi terus mengalami kemajuan. Status pembangunan manusia di Kabupaten Sigi sudah berada di level “tinggi”. Selama 2022–2025, IPM Kabupaten Sigi terus mengalami peningkatan setiap tahunnya, dari 69,40 pada tahun 2022 menjadi 71",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQAD6C_FBizKElmP4ES5lHauZ3gJ-SrSP4eqnDFwzgOCPnJ_UDXKcEt-w5f3n6M71gMvUhCmf3keI8rH9YTXwe2Z9tXrw6NRvrAlQQrvvnwfd20XiqHxCG6CxhpcnjRO2ehlYV_PJONwlfQ9Gt-tZgiGyaERSbYx2g7zdyK-j-4aub3VVehnAfIbmCx-ogUI8kHNh0lVh0xo2fwx60xlZZPO4f1rFvgrdKotzd3HXTYEl_t8--im_itKHdpjp0dMNgNQM8NWuXB_5oqNSUokGAM1rmMQIT7am1_fLuck7WT80GsrZzB4B0XSZ1fUh0TUdE0V2JSmP0wUvdlBMCfLNUHvWYoqX3Rb6ql2mcrNvIHdkM7LCyqhJppNfiafi9U5fKVi",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQADvJtxhcAcPc3VxTIBGo4FmsejcycAKA3Ov3Z3QQE1BC7xPPYYRS3MVIvJAOWrfd8IFxsg7vwr9QZ900FkxmXfcYBXSCJeXRWakkgAGtqHpD3qaWNhnNDij0JzYvaEdPgtly-UPy9UipXJnwtWSHPKtAX6-xW3kSh66d6pIG6ww-wY-gQcJIT4XFiWz7K9w4uvOZFLkuxEU-f8zVtuRQPhBfCI2UbPkMwfwF8z7AGRwL234vV1Y6L0bXD7TXTOa0QR-hdFF1C1dd_PwE3jf2-aNowPC9HoaCa8e9XL4U6F5yJeu_ZP7GaXiQ6SLge_Cmry7EfxVh_qTaoyDrsh-5BC9-2b3g6Mxd5ir1u4Yxk9SmC05prk0MIYb4mbdeD2MuPvZG0EfldT8ydVIo8BBQ"
      },
      {
        "judul": "Profil Kemiskinan di Kabupaten Sigi 2025",
        "tanggal": "2026-03-06",
        "ringkas": "Pada tahun 2025, jumlah penduduk miskin di Kabupaten Sigi berjumlah 26,03 ribu orang (10,47 persen dari total penduduk). Secara persentase, persentase penduduk miskin di kabupaten Sigi Tahun 2025 (10,47 persen) menurun dibandingkan dengan tahun 2024 (12,06 per",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQADaFc6ZYaYLvjOLoUfkg5GSkfUKLWKs1SnZYuOWu0mTWi6BqLQOXjLYQzVzIMtqSVsiT9aaU8EgEFctKurBDbVyPhsSDqmLnZ00sXrXnXkwLJ32PPtUJ99bhrK7t1BhAC3gMnTZKACwgf56CWBWuSHn0Gz38ftTg7ixDCJ6tHkgr8o6W-hkCx6g_PKREFJhpdV-iJ30bY4JTQMrIYz7ExmrDNu_SK_tumWv_SIzFMsExc7OCQJyRpROLWLxgfXKP0T-ObikigA5Tl25vM",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQADh90J_-TVC-5flfAwVX8vPDXNrP9fctd1SsSuHLeH_QUwI0NkWRaa-AWWKHszLgFFY-Z8Vzjr6jL_7lamu-P8vt0_-1gI6NUSz0VL1lmbGnDHmo3DmxZdTDuKm2vWuVxO08RET8NnnxH7JnSh4uN4p7BcJGwPAWMkVxxNtgbEu9GQYXt9sz2dXwMiS5XbSufzOFerL0lS4vcDidMit8u9qIJmH9fu6hiOgb2ArpFyq9MwA5PJX0x3F_uSx35A0jEsGQwALbxX_Iz6AjjHnb1NHfcGYzE"
      },
      {
        "judul": "Profil Kemiskinan di Kabupaten Sigi 2024",
        "tanggal": "2026-03-06",
        "ringkas": "Pada tahun 2024, jumlah penduduk miskin di Kabupaten Sigi berjumlah 29,80 ribu orang (12,06 persen dari total penduduk). Secara persentase, persentase penduduk miskin di kabupaten Sigi Tahun 2024 (12,06 persen) menurun dibandingkan dengan tahun 2023 (12,83 per",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQADNtUUKZNrhWpJxuoV47sWcnjHmV4AfqKpYbqNZfoeNngbL8EcaAMxQJ6djd7B_yu2bUWanQgaSWC27c7hl2TejzxfHDZnqYG0g_3hClkL002lYELiwJ7MwcJNdRMv4RAACdw_Qi3_kg94yH9rgCECeVpNS_9eMGMZgXvcqdHhmIJ91xNVJLFY5sheU-WNY6YoDBT2zZBEs0ErZbd1QPvLkwzHCbRCPT6F0pkmtJJMRt3Ra8JinpGS7_hVWq8wwXQTgwIqlhOQyhOxJtQ",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQADLcsaW5Gdr4UHPbio58WfG0Ym9a9lvC7bR7NlnYz9BUfx4r-N5IJgVRFpstY0z9imM2JjubS00M6GYyK6noCDtAc2FU1CqZa9lUpWXDBfRpBbgZDFyBiwz4IyXZ1Hs1k7QEUUcdbMwjS4EcNEQ0ULvMgcrLHVrI5KLDSNwWkELJomM8vdbqPbbrTQb5EglheRj4-vPOtV4F_UOAxJndMGGf6HkH-PpBzTVIINUzuIERhAmkxgk0iDOn4g85-Bs6z3gPV6pY0FIRyzcpZqb13cQHR4Kyk"
      },
      {
        "judul": "Ekonomi Kabupaten Sigi Tahun 2024 tumbuh 3,50 persen",
        "tanggal": "2026-02-10",
        "ringkas": "Ekonomi Kabupaten Sigi tahun 2024 tumbuh sebesar 3,50 persen. Dari sisi produksi, pertumbuhan tertinggi terjadi pada Lapangan Usaha Transportasi dan Pergudangan mengalami pertumbuhan tertinggi sebesar 12,92 persen. Sementara dari sisi pengeluaran, pertumbuhan ",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQADC8nvLtDD64dJh__s2Kq1f4Ep4_osG0Ok_mLS0WVEmRpcahQD0SkLzGt4PtvYhwUgNbcPTkk0wtQfBPYjbhurq-RJ0h6BNXViAOWPhCnE5h33xiVRIV2eXcmJp-Ul7XFmS0KWgyjE9Q2U6W1EB2MZoU3kQJ4-NA-vVRCJ3XFIWMp9pM0mdTOUW-lut3eyIVOhTc8M2OcxElt_JJGiT1sm43TVXczAig9gQYDARGsjM03jxtu5fGBXNzJ6yFIxTQgYRFbOxrLvy5ANMTkRA-PxQSCg4gxARhE",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQADmOZqXBK_dO-zDn_0tp1CcVHuJOAx5OjrjiW1fVSd1eHEUsyCK8_adNOmkNI_uVDYgJzoMR2SHOmgFD0keqAMeULZgZt5C5W9byWBhT3GCXeAhT1PxxU8X7WnqqrVx3BkW7-7SynarpFJJQDUMTrSymsgchx1JpHYupaGIJ3YfZsIfO7GgA1KGWnVTWw_Wr4Qtz27gsmZNaJGiO0fl9IGjjIolwIhWeJNVYKSbO-ljbcbgovzaaW38imADHkprltUra7nQaBzek2J8cKxk8VsPDkRHl1Hr72wlpUSf0Y9GoM"
      },
      {
        "judul": "Indeks Pembangunan Manusia (IPM) Kabupaten Sigi tahun 2023 mencapai 70,28, meningkat 0,88 poin dibandingkan tahun sebelumnya yang sebesar 69,40",
        "tanggal": "2026-02-10",
        "ringkas": "Pembangunan manusia di Kabupaten Sigi terus mengalami kemajuan. Status pembangunan manusia di Kabupaten Sigi sudah berada di level “tinggi”. Selama 2020–2023, IPM Kabupaten Sigi terus mengalami peningkatan setiap tahunnya, dari 68,48 pada tahun 2020 menjadi 70",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQADTPPtLTPlwTH30JPUJDmRwUYLi36htyw1EcYgIbLdX7ZDEk3R8HEJb6SgDG2HAcJSRiYMX7D5rzbawFhkMH-VbAZ8-mOn21hIg1c6ISWd-WqFDj-Wv-GyufMno4FDbLCUC8wla6BKD7_r_tv_lMu938ouE82-95K7vYtVve-l4eTfpP0qdtqeLkL3e_o9cKc6O9aqnPZhF1XvlGpdXMnCViDMFP7qM4JrCkB9ZjUTKH8KkUahHEj0zr4TK-40sja2YsOz7YKFxdoVpXY0BnShGqa-hFhyj3rq6iTmRJgHnLOPCfMhWOujD8ZlvTSOxDszyjKTRSneYd-3N-VnUSj6h0Qeubc_-1T8ryCg2k81tUvfo3pxhv02ewPrtFEOYd_gQ-_MzQ9zTnG5zMojFXl9Tdrv",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQADmt-Y1DLOhAg8Isk0tWM1kNfo07SuRuEyrBr3qmREcCzyZzn9iDIVbxheRcwgCjagOIvU7W_OU1UrnrgZ2-2INWc3A44m38Ar75wVcaaZJgQ3aSmvVgRJQ9rZ2L7sWK-13M7Doz9uT_66K22eRDp6jJqyxyNLAUTcKNtKYGqsksAwgqA7FvkLi-kIThV8FPZgbOD5AzYb6QgrFRdvV8sP7tN1SqjTNT3h8qRaEgFoFVoLNCqhJXjjP3zEBfHslSuTyt1GxLynYXwn0hWWFodcl0_FuaVwev3QGvaPNKVuUxE8TKeqC6eX_bgiB0GDp8zTm_FlOIRaWEPLl--qy7fZOpB7IbrF_WBUOqafzXmlLnDabYkhFc1m4MZbSr7C2i1RL9A_ezs7a7Szy3xt0-KkeDxZd7qMILye7RtF"
      }
    ],
    "publikasi": [
      {
        "judul": "Statistik Keuangan Pemerintah Desa Kabupaten Sigi 2024 dan 2025",
        "tanggal": "2026-11-11",
        "ringkas": "Publikasi Statistik Keuangan Pemerintah Desa Kabupaten Sigi 2024 dan 2025 merupakan publikasi yang disusun dan diterbitkan oleh Badan Pusat Statistik (BPS) Kabupaten Sigi untuk memenuhi kebutuhan akan data statistik keuangan desa. Data yang disajikan dalam pub",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQAD9xyayMpwFRlJriAB2YHwoz_WNr6O5DLRawOiYPp6DZx31pk-GjUDVt3ZckCnZKI0BO6y0k5mXLUIFecum9y_PBzMl556BU59aQJR_qdZoaS5qGghbZ6Uc56nLEnPdAPVOwbIhjxZNhugklkRUPS3eshxf3DmVZP-PCDP6SLxRBLbKsSbSyTTwaNlxpTF4C-e-WmiFgk2KtD_CSKba4Dfm2riBbifOouiEqrR3uv83gFUhdAUmSLOp3gSRp8BQ7salgUee8ZHtaUMdxAXGsCcl1WzgzqQs-p4vCWch32CiglvLJGBtLcJ02dyfOhWkETADH4wJBa5XSfemTnwG0nwnNNaRDBSsGGjqA",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQADMpvxv2E50OJZGrmppMyzUHe3RF4quXp0n7CLh2D6Juo0YpdceVXslkQyUBbE9Qc2VDEzE-FUttIXi2EUco2S_P3WDqV5rZcSMIwKs4H5leZunOpkwX5_WitFigV6s_mHxZj7i2GcapYBtbEA-hb_skm95PpSB7kM3PbsdtEjqhYNCA7axltxip48_akUKJ1gOuOLhRAhGPUgGuHJr19g-s-WcC66GbNf_2CuLXAFDFp5hI8WvdjwtFjPmbPo-18pVt7Go7j-UWf8bW7kBcoJM8k5dJJfvjF_pkgGCWmGNKWUr5GfyfLyzfFut9PKfZexcULE-L0o-_tnIoSS6G4oijJkseUiKB9s_KhlCw",
        "ukuran": "3.82 MB"
      },
      {
        "judul": "Indeks Pembangunan Manusia 2026",
        "tanggal": "2026-11-05",
        "ringkas": "Pembangunan manusia adalah suatu proses pembangunan yang bertujuan agarsetiap manusia mempunyai lebih banyak pilihan, khususnya dalam kesehatan, pendidikan dan pendapatan. Pembangunan manusia sebagai ukuran kinerja pembangunan secara keseluruhan dibentuk melal",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQADR9IwdSu0G2ZqoGuAj0RndGs7dWiuW08B62rC6BNqwEJmgggnWRm0MQ_bvIon1jOWcHwqQuCkuzy30G0U1WBRI2lGkOaAcnh9bgrI671NaNioticrVFzt8mNYjwHcHJyi5hS9JYgE__ie8VAWY-iLUJ02pD22mEb-RnVmgd57CX8xq3x3GP2G1zN4sDIy_9YK1QlexwJcsBedPMuKgYs_h1B2gNRM6xjjpoGmTofglS7BewPQ_lUsFyRo2hUHj_Z4qjc5BWUWNvRei3xvXgvd-BLSGX9k4cPZKVdvgyrS52sAF-_XFyHeHWQ",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQAD4ilHRvFr1ycYElC2y9H3X5tow7jZu4fCiTOMWRe8pd97dcQto_3PY78ZgWSUFzfjchAyzeo5uRS39dVxyzdWktxGYHUUlfRZqJomNO65sE58fxD56prVB-lpchpFcEvo8gCVcOgBFpEQM3o5m7J9-_znWETqrMXsZF_MjzkulrqVvZnpewOPsO8e-AgsqtzsX6ch0XDVZavLRqfowtAO4CFK0kCK3lRjupY5KvFMk8LOZOjRQR3mVQq4eHgJ4vdBg1MuMJ22dDAriBCkEi2mLcRO3W_Ng1ect5Io53V6fVJNueZ-LfbESYOYGSw",
        "ukuran": "2.05 MB"
      },
      {
        "judul": "Kecamatan Kinovaro Dalam Angka 2026",
        "tanggal": "2026-09-28",
        "ringkas": "Buku Kecamatan Kinovaro Dalam Angka 2026 merupakan publikasi tahunan yang menyajikan data yang berasal dari Dinas/Instansi dan Kepala Desa serta data primer yang dikumpulkan secara langsung di lapangan. Publikasi ini merupakan lanjutan dari publikasi tahun seb",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQADsbsLzh9TZefH64E7WQIVPTUdarDasPmYFtKOmgKsKn0YkCv5cQQfag3xkoSaBw1lx9gxs-XRHn9quGqOGZ1m8VojZycKTeOw-vrizS-L9P48xpHKxW4Fz7WZ7a5zKVmoTOArK_qsbk1z61AAIrZ8YToFtOOpbVarOa3-hti-Al7QnJHP2QVuCXdUfqB9VUY_fFjS6q8fnzkG_y03u37wiB7hlSZ-s9qQ35S33Gqr4TEq6RuAXdTccCCuP85Ak-VRkFL8_PdKkAHu_eDsRmLPMGhnuTwfg1x86N1OR9TRi2N8qyoHaFu2uan3zQoK",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQADzosWKphE9H19zNJXUoYUuMIh9HRDwCzwd8wyTqJWTeEoN0O2coW3efaeHu-N2CWfIPyfP4wk8AqnCMPUlkc0Vby7_W9l2D9HEZ1flpUj1ehpu1Wt472idggXYxKm6GFWHXzbRZ1X83Kkvq_1ZGmVJ6mVXhHCxjw2Lm6pvb0i7hmUmbZlmDhwOlwh3s4cYS7Y7Jr2iwL_-8ZWwXEsCUr1hMq4yaFNv6JAZB2V2RidX2rCLyXFT-SzNu2FowR9rN4A0dRfoydrxsGNSY22skteOKfuKH05IDTDiBjZnXqbU7uFyyXiAWwNczHN2ev6e0Zx",
        "ukuran": "5.33 MB"
      },
      {
        "judul": "Kecamatan Marawola Barat Dalam Angka 2026",
        "tanggal": "2026-09-28",
        "ringkas": "Buku Kecamatan Marawola Barat Dalam Angka 2026 merupakan publikasi tahunan yang menyajikan data yang berasal dari Dinas/Instansi dan Kepala Desa serta data primer yang dikumpulkan secara langsung di lapangan. Publikasi ini merupakan lanjutan dari publikasi tah",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQADHJTMCLPtVaDM7NRnX940CmHI53M9oIKKzrmM3tPPtOiAa1V9r45Njr4YaFTjzfJi9dZ8blYQs4WQyn4TiwBNQiknRbXrDi-OFTfB9Fn-MZ3EvzV5MtzB5VzGIUGwjZAK6QR_503OYUCFNRi0n9NOo_D0wy8aFrSr06KJD6XIzVQaD9zxnQ6GDIc2Pd_B8Z3xdbDJ5GGsG-vTogIJuZwb_I4A0ZnjPlvqJ1FJreN4IjOotjoqhHO2kTjQ4UR_Z51_WZRfrrk1ilZpqiU6KgcSd_gT5HxKUNtfyNxP5mybrnZ18blvl_B3sWXjiHYBFzZbApb2",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQADhfeTWk_l7RGWBBgVggKam9p-0cJhp9bjUD_zj6RmZZoyt522OkeI0Hd2Q3MTXauHyiOmZZkCmATHUvaPofT4xa56-R1zIFTQ1wwyi1Sj31Vj3kaO8QjxhjtaI7rxP-o4lpNUZsTDwR4I6cRf_PV93bJfEBoImSP851bxFqMYJolpnBuEVXsyCxItdPLVmCme_BjpgSxR_VkY1ytXqMMX9aKCX304KE5Y_ZBMnmMLkEIptsPwBvdyXFW6L5rhoS4JNMiaZCAlWaL2VSF_BtM2e-m6O2G2zrCvMQN8x3EGjPfAGAuhR4Qtf52JQhP9C8qqx_4EYrN0",
        "ukuran": "3.91 MB"
      },
      {
        "judul": "Kecamatan Marawola Dalam Angka 2026",
        "tanggal": "2026-09-28",
        "ringkas": "Buku Kecamatan Marawola Dalam Angka 2026 merupakan publikasi tahunan yang menyajikan data yang berasal dari Dinas/Instansi dan Kepala Desa serta data primer yang dikumpulkan secara langsung di lapangan. Publikasi ini merupakan lanjutan dari publikasi tahun seb",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQADdjMQ7R4RAP8GGtKmV5cgj8Ruwpz_GxtNjVYF9ONhIXiYV38yDmdm_rLf83Q4-Hzj74_jf-SihhUjhjJ3Fm7NYptXe-BIjk_y5ukJUcZ4itpBR8yjA3EW9MRmpPcTClSZPKRTq60vPph21kiCUdOS2bJowsQwy6qxgr8nDP0cuBBD7myB67VS3cXyKuiGJEFHo0TBHnkkb7xi6if-yhrAhRb_UT_1Xd-neaKE7eqvwD8WhQsv5BGi72hfLNgkVnKUkTQ4vgSDNUqYZUu3fc5bT586U_ygJnEfG0UmX5IV-GHbEKbbpeGz3AR7E6e1",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQAD4SDIMQqDvTjLQMjmS_hgw-dYHiH444h-qBslGP_-9F5YKECCT00qS6HpxxzIGEmcnAeLAquL1DdQPn9M8am2sTZiuqfolIUKiaMrIkyGko41OM5TkFXdAtFVXlxcai5Qy87kMVTB2xBM8PY3oJsCMFQ43uoQ9Pm-T3Ebe8HEnmu1qPFg5AIIzav3rsX1w6i2JXxWjp2FJIfhMJhtrFEFY12HF3SLx1TULRMbKubFE7rB-aMo9KEX1JfDud1RvABPHta244zMAovnyfdI-Lt_G2OfUDb_gvOor7TOboc0fsKqZkHZ07v52ooYsg5u59rP",
        "ukuran": "4.55 MB"
      },
      {
        "judul": "Kecamatan Sigi Kota Dalam Angka 2026",
        "tanggal": "2026-09-28",
        "ringkas": "Buku Kecamatan Sigi Kota Dalam Angka 2026 merupakan publikasi tahunan yang menyajikan data yang berasal dari Dinas/Instansi dan Kepala Desa serta data primer yang dikumpulkan secara langsung di lapangan. Publikasi ini merupakan lanjutan dari publikasi tahun se",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQADTu6pF0TWdT23kwKlwwAJiYXCUxIX50FGn4L7KCzYYYTrrSvB1bcvgOjLPmuxoLSmIXScF9zPNrVMwiEaUv7QZ08wYNLB7tylYICDd_wlXOjUVm_PjrwsTyjDgLCm6rT0L2mg6ueJw3EFDCA_WQsPsN_AKldsR91aBnQhNIj8sVsLhRTwhQkJTLBC7_IdHgXisTgEIKv1Ivh7EBwJ_ahY1_QDxBQqCqAXXO3F8KrEJODPELe-haqaAaqwWnfHTZ5zdb3sONRRgNpSEmbtkOuIUZUebnMj_mjMIL34TvHhfHz9inGCosua4LjOnJy0qg",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQADLRJxoNU49fy8FUwKSoIUhERsMJFDkm1UaTxkwFIwvOzrUQOUE3gasGekzDwK20dVrtEjwrnROgzAPWPed9p3XaoDI57X5lYgtmZZmcgq9YBHprG5RxLad4BLHd7hy8u0_4WPR5KxEUozGzVmln_3ptHQ8etzKSIEaFtK3T9cG2zHMdB7WAAxviorCwJEZqKqYdExhowrqhkun14KRKReZj1U_-vud1PBUuGk_CPCgZKz9SDk8FzsPbC2smZv8oU06NRXi2kiEQ7CkYC_h5lTuDR-43aqBNvXTGNt--9cM1DWDKHUob5YJaapFt9mlmuphA",
        "ukuran": "3.82 MB"
      },
      {
        "judul": "Kecamatan Sigi Biromaru Dalam Angka 2026",
        "tanggal": "2026-09-28",
        "ringkas": "Buku Kecamatan Sigi Biromaru Dalam Angka 2026 merupakan publikasi tahunan yang menyajikan data yang berasal dari Dinas/Instansi dan Kepala Desa serta data primer yang dikumpulkan secara langsung di lapangan. Publikasi ini merupakan lanjutan dari publikasi tahu",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQADsR3Gw8xzzoH0CX5vgXjBc9PeI0UrPh8xo4asDCZNDizK3Zke9JlXcc1VagqlK24Nn6yl3-Qboh9XUI11TOaqhlXZnR5JJrS6NeC6hU9s-xwqHUwStlB1bVIiDA48qMXLrCTxE3pzRkFlNYTJH9rlpiPyoIJMk2h1RWv13LAaVUBHAZxSPHHpKPvOD6cZrOE7Wx0PvBId5l_mv6Azr15y3yt0w8h_dVpnHpWzdXFnCddlosoEAG_YDIORf3crehqtzhgWWUz5wzeBOnX6veimp3YEWFAJr9ZYKklmyd0TW-JcRmq5FoCokvK2ZfzmRcpnHiA",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQAD4LjTTncresDYqmHZB7ExTZkvT5n1697DPHY9ugbxO7oRUCacw8jRlT1yXmXbVVErooI3LG3Gt9KwQJbUNxQgUM-Fr7MWliPFqxUECJ1dJGcBHmFbDSDT77n2BxU_SUImF3gIx9LJzWYnzNqVufNA9-6PArpyGwYzLZpi6t980cmwZ-dTR_vbK0TDtCMmPxKxABPx32SYyvo9EFoVQT5YvjyXQsfmPfZ718ffh8RnxFvja3-KYqmKotL-uSRJrE2SQ0I0J6tqOpVjbLAfPw2e1JXS6v1eHws8YNzkQS2FevKMUKXJntUKbMz9E9kHl3pTDdvZmhs",
        "ukuran": "4.60 MB"
      },
      {
        "judul": "Kecamatan Dolo Dalam Angka 2026",
        "tanggal": "2026-09-28",
        "ringkas": "Buku Kecamatan Dolo Dalam Angka 2026 merupakan publikasi tahunan yang menyajikan data yang berasal dari Dinas/Instansi dan Kepala Desa serta data primer yang dikumpulkan secara langsung di lapangan. Publikasi ini merupakan lanjutan dari publikasi tahun sebelum",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQADx0hE_DhyRhrg8HufgWCQJXKYg94F6u9xk_ODwrYAT-5Xpn-NgzDegW9_580LR6rud_QbH5NTauC4bQhnlZDlQ5R5ifTf0Nl09PGYcvnAN_t7jVw33DppIeAvu41R89ZqmWtlGqg8ofZR7hRuOFhRgn4mEjFnu2ABjrf-pBYQs3KTSjZELlVkVMfa59r8wuZe5XuUXqhUbM1wS8G12LM_8L3Pyv6sJKzSna8EqQf_00uQk1BRn-BX5OjdGyw6Mgyf8YLlpGRutokKdxzRuLNA7yBSrHpGNzal_SZwwTExiM4rmSiF57kTPZ0",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQADPS2e7FHPCvTy_HV3OpKlb5cjDp8ihbGmxikAwGn2IhBvDGyXywbXpLO2qxunVOnhmi9k4hyAPj61FE36Q4AQZxx66NNboSMntevOu7to7aOA4eAVXX0uTNz2RwOljZY_xAMXPOaRZmOodWDJD7moaqMF9NA-vfU2LqvbfR6Xe3XO9OskIjdajM2Q1H-n6pl0YkX4aHOGn07aSQ1rFAt2JC_AGpCBjiCnVvYLE8pJ-quRKqdSuN0KT5hVPJby8Cfp4COAmo_k-4dFEAUr-k5PhZvBqw7AeBkUykCYbiKkjanxD0zAIP_5f5Iz2xU",
        "ukuran": "3.80 MB"
      }
    ],
    "infografis": [
      {
        "judul": "Indeks Pembangunan Manusia (IPM) Kabupaten Sigi tahun 2025 mencapai 71,68, meningkat 0,78 (1)2026-04-06",
        "tanggal": "2026-04-06",
        "ringkas": "Pembangunan manusia di Kabupaten Sigi terus mengalami kemajuan. Status pembangunan manusia di Kabupaten Sigi sudah berada di level “tinggi”. Selama 2022–2025, IPM Kabupaten Sigi terus mengalami peningkatan setiap tahunnya, dari 69,40 pada tahun 2022 menjadi 71",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQAByypee4XK065NH7p6_brUFZV6iHeaJEYGEbts8THWeDOwsTPpG7txzSyEBNZci67uuMOB_w4wLIi3GSNsf86RP4T-eprE2uG19wwdytBPm3-0qvKEpQ71ld-AVhyGeBA3Eh6Wbp_k1v2gAs_aVXveLboh0KmTmZaInL1oM8YaLCBjs2okb9Kc54259oQcvvQXAKZ354K1QdZuhgNwLB3rszLrkBfAKCEMsKUG6XbVohMMoZ0D6oHZqvy1wH4RTFN7mYv_eTjI5JKvG_Ug2uVdhADjMGZslYkW4Y9660S0bn_HW06DqGRIlEt56CYbUMN-ARxNwOk6kroZn_xfKLyS3yIpoPC27Q",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQAByypee4XK065NH7p6_brUFZV6iHeaJEYGEbts8THWeDOwsTPpG7txzSyEBNZci67uuMOB_w4wLIi3GSNsf86RP4T-eprE2uG19wwdytBPm3-0qvKEpQ71ld-AVhyGeBA3Eh6Wbp_k1v2gAs_aVXveLboh0KmTmZaInL1oM8YaLCBjs2okb9Kc54259oQcvvQXAKZ354K1QdZuhgNwLB3rszLrkBfAKCEMsKUG6XbVohMMoZ0D6oHZqvy1wH4RTFN7mYv_eTjI5JKvG_Ug2uVdhADjMGZslYkW4Y9660S0bn_HW06DqGRIlEt56CYbUMN-ARxNwOk6kroZn_xfKLyS3yIpoPC27Q"
      },
      {
        "judul": "Profil Kemiskinan di Kabupaten Sigi 2025(1)2026-03-06",
        "tanggal": "2026-03-06",
        "ringkas": "Pada tahun 2025, jumlah penduduk miskin di Kabupaten Sigi berjumlah 26,03 ribu orang (10,47 persen dari total penduduk). Secara persentase, persentase penduduk miskin di kabupaten Sigi Tahun 2025 (10,47 persen) menurun dibandingkan dengan tahun 2024 (12,06 per",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQABnP_L8bqJt-blbTGe5BS08LG5tOpoPSh0sQgFAAO9R4KxTbCcHwAUJ3Dt3SkeWzXaNMCLew9of3OtVwZAdVlXmFNJ-NoOb4t8ADBXfi9K5vGCiTPUdKqwN04sZmCYK8ARC1KTwFuoE5j1suRHLAg_e2Wy-kIaN3Q_PW23qZzCF-fmJaxF9gFaHzU_rqtAFKQ73RueLfeBd7MeA7TCYVXcKMG8-Bui_NV4ei9LQbOTmmEoIC1HF4qjfuDrHqFlaUXvUO35V-PIiWWswDkM0tm-Ghqoeya-QHk",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQABnP_L8bqJt-blbTGe5BS08LG5tOpoPSh0sQgFAAO9R4KxTbCcHwAUJ3Dt3SkeWzXaNMCLew9of3OtVwZAdVlXmFNJ-NoOb4t8ADBXfi9K5vGCiTPUdKqwN04sZmCYK8ARC1KTwFuoE5j1suRHLAg_e2Wy-kIaN3Q_PW23qZzCF-fmJaxF9gFaHzU_rqtAFKQ73RueLfeBd7MeA7TCYVXcKMG8-Bui_NV4ei9LQbOTmmEoIC1HF4qjfuDrHqFlaUXvUO35V-PIiWWswDkM0tm-Ghqoeya-QHk"
      },
      {
        "judul": "Profil Kemiskinan di Kabupaten Sigi 2024(1)2026-03-06",
        "tanggal": "2026-03-06",
        "ringkas": "Pada tahun 2024, jumlah penduduk miskin di Kabupaten Sigi berjumlah 29,80 ribu orang (12,06 persen dari total penduduk). Secara persentase, persentase penduduk miskin di kabupaten Sigi Tahun 2024 (12,06 persen) menurun dibandingkan dengan tahun 2023 (12,83 per",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQABfJckM5-W3Dn3j5S2_QhY7ktaXL8UF-6mVDnNfBU1VexTDN8WvxOwCmusTBd2KXewNSwKHUqyVnLCMWnXaYv2pFdzkqabtkd6Dw3TAOfu4lenUINHBP16o2Wcf3TmxxcgUxTJNkSk0jDEk1bgGxE6RngX8xLwVD5FVZL2hc4YMjUDRYori3LR092ZtklhNY3XOdxwgT_y51RmO0gRGnidulf9ibh07Fmmvsi0MwfDb7ReouGDYGAVePDG7ji8RX3lDlgRFLVrqSmHQBqpUapdGHhlKQ_gmVk",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQABfJckM5-W3Dn3j5S2_QhY7ktaXL8UF-6mVDnNfBU1VexTDN8WvxOwCmusTBd2KXewNSwKHUqyVnLCMWnXaYv2pFdzkqabtkd6Dw3TAOfu4lenUINHBP16o2Wcf3TmxxcgUxTJNkSk0jDEk1bgGxE6RngX8xLwVD5FVZL2hc4YMjUDRYori3LR092ZtklhNY3XOdxwgT_y51RmO0gRGnidulf9ibh07Fmmvsi0MwfDb7ReouGDYGAVePDG7ji8RX3lDlgRFLVrqSmHQBqpUapdGHhlKQ_gmVk"
      },
      {
        "judul": "Ekonomi Kabupaten Sigi Tahun 2024 tumbuh 3,50 persen(1)2026-02-10",
        "tanggal": "2026-02-10",
        "ringkas": "Ekonomi Kabupaten Sigi tahun 2024 tumbuh sebesar 3,50 persen. Dari sisi produksi, pertumbuhan tertinggi terjadi pada Lapangan Usaha Transportasi dan Pergudangan mengalami pertumbuhan tertinggi sebesar 12,92 persen. Sementara dari sisi pengeluaran, pertumbuhan ",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQABCmMe09ZchDG6J6vXs65vPHxbdmArNFIJR2_XBm0Xbpvf2ltaz_EWwz03EUIHJKtKOAQaDqITCMTBTpRiwEwTlID_fBfrTseHN2DtCjFaIa6-ieUCsCYMkmIE3CbamqzWwBdxa_EPkw5iXo4qkytVr_08TZh5_hOBqVdFUYlWI1fno0TrFFJI85WCEt9u7pAuljbxhNyugXsz1HbyjWba0kW8ISk3H2qozMeJDLTMxYCT4BGL6Sc3LUKTlpf4nAcjYCuxXU1k4mE7t9L82q03eD0dm8MqxaEM5gnlTSTGH242Ow",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQABCmMe09ZchDG6J6vXs65vPHxbdmArNFIJR2_XBm0Xbpvf2ltaz_EWwz03EUIHJKtKOAQaDqITCMTBTpRiwEwTlID_fBfrTseHN2DtCjFaIa6-ieUCsCYMkmIE3CbamqzWwBdxa_EPkw5iXo4qkytVr_08TZh5_hOBqVdFUYlWI1fno0TrFFJI85WCEt9u7pAuljbxhNyugXsz1HbyjWba0kW8ISk3H2qozMeJDLTMxYCT4BGL6Sc3LUKTlpf4nAcjYCuxXU1k4mE7t9L82q03eD0dm8MqxaEM5gnlTSTGH242Ow"
      },
      {
        "judul": "Indeks Pembangunan Manusia (IPM) Kabupaten Sigi tahun 2023 mencapai 70,28, meningkat 0,88 (1)2026-02-10",
        "tanggal": "2026-02-10",
        "ringkas": "Pembangunan manusia di Kabupaten Sigi terus mengalami kemajuan. Status pembangunan manusia di Kabupaten Sigi sudah berada di level “tinggi”. Selama 2020–2023, IPM Kabupaten Sigi terus mengalami peningkatan setiap tahunnya, dari 68,48 pada tahun 2020 menjadi 70",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQABcVhHkDt34ju7ve_mnU-jNYJTYqvnWDGWtQVq6In0lBeBwCmiFxEpZcbY6joNGg3TRUBV-jbdA6YImMqylyNtlZAKmRBmOf4vWydg5LTqQZMYwAXCX4rTfSoA3MOv6p_Gs7S9iGQ1XUk__2VoSGAtWhkd2IyiEM0YbGsX9OPIHhS-_u_Hz-lVpl_SGm5BMoe0myN10UEWDyxwqRnamif63Rj6wlnXuDzVoQsjvoJfhwIPVN7MYpQlsHYGfdNAIkofCFiuikn40ep2fWvnPAgjdQ71rTJ-CxS40QwvViqERf8AuKuKsjKPkXuItrWm5qhI89L6AqwkbaGhmsOyho3mXdgg9gVKbw",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQABcVhHkDt34ju7ve_mnU-jNYJTYqvnWDGWtQVq6In0lBeBwCmiFxEpZcbY6joNGg3TRUBV-jbdA6YImMqylyNtlZAKmRBmOf4vWydg5LTqQZMYwAXCX4rTfSoA3MOv6p_Gs7S9iGQ1XUk__2VoSGAtWhkd2IyiEM0YbGsX9OPIHhS-_u_Hz-lVpl_SGm5BMoe0myN10UEWDyxwqRnamif63Rj6wlnXuDzVoQsjvoJfhwIPVN7MYpQlsHYGfdNAIkofCFiuikn40ep2fWvnPAgjdQ71rTJ-CxS40QwvViqERf8AuKuKsjKPkXuItrWm5qhI89L6AqwkbaGhmsOyho3mXdgg9gVKbw"
      },
      {
        "judul": "Poster Luas Panen",
        "tanggal": null,
        "ringkas": "",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQABUFt0b0y2E5RmlguWNsNrXkkKjZQhO3PHTlt9jeqZ1htPP8SPjrWC77PyZwJHLYFtSVW43_hdbtMf4OP9szSFM3t48n7GAf--n0bBObaPW4gtMFT3LE_ytgaap8InyrVEI0IKCW8wQtjBdzrTJjIS1BI8AYnun8BDlbrXva86tnUFEVbiyhxBueWWb2TtsbUYfoa2e6QrkHMGRA",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQABUFt0b0y2E5RmlguWNsNrXkkKjZQhO3PHTlt9jeqZ1htPP8SPjrWC77PyZwJHLYFtSVW43_hdbtMf4OP9szSFM3t48n7GAf--n0bBObaPW4gtMFT3LE_ytgaap8InyrVEI0IKCW8wQtjBdzrTJjIS1BI8AYnun8BDlbrXva86tnUFEVbiyhxBueWWb2TtsbUYfoa2e6QrkHMGRA"
      },
      {
        "judul": "Potret Pendidikan",
        "tanggal": null,
        "ringkas": "",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQABd62h4wnsnq6cNi-D-X_6u6lfzU7gGB1-3P4FenMIxNvO2SYWzDXLgRzRrHyBbknDzroJV1EJlKTVSnLjPZHOA4fNSfwh4BBED0JZHvQ48wZgmF48LsUnzv0xatByBvpELGOHLXcb79A9xC1Fo6wVscTm6uGD7pwVUQiC0WCxmWyEkN8ybvwSad6kltWN9_pxsCMKlmnNjkKEQw",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQABd62h4wnsnq6cNi-D-X_6u6lfzU7gGB1-3P4FenMIxNvO2SYWzDXLgRzRrHyBbknDzroJV1EJlKTVSnLjPZHOA4fNSfwh4BBED0JZHvQ48wZgmF48LsUnzv0xatByBvpELGOHLXcb79A9xC1Fo6wVscTm6uGD7pwVUQiC0WCxmWyEkN8ybvwSad6kltWN9_pxsCMKlmnNjkKEQw"
      },
      {
        "judul": "Poster Garis Kemiskinan",
        "tanggal": null,
        "ringkas": "",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQAB28YAO4SmBNCTc1D5Wo3BwWaZcf7RXPZ1dVn2TymquvjCV-fJPIL4S5JMK3-dMHp1Rib3AuUVB5lZbmBvERAhX_NZdXt28UHdAlHm3Lcg4u3hriRBGuz9YlZmOp1Fa3pbVwIM1DXloPeNdXtn_Oe0EaNCTNLQf3BtwcluVYEHPCeZqzXDCMEI8YvGsT_6xh8-2zd3BIR4yuggZpObPGlzKSTbHYiigA",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQAB28YAO4SmBNCTc1D5Wo3BwWaZcf7RXPZ1dVn2TymquvjCV-fJPIL4S5JMK3-dMHp1Rib3AuUVB5lZbmBvERAhX_NZdXt28UHdAlHm3Lcg4u3hriRBGuz9YlZmOp1Fa3pbVwIM1DXloPeNdXtn_Oe0EaNCTNLQf3BtwcluVYEHPCeZqzXDCMEI8YvGsT_6xh8-2zd3BIR4yuggZpObPGlzKSTbHYiigA"
      }
    ]
  }
};

/* Dipakai pemuat data (assets/muat.js) sebagai cadangan dan benih. */
window.INDIKATOR_AWAL = DATA;

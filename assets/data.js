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
      "pada": "2026-11-24T16:09:55+08:00",
      "oleh": "Web API BPS — tabel 278 BPS Sulteng"
    },
    "kemiskinan": {
      "periode": "2026",
      "pada": "2026-11-24T16:09:55+08:00",
      "oleh": "Web API BPS — tabel 90 BPS Sulteng"
    },
    "naker": {
      "periode": "2026",
      "pada": "2026-11-24T16:09:55+08:00",
      "oleh": "Web API BPS — tabel 91 BPS Sulteng"
    },
    "pdrbTw": {
      "periode": "TW I-2026",
      "pada": "2026-11-24T16:09:55+08:00",
      "oleh": "Web API BPS — tabel 287 BPS Sulteng"
    }
  },
  "meta": {
    "terbit": "2026-11-24T16:09:55+08:00",
    "versi_berkas": "sigi-awal",
    "catatan": "Angka diperbarui otomatis dari Web API BPS oleh GitHub Actions.",
    "sinkron_terakhir": "2026-11-24T16:09:55+08:00"
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
        "unduh": "https://webapi.bps.go.id/download.php?f=AQAD4on6gbblzvcSJiFxwV6_GoYHuDnOFL2suy7kPUQ3lP0j0nOTVLwc58ng1ZKTXJqUAOCI0MsZtGiEd49_DO8yyX-tI-uHWd8ZQ4EAscUc2G5fHmx5v8HNHPTjVOVRSAe9ddGEpsjYb-W73MjBxpZ-OZtICVV6EKo5uOz29ymtip8_7839tLHHpAa1TaYscFVGh25FV3DlgjGcMI63RBlamSisBnt1YkOvtTdcWKcmZ0YUBqfK1wrmdXW0A7x9iYlAbglWpaOBCnmOvmezti8",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQADu23rgnDcGdq9BPk9aJTiE4sUodbz54ZsZL3TmZGa1khhs2vb5oN23S3BMxd3L1sX145j901Su2-Ax89mP7bZusyAUiyHBJgdmdmK9aH6hRQcusSroHlYE3JhPwSHhPjoNU7AX61OtCLPNHkd-vUukqQXLislgFaoTWCyVjsX0KApTdMO6T1-tXMSV_MJvRVHy-POLmGHKzV-Ym5DFPlgAUutzhCemMBuTEABJzZzfLE-58_qWN0CPuHq3BDCZakUcH7BGzfyoySkG78Q-Wi0E5XvDf5KH00"
      },
      {
        "judul": "Pertumbuhan IPM 2026 mengalami percepatan dari tahun sebelumnya. Seluruh dimensi pembentuk IPM mengalami peningkatan terutama standar hidup layak.",
        "tanggal": "2026-11-05",
        "ringkas": "Pembangunan manusia di Kabupaten Sigi terus mengalami kemajuan. Status pembangunan manusia di Kabupaten Sigi sudah berada di level “tinggi”. Selama 2023–2026, IPM Kabupaten Sigi terus mengalami peningkatan setiap tahunnya, dari 70,28 pada tahun 2023 menjadi 72",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQADkAbQhZKFGi1OCEcTp8lBQEt3dQGTEpuJmwgVQoc1gIQcyOPXRJvnmd7HMwprob3YTSBGX5rtQ3fmIuXRTJvJiYiyXOvetkGn4BeRizh7ntCAKoBrOobiJVbtSpj1aMHb73kG1OkQhj_NpobQ-vkn6YtDpjKQM_PaPhLmcSm_fpXaGD7X5OoWA-0LRfJLGvuy33mlDxeq7JZ9PKu8-eUn5I9kByord52aWIb8OlnvQV8D6Ek83II8l9tcFCMprn152Ar0yYxflRT2dhWSl_Nz_02NbgtUCVKVufbK0pY",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQADtQZ7hIThwcQHJy4rHZQn-3cCUAg-DTCn4qqvjEN-9l9das8fuyC1ul60muAGrR5kLI1VAwlZ3f_qdUIttMAIpeFU9U1Gd0VXyN22ejcWsRKVtWMft1rLIUKgxVrlUwzEbz5EnKuZROt8GwO4gm_KLJp2i1c_bvn7xwUk2jwVLvnOc2ejj5w9wo3OV1h502iFfRBOtFjobBqA4F2pI83cflXvZGUNfd4ljoEySVw9D5yJt-3ZP1_WDhV2tM7vG8yOfP5uoZWIsRcUnDlNdi91uopkJc1p1qEBmvdzvDYPQOjq-Q6TsdE"
      },
      {
        "judul": "Indeks Pembangunan Manusia (IPM) Kabupaten Sigi tahun 2025 mencapai 71,68, meningkat 0,78 poin dibandingkan tahun sebelumnya (70,90).",
        "tanggal": "2026-04-06",
        "ringkas": "Pembangunan manusia di Kabupaten Sigi terus mengalami kemajuan. Status pembangunan manusia di Kabupaten Sigi sudah berada di level “tinggi”. Selama 2022–2025, IPM Kabupaten Sigi terus mengalami peningkatan setiap tahunnya, dari 69,40 pada tahun 2022 menjadi 71",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQADRehVHm99PJpt4JCni2yHplBs9NRgLEEQtuOEbc4g8lLCZRr8E1g7sKWD4X05BjRCkcW9GARwkPmnvVa37sJP65N2GkIkaTRz0uNAxiaLQosZvn6BAq-JJaqlIMQAkuzop2mPN6K8wfl5DxfGuV4tLpFPdauFXMt-U4Ki6KmWj0aruv8t1_JMjtSY5iDkbNHz8OBHAE4vLSdYsnprVaKkuGI1_bYE5UljalJeWyEtnCEV9Py6IxdGuGBOT4EgTbBWessX21dS2-kUCvbI6koW4JdjvRwK2FnigwXPezYMk9CevVjSAd-Ohf4J4Ia6dJX8ADrqcYo1uKZ-NHva-vuncZ4cFCV4tW9Xy7XYgwKkugCn8OobYW_o5BUcMycPh-Xx",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQADs-6P02VLmumnLWMcb6emIXBlIXHuwcJv6tvr5PJi1Y1D33AY03qH-WYRo0VZUuvtu1xm_sWlCJciukKmT-6-xR3qtUyevmsSD4CrFlIlGzrwPNsrPjTo0xoPWDD2yLfLQfQ0Pqtft7Qtk2cKVcpdImX8bZdi-GdMArfH8iByIr8QHLvfrErErbE1uLuYgRbGlgvljtZlkKqBAMoZLB_MSwfvh8v9pp9k5mlgm7lk3-6XvgJHMt8HKoRPvvJaCR6hwK0QshmI57vQY2rOrVCP413UQBFem-bHuWMSbdiPdkS-Yg10vPNF-L8XF3rjY_7ikqhgt_sxaY_j7liqQ9Bkve3qtVMKHLJCf8v3tvYnuGNnJFek5bK0wY3ZZMANLMk0r1Yv5rVq8IMjiw_bDw"
      },
      {
        "judul": "Profil Kemiskinan di Kabupaten Sigi 2025",
        "tanggal": "2026-03-06",
        "ringkas": "Pada tahun 2025, jumlah penduduk miskin di Kabupaten Sigi berjumlah 26,03 ribu orang (10,47 persen dari total penduduk). Secara persentase, persentase penduduk miskin di kabupaten Sigi Tahun 2025 (10,47 persen) menurun dibandingkan dengan tahun 2024 (12,06 per",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQADPTYCLyafdZ9jSJTsV8rU5z9M31gD-JYT3re46qCY9bTdPqLyqrZOTL4Mn2EbWHIRJu6G83lqb3el7MBSUaJRVxkqAaLZmiKyCmkEpGcRn-9dqPZ-WA_2_ND6bgRvyR7rH4vffu213GbSmHagOmwWeedjPpQM8AuUr9f5tXTyqwyRNE5qGPnzSc90zkBb56QFpBdP6dZMRLN65nMEz8RVb-1gh8KOl8tMUqCcs-QoG_bd7YMFIeq-QTITWWYKX2PY_oTBTZ3R1qv_L-o",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQADOPJEcWY1cbgKKNIWIb7e0zC9F08kG-Wlqr3fsvWtnaz0ewpOzWDc-xSpaiGlRLQmC_b2U16LFdw8y1VSWbKl1oGKbXvOAa5XO7dpRkhdo7xau_56f7_RxBt9jtuevg5PsvxtFwy2K2Zhl_4t8CVtC1TSUV1-crHf2rJjUpd69as1x-iHIypFrhljxB-ZJ_46qIQrkR4ck9KowQQVfJZLkDtE0GU4nWW0YFRLdEE83Jb94mgQQcCi4f72DEo2kLNr4B_MU4jb41OAFyb6oO_npio_4cg"
      },
      {
        "judul": "Profil Kemiskinan di Kabupaten Sigi 2024",
        "tanggal": "2026-03-06",
        "ringkas": "Pada tahun 2024, jumlah penduduk miskin di Kabupaten Sigi berjumlah 29,80 ribu orang (12,06 persen dari total penduduk). Secara persentase, persentase penduduk miskin di kabupaten Sigi Tahun 2024 (12,06 persen) menurun dibandingkan dengan tahun 2023 (12,83 per",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQADJyUl5OAII9n9VPOSTwOf0-1GJxMrnJZx4gpabzTi_m1R827e6WA_fLErMz4WDTHcYkrWwIIskRmkMPBjsNEqwTjnrlhAB88C94Kl0d-bW70FDFmnzzOaEl1J55gaCdwtPaPKL_z_3Bmr1uxZt8GIZrkp433h9vDVClQovDsHaAddR5EMsoZmuyMYsD40_9_NNT5cnILOZ5zyZ2e1aCaB5I2fgqzkHvA5Tw8Xws8quTEEw00KDPDu2dO9CSJV7RlI92WOXpENRAlp-VE",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQAD8rjbrmZoLbP4i5wGhXntBIKYvy8w56dlJHqTfy2_fgFRRVVYldvY34kLOfglztw453cvz-CXuBWw42O14pzuiWoFxuWTkrbV8DmgfEIlOsIHwAsSmtnPX5QQ60uz0gh8_Txcp2KDeNp48iXvWTn6wcg3A1vnLG6LQ5od1RowhxLn48n-S4Q07sV3ckANrQxu_sm6Op4qxmGRCrdYpK3ifmqm-pqrTGV5usuuh82Bciy5Eyycfn1_uazOFbMlt4YXtWtt9ZVKKYlckG_K1UuBeToCSTA"
      },
      {
        "judul": "Ekonomi Kabupaten Sigi Tahun 2024 tumbuh 3,50 persen",
        "tanggal": "2026-02-10",
        "ringkas": "Ekonomi Kabupaten Sigi tahun 2024 tumbuh sebesar 3,50 persen. Dari sisi produksi, pertumbuhan tertinggi terjadi pada Lapangan Usaha Transportasi dan Pergudangan mengalami pertumbuhan tertinggi sebesar 12,92 persen. Sementara dari sisi pengeluaran, pertumbuhan ",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQADVx_58AQjiOKMyBWUkkmLr9DFJM-NAhmAX50TNDo5Yjw-DPO9BD5laYMdvixLrhE6hcIQFDWQcoDN_AGdpYSEqWkhwNUrHVlTO5HvvVrY09OMzUOaGjyPcbAgTTpLJQ1Dh50hYW3lMRcCFLMXvuqIbJlwWmu95WFAmTIZgokTAWWczKKudugk0jD8bAHZkoyddiiHercEOuzNiaViqdZHRvtHlKJNcczp150Dj3q-TcZbY88gAke6KFpUaAOiP4BCnwASPPGlJUaxnuKc_KlMjvlydPU8eL0",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQADwl9vdSbwDoGf4DMLjZAvjDAfvjdFy5PCf6y2q28NEoGxWrx6Dwkj1Dz4Q8jxA_3DKFCM6T_VrjyZcaTALdFOiFuAL3A49y87x9RRI2Eazh080Qt-WmrcevBhDK117-NCw2hC20lwWKjJ-VN3nl0yfntIkChvi-C4Q91XOtW-VVqFa6ntAzGIuhsGFk8SxkkVz4ptlYQyz2O7W7nee_C1tK4vyQ4l9yg5NomXQOuECj7IAd6naylM9dAMGQfYYzDdwf6Gd5sVqraLNppn6QnYvklBIhPpXc45YYSBmqvGwY4"
      },
      {
        "judul": "Indeks Pembangunan Manusia (IPM) Kabupaten Sigi tahun 2023 mencapai 70,28, meningkat 0,88 poin dibandingkan tahun sebelumnya yang sebesar 69,40",
        "tanggal": "2026-02-10",
        "ringkas": "Pembangunan manusia di Kabupaten Sigi terus mengalami kemajuan. Status pembangunan manusia di Kabupaten Sigi sudah berada di level “tinggi”. Selama 2020–2023, IPM Kabupaten Sigi terus mengalami peningkatan setiap tahunnya, dari 68,48 pada tahun 2020 menjadi 70",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQADu8GolMRBDGwQEPlg46_Q1L6uiQaTlpKgZbZruD23jI-rf50xW2meRzFHGuwhEfp9eXtM4Of2CcWoh9vJPg3w6mBIdKbsl9tmRxqn8aQ1c3ueclOwJkArL3BFK0zdcSPBNxjHrFimuSxKIOvbKPWwzGFYbnowDhaTDzhiHhojgDx520Gpn5qiWqJFZjHeTN4jXbJBkMhG3O3njBASIqbV3_9pKZGnZaPqBSKGfGpzNMBBVeBcgJofzj5UXGD9gW53xpHeJm1iM5d5ewuMOLz1gH6HT8s9g526PUsRWXm8GanLCZQeZ5SDilxXJNxaWmeOsip-ilBFSkz_M_aYkAsRUJDBhsVLGXUSq6zantHD5antQ6NlNS8d16qBQvnVWFxBpD9aLUm8V_ALVSNNhAxRFvKh",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQADgQKlAqUn7pSaj7nfHTS-AFsATPXLVMSPnMN6PApHXm11PGKGnz7Bm3uB_R-VfQiNfJnN_z4vKMVHKBIivyUZwIDz1gNWT8lLu8RWSBnVnbWcuss1IIssdGT8vU9eeq2qRk0Hlf7Gw72hOc09lYYbrqzwh6FIb7FPMPD4z6O8Dt5mE2sK_aBG1xIO-W5J-enFosGCUbMWN4z7fwdnLKuxC2MJDY9PGnp4tx1zYix1leirNotDlqQcBxoE2krIfvWvFIFg6WcYwNAFvtnAEUxMKtv9wVqdD07Nqgjm3AFw6G9DeMLx2G5Cjo_TNZ47djUxdmsDxrhSH1ceZa7ctppmVkL32WPviyyL1yVGv2lIBeIUKKrprXCb8au9DNaz1Zy--ghjPL-Oz_0Y_yn4Ch6rA49znyV4DTQcVjRS"
      }
    ],
    "publikasi": [
      {
        "judul": "Statistik Keuangan Pemerintah Desa Kabupaten Sigi 2024 dan 2025",
        "tanggal": "2026-11-11",
        "ringkas": "Publikasi Statistik Keuangan Pemerintah Desa Kabupaten Sigi 2024 dan 2025 merupakan publikasi yang disusun dan diterbitkan oleh Badan Pusat Statistik (BPS) Kabupaten Sigi untuk memenuhi kebutuhan akan data statistik keuangan desa. Data yang disajikan dalam pub",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQADr38vmtgiG4F_PeZEYFd796PmypUWsJ90f00gO08sIFQCJ-47qVn6QOUB4pTj72wHibxiCfGG_WZil12BVQ0gtHCdZxwG3b3_oa8mDd0muH_H97rpTSvMglXRsCP2SwHZuoK3Jtr1HLzIkitBkqj_IPWd8-xEYFrdEf5dka2BSXJ2CYAB08oZtTR0zsWfF6wBhOD_rG7GJ1ZfjoQxQupnbaSzyPbSoN8eudY14ekus_cOI00ALe5qO552lSkHSkw_F0wX2CO3wRVZVMiPCshjhxcPj-rmiotc332yO9HWHkEgtvtEfXv2M1AVevOx7jbBATUjbcw_eVfjUcUrqZgAuJBUUkCq97WRVA",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQAD3KpO0NMQ96oqaJbtB0rRY1iiS1TgJJ8KwciMp7FfqsumBe8-UkeaZiSkLJ3p5aC4VQTkQe6YnF6IXeFBqpwwCJcPIoVQZMIqYiOCDIVz8jwV62tfTRTLlwZSiw7_oCbv2v24eR4TOysGMwZIUYogwmvk9ss20IPLkDOm1hbzD9BDV5Oe4aJR3CJTkautbOU_N4vWVSko0OvlIVV4xiLnRIEg4t3mBUqtSrGEglo3pl0wu4STPWnzYFHS5lD-_hDQwZCfq_4PvMrKHw3HvZ5ezv8HQoWgySClaSV3L16eqexLDTtXqHqDQoVT7lJXqUK-GbaY5S3x6DbReBm8HDWUD39CQQXfDYC_4EgBQw",
        "ukuran": "3.82 MB"
      },
      {
        "judul": "Indeks Pembangunan Manusia 2026",
        "tanggal": "2026-11-05",
        "ringkas": "Pembangunan manusia adalah suatu proses pembangunan yang bertujuan agarsetiap manusia mempunyai lebih banyak pilihan, khususnya dalam kesehatan, pendidikan dan pendapatan. Pembangunan manusia sebagai ukuran kinerja pembangunan secara keseluruhan dibentuk melal",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQADHa68q0S6sjQmAH_BTec8n3nHeQUuI6cym-41vUiy-f6on3-ziSKyqaRTGUqHEHtbl9TOcyt4GNcu6v5tHw7q8phFwaq8K8RXj445Yj9dghfQ4W17SM4gk9NHmT_TsAux2_Bvs4KWdXrLG8o42XgHLr7rFwSU4Kzk3nkmjYj9o03WV69FCG8WQQhhfUae08yxNAaksuyN6tfXl1V-Qq-xbYICM1JlQ4uN1hKLhMJiiDdGghmaZX_hM6ptGMAtVsoSgYngooxmeOauYp741g_M2WwrBO0gGjooaiLT5WGgtPqNe2D0NTeJzYQ",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQADeWKjy8j-eqsJoV2SHGsKb1Baor1AN5puiB1QXBpnbz1ifAGKtr9AVR9tGRMmDIQZ3DkPkA0Nq0hbkYJSLf23lTPdZppgeoXTgHZ8rCwialgll3ugPJedbIlyWXtuyb65JK0jh1821hZeg2T7IyOJ3dVJksjidaSJKxZMWl4UBNoNG5IJY5xZ6FoFvC_DCzhEYrzCMPaolKWcujfkn5Da7wPSo_b9SpdP0eCQ6NmBfhixON4u5rUUDWHzylr1_SatKCyvOj1OxyvSir_VH8jT-B_RuddHQy20XDqiBR8zOox5j8bFT1LYlU32B74",
        "ukuran": "2.05 MB"
      },
      {
        "judul": "Kecamatan Kinovaro Dalam Angka 2026",
        "tanggal": "2026-09-28",
        "ringkas": "Buku Kecamatan Kinovaro Dalam Angka 2026 merupakan publikasi tahunan yang menyajikan data yang berasal dari Dinas/Instansi dan Kepala Desa serta data primer yang dikumpulkan secara langsung di lapangan. Publikasi ini merupakan lanjutan dari publikasi tahun seb",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQADz83vneEPcmnKdbMUAeZe3TYHVMqI7bDz_tk_zh6jAiL3rDStFxfCJImm6NVTpBj3OTGtS1aJmQOekNqHKjgtdfEn2GzWEl0uqDYPnGexutIADIvUyW6ivd6gZlIT8G6ELxVaXLKEROQiJxSuNhJkIDb5G_5QDqS461DlKPjADsvcDFfbx6Gq0GtLaAgI0MhUK7cBZVcjpLMrjrAX6fXEl8gDpbKaMfhhe2Fa8Mw3_Nvm3VhbGxqOFmRJARwmjKz5UImK9z1D7HAO-OoY1xFbn7GenIVZNSuI9UmVh38XNzQWAeMOGbMybuk5R1w9",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQADYsMvXban_O-cRrlV5DkWYv6LNUW1XHyTTCyoZ8bNoWoMzczLeORWsP5lckNYIl4kzV4ELuWUGbVIEuBwEoqnfeBc8yiBYtKdQu5JmJrmZK4wriF6HrnJ7hVFi0PBAVFuDNsWYV5OEY7ZNEBWDf08KXVNgNWXailTKIwCrnz-LZH3xeif_VpXlf97TWV93vW72gKlg7in2XXXAA3qYWDygt8D31zwlVEW2XaOTIV-5rkTjhfdCFtORx-KOPSPsvFuIGNaXPTolY3u2gPGciUbRVap4M1zN6nRgLdZcR_Eb0M5MQK98mslDTF-z6vBQAJr",
        "ukuran": "5.33 MB"
      },
      {
        "judul": "Kecamatan Marawola Barat Dalam Angka 2026",
        "tanggal": "2026-09-28",
        "ringkas": "Buku Kecamatan Marawola Barat Dalam Angka 2026 merupakan publikasi tahunan yang menyajikan data yang berasal dari Dinas/Instansi dan Kepala Desa serta data primer yang dikumpulkan secara langsung di lapangan. Publikasi ini merupakan lanjutan dari publikasi tah",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQADLu1Ms9BEResUjleasyTAva59AD7mWfhEMMoqJfOfU8rsGpT_3YBOq7Z_ohEgN99I8nFoYXyTvQKaOlXzrZqLAxZPUAV3jUR5w2zhrjKnajV1zWyQOWJXSQrfB_HKhlj-VTO80xwZKilWaxOqUc47r0GrtRIM8Ha3711rtKwOQm1wDw2zNHUGXy28Hj2_Nm3-eos8EWUYf5cOocKuBLoZa1f0QPyoOmjfTC6lnd6-zBfm1uKpVYqXYTh51XzkkSRVzCowMeB3FtULFmL4cYXxmSucnpk72hT_9Z_SBmKyGP3ibkjvv43rHvF6V-QgHABg_7JR",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQADsMUGZI_PTFYzxBggvTmqALm-jXcI3d8K2P0OFTP7A_5kttKdJTpz64255DuN3sHy0e1X-PGoCVAHXrxzIP_s2SgOvjxdR5upSi8fzKLU2JYnalDNr3r164nIOtDs7hxx2H8QMXNeTkZrJhOSaBU2-M9Bmtbz5572rVUqetMpBfSn9jSR7OYzt-jAgxrgZcAuxXvrXffzlOKj6oHBdrFFusUpxTkdt8KYto9T_1zCFoiuSGt4CKeM30ngzxZhxGdFXFGWDIFX_L0FObeld1Xxylzr_aTYeFWatEcHaCFPUK2FBoqTxRHIIsOtBwM8-OK5-8fFkVLt",
        "ukuran": "3.91 MB"
      },
      {
        "judul": "Kecamatan Marawola Dalam Angka 2026",
        "tanggal": "2026-09-28",
        "ringkas": "Buku Kecamatan Marawola Dalam Angka 2026 merupakan publikasi tahunan yang menyajikan data yang berasal dari Dinas/Instansi dan Kepala Desa serta data primer yang dikumpulkan secara langsung di lapangan. Publikasi ini merupakan lanjutan dari publikasi tahun seb",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQADvnUFBB24uCZlENmzfKv_fM2ARjOfVPeoYZLCf7UXfNYGGhf_JY52kgO0Zuz5TL9spwO1IrR5wUuFnCGesqszl6SQuZNRVihDvBC-ZRI3vD98fLoIcYqlHRFrT1fnFdT-ZeQ-nVaIjPnT5aXljUQ1YeKlTLg0wX2sex5pWD4knlMREzNsSoaVO2LNbKUGWuHgN_L5ueY-y4FsjC9OPP70LFdGRvNAhbcaS8VOiVyhrIYHVAXSP9diwAwcEVZsxCSPDG0SgWXIrBquMidMYenpNGvNDhN-EKPctbqUm8mR8RiD0Gtxf_Ao-7L_v48q",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQADKPbH1CcV-zndGfZktHA4Fzj5l28spZ5aoDpdYG3K1U9Us9oJZxqnPL2JRllCHoLEvVE5DXWiEENAriVFvmiDeh521wBc9OxJlCLJeIvMahfsCMegpPljdzdFbfMPjVkOhV3Q7wRMv22_lijJ5__rI12mrmPxSDWCwnwLpsXJFWjHMkGqm0MXgG1ns0BfwyEkGlEAqsAFZZM-Kolma__yt6Xp44dacTqYawMsIlzNo2xosfvBXmap2civ7bKu_K0-9GQ4bRcFAbWUNU4GzQbb0EgMhxDPAk-f01pyb8OCu7xriTYsYC_nBUxEEFUtsXz4",
        "ukuran": "4.55 MB"
      },
      {
        "judul": "Kecamatan Sigi Kota Dalam Angka 2026",
        "tanggal": "2026-09-28",
        "ringkas": "Buku Kecamatan Sigi Kota Dalam Angka 2026 merupakan publikasi tahunan yang menyajikan data yang berasal dari Dinas/Instansi dan Kepala Desa serta data primer yang dikumpulkan secara langsung di lapangan. Publikasi ini merupakan lanjutan dari publikasi tahun se",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQADfb0XALN-HzoyUR4Yr5PIpKcs_cQr2UudVgC8d1ZRn11-HaBp2vA54neGnGz_tBQgwYqOLgF-RLruFaOXEd2HRC3iSKzpoLy5ny3Ug9g4i2IYfNYAOWFnS5larLKYzdauY7VCnE2auUN-SLQYrpULpIDnA0z_fn_alUFJfwvaOuEOCsbDbci_6S3jt_spqFhcPK_Q_N3U4AHQGScegfNL9nHA2zYpxKUYxxUgcNwN7UD6IU1x3PrkaLWM41lkSWf_Tx_B2IjLijFFqRMSYlNxt9EfYWPF5dN4PYQgvzi1C3x8ON0NgxYHaLMiX2UJHA",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQADoLNLEg4axxlxY9oskC7oyC58yhwVTCfRM4F669VRJKJONNRLhIN567sf_I2U7j9YMx5urkpiFr86aUj1-6OVlkdsrsGFeJekekDPG7Eu28PYA9WcG1q92jsblL9xxy8nUKOKiaFWcseQXXbqg2jWFo4_DUylxU2P0Zs2OF0Li1sUtSgjskTYRXy1Zon8Fx3j0pKful_LoL2iWDTrQjDRsd-VagUBB3B-rv9D0YHVEPn5H_TW4IUSWWEw-RftEKkXUmLRT8fcFMuKS6_WAygsTop0-6GDMMtU1KtMtntZFmvDPKpwkkAHUkvgef3g5Z117g",
        "ukuran": "3.82 MB"
      },
      {
        "judul": "Kecamatan Sigi Biromaru Dalam Angka 2026",
        "tanggal": "2026-09-28",
        "ringkas": "Buku Kecamatan Sigi Biromaru Dalam Angka 2026 merupakan publikasi tahunan yang menyajikan data yang berasal dari Dinas/Instansi dan Kepala Desa serta data primer yang dikumpulkan secara langsung di lapangan. Publikasi ini merupakan lanjutan dari publikasi tahu",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQADfkeEZlTaqlRCVzRLyS8ULQU_Nw6n-Ymj7U7nRS0XMwrgdC6PLi7BH7zUp8sWRPT05bwEu06tZR5pVa8y_snBF10avQ7UFmrhhCXeCQTYi-6SZMxO_V0ADN2ehOsZ1EBOmZz-3RU9_i5jIuXgWyXYnb4ouSqBlNAonjlVkc7mRc72AQtoufBAWtoRhkvL_0oDKUflnpPvYHFjy-Vnzj9Z39HFfiYzagCCnfoDgGmE7rp4wDHBI4Fa5NG-K9folNFIoEwJPflWxw_h0mjk8ZwDRhVE_RdfyNbKIJ_Qjmni4OJVs-iytj4g73e8AmeHl8p5Q5s",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQADZbLw5PpJdtaTu2BT24kjXwe9sHIqvHS7AMZsURys2TjG0qJJEfo8IwUr96KjfaurofcPV_Xgh0P-ioLE5sAM-XfCRhgz2WWSuH3RqTQrNokHwxSNTzDXA3FljDfEyOSf3Gesdp8B6-p55iy0u9T2VLwQ0ZThlvofGoyl-kR5aD5RiO6T8UxAbyBq8MrkSC8sAP0csBubHVqUvnAYwlIB3wuviJ9rENZLV8G6UdBi86mDlOiGXND45Zo6Rbc6gpNHjTmJlFBC2wQyo-2RMO9GSzI6476V7QrWTe_44CvjTP4toeFIszKHqb-THD8ZG1StJ572GG4",
        "ukuran": "4.60 MB"
      },
      {
        "judul": "Kecamatan Dolo Dalam Angka 2026",
        "tanggal": "2026-09-28",
        "ringkas": "Buku Kecamatan Dolo Dalam Angka 2026 merupakan publikasi tahunan yang menyajikan data yang berasal dari Dinas/Instansi dan Kepala Desa serta data primer yang dikumpulkan secara langsung di lapangan. Publikasi ini merupakan lanjutan dari publikasi tahun sebelum",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQADpMfXmfGnyi23D6EHDwXcidNm7yLvNhe4Q9395Lv6rHFGCz-aU7Q6gjEsAWz8QwmGmMNDNUcAvrCpkeW5Yt5zhzjjwOaMTeLBags3y3Qa_7o6bB_D94rWtqwqksySJV_kUSHlst_Lj3JyuL51IZcrKnk_QQUM5uSpW3PKfBB1-HofJ_ieH8vUwCAdEeuwBPeABxvFX4X4VBFdlm9pa593SLqvfqb-FLK6qt7AcMrTuWDHzk-lTu6HvQ9c4wEJ6UdOoZh_PggdiQ9pNnrpLpRe6eZ-aCNOyHgUqWkRfOKnV7YMSbqme1rouCc",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQADXNRb1f8FSpwp17rtBRHOHo0l9R4FD94q76HSz_LZG4ub5Z9pwWEMKb6HoC7koTD2IJwWEv33F5_MUkxVQCoeqi-ftjrSXYf-PKSkGeXbUPGJzkWZv6pKzL_dox05ITp5SBnGk8HSBNnLJjWzhimOhi9Qjk1n4GxZ_dPUNmnd03FMG6Bx1gpjhAgEX0Id_VO1se1I3g38j3_-CJRpVb7o47Gvs2_Jai63_sD1Gl4BaEfbEzNHqxKhOHl9qLmgHEmjEq_-O8IFYfAJTQGXV2twRv6gHHouQlq6lXbyPGKQ3o2jd9ve3pUPH2vQf-s",
        "ukuran": "3.80 MB"
      }
    ],
    "infografis": [
      {
        "judul": "Indeks Pembangunan Manusia (IPM) Kabupaten Sigi tahun 2025 mencapai 71,68, meningkat 0,78 (1)2026-04-06",
        "tanggal": "2026-04-06",
        "ringkas": "Pembangunan manusia di Kabupaten Sigi terus mengalami kemajuan. Status pembangunan manusia di Kabupaten Sigi sudah berada di level “tinggi”. Selama 2022–2025, IPM Kabupaten Sigi terus mengalami peningkatan setiap tahunnya, dari 69,40 pada tahun 2022 menjadi 71",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQAB9-iXvs7aQmtxqSgB09fBOWVebbuqa41a3aL4QfN202De_PK7rNxIWkt7KPuYoHe815hyb0F8U3qauP4VKRIs3a8IUPBgcjRJx0X_WrX1z11bIoE9rLhf_t9mrYBsUbuR_AyrUSztKq-0o5ZEYB4Rs5L99mqOxRJWjSdN4D3i3lo_eZYWwB23G9Yy6IrJFAvINj38MxAQmmM_HoYnOJrkSxkPjkbfK4jL4egfQ_xkUwzX7VJyrdaiexq7wczL9PPPK5xI6ZFxZ--cJ0S8xJz18NCpHQKXfvhIGBtTs5g7BZoUQ8TWc9HymBiCHz4GFHgKl42m2noKoNoNfzqzEOlNmI685q0-jw",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQAB9-iXvs7aQmtxqSgB09fBOWVebbuqa41a3aL4QfN202De_PK7rNxIWkt7KPuYoHe815hyb0F8U3qauP4VKRIs3a8IUPBgcjRJx0X_WrX1z11bIoE9rLhf_t9mrYBsUbuR_AyrUSztKq-0o5ZEYB4Rs5L99mqOxRJWjSdN4D3i3lo_eZYWwB23G9Yy6IrJFAvINj38MxAQmmM_HoYnOJrkSxkPjkbfK4jL4egfQ_xkUwzX7VJyrdaiexq7wczL9PPPK5xI6ZFxZ--cJ0S8xJz18NCpHQKXfvhIGBtTs5g7BZoUQ8TWc9HymBiCHz4GFHgKl42m2noKoNoNfzqzEOlNmI685q0-jw"
      },
      {
        "judul": "Profil Kemiskinan di Kabupaten Sigi 2025(1)2026-03-06",
        "tanggal": "2026-03-06",
        "ringkas": "Pada tahun 2025, jumlah penduduk miskin di Kabupaten Sigi berjumlah 26,03 ribu orang (10,47 persen dari total penduduk). Secara persentase, persentase penduduk miskin di kabupaten Sigi Tahun 2025 (10,47 persen) menurun dibandingkan dengan tahun 2024 (12,06 per",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQABPDnYb5rezcyUAGc2YdxJRjQIfLaXlDEVhF2yySR1QpiqIuo93pK8W7nX0zEOrfu5cbqggnsdSgLpNrUEbTI2RUq7t2hks2GyMdnuVRCpbhrlir4MwYIBcRIN6D0CycEWa6J59ApeD-mstjo16AQu9Q62w2V8_7dxN1N668NmfhYLmrwfAWOGWlP-EuavxwA6BOnPqCxg8WiPnyqyxT7UmDHriQb9eTv-jJH_cEjl_Vii1vA-DQP4AUzk_CeyobzBAycgzQ4-EiBohE1guK88QFol8qRYq50",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQABPDnYb5rezcyUAGc2YdxJRjQIfLaXlDEVhF2yySR1QpiqIuo93pK8W7nX0zEOrfu5cbqggnsdSgLpNrUEbTI2RUq7t2hks2GyMdnuVRCpbhrlir4MwYIBcRIN6D0CycEWa6J59ApeD-mstjo16AQu9Q62w2V8_7dxN1N668NmfhYLmrwfAWOGWlP-EuavxwA6BOnPqCxg8WiPnyqyxT7UmDHriQb9eTv-jJH_cEjl_Vii1vA-DQP4AUzk_CeyobzBAycgzQ4-EiBohE1guK88QFol8qRYq50"
      },
      {
        "judul": "Profil Kemiskinan di Kabupaten Sigi 2024(1)2026-03-06",
        "tanggal": "2026-03-06",
        "ringkas": "Pada tahun 2024, jumlah penduduk miskin di Kabupaten Sigi berjumlah 29,80 ribu orang (12,06 persen dari total penduduk). Secara persentase, persentase penduduk miskin di kabupaten Sigi Tahun 2024 (12,06 persen) menurun dibandingkan dengan tahun 2023 (12,83 per",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQABVT_Mcena7eZvG7aalVwnIE5FbICCnLUwlkD40QVL9Up8nRnIOEfHzISXPQMKkilDPuBi6yawhtntB9ugGX1vR0cMSN1brYcdMu0dNGgAd0TyjcMDE8lKpkBl9_iPWZ_vgJfgeNYkxFlab4sJ3vOu82JpFW6XltvEFr4-G-aqMEarbnORXDkCBfLl66oqkuuyDEwktPe-bD_4bxepn16cDJAAWdMMQiwbIB7lwxIYEDJ-jCvDnJB-QTl38cA4xzb9cN6xJ_QPRVE6uQHfqqb1lFrtLdU4Apo",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQABVT_Mcena7eZvG7aalVwnIE5FbICCnLUwlkD40QVL9Up8nRnIOEfHzISXPQMKkilDPuBi6yawhtntB9ugGX1vR0cMSN1brYcdMu0dNGgAd0TyjcMDE8lKpkBl9_iPWZ_vgJfgeNYkxFlab4sJ3vOu82JpFW6XltvEFr4-G-aqMEarbnORXDkCBfLl66oqkuuyDEwktPe-bD_4bxepn16cDJAAWdMMQiwbIB7lwxIYEDJ-jCvDnJB-QTl38cA4xzb9cN6xJ_QPRVE6uQHfqqb1lFrtLdU4Apo"
      },
      {
        "judul": "Ekonomi Kabupaten Sigi Tahun 2024 tumbuh 3,50 persen(1)2026-02-10",
        "tanggal": "2026-02-10",
        "ringkas": "Ekonomi Kabupaten Sigi tahun 2024 tumbuh sebesar 3,50 persen. Dari sisi produksi, pertumbuhan tertinggi terjadi pada Lapangan Usaha Transportasi dan Pergudangan mengalami pertumbuhan tertinggi sebesar 12,92 persen. Sementara dari sisi pengeluaran, pertumbuhan ",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQABmJmkMi1kIGhN0GKJid1jYcEqIe6FErL64QP03mZUjwunT9YamsEfeDQwImatLyPXaKwZaHjRD2LYmdJN8VtLCvjO8wngkqnxHib964A3IdsXImu1SDu_fgp8qu2ZmY-dA-ppoOMaZ4zmxWsRzdWM72rDc8NQHQBsujfB07sGE_c8s3xNBt7MIqvpV1AM_NhETR0nok6YXyCxrnybfSPhGiq2SoGbPelQjVDegEQPeljBjpeLdMtLBIld2nqLLF8diCXawA2vVJsxwDndUYxcsSdU2_U3jKLIdFvWstoEMXOnrA",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQABmJmkMi1kIGhN0GKJid1jYcEqIe6FErL64QP03mZUjwunT9YamsEfeDQwImatLyPXaKwZaHjRD2LYmdJN8VtLCvjO8wngkqnxHib964A3IdsXImu1SDu_fgp8qu2ZmY-dA-ppoOMaZ4zmxWsRzdWM72rDc8NQHQBsujfB07sGE_c8s3xNBt7MIqvpV1AM_NhETR0nok6YXyCxrnybfSPhGiq2SoGbPelQjVDegEQPeljBjpeLdMtLBIld2nqLLF8diCXawA2vVJsxwDndUYxcsSdU2_U3jKLIdFvWstoEMXOnrA"
      },
      {
        "judul": "Indeks Pembangunan Manusia (IPM) Kabupaten Sigi tahun 2023 mencapai 70,28, meningkat 0,88 (1)2026-02-10",
        "tanggal": "2026-02-10",
        "ringkas": "Pembangunan manusia di Kabupaten Sigi terus mengalami kemajuan. Status pembangunan manusia di Kabupaten Sigi sudah berada di level “tinggi”. Selama 2020–2023, IPM Kabupaten Sigi terus mengalami peningkatan setiap tahunnya, dari 68,48 pada tahun 2020 menjadi 70",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQAB2ZSNkmyij_xzp9GWNnwLnNaxB1cwYo6ZkjA2U4ny8eqvhpD_KqjW6jcYCEYjKsp6F7tYHW748y_n65ZEWeeFbdg0Lj17j2N45P8ocfJlTNomU-edRLBe2VF8Bqe7RgmzxQQGHwK5djlyZEDyu0KRlB-u7FOpoJn9WSEW7OEqPGZGSsrCiWvgFwaQGUtz_uVseq6Hxekb75qGY8E2-ep7FwGSGN0QHB8k2cjbfE34X6JIWioflfcrlHYYiXh-Muo5xqzKb_o7gihNsnn44pdfRNZBNKWkI1FgscXyH-9K5jTEMwjzX7UjkNCUBAIi37He5ka__hOSeAGhFNyO7UdX2WEtnQJGdw",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQAB2ZSNkmyij_xzp9GWNnwLnNaxB1cwYo6ZkjA2U4ny8eqvhpD_KqjW6jcYCEYjKsp6F7tYHW748y_n65ZEWeeFbdg0Lj17j2N45P8ocfJlTNomU-edRLBe2VF8Bqe7RgmzxQQGHwK5djlyZEDyu0KRlB-u7FOpoJn9WSEW7OEqPGZGSsrCiWvgFwaQGUtz_uVseq6Hxekb75qGY8E2-ep7FwGSGN0QHB8k2cjbfE34X6JIWioflfcrlHYYiXh-Muo5xqzKb_o7gihNsnn44pdfRNZBNKWkI1FgscXyH-9K5jTEMwjzX7UjkNCUBAIi37He5ka__hOSeAGhFNyO7UdX2WEtnQJGdw"
      },
      {
        "judul": "Poster Luas Panen",
        "tanggal": null,
        "ringkas": "",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQABRIoDcCkZEdzydEhLWZm8XdAAGtgXjBWbUT8IGt1MYyXAUyvEa04LzvxdFXWCHzIEn_ZE9OLcvpqRh0bIMJ9EMwTXFjCw3Tk0MNeea6D7niuXKXfZoMQWLiVAvVl2HGxc-kRnN4qItsJQ0RV1LaYxHk055KpaeCz0wT7TeKcNn4jFY9DKdI3HUselbSv9Dxr91ub4vor4MqmD_w",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQABRIoDcCkZEdzydEhLWZm8XdAAGtgXjBWbUT8IGt1MYyXAUyvEa04LzvxdFXWCHzIEn_ZE9OLcvpqRh0bIMJ9EMwTXFjCw3Tk0MNeea6D7niuXKXfZoMQWLiVAvVl2HGxc-kRnN4qItsJQ0RV1LaYxHk055KpaeCz0wT7TeKcNn4jFY9DKdI3HUselbSv9Dxr91ub4vor4MqmD_w"
      },
      {
        "judul": "Potret Pendidikan",
        "tanggal": null,
        "ringkas": "",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQABmBN8MHEn9H5b3h4IKz7QBja0BmUiNNj4H4h0vRgj5ddwFH9xKAKHWK5_DQJkJifkiswldeHtdOgRvhfgqQNj-rjVvT-S827l48a-fvyiaTh83fFyiOuWO2YreI8KCKSh9864qOug4wDSQrElBkWR6bDDpY7cZo9GuEdElhXbwk0kn971DtxkrNYk5kJEGJICXdOPC4WploDzHw",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQABmBN8MHEn9H5b3h4IKz7QBja0BmUiNNj4H4h0vRgj5ddwFH9xKAKHWK5_DQJkJifkiswldeHtdOgRvhfgqQNj-rjVvT-S827l48a-fvyiaTh83fFyiOuWO2YreI8KCKSh9864qOug4wDSQrElBkWR6bDDpY7cZo9GuEdElhXbwk0kn971DtxkrNYk5kJEGJICXdOPC4WploDzHw"
      },
      {
        "judul": "Poster Garis Kemiskinan",
        "tanggal": null,
        "ringkas": "",
        "unduh": "https://webapi.bps.go.id/download.php?f=AQABqgyM01QCvMBIKT59b5FSjB13Men37PdzJzh7WhUlvs4Xpq3uhKuF7Dh8esSvlhCxA33vWnhUB8PFnN6IhTp5mVzy1vqo_PuPEwSaAG-bxxgom3nYTJapwuUHs2dE_Gasks19AtBNJxKO_57fmFvFXJW1u2jRxjEpXp_AkifcQ9oNTMDs46t-W594aDw4B_dNpKz3nms9_d6uFCAmMfTJTWszM8faow",
        "gambar": "https://webapi.bps.go.id/cover.php?f=AQABqgyM01QCvMBIKT59b5FSjB13Men37PdzJzh7WhUlvs4Xpq3uhKuF7Dh8esSvlhCxA33vWnhUB8PFnN6IhTp5mVzy1vqo_PuPEwSaAG-bxxgom3nYTJapwuUHs2dE_Gasks19AtBNJxKO_57fmFvFXJW1u2jRxjEpXp_AkifcQ9oNTMDs46t-W594aDw4B_dNpKz3nms9_d6uFCAmMfTJTWszM8faow"
      }
    ]
  }
};

/* Dipakai pemuat data (assets/muat.js) sebagai cadangan dan benih. */
window.INDIKATOR_AWAL = DATA;

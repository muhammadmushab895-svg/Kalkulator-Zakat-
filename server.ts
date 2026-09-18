import express from "express";
import path from "path";
import fs from "fs";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "10mb" }));

// Lazy Google Gen AI initialization
let aiClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is missing.");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    app: "Kalkulator & Modul Fiqih Zakat Syariah",
    time: new Date().toISOString(),
  });
});

// Standard current gold price reference (Indonesian standard BAZNAS / Antam reference)
app.get("/api/gold-price", (_req, res) => {
  // Reference standard: ~Rp 1.400.000 / gram (Sept 2024 / current standard BAZNAS 85g = Rp 119.000.000 / year or ~Rp 9.916.666 / month)
  res.json({
    goldPricePerGram: 1400000,
    nisabGrams: 85,
    nisabPerYear: 1400000 * 85,
    nisabPerMonth: Math.round((1400000 * 85) / 12),
    silverPricePerGram: 18000,
    silverNisabGrams: 595,
    silverNisabTotal: 18000 * 595,
    source: "Standar Acuan SK BAZNAS & Antam Nasional",
    updatedAt: new Date().toISOString(),
  });
});

// AI Contemporary Fiqh Zakat Expert Consultation API
app.post("/api/zakat/consult", async (req, res) => {
  try {
    const { query, mode, contextData } = req.body;

    if (!query || typeof query !== "string") {
      return res.status(400).json({ error: "Pertanyaan atau nominal wajib diisi." });
    }

    const ai = getGenAI();

    const systemInstruction = `Anda adalah pakar fiqih zakat kontemporer sekaligus sistem terpadu "Kalkulator & Modul Belajar Fiqih Zakat Syariah".
Tugas Anda terbagi menjadi dua fungsi utama:
1. **Kalkulator Zakat Interaktif**: Menghitung kewajiban zakat secara matematis dan transparan.
2. **Pusat Pembelajaran Fiqih Zakat (Tafaqquh fi az-Zakah)**: Menjelaskan konsep, kaidah hukum, ikhtilaf ulama, dan istinbath hukum zakat kontemporer.

==================================================
TIGA PILAR RUJUKAN WAJIB (MUTLAK DISERTAKAN):
==================================================
Setiap jawaban Anda (baik hasil kalkulasi maupun penjelasan materi pembelajaran) WAJIB menyertakan 3 pilar rujukan berikut:
1. **Kitab Fiqh az-Zakah (Dr. Yusuf Al-Qardhawi)**:
   - Wajib menyertakan kutipan teks Arab asli (ibarat matan / teks kitab) dengan harakat yang jelas dan akurat (otentik, jangan mengarang!).
   - Wajib menyertakan terjemahan bahasa Indonesianya secara lugas dan ilmiah.
   - Penjelasan konstruksi qiyas (misal: qiyas syibh zakat profesi pada zakat uang/naqdain untuk nisab & tarif 2,5% dan zakat pertanian untuk waktu pengeluaran tanpa haul) atau kaidah istinbath-nya.
2. **Fatwa Majelis Ulama Indonesia (MUI)**:
   - Nomor, tahun, dan judul fatwa (contoh: Fatwa MUI No. 3 Tahun 2003 tentang Zakat Penghasilan; Keputusan Ijtima Ulama Komisi Fatwa se-Indonesia VI Tahun 2018 tentang Obyek Zakat Penghasilan & KHM/PTKZ; Ijtima Ulama VII Tahun 2021 tentang Zakat Perusahaan & Zakat Saham; Fatwa No. 13 Tahun 2011 tentang Hukum Zakat atas Harta Haram; Fatwa No. 4 Tahun 2003 tentang Istitsmar; Fatwa No. 8 Tahun 2011 tentang Amil Zakat; Fatwa No. 14 Tahun 2011 tentang Aset Kelolaan; Fatwa No. 1 Munas 2015 Sanitasi; Ijtima Ulama 2021 Al-Qardh Al-Hasan).
   - Kutipan teks diktum / amar putusan fatwa yang relevan secara presisi.
3. **Regulasi Positif Indonesia (KMA / PMA / Peraturan & SK BAZNAS)**:
   - UU No. 23 Tahun 2011 tentang Pengelolaan Zakat, PMA No. 52 Tahun 2014 jo. PMA No. 31 Tahun 2019 tentang Syarat dan Tata Cara Perhitungan Zakat Mal dan Zakat Fitrah, atau SK Ketua BAZNAS terkait standar nishab zakat penghasilan (setara 85 gram emas per tahun / dibagi 12 untuk bulanan).

==================================================
FORMAT RESPONS:
==================================================
Jika pengguna memberikan nominal uang/aset atau meminta perhitungan zakat, gunakan:
--- FORMAT 1: MODE KALKULATOR ZAKAT ---
### 1. Resume Hasil Perhitungan
- **Jenis Zakat**: [Zakat Profesi / Maal / Perniagaan / Saham / Perusahaan / dsb.]
- **Status Kewajiban**: [Wajib Zakat / Belum Wajib Zakat]
- **Standar Nisab**: Rp [Nominal Nisab] (setara 85 gram emas per tahun, atau dibagi 12 untuk nisab bulanan).
- **Objek Wajib Zakat**: Rp [Nominal setelah dikurangi kebutuhan pokok jika metode neto / bruto].
- **Kadar Zakat**: 2,5% (atau 5%/10% untuk pertanian)
- **Total Zakat yang Harus Dikeluarkan**: **Rp [Nominal]** ([per bulan / per tahun]).

### 2. Rincian Rumus & Simulasi
Sajikan langkah matematisnya secara transparan:
\`[Harta Bersih Wajib Zakat] × 2,5% = [Nominal Zakat]\`
(Sertakan catatan perbandingan antara metode Bruto vs Neto KHM jika relevan).

### 3. Dasar Hukum & Referensi Otoritatif
- **A. Ibarat Kitab Fiqh az-Zakah (Dr. Yusuf Al-Qardhawi)**:
  - Bab/Mabhats: [...]
  - Teks Arab:
    > [Kutipan teks Arab asli otentik]
  - Terjemahan:
    > [Terjemahan bahasa Indonesia]
  - Intisari Kaidah: [Analisis ringkas argumentasi fiqih]
- **B. Keputusan Fatwa MUI**:
  - Nomor & Judul Fatwa: [...]
  - Diktum Keputusan:
    > [Kutipan diktum resmi]
- **C. Regulasi Nasional (KMA / PMA / BAZNAS)**:
  - Dasar Regulasi: [PMA No. 52 Tahun 2014 Pasal ... / UU No. 23/2011 / SK BAZNAS]
  - Bunyi Ketentuan:
    > [Kutipan pasal resmi]

---
Jika pengguna bertanya konsep, hukum akad baru, dalil, syarat, atau topik fiqih zakat, gunakan:
--- FORMAT 2: MODE BELAJAR FIQIH ZAKAT ---
### 1. Ringkasan Konsep & Kaidah Hukum
[Penjelasan definisi, status hukum, dan kedudukan masalah tersebut dalam fiqih kontemporer secara sistematis dan ilmiah]

### 2. Kajian Teks Kitab Fiqh az-Zakah (Dr. Yusuf Al-Qardhawi)
- **Bab & Topik Pembahasan**: [...]
- **Teks Arab Asli (*Ibarat*)**:
  > [Kutipan teks Arab asli berharakat yang memuat argumentasi/illat/qiyas]
- **Terjemahan Lengkap**:
  > [Terjemahan presisi]
- **Analisis Fiqih & Istinbath**: [Penjelasan qiyas, illat hukum, atau kaidah fiqih]

### 3. Ketetapan Hukum Fatwa MUI
- **Nomor & Judul Fatwa**: [...]
- **Kutipan Diktum / Amar Putusan**:
  > [Kutipan butir konsideran/putusan resmi]
- **Penjelasan Implementasi**: [Penerapan dalam konteks Indonesia]

### 4. Rujukan Hukum Positif & Standar Regulasi
- **Payung Hukum**: [PMA 52/2014 / UU No. 23/2011 / SK BAZNAS]
- **Kutipan Pasal / Ketentuan**:
  > [Teks pasal resmi]

### 5. Contoh Studi Kasus / Aplikasi Praktis
[Contoh kasus riil beserta simulasi perhitungan matematis]

Integritas Ilmiah:
- Jangan pernah mengarang teks Arab. Kutip teks otentik dari Fiqh az-Zakah karya Dr. Yusuf Al-Qardhawi.
- Pastikan nomor fatwa dan pasal regulasi tepat dan faktual.
- Jika harta belum mencapai nisab, terangkan bahwa belum wajib zakat maal, lalu cantumkan anjuran infak/sedekah tathawwu' beserta dalilnya.`;

    let prompt = query;
    if (contextData) {
      prompt = `Konteks Simulasi Tambahan: ${JSON.stringify(contextData)}\n\nPertanyaan/Data Pengguna: ${query}`;
    }
    if (mode === "calculator") {
      prompt += "\n\n(Mohon sajikan dengan FORMAT 1: MODE KALKULATOR ZAKAT secara lengkap dengan 3 pilar rujukan wajib).";
    } else if (mode === "learn") {
      prompt += "\n\n(Mohon sajikan dengan FORMAT 2: MODE BELAJAR FIQIH ZAKAT secara lengkap dengan 3 pilar rujukan wajib).";
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.2, // Low temperature for high factual accuracy in religious jurisprudence texts
      },
    });

    const resultText = response.text || "";
    return res.json({ result: resultText });
  } catch (error: any) {
    console.error("Error in /api/zakat/consult:", error);
    return res.status(500).json({
      error: error?.message || "Terjadi kesalahan saat memproses konsultasi fiqih zakat.",
    });
  }
});

// Vite or Static file serving
async function start() {
  const distPath = path.join(process.cwd(), "dist");
  const hasDist = fs.existsSync(path.join(distPath, "index.html"));

  if (process.env.NODE_ENV === "production" || hasDist) {
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  } else {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server Fiqih Zakat Syariah berjalan di port ${PORT}`);
  });
}

start();

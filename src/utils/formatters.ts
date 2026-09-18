import { CalculationResult, LearningModule } from "../types";

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(val: number): string {
  return new Intl.NumberFormat("id-ID").format(val);
}

/**
 * Generates official FORMAT 1 plain text matching the user's prompt requirement exactly:
 * FORMAT 1: MODE KALKULATOR ZAKAT
 */
export function generateFormat1Text(result: CalculationResult): string {
  const lines: string[] = [];

  lines.push("--- FORMAT 1: MODE KALKULATOR ZAKAT ---");
  lines.push("");
  lines.push("### 1. Resume Hasil Perhitungan");
  lines.push(`- **Jenis Zakat**: ${result.typeName}`);
  lines.push(
    `- **Status Kewajiban**: ${
      result.isObligated
        ? "Wajib Zakat (Memenuhi Nisab & Ketentuan Syariah)"
        : "Belum Wajib Zakat (Di bawah Nisab - Dianjurkan Infak/Sedekah)"
    }`
  );
  lines.push(`- **Standar Nisab**: ${formatRupiah(result.nisabValue)} (${result.nisabDescription})`);
  lines.push(
    `- **Objek Wajib Zakat**: ${formatRupiah(result.taxableObjectValue)}`
  );
  lines.push(`- **Kadar Zakat**: ${result.ratePercent}%`);
  lines.push(
    `- **Total Zakat yang Harus Dikeluarkan**: **${formatRupiah(result.totalZakat)}** (${result.period})`
  );
  lines.push("");
  lines.push("### 2. Rincian Rumus & Simulasi");
  lines.push(`\`${result.mathematicalFormula}\``);
  if (result.comparisonNote) {
    lines.push(`*Catatan Metodologi*: ${result.comparisonNote}`);
  }
  lines.push("");
  lines.push("### 3. Dasar Hukum & Referensi Otoritatif");
  lines.push("- **A. Ibarat Kitab Fiqh az-Zakah (Dr. Yusuf Al-Qardhawi)**:");
  lines.push(`  - Bab/Mabhats: ${result.pillars.fiqhAzZakah.bab}`);
  lines.push("  - Teks Arab:");
  lines.push(`    > ${result.pillars.fiqhAzZakah.arabicText}`);
  lines.push("  - Terjemahan:");
  lines.push(`    > "${result.pillars.fiqhAzZakah.translation}"`);
  lines.push(`  - Intisari Kaidah: ${result.pillars.fiqhAzZakah.istinbathAnalysis}`);
  lines.push("");
  lines.push("- **B. Keputusan Fatwa MUI**:");
  lines.push(`  - Nomor & Judul Fatwa: ${result.pillars.fatwaMui.numberAndTitle}`);
  lines.push("  - Diktum Keputusan:");
  lines.push(`    > "${result.pillars.fatwaMui.diktum}"`);
  lines.push(`  - Penjelasan Implementasi: ${result.pillars.fatwaMui.implementationNotes}`);
  lines.push("");
  lines.push("- **C. Regulasi Nasional (KMA / PMA / BAZNAS)**:");
  lines.push(`  - Dasar Regulasi: ${result.pillars.regulasi.legalBasis}`);
  lines.push("  - Bunyi Ketentuan:");
  lines.push(`    > "${result.pillars.regulasi.statutoryText}"`);

  return lines.join("\n");
}

/**
 * Generates official FORMAT 2 plain text matching the user's prompt requirement exactly:
 * FORMAT 2: MODE BELAJAR FIQIH ZAKAT
 */
export function generateFormat2Text(module: LearningModule): string {
  const lines: string[] = [];

  lines.push("--- FORMAT 2: MODE BELAJAR FIQIH ZAKAT ---");
  lines.push("");
  lines.push(`Judul Materi: ${module.title} (${module.arabicTitle || ""})`);
  lines.push("");
  lines.push("### 1. Ringkasan Konsep & Kaidah Hukum");
  lines.push(module.summary);
  lines.push("");
  lines.push("### 2. Kajian Teks Kitab Fiqh az-Zakah (Dr. Yusuf Al-Qardhawi)");
  lines.push(`- **Bab & Topik Pembahasan**: ${module.pillars.fiqhAzZakah.bab}`);
  lines.push("- **Teks Arab Asli (*Ibarat*)**:");
  lines.push(`  > ${module.pillars.fiqhAzZakah.arabicText}`);
  lines.push("- **Terjemahan Lengkap**:");
  lines.push(`  > "${module.pillars.fiqhAzZakah.translation}"`);
  lines.push(`- **Analisis Fiqih & Istinbath**: ${module.pillars.fiqhAzZakah.istinbathAnalysis}`);
  lines.push("");
  lines.push("### 3. Ketetapan Hukum Fatwa MUI");
  lines.push(`- **Nomor & Judul Fatwa**: ${module.pillars.fatwaMui.numberAndTitle}`);
  lines.push("- **Kutipan Diktum / Amar Putusan**:");
  lines.push(`  > "${module.pillars.fatwaMui.diktum}"`);
  lines.push(`- **Penjelasan Implementasi**: ${module.pillars.fatwaMui.implementationNotes}`);
  lines.push("");
  lines.push("### 4. Rujukan Hukum Positif & Standar Regulasi");
  lines.push(`- **Payung Hukum**: ${module.pillars.regulasi.legalBasis}`);
  lines.push("- **Kutipan Pasal / Ketentuan**:");
  lines.push(`  > "${module.pillars.regulasi.statutoryText}"`);
  lines.push("");
  lines.push("### 5. Contoh Studi Kasus / Aplikasi Praktis");
  lines.push(`**Kasus**: ${module.caseStudy.title}`);
  lines.push(`*Deskripsi*: ${module.caseStudy.scenario}`);
  lines.push(`*Langkah Perhitungan*: \n${module.caseStudy.calculationSteps}`);
  lines.push(`*Kesimpulan*: ${module.caseStudy.conclusion}`);

  return lines.join("\n");
}

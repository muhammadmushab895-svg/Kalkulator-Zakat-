import React, { useState } from "react";
import {
  Copy,
  Check,
  Printer,
  BookOpen,
  Scale,
  Building2,
  FileText,
  AlertCircle,
  HelpCircle,
  Share2,
} from "lucide-react";
import { CalculationResult } from "../types";
import { formatRupiah, generateFormat1Text } from "../utils/formatters";

interface CalculatorResultCardProps {
  result: CalculationResult;
  onAskAi: (prompt: string, contextData: any) => void;
}

export const CalculatorResultCard: React.FC<CalculatorResultCardProps> = ({
  result,
  onAskAi,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = generateFormat1Text(result);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="zakat-result-certificate"
      className="bg-white rounded-2xl border border-stone-200 shadow-xl overflow-hidden transition-all print:border-none print:shadow-none"
    >
      {/* Header Banner */}
      <div
        className={`px-6 py-5 text-white ${
          result.isObligated
            ? "bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900"
            : "bg-gradient-to-r from-stone-800 via-stone-700 to-stone-800"
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/20 border border-white/20">
                FORMAT 1: MODE KALKULATOR ZAKAT
              </span>
              <span className="text-xs text-amber-300 font-medium">
                {result.typeName}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              Resume Hasil Perhitungan Zakat
            </h2>
          </div>

          <div className="flex items-center gap-2 print:hidden">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
              title="Salin Teks Format 1 Resmi"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-amber-300" />
                  <span className="text-amber-300">Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Format 1</span>
                </>
              )}
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
              title="Cetak Bukti Perhitungan"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak</span>
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* 1. Resume Hasil Perhitungan */}
        <section>
          <div className="flex items-center gap-2 text-stone-900 font-bold text-base border-b border-stone-200 pb-2 mb-4">
            <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-black">
              1
            </span>
            <h3>Resume Hasil Perhitungan</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Status Card */}
            <div
              className={`p-4 rounded-xl border ${
                result.isObligated
                  ? "bg-emerald-50/70 border-emerald-300"
                  : "bg-amber-50/60 border-amber-300"
              }`}
            >
              <span className="text-xs text-stone-500 font-medium block">
                Status Kewajiban
              </span>
              <div className="flex items-center gap-2 mt-1">
                <span
                  className={`inline-block w-3 h-3 rounded-full ${
                    result.isObligated ? "bg-emerald-600 animate-pulse" : "bg-amber-500"
                  }`}
                />
                <span
                  className={`font-bold text-lg ${
                    result.isObligated ? "text-emerald-900" : "text-amber-900"
                  }`}
                >
                  {result.isObligated ? "Wajib Zakat" : "Belum Wajib Zakat"}
                </span>
              </div>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                {result.isObligated
                  ? `Harta telah mencapai nisab ${formatRupiah(
                      result.nisabValue
                    )} (${result.nisabDescription}). Wajib ditunaikan kepada mustahiq atau amil resmi.`
                  : `Harta belum mencapai standar nisab ${formatRupiah(
                      result.nisabValue
                    )}. Tidak dibebani zakat mal wajib, namun sangat dianjurkan bersedekah/infak tathawwu'.`}
              </p>
            </div>

            {/* Total Zakat Card */}
            <div
              className={`p-4 rounded-xl border ${
                result.isObligated
                  ? "bg-emerald-900 text-white border-emerald-950"
                  : "bg-stone-100 text-stone-800 border-stone-200"
              }`}
            >
              <span
                className={`text-xs block ${
                  result.isObligated ? "text-emerald-200" : "text-stone-500"
                }`}
              >
                Total Zakat yang Harus Dikeluarkan
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1">
                {formatRupiah(result.totalZakat)}
                <span
                  className={`text-xs font-normal ml-2 ${
                    result.isObligated ? "text-emerald-200" : "text-stone-500"
                  }`}
                >
                  ({result.period})
                </span>
              </div>
              <div className="text-xs mt-2 flex items-center justify-between pt-2 border-t border-white/20">
                <span>Kadar Zakat: <strong>{result.ratePercent}%</strong></span>
                <span>Objek Bersih: <strong>{formatRupiah(result.taxableObjectValue)}</strong></span>
              </div>
            </div>
          </div>

          {/* Breakdown Table */}
          {result.breakdown && result.breakdown.length > 0 && (
            <div className="mt-4 bg-stone-50 rounded-xl border border-stone-200 overflow-hidden text-xs">
              <div className="px-4 py-2.5 bg-stone-100/80 font-bold text-stone-700 border-b border-stone-200 flex justify-between">
                <span>Rincian Komponen Perhitungan</span>
                <span>Nilai Nominal</span>
              </div>
              <div className="divide-y divide-stone-200">
                {result.breakdown.map((item, idx) => (
                  <div key={idx} className="px-4 py-2 flex justify-between items-center">
                    <div>
                      <span className="font-medium text-stone-800">{item.label}</span>
                      {item.description && (
                        <span className="text-[11px] text-stone-500 block">
                          {item.description}
                        </span>
                      )}
                    </div>
                    <span className="font-bold text-stone-900 font-mono">
                      {formatRupiah(item.value)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* 2. Rincian Rumus & Simulasi */}
        <section>
          <div className="flex items-center gap-2 text-stone-900 font-bold text-base border-b border-stone-200 pb-2 mb-4">
            <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-black">
              2
            </span>
            <h3>Rincian Rumus & Simulasi Matematis</h3>
          </div>

          <div className="bg-stone-900 text-emerald-300 p-4 rounded-xl font-mono text-xs sm:text-sm overflow-x-auto shadow-inner border border-stone-800">
            {result.mathematicalFormula}
          </div>

          {result.comparisonNote && (
            <div className="mt-3 p-3.5 bg-amber-50 rounded-xl border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>Catatan Metodologi Fiqih:</strong> {result.comparisonNote}
              </div>
            </div>
          )}
        </section>

        {/* 3. Dasar Hukum & Tiga Pilar Rujukan Otoritatif */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-stone-900 font-bold text-base border-b border-stone-200 pb-2">
            <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-black">
              3
            </span>
            <h3>Dasar Hukum & Tiga Pilar Referensi Otoritatif</h3>
          </div>

          {/* Pilar A: Kitab Fiqh az-Zakah (Dr. Yusuf Al-Qardhawi) */}
          <div className="p-4 sm:p-5 rounded-xl bg-emerald-50/60 border border-emerald-200/80 space-y-3">
            <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
              <BookOpen className="w-4 h-4 text-emerald-700" />
              <h4>A. Ibarat Kitab Fiqh az-Zakah (Dr. Yusuf Al-Qardhawi)</h4>
            </div>
            <div className="text-xs text-emerald-800 font-medium">
              <strong>Bab/Mabhats:</strong> {result.pillars.fiqhAzZakah.bab}
            </div>

            {/* Authentic Arabic Text with Harakat */}
            <div className="bg-white p-4 rounded-xl border border-emerald-200 shadow-xs">
              <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block mb-2">
                Teks Arab Asli (Ibarat Matan Kitab):
              </span>
              <p
                dir="rtl"
                className="font-serif text-base sm:text-lg text-stone-900 leading-loose text-right font-normal selection:bg-emerald-200"
              >
                {result.pillars.fiqhAzZakah.arabicText}
              </p>
            </div>

            {/* Translation */}
            <div className="text-xs text-stone-700 space-y-1 bg-emerald-100/40 p-3 rounded-lg">
              <strong className="text-emerald-950 block">Terjemahan Ilmiah:</strong>
              <blockquote className="italic border-l-2 border-emerald-600 pl-2">
                "{result.pillars.fiqhAzZakah.translation}"
              </blockquote>
            </div>

            {/* Istinbath */}
            <div className="text-xs text-stone-700 bg-white p-3 rounded-lg border border-emerald-100">
              <strong className="text-emerald-950 block mb-1">
                Intisari Kaidah & Konstruksi Qiyas:
              </strong>
              <p className="leading-relaxed">
                {result.pillars.fiqhAzZakah.istinbathAnalysis}
              </p>
            </div>
          </div>

          {/* Pilar B: Keputusan Fatwa MUI */}
          <div className="p-4 sm:p-5 rounded-xl bg-amber-50/60 border border-amber-200/80 space-y-3">
            <div className="flex items-center gap-2 text-amber-950 font-bold text-sm">
              <Scale className="w-4 h-4 text-amber-700" />
              <h4>B. Keputusan Fatwa Majelis Ulama Indonesia (MUI)</h4>
            </div>
            <div className="text-xs text-amber-900 font-semibold">
              <strong>Nomor & Judul Fatwa:</strong> {result.pillars.fatwaMui.numberAndTitle}
            </div>
            <div className="bg-white p-4 rounded-xl border border-amber-200 shadow-xs text-xs space-y-1.5">
              <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider block">
                Kutipan Diktum / Amar Putusan Resmi:
              </span>
              <blockquote className="border-l-2 border-amber-500 pl-3 italic text-stone-800 whitespace-pre-line leading-relaxed">
                "{result.pillars.fatwaMui.diktum}"
              </blockquote>
            </div>
            <div className="text-xs text-stone-700 bg-white/80 p-3 rounded-lg border border-amber-100">
              <strong className="text-amber-950 block mb-1">
                Penjelasan Implementasi di Indonesia:
              </strong>
              <p className="leading-relaxed">
                {result.pillars.fatwaMui.implementationNotes}
              </p>
            </div>
          </div>

          {/* Pilar C: Regulasi Nasional (PMA / UU / BAZNAS) */}
          <div className="p-4 sm:p-5 rounded-xl bg-sky-50/60 border border-sky-200/80 space-y-3">
            <div className="flex items-center gap-2 text-sky-950 font-bold text-sm">
              <Building2 className="w-4 h-4 text-sky-700" />
              <h4>C. Regulasi Nasional (KMA / PMA / UU / BAZNAS)</h4>
            </div>
            <div className="text-xs text-sky-900 font-semibold">
              <strong>Dasar Regulasi:</strong> {result.pillars.regulasi.legalBasis}
            </div>
            <div className="bg-white p-4 rounded-xl border border-sky-200 shadow-xs text-xs space-y-1.5">
              <span className="text-[11px] font-bold text-sky-800 uppercase tracking-wider block">
                Bunyi Ketentuan Pasal / Regulasi:
              </span>
              <blockquote className="border-l-2 border-sky-500 pl-3 text-stone-800 whitespace-pre-line leading-relaxed">
                "{result.pillars.regulasi.statutoryText}"
              </blockquote>
            </div>
          </div>
        </section>

        {/* Action Callouts */}
        <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <button
            onClick={() =>
              onAskAi(
                `Saya telah menghitung ${result.typeName} dengan total objek zakat ${formatRupiah(
                  result.taxableObjectValue
                )}. Mohon berikan rincian istinbath syariah lebih lanjut untuk kondisi saya.`,
                result
              )
            }
            className="text-xs bg-emerald-800 hover:bg-emerald-900 text-white font-semibold px-4 py-2.5 rounded-xl shadow-xs transition-all flex items-center gap-2 cursor-pointer"
          >
            <HelpCircle className="w-4 h-4 text-amber-300" />
            <span>Tanyakan Kasus Khusus Ini ke AI</span>
          </button>

          <button
            onClick={handleCopy}
            className="text-xs border border-stone-300 hover:border-emerald-600 bg-white hover:bg-emerald-50 text-stone-700 hover:text-emerald-900 font-medium px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            <span>{copied ? "Format 1 Tersalin!" : "Salin Resume Format 1"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useMemo } from "react";
import {
  BookOpen,
  Search,
  Filter,
  Copy,
  Check,
  Scale,
  Building2,
  HelpCircle,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { LEARNING_MODULES } from "../data/learningModules";
import { LearningModule } from "../types";
import { generateFormat2Text } from "../utils/formatters";

interface LearningCenterProps {
  onAskAi: (prompt: string, contextData: any) => void;
}

export const LearningCenter: React.FC<LearningCenterProps> = ({ onAskAi }) => {
  const [selectedModuleId, setSelectedModuleId] = useState<string>(
    LEARNING_MODULES[0].id
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [copied, setCopied] = useState(false);

  const filteredModules = useMemo(() => {
    return LEARNING_MODULES.filter((mod) => {
      const matchSearch =
        mod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mod.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (mod.arabicTitle && mod.arabicTitle.includes(searchQuery));
      const matchCategory =
        filterCategory === "all" || mod.category === filterCategory;
      return matchSearch && matchCategory;
    });
  }, [searchQuery, filterCategory]);

  const currentModule = useMemo(() => {
    return (
      LEARNING_MODULES.find((m) => m.id === selectedModuleId) ||
      LEARNING_MODULES[0]
    );
  }, [selectedModuleId]);

  const handleCopy = () => {
    const text = generateFormat2Text(currentModule);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Title & Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white p-6 sm:p-8 rounded-2xl shadow-lg border border-emerald-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold border border-amber-400/30 mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>FORMAT 2: MODE BELAJAR FIQIH ZAKAT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Pusat Pembelajaran Fiqih Zakat Kontemporer
          </h2>
          <p className="text-emerald-200/90 text-xs sm:text-sm mt-1 max-w-2xl font-serif">
            تَفَقُّهٌ فِي الْأَحْكَامِ الشَّرْعِيَّةِ • Membedah dalil, kaidah istinbath, qiyas, amar putusan Fatwa MUI, serta regulasi positif Indonesia.
          </p>
        </div>

        <div className="bg-emerald-950/70 border border-emerald-700/50 p-3.5 rounded-xl text-xs space-y-1 self-stretch md:self-auto">
          <div className="text-amber-300 font-bold flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Tiga Pilar Rujukan Mutlak</span>
          </div>
          <div className="text-stone-300 text-[11px] leading-relaxed">
            1. Kitab <em>Fiqh az-Zakah</em> (Dr. Yusuf Al-Qardhawi) Teks Arab Asli
            <br />
            2. Diktum Resmi Fatwa MUI (1976 - 2021)
            <br />
            3. PMA No. 52/2014 jo. PMA 31/2019 & UU No. 23/2011
          </div>
        </div>
      </div>

      {/* Main Container: Module Directory List (Left) & Detailed Module Reader in FORMAT 2 (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Directory & Search */}
        <div className="lg:col-span-4 bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <h3 className="font-bold text-sm text-stone-900 flex items-center gap-2">
              <Filter className="w-4 h-4 text-emerald-700" />
              <span>Katalog Modul Fiqih ({filteredModules.length})</span>
            </h3>
          </div>

          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari topik fiqih, dalil, fatwa..."
              className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl border border-stone-300 focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 font-medium"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {[
              { id: "all", label: "Semua" },
              { id: "profesi", label: "Profesi" },
              { id: "saham", label: "Saham" },
              { id: "perusahaan", label: "Perusahaan" },
              { id: "muamalah_kontemporer", label: "Muamalah Kontemporer" },
              { id: "umum", label: "Prinsip Umum" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`text-[11px] px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                  filterCategory === cat.id
                    ? "bg-emerald-800 text-white"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Module List Items */}
          <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
            {filteredModules.map((mod) => {
              const isSelected = mod.id === currentModule.id;
              return (
                <div
                  key={mod.id}
                  onClick={() => setSelectedModuleId(mod.id)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer text-left ${
                    isSelected
                      ? "bg-emerald-50 border-emerald-500 shadow-xs"
                      : "bg-white border-stone-200 hover:border-stone-300 hover:bg-stone-50/80"
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                      {mod.badge}
                    </span>
                    <ChevronRight
                      className={`w-3.5 h-3.5 ${
                        isSelected ? "text-emerald-700" : "text-stone-400"
                      }`}
                    />
                  </div>
                  <h4 className="font-bold text-xs text-stone-900 line-clamp-2">
                    {mod.title}
                  </h4>
                  {mod.arabicTitle && (
                    <p
                      dir="rtl"
                      className="font-serif text-xs text-emerald-900/70 text-right mt-0.5"
                    >
                      {mod.arabicTitle}
                    </p>
                  )}
                  <p className="text-[11px] text-stone-500 line-clamp-2 mt-1">
                    {mod.summary}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Full FORMAT 2 Detailed Reader */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-stone-200 shadow-xl overflow-hidden">
          {/* Header of Reader */}
          <div className="bg-emerald-900 px-6 py-5 text-white flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/20 border border-white/20">
                FORMAT 2: MODE BELAJAR FIQIH ZAKAT
              </span>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight mt-1.5">
                {currentModule.title}
              </h3>
              {currentModule.arabicTitle && (
                <p dir="rtl" className="font-serif text-base text-amber-300 mt-0.5 text-right">
                  {currentModule.arabicTitle}
                </p>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                title="Salin Seluruh Format 2 Modul Ini"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-amber-300" />
                    <span className="text-amber-300">Format 2 Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin Format 2</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Body matching FORMAT 2 structure exactly */}
          <div className="p-6 sm:p-8 space-y-8 text-stone-800 text-xs sm:text-sm">
            {/* 1. Ringkasan Konsep & Kaidah Hukum */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 font-bold text-base text-stone-900 border-b border-stone-200 pb-2">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-black">
                  1
                </span>
                <h3>Ringkasan Konsep & Kaidah Hukum</h3>
              </div>
              <p className="leading-relaxed text-stone-700 bg-stone-50 p-4 rounded-xl border border-stone-200">
                {currentModule.summary}
              </p>
            </section>

            {/* 2. Kajian Teks Kitab Fiqh az-Zakah (Dr. Yusuf Al-Qardhawi) */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-base text-stone-900 border-b border-stone-200 pb-2">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-black">
                  2
                </span>
                <h3>Kajian Teks Kitab Fiqh az-Zakah (Dr. Yusuf Al-Qardhawi)</h3>
              </div>

              <div className="bg-emerald-50/60 p-4 sm:p-5 rounded-2xl border border-emerald-200 space-y-3">
                <div className="text-xs text-emerald-900 font-semibold">
                  <strong>Bab & Topik Pembahasan:</strong> {currentModule.pillars.fiqhAzZakah.bab}
                </div>

                {/* Arabic Text */}
                <div className="bg-white p-4 sm:p-5 rounded-xl border border-emerald-200 shadow-xs">
                  <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block mb-2">
                    Teks Arab Asli (*Ibarat Matan Kitab*):
                  </span>
                  <p
                    dir="rtl"
                    className="font-serif text-base sm:text-lg text-stone-900 leading-loose text-right font-normal selection:bg-emerald-200"
                  >
                    {currentModule.pillars.fiqhAzZakah.arabicText}
                  </p>
                </div>

                {/* Translation */}
                <div className="text-xs text-stone-700 bg-emerald-100/40 p-3.5 rounded-xl space-y-1">
                  <strong className="text-emerald-950 block">Terjemahan Lengkap:</strong>
                  <blockquote className="italic border-l-2 border-emerald-600 pl-3 leading-relaxed">
                    "{currentModule.pillars.fiqhAzZakah.translation}"
                  </blockquote>
                </div>

                {/* Istinbath Analysis */}
                <div className="text-xs text-stone-700 bg-white p-3.5 rounded-xl border border-emerald-100">
                  <strong className="text-emerald-950 block mb-1">
                    Analisis Fiqih & Istinbath Hukum:
                  </strong>
                  <p className="leading-relaxed">
                    {currentModule.pillars.fiqhAzZakah.istinbathAnalysis}
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Ketetapan Hukum Fatwa MUI */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-base text-stone-900 border-b border-stone-200 pb-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-black">
                  3
                </span>
                <h3>Ketetapan Hukum Fatwa Majelis Ulama Indonesia (MUI)</h3>
              </div>

              <div className="bg-amber-50/60 p-4 sm:p-5 rounded-2xl border border-amber-200 space-y-3">
                <div className="text-xs text-amber-950 font-semibold flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-700" />
                  <span>
                    <strong>Nomor & Judul Fatwa:</strong> {currentModule.pillars.fatwaMui.numberAndTitle}
                  </span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-amber-200 shadow-xs text-xs space-y-1.5">
                  <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider block">
                    Kutipan Diktum / Amar Putusan Resmi:
                  </span>
                  <blockquote className="border-l-2 border-amber-500 pl-3 italic text-stone-800 whitespace-pre-line leading-relaxed">
                    "{currentModule.pillars.fatwaMui.diktum}"
                  </blockquote>
                </div>

                <div className="text-xs text-stone-700 bg-white/80 p-3.5 rounded-xl border border-amber-100">
                  <strong className="text-amber-950 block mb-1">
                    Penjelasan Implementasi di Indonesia:
                  </strong>
                  <p className="leading-relaxed">
                    {currentModule.pillars.fatwaMui.implementationNotes}
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Rujukan Hukum Positif & Standar Regulasi */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-base text-stone-900 border-b border-stone-200 pb-2">
                <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center text-xs font-black">
                  4
                </span>
                <h3>Rujukan Hukum Positif & Standar Regulasi (PMA / UU / BAZNAS)</h3>
              </div>

              <div className="bg-sky-50/60 p-4 sm:p-5 rounded-2xl border border-sky-200 space-y-3">
                <div className="text-xs text-sky-950 font-semibold flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-sky-700" />
                  <span>
                    <strong>Payung Hukum:</strong> {currentModule.pillars.regulasi.legalBasis}
                  </span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-sky-200 shadow-xs text-xs space-y-1.5">
                  <span className="text-[11px] font-bold text-sky-800 uppercase tracking-wider block">
                    Kutipan Pasal / Ketentuan Resmi:
                  </span>
                  <blockquote className="border-l-2 border-sky-500 pl-3 text-stone-800 whitespace-pre-line leading-relaxed">
                    "{currentModule.pillars.regulasi.statutoryText}"
                  </blockquote>
                </div>
              </div>
            </section>

            {/* 5. Contoh Studi Kasus / Aplikasi Praktis */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-base text-stone-900 border-b border-stone-200 pb-2">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-black">
                  5
                </span>
                <h3>Contoh Studi Kasus & Simulasi Aplikasi Praktis</h3>
              </div>

              <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 space-y-3">
                <h4 className="font-bold text-sm text-emerald-950">
                  {currentModule.caseStudy.title}
                </h4>
                <div className="text-xs text-stone-700 space-y-2">
                  <p>
                    <strong className="text-stone-900">Kasus Riil:</strong>{" "}
                    {currentModule.caseStudy.scenario}
                  </p>
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200 font-mono text-xs whitespace-pre-line leading-relaxed text-emerald-900">
                    {currentModule.caseStudy.calculationSteps}
                  </div>
                  <div className="p-3 bg-emerald-100/50 rounded-lg text-xs font-semibold text-emerald-950 border border-emerald-200">
                    <strong>Kesimpulan Fiqih:</strong> {currentModule.caseStudy.conclusion}
                  </div>
                </div>
              </div>
            </section>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() =>
                  onAskAi(
                    `Saya sedang mempelajari materi "${currentModule.title}". Mohon jelaskan lebih dalam argumentasi fiqih Al-Qardhawi dan fatwa MUI mengenai topik ini.`,
                    currentModule
                  )
                }
                className="text-xs bg-emerald-800 hover:bg-emerald-900 text-white font-semibold px-4 py-2.5 rounded-xl shadow-xs transition-all flex items-center gap-2 cursor-pointer"
              >
                <HelpCircle className="w-4 h-4 text-amber-300" />
                <span>Konsultasikan Topik Ini ke AI</span>
              </button>

              <button
                onClick={handleCopy}
                className="text-xs border border-stone-300 hover:border-emerald-600 bg-white hover:bg-emerald-50 text-stone-700 hover:text-emerald-900 font-medium px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Format 2 Tersalin!" : "Salin Modul Lengkap (Format 2)"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

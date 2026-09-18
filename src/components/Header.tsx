import React from "react";
import { Calculator, BookOpen, MessageSquareText, ShieldCheck, Scale, Coins } from "lucide-react";
import { formatRupiah } from "../utils/formatters";

interface HeaderProps {
  activeTab: "calculator" | "learn" | "consult" | "pillars";
  setActiveTab: (tab: "calculator" | "learn" | "consult" | "pillars") => void;
  goldPrice: number;
  onOpenGoldModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  goldPrice,
  onOpenGoldModal,
}) => {
  const annualNisab = goldPrice * 85;
  const monthlyNisab = Math.round(annualNisab / 12);

  return (
    <header className="bg-emerald-900 text-stone-100 border-b border-emerald-800 shadow-md sticky top-0 z-40">
      {/* Top Banner / Ticker */}
      <div className="bg-emerald-950/80 px-4 py-1.5 text-xs border-b border-emerald-800/60 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 font-medium px-2 py-0.5 rounded-full border border-amber-400/30">
            <Scale className="w-3 h-3" /> Fiqih Zakat Syariah Terpadu
          </span>
          <span className="hidden sm:inline text-stone-300">
            Berdasarkan 3 Pilar: <strong>Fiqh az-Zakah</strong> (Al-Qardhawi), <strong>Fatwa MUI</strong>, & <strong>Regulasi BAZNAS/PMA</strong>
          </span>
        </div>

        {/* Live Gold Price Nisab Badge */}
        <button
          onClick={onOpenGoldModal}
          className="flex items-center gap-2 hover:bg-emerald-800/80 transition-colors px-2.5 py-1 rounded bg-emerald-900/60 border border-emerald-700/50 text-stone-200 cursor-pointer text-left"
          title="Klik untuk mengubah patokan harga emas"
        >
          <Coins className="w-3.5 h-3.5 text-amber-400" />
          <span>
            Emas: <strong className="text-amber-300">{formatRupiah(goldPrice)}/gr</strong>
          </span>
          <span className="text-stone-400 hidden md:inline">|</span>
          <span className="text-stone-300 hidden md:inline">
            Nisab 85g: <strong>{formatRupiah(annualNisab)}/thn</strong> (~{formatRupiah(monthlyNisab)}/bln)
          </span>
          <span className="text-[10px] bg-amber-400 text-stone-950 font-bold px-1.5 py-0.2 rounded ml-1">
            Ubah
          </span>
        </button>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-emerald-950 font-bold shadow-lg">
              <span className="font-serif text-xl font-black">ز</span>
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold tracking-tight text-stone-50 flex items-center gap-2">
                Kalkulator & Modul Zakat
                <span className="text-xs font-normal px-2 py-0.5 rounded bg-emerald-800 text-amber-300 border border-amber-400/20 hidden lg:inline">
                  Syariah Kontemporer
                </span>
              </h1>
              <p className="text-xs text-emerald-200/80 font-serif hidden sm:block">
                تَفَقُّهٌ فِي الزَّكَاةِ • Tiga Pilar Rujukan Otoritatif
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setActiveTab("calculator")}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "calculator"
                  ? "bg-amber-500 text-stone-950 shadow-md"
                  : "text-stone-200 hover:bg-emerald-800/80 hover:text-white"
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Kalkulator</span>
            </button>

            <button
              onClick={() => setActiveTab("learn")}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "learn"
                  ? "bg-amber-500 text-stone-950 shadow-md"
                  : "text-stone-200 hover:bg-emerald-800/80 hover:text-white"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Modul Belajar</span>
            </button>

            <button
              onClick={() => setActiveTab("consult")}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "consult"
                  ? "bg-amber-500 text-stone-950 shadow-md"
                  : "text-stone-200 hover:bg-emerald-800/80 hover:text-white"
              }`}
            >
              <MessageSquareText className="w-4 h-4" />
              <span className="relative">
                Tanya Pakar
                <span className="absolute -top-1.5 -right-2.5 w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              </span>
            </button>

            <button
              onClick={() => setActiveTab("pillars")}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "pillars"
                  ? "bg-amber-500 text-stone-950 shadow-md"
                  : "text-stone-200 hover:bg-emerald-800/80 hover:text-white"
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span className="hidden sm:inline">3 Pilar Rujukan</span>
              <span className="sm:hidden">Pilar</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

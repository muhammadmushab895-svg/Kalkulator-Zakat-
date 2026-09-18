/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Header } from "./components/Header";
import { GoldPriceModal } from "./components/GoldPriceModal";
import { CalculatorSection } from "./components/CalculatorSection";
import { LearningCenter } from "./components/LearningCenter";
import { AiConsultant } from "./components/AiConsultant";
import { ThreePillarsGuide } from "./components/ThreePillarsGuide";
import { ShieldCheck, HeartHandshake, Scale, BookOpen } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<
    "calculator" | "learn" | "consult" | "pillars"
  >("calculator");
  const [goldPrice, setGoldPrice] = useState<number>(1400000); // Standar BAZNAS 2024/2025 Rp 1.400.000 / gram
  const [isGoldModalOpen, setIsGoldModalOpen] = useState<boolean>(false);

  // Cross-tab prompt transfer to AI Consultant
  const [aiPrompt, setAiPrompt] = useState<string>("");
  const [aiContext, setAiContext] = useState<any>(null);

  const handleAskAi = (prompt: string, contextData: any) => {
    setAiPrompt(prompt);
    setAiContext(contextData);
    setActiveTab("consult");
  };

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 flex flex-col font-sans selection:bg-emerald-200 selection:text-emerald-950">
      {/* Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        goldPrice={goldPrice}
        onOpenGoldModal={() => setIsGoldModalOpen(true)}
      />

      {/* Gold Price Customizer Modal */}
      <GoldPriceModal
        isOpen={isGoldModalOpen}
        onClose={() => setIsGoldModalOpen(false)}
        currentGoldPrice={goldPrice}
        onUpdateGoldPrice={(price) => setGoldPrice(price)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "calculator" && (
          <CalculatorSection
            goldPrice={goldPrice}
            onAskAi={handleAskAi}
          />
        )}

        {activeTab === "learn" && (
          <LearningCenter onAskAi={handleAskAi} />
        )}

        {activeTab === "consult" && (
          <AiConsultant
            initialPrompt={aiPrompt}
            initialContext={aiContext}
          />
        )}

        {activeTab === "pillars" && <ThreePillarsGuide />}
      </main>

      {/* Institutional Syariah Footer */}
      <footer className="bg-stone-900 text-stone-300 text-xs border-t border-stone-800 mt-12 py-8 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2 md:col-span-2">
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <span className="w-7 h-7 rounded-lg bg-amber-500 text-stone-950 flex items-center justify-center font-serif text-base font-black">
                  ز
                </span>
                <span>Kalkulator & Modul Belajar Fiqih Zakat Syariah</span>
              </div>
              <p className="text-stone-400 text-xs leading-relaxed max-w-lg">
                Sistem pakar fiqih zakat kontemporer terintegrasi. Menyatukan ketelitian perhitungan matematis dengan kedalaman istinbath syariah berbasis teks asli <em>Fiqh az-Zakah</em>, ketetapan Fatwa MUI, dan regulasi positif Kemenag/BAZNAS.
              </p>
            </div>

            <div className="space-y-1.5 text-stone-400">
              <span className="text-stone-200 font-bold text-xs uppercase tracking-wider block">
                Tiga Rujukan Utama
              </span>
              <p>• Kitab <em>Fiqh az-Zakah</em> (Dr. Yusuf Al-Qardhawi)</p>
              <p>• Fatwa Majelis Ulama Indonesia (MUI)</p>
              <p>• PMA 52/2014 jo. PMA 31/2019 & UU 23/2011</p>
            </div>

            <div className="space-y-1.5 text-stone-400">
              <span className="text-stone-200 font-bold text-xs uppercase tracking-wider block">
                Standar Nisab Emas Acuan
              </span>
              <p>Harga Emas Terpasang: <strong>Rp {new Intl.NumberFormat("id-ID").format(goldPrice)} / gr</strong></p>
              <p>Nisab Tahunan (85 gr): <strong>Rp {new Intl.NumberFormat("id-ID").format(goldPrice * 85)}</strong></p>
              <p>Nisab Bulanan: <strong>Rp {new Intl.NumberFormat("id-ID").format(Math.round((goldPrice * 85) / 12))}</strong></p>
            </div>
          </div>

          <div className="pt-6 border-t border-stone-800 text-center text-stone-400 text-[11px] flex flex-wrap items-center justify-between gap-2">
            <span>
              Tafaqquh fi az-Zakah (تَفَقُّهٌ فِي الزَّكَاةِ) • Dikembangkan sesuai kaidah Fiqih Zakat Kontemporer.
            </span>
            <span className="text-stone-400">
              Kadar Zakat Mal: 2,5% • Pertanian: 5% / 10% • Fitrah: 2,5 kg beras
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

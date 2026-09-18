import React, { useState, useRef, useEffect } from "react";
import {
  MessageSquareText,
  Send,
  Sparkles,
  Bot,
  User,
  Copy,
  Check,
  RotateCcw,
  Loader2,
  BookOpen,
  Calculator,
  ShieldCheck,
  FileQuestion,
} from "lucide-react";
import { ChatMessage } from "../types";

interface AiConsultantProps {
  initialPrompt?: string;
  initialContext?: any;
}

export const AiConsultant: React.FC<AiConsultantProps> = ({
  initialPrompt,
  initialContext,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome-1",
      role: "assistant",
      content: `### Ahlan wa Sahlan di Sistem Konsultasi Fiqih Zakat Syariah Terpadu

Saya adalah asisten pakar fiqih zakat kontemporer. Saya siap membantu Anda dalam dua fungsi utama:
1. **Mode Kalkulator Zakat (Format 1)**: Menghitung kewajiban zakat secara matematis, transparan, dan terperinci.
2. **Mode Belajar Fiqih Zakat (Format 2)**: Menjelaskan konsep, kaidah hukum, ikhtilaf ulama, dan dalil istinbath.

*Setiap jawaban saya WAJIB mengacu pada Tiga Pilar Rujukan Otoritatif:*
- 📖 **Kitab Fiqh az-Zakah (Dr. Yusuf Al-Qardhawi)** beserta kutipan teks Arab asli berharakat.
- ⚖️ **Ketetapan Fatwa Majelis Ulama Indonesia (MUI)** dengan nomor & amar putusan resmi.
- 🏛️ **Regulasi Positif Indonesia (PMA No. 52/2014 jo. PMA No. 31/2019, UU 23/2011, & SK BAZNAS)**.

Silakan masukkan nominal penghasilan/aset Anda untuk perhitungan, atau ajukan pertanyaan konsep fiqih kontemporer.`,
      timestamp: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
    },
  ]);

  const [inputQuery, setInputQuery] = useState(initialPrompt || "");
  const [selectedMode, setSelectedMode] = useState<"auto" | "calculator" | "learn">("auto");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialPrompt) {
      setInputQuery(initialPrompt);
    }
  }, [initialPrompt]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (customText?: string) => {
    const textToSend = customText || inputQuery;
    if (!textToSend.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: textToSend,
      timestamp: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
      mode: selectedMode === "auto" ? undefined : selectedMode,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputQuery("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/zakat/consult", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: textToSend,
          mode: selectedMode === "auto" ? undefined : selectedMode,
          contextData: initialContext || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Gagal memproses konsultasi.");
      }

      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: data.result || "Maaf, sistem tidak menghasilkan respon.",
        timestamp: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err: any) {
      const errorMessage: ChatMessage = {
        id: `err-${Date.now()}`,
        role: "assistant",
        content: `**Terjadi Kendala:** ${err.message}\n\nPastikan koneksi internet stabil dan kunci API Gemini telah disetel dengan benar di lingkungan sistem.`,
        timestamp: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const quickPrompts = [
    {
      label: "Gaji Rp 18 Juta (Neto KHM vs Bruto)",
      prompt:
        "Gaji pokok saya Rp 15.000.000 dan tunjangan Rp 3.000.000 per bulan. Kebutuhan pokok KHM keluarga Rp 6.000.000 dan cicilan KPR Rp 2.000.000. Bagaimana perhitungan zakat profesi saya menurut Fatwa MUI 2018 dan Al-Qardhawi?",
      mode: "calculator" as const,
    },
    {
      label: "Zakat Saham Trading vs Dividen",
      prompt:
        "Saya punya portofolio saham syariah Rp 180.000.000 untuk trading dengan keuntungan Rp 30.000.000, serta saham jangka panjang dengan dividen Rp 8.000.000. Bagaimana perhitungan zakatnya per Ijtima Ulama VII 2021?",
      mode: "calculator" as const,
    },
    {
      label: "Bunga Bank & Cara Cleansing",
      prompt:
        "Saya memiliki tabungan di bank konvensional yang terakumulasi bunga Rp 25.000.000. Apakah bunga tersebut wajib dizakati atau wajib dicleansing menurut Fatwa MUI No. 13 Tahun 2011 dan Fiqh az-Zakah?",
      mode: "learn" as const,
    },
    {
      label: "Bolehkah Zakat untuk Beasiswa & Air Bersih?",
      prompt:
        "Apakah dana zakat boleh disalurkan untuk beasiswa pendidikan sarjana dan pembangunan instalasi air bersih/sanitasi menurut fatwa MUI dan Al-Qardhawi?",
      mode: "learn" as const,
    },
    {
      label: "Zakat Perusahaan Holding / BUMN",
      prompt:
        "Bagaimana konstruksi hukum kewajiban zakat perusahaan (syakhshiyyah i'tibariyyah) dan cara menghitungnya dengan metode aktiva lancar bersih per Ijtima Ulama 2021?",
      mode: "learn" as const,
    },
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white p-6 rounded-2xl shadow-lg border border-emerald-800">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold border border-amber-400/30 mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Pakar Fiqih Zakat Syariah Kontemporer</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              Tanya Jawab & Konsultasi Syariah
            </h2>
            <p className="text-emerald-200/90 text-xs sm:text-sm mt-1 max-w-2xl font-serif">
              Konsultasikan kasus keuangan, nominal gaji, portofolio investasi, atau akad fiqih kontemporer. Respons disusun otomatis dalam FORMAT 1 atau FORMAT 2 berlandaskan 3 Pilar Rujukan.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-emerald-950/70 p-1.5 rounded-xl border border-emerald-700/50 text-xs">
            <button
              onClick={() => setSelectedMode("auto")}
              className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                selectedMode === "auto" ? "bg-amber-500 text-stone-950 font-bold" : "text-stone-300"
              }`}
            >
              Deteksi Otomatis
            </button>
            <button
              onClick={() => setSelectedMode("calculator")}
              className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                selectedMode === "calculator" ? "bg-amber-500 text-stone-950 font-bold" : "text-stone-300"
              }`}
            >
              Mode Hitung (Format 1)
            </button>
            <button
              onClick={() => setSelectedMode("learn")}
              className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                selectedMode === "learn" ? "bg-amber-500 text-stone-950 font-bold" : "text-stone-300"
              }`}
            >
              Mode Belajar (Format 2)
            </button>
          </div>
        </div>
      </div>

      {/* Quick Prompt Chips */}
      <div className="bg-white p-3.5 rounded-xl border border-stone-200 shadow-xs">
        <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-2">
          Studi Kasus Cepat (Klik untuk Mencoba):
        </span>
        <div className="flex flex-wrap gap-2">
          {quickPrompts.map((qp, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedMode(qp.mode);
                setInputQuery(qp.prompt);
                handleSend(qp.prompt);
              }}
              className="text-xs px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-emerald-50 text-stone-700 hover:text-emerald-900 border border-stone-200 hover:border-emerald-300 transition-all text-left flex items-center gap-1.5 cursor-pointer"
            >
              {qp.mode === "calculator" ? (
                <Calculator className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
              ) : (
                <BookOpen className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              )}
              <span>{qp.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages Log */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-4 sm:p-6 min-h-[450px] max-h-[650px] overflow-y-auto space-y-6">
        {messages.map((msg) => {
          const isAssistant = msg.role === "assistant";
          return (
            <div
              key={msg.id}
              className={`flex gap-3.5 ${isAssistant ? "items-start" : "items-start flex-row-reverse"}`}
            >
              {/* Avatar */}
              <div
                className={`w-8 h-8 rounded-xl shrink-0 flex items-center justify-center shadow-xs ${
                  isAssistant ? "bg-emerald-900 text-amber-400" : "bg-stone-800 text-white"
                }`}
              >
                {isAssistant ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
              </div>

              {/* Message Bubble */}
              <div
                className={`max-w-[90%] sm:max-w-[85%] rounded-2xl p-4 sm:p-5 text-xs sm:text-sm shadow-xs ${
                  isAssistant
                    ? "bg-stone-50 border border-stone-200 text-stone-900"
                    : "bg-emerald-900 text-white border border-emerald-950"
                }`}
              >
                {/* Meta info */}
                <div className="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-stone-200/50 text-[11px]">
                  <span className={`font-bold ${isAssistant ? "text-emerald-950" : "text-amber-300"}`}>
                    {isAssistant ? "Pakar Fiqih Zakat Syariah" : "Anda"}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className={isAssistant ? "text-stone-400" : "text-emerald-200"}>
                      {msg.timestamp}
                    </span>
                    {isAssistant && (
                      <button
                        onClick={() => handleCopy(msg.id, msg.content)}
                        className="hover:text-emerald-700 text-stone-500 cursor-pointer p-0.5"
                        title="Salin jawaban ini"
                      >
                        {copiedId === msg.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {/* Content Render */}
                <div className="space-y-3 leading-relaxed whitespace-pre-wrap font-sans selection:bg-emerald-200">
                  {msg.content}
                </div>
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex gap-3 items-center text-xs text-stone-500 italic p-3 bg-stone-50 rounded-xl w-fit">
            <Loader2 className="w-4 h-4 animate-spin text-emerald-700" />
            <span>Pakar Fiqih sedang merumuskan istinbath syariah, menyusun teks Arab, dan menghitung rincian...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Box */}
      <div className="bg-white p-3 sm:p-4 rounded-2xl border border-stone-200 shadow-md">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-end gap-2"
        >
          <div className="flex-1">
            <textarea
              rows={2}
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Tuliskan pertanyaan fiqih zakat atau rincian aset/gaji Anda di sini... (tekan Enter untuk mengirim)"
              className="w-full p-3 text-xs sm:text-sm rounded-xl border border-stone-300 focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 resize-none font-medium text-stone-900"
            />
          </div>

          <button
            type="submit"
            disabled={!inputQuery.trim() || isLoading}
            className="bg-emerald-800 hover:bg-emerald-900 disabled:opacity-50 text-white font-bold p-3.5 rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center shrink-0"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
          </button>
        </form>
      </div>
    </div>
  );
};

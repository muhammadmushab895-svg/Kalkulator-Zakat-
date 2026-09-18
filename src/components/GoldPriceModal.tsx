import React, { useState } from "react";
import { X, Coins, RotateCcw, Check } from "lucide-react";
import { formatRupiah } from "../utils/formatters";

interface GoldPriceModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentGoldPrice: number;
  onUpdateGoldPrice: (price: number) => void;
}

export const GoldPriceModal: React.FC<GoldPriceModalProps> = ({
  isOpen,
  onClose,
  currentGoldPrice,
  onUpdateGoldPrice,
}) => {
  const [inputVal, setInputVal] = useState(currentGoldPrice.toString());

  if (!isOpen) return null;

  const handleSave = () => {
    const num = parseFloat(inputVal.replace(/\D/g, ""));
    if (!isNaN(num) && num > 100000) {
      onUpdateGoldPrice(num);
      onClose();
    }
  };

  const handlePreset = (price: number) => {
    setInputVal(price.toString());
    onUpdateGoldPrice(price);
    onClose();
  };

  const parsedVal = parseFloat(inputVal.replace(/\D/g, "")) || 0;
  const annualNisab = parsedVal * 85;
  const monthlyNisab = Math.round(annualNisab / 12);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-stone-200 overflow-hidden">
        {/* Modal Header */}
        <div className="bg-emerald-900 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Coins className="w-5 h-5 text-amber-400" />
            <h3 className="font-bold text-base">Sesuaikan Patokan Harga Emas</h3>
          </div>
          <button
            onClick={onClose}
            className="text-emerald-200 hover:text-white transition-colors p-1 rounded-lg hover:bg-emerald-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          <p className="text-xs text-stone-600 leading-relaxed">
            Standar nisab zakat maal, profesi, perniagaan, dan saham di Indonesia merujuk pada harga riil 85 gram emas murni (PMA No. 52/2014 & Fatwa MUI No. 3/2003). Anda dapat menyesuaikan harga per gram sesuai harga resmi Antam/BAZNAS hari ini.
          </p>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1.5">
              Harga Emas Murni per Gram (Rp)
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-500 font-semibold text-sm">
                Rp
              </span>
              <input
                type="number"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 font-bold text-stone-900"
                placeholder="1400000"
              />
            </div>
          </div>

          {/* Quick Presets */}
          <div>
            <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block mb-2">
              Pilihan Cepat Standar Acuan:
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => handlePreset(1400000)}
                className="text-xs p-2 text-left rounded-lg border border-stone-200 hover:border-emerald-500 hover:bg-emerald-50 transition-all cursor-pointer"
              >
                <span className="font-bold text-stone-800 block">Rp 1.400.000 / gr</span>
                <span className="text-[10px] text-stone-500">Standar BAZNAS 2024/2025</span>
              </button>
              <button
                type="button"
                onClick={() => handlePreset(1350000)}
                className="text-xs p-2 text-left rounded-lg border border-stone-200 hover:border-emerald-500 hover:bg-emerald-50 transition-all cursor-pointer"
              >
                <span className="font-bold text-stone-800 block">Rp 1.350.000 / gr</span>
                <span className="text-[10px] text-stone-500">Standar Konservatif</span>
              </button>
            </div>
          </div>

          {/* Computed Preview */}
          <div className="bg-emerald-50 rounded-xl p-3.5 border border-emerald-200/70 text-xs space-y-1.5">
            <div className="flex justify-between items-center text-stone-700">
              <span>Nisab Tahunan (85 gr):</span>
              <strong className="text-emerald-900 font-bold">{formatRupiah(annualNisab)}</strong>
            </div>
            <div className="flex justify-between items-center text-stone-700">
              <span>Nisab Bulanan (1/12):</span>
              <strong className="text-emerald-900 font-bold">{formatRupiah(monthlyNisab)}</strong>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => {
                setInputVal("1400000");
                onUpdateGoldPrice(1400000);
                onClose();
              }}
              className="text-xs text-stone-600 hover:text-stone-900 flex items-center gap-1 px-3 py-2"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset Default
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs px-5 py-2.5 rounded-xl shadow-md flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Check className="w-4 h-4" /> Simpan & Terapkan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

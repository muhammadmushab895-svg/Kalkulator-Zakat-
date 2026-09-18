import React from "react";
import { BookOpen, Scale, Building2, CheckCircle2, Award, ExternalLink } from "lucide-react";

export const ThreePillarsGuide: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto">
      {/* Hero */}
      <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-white p-6 sm:p-8 rounded-2xl shadow-xl border border-emerald-800">
        <span className="text-[11px] font-bold tracking-wider text-amber-300 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/30 inline-block mb-3">
          STANDAR METODOLOGI ILMIAH & SYARIAH
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Tiga Pilar Rujukan Otoritatif Zakat
        </h2>
        <p className="text-emerald-200 text-xs sm:text-sm mt-2 font-serif leading-relaxed max-w-3xl">
          Seluruh kalkulasi matematis, penetapan nisab, rumus pemotongan kebutuhan pokok, dan jawaban konsultasi dalam sistem ini berakar kuat pada tiga pilar syariah dan hukum positif yang tak terpisahkan.
        </p>
      </div>

      {/* Grid of the 3 Pillars */}
      <div className="space-y-8">
        {/* Pilar 1 */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xl">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Pilar Pertama
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                Kitab <em>Fiqh az-Zakah</em> (Dr. Yusuf Al-Qardhawi)
              </h3>
            </div>
          </div>

          <div className="text-xs sm:text-sm text-stone-700 space-y-3 leading-relaxed">
            <p>
              Kitab <em>Fiqh az-Zakah</em> (فقه الزكاة) adalah magnum opus disertasi doktoral Syekh Dr. Yusuf Al-Qardhawi di Universitas Al-Azhar Kairo yang pertama kali terbit tahun 1969. Karya ini diakui secara aklamasi oleh para fuqaha dunia Islam kontemporer sebagai ensiklopedia zakat paling komprehensif dan otoritatif di abad modern.
            </p>
            <div className="bg-emerald-50/80 p-4 rounded-xl border border-emerald-200 text-xs space-y-2">
              <strong className="text-emerald-950 block font-bold">
                Kaidah & Konstruksi Fiqih Utama yang Diterapkan:
              </strong>
              <ul className="list-disc list-inside space-y-1 text-emerald-900">
                <li>
                  <strong>I'tibar al-Ma'ani (Substansi atas Bentuk Fisik)</strong>: Harta yang berkembang (<em>an-nama'</em>) pada era modern tidak terbatas pada unta, kambing, dan gandum, melainkan mencakup profesi keahlian (<em>kasb al-'amal</em>), surat berharga (<em>ashum wa sanadat</em>), dan perusahaan.
                </li>
                <li>
                  <strong>Qiyas Syabah (Perpaduan Profesi)</strong>: Menganalogikan zakat profesi pada zakat pertanian dalam hal waktu penunaian (saat menerima/panen tanpa syarat haul 1 tahun) dan zakat emas/perak dalam hal kadar tarif 2,5%.
                </li>
                <li>
                  <strong>Zakat al-Mustaghallat</strong>: Pengenaan zakat pada aset produktif modal (gedung disewakan, pabrik, saham investasi jangka panjang) yang dikenakan atas hasil pendapatan bersihnya, bukan nilai fisik aset tetapnya.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pilar 2 */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xl">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                Pilar Kedua
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                Ketetapan Fatwa Majelis Ulama Indonesia (MUI)
              </h3>
            </div>
          </div>

          <div className="text-xs sm:text-sm text-stone-700 space-y-3 leading-relaxed">
            <p>
              Komisi Fatwa MUI bersama Ijtima Ulama Komisi Fatwa se-Indonesia merupakan representasi ijma' ulama ormas-ormas Islam (NU, Muhammadiyah, dll.) di tanah air dalam menetapkan hukum syariah yang mengikat secara keagamaan bagi muslim Indonesia.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                <span className="font-bold text-stone-900 block">
                  Fatwa MUI No. 3 Tahun 2003
                </span>
                <p className="text-stone-600">
                  Menetapkan keabsahan dan kewajiban Zakat Penghasilan (profesi) sebesar 2,5% dengan nisab 85 gram emas per tahun.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                <span className="font-bold text-stone-900 block">
                  Ijtima Ulama Komisi Fatwa 2018
                </span>
                <p className="text-stone-600">
                  Menetapkan kebolehan pemotongan Kebutuhan Hidup Minimal (KHM/PTKZ) dan utang jatuh tempo sebelum pengujian nisab zakat profesi (Metode Neto).
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                <span className="font-bold text-stone-900 block">
                  Ijtima Ulama Komisi Fatwa VII 2021
                </span>
                <p className="text-stone-600">
                  Menetapkan panduan fiqih Zakat Saham (trading vs jangka panjang), Reksadana, dan Zakat Perusahaan dengan Metode Working Capital.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                <span className="font-bold text-stone-900 block">
                  Fatwa MUI No. 13 Tahun 2011
                </span>
                <p className="text-stone-600">
                  Panduan penyaluran dana zakat untuk program produktif, investasi usaha mikro, dan beasiswa berkelanjutan bagi asnaf mustahiq.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pilar 3 */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold text-xl">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                Pilar Ketiga
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                Regulasi Positif Indonesia (UU, PMA, & BAZNAS)
              </h3>
            </div>
          </div>

          <div className="text-xs sm:text-sm text-stone-700 space-y-3 leading-relaxed">
            <p>
              Negara Kesatuan Republik Indonesia telah mentransformasikan fiqih zakat menjadi hukum positif formal untuk menjamin kepastian hukum, transparansi audit amil, dan integrasi dengan sistem perpajakan nasional.
            </p>
            <div className="bg-sky-50/80 p-4 rounded-xl border border-sky-200 text-xs space-y-2 text-sky-950">
              <strong className="block font-bold">Hirarki Peraturan Perundang-undangan Zakat:</strong>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>Undang-Undang No. 23 Tahun 2011</strong> tentang Pengelolaan Zakat: Mengatur kelembagaan BAZNAS & LAZ serta bukti setor zakat sebagai pengurang Penghasilan Kena Pajak (PKP/Tax Deduction).
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>Peraturan Menteri Agama (PMA) No. 52 Tahun 2014 jo. PMA No. 31 Tahun 2019</strong>: Menetapkan standar teknis perhitungan nisab, haul, dan kadar zakat mal serta fitrah secara mengikat di Indonesia.
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>Surat Keputusan Ketua BAZNAS RI</strong> (diterbitkan berkala setiap tahun): Menetapkan nilai nominal rupiah nisab zakat pendapatan dan jasa berdasarkan harga rata-rata emas riil.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

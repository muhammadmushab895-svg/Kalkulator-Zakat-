import React, { useState, useMemo } from "react";
import {
  Briefcase,
  Coins,
  Store,
  TrendingUp,
  Building2,
  Wheat,
  HeartHandshake,
  HelpCircle,
  Calculator,
  RefreshCw,
} from "lucide-react";
import { ZakatType, CalculationResult } from "../types";
import { ZAKAT_PILLARS_DATA } from "../data/zakatReferences";
import { formatRupiah } from "../utils/formatters";
import { CalculatorResultCard } from "./CalculatorResultCard";

interface CalculatorSectionProps {
  goldPrice: number;
  onAskAi: (prompt: string, contextData: any) => void;
}

export const CalculatorSection: React.FC<CalculatorSectionProps> = ({
  goldPrice,
  onAskAi,
}) => {
  const [activeCategory, setActiveCategory] = useState<ZakatType>("profesi");

  // --- 1. State Zakat Profesi ---
  const [profesiPeriod, setProfesiPeriod] = useState<"bulan" | "tahun">("bulan");
  const [profesiMethod, setProfesiMethod] = useState<"neto" | "bruto">("neto");
  const [gajiPokok, setGajiPokok] = useState<number>(12000000);
  const [tunjanganLain, setTunjanganLain] = useState<number>(3000000);
  const [penghasilanLain, setPenghasilanLain] = useState<number>(0);
  const [kebutuhanPokokKhm, setKebutuhanPokokKhm] = useState<number>(6000000);
  const [utangJatuhTempo, setUtangJatuhTempo] = useState<number>(1000000);

  // --- 2. State Zakat Maal (Tabungan / Emas) ---
  const [saldoTabungan, setSaldoTabungan] = useState<number>(100000000);
  const [depositoBank, setDepositoBank] = useState<number>(50000000);
  const [emasGram, setEmasGram] = useState<number>(20);
  const [perakGram, setPerakGram] = useState<number>(0);
  const [utangPribadi, setUtangPribadi] = useState<number>(15000000);

  // --- 3. State Zakat Perniagaan ---
  const [stokBarang, setStokBarang] = useState<number>(120000000);
  const [kasPerniagaan, setKasPerniagaan] = useState<number>(30000000);
  const [piutangLancar, setPiutangLancar] = useState<number>(20000000);
  const [utangDagang, setUtangDagang] = useState<number>(25000000);

  // --- 4. State Zakat Saham ---
  const [sahamStrategy, setSahamStrategy] = useState<"trading" | "investasi">("trading");
  const [nilaiPortofolio, setNilaiPortofolio] = useState<number>(150000000);
  const [capitalGain, setCapitalGain] = useState<number>(25000000);
  const [dividenBersih, setDividenBersih] = useState<number>(10000000);
  const [dividenNonHalal, setDividenNonHalal] = useState<number>(500000); // wajib cleansing

  // --- 5. State Zakat Perusahaan ---
  const [asetLancarPerusahaan, setAsetLancarPerusahaan] = useState<number>(1200000000);
  const [investasiLain, setInvestasiLain] = useState<number>(300000000);
  const [kewajibanJangkaPendek, setKewajibanJangkaPendek] = useState<number>(400000000);
  const [persentaseSahamMuslim, setPersentaseSahamMuslim] = useState<number>(100);

  // --- 6. State Zakat Pertanian ---
  const [jenisIrigasi, setJenisIrigasi] = useState<"alami" | "buatan" | "campuran">("buatan");
  const [hasilPanenKg, setHasilPanenKg] = useState<number>(2500); // kg gabah
  const [hargaPerKg, setHargaPerKg] = useState<number>(7500); // Rp per kg gabah
  const [biayaProduksi, setBiayaProduksi] = useState<number>(3000000); // pupuk, bibit, buruh

  // --- 7. State Zakat Fitrah ---
  const [jumlahJiwa, setJumlahJiwa] = useState<number>(4);
  const [hargaBerasPerKg, setHargaBerasPerKg] = useState<number>(17000);

  // =================== CALCULATIONS ===================

  const result = useMemo<CalculationResult>(() => {
    const annualNisabEmas = 85 * goldPrice;
    const monthlyNisabEmas = Math.round(annualNisabEmas / 12);

    switch (activeCategory) {
      case "profesi": {
        const totalPenghasilanBruto = gajiPokok + tunjanganLain + penghasilanLain;
        const totalPengurang = profesiMethod === "neto" ? kebutuhanPokokKhm + utangJatuhTempo : 0;
        const penghasilanBersih = Math.max(0, totalPenghasilanBruto - totalPengurang);

        const currentNisab = profesiPeriod === "bulan" ? monthlyNisabEmas : annualNisabEmas;
        const isObligated = penghasilanBersih >= currentNisab;
        const totalZakat = isObligated ? Math.round(penghasilanBersih * 0.025) : 0;

        return {
          zakatType: "profesi",
          typeName: "Zakat Profesi / Penghasilan",
          isObligated,
          nisabValue: currentNisab,
          nisabDescription:
            profesiPeriod === "bulan"
              ? "Setara 1/12 dari 85 gram emas per bulan"
              : "Setara 85 gram emas murni per tahun",
          taxableObjectValue: penghasilanBersih,
          ratePercent: 2.5,
          totalZakat,
          period: profesiPeriod === "bulan" ? "per bulan" : "per tahun",
          breakdown: [
            { label: "Gaji Pokok & Upah", value: gajiPokok },
            { label: "Tunjangan Kinerja / Fungsional", value: tunjanganLain },
            { label: "Pendapatan Lain / Bonus", value: penghasilanLain },
            { label: "Total Penghasilan Bruto", value: totalPenghasilanBruto },
            ...(profesiMethod === "neto"
              ? [
                  {
                    label: "Kebutuhan Pokok KHM (Sandang, Pangan, Papan, Edu, Medis)",
                    value: kebutuhanPokokKhm,
                    description: "Standar PTKZ fatwa MUI 2018",
                  },
                  {
                    label: "Utang Jatuh Tempo / Cicilan Mendesak",
                    value: utangJatuhTempo,
                  },
                  {
                    label: "Penghasilan Bersih (Objek Zakat Neto)",
                    value: penghasilanBersih,
                  },
                ]
              : [
                  {
                    label: "Objek Zakat (Metode Bruto)",
                    value: totalPenghasilanBruto,
                  },
                ]),
          ],
          mathematicalFormula:
            profesiMethod === "neto"
              ? `([Total Penghasilan Bruto Rp ${formatRupiah(totalPenghasilanBruto)}] - [KHM & Utang Rp ${formatRupiah(totalPengurang)}]) × 2,5% = Rp ${formatRupiah(totalZakat)}`
              : `[Total Penghasilan Bruto Rp ${formatRupiah(totalPenghasilanBruto)}] × 2,5% = Rp ${formatRupiah(totalZakat)}`,
          comparisonNote:
            profesiMethod === "neto"
              ? "Perhitungan menggunakan Metode Neto (disepakati Ijtima Ulama MUI 2018), di mana penghasilan dikurangi kebutuhan pokok (KHM/PTKZ) dan utang jatuh tempo sebelum diuji nisab."
              : "Perhitungan menggunakan Metode Bruto (Fatwa MUI 3/2003 awal), di mana zakat 2,5% ditunaikan langsung dari total penghasilan kotor sebelum dipotong kebutuhan hidup.",
          pillars: ZAKAT_PILLARS_DATA.profesi,
        };
      }

      case "maal": {
        const nilaiEmas = emasGram * goldPrice;
        const nilaiPerak = perakGram * 18000;
        const totalAset = saldoTabungan + depositoBank + nilaiEmas + nilaiPerak;
        const hartaBersih = Math.max(0, totalAset - utangPribadi);
        const isObligated = hartaBersih >= annualNisabEmas;
        const totalZakat = isObligated ? Math.round(hartaBersih * 0.025) : 0;

        return {
          zakatType: "maal",
          typeName: "Zakat Maal (Tabungan, Emas, & Deposito)",
          isObligated,
          nisabValue: annualNisabEmas,
          nisabDescription: "Setara 85 gram emas murni (haul 1 tahun hijriyah)",
          taxableObjectValue: hartaBersih,
          ratePercent: 2.5,
          totalZakat,
          period: "per tahun",
          breakdown: [
            { label: "Saldo Tabungan Mengendap", value: saldoTabungan },
            { label: "Deposito Bank Syariah", value: depositoBank },
            {
              label: `Emas Simpanan (${emasGram} gram @ ${formatRupiah(goldPrice)})`,
              value: nilaiEmas,
            },
            {
              label: `Perak (${perakGram} gram @ Rp 18.000)`,
              value: nilaiPerak,
            },
            { label: "Total Aset Maal", value: totalAset },
            { label: "Utang Jatuh Tempo (Pengurang)", value: utangPribadi },
            { label: "Harta Bersih Wajib Zakat", value: hartaBersih },
          ],
          mathematicalFormula: `([Total Aset Rp ${formatRupiah(totalAset)}] - [Utang Rp ${formatRupiah(utangPribadi)}]) × 2,5% = Rp ${formatRupiah(totalZakat)}`,
          comparisonNote:
            "Harta tabungan, deposito, dan emas batangan yang disimpan selama 1 tahun haul dijumlahkan. Emas perhiasan yang dipakai wajar sehari-hari tidak dikenakan zakat menurut jumhur ulama.",
          pillars: ZAKAT_PILLARS_DATA.maal,
        };
      }

      case "perniagaan": {
        const totalAktivaLancar = stokBarang + kasPerniagaan + piutangLancar;
        const aktivaLancarBersih = Math.max(0, totalAktivaLancar - utangDagang);
        const isObligated = aktivaLancarBersih >= annualNisabEmas;
        const totalZakat = isObligated ? Math.round(aktivaLancarBersih * 0.025) : 0;

        return {
          zakatType: "perniagaan",
          typeName: "Zakat Perniagaan / Dagang",
          isObligated,
          nisabValue: annualNisabEmas,
          nisabDescription: "Setara 85 gram emas murni (haul 1 tahun)",
          taxableObjectValue: aktivaLancarBersih,
          ratePercent: 2.5,
          totalZakat,
          period: "per tahun",
          breakdown: [
            { label: "Nilai Persediaan Barang Dagangan Akhir Haul", value: stokBarang },
            { label: "Uang Kas & Rekening Usaha", value: kasPerniagaan },
            { label: "Piutang Lancar Dapat Ditagih", value: piutangLancar },
            { label: "Total Aktiva Lancar", value: totalAktivaLancar },
            { label: "Utang Dagang Jatuh Tempo (Pengurang)", value: utangDagang },
            { label: "Aktiva Lancar Bersih", value: aktivaLancarBersih },
          ],
          mathematicalFormula: `([Aktiva Lancar Rp ${formatRupiah(totalAktivaLancar)}] - [Utang Dagang Rp ${formatRupiah(utangDagang)}]) × 2,5% = Rp ${formatRupiah(totalZakat)}`,
          comparisonNote:
            "Aset tetap seperti bangunan toko, gudang, rak etalase, dan kendaraan operasional TIDAK dihitung sebagai objek zakat perniagaan.",
          pillars: ZAKAT_PILLARS_DATA.perniagaan,
        };
      }

      case "saham": {
        let objekZakat = 0;
        if (sahamStrategy === "trading") {
          objekZakat = nilaiPortofolio + capitalGain;
        } else {
          objekZakat = dividenBersih;
        }

        const isObligated =
          sahamStrategy === "trading"
            ? objekZakat >= annualNisabEmas
            : objekZakat >= annualNisabEmas;
        const totalZakat = isObligated ? Math.round(objekZakat * 0.025) : 0;

        return {
          zakatType: "saham",
          typeName: "Zakat Saham & Reksadana Syariah",
          isObligated,
          nisabValue: annualNisabEmas,
          nisabDescription:
            sahamStrategy === "trading"
              ? "Nisab 85 gr emas (diperhitungkan dari total nilai pasar portofolio + capital gain)"
              : "Nisab 85 gr emas (diperhitungkan dari total dividen bersih al-mustaghallat)",
          taxableObjectValue: objekZakat,
          ratePercent: 2.5,
          totalZakat,
          period: "per tahun",
          breakdown: [
            {
              label:
                sahamStrategy === "trading"
                  ? "Nilai Pasar Portofolio Saham Akhir Haul"
                  : "Nilai Pokok Saham Investasi (Aset Tetap)",
              value: nilaiPortofolio,
              description:
                sahamStrategy === "trading"
                  ? "Diperhitungkan sebagai barang dagang"
                  : "Tidak dizakati pokoknya per zakat al-mustaghallat",
            },
            ...(sahamStrategy === "trading"
              ? [{ label: "Capital Gain / Laba Terealisasi", value: capitalGain }]
              : [{ label: "Dividen / Keuntungan Bersih (Objek Zakat)", value: dividenBersih }]),
            ...(dividenNonHalal > 0
              ? [
                  {
                    label: "Dana Non-Halal Wajib Cleansing (Bukan Zakat)",
                    value: dividenNonHalal,
                    description: "Wajib disalurkan 100% untuk kebajikan umum sosial",
                  },
                ]
              : []),
            { label: "Objek Bersih Kena Zakat", value: objekZakat },
          ],
          mathematicalFormula:
            sahamStrategy === "trading"
              ? `[Nilai Pasar Portofolio & Gain Rp ${formatRupiah(objekZakat)}] × 2,5% = Rp ${formatRupiah(totalZakat)}`
              : `[Total Dividen Bersih Rp ${formatRupiah(dividenBersih)}] × 2,5% = Rp ${formatRupiah(totalZakat)}`,
          comparisonNote:
            "Sesuai Ijtima Ulama MUI VII 2021: Saham trading dizakati 2,5% dari total nilai pasar akhir haul, sedangkan saham dividen jangka panjang dizakati 2,5% dari laba dividen bersih.",
          pillars: ZAKAT_PILLARS_DATA.saham,
        };
      }

      case "perusahaan": {
        const totalAsetLancar = asetLancarPerusahaan + investasiLain;
        const modalKerjaBersih = Math.max(0, totalAsetLancar - kewajibanJangkaPendek);
        const porsiMuslim = (modalKerjaBersih * persentaseSahamMuslim) / 100;
        const isObligated = porsiMuslim >= annualNisabEmas;
        const totalZakat = isObligated ? Math.round(porsiMuslim * 0.025) : 0;

        return {
          zakatType: "perusahaan",
          typeName: "Zakat Perusahaan / Badan Usaha",
          isObligated,
          nisabValue: annualNisabEmas,
          nisabDescription: "Setara 85 gram emas murni (modal kerja bersih porsi saham muslim)",
          taxableObjectValue: porsiMuslim,
          ratePercent: 2.5,
          totalZakat,
          period: "per tahun",
          breakdown: [
            { label: "Aset Lancar Perusahaan (Kas, Piutang, Persediaan)", value: asetLancarPerusahaan },
            { label: "Investasi Lancar pada Entitas Lain", value: investasiLain },
            { label: "Total Aset Lancar Gabungan", value: totalAsetLancar },
            { label: "Kewajiban / Utang Jangka Pendek (Pengurang)", value: kewajibanJangkaPendek },
            { label: "Modal Kerja Bersih (Net Working Capital)", value: modalKerjaBersih },
            {
              label: `Porsi Kepemilikan Saham Muslim (${persentaseSahamMuslim}%)`,
              value: porsiMuslim,
            },
          ],
          mathematicalFormula: `([Aset Lancar Bersih Rp ${formatRupiah(modalKerjaBersih)}] × ${persentaseSahamMuslim}%) × 2,5% = Rp ${formatRupiah(totalZakat)}`,
          comparisonNote:
            "Dihitung berdasarkan Metode Aset Lancar Bersih (Working Capital Method) Ijtima Ulama 2021. Pembayaran zakat perusahaan menggugurkan kewajiban zakat pemegang saham atas modal tersebut.",
          pillars: ZAKAT_PILLARS_DATA.perusahaan,
        };
      }

      case "pertanian": {
        const totalHasilBruto = hasilPanenKg * hargaPerKg;
        const hasilBersih = Math.max(0, totalHasilBruto - biayaProduksi);
        const nisabKg = 653; // 5 wasq gabah
        const isObligated = hasilPanenKg >= nisabKg;

        const ratePercent =
          jenisIrigasi === "alami" ? 10 : jenisIrigasi === "buatan" ? 5 : 7.5;
        const totalZakat = isObligated
          ? Math.round(hasilBersih * (ratePercent / 100))
          : 0;

        return {
          zakatType: "pertanian",
          typeName: "Zakat Pertanian (Zuru' wa Tsimar)",
          isObligated,
          nisabValue: nisabKg * hargaPerKg,
          nisabDescription: "Nisab 5 Wasq = 653 kg gabah kering panen (atau 520 kg beras)",
          taxableObjectValue: hasilBersih,
          ratePercent,
          totalZakat,
          period: "per panen",
          breakdown: [
            { label: `Hasil Panen (${hasilPanenKg} kg @ ${formatRupiah(hargaPerKg)})`, value: totalHasilBruto },
            { label: "Biaya Pupuk, Bibit, & Buruh Panen (Pengurang)", value: biayaProduksi },
            { label: "Hasil Panen Bersih", value: hasilBersih },
            {
              label: `Ambang Batas Nisab (653 kg @ ${formatRupiah(hargaPerKg)})`,
              value: nisabKg * hargaPerKg,
            },
          ],
          mathematicalFormula: `([Hasil Bersih Rp ${formatRupiah(hasilBersih)}]) × ${ratePercent}% (${jenisIrigasi === "alami" ? "Tadah Hujan 10%" : jenisIrigasi === "buatan" ? "Irigasi Mesin 5%" : "Kombinasi 7,5%"}) = Rp ${formatRupiah(totalZakat)}`,
          comparisonNote:
            "Zakat pertanian wajib ditunaikan seketika setiap kali panen (QS. Al-An'am: 141) tanpa menunggu haul 1 tahun. Biaya operasional produksi dapat dikurangkan sebelum perkalian kadar zakat.",
          pillars: ZAKAT_PILLARS_DATA.pertanian,
        };
      }

      case "fitrah": {
        const totalKgBeras = jumlahJiwa * 2.5;
        const totalLiterBeras = jumlahJiwa * 3.5;
        const totalUang = jumlahJiwa * 2.5 * hargaBerasPerKg;

        return {
          zakatType: "fitrah",
          typeName: "Zakat Fitrah",
          isObligated: true,
          nisabValue: 0,
          nisabDescription: "Wajib bagi setiap muslim yang memiliki kelebihan makan di hari Idul Fitri",
          taxableObjectValue: totalUang,
          ratePercent: 100,
          totalZakat: totalUang,
          period: "per jiwa",
          breakdown: [
            { label: "Jumlah Anggota Keluarga / Jiwa Ditanggung", value: jumlahJiwa },
            { label: `Total Beras (2,5 kg x ${jumlahJiwa} jiwa)`, value: totalKgBeras, description: `atau ${totalLiterBeras} liter` },
            { label: `Harga Beras per Kilogram`, value: hargaBerasPerKg },
            { label: `Konversi Nilai Uang Pengganti`, value: totalUang },
          ],
          mathematicalFormula: `[${jumlahJiwa} Jiwa] × 2,5 kg × Rp ${formatRupiah(hargaBerasPerKg)}/kg = Rp ${formatRupiah(totalUang)}`,
          comparisonNote:
            "Zakat fitrah dapat ditunaikan dalam bentuk beras seberat 2,5 kg (atau 3,5 liter) per jiwa, atau dikonversikan ke dalam uang senilai harga beras kualitas yang dikonsumsi sehari-hari (Madzhab Hanafi & SK BAZNAS).",
          pillars: ZAKAT_PILLARS_DATA.fitrah,
        };
      }
    }
  }, [
    activeCategory,
    goldPrice,
    profesiPeriod,
    profesiMethod,
    gajiPokok,
    tunjanganLain,
    penghasilanLain,
    kebutuhanPokokKhm,
    utangJatuhTempo,
    saldoTabungan,
    depositoBank,
    emasGram,
    perakGram,
    utangPribadi,
    stokBarang,
    kasPerniagaan,
    piutangLancar,
    utangDagang,
    sahamStrategy,
    nilaiPortofolio,
    capitalGain,
    dividenBersih,
    dividenNonHalal,
    asetLancarPerusahaan,
    investasiLain,
    kewajibanJangkaPendek,
    persentaseSahamMuslim,
    jenisIrigasi,
    hasilPanenKg,
    hargaPerKg,
    biayaProduksi,
    jumlahJiwa,
    hargaBerasPerKg,
  ]);

  const categories: { id: ZakatType; name: string; icon: any }[] = [
    { id: "profesi", name: "Profesi / Gaji", icon: Briefcase },
    { id: "maal", name: "Maal / Emas", icon: Coins },
    { id: "perniagaan", name: "Perniagaan", icon: Store },
    { id: "saham", name: "Saham & Reksa Dana", icon: TrendingUp },
    { id: "perusahaan", name: "Perusahaan", icon: Building2 },
    { id: "pertanian", name: "Pertanian", icon: Wheat },
    { id: "fitrah", name: "Zakat Fitrah", icon: HeartHandshake },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Category Selection Tabs */}
      <div className="bg-white p-2 rounded-2xl border border-stone-200 shadow-sm">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? "bg-emerald-800 text-white shadow-md"
                    : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-amber-300" : "text-stone-500"}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid: Input Form (Left) & FORMAT 1 Result Card (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Interactive Input Form */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <div className="flex items-center gap-2 text-emerald-950 font-bold text-base">
              <Calculator className="w-5 h-5 text-emerald-700" />
              <h3>Parameter {result.typeName}</h3>
            </div>
            <span className="text-[11px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
              Kadar: {result.ratePercent}%
            </span>
          </div>

          {/* Form Fields according to category */}
          {activeCategory === "profesi" && (
            <div className="space-y-4 text-xs">
              {/* Periode & Metode Selector */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">Periode Hitung</label>
                  <select
                    value={profesiPeriod}
                    onChange={(e: any) => setProfesiPeriod(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-stone-300 bg-stone-50 font-medium text-stone-800"
                  >
                    <option value="bulan">Bulanan (Saat Gajian)</option>
                    <option value="tahun">Tahunan (Haul 1 Tahun)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">Metode Fiqih</label>
                  <select
                    value={profesiMethod}
                    onChange={(e: any) => setProfesiMethod(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-stone-300 bg-stone-50 font-medium text-stone-800"
                  >
                    <option value="neto">Neto (Potong KHM - Fatwa 2018)</option>
                    <option value="bruto">Bruto (Kotor - Fatwa 2003)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  Gaji Pokok / Upah Bersih {profesiPeriod === "bulan" ? "Bulanan" : "Tahunan"} (Rp)
                </label>
                <input
                  type="number"
                  value={gajiPokok || ""}
                  onChange={(e) => setGajiPokok(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl border border-stone-300 font-bold text-stone-900 focus:ring-2 focus:ring-emerald-600"
                  placeholder="12000000"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  Tunjangan Kinerja / Fungsional / Lembur (Rp)
                </label>
                <input
                  type="number"
                  value={tunjanganLain || ""}
                  onChange={(e) => setTunjanganLain(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl border border-stone-300 font-bold text-stone-900 focus:ring-2 focus:ring-emerald-600"
                  placeholder="3000000"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  Pendapatan Lain-lain (Bonus, Honorarium, Royalti) (Rp)
                </label>
                <input
                  type="number"
                  value={penghasilanLain || ""}
                  onChange={(e) => setPenghasilanLain(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl border border-stone-300 font-bold text-stone-900 focus:ring-2 focus:ring-emerald-600"
                  placeholder="0"
                />
              </div>

              {profesiMethod === "neto" && (
                <>
                  <div className="pt-2 border-t border-stone-200">
                    <label className="block font-semibold text-stone-700 mb-1">
                      Kebutuhan Pokok Sandang, Pangan, Papan, Edukasi & Medis (KHM) (Rp)
                    </label>
                    <input
                      type="number"
                      value={kebutuhanPokokKhm || ""}
                      onChange={(e) => setKebutuhanPokokKhm(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-stone-300 font-bold text-stone-900 focus:ring-2 focus:ring-emerald-600"
                      placeholder="6000000"
                    />
                    <span className="text-[10px] text-stone-500 mt-0.5 block">
                      Biaya nafkah asasiyah diri & tanggungan keluarga per bulan
                    </span>
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">
                      Cicilan Utang Jatuh Tempo / Mendesak (Rp)
                    </label>
                    <input
                      type="number"
                      value={utangJatuhTempo || ""}
                      onChange={(e) => setUtangJatuhTempo(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-stone-300 font-bold text-stone-900 focus:ring-2 focus:ring-emerald-600"
                      placeholder="1000000"
                    />
                  </div>
                </>
              )}
            </div>
          )}

          {activeCategory === "maal" && (
            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  Saldo Tabungan & Rekening Bank (Mengendap 1 Tahun) (Rp)
                </label>
                <input
                  type="number"
                  value={saldoTabungan || ""}
                  onChange={(e) => setSaldoTabungan(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl border border-stone-300 font-bold text-stone-900"
                  placeholder="100000000"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  Saldo Deposito Bank Syariah (Rp)
                </label>
                <input
                  type="number"
                  value={depositoBank || ""}
                  onChange={(e) => setDepositoBank(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl border border-stone-300 font-bold text-stone-900"
                  placeholder="50000000"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Emas Simpanan (Gram)
                  </label>
                  <input
                    type="number"
                    value={emasGram || ""}
                    onChange={(e) => setEmasGram(Number(e.target.value))}
                    className="w-full p-2.5 rounded-xl border border-stone-300 font-bold text-stone-900"
                    placeholder="20"
                  />
                  <span className="text-[10px] text-stone-500 mt-0.5 block">
                    Nilai: {formatRupiah(emasGram * goldPrice)}
                  </span>
                </div>
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Perak Simpanan (Gram)
                  </label>
                  <input
                    type="number"
                    value={perakGram || ""}
                    onChange={(e) => setPerakGram(Number(e.target.value))}
                    className="w-full p-2.5 rounded-xl border border-stone-300 font-bold text-stone-900"
                    placeholder="0"
                  />
                  <span className="text-[10px] text-stone-500 mt-0.5 block">
                    Nilai: {formatRupiah(perakGram * 18000)}
                  </span>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  Utang Jatuh Tempo Pribadi (Pengurang) (Rp)
                </label>
                <input
                  type="number"
                  value={utangPribadi || ""}
                  onChange={(e) => setUtangPribadi(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl border border-stone-300 font-bold text-stone-900"
                  placeholder="15000000"
                />
              </div>
            </div>
          )}

          {activeCategory === "perniagaan" && (
            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  Nilai Stok / Persediaan Barang Dagangan Akhir Haul (Rp)
                </label>
                <input
                  type="number"
                  value={stokBarang || ""}
                  onChange={(e) => setStokBarang(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl border border-stone-300 font-bold text-stone-900"
                  placeholder="120000000"
                />
                <span className="text-[10px] text-stone-500 mt-0.5 block">
                  Dinilai dengan harga pasar grosir saat haul genap 1 tahun
                </span>
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  Uang Kas di Toko & Rekening Bisnis (Rp)
                </label>
                <input
                  type="number"
                  value={kasPerniagaan || ""}
                  onChange={(e) => setKasPerniagaan(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl border border-stone-300 font-bold text-stone-900"
                  placeholder="30000000"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  Piutang Lancar yang Diharapkan Tertagih (Rp)
                </label>
                <input
                  type="number"
                  value={piutangLancar || ""}
                  onChange={(e) => setPiutangLancar(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl border border-stone-300 font-bold text-stone-900"
                  placeholder="20000000"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  Utang Dagang Jatuh Tempo (Pengurang) (Rp)
                </label>
                <input
                  type="number"
                  value={utangDagang || ""}
                  onChange={(e) => setUtangDagang(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl border border-stone-300 font-bold text-stone-900"
                  placeholder="25000000"
                />
              </div>
            </div>
          )}

          {activeCategory === "saham" && (
            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  Strategi Investasi Saham
                </label>
                <select
                  value={sahamStrategy}
                  onChange={(e: any) => setSahamStrategy(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-stone-300 bg-stone-50 font-bold text-stone-900"
                >
                  <option value="trading">Trading / Capital Gain (Zakat Perdagangan)</option>
                  <option value="investasi">Investasi Dividen Jangka Panjang (Zakat Mustaghallat)</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  {sahamStrategy === "trading"
                    ? "Total Nilai Pasar Portofolio Saham Akhir Haul (Rp)"
                    : "Nilai Pokok Saham Investasi Jangka Panjang (Rp)"}
                </label>
                <input
                  type="number"
                  value={nilaiPortofolio || ""}
                  onChange={(e) => setNilaiPortofolio(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl border border-stone-300 font-bold text-stone-900"
                  placeholder="150000000"
                />
              </div>

              {sahamStrategy === "trading" ? (
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Capital Gain / Laba Terealisasi (Rp)
                  </label>
                  <input
                    type="number"
                    value={capitalGain || ""}
                    onChange={(e) => setCapitalGain(Number(e.target.value))}
                    className="w-full p-2.5 rounded-xl border border-stone-300 font-bold text-stone-900"
                    placeholder="25000000"
                  />
                </div>
              ) : (
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Total Dividen Bersih yang Diterima (Rp)
                  </label>
                  <input
                    type="number"
                    value={dividenBersih || ""}
                    onChange={(e) => setDividenBersih(Number(e.target.value))}
                    className="w-full p-2.5 rounded-xl border border-stone-300 font-bold text-stone-900"
                    placeholder="10000000"
                  />
                </div>
              )}

              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  Pendapatan Non-Halal Wajib Cleansing (Rp)
                </label>
                <input
                  type="number"
                  value={dividenNonHalal || ""}
                  onChange={(e) => setDividenNonHalal(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl border border-amber-300 bg-amber-50/50 font-bold text-stone-900"
                  placeholder="500000"
                />
                <span className="text-[10px] text-amber-700 mt-0.5 block">
                  Pembersihan (cleansing) unsur bunga/pendapatan non-syariah, disalurkan ke dana kebajikan umum
                </span>
              </div>
            </div>
          )}

          {activeCategory === "perusahaan" && (
            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  Aset Lancar Perusahaan (Kas, Bank, Piutang Lancar, Persediaan) (Rp)
                </label>
                <input
                  type="number"
                  value={asetLancarPerusahaan || ""}
                  onChange={(e) => setAsetLancarPerusahaan(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl border border-stone-300 font-bold text-stone-900"
                  placeholder="1200000000"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  Investasi Lancar pada Perusahaan Lain (Rp)
                </label>
                <input
                  type="number"
                  value={investasiLain || ""}
                  onChange={(e) => setInvestasiLain(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl border border-stone-300 font-bold text-stone-900"
                  placeholder="300000000"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  Kewajiban / Utang Jangka Pendek (Jatuh Tempo 1 Tahun) (Rp)
                </label>
                <input
                  type="number"
                  value={kewajibanJangkaPendek || ""}
                  onChange={(e) => setKewajibanJangkaPendek(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl border border-stone-300 font-bold text-stone-900"
                  placeholder="400000000"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  Porsi Kepemilikan Saham Muslim (%)
                </label>
                <input
                  type="number"
                  max="100"
                  min="0"
                  value={persentaseSahamMuslim || ""}
                  onChange={(e) => setPersentaseSahamMuslim(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl border border-stone-300 font-bold text-stone-900"
                  placeholder="100"
                />
                <span className="text-[10px] text-stone-500 mt-0.5 block">
                  Zakat perusahaan ditunaikan secara proporsional sesuai persentase kepemilikan muslim
                </span>
              </div>
            </div>
          )}

          {activeCategory === "pertanian" && (
            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  Jenis Sistem Pengairan
                </label>
                <select
                  value={jenisIrigasi}
                  onChange={(e: any) => setJenisIrigasi(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-stone-300 bg-stone-50 font-bold text-stone-900"
                >
                  <option value="buatan">Irigasi Berbiaya / Pompa Mesin (Kadar 5%)</option>
                  <option value="alami">Tadah Hujan / Aliran Sungai Alami (Kadar 10%)</option>
                  <option value="campuran">Kombinasi Alami & Berbiaya (Kadar 7,5%)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Hasil Panen (Kilogram)
                  </label>
                  <input
                    type="number"
                    value={hasilPanenKg || ""}
                    onChange={(e) => setHasilPanenKg(Number(e.target.value))}
                    className="w-full p-2.5 rounded-xl border border-stone-300 font-bold text-stone-900"
                    placeholder="2500"
                  />
                  <span className="text-[10px] text-stone-500 mt-0.5 block">
                    Nisab: 653 kg gabah / 520 kg beras
                  </span>
                </div>
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    Harga Jual per Kg (Rp)
                  </label>
                  <input
                    type="number"
                    value={hargaPerKg || ""}
                    onChange={(e) => setHargaPerKg(Number(e.target.value))}
                    className="w-full p-2.5 rounded-xl border border-stone-300 font-bold text-stone-900"
                    placeholder="7500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  Biaya Pupuk, Bibit & Buruh Panen (Pengurang) (Rp)
                </label>
                <input
                  type="number"
                  value={biayaProduksi || ""}
                  onChange={(e) => setBiayaProduksi(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl border border-stone-300 font-bold text-stone-900"
                  placeholder="3000000"
                />
              </div>
            </div>
          )}

          {activeCategory === "fitrah" && (
            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  Jumlah Jiwa yang Ditanggung
                </label>
                <input
                  type="number"
                  min="1"
                  value={jumlahJiwa || ""}
                  onChange={(e) => setJumlahJiwa(Math.max(1, Number(e.target.value)))}
                  className="w-full p-2.5 rounded-xl border border-stone-300 font-bold text-stone-900"
                  placeholder="4"
                />
                <span className="text-[10px] text-stone-500 mt-0.5 block">
                  Diri sendiri, istri, anak, dan orang tua yang dinafkahi
                </span>
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  Harga Beras yang Dikonsumsi per Kg (Rp)
                </label>
                <input
                  type="number"
                  value={hargaBerasPerKg || ""}
                  onChange={(e) => setHargaBerasPerKg(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl border border-stone-300 font-bold text-stone-900"
                  placeholder="17000"
                />
                <span className="text-[10px] text-stone-500 mt-0.5 block">
                  Standar per jiwa: 2,5 kg beras (Rp {formatRupiah(2.5 * hargaBerasPerKg)})
                </span>
              </div>
            </div>
          )}

          <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600 flex items-center justify-between">
            <span>Standar Emas Acuan:</span>
            <strong className="text-emerald-900">{formatRupiah(goldPrice)} / gram</strong>
          </div>
        </div>

        {/* Right: FORMAT 1 Result Display Card */}
        <div className="lg:col-span-7">
          <CalculatorResultCard result={result} onAskAi={onAskAi} />
        </div>
      </div>
    </div>
  );
};

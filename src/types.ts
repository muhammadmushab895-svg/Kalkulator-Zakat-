export type ZakatType =
  | "profesi"
  | "maal"
  | "perniagaan"
  | "saham"
  | "perusahaan"
  | "pertanian"
  | "fitrah";

export interface PillarFiqhAzZakah {
  bab: string;
  arabicText: string;
  translation: string;
  istinbathAnalysis: string;
}

export interface PillarFatwaMui {
  numberAndTitle: string;
  diktum: string;
  implementationNotes: string;
}

export interface PillarRegulasi {
  legalBasis: string;
  statutoryText: string;
}

export interface ThreePillars {
  fiqhAzZakah: PillarFiqhAzZakah;
  fatwaMui: PillarFatwaMui;
  regulasi: PillarRegulasi;
}

export interface CalculationResult {
  zakatType: ZakatType;
  typeName: string;
  isObligated: boolean;
  nisabValue: number;
  nisabDescription: string;
  taxableObjectValue: number; // Objek wajib zakat (harta bersih)
  ratePercent: number; // 2.5%, 5%, or 10%
  totalZakat: number;
  period: "per bulan" | "per tahun" | "per panen" | "per jiwa";
  breakdown: {
    label: string;
    value: number;
    description?: string;
  }[];
  mathematicalFormula: string;
  notes?: string;
  comparisonNote?: string; // e.g. Bruto vs Neto
  pillars: ThreePillars;
}

export interface LearningModule {
  id: string;
  category: ZakatType | "umum" | "muamalah_kontemporer";
  title: string;
  arabicTitle?: string;
  badge: string;
  summary: string;
  pillars: ThreePillars;
  caseStudy: {
    title: string;
    scenario: string;
    calculationSteps: string;
    conclusion: string;
  };
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  mode?: "calculator" | "learn";
}

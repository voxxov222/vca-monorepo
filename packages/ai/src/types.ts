import type { IntegrationMode } from "@vca/config";

export type DefectFlag =
  | "CORNER_WEAR"
  | "EDGE_WEAR"
  | "SURFACE_SCRATCH"
  | "WHITENING"
  | "CREASE"
  | "CENTERING_OFF"
  | "PRINT_LINE"
  | "STAIN"
  | "BEND"
  | "UNKNOWN";

export interface Subgrades {
  centering: number | null;
  corners: number | null;
  edges: number | null;
  surface: number | null;
}

export interface InspectionFinding {
  flag: DefectFlag;
  severity: "low" | "medium" | "high";
  location?: string;
  note: string;
}

export interface AiInspectionResult {
  /** AI screening estimate — NOT an official VCA / PSA / CGC grade */
  estimatedGrade: number | null;
  gradeBand: string | null;
  confidence: number;
  subgrades: Subgrades;
  findings: InspectionFinding[];
  authenticitySignals: {
    labelMatch: boolean | null;
    hologramVisible: boolean | null;
    textClarity: boolean | null;
    notes: string[];
  };
  disclaimer: string;
  mode: IntegrationMode;
  model: string;
  provider: string;
}

export interface InspectionInput {
  imageBase64?: string;
  imageUrl?: string;
  mimeType?: string;
  cardNameHint?: string;
  setHint?: string;
}

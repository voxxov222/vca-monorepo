import type { IntegrationMode } from "@vca/config";

export type PriceCondition = "RAW" | "VCA_10" | "VCA_9" | "VCA_8" | "PSA_10" | "PSA_9" | "PSA_8";

export interface PriceEvidence {
  source: string;
  updatedAt: string;
  currency: "USD";
  condition: string;
  printing?: string;
  mode: IntegrationMode;
}

export interface PriceQuote {
  condition: PriceCondition;
  price: number | null;
  evidence: PriceEvidence | null;
  status: "AVAILABLE" | "UNAVAILABLE";
  note?: string;
}

export interface CardIdentityQuery {
  name: string;
  set?: string;
  number?: string;
  language?: string;
  printing?: string;
  tcgCardId?: string;
  tcgdexId?: string;
}

export interface PricingResult {
  query: CardIdentityQuery;
  quotes: PriceQuote[];
  warnings: string[];
  providersUsed: string[];
  mode: IntegrationMode;
}

export interface PricingProvider {
  id: string;
  label: string;
  mode: IntegrationMode;
  enabled: boolean;
  quote(query: CardIdentityQuery): Promise<PricingResult>;
}

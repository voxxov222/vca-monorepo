import type { CardIdentityQuery, PricingProvider, PricingResult, PriceQuote } from "./types.js";
import { tcgdexProvider } from "./providers/tcgdex.js";
import { pokemonTcgApiProvider } from "./providers/pokemon-tcg-api.js";
import { pricechartingProvider } from "./providers/pricecharting.js";
import { scrydexProvider } from "./providers/scrydex.js";

export * from "./types.js";
export { tcgdexProvider, pokemonTcgApiProvider, pricechartingProvider, scrydexProvider };

const providers: PricingProvider[] = [scrydexProvider, pricechartingProvider, pokemonTcgApiProvider, tcgdexProvider];

export function listPricingProviders(): Array<{ id: string; label: string; mode: string; enabled: boolean }> {
  return providers.map((p) => ({ id: p.id, label: p.label, mode: p.mode, enabled: p.enabled }));
}

/** Merge provider quotes: prefer first AVAILABLE per condition; never invent prices. */
export async function getLivePrices(query: CardIdentityQuery): Promise<PricingResult> {
  const warnings: string[] = [];
  const providersUsed: string[] = [];
  const byCondition = new Map<PriceQuote["condition"], PriceQuote>();

  for (const provider of providers) {
    if (!provider.enabled && provider.id === "pricecharting") {
      warnings.push("PriceCharting disabled — set PRICECHARTING_TOKEN for graded prices");
      continue;
    }
    try {
      const result = await provider.quote(query);
      providersUsed.push(...result.providersUsed);
      warnings.push(...result.warnings);
      for (const quote of result.quotes) {
        const existing = byCondition.get(quote.condition);
        if (!existing || (existing.status !== "AVAILABLE" && quote.status === "AVAILABLE")) {
          byCondition.set(quote.condition, quote);
        }
      }
    } catch (error) {
      warnings.push(`${provider.id}: ${error instanceof Error ? error.message : "error"}`);
    }
  }

  const quotes = Array.from(byCondition.values());
  const anyLive = quotes.some((q) => q.status === "AVAILABLE");
  return {
    query,
    quotes,
    warnings,
    providersUsed: [...new Set(providersUsed)],
    mode: anyLive ? "LIVE" : "REQUIRES_API_KEY",
  };
}

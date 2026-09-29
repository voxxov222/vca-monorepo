import type { CardIdentityQuery, PricingProvider, PricingResult, PriceQuote } from "../types.js";

const DEX = "https://api.tcgdex.net/v2/en";

function unavailable(condition: PriceQuote["condition"], note: string): PriceQuote {
  return { condition, price: null, evidence: null, status: "UNAVAILABLE", note };
}

export const tcgdexProvider: PricingProvider = {
  id: "tcgdex",
  label: "TCGdex",
  mode: "LIVE",
  enabled: true,
  async quote(query: CardIdentityQuery): Promise<PricingResult> {
    const warnings: string[] = [];
    try {
      let card: any = null;
      if (query.tcgdexId) {
        const res = await fetch(`${DEX}/cards/${encodeURIComponent(query.tcgdexId)}`, {
          signal: AbortSignal.timeout(10000),
        });
        if (res.ok) card = await res.json();
      }
      if (!card) {
        const briefsRes = await fetch(`${DEX}/cards?name=${encodeURIComponent(query.name)}`, {
          signal: AbortSignal.timeout(10000),
        });
        if (!briefsRes.ok) throw new Error(`TCGDEX_${briefsRes.status}`);
        const briefs = (await briefsRes.json()) as Array<{ id: string; localId: string; name: string }>;
        const match =
          briefs.find(
            (b) =>
              (!query.number || b.localId === query.number || b.localId.startsWith(String(query.number))) &&
              b.name.toLowerCase() === query.name.toLowerCase(),
          ) ?? briefs[0];
        if (!match) {
          return {
            query,
            quotes: [unavailable("RAW", "No TCGdex card match.")],
            warnings: ["TCGDEX_NO_MATCH"],
            providersUsed: ["tcgdex"],
            mode: "LIVE",
          };
        }
        const detail = await fetch(`${DEX}/cards/${encodeURIComponent(match.id)}`, {
          signal: AbortSignal.timeout(10000),
        });
        if (!detail.ok) throw new Error(`TCGDEX_CARD_${detail.status}`);
        card = await detail.json();
      }

      const tcg = card?.pricing?.tcgplayer ?? {};
      const market =
        typeof tcg?.holofoil?.market === "number"
          ? tcg.holofoil.market
          : typeof tcg?.normal?.market === "number"
            ? tcg.normal.market
            : typeof tcg?.reverse?.market === "number"
              ? tcg.reverse.market
              : null;
      const updatedAt = typeof tcg?.updated === "string" ? tcg.updated : new Date().toISOString();
      const quotes: PriceQuote[] = [
        market == null
          ? unavailable("RAW", "TCGdex returned no TCGplayer market price.")
          : {
              condition: "RAW",
              price: market,
              status: "AVAILABLE",
              evidence: {
                source: `TCGdex / TCGplayer · ${card.name}`,
                updatedAt,
                currency: "USD",
                condition: "RAW",
                mode: "LIVE",
              },
            },
        unavailable("PSA_10", "Use PriceCharting / graded provider for PSA prices."),
        unavailable("PSA_9", "Use PriceCharting / graded provider for PSA prices."),
        unavailable("PSA_8", "Use PriceCharting / graded provider for PSA prices."),
      ];
      return { query, quotes, warnings, providersUsed: ["tcgdex"], mode: "LIVE" };
    } catch (error) {
      warnings.push(error instanceof Error ? error.message : "TCGDEX_ERROR");
      return {
        query,
        quotes: [unavailable("RAW", "TCGdex provider unavailable.")],
        warnings,
        providersUsed: ["tcgdex"],
        mode: "REQUIRES_API_KEY",
      };
    }
  },
};

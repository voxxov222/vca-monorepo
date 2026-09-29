import type { CardIdentityQuery, PricingProvider, PricingResult, PriceQuote } from "../types.js";

const PTCG = "https://api.pokemontcg.io/v2/cards";

function unavailable(condition: PriceQuote["condition"], note: string): PriceQuote {
  return { condition, price: null, evidence: null, status: "UNAVAILABLE", note };
}

export const pokemonTcgApiProvider: PricingProvider = {
  id: "pokemon-tcg-api",
  label: "Pokémon TCG API",
  mode: "LIVE",
  enabled: true,
  async quote(query: CardIdentityQuery): Promise<PricingResult> {
    const warnings: string[] = [];
    const key = process.env.POKEMONTCG_API_KEY;
    try {
      let url: string;
      if (query.tcgCardId) {
        url = `${PTCG}/${encodeURIComponent(query.tcgCardId)}`;
      } else {
        const q = [`name:"${query.name.replace(/"/g, "")}"`];
        if (query.set) q.push(`set.name:"${query.set.replace(/"/g, "")}"`);
        if (query.number) q.push(`number:${query.number.split("/")[0]}`);
        url = `${PTCG}?q=${encodeURIComponent(q.join(" "))}&pageSize=5`;
      }
      const headers: Record<string, string> = {};
      if (key) headers["X-Api-Key"] = key;
      else warnings.push("POKEMONTCG_API_KEY unset — lower rate limits");

      const res = await fetch(url, { headers, signal: AbortSignal.timeout(10000) });
      if (!res.ok) throw new Error(`POKEMON_TCG_API_${res.status}`);
      const payload = await res.json();
      const card = query.tcgCardId ? payload.data : (payload.data?.[0] ?? null);
      if (!card) {
        return {
          query,
          quotes: [unavailable("RAW", "No Pokémon TCG API match.")],
          warnings: [...warnings, "PTCG_NO_MATCH"],
          providersUsed: ["pokemon-tcg-api"],
          mode: "LIVE",
        };
      }
      const prices = card.tcgplayer?.prices ?? {};
      const markets = Object.values(prices)
        .map((p: any) => (typeof p?.market === "number" ? p.market : null))
        .filter((n): n is number => n != null);
      const market = markets[0] ?? null;
      const updatedAt = card.tcgplayer?.updatedAt ?? new Date().toISOString();
      const quotes: PriceQuote[] = [
        market == null
          ? unavailable("RAW", "No TCGplayer market on this card.")
          : {
              condition: "RAW",
              price: market,
              status: "AVAILABLE",
              evidence: {
                source: `Pokémon TCG API / TCGplayer · ${card.name}`,
                updatedAt,
                currency: "USD",
                condition: "RAW",
                mode: "LIVE",
              },
            },
        unavailable("PSA_10", "Graded prices require PriceCharting."),
        unavailable("PSA_9", "Graded prices require PriceCharting."),
        unavailable("PSA_8", "Graded prices require PriceCharting."),
      ];
      return { query, quotes, warnings, providersUsed: ["pokemon-tcg-api"], mode: "LIVE" };
    } catch (error) {
      warnings.push(error instanceof Error ? error.message : "PTCG_ERROR");
      return {
        query,
        quotes: [unavailable("RAW", "Pokémon TCG API unavailable.")],
        warnings,
        providersUsed: ["pokemon-tcg-api"],
        mode: key ? "LIVE" : "REQUIRES_API_KEY",
      };
    }
  },
};

import type { CardIdentityQuery, PricingProvider, PricingResult, PriceQuote } from "../types.js";

const BASE = "https://api.scrydex.com/pokemon/v1";

function headers(): Record<string, string> | null {
  const key = process.env.SCRYDEX_API_KEY;
  const team = process.env.SCRYDEX_TEAM_ID;
  if (!key || !team) return null;
  return { "X-Api-Key": key, "X-Team-ID": team };
}

function unavailable(condition: PriceQuote["condition"], note: string): PriceQuote {
  return { condition, price: null, evidence: null, status: "UNAVAILABLE", note };
}

function pickRawMarket(variants: any[]): number | null {
  for (const v of variants ?? []) {
    for (const p of v.prices ?? []) {
      if (p?.type === "raw" && typeof p.market === "number") return p.market;
      if (!p?.type && typeof p?.market === "number") return p.market;
    }
  }
  return null;
}

function pickGraded(variants: any[], grade: string): number | null {
  for (const v of variants ?? []) {
    for (const p of v.prices ?? []) {
      if (p?.type === "graded" && String(p.grade ?? p.condition ?? "") === grade && typeof p.market === "number") {
        return p.market;
      }
    }
  }
  return null;
}

export const scrydexProvider: PricingProvider = {
  id: "scrydex",
  label: "Scrydex",
  mode: process.env.SCRYDEX_API_KEY && process.env.SCRYDEX_TEAM_ID ? "LIVE" : "REQUIRES_API_KEY",
  enabled: Boolean(process.env.SCRYDEX_API_KEY && process.env.SCRYDEX_TEAM_ID),
  async quote(query: CardIdentityQuery): Promise<PricingResult> {
    const h = headers();
    if (!h) {
      return {
        query,
        quotes: [
          unavailable("RAW", "Set SCRYDEX_API_KEY and SCRYDEX_TEAM_ID."),
          unavailable("PSA_10", "REQUIRES_API_KEY"),
          unavailable("PSA_9", "REQUIRES_API_KEY"),
          unavailable("PSA_8", "REQUIRES_API_KEY"),
        ],
        warnings: ["SCRYDEX_NOT_CONFIGURED"],
        providersUsed: [],
        mode: "REQUIRES_API_KEY",
      };
    }
    const warnings: string[] = [];
    try {
      let card: any = null;
      if (query.tcgCardId) {
        const res = await fetch(`${BASE}/en/cards/${encodeURIComponent(query.tcgCardId)}?include=prices`, {
          headers: h,
          signal: AbortSignal.timeout(15000),
        });
        if (res.ok) {
          const body = await res.json();
          card = body.data ?? body;
        }
      }
      if (!card) {
        const parts = [`name:"${query.name.replace(/"/g, "")}"`];
        if (query.set) parts.push(`expansion.name:"${query.set.replace(/"/g, "")}"`);
        if (query.number) parts.push(`number:${String(query.number).split("/")[0]}`);
        const url = `${BASE}/en/cards?q=${encodeURIComponent(parts.join(" "))}&page_size=5&include=prices`;
        const res = await fetch(url, { headers: h, signal: AbortSignal.timeout(15000) });
        if (!res.ok) {
          let detail = `SCRYDEX_${res.status}`;
          try {
            const errBody = await res.json();
            detail = errBody?.error?.code || errBody?.error?.message || detail;
          } catch { /* ignore */ }
          throw new Error(String(detail));
        }
        const body = await res.json();
        const list = body.data ?? [];
        card = list[0] ?? null;
      }
      if (!card) {
        return {
          query,
          quotes: [unavailable("RAW", "No Scrydex card match.")],
          warnings: ["SCRYDEX_NO_MATCH"],
          providersUsed: ["scrydex"],
          mode: "LIVE",
        };
      }
      const variants = card.variants ?? [];
      const raw = pickRawMarket(variants);
      const g10 = pickGraded(variants, "10");
      const g9 = pickGraded(variants, "9");
      const g8 = pickGraded(variants, "8");
      const source = `Scrydex · ${card.name} (${card.id})`;
      const updatedAt = new Date().toISOString();
      const mk = (condition: PriceQuote["condition"], price: number | null, note?: string): PriceQuote =>
        price == null
          ? unavailable(condition, note || `No ${condition} from Scrydex.`)
          : {
              condition,
              price,
              status: "AVAILABLE",
              evidence: { source, updatedAt, currency: "USD", condition, mode: "LIVE" },
            };
      return {
        query,
        quotes: [mk("RAW", raw), mk("PSA_10", g10), mk("PSA_9", g9), mk("PSA_8", g8)],
        warnings,
        providersUsed: ["scrydex"],
        mode: "LIVE",
      };
    } catch (error) {
      warnings.push(error instanceof Error ? error.message : "SCRYDEX_ERROR");
      return {
        query,
        quotes: [unavailable("RAW", "Scrydex provider unavailable.")],
        warnings,
        providersUsed: ["scrydex"],
        mode: "REQUIRES_API_KEY",
      };
    }
  },
};

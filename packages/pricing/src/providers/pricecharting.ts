import type { CardIdentityQuery, PricingProvider, PricingResult, PriceQuote } from "../types.js";

function unavailable(condition: PriceQuote["condition"], note: string): PriceQuote {
  return { condition, price: null, evidence: null, status: "UNAVAILABLE", note };
}

function fromCents(condition: PriceQuote["condition"], cents: unknown, source: string): PriceQuote {
  if (typeof cents !== "number" || cents < 0) {
    return unavailable(condition, `No ${condition} value from PriceCharting.`);
  }
  return {
    condition,
    price: cents / 100,
    status: "AVAILABLE",
    evidence: {
      source,
      updatedAt: new Date().toISOString(),
      currency: "USD",
      condition,
      mode: "LIVE",
    },
  };
}

export const pricechartingProvider: PricingProvider = {
  id: "pricecharting",
  label: "PriceCharting",
  mode: process.env.PRICECHARTING_TOKEN || process.env.PRICECHARTING_API_TOKEN ? "LIVE" : "REQUIRES_API_KEY",
  enabled: Boolean(process.env.PRICECHARTING_TOKEN || process.env.PRICECHARTING_API_TOKEN),
  async quote(query: CardIdentityQuery): Promise<PricingResult> {
    const token = process.env.PRICECHARTING_TOKEN || process.env.PRICECHARTING_API_TOKEN;
    if (!token) {
      return {
        query,
        quotes: [
          unavailable("RAW", "Set PRICECHARTING_TOKEN for graded + loose prices."),
          unavailable("PSA_10", "REQUIRES_API_KEY"),
          unavailable("PSA_9", "REQUIRES_API_KEY"),
          unavailable("PSA_8", "REQUIRES_API_KEY"),
        ],
        warnings: ["PRICECHARTING_TOKEN_NOT_CONFIGURED"],
        providersUsed: [],
        mode: "REQUIRES_API_KEY",
      };
    }
    const q = [query.name, query.set, query.number].filter(Boolean).join(" ");
    const url = new URL("https://www.pricecharting.com/api/product");
    url.searchParams.set("t", token);
    url.searchParams.set("q", q);
    const res = await fetch(url, { signal: AbortSignal.timeout(10000) });
    if (!res.ok) throw new Error(`PRICECHARTING_${res.status}`);
    const data = (await res.json()) as Record<string, unknown>;
    if (data.status !== "success") {
      return {
        query,
        quotes: [unavailable("RAW", String(data["error-message"] || "PRICECHARTING_ERROR"))],
        warnings: ["PRICECHARTING_ERROR"],
        providersUsed: ["pricecharting"],
        mode: "LIVE",
      };
    }
    const source = `PriceCharting · ${String(data["product-name"] || q)}`;
    return {
      query,
      quotes: [
        fromCents("RAW", data["loose-price"], source),
        fromCents("PSA_10", data["manual-only-price"], source),
        fromCents("PSA_9", data["graded-price"], source),
        fromCents("PSA_8", data["new-price"], source),
      ],
      warnings: [],
      providersUsed: ["pricecharting"],
      mode: "LIVE",
    };
  },
};

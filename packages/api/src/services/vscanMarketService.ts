export type VscanMarketQuote = {
  condition: 'RAW' | 'PSA_8' | 'PSA_9' | 'PSA_10';
  price: number | null;
  currency: string;
  source: string | null;
  marketType: 'MARKET' | 'LISTING' | 'UNAVAILABLE';
  observedAt: string | null;
  status: 'AVAILABLE' | 'UNAVAILABLE';
  note?: string;
};

export type VscanMarketResult = {
  card: { name: string; set?: string; number?: string };
  quotes: VscanMarketQuote[];
  sourceWarnings: string[];
};

function unavailable(condition: VscanMarketQuote['condition'], note: string): VscanMarketQuote {
  return { condition, price: null, currency: 'USD', source: null, marketType: 'UNAVAILABLE', observedAt: null, status: 'UNAVAILABLE', note };
}

function priceQuote(condition: VscanMarketQuote['condition'], cents: unknown, source: string): VscanMarketQuote {
  if (typeof cents !== 'number' || cents < 0) return unavailable(condition, `No ${condition.replace('_', ' ')} value was returned by the provider.`);
  return { condition, price: cents / 100, currency: 'USD', source, marketType: 'MARKET', observedAt: new Date().toISOString(), status: 'AVAILABLE' };
}

async function priceCharting(name: string, set?: string, number?: string): Promise<VscanMarketQuote[]> {
  const token = process.env.PRICECHARTING_API_TOKEN;
  if (!token) throw new Error('PRICECHARTING_API_TOKEN_NOT_CONFIGURED');

  const query = [name, set, number].filter(Boolean).join(' ');
  const url = new URL('https://www.pricecharting.com/api/product');
  url.searchParams.set('t', token);
  url.searchParams.set('q', query);
  const response = await fetch(url, { signal: AbortSignal.timeout(10000) });
  if (!response.ok) throw new Error(`PRICECHARTING_API_${response.status}`);
  const data = await response.json() as Record<string, unknown>;
  if (data.status !== 'success') throw new Error(String(data['error-message'] || 'PRICECHARTING_ERROR'));

  const source = `PriceCharting · ${String(data['product-name'] || query)}`;
  return [
    priceQuote('RAW', data['loose-price'], source),
    priceQuote('PSA_8', data['new-price'], source),
    priceQuote('PSA_9', data['graded-price'], source),
    priceQuote('PSA_10', data['manual-only-price'], source),
  ];
}

async function tcgplayerRaw(name: string, set?: string, number?: string): Promise<VscanMarketQuote> {
  const apiKey = process.env.POKEMON_TCG_API_KEY;
  const params = new URLSearchParams({ q: `name:"${name.replace(/"/g, '')}"`, pageSize: '20' });
  const response = await fetch(`https://api.pokemontcg.io/v2/cards?${params.toString()}`, { headers: apiKey ? { 'X-Api-Key': apiKey } : {}, signal: AbortSignal.timeout(8000) });
  if (!response.ok) throw new Error(`POKEMON_TCG_API_${response.status}`);
  const payload = await response.json() as { data?: any[] };
  const cards = payload.data ?? [];
  const exact = cards.find(card => (!set || String(card.set?.name ?? '').toLowerCase() === set.toLowerCase()) && (!number || String(card.number ?? '') === number)) ?? cards[0];
  const prices = exact?.tcgplayer?.prices;
  const candidates = prices ? Object.values(prices) as Array<{ market?: number }> : [];
  const market = candidates.find(p => typeof p.market === 'number')?.market;
  if (typeof market !== 'number') throw new Error('RAW_MARKET_PRICE_UNAVAILABLE');
  return { condition: 'RAW', price: market, currency: 'USD', source: 'Pokémon TCG API / TCGplayer market price', marketType: 'MARKET', observedAt: new Date().toISOString(), status: 'AVAILABLE' };
}

export async function getVscanMarketData(name: string, set?: string, number?: string): Promise<VscanMarketResult> {
  const sourceWarnings: string[] = [];
  let quotes: VscanMarketQuote[];

  try {
    quotes = await priceCharting(name, set, number);
  } catch (error) {
    sourceWarnings.push(error instanceof Error ? error.message : 'PRICECHARTING_PROVIDER_ERROR');
    let raw: VscanMarketQuote;
    try { raw = await tcgplayerRaw(name, set, number); }
    catch (rawError) {
      sourceWarnings.push(rawError instanceof Error ? rawError.message : 'RAW_PROVIDER_ERROR');
      raw = unavailable('RAW', 'No verified raw market quote is currently available.');
    }
    quotes = [
      raw,
      unavailable('PSA_8', 'Configure PRICECHARTING_API_TOKEN for verified PSA 8 pricing.'),
      unavailable('PSA_9', 'Configure PRICECHARTING_API_TOKEN for verified PSA 9 pricing.'),
      unavailable('PSA_10', 'Configure PRICECHARTING_API_TOKEN for verified PSA 10 pricing.'),
    ];
  }

  return { card: { name, set, number }, quotes, sourceWarnings };
}

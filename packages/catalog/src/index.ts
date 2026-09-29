import type { CatalogSearchQuery, PokemonCardIdentity } from "./types.js";
import { searchPokemonTcg } from "./pokemon-tcg.js";
import { searchTcgdex } from "./tcgdex.js";
import { searchScrydex } from "./scrydex.js";

export * from "./types.js";
export { searchPokemonTcg, searchTcgdex, searchScrydex };

/** Prefer pokemontcg.io, fall back to TCGdex. Never invent cards. */
export async function resolvePokemonIdentity(query: CatalogSearchQuery): Promise<{
  primary: PokemonCardIdentity | null;
  candidates: PokemonCardIdentity[];
  providersUsed: string[];
  warnings: string[];
  mode: "LIVE" | "REQUIRES_API_KEY";
}> {
  const warnings: string[] = [];
  const providersUsed: string[] = [];
  let candidates: PokemonCardIdentity[] = [];

  try {
    candidates = await searchScrydex(query);
    if (candidates.length) providersUsed.push("scrydex");
  } catch (e) {
    warnings.push(e instanceof Error ? e.message : "SCRYDEX_ERROR");
  }

  if (!candidates.length) {
    try {
      candidates = await searchPokemonTcg(query);
      if (candidates.length) providersUsed.push("pokemontcg.io");
    } catch (e) {
      warnings.push(e instanceof Error ? e.message : "PTCG_ERROR");
    }
  }

  if (!candidates.length) {
    try {
      candidates = await searchTcgdex(query);
      if (candidates.length) providersUsed.push("tcgdex");
    } catch (e) {
      warnings.push(e instanceof Error ? e.message : "TCGDEX_ERROR");
    }
  }

  if (!process.env.POKEMONTCG_API_KEY) {
    warnings.push("POKEMONTCG_API_KEY unset — pokemontcg.io rate limits apply");
  }

  return {
    primary: candidates[0] ?? null,
    candidates,
    providersUsed,
    warnings,
    mode: candidates.length ? "LIVE" : "REQUIRES_API_KEY",
  };
}

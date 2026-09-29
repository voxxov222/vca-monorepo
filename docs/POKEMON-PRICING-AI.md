# Pokémon live prices, catalog identity, AI inspection

## Honesty labels
- **LIVE** — real provider response with evidence
- **REQUIRES_API_KEY** — provider needs a key/token; we never invent numbers
- AI inspection is **screening only** — not an official VCA / PSA / BGS / CGC grade

## In-app packages
| Package | Role |
|---------|------|
| `@vca/pricing` | TCGdex + Pokémon TCG API + PriceCharting merge |
| `@vca/catalog` | Pokémon identity resolution (pokemontcg.io → TCGdex) |
| `@vca/ai` | Vision screening via Rork toolkit |

## API routes (`@vca/api`)
- `GET /api/catalog/providers`
- `GET /api/catalog/identity?name=&set=&number=`
- `GET /api/catalog/prices?name=&set=&number=`
- `POST /api/ai/inspect` `{ imageBase64 | imageUrl, cardNameHint?, setHint? }`

## Slabook UI
- Card detail → **Pokémon Database · Identity** panel
- Card detail → **AI condition screen** (upload your photo)
- Existing live price ladder remains (TCGdex / pokemontcg / graded edge function)

## MCP connector (agent tooling)
Cursor marketplace has **no** dedicated Pokémon price plugin.
Use open-source **`tcg-mcp`** (`uvx tcg-mcp`): Pokémon TCG API + PriceCharting + PSA tools.
Runs on Grok Bot's computer and is available to this user's other agents once added.

# Card intelligence + digital inspection

**Date:** 2026-10-02 (America/Edmonton)
**Slice:** first shippable foundation. Not a finished platform.

Slabook (`apps/slabook`) is the UX of record. Official Platform Prisma (`packages/db`) is the certification source of truth. Certificate serials stay `VCA-D-YY-####` (digital) and `VCA-YY-A-####` (physical) on `Certificate.serialNo`. This slice does not issue serials and does not copy them onto a second unique column.

## Pipeline

```
Postgres CardMaster
  → reference image URLs (CardMasterImage)
  → identification (not built)
  → inspection session
  → assistive category scores + proposed grade
  → evidence package (append-only)
  → optional links to existing Slab / Certificate / NFCRecord
  → Slabook admin shell
  → human review (grader session; no auth bypass)
```

| Stage | This slice |
| --- | --- |
| Database | Schema + SQL migration. No production migrate was run. |
| Reference images | URL rows only. No crawler, no stock stand-ins. |
| Identification | Not built. Missing identity is UNKNOWN. |
| Inspection session | `POST /api/card-intelligence/inspections` (grader or admin session). |
| Grading | Assistive proposal only. `officialGrade` is always null. Label `NOT_AN_OFFICIAL_GRADE`. |
| Evidence | `POST …/evidence`. Original photos are immutable. Enhancements require `derivedFromId`. |
| Slab / serial / NFC | Foreign keys to rows that already exist. NFC id is a record pointer, not cryptography. |
| Slabook | `/admin/inspection` shell. Panels 1–9 switch locally. |
| Admin publish | Queue states exist. No approve/publish writer in this slice. |

## Update queue

States: `NEW`, `AUTO_VERIFIED`, `NEEDS_REVIEW`, `APPROVED`, `PUBLISHED`.

`CardUpdateQueueItem.proposedSnapshot` is a version row. The next version is a new row with `supersedesId`. `CardMasterRevision` is append-only (no `updatedAt`). `CardMaster.publishedRevisionId` may move to a newer revision; older revisions stay.

`GET /api/card-intelligence/update-queue` lists stored rows. An empty table returns `items: []` and `dataStatus: "EMPTY"`. It does not invent proposals.

## Evidence-first

Preserved on `InspectionEvidence`: original photo URL, measurement JSON, marker JSON, note, inspector id, timestamps, software version. The session records schema version `20261002120000_card_intelligence`.

Enhancements are new rows (`kind: ENHANCEMENT`, `immutable: false`) pointing at the original. The API rejects `replaceOriginal` / `overwrite`.

Category rows (`centering`, `corners`, `edges`, `surface`, `print quality`) start null. Null means UNKNOWN, not zero. Each stored score has confidence and `sourceLabel`.

`InspectionGradeProposal` is append-only. The session holds the latest proposal and an inspector override plus reason. Neither writes `Certificate` or `GradingReport`.

Authenticity is only `INDICATORS`, `POTENTIAL_CONCERNS`, or `REQUIRES_HUMAN_REVIEW`. There is no CERTAIN value.

## Honesty

| Topic | Behavior |
| --- | --- |
| Missing text fields | Null in Postgres, `status: "UNKNOWN"` in the API. No fake rarity or finish. |
| Provenance | `fieldProvenance` only when a writer supplies it. Stated values without provenance say source UNKNOWN. |
| Money | Raw price `—`. Graded prices `Unavailable`. This API does not call pricing providers. |
| Population | `{ value: null, status: "UNKNOWN" }`. |
| AI | Not invoked here. A proposal source string may later say assistive AI. It is still not an official grade. |
| Catalog | Lookup reads `CardMaster` only. It is not the Pokémon TCG database. |
| Auth | Writes require an existing grader/admin session. The shell does not bypass that. |

## API

| Method | Path | Mode |
| --- | --- | --- |
| GET | `/api/card-intelligence/cards/lookup` | LIVE read. Query required. Empty match is `NO_MATCH`. |
| GET | `/api/card-intelligence/update-queue` | LIVE read. Optional `state`. |
| POST | `/api/card-intelligence/inspections` | Creates a session. Staff only. |
| POST | `/api/card-intelligence/inspections/:id/evidence` | Append evidence. Staff only. |
| POST | `/api/card-intelligence/inspections/:id/proposed-grade` | Assistive proposal. Staff only. Always `NOT_AN_OFFICIAL_GRADE`. |

Database down: `503 DATABASE_UNAVAILABLE` and empty collections. No sample payload.

## What is not built

Continuous crawler, full Pokémon ingestion, real centering/edge/holo models, microscope, video, population APIs, production admin auth bypass, queue transition writer, official certification from this module, NFC cryptography, price fetching.

## Migration

SQL: `packages/db/prisma/migrations/20261002120000_card_intelligence_foundation/migration.sql`.

`prisma migrate` was **not** run against production. Generate the client locally with `npm run db:generate`. Apply the migration only to a database you mean to change.

## Open the shell

```bash
npm install
npm run db:generate
npm run dev:api          # :3001
npm run dev:slabook      # Vite, port 8080
```

Open `http://localhost:8080/admin/inspection`.

Set `VITE_VCA_API_URL` if the API is not `http://localhost:3001`. Lookup and the queue panel show the real API result, including unreachable and empty.

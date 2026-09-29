# VCA Technical Architecture

**Date:** 2026-09-29 (America/Edmonton)  
**Author:** Coding Agent (senior engineering agent for VCA)  
**Basis:** Inspected live repos under `voxxov222` — not aspirational product copy.

---

## 1. Executive summary

VCA currently exists as **multiple parallel codebases**, not one production system.

| Role | Repo | Stack (actual) | Freshness |
|------|------|----------------|-----------|
| **Active consumer app (Slabook)** | `voxxov222/rork-vca-slabook` | Vite + React 19 + TS + Tailwind + Supabase + Rork toolkit vision | Pushed ~2026-09-23 |
| **Mobile APK fork** | `voxxov222/vca-slabook-apk-` (private) | Rork / TypeScript (Expo lineage) | Pushed ~2026-09-24 |
| **Trust / cert foundation** | `voxxov222/VCA-Official-Platform-` | Vite + Express + Prisma + PostgreSQL + Three.js + Gemini | Pushed ~2026-08-18; docs say migrate toward Next.js |
| **Newest experiment** | `voxxov222/VCAGROK` | TanStack Start/Router + better-auth + PGlite/pg + Three.js | Pushed ~2026-09-26 |
| **Legacy / OS / lab forks** | `VCA-Lab-`, `VCAOS`, `VCA-admin-Operating-system-`, `Vca-vault-`, etc. | Various Vite/TS prototypes | Older |

**Canonical recommendation (engineering, not marketing):**

1. **Product surface of record:** `rork-vca-slabook` (routes, Slabook social, scanner UX, prices, collection).
2. **Trust backbone of record:** Prisma domain in `VCA-Official-Platform-` (`Certificate`, `GradingReport`, `Slab`, `NFCRecord`, `QRRecord`, `AuditLog`).
3. **Treat `VCAGROK` as a spike** for TanStack + better-auth + ledger UX — harvest ideas, do not dual-ship.
4. **Long-term target:** Next.js App Router + React + TypeScript + Tailwind + PostgreSQL (Prisma) + modular AI/pricing adapters + Three.js slab package — matching `docs/architecture/PRODUCTION-STACK.md`, while **preserving** working Slabook UI from `rork-vca-slabook`.

---

## 2. Repo deep-dives (what exists)

### 2.1 `rork-vca-slabook` — active Slabook

**Frontend:** `web/` — Vite 8, React 19, React Router 6, TanStack Query, shadcn/Radix, Tailwind 3, Vitest.  
**Backend:** Supabase (Postgres + Auth + Edge Functions) + Rork Toolkit AI gateway.  
**Functions:** `backend/functions/vca-graded-prices`, `backend/functions/vca-news`.

**Routes (`web/src/App.tsx`):**  
`/`, `/home`, `/slabook`, `/scanner`, `/collection`, `/slab-creator`, `/submit`, `/discover`, `/set-index`, `/marketplace`, `/messenger`, `/profile`, `/collector/:userId`, `/card/:cardId`, `/admin`, `/account`.

**Supabase tables (generated types):**  
`vca_accounts`, `vca_admins`, `vca_cards`, `vca_market_budget`, `vca_posts`, `vca_profile_blocks`, `vca_profile_media`, `vca_scan_history`, `vca_slabs`, `vca_submission_events`, `vca_submissions`, `vca_workspace` (+ RPCs `vca_advance_submission`, `vca_is_admin`, `vca_record_inspection`, `vca_save_workspace*`, `vca_use_market_budget`).

**AI:** `web/src/lib/vision.ts` — Gemini 2.5 Flash via Rork Toolkit; identifies card + screening verdict; **explicitly not final authenticity**. Catalog match unlocks pricing actions.

**Pricing:** `web/src/lib/prices.ts` — TCGdex + Pokémon TCG API + Supabase graded-prices function; missing prices stay `NaN` (honest). Evidence objects include source/timestamp.

**3D:** `HoloSlab.tsx` is CSS/DOM holographic slab UI (no Three.js dependency in package.json). Official Platform owns real WebGL slabs.

**Degrade mode:** `supabase.ts` / `db.ts` — if env keys absent, UI falls back to local/demo state (`USER_KEY = "demo"`).

### 2.2 `VCA-Official-Platform-` — trust foundation

**Runtime today:** Vite SPA + Express (`server.ts`), Prisma, PostgreSQL, Three.js, `@google/genai`, Motion, Docker Compose.

**Documented target:** Next.js + Node API + Prisma + Postgres + S3 + Docker (`docs/architecture/PRODUCTION-STACK.md`). Doc correctly states current Vite/Express is prototype reference.

**Prisma domain (production-shaped):**  
User / Session / RBAC → CardSet / Card → Submission → GradingReport (component scores + human override) → Certificate (serial, status, verification hash) → Slab → NFCRecord (security level + tamper) / QRRecord → AuditLog.

**Verification APIs (`src/server/verificationRoutes.ts`):**  
- Staff: create QR, bind NFC, update tamper  
- Public: `/api/verify/qr/:token`, `/api/nfc/verify/:identifier`  
- NFC alone is **IDENTIFIER_MATCH_ONLY** unless `CRYPTOGRAPHIC`  
- Audit on trust events  

**3D (LIVE WebGL prototypes):** `Slab3DCanvas.tsx`, `Card3DPopoutCanvas.tsx`, `Pack3DCanvas.tsx`.

**Also present:** grading routes, production routes, VScan camera/scanner UI, Slabook view, marketplace, vault, Gemini scanner service, price scraper service, mock card data.

### 2.3 `VCAGROK` — newest full-app experiment

TanStack Start/Router, better-auth, Kysely, PGlite/pg, Three.js, large route tree (`app/scan`, `slabook`, `portfolio`, `inspect`, `grade`, `ledger`, `verify.$certId`, `nfc.$nfcId`, OS, vault). Treat as **integration spike**, not second production app.

### 2.4 `vca-slabook-apk-`

Private Rork mobile sibling of Slabook. Align camera/NFC/native capabilities here; keep API contracts shared with web.

### 2.5 Fragmentation risk

20+ VCA-named repos. Without a declared monorepo, features will keep forking. Stop greenfield apps; **port forward** into one tree.

---

## 3. End-to-end pipeline status (evidence-based)

| Layer | Status | Evidence |
|-------|--------|----------|
| Physical card capture | **PARTIAL / LIVE** | Camera capture + Scanner pages (Slabook, Official VScan) |
| AI identification | **LIVE (REQUIRES API KEY / Toolkit)** | `vision.ts` → Gemini via Rork; Official `geminiScanner.ts` |
| Authenticity analysis | **PARTIAL — screening only** | Verdicts + signals; code/docs forbid treating as final auth |
| Condition analysis | **PARTIAL / DEMO** | Forensic UI / grading tools; not full measured pipeline |
| VCA inspection (human) | **PARTIAL** | Submit/AdminOS + Official grader role; needs hardened queue |
| VCA grading | **PARTIAL** | Prisma `GradingReport` components; UI wizards exist |
| Serial numbers | **PARTIAL** | `Certificate.serialNo` unique in Prisma; Slabook serials on posts/slabs — formats `VCA-D-…` / `VCA-26-A-…` not fully unified |
| Physical slab | **REQUIRES HARDWARE / PROCESS** | Software models only |
| NFC | **PARTIAL API + REQUIRES HARDWARE** | Bind/verify + security levels; cryptographic path not fully proven end-to-end |
| Digital certificate | **PARTIAL** | Certificate model + public verify API; printable premium cert incomplete |
| 3D digital slab | **PARTIAL** | Three.js in Official/VCAGROK; CSS HoloSlab in Slabook |
| Slabook social | **PARTIAL / LIVE** | Posts, profiles, messenger routes + Supabase tables |
| Collection / portfolio | **PARTIAL** | Collection/Vault UIs; portfolio analytics incomplete vs brief |
| Public verification | **PARTIAL / LIVE API** | QR/NFC verify endpoints; exceptional 3D verify page not finished |
| Pricing | **LIVE adapters + gaps** | TCGdex/PokémonTCG + graded function; no hard-coded fake prices when missing |
| Payments / shipping | **MISSING / MOCK** | Not production-complete |
| Web3 / Flare | **INTERFACE ONLY / MISSING** | Do not fabricate chain data |
| Blockchain ledger claims | **MOCK / DEMO risk** | Ledger UIs exist — label clearly until append-only cert events are sole source of truth |

---

## 4. Target modular architecture (consolidate toward this)

```
apps/
  web/                 # Next.js App Router — public site, Slabook, scanner, verify
  admin/               # Protected inspection / grading / NFC bind / fraud
  mobile/              # Future RN/Expo — camera, NFC, notifications
packages/
  db/                  # Prisma schema (trust domain from Official Platform)
  api/                 # AuthZ, serials, certificates, NFC, submissions, audit
  ai/                  # AIProvider: Grok | OpenAI | Gemini | Local | Mock
  pricing/             # Provider abstraction + evidence + confidence
  three-slab/          # Shared Three.js slab, holo shader, LOD, reduced-motion
  ui/                  # Design system (red/white/blue)
  config/              # Env, feature flags, LIVE|MOCK|DEMO labels
```

### Trust rules (non-negotiable)

- AI output: `result`, `confidence`, `evidence`, `warnings`, `provider`, `model`, `timestamp`, `requires_human_review`.
- Human grader owns official certification.
- NFC never sole authenticity proof.
- No fabricated prices, auth, NFC, or chain txs.
- Every cert/grade/NFC change → `AuditLog`.

### Serial policy (implement once)

- Digital: `VCA-D-YY-####`
- Physical: `VCA-YY-A-####`
- Server-generated, unique, immutable after issuance (supersede via audited revision).

### 3D subsystem

- Extract Official `Slab3DCanvas` + holo shader into `packages/three-slab`.
- Capability detection, reduced-motion, mobile LOD, lazy load.
- Critical flows always have 2D fallback (Slabook already closer to this).

---

## 5. Consolidation plan (incremental)

1. **Declare sources of truth** (this doc) — stop new apps.
2. **Schema merge:** extend Official Prisma with Slabook social/collection entities OR migrate Slabook Supabase tables toward one Postgres with clear bounded contexts (`trust.*` vs `social.*`).
3. **API façade:** expose Official verification + grading behind stable `/api/v1/*`; point Slabook submit/admin at it.
4. **AI façade:** one `AIProvider` used by Slabook scanner + Official VScan.
5. **3D package:** shared slab; replace divergent canvases gradually.
6. **Next.js migration** only after API/db contracts stable (per PRODUCTION-STACK.md).
7. **Archive** dormant forks as read-only once features are ported.

---

## 6. Top 5 next engineering steps (trust before spectacle)

1. **Freeze canonical repo pair** and add this architecture file to `rork-vca-slabook` (or a new `vca-monorepo`) so the team stops forking.
2. **Unify serial + certificate issuance** on Prisma `Certificate` / audit — wire Slabook submit/admin to real issuance (no local-only fake certs).
3. **Public verify page** (`/verify/:serial` and QR token) backed by live APIs, fast 2D-first, optional 3D — honesty labels for NFC security level.
4. **AI provider abstraction** with structured JSON + human-review flag; keep Gemini/Rork as first live adapter; MockProvider for tests.
5. **Extract `three-slab` package** from Official Platform; add device LOD + `prefers-reduced-motion`; integrate into Slabook card/slab detail without blocking navigation.

---

## 7. Known limitations (honest)

- No single deployable “VCA production” binary yet.
- Slabook can run in **demo/local** mode without Supabase.
- Official Platform README claims production foundation; UI still mixes mockData and prototype scanner experience.
- Three.js not in Slabook web dependencies — holographic slab is not full PBR WebGL.
- Cryptographic NFC not end-to-end proven with hardware.
- Many brand/OS/lab repos dilute focus.

---

## 8. Files / systems inspected

- `rork-vca-slabook/web/package.json`, `App.tsx`, `lib/vision.ts`, `lib/prices.ts`, `lib/supabase.ts`, `lib/db.ts`, `integrations/supabase/types.ts`, `components/HoloSlab.tsx`, backend functions
- `VCA-Official-Platform-/package.json`, `prisma/schema.prisma`, `verificationRoutes.ts`, `PRODUCTION-STACK.md`, README, Three.js canvases
- `VCAGROK/package.json`, `src/routes/**`
- GitHub inventory under `voxxov222` (VCA-named repos)

---

## 9. Recommended immediate build

**Next recommended engineering step:** Implement **canonical public verification + certificate serial issuance** against Official Platform Prisma APIs, then connect Slabook’s Submit/Admin flows to that API so “verified” means a real audited certificate — not a UI mock.

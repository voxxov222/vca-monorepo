# VCA Monorepo

Canonical workspace for **Verified Card Authority** / **Slabook**.

This is a consolidation of existing repos — not a rewrite:

| Path | Source | Role |
|------|--------|------|
| `apps/slabook` | `voxxov222/rork-vca-slabook` (`web/`) | Consumer product UI |
| `packages/db` | `VCA-Official-Platform-/packages/database` | Prisma trust domain |
| `packages/api` | Official Platform Express routes | Certificates, NFC/QR, grading, auth |
| `packages/three-slab` | Official Platform Three.js canvases | Shared 3D slab |
| `packages/config` | new | Brand + integration mode labels |
| `docs/TECHNICAL-ARCHITECTURE.md` | architecture inspection | Source of truth for LIVE/MOCK status |

## Quick start

```bash
cd monorepo
cp .env.example .env   # fill DATABASE_URL / Supabase keys as needed
npm install
npm run db:generate
npm run dev:api        # trust API on :3001
npm run dev:slabook    # Vite Slabook UI
```

## Scripts

- `npm run dev:slabook` — Slabook Vite app
- `npm run dev:api` — Express trust API (`@vca/api`)
- `npm run db:generate` / `db:migrate` — Prisma
- `npm run build` — build packages then workspaces

## Rules

1. Do not invent API results, prices, NFC, or certificates.
2. Label integrations LIVE / MOCK / DEMO / REQUIRES_API_KEY / REQUIRES_HARDWARE.
3. Prefer porting into this tree over creating new GitHub apps.
4. Human grader owns official certification; AI is assistive only.

## Legacy repos

Keep as read-only references until features are ported:

- `rork-vca-slabook`, `VCA-Official-Platform-`, `VCAGROK`, `vca-slabook-apk-`, older lab/OS forks

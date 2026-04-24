# A.I.P.A. Launchpad — Project Context

> Handoff doc for future Claude sessions. Read this first so you don't re-discover
> everything. All people data lives in Supabase — re-query, never stale-reference.

## What this is

**A.I.P.A. Launchpad** is a 6-week cohort coaching program by Bertrand teaching
people to land AI photography clients for e-commerce brands. Runs out of the
`dezygn_landing` Vite + React + TS repo. Dezygn is the AI creative suite; the
Launchpad includes 3 months of Agency-tier access.

## Pages involved

| Route | File | Purpose |
|---|---|---|
| `/aipa` | `src/pages/AipaPage.tsx` | Long-form sales page. Self-contained, scoped CSS in `AIPA_STYLES`. Evergreen (no countdown). |
| `/apply` | `src/pages/ApplyPage.tsx` | 9-step application form. Posts to Supabase. Routes to qualified/not-qualified screens. |
| (post-submit qualified) | `src/components/apply/QualifiedScreen.tsx` | Pre-call Tella video gate → Cal.com embed → Telegram shortcut → free resources. |
| (post-submit not-qualified) | `src/components/apply/NotQualifiedScreen.tsx` | Friendly decline + free resources + nurture line. |
| (shared) | `src/components/apply/ResourceLinks.tsx` | 6 resource cards (YouTube + 5 Reddit posts). Appears on both post-submit screens. |

Supporting: `src/lib/supabase.ts` (client — throws at module import if env missing),
`src/assets/images/AIPA/` (examples, earnings proof screenshots, Upwork screenshot),
`src/assets/images/logos/aipa-logo.png` (circular logo, 3.7 MB, re-export smaller when possible).

## External integrations

- **Supabase project:** `vpklpenoffkvztqosbds` (name `dezygn`, region `us-east-2`)
- **Applications table:** `public.apa_applications`
  - Columns: `id`, `created_at`, `name`, `email`, `situation`, `sold_before`,
    `ai_experience`, `goal` (unused legacy), `timeline`, `investment`,
    `qualified`, `call_booked` (unused — wire a Cal webhook if needed),
    `notes`, `confidence`, `revenue`.
- **Env vars (in `.env.local`, not committed):**
  `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `VITE_CLARITY_PROJECT_ID`.
  The Supabase client at `src/lib/supabase.ts` throws at module import if these
  are missing, which blanks the whole SPA. If you ever see a blank page in
  a fresh worktree, that's usually the cause — `cp ../../../.env.local .env.local`.
- **Cal.com:** username `bertrand-6hbdyx`, event slug `launchpad`.
  Embed namespace `launchpad`. Event is hidden (direct-link only). Duration 25 min
  (description may still say 30 min — Bertrand's Cal config, cosmetic).
- **Tella videos:**
  - Hero VSL on /aipa: `vid_cmo2l35qt00o504jv4smsfjb4`
  - Pre-call qualified-screen briefing: `vid_cmo2ointn01iz04jl1awr0uko`
  - ⚠️ If price/offer changes, re-check these videos — they likely still
    reference older numbers.
- **Telegram:** `https://t.me/moonin1984` — "Skip the queue" CTA on QualifiedScreen.
- **Apply URL used by /aipa CTAs:** `https://www.dezygn.com/apply` (external, not a SPA route).

## Offer state (as of 2026-04-24, evergreen post-Spring campaign)

- **Price:** $1,200 (was $1,500 in Feb campaign)
- **Payment plan:** 3 × $450 for budget-constrained qualifying applicants
- **Cohort cap:** 15 seats
- **Qualifying investment tier:** `$500-$1,000 available to invest` or higher.
  `Less than $500 available` disqualifies at submit.
- **Timeline options (evergreen):** "ASAP — next available cohort" / "Later in 2026 — I'm planning ahead"
- **Hero numbers baked into page** (keep internally consistent if any change):
  | Place | Value |
  |---|---|
  | Hero H1 | **$26,838/Year on 23 Hours A Month** |
  | Earnings grid | **$2,237/m · 23 hrs · $97.24/hr** |
  | Story paragraph | "23 hours of actual client work per month" |
  | Story narrative | "grew to $27,000 a year" (rounded) |
  - Math check: $97.24 × 23 × 12 = $26,838 ✓
- **Confidence field** on form is collected but NOT used in qualification.
  Useful for call prep only (40% = won't close on first call; 100% = ready).

## Common SQL — always exclude test emails

Known test/junk emails to filter out from analysis:

```sql
WHERE email NOT IN (
  't@t.co', 'user@test.com', 'doe@mail.com', 'doe@email.com', 'uuhh@gtygf.com'
)
```

Add more as you spot them. Names like "Test", "T", "jim"/"jun"/"john"/"jane" at
`doe@*` are almost always test submissions.

### Useful queries

**Daily ramp with qualification split:**
```sql
SELECT (created_at AT TIME ZONE 'America/New_York')::date AS day_et,
       COUNT(*) AS applications,
       COUNT(*) FILTER (WHERE qualified) AS qualified,
       COUNT(*) FILTER (WHERE NOT qualified) AS not_qualified
FROM apa_applications
WHERE email NOT IN ('t@t.co', 'user@test.com', 'doe@mail.com', 'doe@email.com', 'uuhh@gtygf.com')
GROUP BY day_et
ORDER BY day_et DESC;
```

**Full applicant data since a date:**
```sql
SELECT created_at AT TIME ZONE 'America/New_York' AS submitted_et,
       name, email, situation, sold_before, ai_experience, revenue,
       investment, timeline, confidence, qualified
FROM apa_applications
WHERE email NOT IN (...test emails...)
  AND (created_at AT TIME ZONE 'America/New_York')::date >= 'YYYY-MM-DD'
ORDER BY created_at DESC;
```

**Find a specific applicant:**
```sql
SELECT * FROM apa_applications
WHERE LOWER(name) LIKE '%<partial>%'
   OR LOWER(email) LIKE '%<partial>%'
ORDER BY created_at DESC;
```

## Campaign history

| Campaign | Window | Apps (real) | Qualified | Closed | Close rate |
|---|---|---:|---:|---:|---:|
| Feb 2026 | Feb 23–28 (Mon→Sat) | 38 | 17 | 3 | 18% |
| Apr 2026 | Apr 17–22 (Fri→Wed, 4-day-window + overflow) | 16 | 9 | 2 in window + more post | ~22% |

**Closed alumni (Spring 2026 cohort):**
- Jimmy Tran (`apps@zot.media`) — sold Apr 20
- Kim Gifford (`kim@treetesting.com`) — sold Apr 20
- Joe LaPoint (`joelapoint@gmail.com`) — sold post-window (Apr 24)

**Repeat applicants to flag:**
- `gerardn.naastepad@outlook.com` / `gnaastepad@ziggo.nl` — applied Feb 24, Feb 28, Apr 20. Window-shopper pattern.
- `zahidyk2@gmail.com` — Feb 24, Apr 20 (x2). Upgraded budget tier between applications — genuine interest.
- `texansho@yahoo.com` (Sarah) — Feb 26, Apr 22. Disqualified both times, same profile. Worth a one-time nurture email.
- `ilmudigital@gmail.com` (sunthara) — Mar 1, Apr 23 (x2). Never-used-AI + low budget. Cold.

## Git workflow gotchas

- **Repo root:** `/Users/dezygn/Projects/live/landing/dezygn_landing`
- **Branch:** `main` (deploys from here)
- **⚠️ `src/App.tsx` has uncommitted V4 route additions** (for `/v4` and
  `/landing-v4`, importing `LandingPageV4.tsx`). User wants V4 work
  **out of AIPA commits**. When committing AIPA changes that also touch App.tsx:
  1. Temporarily remove the `LandingPageV4` import + the two V4 route lines
  2. Stage specific files (not `git add -A`)
  3. Commit
  4. Restore the V4 lines to App.tsx
- **Skip list** (never add these unless user asks):
  - `next-env.d.ts` (Next.js drift from old experiment)
  - `.claude/` (local worktree dir)
  - `docs/landingpage.v4/` (separate V4 docs)
  - `src/pages/LandingPageV4.tsx` (separate V4 work)
- **Worktree quirk:** There's sometimes a git worktree at
  `.claude/worktrees/determined-chatterjee`. Absolute paths in edits target the
  main repo. If bash `pwd` ever lands in the worktree, `cd` to main repo root
  before committing.

## Dev server

- `npm run dev` → Vite on port 3000 (config in `vite.config.ts`; `server.open = true`).
- `npm run build && npm run preview` → static dist on port 4173.
- Requires `.env.local` present (see Supabase section — blank page without it).
- The repo has both legacy `LandingPageV3` at `/` and the AIPA page at `/aipa`.

## Routes in `App.tsx` related to AIPA

```tsx
<Route path="/aipa" element={<AipaPage />} />
```

`/apply` also exists as its own top-level route (imported `ApplyPage` in App.tsx).
Everything else (`/v3`, `/v4`, `/business`, etc.) is unrelated marketing.

## Known follow-ups / backlog

- **Re-record pre-call Tella video** (`vid_cmo2ointn01iz04jl1awr0uko`) to match
  current $1,200 price + 3×$450 payment plan (was recorded during Spring campaign).
- **Drop a 1200×630 `public/aipa-og.jpg`** — `og:image` meta points to this path
  but the file doesn't exist yet. Social shares will fall back to the site-default
  og-image.
- **Compress the logo** at `src/assets/images/logos/aipa-logo.png` (currently
  3.7 MB PNG — ideally <200 KB, or convert to SVG).
- **Restore the social proof section** post-May with real cohort testimonials
  (Jimmy, Kim, Joe, plus incoming May closes). Section was removed during
  evergreen conversion because only placeholders existed.
- **Wire Cal.com webhook** → flip `apa_applications.call_booked` to true when
  bookings happen. Currently unused but the column is there.
- **index.html has site-wide default OG/Twitter/description/canonical tags** that
  don't get removed when Helmet adds page-specific ones. Results in duplicate
  meta tags in the head on /aipa. Most crawlers take the last occurrence so
  ours win in practice, but inspection output looks noisy. If the user ever
  wants to clean this up, strip the OG/Twitter/description/canonical defaults
  from `index.html` and make each page own them via Helmet.

## CRM (external, user-managed)

User maintains a kanban CRM outside the repo. Columns:
`new` → `contacted` → `offer-sent` → `sold` / `lost`.
Tier tags: `A` / `B` / `C` / `skip`. Cohort tags: `spring-26`, `summer-26`, `special`.

## Getting oriented quickly (new Claude checklist)

1. Read this file.
2. `curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/aipa` — if not
   200, check if dev server is running; start with `npm run dev` in repo root.
3. Run the "daily ramp" SQL query above to see recent application volume and
   surface any new leads since last session.
4. If the user asks about a specific person, query Supabase with partial
   name/email match — don't rely on stale names in this doc.
5. If editing AIPA copy, remember: hero H1 numbers, earnings grid, and story
   paragraph must stay internally consistent.
6. Commit discipline: scope `git add` to AIPA files only; never `git add -A`
   (V4 work will leak in).

Last updated: 2026-04-24 after closing Joe LaPoint and converting /aipa to evergreen.

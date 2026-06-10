# Source Material Index — Dezygn.com Hub Overhaul

**Date:** 2026-06-10
**What this is:** the original brief + every knowledge source Bertrand provided for the site overhaul, so future work can trace where content came from. The plan executed from this material is [`site-hub-plan.md`](./site-hub-plan.md); the resulting design system is [`style-guide.md`](./style-guide.md).

> ⚠️ Most paths below are **outside this repo** and several are **private paid IP**. Content rules: teach the what/why publicly, keep the how (templates, prompts, swipe files, SOPs, rate card, Retainer Flip message) behind the paid products. Public-safe numbers only: $25–150+/image, $1k–3k retainers, Milan $2k, Bruce $4.8k, $700/$780 retainers.

## The original brief (2026-06-10, condensed)

- Old homepage (`LandingPageV3.tsx`) "sucks"; V4 (`LandingPageV4.tsx`) is much better — make it the homepage, wire free signup `https://chat.dezygn.com/signup`, drop "schedule a demo."
- Make dezygn.com **a hub / the reference for AI photography**: when a biz-opp seeker or a legit AI creative director browses the header/footer links, the reaction should be *"he knows what he's talking about — precise, sharp, well organized,"* with real SEO practice underneath.
- Old subpages were "bs ai generated" — redo/rethink all of them; new nav + footer.
- `/course` is dead (no more free course). High-ticket coaching = AIPA (`/aipa`, includes Skool community + private training), to be sold via a **Funnel-Hacks-style webinar page**.
- Needed: a new lead magnet on the V4 homepage (became the Visual Syntax Cheatsheet), and a tripwire page for the smaller product (became `/client-system`, $37).

## Knowledge sources

### Private IP (never publish directly — quarry for public what/why)

| Source | Path | Used for |
|---|---|---|
| **The Conversion Photography System** (framework, Modules 1–5) | `/Users/dezygn/Projects/private/writing/00_The Conversion Photography System/01_Modules` | Visual Syntax framework (6 ingredients, multimodal anchoring, hierarchy of attention), R&D process, creation workflows (RAW Abacus/Retro Wear sessions), getting clients, running the business. Foundation of shot-types, resources guides, use-cases, glossary. Cheatsheet source: `01 Module 1.../01 The 6 Ingredients/Quick Reference/`. |
| **AIPA course transcript** | `/Users/dezygn/Downloads/AIPAlessonstranscript.rtf` | Proof Before Pitch, Rule of 100, niche/ICP scoring, pricing, real deal stories (Milan, Bruce, retainers). |
| **The AI Creative Client System** (tripwire product) | `/Users/dezygn/Downloads/The AI Creative Client System.txt` | `/client-system` sales page; its bonuses (Retainer Flip, Rate Card, proposal swipes) must stay paid. |
| **Fairway Creatives SOPs & links** | `/Users/dezygn/Downloads/Fairway Creatives - Links.txt` | Agency proof layer: retainer menu, lead-gen pipeline, sales SOPs. Fairway = the agency Bertrand runs **on Dezygn** with a partner — the dogfooding story. |
| **Fable conversation** (strategy session preceding this project) | `/Users/dezygn/Downloads/convo-with-fable.rtfd` | Funnel strategy: webinar run live 5–10× to the list before paid traffic; $899 webinar offer idea; headline variants. |

### Product truth (Dezygn v2)

The app repo is called **dezygn-v3** but the new dashboard is branded **v2** (yes, really). All feature pages were written from these docs:

- Main docs folder: `/Users/dezygn/Projects/live/apps/dezygn-v3/docs`
- Best overview: `docs/DEZYGN.md`
- Latest shipped features index: `docs/FEATURE_INDEX.md`
- All feature docs: `docs/features/`, the good v2 files specifically:
  - `docs/features/v2-main-workspace.md`
  - `docs/features/v2-dashboard-shell-refresh.md`
  - `docs/features/v2-outreach-factory.md`
  - `docs/features/v2-feedback-page.md`
  - `docs/features/v2-ingredients-product-prep.md`
  - `docs/features/v2-concepts-hub.md`
  - `docs/features/v2-composer-model-reference-ux.md`

### Live endpoints & infrastructure

| Thing | Value |
|---|---|
| Free signup (every CTA) | `https://chat.dezygn.com/signup` |
| Lead capture | Supabase edge function `lead-magnet-capture` (project `vpklpenoffkvztqosbds`), POST with `lead_magnet` id: `visual_syntax_cheatsheet`, `webinar_registration`, `lead_magnet_01` (playbook). Delivery via Resend. |
| Cheatsheet PDF | `public/assets/downloads/visual-syntax-cheatsheet.pdf` — editable source `scripts/visual-syntax-cheatsheet.html`, rendered via headless Chrome |
| Masterclass playlist (free, public) | `https://www.youtube.com/playlist?list=PLDWnj8EaOunb22xH4H2ges3KNQyDFtpWa` |
| AIPA offer | `/aipa` + `/apply` ($1,500 coaching incl. Skool community) |
| Deployment | Vercel (`vercel.json`), dezygn.com → www redirect |

### How the IP was digested (phase 3 trace)

The phase-3 content rewrite ran four parallel reader agents over the sources above, producing dense extraction digests (framework structure, verbatim voice lines, all real numbers, paid-only boundaries):
1. Module 1 — Visual Syntax Foundation (+ shot lesson template)
2. Module 2 — R&D Process (Kaze Optics/Sabae brand-world story, My Lela, Retro Wear)
3. Modules 3+5 — Creation workflows (Abacus RAW sessions) + Running the Business
4. Module 4 + AIPA transcript + Client System + Fairway links — Proof Before Pitch, pricing, deal stories

Those digests were then written into `src/data/shot-types.ts`, `src/data/resources.ts`, `src/data/use-cases.ts`, `src/data/industries.ts`, `src/data/glossary.ts`. See plan §9 for exactly what landed where.

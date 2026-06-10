# Dezygn.com Hub Plan — "The Reference for AI Photography"

**Date:** 2026-06-10
**Goal:** When a biz-opp seeker or an AI creative director browses any header/footer link, the reaction is: *"This person actually does this work. This is precise, sharp, well organized."* Every page either demonstrates real expertise (from the AIPA / Conversion Photography System IP) or moves the visitor one step down the funnel.

---

## 1. The funnel the site serves

```
SEO / content hub (free)
  └─ Lead magnet: Visual Syntax Cheatsheet (email)     ← on V4 homepage, live
       └─ Free Dezygn signup (50 credits)               ← every CTA
            └─ Tripwire: AI Creative Client System $37  ← future page, do NOT cannibalize
                 └─ Webinar: Proof Before Pitch         ← /webinar, live
                      └─ AIPA Launchpad $1,500          ← /aipa + /apply, exists
                           └─ Dezygn Agency/Studio subscription (recurring)
```

Fairway Creatives is the **proof layer** across everything — "built by an agency that ships client work on it every day."

## 2. What shipped today

| Change | Where |
|---|---|
| V4 is now the homepage (`/`); V3 kept at `/v3` | `src/App.tsx` |
| All "Schedule a demo" labels → "Start Free" (URLs already pointed to signup) | `LandingPageV4.tsx` |
| Hero microcopy: "Free plan · 50 credits · No card required" | `LandingPageV4.tsx` |
| Header nav: Product · Pricing · Free Training (/webinar) · AIPA | `LandingPageV4.tsx` StudioHeader |
| New hub footer (4 link columns + legal row + giant wordmark), shared component | `src/components/FooterV4.tsx` |
| Lead magnet section (Visual Syntax Cheatsheet email capture, `lead_magnet: 'visual_syntax_cheatsheet'`) | `LandingPageV4.tsx` |
| Webinar registration page, Funnel-Hacks style, no nav, `lead_magnet: 'webinar_registration'` | `src/pages/WebinarPage.tsx` at `/webinar` |
| `/course` → 301-style redirect to `/webinar` (course is retired) | `src/App.tsx` |

**⚠️ Action needed from Bertrand (not code):**
1. Create the actual Visual Syntax Cheatsheet PDF (one page: 6 ingredients + multimodal anchoring + ordering rule) and wire the `lead-magnet-capture` Supabase function / email automation to deliver it for id `visual_syntax_cheatsheet`.
2. Same for `webinar_registration` — pick a date + platform (or "evergreen-ish" replay) and send details by email. The page intentionally doesn't name a date so it never goes stale.
3. Decide tripwire launch timing (separate funnel page, see §6).

## 3. Page-by-page verdict (every existing route)

### KEEP — rewrite with real IP + restyle to v4 editorial theme
All subpages still use the old purple/dark HeaderV3/FooterV3. Phase 2: swap to a light v4 header + `FooterV4`, and rewrite content using the frameworks below.

| Route | Verdict & direction |
|---|---|
| `/shot-types/:slug` | **Crown jewels of the hub.** Rewrite each from the Conversion Photography System taxonomy: packshot, lifestyle, hero, UGC, detail close-up, model shot, flat lay, brand/atmosphere, paparazzi. Each page: definition → when it converts (PDP vs ads vs social) → how it's engineered with Visual Syntax (real ingredient examples) → pro tips from actual client work. **Add the missing `/shot-types` index page.** |
| `/use-cases/:slug` | Keep, but anchor each in a real case: eyewear ($700/mo retainer), sportswear/golf (Fairway), candles/skincare (My Lela), premium eyewear (Kaze Optics — the Sabae/Japan brand-world research story is *gold* for an authority page). Mention Meta Andromeda / creative-fatigue angle for ad-buyer niches. |
| `/industries/:slug` | Keep freelancers / agencies / ecommerce / amazon-sellers. Freelancers page should preview Proof Before Pitch and point to /webinar. |
| `/compare/:slug`, `/alternatives/:slug` | Keep — high-intent SEO. Refresh feature tables for v2 (Awa, Outreach Factory, Opportunities, Concepts, Feedback). Positioning: they generate images; Dezygn runs the whole client loop. |
| `/resources/:slug` | Becomes the **authority pillar**. See §4 for new guide list. |
| `/glossary` | Keep, expand with his exact terms: Visual Syntax, comp card, dedicated model, packshot, PDP, brand world, Proof Before Pitch, creative fatigue, multimodal anchoring, sequential pipeline. |
| `/features` + `/features/*` | Update for v2. One page per V4 feature block: Awa, Outreach Factory, Opportunities (Upwork), Concepts, Ingredients & Product Prep, Recipes, Gallery & Feedback. Use exact product names from `dezygn-v3/docs/features/v2-*.md`. Existing `/features/awa`, `/features/studio`, `/features/brand-import`, `/features/recipes` get rewritten; add `/features/outreach`, `/features/opportunities`, `/features/concepts`, `/features/feedback`. |
| `/pricing` | Keep; sync numbers with V4 pricing section (Agency $99 / Studio $399). |
| `/aipa`, `/apply`, `/community`, `/earnings-disclaimer` | Keep as-is (AIPA is the backend offer). Add /webinar as the warm path into /aipa. |
| `/playbook` | Keep as secondary lead magnet (`lead_magnet_01`), restyle later. |
| `/about`, `/contact`, `/faq`, `/help`, `/privacy`, `/terms`, `/accessibility` | Keep; restyle pass only. About should tell the Fairway → Dezygn dogfooding story. |
| `/case-studies` | Keep but only with real numbers (Milan $2k, Bruce $4.8k, the $700 & $780 retainers). Thin invented case studies hurt the "he knows what he's talking about" goal more than anything. |
| `/business`, `/agency` | Merge intent into `/industries/*`; redirect once industries pages are rewritten. |

### KILL / REDIRECT (stale, off-brand, or AI filler)
| Route | Action |
|---|---|
| `/course` | ✅ Redirected to `/webinar` (done) |
| `/landing`, `/landing-new`, `/home-old`, `/home-archive`, `/v1` | Delete routes (internal variants, no SEO value) |
| `/special`, `/shortcuts`, `/upgrade` | Retire; redirect `/upgrade` → `/pricing` |
| `/report`, `/state-of-ai` | Retire or fold into `/resources` as a refreshed "State of AI Photography 2026" (good link bait if updated; dead weight if not) |
| `/promptography`, `/secrets` | Fold the good bits into the Visual Syntax pillar guide; redirect both to it |
| `/v3`, `/landing-v3` | Keep temporarily as archive; remove after V4 is stable |

## 4. New authority content (`/resources` pillar guides)

Written from the private modules — teach the *what/why* publicly, keep the *how/templates/swipe files* paid:

1. **The Visual Syntax Framework** — the 6 ingredients (Style, Subject, Action, Scene, Camera, Brand), the slot-machine trap, ordering rule. Cornerstone page; `/promptography` + `/secrets` redirect here.
2. **The R&D Process** — why pros don't open the tool first; brief deconstruction, two-tier moodboards, brand-world research (Kaze Optics example). "This is what separates $10/image work from $100/image work."
3. **Proof Before Pitch** — the client-getting mechanism, Rule of 100, channel choice. CTA → /webinar.
4. **AI Photography Pricing Guide** — per-image ($25–100+) vs retainers ($1k–3k for 20–30 visuals), creative-strategist positioning. (Public ranges only — the rate card + Retainer Flip message stay in the paid tripwire.)
5. **How to Start an AI Photography Agency** (rewrite existing) — the Fairway story, ICP scoring, what a week of delivery looks like.
6. **AI Product Photography Guide** (rewrite existing) — workflow: 33% R&D / 33% product prep / 33% generation; sequential pipeline vs one-shot prompting.

Keyword targets: *ai product photography, ai lifestyle photography, ai photography for ecommerce, ai product photographer, product photography pricing, how to get product photography clients, flair ai alternative, photoroom alternative, ai photos for shopify/amazon listings, ugc style ai images.*

## 5. SEO infrastructure (currently missing — quiet but important)

- **No `robots.txt`, no `sitemap.xml`, no prerendering** — the site is pure client-side React, so crawlers get one empty shell. Phase 2: add prerendering/SSG (e.g. `vite-plugin-prerender` or migrate page shells to static generation), generate `sitemap.xml` from the data files in `src/data/`, add `robots.txt`.
- Add JSON-LD: `FAQPage` on FAQ sections, `Article` on guides, `Product` + `Offer` on pricing.
- Per-page OG images (current single og-image.jpg for everything).
- Internal linking: every shot-type ↔ use-case ↔ guide cross-link (data files already support `related*` arrays).

## 6. Lead magnet — decision + alternatives

**Implemented: The Visual Syntax Cheatsheet.** Why it wins for the V4 homepage:
- Works for *both* audiences (craft-curious creative directors and biz-opp seekers).
- It's the front door to his actual IP — instantly signals "this is a real methodology."
- Naturally sells the tool: Awa literally implements Visual Syntax.
- **Doesn't cannibalize the $37 tripwire**, whose bonuses (Retainer Flip message, Rate Card, proposal swipe file) must stay paid.

Alternatives considered (usable later as content upgrades on specific pages):
- *10 free ecom shot prompts* (sample of the "100 Ecom Shot Prompts" tripwire idea) — good on shot-type pages.
- *The $700 Client Case Study teardown* — good on /webinar thank-you or the freelancers industry page.
- *Client Visuals Audit checklist* — good on agency/ecommerce pages.

## 7. Webinar funnel notes (`/webinar`)

- Structure: pre-head → hero promise → registration → proof strip (real numbers + earnings disclaimer link) → 3 secrets (Proof Before Pitch / 12-Image Retainer / Visual Syntax) → host credibility (Fairway) → for-you / not-for-you filter → final CTA. No nav by design.
- Per the Fable conversation: run it **live to the list 5–10×** before any paid traffic; iterate the deck; collect student wins.
- Offer at the end (when ready): $899 incl. 3 months Dezygn, or as the warm bridge into AIPA $1,500. Page currently only registers — the offer lives in the live presentation, which is correct at this stage.
- Thank-you state pushes free Dezygn signup ("follow along live") — every registrant becomes a product user before the pitch.

## 8. Phase 2 execution checklist — status as of 2026-06-10 (second pass)

1. ✅ `HeaderV4` extracted (`src/components/HeaderV4.tsx`); HeaderV4/FooterV4 applied to all kept subpages.
2. ✅ `/shot-types` index page added (`src/pages/seo/ShotTypeIndexPage.tsx`). ⏳ Content rewrite of `src/data/shot-types.ts` per the §3 taxonomy still pending.
3. ⏳ `src/data/resources.ts` pillar-guide rewrite (§4) still pending — pages restyled, content still the old guides.
4. ✅ v2 feature pages: 4 rebuilt + 4 new (`/features/outreach`, `/features/opportunities`, `/features/concepts`, `/features/feedback`) + features index, all from `dezygn-v3/docs` source of truth. Shared `FeaturePageLayout`.
5. ⏳ Use-cases/industries data rewrite with real case anchors still pending (pages restyled only).
6. ✅ Kill/redirect list executed: `/course`→`/webinar`, `/upgrade`→`/pricing`, `/report` + `/state-of-ai` + `/promptography` + `/secrets`→`/resources`, `/business`→`/industries/ecommerce`, `/agency`→`/industries/agencies`, deleted `/home-old`, `/landing`, `/landing-new`, `/home-archive`, `/v1`, `/special`, `/shortcuts`. `/v3` kept as archive; `/v4`→`/`.
7. ✅ robots.txt + auto-generated sitemap.xml (107 URLs, `scripts/generate-sitemap.mjs`, runs in build). ⏳ Prerendering/SSG + JSON-LD still pending.
8. ✅ Tripwire page v1 live at `/client-system` with the Fable-approved headline (webinar hero switched to the "While 40 Freelancers Beg…" variant). ⏳ Checkout link is a placeholder (`CHECKOUT_URL` in `ClientSystemPage.tsx`); page not linked from nav until checkout exists.

### Also shipped in second pass
- Visual Syntax Cheatsheet PDF (`public/assets/downloads/visual-syntax-cheatsheet.pdf`; editable source `scripts/visual-syntax-cheatsheet.html`, render via headless Chrome).
- `/cheatsheet` thank-you page; homepage lead-magnet form redirects there on success.
- `lead-magnet-capture` edge function v17 deployed: Resend delivery branches for `visual_syntax_cheatsheet` (PDF email) and `webinar_registration` (confirmation email). Playbook flow untouched. Tested live.
- All v4 subpages share `v4Theme.tsx` (SEO pages) / `FeaturePageLayout.tsx` (feature pages).

## 9. Remaining backlog (phase 3)
1. Content rewrites with real IP: shot-types data (Visual Syntax taxonomy), resources pillar guides (§4), use-cases/industries case anchors.
2. Prerendering/SSG + JSON-LD structured data.
3. Checkout link for `/client-system` (Stripe Payment Link / JVZoo), then link it from emails/nav.
4. Webinar date + platform; first live run to the list.
5. Delete the now-unrouted legacy page files (HomePage, LandingPage, LandingPageNew, SpecialPage, ShortcutsPage, UpgradePage, ReportPage, ReportDownloadPage, PromptographyPage(V2), BusinessPage, AgencyPage, V1AccessPage, HomeArchivePage) once confident.

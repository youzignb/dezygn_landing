# Dezygn.com V4 Style Guide — "Paper & Ink Editorial"

**Date:** 2026-06-10
**Scope:** The V4 homepage (`src/pages/LandingPageV4.tsx`) and every subpage restyled to match it — SEO templates, feature pages, core pages, funnel pages.
**Companion docs:** the master plan this theme was built and executed under is [`site-hub-plan.md`](./site-hub-plan.md) (page-by-page verdicts, funnel architecture, phases 1–3 status). Source material for all content is indexed in [`source-material.md`](./source-material.md).

The goal the theme serves (from the plan): when a biz-opp seeker or an AI creative director browses any header/footer link, the reaction is *"this person actually does this work — precise, sharp, well organized."* The visual language is an editorial print magazine on warm paper: restrained, typographic, one accent color, no SaaS gradients.

---

## 1. Where the theme lives in code

| File | Role |
|---|---|
| `src/pages/seo/v4Theme.tsx` | **Canonical token file.** Shared fonts, colors, page wrapper, eyebrow pill, cards, CTA button, breadcrumbs, `EditorialTitle`. All `src/pages/seo/*` templates import from here. |
| `src/pages/features/FeaturePageLayout.tsx` | Shared layout + duplicated tokens for all `/features/*` pages. |
| `src/components/HeaderV4.tsx` | Floating dark pill nav (used on all hub pages). |
| `src/components/FooterV4.tsx` | Dark editorial footer with 4 link columns + giant wordmark. |
| `src/pages/LandingPageV4.tsx` | The homepage — origin of every pattern below. Funnel pages (`WebinarPage`, `ClientSystemPage`) intentionally deviate (see §8). |

When building a new page: import from `v4Theme.tsx`, do not re-declare tokens. (`FeaturePageLayout` and a few core pages pre-date this rule and carry local copies — acceptable debt, don't add to it.)

## 2. Color palette

Purple is the **only** accent. Everything else is paper, ink, and warm grays.

| Token | Hex | Usage |
|---|---|---|
| ink | `#1A1A1A` | Body text, dark sections, footer/header background |
| inkWarm | `#2B2B2B` | Secondary dark surfaces |
| paper | `#EDEBE6` | Tinted/alternate section background |
| vellum | `#F7F5F0` | Default page background |
| muted | `#6B6459` | Secondary body text |
| dim | `#8B867B` | Tertiary text, breadcrumbs, captions |
| accent | `#8B5CF6` | CTA buttons, decorative marks, selection (`selection:bg-[#8B5CF6]/25`) |
| accentDeep | `#7C3AED` | CTA hover, eyebrow text, big CTA banner background |
| paperOnDark | `#E8E4DB` | Text on dark sections (with /70, /55, /50, /10 opacities) |

Section rhythm: page alternates `#F7F5F0` (vellum) and `#EDEBE6` (paper) sections; dark interludes use `#1A1A1A` with `#E8E4DB` text. The final CTA banner is solid `#7C3AED` white-on-purple, `rounded-[32px]`, with a purple glow shadow.

## 3. Typography

Three families, loaded in `index.html` from Google Fonts:

| Family | Token | Role |
|---|---|---|
| **Inter** (400/500/600/700) | `sans` | Everything by default. Headlines are `font-semibold tracking-tight`. |
| **Instrument Serif** (italic) | `serif` | The editorial counterpoint — *only* as italic accents inside headlines, decorative glyphs, and oversized display numbers. Never for body text. |
| **IBM Plex Mono** (400/500) | `mono` | Eyebrows, breadcrumbs, labels, stats captions — always small caps style: `text-[11px] font-medium uppercase tracking-[0.12em–0.14em]`. |

**The signature move — `EditorialTitle`:** every section headline sets its last word (plus trailing punctuation) in italic Instrument Serif: `Simple, Transparent *Pricing.*` Implemented as the `EditorialTitle` helper in `v4Theme.tsx`; use it instead of hand-splitting. Headlines end with a period.

Scale: hero `text-4xl sm:text-6xl` (homepage up to ~7xl), section titles `text-3xl sm:text-4xl`, body `text-[15px] leading-7 sm:text-base`, muted color for body.

## 4. Recurring components & patterns

- **Eyebrow pill** (`eyebrowPill`): white rounded-full pill, `-rotate-2`, mono uppercase 11px, purple-deep text, hairline ink border, `shadow-sm`. Opens nearly every section. The slight rotation is deliberate — print-sticker energy.
- **Cards** (`card` / `cardLink`): white, `rounded-3xl`, hairline border `border-[#1A1A1A]/[0.12]`, heavy soft shadow `shadow-[0_24px_60px_rgba(26,26,26,0.08)]`. Interactive cards lift on hover (`hover:-translate-y-1` + deeper shadow).
- **CTA button** (`ctaButton`): `rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED]`, white semibold sm text, `min-h-12 px-8`. Primary CTA label across the site is **"Start Free"** → `SIGNUP_URL` (`https://chat.dezygn.com/signup`); hero microcopy: *"Free plan · 50 credits · No card required."* On dark/purple surfaces the button inverts to `bg-[#1A1A1A] text-[#EDEBE6]`.
- **Decorative glyphs:** oversized serif italic marks (`✦`, `✳`) positioned absolutely at section corners, rotated, at 10–15% accent opacity, `aria-hidden`, hidden below `lg`. One per section maximum.
- **Breadcrumbs** (`crumbNav`): mono 11px uppercase, dim color, on every SEO subpage.
- **Stats rows:** big numbers in serif italic or semibold Inter with mono uppercase labels beneath.
- **Header (`HeaderV4`):** floating pill, `bg-[#1A1A1A]/[0.92] backdrop-blur-md`, rounded-full, hairline `#E8E4DB/15` border, heavy drop shadow. Nav: Product · Pricing · Free Training (/webinar) · AIPA + Start Free button. The dark pill is deliberate: it guarantees the white nav stays readable over both the dark hero and light sections.
- **⚠️ Tailwind alpha rule:** on arbitrary hex colors, slash opacities that aren't multiples of 5 (`/12`, `/92`, `/88`…) are **silently dropped** by Tailwind 3.4 — no CSS is generated and the style falls back to defaults (this once left the header pill fully transparent in production). Use bracket form for off-scale values: `border-[#1A1A1A]/[0.12]`, `bg-[#1A1A1A]/[0.92]`. Multiples of 5 (`/10`, `/15`, `/25`…) are safe bare.
- **Footer (`FooterV4`):** `#1A1A1A`, 4 link columns + brand column, legal row, then the **giant wordmark** — "Dezygn" at `text-[24vw] lg:text-[20rem]` in `#E8E4DB` at 7% opacity, cropped by the bottom edge (`-mb-[0.23em]`).
- **Radii:** cards `rounded-3xl`; hero/banner panels `rounded-[32px]`; pills/buttons `rounded-full`. Images inside cards `rounded-[10px]`.

## 5. Voice & copy rules

The words are part of the theme. All hub content is written from the real IP (see `source-material.md`), in Bertrand's voice:

- **Engineering over hype.** "Stop gambling, start engineering." Specifics beat adjectives: name the lens (85mm), the f-stop, the hex code, the session time (2h20m), the real ratio (137→12).
- **Real numbers only.** Client anchors: Milan $2k, Bruce $4.8k, $700/$780 retainers, Abacus session metrics. Never invent market stats or fake case studies — invented proof is the one thing that kills the "he actually does this" goal.
- **Accuracy ethos everywhere.** "Close enough is a refund." The 2-star "item not as pictured" story is the canonical cautionary tale.
- **Teach the what/why publicly, keep the how/templates paid.** Rate card, Retainer Flip message, proposal swipes, SOPs, extraction prompts are never published — only teased. Public-safe pricing: $25–150+/image, $1k–3k retainers.
- Headlines are declarative sentences with a period, often a claim or a rule: "If the Pendant Is 2cm, It Must Look 2cm."
- Every page CTAs to **Start Free** (signup); funnel-aware pages add "Watch the Free Training" → `/webinar`. Do not link `/client-system` from nav/content until the checkout link exists (plan §9.3).

## 6. Page templates

| Template | File | Structure |
|---|---|---|
| SEO shot-type | `src/pages/seo/ShotTypePage.tsx` | breadcrumb → eyebrow + hero → definition → when-to-use list → "How it's engineered" → tips cards → related links |
| SEO use-case | `src/pages/seo/UseCasePage.tsx` | hero + subheadline → problem paragraphs → solution → 5 feature cards (lucide icons via `iconMap`) → 3 stats → CTA banner → related |
| SEO industry | `src/pages/seo/IndustryPage.tsx` | hero → intro → pain points → "How Dezygn" cards → results stats → CTA banner (supports optional `secondaryCta`) → related |
| SEO resource/guide | `src/pages/seo/ResourcePage.tsx` | Article + FAQ JSON-LD, sections of paragraphs, key takeaways, FAQ, optional CTA block |
| Glossary | `src/pages/seo/GlossaryPage.tsx` | definition → explanation paragraphs → "how it relates to Dezygn" → related terms |
| Feature page | `src/pages/features/FeaturePageLayout.tsx` | shared layout, content from `dezygn-v3/docs` (the product source of truth) |

All template content lives in `src/data/*.ts` — pages are dumb renderers. The sitemap (`scripts/generate-sitemap.mjs`) auto-discovers slugs from those data files at build time.

## 7. SEO infrastructure conventions

- Every page: `<Helmet>` with unique `metaTitle`/`metaDescription` (+ canonical on SEO pages).
- JSON-LD: `Article` (+ `FAQPage` when faq present) on resources; `Product` + `Offer` on `/pricing`; `FAQPage` on `/faq`.
- Prerendering: `scripts/prerender.mjs` runs in `npm run build` — serial headless-Chrome snapshots of every sitemap URL into `dist/<route>/index.html`. It waits for helmet's title flush (rAF only fires on the foreground tab — hence serial + `bringToFront`). Soft-fails to plain SPA if Chrome can't launch.

## 8. Deliberate deviations

- **`/webinar` and `/client-system`** are direct-response funnel pages: no site nav, no footer links out, Funnel-Hacks-style layout. They share the palette/type but break the editorial layout on purpose — don't "fix" them to match.
- **`/v3`** is the archived previous homepage (purple/dark theme) — untouched, scheduled for removal once V4 is stable.
- **Headline ownership** (from the plan): "The Job Goes to Whoever Shows Up With the Work Already Done" belongs to `/client-system`; "While 40 Freelancers Beg…" belongs to `/webinar`. Don't reuse across pages.

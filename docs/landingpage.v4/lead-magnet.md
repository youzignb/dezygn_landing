# Lead Magnet — "Proof Before Pitch" Report

**Date:** 2026-06-11
**Status:** Live. Replaced the Visual Syntax Cheatsheet as the site-wide lead magnet.
**Companion docs:** [`site-hub-plan.md`](./site-hub-plan.md) (funnel architecture), [`style-guide.md`](./style-guide.md) (the visual language the PDF and pages follow).

## The asset

**"How to Make Money Selling AI Images — Without a Website, a Portfolio, or Any Sales Skills"** — a 19-page PDF teaching the Proof Before Pitch method (Find on Upwork → Create the sample → Send the pitch that isn't a pitch, + Quality Gate and cold-email bonuses).

| Piece | Location |
|---|---|
| Final copy (source of truth) | `/Users/dezygn/Projects/private/writing/Education/Proof Before Pitch - Lead Magnet Draft.md` |
| Typeset HTML + screenshots | `docs/landingpage.v4/lead-magnet-pdf/` |
| Render script | `node docs/landingpage.v4/lead-magnet-pdf/render-pdf.mjs` (puppeteer → A4, ~1.8 MB) |
| Published PDF | `public/downloads/proof-before-pitch.pdf` → `https://dezygn.com/downloads/proof-before-pitch.pdf` |

To update the report: edit the HTML, re-run the render script, commit the new PDF. The PDF intentionally links to `/webinar` in the conclusion (Bertrand: webinar ships ~week of 2026-06-15).

## Capture surfaces

All four surfaces share **`src/components/ReportCaptureForm.tsx`**, which POSTs `{ name, email, lead_magnet: 'proof_before_pitch' }` to the `lead-magnet-capture` Supabase edge function, then navigates to `/proof-before-pitch`.

1. **Header** — "Free Report" nav item → `/free-report`. (Free Training and AIPA were demoted to the footer's Learn & Programs column to make room — deliberate, the lead magnet is the #1 acquisition asset.)
2. **`/free-report`** — dedicated squeeze page (`src/pages/FreeReportPage.tsx`), indexed, in the sitemap. Contains a CSS cover mock (`CoverMock`) — swap it for the 3D render at `public/images/report-cover-3d.png` when generated.
3. **Homepage section** — `LeadMagnetSection` in `LandingPageV4.tsx`, placed directly after the marquee band (was second-to-last; moved up on purpose).
4. **Exit-intent popup** — `src/components/ExitIntentReportModal.tsx`, mounted globally in `App.tsx`. Desktop only (mouse leaves viewport top), arms after 8 s, shows once per browser (`localStorage.dz_report_popup_seen`), excluded on funnel/utility pages (see `EXCLUDED_PREFIXES` in the file).

## Thank-you + delivery

- **`/proof-before-pitch`** (`src/pages/ReportThankYouPage.tsx`, noindex) — download button + two next-step cards (Start Free signup, "do Step 1 now").
- `/cheatsheet` (old thank-you URL) redirects here.
- **Do not use `/report`** — it's a legacy SEO redirect to `/resources`.

## Email automation

`dezygn-v3/supabase/functions/lead-magnet-capture/index.ts`, deployed to Supabase project `vpklpenoffkvztqosbds` with `verify_jwt: false` (the form sends the anon key).

- Adds contact to Resend audience `75b09b22-…`, sends thank-you email with the PDF link, schedules a 7-email nurture sequence (days 2–14, 10:00 UTC) via Resend `scheduled_at`.
- **Every CTA → `https://chat.dezygn.com/signup`.** No webinar/tripwire links until those pages ship.
- Branches on `lead_magnet`: `visual_syntax_cheatsheet` (legacy) gets a delivery-only email with the old cheatsheet PDF (`/assets/downloads/visual-syntax-cheatsheet.pdf`), no sequence.
- Leads also insert into the `lead_magnet_leads` table (best-effort).

## Temporary states (clean up when funnel ships)

- `/client-system` → redirects to `/proof-before-pitch` (`App.tsx`) and is commented out of `scripts/generate-sitemap.mjs`. Restore `ClientSystemPage` + sitemap entry when the $37 tripwire checkout exists.
- Once `/webinar` is live, revisit the nurture emails to point mid-sequence CTAs at the training.
- `ScrollToTop` (`src/components/ScrollToTop.tsx`) was added in this work — route changes now reset scroll (footer links used to land mid-page). Site-wide behavior, not LM-specific.

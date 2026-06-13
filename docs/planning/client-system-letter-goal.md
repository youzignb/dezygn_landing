# Goal: /client-system Sales Letter — Meaty Long-Form Rewrite + Simulated Focus-Group Optimization

**Date:** 2026-06-12 · **Owner:** Claude (orchestrating) + Bertrand (reviewing) · **Status:** 🔄 In progress
**Progress page:** `docs/planning/client-system-letter-progress.html` · **Page under test:** `http://localhost:5180/client-system-preview` (`src/pages/ClientSystemPage.tsx`) · **Personas:** `docs/planning/client-system-personas.json`

## The question

The $37 "AI Creative Client System" tripwire letter is structurally sound (Belcher skeleton, crossheads,
real proof screenshots) but at **1,505 words it's light** for its audience, and we have no signal on
whether it converts. The audience is **Bertrand's JVZoo buyer list — ~10 years old, built from the
Youzign launch**, conditioned by years of affiliate JVZoo offers: they expect meaty, proof-heavy,
objection-crushing long-form pages, and they are world-class shiny-object skeptics because they've
bought (and shelved) dozens of these. What does this letter need — in length, copy, objection
handling, and design weight — to convert 10% of a simulated panel of these exact buyers?

## The metric — simulated conversion rate

AI-simulated focus groups (DeepMind / BYU / Duke methodology: highly specific personas, brutal-honesty
prompts, separate sessions) correlate >0.90 with real panels. We adapt it:

- **Quantitative panel:** 20 fixed personas (defined once in `client-system-personas.json`, reused
  verbatim every round so deltas are real) modeled on 10-year JVZoo/Youzign buyers: serial course
  buyers, side-hustlers, broke skeptics, tech-averse boomers, international hustlers, refund-prone
  deal hunters. Each reads the full letter and casts a forced vote: **BUY / MAYBE / NO** + primary
  objection + the exact line that won or lost them. **Conversion = BUY votes / 20.**
- **Qualitative deep-dive:** 5 separate cynical personas (serial-buyer burnout, broke skeptic, busy
  day-jobber, tech-averse boomer, sophisticated marketer/design snob) get the letter **plus
  screenshots** and are prompted: *"Tell me specifically why you would NOT buy. Be brutal."*
- **The 3-of-5 rule:** if ≥3 deep-dive personas reject for the same reason, that aspect changes
  next round — no debate.
- **Target: ≥10% panel conversion (≥2/20 BUY).** Real-world anchor: warm-list $37 tripwires run
  ~3–10%; 10% simulated is ambitious but the panel is warm by construction.

## Method — rounds

Each round: (1) snapshot the page (screenshots + extracted text, word count), (2) run the 20-panel
vote + 5 deep-dives in parallel agent sessions, (3) tally conversion + cluster objections, (4) apply
fixes for the top recurring objections (copy and/or design), (5) verify (tsc + build + screenshot),
(6) append a timestamped entry to the progress page with shots and the conversion delta. Repeat.

- **Round 0** = benchmark of the page as it stands (1,505 words). No fixes before measuring.
- **Stop conditions:** target reached, OR two consecutive rounds improve by <1 vote (plateau → report
  and decide with Bertrand), OR 4 rounds in one session (cost guard).

## Known improvement backlog (queued for Round 1, informed by Round 0 results)

1. **Length & meat:** grow to ~3,000–4,000 words. Candidates: resurrect the FAQ block (cut in the
   redesign), "Who this is for / not for" lists, "What happens the minute you buy" delivery section,
   future-pace section, expanded stack descriptions with fascination bullets, an "everything you get"
   recap box before the final CTA, and the two REAL client review quotes already sitting in our proof
   screenshots ("Perfect work! Perfect Communication…", "Bertrand went above and beyond…") pulled out
   as styled testimonials.
2. **Width/weight:** the `max-w-2xl` column reads thin; test `max-w-3xl` + slightly larger body type
   so the page feels substantial, JVZoo-style, while keeping the v4 editorial skin.

## Constraints

- **Real numbers only — never invent claims, testimonials, or results.** Allowed facts: $700 and
  $780/mo retainers ($1,480/mo, 2 clients, ~8h each), ~$90/h, 40 applicants, Belgium, daughter,
  November, $37 price / $649 stack value / $67 post-launch price, 30-day keep-the-bonuses guarantee,
  24-proposals→1-hire stats, and any quote visible in the real screenshots.
- Copy register stays Bertrand/Kern: contractions, direct address, asked-and-answered objections.
- v4 funnel-page skin (paper/ink/purple); scarcity must be true; `/client-system` prod redirect stays
  until launch; checkout URL remains a TODO placeholder.
- Persona sessions must be adversarial (cynical, tight with money) and isolated from each other.
  Same personas + same prompt template every round; only the artifact changes.
- Panel batching compromise (cost): the 20 panel personas run as 5 agent sessions × 4 personas each;
  the 5 deep-dive cynics get fully separate sessions per the original technique.

## Deliverables

1. **Pinned progress page** `client-system-letter-progress.html` — timestamped entries, newest first,
   screenshots in `docs/planning/client-system-shots/`, conversion scoreboard per round.
2. **The personas file** — fixed 20-panel + 5 cynics, reusable for any future page test.
3. **The improved letter** shipped in `ClientSystemPage.tsx` (preview route), each round verified.
4. **Final summary** — conversion curve across rounds, surviving objections, recommendation on
   whether 10% is reachable pre-launch or needs real assets (VSL, illustration, product cover).

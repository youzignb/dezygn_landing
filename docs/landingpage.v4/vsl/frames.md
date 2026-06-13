# frames.md — VSL Visual Style Guide ("Paper & Ink in Motion")

The motion-design system for the Client System VSL, authored for **HeyGen HyperFrames**
(HTML→MP4 render engine — "write HTML, render video"). This is the bridge doc: it turns
[`client-system-vsl-script.md`](./client-system-vsl-script.md) into HyperFrames compositions.
It mirrors the site's V4 "Paper & Ink Editorial" language (`docs/landingpage.v4/style-guide.md`)
so the video and the landing page feel like one brand.

> HyperFrames reads a `design.md` token block before authoring scenes. The YAML below IS that
> block — drop it in as the project's `design.md`. The rest of this file is per-beat direction.

---

## 1. Design tokens (paste as `design.md` front-matter)

```yaml
name: Paper & Ink in Motion
inspiration: Editorial print magazine on warm paper — restrained, typographic, one accent.
palette:
  # OKLCH, neutrals tinted warm toward the accent (never dead gray)
  vellum:      "oklch(0.96 0.006 85)"    # #F7F5F0  default light bg
  paper:       "oklch(0.93 0.008 85)"    # #EDEBE6  alt light bg
  ink:         "oklch(0.22 0.01 60)"     # #1A1A1A  text / dark bg / footer
  inkWarm:     "oklch(0.28 0.012 60)"    # #2B2B2B  secondary dark
  muted:       "oklch(0.52 0.015 70)"    # #6B6459  secondary text
  dim:         "oklch(0.62 0.012 75)"    # #8B867B  captions/labels
  accent:      "oklch(0.62 0.20 295)"    # #8B5CF6  THE accent (CTAs, marks)
  accentDeep:  "oklch(0.54 0.22 292)"    # #7C3AED  accent hover / emphasis
  paperOnDark: "oklch(0.91 0.01 85)"     # #E8E4DB  text on dark scenes
typography:
  display:  { family: "Instrument Serif", style: italic, weight: 400, use: "accent words only — last word of a headline, big numbers" }
  headline: { family: "Inter", weight: 700-900, tracking: -0.02em, use: "scene headlines" }
  body:     { family: "Inter", weight: 400-500, min_size: 22px, use: "supporting lines" }
  label:    { family: "IBM Plex Mono", weight: 500, transform: uppercase, tracking: 0.14em, size: 12-14px, use: "eyebrows, captions, stat labels" }
radius: { card: 24px, panel: 32px, pill: 9999px, image: 12px }
motion:
  energy: medium-calm           # editorial, confident — not hyperactive
  easing: "power3.out"          # entrances; "sine.inOut" for ambient
  durations: { micro: 0.3s, entrance: 0.5s, scene: 0.6s }
  rule: "Every scene has 2–4 decorative elements sharing ONE ambient motion."
atmosphere:
  - "Oversized serif glyph (✳ / ✦) at a corner, 6–10% accent opacity, slow drift/rotate."
  - "Faint ghost wordmark 'dezygn' at 3–5% ink, parallax drift."
  - "Purple radial glow breathing in scale behind dark scenes (scale 1.0→1.05, sine)."
transitions:
  default: "soft paper wipe (left→right) or crossfade, 0.5s"
  reveal:  "for before→after product shots: hard wipe with a thin accent seam"
  rule: "Entrance anim on every element. Exit anims FORBIDDEN except the final scene (the transition is the exit)."
guardrails:
  - "ONE accent only (purple). No gradients-as-text, no neon cyan, no pure #000/#fff."
  - "Headlines 700–900; body ≥22px; WCAG AA contrast on every text-over-image."
  - "Serif italic is a spice (accent words, numbers) — never body."
  - "Light scenes = vellum/paper bg, ink text. Dark scenes (proof/showcase/close) = ink bg, paperOnDark text, products pop."
render: { width: 1920, height: 1080, fps: 30 }
```

---

## 2. Scene rhythm (light ↔ dark, mirrors the page)

Alternate background tone to give the cut a heartbeat and make proof land:

| Beat | Bg | Why |
|---|---|---|
| 1 Open | **dark** | screenshot proof pops; serious, arresting |
| 2 Problem | vellum | breathe; the begging montage |
| 3 Scarcity | paper | quiet aside |
| 4 Agitate | **ink, dim** | pressure |
| 5 Reveal | vellum→**dark seam** | the before→after wipe is the hero moment |
| 6 Benefits | **dark** | client photos + receipts glow |
| 7 CTA-1 | vellum | clean, bright, button |
| 8 Proof | **dark** | receipts/Milan |
| 9 Guarantee | paper | warm, trustworthy |
| 10 CTA-2 | **dark** | value stack $649→$37 |
| 11 Warnings | vellum | honest, plain |
| 12 Close | **dark** | callback to the feed, final button |

---

## 3. Per-beat frame direction + asset map

All real assets live in `public/assets/images/client-system/` (screenshots) and
`.../client-system/work/` (client photos). Copy the ones used into the VSL project's `assets/`.

- **B1 Open** — full-frame `proof-message.png` + `proof-reply.png`; highlight box animates onto the "40+ applicants" badge; karaoke caption pops "FORTY… I WON." Serif glyph drifts corner.
- **B2 Problem** — Upwork-feed B-roll (screen-record or a styled mock); three chat bubbles stagger in ("I can do this." / "I'm an expert." / "Check my portfolio.") then stamp "PROMISE." ×3 in mono.
- **B3 Scarcity** — single centered text card on paper, accent underline draws in.
- **B4 Agitate** — desaturated montage: "viewed · no reply" chips, a price ticker dropping, empty-inbox refresh. Ink bg, dim text, glow pulses.
- **B5 Reveal** — text slide "So I make the image first." kinetic-types in, then THE wipe: `work/cream-before.jpg` → accent-seam wipe → `work/cream-after.jpg`. Big serif card slams: *Proof Before Pitch.* (This is the screenshot-worthy frame.)
- **B6 Benefits** — fast before→after trio: `work/pendant-*`, `work/toy-*`, `work/pet-after.jpg`; cut to `offer-780.png` with the −$78 line ringed; stat card "$700 + $780 / mo · ~8 hrs · ≈$90/hr".
- **B7 CTA-1** — vellum; the offer/product card + pill button `GET THE CLIENT SYSTEM — $37`; mono note "$37 today · $67 after launch".
- **B8 Proof** — `profile-top-rated.png`; the 24→3→1 funnel (`proposals-funnel.png`) with numbers counting up; Milan card (`work/milan.jpg`, 5 stars, the quote, label "Dezygn user").
- **B9 Guarantee** — paper; purple shield seal scales in; "30 days · full refund · keep the bonuses"; Bertrand line "running the method on you right now."
- **B10 CTA-2** — dark; value-stack rows tick in with values, total **$649** stamps, slash, **$37** serif-italic drops; button.
- **B11 Warnings** — vellum; calendar graphic "Price → $67 on [DATE]"; honest card "Not for push-button-money seekers."
- **B12 Close** — dark; Upwork feed, a new job posts, forty "I can do this" stack, ONE sample slides on top; final button; "Talk soon, Bertrand." Final scene = the only one allowed an exit anim.

---

## 4. Captions

- Burned-in, **word-synced** (sound-off safe — ~85% watch muted).
- Generate: voiceover → `npx hyperframes transcribe narration.wav` → word-level JSON → karaoke captions.
- Style: Inter 700, paperOnDark on dark scenes / ink on light, active word highlighted in **accent**; bottom third, safe-area padded; 2 lines max.

---

## 5. Script → HyperFrames composition mapping

- `index.html` = root composition (1920×1080@30), orchestrates 12 sub-compositions.
- One sub-composition HTML per beat: `compositions/b01-open.html` … `compositions/b12-close.html`.
- **Format = old-school slide VSL, NO presenter.** Every beat is animated typographic slides + the real assets, over a voiceover. Generate the scratch VO with **Kokoro TTS** (`npx hyperframes tts "<line>" --voice af_nova --output bNN.wav`) per beat to lock timing now; swap in Bertrand's real recorded voiceover later (drop-in `<audio>` replacement, same timings). Audio rides as a separate `<audio>` clip per beat sharing `data-start`/`data-duration`.
- Each visual element = a `.clip` with `data-start` / `data-duration` / `data-track-index`; layer with CSS `z-index` (NOT track index). Build GSAP timelines paused + synchronously.
- Transitions between every beat; entrance anims on every element.

See [`hyperframes-setup.md`](./hyperframes-setup.md) for install + the exact pipeline.

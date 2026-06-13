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

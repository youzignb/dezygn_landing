# HyperFrames Setup & VSL Pipeline

How we go from [`client-system-vsl-script.md`](./client-system-vsl-script.md) →
a rendered MP4 VSL in Bertrand's voice/likeness, styled per [`frames.md`](./frames.md).

## What HyperFrames actually is (important)
It is **NOT** an avatar/voice tool. HyperFrames is an open-source **HTML→MP4 render engine**
("write HTML, render video — built for agents", Apache-2.0, no per-render fee). A "frame/scene"
is an HTML file; elements with `class="clip"` + `data-start`/`data-duration`/`data-track-index`
are placed on a paused GSAP timeline the renderer seeks deterministically.

**The avatar/voice is a separate HeyGen product.** So our pipeline is two tools:
**HeyGen (avatar + cloned voice → talking-head MP4)** → **HyperFrames (composite + B-roll + captions → final MP4)**.

## What's already set up here
- `hyperframes/` — the cloned engine + docs + **skills** (`skills/hyperframes`, `-cli`, `-media`, `gsap`, `tailwind`, plus `visual-styles.md` / `house-style.md`). *Gitignored (107 MB).*
- `vsl-project/` — a scaffolded project (`npx hyperframes init`, blank example). Contains `index.html` (root composition, 1920×1080@30), `hyperframes.json`, `meta.json`.
  - `vsl-project/design.md` — our **Paper & Ink in Motion** tokens (from `frames.md`).
  - `vsl-project/assets/` — the 13 real assets the script uses (screenshots + client photos + Milan).
- Toolchain verified: Node 24, FFmpeg 8.1, `npx hyperframes` working. CLI pins `hyperframes@0.6.97`.

## Prerequisites
- Node 22+ ✓, FFmpeg ✓. TTS/transcription run **locally** (Kokoro + Whisper, no API key).
- HeyGen account **only** for the cloned-voice talking head (see costs below).

## Pipeline — step by step

**1. (HeyGen, once) Clone Bertrand's voice + build his avatar.**
- Voice cloning: HeyGen **Creator** tier (~$29/mo) — upload a clean voice sample.
- Likeness: **Photo Avatar** (Creator) or custom avatar (Business ~$149/mo), or the **API** (~$0.05/sec of generated video, pay-as-you-go).
- Feed the VO lines from the script per beat → export 12 talking-head **MP4s** (or one long one, cut later).
- *Scratch option before paying:* `npx hyperframes tts "<line>" --voice af_nova --output b01.wav` (robotic but lets us time the cut now).

**2. (HyperFrames) Build the 12 beat compositions.**
- In `vsl-project/`, create `compositions/b01-open.html` … `b12-close.html` (one per script beat).
- Hand it to an AI coding agent with the skills installed: `cd vsl-project && npx skills add heygen-com/hyperframes`, then prompt e.g. *"Using /hyperframes and design.md, build b05-reveal.html: Bertrand MP4 center, then wipe cream-before.jpg → cream-after.jpg with an accent seam, then slam a serif 'Proof Before Pitch.' card. Follow frames.md beat B5."*
- Each visual = a `.clip` with timing attrs; the HeyGen MP4 is a plain `<video class="clip" muted>`; its audio rides a separate `<audio>` track (or use the MP4's own audio). Layer with CSS `z-index`.
- Wire all 12 into `index.html` as sub-compositions (`data-composition-src`, `data-start`).

**3. Captions.**
- `npx hyperframes transcribe narration.wav` → word-level JSON → karaoke captions per `frames.md §4`.

**4. Preview → check → render.**
```bash
cd vsl-project
npm run dev      # browser preview, hot reload
npm run check    # lint + validate + inspect the timeline
npm run render   # → output.mp4
```

**5. Cut the 60–90s ad version** (script beats 1, 4, 5, 7, 12) as a second root composition for paid social.

## Style authority
`vsl-project/design.md` (tokens) + `frames.md` (per-beat direction + asset map) govern all visuals.
They mirror the site's V4 style guide so the VSL and landing page read as one brand. The closest
HeyGen house-style preset is a custom blend of *Velvet Standard* (negative space, Inter) on light
scenes and *Shadow Cut* (near-monochrome + one accent) on the dark proof scenes — but our tokens
override; don't import a preset wholesale.

## Open decisions for Bertrand
1. **HeyGen tier** — Creator (~$29/mo, photo avatar + voice clone) is enough to start. Confirm before we generate the talking head.
2. **Avatar vs. real footage** — HeyGen photo-avatar of you, or record real talking-head footage and just composite it? (Real footage = more trust on a "this guy actually does this" page; avatar = faster iteration.)
3. **Voice** — clone yours (best) vs. Kokoro scratch for the first timing pass.

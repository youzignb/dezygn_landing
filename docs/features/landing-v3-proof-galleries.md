# Landing V3 Proof Galleries + Optimized Example Images

**Ship date:** February 6, 2026

## Summary
Added two new proof-heavy example image galleries to Landing Page V3 so designers and photographers can quickly judge output quality. Also optimized the provided example images for fast page load.

## What Changed
- Added a new **Proof Gallery** section (grid + click-to-zoom) after “How It Works”.
- Added a **More Example Outputs** horizontal scroll strip under the Transformation Case Study section.
- Implemented a lightweight lightbox modal (supports click-outside + `Esc` to close).
- Converted 29 exported PNG examples into WebP and generated two responsive sizes per image.

## Rationale
The page targets designers and photographers who need to see strong, varied outputs before they will trust the product. These galleries increase “proof density” without replacing the existing transformation/compare interactions.

## Implementation Notes
- Example images live in `public/assets/images/landing-v3/examples/` so they can be referenced by simple URLs and cached by the CDN.
- The galleries use `srcSet` and `sizes` to avoid shipping oversized images on mobile.

## Verification
- `npm run build`
- `npm run lint`

## Files Touched
- `/src/pages/LandingPageV3.tsx`
- `/public/assets/images/landing-v3/examples/*`
- `/.eslintrc.cjs`


# Dezygn Logo Assets

This folder is for storing Dezygn logo files that will be used throughout the website.

## Recommended Logo Formats

### For Web Use:
- **SVG** - Best for scalability and crisp display at all sizes
- **PNG** - Good for complex logos with transparency
- **WebP** - Modern format for optimized loading

### Recommended Sizes:
- **Logo variants:**
  - `dezygn-logo.svg` - Primary logo (scalable)
  - `dezygn-logo-dark.svg` - Dark version for light backgrounds
  - `dezygn-logo-light.svg` - Light version for dark backgrounds
  - `dezygn-icon.svg` - Icon only version

- **PNG fallbacks:**
  - `dezygn-logo@2x.png` - High-res version (400-600px width)
  - `dezygn-logo.png` - Standard version (200-300px width)
  - `dezygn-icon@2x.png` - High-res icon (128x128px)
  - `dezygn-icon.png` - Standard icon (64x64px)

## Usage in Code

### Public Assets (recommended for logos):
```jsx
// Direct reference (files in public/assets/images/logos/)
<img src="/assets/images/logos/dezygn-logo.svg" alt="Dezygn" />
```

### Imported Assets:
```jsx
// Import method (files in src/assets/images/logos/)
import dezygn_logo from '../assets/images/logos/dezygn-logo.svg'
<img src={dezygn_logo} alt="Dezygn" />
```

## Current Usage
The logo is currently implemented as a gradient icon in the navigation. Once you upload the official logo files, we can update the components to use the actual logo assets.

---
*Upload your Dezygn logo files to this directory*
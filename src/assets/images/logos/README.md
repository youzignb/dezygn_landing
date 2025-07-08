# Imported Logo Assets

This folder is for logo files that will be imported directly into React components.

## When to Use This Folder vs Public Assets

### Use this folder (`src/assets/`) when:
- You want Vite to process and optimize the images
- You need the images bundled with your components
- You want automatic cache busting via hashed filenames

### Use public folder (`public/assets/`) when:
- You want direct URL access to images
- The images don't need processing
- You prefer simpler reference paths

## Usage Example
```jsx
import dezygn_logo from './logos/dezygn-logo.svg'

const Logo = () => (
  <img src={dezygn_logo} alt="Dezygn" className="h-8 w-auto" />
)
```

---
*This is an alternative location for logo assets if you prefer the import method*
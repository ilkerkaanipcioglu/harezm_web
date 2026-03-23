# Asset Purge and CSS Standardization Plan

## Goal Description
The goal is to completely purge the remaining green theme colors and old site images (stock images) to ensure strict adherence to the new Harezm Core Identity (Dark Theme). 

## User Review Required
> [!IMPORTANT]  
> Please review this plan. This involves removing the Unsplash stock images from the Hero and "Why Us" sections across all languages. These sections will be converted into clean, dark-themed typographic or minimalist UI blocks to stick to the "Too many colors = cheap look" rule. Let me know if you would prefer me to generate new AI-themed images instead of removing them completely.

## Proposed Changes

### CSS Custom Properties
#### [MODIFY] `src/styles/global.css`
- Completely replace the `@theme` block that contains the old `emerald/green` hex codes (e.g., `--color-primary: #006c49`). 
- Inject the exact Harezm brand colors defined in the `brand__colour.txt`:
  - `--color-background: #0B0B0D;`
  - `--color-surface: #1A1C1F;`
  - `--color-primary: #C1121F;`
  - `--color-on-background`: `#F5F7FA;`
  - And map necessary variants (`surface-container-low`, `surface-container-highest`) to dark theme values so that Astro standard components automatically adopt the new aesthetics.

### Remove Old Imagery
#### [MODIFY] `src/pages/index.astro` and `src/pages/en/index.astro`
- **Hero Section**: Remove the Unsplash standard `<img alt="Abstract Financial Tech" .../>`. The right-side layout will be refactored to focus solely on the floating statistic cards (`100+ Global Integrations`) with a clean `bg-surface-variant` and structural border layout, highlighting the stats without relying on stock imagery.
- **Why Us Section**: Remove the placeholder `<img alt="Technology Team" .../>`. The section will be widened to emphasize the three core pillars with more negative space, adhering to premium typography rules.
- **Problem-Solution Section**: Remove any lingering `bg-slate-200/60` classes that conflict with the dark mode, substituting them with `bg-surface-variant`.

#### [MODIFY] `src/pages/referanslar.astro` and `src/pages/en/references.astro`
- Remove references to `/images/case-study-1.png` and `/images/case-study-2.png`. Replace them with text-first, data-driven case study cards (e.g., highlighting metric improvements) on a dark background.

## Verification Plan

### Automated Tests
- Run `npm run build` after modifications.

### Manual Verification
- Start the development server (`npm run dev`).
- Visually inspect the Hero and "Why Us" sections to confirm the Unsplash images are gone and the new layout holds up structurally.
- Verify that `global.css` correctly propagates the Deep Black background and Soft White text universally.
- Ensure no lingering green highlights appear on hovers or backgrounds.

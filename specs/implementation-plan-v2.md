# Implementation Plan: Core Identity v2 (Deep Plum & AI Tech)

## Goal Description
Upgrade the Harezm brand identity from the legacy / intermediate theme to the "Core Identity v2". The site will transition from a traditional corporate look to a premium "AI-driven financial architecture firm" aesthetic. This involves swapping the primary color to Deep Plum, introducing Electric Turquoise for "Tech Layer" accents, enforcing strict typography rules (Inter, text depth via opacity), and applying deep, non-flat UI layers (glassmorphism, gradients, shadow).

## User Review Required
> [!IMPORTANT]  
> Please review this plan. The changes will completely transform the color balance. Red will only be used for alerts—Deep Plum and Electric Turquoise will take over gradients and accents. Text readability will be strictly enforced using the 100%, 70%, 50% opacity rule for Soft White.

## Proposed Changes

### `src/styles/global.css`
- **[MODIFY]** Update `@theme` custom properties:
  - `--color-primary`: `#580F41` (Deep Plum)
  - `--color-tertiary` or accent: `#40E0D0` (Electric Turquoise)
  - Adjust base shades to match the gradient (`Black -> Plum`).
- **[MODIFY]** Add specific typography vars for tracking, line-height, and the defined font scale if needed (or we use standard Tailwind scaling). Ensure `Inter` is globally applied.

### `src/layouts/Layout.astro`
- **[MODIFY]** Update the global background to use the new gradient `Base: #0B0B0D -> #1A0D18 -> #580F41` instead of flat `#0B0B0D`.
- **[MODIFY]** Inject typography letter-spacing rules from the brand guide (`-0.02em` for headings, `0.02em` for UI labels).
- **[MODIFY]** Enhance `.glass-nav` and `.card-hover` utilities to use heavier blur, lower opacity silver borders (`border-outline/10`), and soft shadows, eliminating any "flat" design elements.

### `src/pages/index.astro` & `src/pages/en/index.astro`
- **[MODIFY] Hero Section**: Change the primary callout gradient to `Turquoise -> Deep Plum` (subtle text gradient). Scale the H1 to the new `64px/72px` standard. Update the CTA buttons to use the new UI scale and spacing rules. Enforce `max-w-[600px]` for paragraphs with 80% opacity (`text-white/80`). 
- **[MODIFY] Cards and Sections**: Convert all text to follow the opacity rule (Primary = 100%, Secondary = 70%, Hint = 50%). Ensure all padding and margins strictly follow the 8px grid (using Tailwind's default `p-8` = 32px, `p-12` = 48px, etc).

## Verification Plan
1. **Automated tests**: Verify successful `npm run build` to catch any mistyped Tailwind v4 variables.
2. **Visual testing locally**: Confirm that text contrast is optimal, text is highly readable due to the strict opacity/max-width limits, and the site feels "AI-driven" with the Deep Plum / Turquoise accents and heavy glassmorphism.
3. **Browser Artifact**: Produce a browser recording showcasing the hover states, deep backgrounds, and typography scaling.

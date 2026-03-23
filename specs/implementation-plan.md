# Harezm Brand Colors and Logo Integration Plan

## Goal Description
The goal is to apply the new Harezm Core Identity (Brand Colors and Logo) across the site as specified in `assets/brand__colour.txt` and the `assets/logo` directory. This involves switching from the current Material Design green-based light theme to the premium Dark Theme defined by the brand guidelines.

## User Review Required
> [!IMPORTANT]  
> Please review this plan. The brand guidelines specify a dark theme as the primary look. This means `bg-background` will become "Deep Black" and text will become "Soft White". 
> Do you prefer keeping Light and Dark mode options, or forcing the site into the pure Dark Theme as specified by the "Core Identity"? Since the identity specifies Deep Black as the main background, I will default to making the core look Dark.

## Proposed Changes

### Configuration
#### [MODIFY] `tailwind.config.mjs`(file:///b:/DEV/harezm._web/tailwind.config.mjs)
- Redefine `colors` to include the branding:
  - `background`: `#0B0B0D` (Deep Black)
  - `surface`: `#1A1C1F` (Graphite Gray)
  - `on-background`: `#F5F7FA` (Soft White)
  - `on-surface`: `#F5F7FA` (Soft White)
  - `primary`: `#C1121F` (Core Red)
  - `outline`: `#C9CCD1` (Metal Silver)
  - Adjust any other mapped surface colors to complement the deep black base.

### Global Layout & CSS
#### [MODIFY] `src/layouts/Layout.astro`(file:///b:/DEV/harezm._web/src/layouts/Layout.astro)
- Change `<html class="light scroll-smooth" ...>` to `<html class="dark scroll-smooth" ...>`.
- Update `body` styles: Background to Deep Black, color to Soft White.
- Overhaul `is:global` CSS:
  - Update `.glow-primary` box-shadows to use Core Red (`rgba(193, 18, 31, ...)`).
  - Update `.gradient-text` to use subtle Core Red to darker red.
  - Fix scrollbar thumb colors to Metal Silver or Core Red.

### Layout Components (Header & Footer)
#### [MODIFY] `src/components/Header.astro`(file:///b:/DEV/harezm._web/src/components/Header.astro)
- Update logo `<img>` `src` to point to the new logo (e.g. `/images/harezm-logo-dark.svg`).
- Adjust hover and active states of navigation to use `primary` (Core Red) and `surface` (Graphite Gray).
- Ensure `.glass-nav` background matches the dark theme (e.g., `rgba(11, 11, 13, 0.82)` instead of white).

#### [MODIFY] `src/components/Footer.astro`(file:///b:/DEV/harezm._web/src/components/Footer.astro)
- Update logo `<img>` `src`.
- Review background classes (`bg-on-background`). If `on-background` is now Soft White, the footer background might become white, but the brand calls for Deep Black. I will map it strictly to `bg-background` or `bg-surface`.

### Static Assets
#### [NEW] `/public/images/harezm-logo-dark.svg`
- Copy `b:\DEV\harezm._web\assets\logo\darktheme_logo.svg` to the public images directory for universal access.

## Verification Plan

### Automated Tests
- Run `npm run build` or Astro's equivalent to ensure the build succeeds.

### Manual Verification
- Start `npm run dev` and navigate to `http://localhost:4321`.
- Verify the header and footer display the new logo.
- Ensure the background is `#0B0B0D` and text is legible (`#F5F7FA`).
- Hover over buttons and links to check that the highlighting uses `#C1121F` appropriately.
- Check responsive mobile menu colors to ensure they translated well to the dark theme.

# Finsoft Astro Web Site Implementation Plan

## Goal Description
Build a multi-page, SEO-friendly, and high-performance corporate website for Finsoft. We will use Astro and Tailwind CSS to convert the existing static HTML designs (`stitch_anasayfa.html` and files inside `assets/stitch_finsoft/`) and the content (`finsoft_site_icerik_v3.md`) into a modular, production-ready web application.

## User Review Required
Please review the proposed page architecture and folder structure. We are going to extract the common parts (Header, Footer) into reusable components and create individual Astro pages. The content from your Markdown file will be integrated directly into these pages.

## Proposed Changes

### Configuration
---
#### [NEW] `tailwind.config.mjs`
Initialize Astro with the `@astrojs/tailwind` integration and migrate the custom color palette and font families from the `<script id="tailwind-config">` present in the current HTML files.

#### [NEW] `astro.config.mjs`
Standard Astro configuration for building a static site (SSG).

### Layouts & Components
---
#### [NEW] `src/layouts/Layout.astro`
The main HTML shell containing `<head>`, fonts (IBM Plex Sans, Inter, Work Sans, Material Symbols), global CSS, and the `<slot />` for page content.

#### [NEW] `src/components/Header.astro`
The glassmorphic top navigation bar extracted from the HTML files. Includes routing links and language toggle UI.

#### [NEW] `src/components/Footer.astro`
The rich footer extracted from the HTML files with newsletter signup and contact information.

### Pages
---
#### [NEW] `src/pages/index.astro`
The main landing page. Migrated from `assets/stitch_anasayfa.html`.

#### [NEW] `src/pages/hizmetler.astro`
The main services overview page. Migrated from `assets/stitch_finsoft/finsoft_hizmetler_v3.2_kapsaml_tasar_m/code.html`.

#### [NEW] `src/pages/referanslar.astro`
The references and case studies page. Migrated from `assets/stitch_finsoft/finsoft_referanslar_ve_vaka_analizleri_v3.1/code.html`.

#### [NEW] `src/pages/lokalizasyon.astro`
The Turkey Localization special page. Migrated from `assets/stitch_finsoft/finsoft_t_rkiye_lokalizasyonu_v3.2/code.html`.

#### [NEW] `src/pages/hakkimizda.astro`
About Us page, built using the layout components and populated with text from `finsoft_site_icerik_v3.md`.

#### [NEW] `src/pages/iletisim.astro`
Contact form page, built using the layout components and populated with the form structure defined in `finsoft_site_icerik_v3.md`.

## Verification Plan

### Automated Tests
- Run `npm run build` after completing the port to verify that Astro can successfully statically generate all pages without compilation or typing errors.

### Manual Verification
- A browser subagent or local developer will run `npm run dev`.
- Visually inspect the local development server at `http://localhost:4321`.
- Verify that navigation between `/`, `/hizmetler`, `/referanslar`, and `/lokalizasyon` works seamlessly.
- Verify that responsive design (Tailwind classes) and typography match the original HTML files precisely.

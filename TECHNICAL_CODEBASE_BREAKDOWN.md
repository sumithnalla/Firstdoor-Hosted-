# Technical Codebase Breakdown — FirstDoor (artifacts/firstdoor)

This document is a developer-focused, line-level breakdown of the codebase present in this workspace. It is intended to help architects, dev leads, and implementers understand purpose, routing, styling, data flows, integrations, assets and SEO details.

**Repository root**: [index.html](index.html)

**Primary source folder**: [src/](src/)

---

**1. Project Overview & Business Logic**
- **Purpose:** FirstDoor is a marketing & lead-capture website for a Hyderabad-focused real-estate consultancy that markets verified RERA projects, commercial listings and e-flats/new-launches. (See the marketing copy in [index.html](index.html) and page headers in [src/pages/Home.tsx](src/pages/Home.tsx) and [src/pages/About.tsx](src/pages/About.tsx)).
- **Audience:** Property buyers, investors and developer/channel partners interested in Hyderabad properties (Gachibowli, Hitech City, Madhapur, Jubilee Hills etc.). Content and CTAs are tuned for local buyers and investors.
- **Primary conversion actions:**
  - **WhatsApp links** (join community and one-to-one chat). Implemented with both wa.me links and group chat links. Example uses in code: [src/pages/Home.tsx](src/pages/Home.tsx), [src/pages/Contact.tsx](src/pages/Contact.tsx), [src/components/layout/Footer.tsx](src/components/layout/Footer.tsx).
  - **Click-to-call** via `tel:` links (phone CTA). Present throughout the site (Navbar, Hero CTAs, cards). See [src/components/layout/Navbar.tsx](src/components/layout/Navbar.tsx) and [src/components/PropertyCard.tsx](src/components/PropertyCard.tsx).
  - **Contact form** (site contact form) — posts to a Google Apps Script endpoint that writes to a Google Sheet (see integration details in section 6). Found in [src/pages/Contact.tsx](src/pages/Contact.tsx).

- **Hardcoded contact details found:**
  - **Phone (call/CTA):** 8008113094 — referenced widely (Navbar, Hero CTAs, cards). See [src/components/layout/Navbar.tsx](src/components/layout/Navbar.tsx) and [src/pages/Home.tsx](src/pages/Home.tsx).
  - **WhatsApp (1:1 wa.me):** https://wa.me/918008113094?text=... (WHATSAPP constant) — used for direct chat. See [src/pages/Home.tsx](src/pages/Home.tsx) and [src/pages/Contact.tsx](src/pages/Contact.tsx).
  - **WhatsApp group:** https://chat.whatsapp.com/BlrnRmOoIt07vWPjGvcckj — join community CTA. See [src/components/layout/Navbar.tsx](src/components/layout/Navbar.tsx) and [src/pages/Contact.tsx](src/pages/Contact.tsx).
  - **Email:** info@firstdoor.in — used in the contact card and footer. See [src/pages/Contact.tsx](src/pages/Contact.tsx) and [src/components/layout/Footer.tsx](src/components/layout/Footer.tsx).
  - **Office address:** "5th Floor, Cowork Zone, Kavuri Hills, Madhapur, Hyderabad, Telangana 500033" — present in the Contact page. See [src/pages/Contact.tsx](src/pages/Contact.tsx).
  - **Social links (Footer):** Facebook, Instagram, LinkedIn, YouTube — URLs are explicit in [src/components/layout/Footer.tsx](src/components/layout/Footer.tsx).

---

**2. Complete Tech Stack**
- **Languages:** TypeScript (TSX/TS), JavaScript, CSS (Tailwind + custom CSS). TypeScript project (see `tsconfig.json`).
- **Build / Dev:** Vite (vite, vite.config.ts) — scripts in [package.json](package.json).
- **Frameworks / Libraries (selected):**
  - React 19 (react, react-dom)
  - Vite (`vite`, `@vitejs/plugin-react`)
  - Tailwind CSS v4 + `@tailwindcss/typography` and a Tailwind/Vite plugin
  - UI primitives: Radix UI (`@radix-ui/*` used across components)
  - Routing: `wouter`
  - Data fetching / caching: `@tanstack/react-query`
  - Forms / validation: `react-hook-form`, `@hookform/resolvers`, `zod`
  - Animation: `framer-motion`
  - Icons: `lucide-react`, `react-icons`
  - Utility libs: `clsx`, `date-fns`, `recharts`, `embla-carousel-react`, `sonner`, `tailwind-merge`
  - Misc: `next-themes` (theme switches), `vaul` (present in deps)

Refer to the full dependency list in [package.json](package.json).

---

**3. Site Architecture & Pages (routes)**
- Routing is defined in [src/App.tsx](src/App.tsx) using `wouter` and `Switch/Route`. Routes present:
  - `/` → Home: [src/pages/Home.tsx](src/pages/Home.tsx)
  - `/properties` → Properties listing: [src/pages/Properties.tsx](src/pages/Properties.tsx)
  - `/e-flats` → E-Flats / investment page: [src/pages/EFlats.tsx](src/pages/EFlats.tsx)
  - `/services` → Services: [src/pages/Services.tsx](src/pages/Services.tsx)
  - `/about` → About page: [src/pages/About.tsx](src/pages/About.tsx)
  - `/contact` → Contact page & form: [src/pages/Contact.tsx](src/pages/Contact.tsx)
  - Fallback: NotFound component: [src/pages/not-found.tsx](src/pages/not-found.tsx)

- **Flow:** Home page is feature-rich (hero, featured properties, commercial listings, CTAs). Property cards link to phone CTA (no per-property detail pages in this project; property data is static and displayed in listing cards). Lead capture is via WhatsApp, tel links and the Contact form. Property data lives in `src/data/` and is used directly by pages/components.

---

**4. UI/UX & Styling (Crucial)**
- **Primary styling approach:** Tailwind CSS utility-first with local CSS for variables & base rules. Tailwind v4 is configured and `index.css` imports fonts and defines CSS variables and theme tokens. See [src/index.css](src/index.css).
- **Fonts / Typography:**
  - `Plus Jakarta Sans` (used as primary UI font / `--app-font-sans`) — imported at top of [src/index.css](src/index.css).
  - `Cormorant Garamond` (used for headings / `--app-font-serif`) — imported in [src/index.css](src/index.css).
  - Stack fallback: system fonts configured in CSS variables.

- **Color system:**
  - Project uses CSS variables (HSL token system) defined in [src/index.css](src/index.css) (e.g. `--primary: 210 44% 44%` etc.). These tokens power Tailwind via utility classes.
  - Additionally, several hardcoded hex colors are used in components for precise brand accents. Exact hex codes found in the source include (representative list):
    - `#0c1f33` — deep navy / primary dark background (hero, sections). (used in [src/pages/Home.tsx](src/pages/Home.tsx), [src/pages/Contact.tsx](src/pages/Contact.tsx)).
    - `#25D366` — WhatsApp green (CTAs / badges). (used across `Home`, `Contact`, and many CTA buttons).
    - `#112a46`, `#183558`, `#0a1628`, `#0c2a4a`, `#0e3060` — various darker gradient stops used in linear-gradients across hero/sections.
    - `#f5f7f8` — footer / pale background used in the footer component.
    - Tailwind amber / primary colors are used too (e.g. `bg-amber-400`).

  - The canonical tokens (HSL) are defined in [src/index.css](src/index.css). Many component-level hex values are placed inline in TSX for contrasts and precise control.

- **Mobile-first responsiveness strategy:**
  - The project uses Tailwind's mobile-first utility classes (e.g. `sm:`, `md:`, `lg:` prefixes) throughout. The pattern is consistent: base classes target mobile, responsive prefixes adjust for larger breakpoints.
  - Fluid typography / scaling is used for large headings via utility classes defined in `index.css` (`.fluid-display`, `.fluid-title` using `clamp()`), allowing headline size to scale with viewport.
  - Layout patterns use responsive grids (e.g. `grid lg:grid-cols-2`) and conditional UI (e.g. `hidden md:flex` for desktop nav while mobile uses a toggle menu in Navbar).

---

**5. Component Breakdown (major components & responsibilities)**
- `src/components/layout/Navbar.tsx` — top navigation, brand logo, primary CTAs (`tel` and WhatsApp), mobile hamburger menu and mobile CTA panel.
- `src/components/layout/Footer.tsx` — footer columns, contact items (`tel`, `mailto`), social links, copyright and helpful bottom links.
- `src/components/seo.tsx` — runtime/meta helper that sets `document.title` and meta tags (description, keywords, Open Graph, Twitter) via DOM API. Used at page top.
- `src/components/PropertyCard.tsx` — property listing card with image, badges, price, and `tel:` CTA.
- `src/components/CommercialCard.tsx` — commercial listing card used on Home for premium listings.
- `src/components/CountUpStat.tsx` — numeric KPI component used on Home and About.
- `src/components/ui/*` — UI primitives (avatar, tooltip, dialog, toaster, inputs, toast wrappers) — thin composition over Radix UI or small utilities.

---

**6. Data Flow & Integrations**
- **Static data:** `src/data/` contains CSV/TS conversion files and typed arrays (`properties.ts`, `commercial.ts`, `newdetails.ts`). These are the source of all listing content; there is no server-side DB in the repository.

- **Contact form / Google Sheets integration:**
  - Contact form in [src/pages/Contact.tsx](src/pages/Contact.tsx) constructs a `FormData` object and posts it via `fetch()` to a Google Apps Script `doPost` endpoint. The production endpoint visible in the code is:
    - `https://script.google.com/macros/s/AKfycbw2eA6pAy00LYwYFjPMOQeaw8LsXRQwVPB-PfHVbixt7mJkogED92ab2QRAG3pgyK4/exec`
  - The repository contains supporting docs with the Apps Script `doPost(e)` implementation that appends rows to a Google Spreadsheet. See [google fomr.md](google%20fomr.md) where the sample `doPost` is stored.
  - Implementation detail: the fetch uses `mode: 'no-cors'`. That means the browser will not expose the response body to JavaScript and CORS failures will not be surfaced — the code assumes a dispatched request is success unless a network error throws. This is a pragmatic pattern for Google Apps Script forms, but has tradeoffs (no confirmation/error payloads available client-side).
  - No server-side API or DB is present in the repo; form capture is performed by the Google Apps Script + Google Sheets.

- **Analytics / Search Console:**
  - There is no active Google Analytics or Search Console tag in `index.html`. The repo contains a `deployment_guide.md` that instructs how to set up Google Search Console and Google Analytics and where to add the gtag snippet; the codebase itself does not include an active GA/gtag snippet. See [deployment_guide.md](deployment_guide.md) and [index.html](index.html).

---

**7. Asset Inventory**
- `public/images/` contains the property and marketing images (approx **63** image assets — many `.jfif`, `.webp`, `.avif`, `.jpg` files). See folder: [public/images/](public/images/).
- `public/favicon/` contains favicon variations and `site.webmanifest` (7 files). See [public/favicon/](public/favicon/).
- `src/assets/images/` contains app-specific illustrative assets (hero-bg, apartment/villa thumbnails — ~8 images).
- **Total approximate images & media in repository:** ~71 images in `public/images + src/assets/images` + 7 favicon files — ~78 image/asset files.

---

**8. SEO & Metadata**
- **index.html static head tags:** `index.html` contains canonical `<title>`, `<meta name="description">`, `<meta name="keywords">`, Open Graph and Twitter meta tags and favicon links. See [index.html](index.html).
- **Dynamic meta tags:** each page includes the `SEO` component ([src/components/seo.tsx](src/components/seo.tsx)) which sets `document.title` and injects/updates meta tags (description, keywords, OG, Twitter) at runtime.
- **Google Search Console / Analytics:** Not installed in `index.html` by default. `deployment_guide.md` contains instructions for adding Google Search Console verification and Google Analytics (gtag) but these are not present in the current `index.html` file.

---

**Appendix & Where to look (important files)**
- Router & routes: [src/App.tsx](src/App.tsx)
- Home page: [src/pages/Home.tsx](src/pages/Home.tsx)
- Contact + form: [src/pages/Contact.tsx](src/pages/Contact.tsx)
- SEO helper: [src/components/seo.tsx](src/components/seo.tsx)
- Navbar & Footer: [src/components/layout/Navbar.tsx](src/components/layout/Navbar.tsx), [src/components/layout/Footer.tsx](src/components/layout/Footer.tsx)
- Tailwind / CSS tokens: [src/index.css](src/index.css)
- Dependencies: [package.json](package.json)
- Google Apps Script / form notes: [google fomr.md](google%20fomr.md), [beforeform.md](beforeform.md)

---

If you'd like, I can:
- extract a single-page PDF of this breakdown, or
- add a concise CSV of all contact URLs (WhatsApp, tel, mailto, social) and the exact lines where they appear for quick redaction/updates, or
- open PR with changes (e.g., replace Google Apps Script endpoint with a serverless function, add GA/gtag or add CORS-handling improvements).

Report generated: automated scan of the repository files in this workspace (May 27, 2026).

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Capimax Group corporate website — a bilingual (English/Arabic) React SPA with dark/light theming and PWA support. Capimax is presented as a holding company; content spans its companies, platforms, sectors, and investor/ownership information.

## Development Commands

```bash
pnpm dev       # Start Vite dev server
pnpm build     # Production build
pnpm lint      # ESLint (flat config in eslint.config.js)
pnpm preview   # Preview the production build
```

There is no test runner configured — do not assume `pnpm test` exists.

## Architecture

### Tech Stack
- React 19 + React Router v7 (`react-router-dom`, `BrowserRouter`)
- Vite 6 + Tailwind CSS **v4** (via `@tailwindcss/vite` plugin — configured in CSS, not JS)
- shadcn/ui (style: `new-york`, JSX not TSX) + Radix UI primitives
- Framer Motion for animation
- pnpm package manager
- Plain JavaScript/JSX — no TypeScript. Forms use `react-hook-form` + `zod`; toasts via `sonner`; charts via `recharts`
- **PWA**: `main.jsx` registers `/sw.js` in production only (`import.meta.env.PROD`), so the service worker never interferes with dev HMR. Manifest and icons live in `public/` (`manifest.webmanifest`, `sw.js`, `pwa-*.png`, `maskable-*.png`).

### Key Patterns

**Language System** (`src/App.jsx`):
- `LanguageProvider` context exposes `language`, `setLanguage`, `toggleLanguage`, `isRTL`
- Use the `useLanguage()` hook to read language state
- RTL mode sets `dir="rtl"` and `lang` on `document.documentElement` via an effect
- Every page component receives a `language` prop for content switching
- There is no language toggle UI button; `language` defaults to `'en'` (Arabic content exists but isn't reachable through the UI)

**Bilingual Content Pattern** (important — there is no i18n library):
- **Page-chrome / UI strings** are inline per component: `const translations = { en: {...}, ar: {...} }`, read as `translations[language]` (usually aliased `const t = translations[language]`).
- **Shared entity content** lives in a central data layer under `src/data/` (see below) — companies, platforms, currency, and Nova copy are bilingual there, not inline, because the same copy is reused across Home, Company detail, Platforms, Sectors, and Ownership.
- When adding or editing copy, update **both** the `en` and `ar` keys (in the component's `translations` object *and*, for entities, in `src/data/content.js`).

**Data layer** (`src/data/` — source of truth for entity content):
- `companies.js` — `companyRegistry` (the group companies, keyed by id) + `companyIds`. Facts only (sector, icon, location, activities, contact); `companyNumber`/`incorporated` may be `null` when registration data is pending, and consumers hide empty fields.
- `content.js` — bilingual `companyContent`, `platformContent` (Capimax BRX / RT / PropShare / Asset), `currencyContent` (Pronova), `novaContent`, and `PLATFORM_URLS` (a null URL hides the "Visit" CTA).
- `logos.js` — `getCompanyLogo(id, onBackground)` + `LOGOS` map; companies without a dedicated asset fall back to their lucide icon.
- Editing the registry cascades automatically (e.g. the Home marquee and Companies grid both derive from `companyIds`).

**Theme System** (`src/hooks/use-theme.jsx`):
- `ThemeProvider` wraps the app with `defaultTheme="light"` and `storageKey="capimax-theme"`
- Use `useTheme()` for `theme`, `toggleTheme`, `isDark`, `isLight`
- Persists to localStorage; supports system-preference detection
- The theme toggle button is in `Header.jsx` (shows `Sun`/`Moon` from lucide)

**Import Aliasing**:
- `@/` → `src/` (wired in `vite.config.js` and `jsconfig.json`; e.g. `@/components/ui/button`)

### Component Organization

- `src/components/ui/` — shadcn/ui primitives (Button, Card, Badge, etc.)
- `src/components/layout/` — Container, Section, Grid, Stack, VStack, HStack (note: the redesign largely bypasses `<Section>`/`<Container>` in favor of hand-rolled section markup — only ~1 remaining `<Section>` usage)
- `src/components/enhanced/` — AnimatedSection, FloatingElements, PageHeader
- `src/components/business/` — domain components (CompanyCard, HeroSection, SectorOverview, InvestmentHighlight)
- `src/components/pages/` — route page components
- `src/components/Header.jsx`, `src/components/Footer.jsx` — top-level chrome

## Styling & Design System

### `src/index.css` is the single source of truth
`main.jsx` imports **only** `src/index.css`. It is self-contained and defines everything:
- `@import "tailwindcss";` (Tailwind v4)
- `@custom-variant dark (&:is(.dark *));` — makes `dark:` utilities respond to the `.dark` **class** toggled by `ThemeProvider` (not the OS media query)
- an `@theme { … }` block (light-mode tokens + fonts + brand palette) and a `.dark { … }` block that **redefines the semantic tokens** so they flip cohesively

### ⚠️ Orphaned / stale files — do NOT edit these expecting a visible effect
A rebrand ("Rebrand to Capimax holding-company identity + full redesign") consolidated everything into `index.css` and left several stale copies behind. These are **not wired into the running app**, and most still carry the **old pre-rebrand palette** (`#01DC82` / `#00383E` / `#00C972`). Editing them will not change the site:
- `tailwind.config.js` — a Tailwind v3-style CommonJS config. Tailwind v4 here is configured via CSS `@theme`; nothing references this file via an `@config` directive, so it is dead.
- `src/App.css` — orphaned; not imported anywhere. `components.json` still points shadcn at it (`"css": "src/App.css"`), so newly-generated shadcn components may write tokens here — move/verify anything that matters into `index.css`.
- `src/styles/globals.css` — orphaned (it `@import`s `App.css`, but nothing imports it).
- `src/lib/design-tokens.js` — exports the **old** brand palette; out of sync with `index.css`. Treat as legacy; do not trust its color values.

**Always confirm a token's real value in `src/index.css` before relying on it.**

### Current brand palette (live, in `index.css` `@theme`)
- Brand teal (primary dark / surfaces): `#0a2928`
- Brand green (primary accent): `#2fad6f`
- Secondary green: `#26935c`
- Accent yellow: `#FFD93D`
- Section token families built from the two brand colors: `forest*` (dark teal surfaces), `sand*` (off-white text on dark), `cream`/`paper` (light surfaces), `ink` (text on light). ~45 component files use these directly.

### Fonts (in `@theme`)
- `--font-sans`: Inter (+ IBM Plex Sans Arabic fallback)
- `--font-display`: Playfair Display (serif display; note the source comment says "Fraunces" but the token value is Playfair Display)
- `--font-mono`: JetBrains Mono (used for eyebrow/label text, e.g. the `mono-label` class)

### Dark/light theming approach
Theming is **token-driven first**: the semantic tokens (`background`, `foreground`, `border`, `card`, etc.) are redefined in the `.dark` block, so components built on them flip automatically without per-utility variants. Explicit `dark:` utilities are used where needed (~19 component files) but are **not** required on every element — prefer semantic / `forest` / `cream` / `sand` tokens that already flip. The older "every component must include `dark:` variants" rule no longer holds.

### Cards
Use the shadcn `<Card>` primitives. `src/components/business/CompanyCard.jsx` is the canonical example — it composes `<Card>` with `cva` variants (`default` / `featured` / `minimal`) and semantic tokens (`border-primary/20`, `from-primary/5`, `bg-gradient-to-br`). There is no longer a single blessed `bg-card/50 dark:bg-card/20 backdrop-blur-sm …` string — match the surrounding page's convention.

### Animation Variants (Framer Motion — used consistently)
```javascript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}
```

### Logos
Theme-specific logos are intentionally inverted: components select `isDark ? <light-variant> : <dark-variant>` (the "dark" asset is the dark-on-light version shown in light mode). Match this convention when wiring new logos.

## Routing

Routes are defined in `src/App.jsx` (all pages receive `language`):
- `/` — Home
- `/about` — About
- `/companies` — Companies listing
- `/companies/capimax-investment` — Capimax Investment (static page)
- `/company/:id` — Company detail (dynamic)
- `/platforms` — Platforms listing
- `/platforms/:id` — Platform detail (dynamic)
- `/currency` — Currency
- `/nova` — Nova
- `/team` — Team
- `/brochure` — Brochure (assets in `public/brochures/`)
- `/legal/:doc` — Legal documents (dynamic)
- `/sectors`, `/partners`, `/documents` (assets in `public/documents/`), `/investors`, `/contact`, `/news`

Primary header nav (`Header.jsx`): Home, About, Companies, Platforms, Sectors, Ownership (`/investors`), Contact.

## Utilities
- `cn()` from `@/lib/utils` — merges clsx + tailwind-merge for className composition
- `@/lib/design-tokens` — legacy programmatic tokens; **stale** (see orphaned-files note above)

## Project-Specific Subagents & Docs

`.claude/agents/` defines three Sonnet subagents for this project:
- `design-system-architect` — design tokens, component libraries, dual-theme/accessibility work
- `frontend-implementation-specialist` — bilingual/RTL feature implementation
- `business-requirements-analyzer` — gap analysis against `business-docs/`

Reference material: `business-docs/`, `DESIGN_SYSTEM.md`, `UPDATED_DESIGN_SYSTEM.md`, `BUSINESS_REQUIREMENTS_ANALYSIS_REPORT.md`. These predate the rebrand — for anything about colors, fonts, or component patterns, `src/index.css` and the actual components win over these docs.

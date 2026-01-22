# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Capimax Group corporate website - a bilingual (English/Arabic) React application with dark/light theme support.

## Development Commands

```bash
pnpm dev       # Start development server
pnpm build     # Build for production
pnpm lint      # Run ESLint
pnpm preview   # Preview production build
```

## Architecture

### Tech Stack
- React 19 + React Router v7
- Vite + Tailwind CSS v4
- shadcn/ui + Radix UI primitives
- Framer Motion for animations
- pnpm package manager

### Key Patterns

**Language System** (`src/App.jsx`):
- `LanguageProvider` context provides `language`, `toggleLanguage`, `isRTL`
- Use `useLanguage()` hook to access language state
- RTL mode automatically sets `dir="rtl"` on document root
- All page components receive `language` prop for content switching

**Theme System** (`src/hooks/use-theme.jsx`):
- `ThemeProvider` wraps app with `defaultTheme="light"` and `storageKey="capimax-theme"`
- Use `useTheme()` hook to access `theme`, `toggleTheme`, `isDark`, `isLight`
- Theme persists to localStorage
- Supports system preference detection

**Import Aliasing**:
- Use `@/` alias for `src/` directory (e.g., `@/components/ui/button`)

### Component Organization

- `src/components/ui/` - shadcn/ui primitives (Button, Card, Badge, etc.)
- `src/components/layout/` - Container, Section, Grid, Stack, VStack, HStack
- `src/components/enhanced/` - AnimatedSection, FloatingElements, PageHeader
- `src/components/business/` - Domain-specific components
- `src/components/pages/` - Route page components

### Design System Requirements

**Brand Colors** (defined in `src/index.css`):
- Primary: `#01DC82` (eco-green)
- Primary Dark: `#00383E`
- Secondary Green: `#00C972`

**Dark/Light Mode**: All components must include `dark:` variants:
```jsx
className="bg-card/50 dark:bg-card/20 text-foreground"
```

**Card Pattern** (standard for all cards):
```jsx
<Card className="relative border-0 bg-card/50 dark:bg-card/20 backdrop-blur-sm hover:bg-card/80 dark:hover:bg-card/40 hover:shadow-2xl dark:hover:shadow-primary/20 transition-all duration-500 group h-full overflow-hidden">
```

**Animation Variants** (use consistently with Framer Motion):
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

**Section Pattern**:
```jsx
<Section spacing="xl" className="relative bg-gradient-to-br from-muted/20 via-background to-card/10 dark:from-muted/5 dark:via-muted/10 dark:to-card/20">
  <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
  <Container size="xl" className="relative z-10">
    {/* Content */}
  </Container>
</Section>
```

### Routing

Routes defined in `src/App.jsx`:
- `/` - Home
- `/about` - About
- `/companies` - Companies listing
- `/companies/capimax-investment` - Capimax Investment page
- `/company/:id` - Company detail (dynamic)
- `/sectors`, `/partners`, `/documents`, `/investors`, `/contact`, `/news`

### Utilities

- `cn()` from `@/lib/utils` - Combines clsx + tailwind-merge for className merging
- Design tokens available in `@/lib/design-tokens` for programmatic access

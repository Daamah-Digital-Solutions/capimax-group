/**
 * Capimax Group Design Tokens
 * Comprehensive design token system for consistent theming
 */

export const designTokens = {
  // Capimax Design System - Color System
  colors: {
    // Brand Colors from Design System
    brand: {
      primary: '#00383E',      // Primary Dark
      secondary: '#01DC82',    // Primary Green
      tertiary: '#00C972',     // Secondary Green
    },
    
    // Semantic Colors from Design System
    semantic: {
      success: '#01DC82',      // Design System Primary Green
      warning: '#FFD93D',      // Design System Accent Yellow
      destructive: '#FF5252',  // Design System Error Red
      info: '#2196F3',         // Design System Info Blue
    },
    
    // Light Mode Theme - Design System Colors
    light: {
      background: '#FFFFFF',                      // Design System Light Mode Background
      foreground: '#1A1A1A',                     // Design System Text Primary
      primary: '#01DC82',                        // Design System Primary Green
      'primary-foreground': '#00383E',           // Design System Primary Dark
      secondary: '#F8FAFB',                      // Design System BG Secondary
      'secondary-foreground': '#00383E',         // Design System Primary Dark
      muted: '#F8FAFB',                         // Design System BG Secondary
      'muted-foreground': '#4A5568',            // Design System Text Secondary
      accent: '#F8FAFB',                        // Design System BG Secondary
      'accent-foreground': '#00383E',           // Design System Primary Dark
      card: '#FFFFFF',                          // Design System BG Card
      'card-foreground': '#1A1A1A',             // Design System Text Primary
      popover: '#FFFFFF',                       // Design System BG Card
      'popover-foreground': '#1A1A1A',          // Design System Text Primary
      border: '#E2E8F0',                       // Design System Border Light
      input: '#E2E8F0',                        // Design System Border Light
      ring: '#01DC82',                         // Design System Primary Green
    },
    
    // Dark Mode Theme - Design System Colors
    dark: {
      background: '#0D1117',                      // Design System Dark Mode Background
      foreground: '#F7FAFC',                     // Design System Text Primary (Dark)
      primary: '#01DC82',                        // Design System Primary Green
      'primary-foreground': '#00383E',           // Design System Primary Dark
      secondary: '#161B22',                      // Design System BG Secondary (Dark)
      'secondary-foreground': '#CBD5E0',         // Design System Text Secondary (Dark)
      muted: '#21262D',                         // Design System BG Tertiary (Dark)
      'muted-foreground': '#A0AEC0',            // Design System Text Tertiary (Dark)
      accent: '#21262D',                        // Design System BG Tertiary (Dark)
      'accent-foreground': '#CBD5E0',           // Design System Text Secondary (Dark)
      card: '#161B22',                          // Design System BG Card (Dark)
      'card-foreground': '#F7FAFC',             // Design System Text Primary (Dark)
      popover: '#161B22',                       // Design System BG Card (Dark)
      'popover-foreground': '#F7FAFC',          // Design System Text Primary (Dark)
      border: '#30363D',                       // Design System Border Light (Dark)
      input: '#484F58',                        // Design System Border Medium (Dark)
      ring: '#01DC82',                         // Design System Primary Green
    },
    
    // Chart Colors - Design System Colors
    chart: {
      1: '#01DC82',  // Design System Primary Green
      2: '#00C972',  // Design System Secondary Green
      3: '#FFD93D',  // Design System Accent Yellow
      4: '#00383E',  // Design System Primary Dark
      5: '#2196F3',  // Design System Info Blue
    }
  },

  // Typography System
  typography: {
    fontSize: {
      xs: '0.75rem',      // 12px
      sm: '0.875rem',     // 14px
      base: '1rem',       // 16px
      lg: '1.125rem',     // 18px
      xl: '1.25rem',      // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
      '6xl': '3.75rem',   // 60px
    },
    
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    
    lineHeight: {
      none: 1,
      tight: 1.25,      // headings
      snug: 1.375,      // subheadings
      normal: 1.5,      // body text
      relaxed: 1.625,   // large text
      loose: 2,
    },
    
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    }
  },

  // Spacing System (4px base unit)
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '2.5rem',  // 40px
    '3xl': '3rem',    // 48px
    '4xl': '4rem',    // 64px
    '5xl': '5rem',    // 80px
    '6xl': '6rem',    // 96px
  },

  // Border Radius System
  borderRadius: {
    none: '0',
    sm: 'calc(var(--radius) - 6px)',
    md: 'calc(var(--radius) - 2px)',
    lg: 'var(--radius)',              // 10px default
    xl: 'calc(var(--radius) + 4px)',
    '2xl': 'calc(var(--radius) + 8px)',
    '3xl': 'calc(var(--radius) + 12px)',
    full: '9999px',                   // pill shape
  },

  // Shadow System
  shadows: {
    xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    none: 'none',
  },

  // Breakpoint System
  breakpoints: {
    xs: '475px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1400px',
  },

  // Z-Index System
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },

  // Animation System
  animation: {
    duration: {
      fast: '150ms',
      normal: '200ms',
      slow: '300ms',
      slower: '500ms',
    },
    
    easing: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    }
  },

  // Component Sizes
  sizes: {
    button: {
      xs: { height: '28px', padding: '0 8px', fontSize: '0.75rem' },
      sm: { height: '32px', padding: '0 12px', fontSize: '0.875rem' },
      default: { height: '36px', padding: '0 16px', fontSize: '0.875rem' },
      lg: { height: '40px', padding: '0 20px', fontSize: '1rem' },
      xl: { height: '48px', padding: '0 24px', fontSize: '1.125rem' },
      icon: { width: '36px', height: '36px', padding: '0' },
    },
    
    container: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1400px',
      prose: '65ch',
      full: '100%',
    }
  }
};

// Helper functions for accessing tokens
export const getToken = (path) => {
  return path.split('.').reduce((obj, key) => obj?.[key], designTokens);
};

export const getColorToken = (color, shade) => {
  return designTokens.colors[color]?.[shade] || designTokens.colors[color];
};

export const getSpacingToken = (size) => {
  return designTokens.spacing[size];
};

export const getTypographyToken = (category, size) => {
  return designTokens.typography[category]?.[size];
};

// CSS Custom Property Mappings
export const cssVariables = {
  // Brand colors
  '--brand-primary': designTokens.colors.brand.primary,
  '--brand-secondary': designTokens.colors.brand.secondary,
  '--brand-tertiary': designTokens.colors.brand.tertiary,
  
  // Semantic colors
  '--success': designTokens.colors.semantic.success,
  '--warning': designTokens.colors.semantic.warning,
  '--destructive': designTokens.colors.semantic.destructive,
  '--info': designTokens.colors.semantic.info,
  
  // Spacing
  '--spacing-xs': designTokens.spacing.xs,
  '--spacing-sm': designTokens.spacing.sm,
  '--spacing-md': designTokens.spacing.md,
  '--spacing-lg': designTokens.spacing.lg,
  '--spacing-xl': designTokens.spacing.xl,
  '--spacing-2xl': designTokens.spacing['2xl'],
  '--spacing-3xl': designTokens.spacing['3xl'],
  '--spacing-4xl': designTokens.spacing['4xl'],
  '--spacing-5xl': designTokens.spacing['5xl'],
  '--spacing-6xl': designTokens.spacing['6xl'],
  
  // Border radius
  '--radius': '0.625rem',
  '--radius-sm': designTokens.borderRadius.sm,
  '--radius-md': designTokens.borderRadius.md,
  '--radius-lg': designTokens.borderRadius.lg,
  '--radius-xl': designTokens.borderRadius.xl,
  '--radius-2xl': designTokens.borderRadius['2xl'],
  '--radius-3xl': designTokens.borderRadius['3xl'],
  '--radius-full': designTokens.borderRadius.full,
};

export default designTokens;
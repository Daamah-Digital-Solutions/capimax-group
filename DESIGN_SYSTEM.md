# Capimax Group Design System

## 📋 Table of Contents
- [Overview](#overview)
- [Design Principles](#design-principles)
- [Color System](#color-system)
- [Typography](#typography)
- [Spacing System](#spacing-system)
- [Grid System](#grid-system)
- [Components](#components)
- [Icons](#icons)
- [Motion & Animation](#motion--animation)
- [Accessibility](#accessibility)
- [Dark Mode Implementation](#dark-mode-implementation)

---

## Overview

The Constructopia Design System is a comprehensive guide for building consistent, sustainable, and user-friendly interfaces for the construction and renewable energy platform. This system supports both light and dark modes and emphasizes eco-friendly, modern design principles.

### Brand Values
- **Sustainability** 🌱
- **Innovation** 💡
- **Reliability** 🛡️
- **Transparency** 🔍

---

## Design Principles

### 1. **Eco-Conscious Design**
- Use green color palette to reinforce environmental focus
- Incorporate nature-inspired elements
- Minimize visual clutter for sustainability messaging

### 2. **Professional Yet Approachable**
- Balance corporate professionalism with friendly accessibility
- Use rounded corners and soft shadows for warmth
- Maintain clear hierarchy for easy navigation

### 3. **Mobile-First Responsive**
- Design for mobile devices first
- Ensure all components scale gracefully
- Optimize touch targets for mobile interaction

### 4. **Performance Optimized**
- Minimize asset sizes
- Use system fonts when possible
- Implement lazy loading for images

---

## Color System

### Primary Colors

| Color Name | Light Mode | Dark Mode | Usage |
|------------|-----------|-----------|--------|
| **Primary Dark** | `#00383E` | `#00383E` | Headers, dark backgrounds |
| **Primary Green** | `#01DC82` | `#01DC82` | CTAs, success states, brand accent |
| **Secondary Green** | `#00C972` | `#00C972` | Hover states, secondary actions |
| **Accent Yellow** | `#FFD93D` | `#FFD93D` | Warnings, highlights, energy indicator |

### Semantic Colors

| Purpose | Color | Hex Code | Usage |
|---------|-------|----------|--------|
| **Success** | Green | `#01DC82` | Positive actions, confirmations |
| **Warning** | Yellow | `#FFD93D` | Cautions, pending states |
| **Error** | Red | `#FF5252` | Errors, destructive actions |
| **Info** | Blue | `#2196F3` | Information, tips |

### Neutral Colors

#### Light Mode
```css
--text-primary: #1A1A1A;
--text-secondary: #4A5568;
--text-tertiary: #718096;
--text-inverse: #FFFFFF;

--bg-primary: #FFFFFF;
--bg-secondary: #F8FAFB;
--bg-tertiary: #EDF2F7;
--bg-card: #FFFFFF;

--border-light: #E2E8F0;
--border-medium: #CBD5E0;
```

#### Dark Mode
```css
--text-primary: #F7FAFC;
--text-secondary: #CBD5E0;
--text-tertiary: #A0AEC0;
--text-inverse: #1A1A1A;

--bg-primary: #0D1117;
--bg-secondary: #161B22;
--bg-tertiary: #21262D;
--bg-card: #161B22;

--border-light: #30363D;
--border-medium: #484F58;
```

---

## Typography

### Font Family
**Primary Font:** Inter
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Type Scale

| Level | Font Size | Line Height | Font Weight | Usage |
|-------|-----------|-------------|-------------|--------|
| **Display** | 64px | 72px | 900 (Black) | Hero headlines |
| **H1** | 48px | 56px | 700 (Bold) | Page titles |
| **H2** | 32px | 40px | 700 (Bold) | Section headers |
| **H3** | 24px | 32px | 600 (SemiBold) | Subsection headers |
| **Body Large** | 18px | 28px | 400 (Regular) | Introductory text |
| **Body** | 16px | 24px | 400 (Regular) | Default body text |
| **Body Small** | 14px | 20px | 400 (Regular) | Secondary text |
| **Caption** | 12px | 16px | 500 (Medium) | Labels, metadata |

### Font Weights
- **300** - Light
- **400** - Regular
- **500** - Medium
- **600** - SemiBold
- **700** - Bold
- **800** - ExtraBold
- **900** - Black

---

## Spacing System

Based on 8-point grid system:

| Token | Value | Usage |
|-------|-------|--------|
| `space-xs` | 4px | Inline spacing |
| `space-sm` | 8px | Small gaps |
| `space-md` | 12px | Default spacing |
| `space-lg` | 16px | Section spacing |
| `space-xl` | 24px | Large gaps |
| `space-2xl` | 32px | Section breaks |
| `space-3xl` | 48px | Major sections |
| `space-4xl` | 64px | Page sections |

---

## Grid System

### Container Sizes
- **Max Width:** 1400px
- **Padding:** 16px (mobile), 24px (tablet), 32px (desktop)

### Breakpoints
```css
/* Mobile First */
--breakpoint-sm: 640px;   /* Small devices */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Desktops */
--breakpoint-xl: 1280px;  /* Large screens */
--breakpoint-2xl: 1536px; /* Extra large */
```

### Grid Columns
- **Mobile:** 4 columns
- **Tablet:** 8 columns
- **Desktop:** 12 columns
- **Gutter:** 24px

---

## Components

### Buttons

#### Primary Button
```css
.btn-primary {
    background: #01DC82;
    color: #00383E;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
}
```

#### Button Variants
| Variant | Background | Border | Text Color |
|---------|------------|--------|------------|
| **Primary** | `#01DC82` | None | `#00383E` |
| **Secondary** | `#00383E` | None | `#FFFFFF` |
| **Outline** | Transparent | `#01DC82` | `#01DC82` |
| **Ghost** | Transparent | None | Current |

#### Button Sizes
- **Small:** `padding: 8px 16px; font-size: 14px;`
- **Medium:** `padding: 12px 24px; font-size: 16px;`
- **Large:** `padding: 16px 32px; font-size: 18px;`

### Cards

```css
.card {
    background: var(--bg-card);
    border-radius: 12px;
    padding: 24px;
    border: 1px solid var(--border-light);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
}
```

### Forms

#### Input Fields
```css
.form-input {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid var(--border-light);
    border-radius: 8px;
    font-size: 16px;
}

.form-input:focus {
    border-color: #01DC82;
    box-shadow: 0 0 0 3px rgba(1, 220, 130, 0.1);
}
```

#### Form Elements
- Text inputs
- Textareas
- Select dropdowns
- Checkboxes
- Radio buttons
- Toggle switches
- File uploads

### Navigation

#### Primary Navigation
```css
.nav-item {
    padding: 16px 24px;
    font-weight: 500;
    color: var(--text-secondary);
    transition: all 0.3s ease;
}

.nav-item.active {
    color: #01DC82;
    border-bottom: 3px solid #01DC82;
}
```

### Badges

| Type | Background | Border | Text |
|------|------------|--------|------|
| **Success** | `rgba(1, 220, 130, 0.1)` | `#01DC82` | `#01DC82` |
| **Warning** | `rgba(255, 217, 61, 0.1)` | `#FFD93D` | `#FFD93D` |
| **Error** | `rgba(255, 82, 82, 0.1)` | `#FF5252` | `#FF5252` |
| **Info** | `rgba(33, 150, 243, 0.1)` | `#2196F3` | `#2196F3` |

### Alerts

```css
.alert {
    padding: 16px 24px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 16px;
}
```

### Modals

```css
.modal {
    background: var(--bg-card);
    border-radius: 16px;
    padding: 32px;
    max-width: 500px;
    box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
}
```

### Tables

```css
.table {
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
}

.table th {
    background: var(--bg-tertiary);
    padding: 16px;
    font-weight: 600;
}

.table td {
    padding: 16px;
    border-bottom: 1px solid var(--border-light);
}
```

---

## Icons

### Icon Library
Using **Lucide Icons** or **Heroicons**

### Icon Sizes
- **Small:** 16x16px
- **Medium:** 20x20px
- **Large:** 24x24px
- **XLarge:** 32x32px

### Common Icons
| Icon | Usage |
|------|-------|
| 🏗️ | Construction/Building |
| ⚡ | Energy/Power |
| 🌱 | Sustainability/Eco |
| ✓ | Success/Complete |
| ⚠️ | Warning/Caution |
| ✕ | Close/Error |
| → | Arrow/Next |
| 📊 | Analytics/Charts |
| 👤 | User/Profile |
| ⚙️ | Settings |

---

## Motion & Animation

### Timing Functions
```css
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
```

### Duration
- **Fast:** 150ms (hover effects)
- **Normal:** 300ms (most transitions)
- **Slow:** 500ms (page transitions)

### Common Animations
```css
/* Hover Lift */
.hover-lift {
    transition: transform 0.3s ease;
}
.hover-lift:hover {
    transform: translateY(-4px);
}

/* Fade In */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* Scale In */
@keyframes scaleIn {
    from { transform: scale(0.95); }
    to { transform: scale(1); }
}
```

---

## Accessibility

### WCAG 2.1 AA Compliance

#### Color Contrast
- **Normal Text:** Minimum 4.5:1 ratio
- **Large Text:** Minimum 3:1 ratio
- **Interactive Elements:** Minimum 3:1 ratio

#### Focus States
```css
:focus-visible {
    outline: 2px solid #01DC82;
    outline-offset: 2px;
}
```

#### Touch Targets
- Minimum size: 44x44px
- Spacing between targets: 8px minimum

#### Semantic HTML
- Use proper heading hierarchy
- Include ARIA labels where needed
- Ensure keyboard navigation

---

## Dark Mode Implementation

### CSS Variables Strategy
```css
/* Root variables for light mode */
:root {
    --primary: #01DC82;
    --background: #FFFFFF;
    --text: #1A1A1A;
}

/* Dark mode override */
[data-theme="dark"] {
    --background: #0D1117;
    --text: #F7FAFC;
}
```

### JavaScript Toggle
```javascript
function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}
```

### System Preference Detection
```javascript
// Detect system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Set initial theme
document.body.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
```

---

## Shadow System

### Light Mode Shadows
```css
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);
```

### Dark Mode Shadows
```css
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.3);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.4);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.5);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.6);
```

---

## Component States

### Interactive States
| State | Description | Visual Change |
|-------|-------------|---------------|
| **Default** | Normal state | Base styling |
| **Hover** | Mouse over | Slight lift, color change |
| **Active** | Being clicked | Pressed appearance |
| **Focus** | Keyboard focus | Outline ring |
| **Disabled** | Not interactive | 50% opacity |
| **Loading** | Processing | Spinner or skeleton |

---

## Best Practices

### Do's ✅
- Use consistent spacing from the spacing system
- Maintain color contrast ratios for accessibility
- Follow the established type hierarchy
- Test components in both light and dark modes
- Use semantic HTML elements
- Provide keyboard navigation support

### Don'ts ❌
- Don't create custom colors outside the palette
- Don't use inline styles
- Don't skip heading levels
- Don't use px for font sizes (use rem)
- Don't forget focus states
- Don't ignore touch target sizes on mobile

---

## Implementation Examples

### HTML Structure
```html
<!-- Card Component -->
<div class="card">
    <div class="card-header">
        <h3 class="card-title">Renewable Energy</h3>
        <p class="card-subtitle">Solar Solutions</p>
    </div>
    <div class="card-body">
        <p>Content goes here...</p>
    </div>
    <div class="card-footer">
        <button class="btn btn-primary">Learn More</button>
    </div>
</div>
```

### React Component
```jsx
const Button = ({ variant = 'primary', size = 'medium', children, ...props }) => {
    const className = `btn btn-${variant} btn-${size}`;
    return (
        <button className={className} {...props}>
            {children}
        </button>
    );
};
```

### CSS Module
```css
.button {
    padding: var(--space-md) var(--space-xl);
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.3s var(--ease-out);
}

.button:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2025-01 | Initial design system release |
| 1.0.1 | 2025-01 | Added dark mode support |
| 1.0.2 | 2025-01 | Enhanced accessibility features |

---

## Resources

### Design Tools
- **Figma:** [Constructopia Design File](#)
- **Sketch:** [Component Library](#)
- **Adobe XD:** [Prototype](#)

### Development
- **GitHub:** [Design System Repository](#)
- **NPM Package:** `@constructopia/design-system`
- **Storybook:** [Component Documentation](#)

### Icons & Assets
- **Icon Set:** [Constructopia Icons](#)
- **Illustrations:** [Brand Illustrations](#)
- **Logo Files:** [Brand Assets](#)

---

## Contact & Support

For questions or suggestions regarding the design system:
- **Email:** design@constructopia.com
- **Slack:** #design-system
- **GitHub Issues:** [Report Issue](#)

---

*© 2025 Constructopia. Building a Sustainable Future.* 🌱
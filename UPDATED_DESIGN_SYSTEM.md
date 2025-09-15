# Capimax Group - Updated Design System v2.0
## Enhanced UI/UX Framework for Dark/Light Mode Excellence

*Last Updated: December 2024*
*Version: 2.0 - Enhanced Edition*

---

## 🎨 Enhanced Color System

### Primary Colors (Eco-Conscious Green Palette)
```css
--color-primary: #01DC82          /* Vibrant eco-green */
--color-primary-foreground: #000000
--color-success: #10B981          /* Forest green */
--color-success-foreground: #ffffff
```

### Dark/Light Mode Adaptive Colors
```css
/* Light Mode */
--color-background: oklch(0.98 0 0)
--color-foreground: oklch(0.15 0 0)
--color-card: oklch(0.99 0 0)
--color-muted: oklch(0.94 0 0)
--color-muted-foreground: oklch(0.45 0 0)

/* Dark Mode */
--color-background: oklch(0.04 0 0)
--color-foreground: oklch(0.95 0 0)
--color-card: oklch(0.07 0 0)
--color-muted: oklch(0.12 0 0)
--color-muted-foreground: oklch(0.65 0 0)
```

### Gradient Combinations
```css
/* Primary Gradients */
.bg-gradient-primary: from-primary via-foreground to-success
.bg-gradient-section: from-muted/10 via-background to-card/5
.bg-gradient-hero: from-primary/5 via-background to-success/5

/* Dark Mode Variants */
.dark\:from-primary/15 .dark\:to-success/15
.dark\:bg-card/20 .dark\:hover\:bg-card/40
```

---

## 🏗️ Enhanced Layout Components

### 1. Section Wrapper Pattern
```jsx
<Section 
  spacing="xl" 
  className="relative bg-gradient-to-br from-muted/20 via-background to-card/10 dark:from-muted/5 dark:via-muted/10 dark:to-card/20"
>
  {/* Background Elements */}
  <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
  <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 dark:bg-primary/15 rounded-full blur-3xl" />
  
  <Container size="xl" className="relative z-10">
    {/* Content */}
  </Container>
</Section>
```

### 2. Card Enhancement Pattern
```jsx
<Card className="relative border-0 bg-card/50 dark:bg-card/20 backdrop-blur-sm hover:bg-card/80 dark:hover:bg-card/40 hover:shadow-2xl dark:hover:shadow-primary/20 transition-all duration-500 group h-full overflow-hidden">
  {/* Animated Border */}
  <div className="absolute inset-0 bg-gradient-to-r from-primary via-success to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    <div className="absolute inset-[1px] bg-card dark:bg-card/20 rounded-[calc(var(--radius)-1px)]" />
  </div>
  
  {/* Progress Indicator */}
  <motion.div 
    className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-success transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" 
  />
  
  <div className="relative p-6">
    {/* Content */}
  </div>
</Card>
```

---

## 🎭 Animation System

### Core Animation Variants
```javascript
// Container Stagger Animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
}

// Item Animation
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

// Enhanced Card Hover
const cardHoverVariants = {
  hover: { 
    y: -8,
    transition: { duration: 0.3 }
  }
}
```

### Progress Bar Animation
```jsx
<motion.div 
  className="h-1 bg-muted rounded-full overflow-hidden"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: index * 0.2 }}
>
  <motion.div 
    className="h-full bg-gradient-to-r from-primary to-success rounded-full"
    initial={{ width: 0 }}
    whileInView={{ width: '100%' }}
    transition={{ duration: 1, delay: index * 0.2 + 0.5, ease: "easeOut" }}
  />
</motion.div>
```

---

## 🎯 Component Templates

### 1. Enhanced Performance Metrics Section
```jsx
<Section spacing="xl" className="relative bg-gradient-to-br from-muted/20 via-background to-muted/10 dark:from-muted/10 dark:to-background">
  <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
  <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl" />
  
  <Container size="xl" className="relative z-10">
    <motion.div variants={containerVariants}>
      {/* Header with Badge */}
      <VStack gap="md" align="center" className="text-center">
        <motion.div variants={itemVariants}>
          <Badge className="mb-4 bg-primary/10 dark:bg-primary/20 text-primary border-primary/20 dark:border-primary/40">
            Performance Metrics
          </Badge>
        </motion.div>
        <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-foreground to-success bg-clip-text text-transparent">
          Section Title
        </motion.h2>
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
          Enhanced description text
        </motion.p>
      </VStack>

      {/* Metrics Grid */}
      <Grid cols={3} gap="xl">
        {metrics.map((metric, index) => (
          <motion.div key={index} variants={itemVariants} whileHover={{ y: -8 }} className="group">
            <Card className="relative text-center border-0 bg-card/50 dark:bg-card/20 backdrop-blur-sm hover:bg-card/80 dark:hover:bg-card/40 hover:shadow-2xl dark:hover:shadow-primary/10 transition-all duration-500 overflow-hidden group h-full">
              {/* Enhanced content */}
            </Card>
          </motion.div>
        ))}
      </Grid>
    </motion.div>
  </Container>
</Section>
```

### 2. Enhanced Feature Cards
```jsx
<Card className="relative text-center border-0 bg-card/40 dark:bg-card/10 backdrop-blur-sm hover:bg-card/80 dark:hover:bg-card/30 hover:shadow-2xl dark:hover:shadow-primary/20 transition-all duration-500 group h-full overflow-hidden">
  {/* Animated border gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-primary via-success to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    <div className="absolute inset-[1px] bg-card dark:bg-card/10 rounded-[calc(var(--radius)-1px)]" />
  </div>
  
  <div className="relative">
    <CardHeader className="pb-4 pt-8">
      <motion.div 
        className="flex justify-center mb-6"
        whileHover={{ scale: 1.15, rotate: 10 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative">
          <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/10 via-background to-success/10 dark:from-primary/20 dark:via-card dark:to-success/20 group-hover:from-primary/20 group-hover:via-primary/5 group-hover:to-success/20 dark:group-hover:from-primary/30 dark:group-hover:to-success/30 transition-all duration-500">
            <Icon className="h-10 w-10 text-primary group-hover:scale-110 transition-all duration-300" />
          </div>
          {/* Glowing effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-success/20 blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
      
      <CardTitle className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
        Feature Title
      </CardTitle>
    </CardHeader>
    
    <CardContent className="pb-8">
      <CardDescription className="text-muted-foreground group-hover:text-foreground leading-relaxed transition-colors duration-300">
        Feature description
      </CardDescription>
      
      {/* Progress indicator */}
      <motion.div 
        className="mt-4 h-1 bg-muted rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.2 }}
      >
        <motion.div 
          className="h-full bg-gradient-to-r from-primary to-success rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 1, delay: index * 0.2 + 0.5, ease: "easeOut" }}
        />
      </motion.div>
    </CardContent>
  </div>
</Card>
```

---

## 📱 Enhanced Button Patterns

### Primary Action Buttons
```jsx
<Button 
  size="xl" 
  className="group bg-gradient-to-r from-primary to-success hover:from-primary/90 hover:to-success/90 text-white shadow-xl hover:shadow-2xl dark:hover:shadow-primary/20 px-8 py-4 rounded-xl transition-all duration-500"
>
  Action Text
  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
</Button>
```

### Outline Buttons
```jsx
<Button 
  size="xl" 
  variant="outline"
  className="group border-2 border-primary/30 dark:border-primary/50 hover:bg-gradient-to-r hover:from-primary hover:to-success hover:border-transparent hover:text-white hover:shadow-xl dark:hover:shadow-primary/20 px-8 py-4 rounded-xl transition-all duration-500"
>
  Secondary Action
</Button>
```

---

## 🎪 Badge System

### Enhanced Badge Variants
```jsx
{/* Section Headers */}
<Badge className="mb-4 bg-gradient-to-r from-primary/10 to-success/10 dark:from-primary/20 dark:to-success/20 text-primary border-primary/20 dark:border-primary/40">
  Section Label
</Badge>

{/* Status Indicators */}
<Badge className="bg-success/10 text-success dark:bg-success/20 border-success/20 dark:border-success/40">
  <TrendingUp className="w-3 h-3 mr-1" />
  +28%
</Badge>

{/* Category Badges */}
<Badge className={`${
  category === 'Featured' ? 'bg-gradient-to-r from-primary to-success text-white' : 
  category === 'Premium' ? 'bg-gradient-to-r from-warning to-orange-500 text-white' : 
  'bg-muted/50 dark:bg-muted/30'
}`}>
  {category}
</Badge>
```

---

## 🌊 Background Patterns & Effects

### Grid Pattern Overlay
```css
.bg-grid-pattern {
  background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,.15) 1px, transparent 0);
  background-size: 20px 20px;
}
```

### Floating Elements
```jsx
{/* Background floating shapes */}
<div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 dark:bg-primary/15 rounded-full blur-3xl" />
<div className="absolute bottom-0 left-0 w-80 h-80 bg-success/5 dark:bg-success/15 rounded-full blur-3xl" />
<div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 dark:bg-primary/15 rounded-full blur-3xl" />
```

---

## 📊 Data Visualization Components

### Metrics Grid
```jsx
<div className="grid grid-cols-2 gap-4 w-full">
  <div className="text-center p-3 bg-muted/50 dark:bg-muted/20 rounded-lg group-hover:bg-primary/5 dark:group-hover:bg-primary/10 transition-all duration-300">
    <div className="text-lg font-bold text-primary">{value}</div>
    <div className="text-xs text-muted-foreground">{label}</div>
  </div>
</div>
```

### Progress Tracking
```jsx
<div className="w-full">
  <div className="flex justify-between text-sm mb-2">
    <span className="text-muted-foreground">Progress</span>
    <span className="font-medium text-primary">{percentage} completed</span>
  </div>
  <motion.div 
    className="h-2 bg-muted rounded-full overflow-hidden"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: index * 0.2 }}
  >
    <motion.div 
      className="h-full bg-gradient-to-r from-primary to-success rounded-full"
      initial={{ width: 0 }}
      whileInView={{ width: percentage }}
      transition={{ duration: 1, delay: index * 0.2 + 0.5, ease: "easeOut" }}
    />
  </motion.div>
</div>
```

---

## 🎨 Typography Enhancement

### Gradient Text Headers
```jsx
<h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-foreground to-success bg-clip-text text-transparent">
  Main Heading
</h1>

<h2 className="text-xl md:text-2xl text-muted-foreground max-w-4xl leading-relaxed">
  Subtitle with better readability
</h2>
```

### Interactive Text Elements
```jsx
<CardDescription className="text-muted-foreground group-hover:text-foreground leading-relaxed transition-colors duration-300">
  Description that changes on hover
</CardDescription>
```

---

## 🚀 Implementation Guidelines

### 1. Section Structure
```jsx
// Always use this pattern for consistent sections
<Section spacing="xl" className="relative bg-gradient-to-br from-muted/20 via-background to-card/10 dark:from-muted/5 dark:via-muted/10 dark:to-card/20">
  {/* Background elements */}
  <Container size="xl" className="relative z-10">
    <motion.div variants={containerVariants}>
      {/* Content with proper animation */}
    </motion.div>
  </Container>
</Section>
```

### 2. Card Enhancement
```jsx
// Apply this pattern to all cards for consistency
<Card className="relative border-0 bg-card/50 dark:bg-card/20 backdrop-blur-sm hover:bg-card/80 dark:hover:bg-card/40 hover:shadow-2xl dark:hover:shadow-primary/20 transition-all duration-500 group h-full overflow-hidden">
  {/* Animated border */}
  {/* Progress indicator */}
  {/* Content */}
</Card>
```

### 3. Animation Implementation
```jsx
// Use these motion props consistently
<motion.div
  variants={itemVariants}
  whileHover={{ y: -8 }}
  className="group"
>
```

### 4. Dark/Light Mode Classes
```jsx
// Always include dark mode variants
className="bg-card/50 dark:bg-card/20 text-foreground hover:text-primary transition-colors duration-300"
```

---

## 📋 Component Checklist

When creating new pages, ensure each component includes:

- ✅ **Proper section wrapper** with background elements
- ✅ **Enhanced card styling** with hover effects
- ✅ **Animation variants** (container + item)
- ✅ **Dark/light mode support** for all colors
- ✅ **Progress indicators** where applicable
- ✅ **Gradient text** for headings
- ✅ **Interactive elements** with smooth transitions
- ✅ **Responsive design** with proper breakpoints
- ✅ **Accessibility** considerations (contrast, focus states)

---

## 🔧 Utility Classes

### Custom Utilities Added
```css
/* Line clamping */
.line-clamp-2 { /* ... */ }
.line-clamp-3 { /* ... */ }

/* Backdrop effects */
.backdrop-blur-sm { backdrop-filter: blur(4px); }
.backdrop-blur-lg { backdrop-filter: blur(16px); }

/* Grid patterns */
.bg-grid-pattern { /* ... */ }
```

---

*This updated design system captures all enhancements made to the Capimax Group website, ensuring consistent, modern, and accessible design across all future pages and components.*
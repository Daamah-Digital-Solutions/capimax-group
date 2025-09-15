import * as React from "react"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import { Container } from "./Container"

const sectionVariants = cva(
  "relative",
  {
    variants: {
      spacing: {
        none: "py-0",
        sm: "py-8 sm:py-12",
        md: "py-12 sm:py-16 lg:py-20",
        lg: "py-16 sm:py-20 lg:py-24",
        xl: "py-20 sm:py-24 lg:py-32",
        "2xl": "py-24 sm:py-32 lg:py-40"
      },
      background: {
        default: "bg-background",
        muted: "bg-muted/30",
        card: "bg-card",
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        accent: "bg-accent text-accent-foreground",
        brand: "bg-brand-primary text-white",
        gradient: "bg-gradient-to-br from-primary to-brand-secondary text-white"
      },
      border: {
        none: "",
        top: "border-t border-gray-200",
        bottom: "border-b border-gray-200",
        both: "border-y border-gray-200"
      }
    },
    defaultVariants: {
      spacing: "md",
      background: "default",
      border: "none"
    }
  }
)

const Section = React.forwardRef(({ 
  className, 
  spacing,
  background,
  border,
  container = true,
  containerProps = {},
  children,
  ...props 
}, ref) => {
  const content = container ? (
    <Container {...containerProps}>
      {children}
    </Container>
  ) : children

  return (
    <section
      ref={ref}
      className={cn(sectionVariants({ spacing, background, border }), className)}
      {...props}
    >
      {content}
    </section>
  )
})

Section.displayName = "Section"

// Specialized section components
const HeroSection = React.forwardRef(({ 
  spacing = "xl",
  background = "gradient",
  className,
  ...props 
}, ref) => (
  <Section 
    ref={ref} 
    spacing={spacing} 
    background={background}
    className={cn("text-center", className)}
    {...props} 
  />
))
HeroSection.displayName = "HeroSection"

const FeatureSection = React.forwardRef(({ 
  spacing = "lg",
  background = "muted",
  border = "both",
  className,
  ...props 
}, ref) => (
  <Section 
    ref={ref} 
    spacing={spacing} 
    background={background}
    border={border}
    className={cn("", className)}
    {...props} 
  />
))
FeatureSection.displayName = "FeatureSection"

const ContentSection = React.forwardRef(({ 
  spacing = "md",
  background = "default",
  className,
  ...props 
}, ref) => (
  <Section 
    ref={ref} 
    spacing={spacing} 
    background={background}
    className={cn("prose prose-neutral dark:prose-invert max-w-none", className)}
    {...props} 
  />
))
ContentSection.displayName = "ContentSection"

export { 
  Section, 
  HeroSection, 
  FeatureSection, 
  ContentSection, 
  sectionVariants 
}
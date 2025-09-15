import * as React from "react"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/Container"
import { VStack } from "@/components/layout/Stack"
import { motion } from "framer-motion"

const heroVariants = cva(
  "relative overflow-hidden",
  {
    variants: {
      variant: {
        gradient: "bg-gradient-to-br from-brand-primary via-primary to-brand-secondary text-white",
        primary: "bg-primary text-primary-foreground",
        brand: "bg-brand-primary text-white",
        image: "bg-cover bg-center bg-no-repeat text-white",
        minimal: "bg-background text-foreground border-b border-gray-200"
      },
      size: {
        sm: "py-16 sm:py-20",
        md: "py-20 sm:py-24 lg:py-32", 
        lg: "py-24 sm:py-32 lg:py-40",
        xl: "py-32 sm:py-40 lg:py-48"
      },
      overlay: {
        none: "",
        light: "before:absolute before:inset-0 before:bg-black/20 before:z-0",
        medium: "before:absolute before:inset-0 before:bg-black/40 before:z-0",
        dark: "before:absolute before:inset-0 before:bg-black/60 before:z-0"
      }
    },
    defaultVariants: {
      variant: "gradient",
      size: "lg",
      overlay: "none"
    }
  }
)

const HeroSection = React.forwardRef(({ 
  className,
  variant = "gradient",
  size = "lg",
  overlay = "none",
  backgroundImage,
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  children,
  containerProps = {},
  ...props
}, ref) => {
  const containerStyle = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})` }
    : {}

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section
      ref={ref}
      className={cn(heroVariants({ variant, size, overlay }), className)}
      style={containerStyle}
      {...props}
    >
      <Container className="relative z-10" {...containerProps}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <VStack gap="lg" align="center" className="max-w-4xl mx-auto">
            {subtitle && (
              <motion.div variants={itemVariants}>
                <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 text-sm font-medium">
                  {subtitle}
                </span>
              </motion.div>
            )}
            
            {title && (
              <motion.h1 
                variants={itemVariants}
                className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance"
              >
                {title}
              </motion.h1>
            )}
            
            {description && (
              <motion.p 
                variants={itemVariants}
                className="text-lg sm:text-xl text-white/90 max-w-2xl text-pretty"
              >
                {description}
              </motion.p>
            )}
            
            {(primaryAction || secondaryAction) && (
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                {primaryAction && (
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="bg-white text-brand-primary hover:bg-white/90"
                    {...(({ children, ...rest }) => rest)(primaryAction)}
                  >
                    {primaryAction.children}
                  </Button>
                )}
                {secondaryAction && (
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10"
                    {...(({ children, ...rest }) => rest)(secondaryAction)}
                  >
                    {secondaryAction.children}
                  </Button>
                )}
              </motion.div>
            )}
            
            {children}
          </VStack>
        </motion.div>
      </Container>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />
    </section>
  )
})

HeroSection.displayName = "HeroSection"

export default HeroSection
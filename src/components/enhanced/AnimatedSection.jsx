import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { cn } from '@/lib/utils'

// Enhanced Section with animations
export function AnimatedSection({ 
  children, 
  className, 
  spacing = "xl", 
  background = "transparent",
  hasPattern = false,
  hasBlobs = false,
  ...props 
}) {
  const spacingClasses = {
    sm: "py-8",
    md: "py-12", 
    lg: "py-16",
    xl: "py-20",
    "2xl": "py-24"
  }

  const backgroundClasses = {
    transparent: "bg-transparent",
    muted: "bg-muted/30",
    card: "bg-card/50",
    primary: "bg-gradient-to-br from-primary via-primary to-success",
    brand: "bg-gradient-to-br from-primary via-primary to-success"
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className={cn(
        "relative overflow-hidden",
        spacingClasses[spacing],
        backgroundClasses[background],
        className
      )}
      {...props}
    >
      {hasPattern && (
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      )}
      
      {hasBlobs && (
        <>
          <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-success/10 rounded-full blur-3xl" />
        </>
      )}

      <div className="relative z-10">
        {children}
      </div>
    </motion.section>
  )
}

// Enhanced Container with animations
export function AnimatedContainer({ children, size = "xl", className, ...props }) {
  return (
    <Container size={size} className={className} {...props}>
      {children}
    </Container>
  )
}

// Item animation variant
export const itemVariants = {
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

// Staggered grid animation
export const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Enhanced card hover animation
export const cardHoverVariants = {
  rest: { 
    scale: 1,
    y: 0,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
  },
  hover: { 
    scale: 1.02,
    y: -8,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}
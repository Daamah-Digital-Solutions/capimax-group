import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/layout/Container'
import { VStack } from '@/components/layout/Stack'
import { cn } from '@/lib/utils'

export function PageHeader({ 
  title, 
  subtitle, 
  description, 
  badge,
  className,
  variant = "default",
  size = "lg"
}) {
  const variants = {
    default: "bg-gradient-to-br from-background via-muted/30 to-background",
    gradient: "bg-gradient-to-br from-primary/5 via-background to-success/5",
    dark: "bg-gradient-to-br from-card to-card/80"
  }

  const sizes = {
    sm: "py-12",
    md: "py-16", 
    lg: "py-20",
    xl: "py-24"
  }

  const titleSizes = {
    sm: "text-3xl md:text-4xl",
    md: "text-4xl md:text-5xl",
    lg: "text-4xl md:text-5xl lg:text-6xl",
    xl: "text-5xl md:text-6xl lg:text-7xl"
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

  return (
    <motion.section 
      className={cn(
        "relative overflow-hidden",
        sizes[size],
        variants[variant],
        className
      )}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-success/10 rounded-full blur-3xl" />
      
      <Container size="xl" className="relative z-10">
        <motion.div variants={containerVariants} className="text-center">
          <VStack gap="lg" align="center" className="max-w-4xl mx-auto">
            {badge && (
              <motion.div variants={itemVariants}>
                <Badge 
                  variant="secondary" 
                  className="px-4 py-2 text-sm bg-primary/10 border border-primary/20 text-primary font-medium"
                >
                  {badge}
                </Badge>
              </motion.div>
            )}
            
            <motion.h1 
              variants={itemVariants}
              className={cn(
                "font-bold bg-gradient-to-r from-primary via-foreground to-success bg-clip-text text-transparent leading-tight",
                titleSizes[size]
              )}
            >
              {title}
            </motion.h1>
            
            {subtitle && (
              <motion.p 
                variants={itemVariants}
                className="text-xl md:text-2xl text-muted-foreground font-medium"
              >
                {subtitle}
              </motion.p>
            )}
            
            {description && (
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl"
              >
                {description}
              </motion.p>
            )}
          </VStack>
        </motion.div>
      </Container>
    </motion.section>
  )
}

// Floating decorative elements
export function FloatingElements() {
  const floatingVariants = {
    initial: { y: 0, rotate: 0 },
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity
      }
    }
  }

  return (
    <>
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="absolute top-1/4 left-10 w-12 h-12 bg-primary/20 rounded-lg rotate-45 hidden lg:block"
      />
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        style={{ animationDelay: '2s' }}
        className="absolute top-1/3 right-10 w-8 h-8 bg-success/30 rounded-full hidden lg:block"
      />
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        style={{ animationDelay: '4s' }}
        className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-warning/40 rounded-full hidden lg:block"
      />
    </>
  )
}
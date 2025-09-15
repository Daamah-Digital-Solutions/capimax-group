import * as React from "react"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { VStack, HStack } from "@/components/layout/Stack"
import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, Users, DollarSign } from "lucide-react"

const companyCardVariants = cva(
  "group hover:shadow-lg transition-all duration-300",
  {
    variants: {
      variant: {
        default: "border hover:border-primary/20",
        featured: "border-primary/20 bg-gradient-to-br from-primary/5 to-brand-secondary/5",
        minimal: "border-0 shadow-none hover:shadow-md"
      },
      size: {
        sm: "p-4",
        md: "p-6",
        lg: "p-8"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
)

const CompanyCard = React.forwardRef(({
  className,
  variant = "default", 
  size = "md",
  company,
  showMetrics = true,
  showActions = true,
  onViewDetails,
  onInvest,
  ...props
}, ref) => {
  if (!company) return null

  const {
    id,
    name,
    description,
    sector,
    logo,
    status,
    metrics = {},
    tags = []
  } = company

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Card 
        ref={ref}
        className={cn(companyCardVariants({ variant, size }), className)}
        {...props}
      >
        <CardHeader className="space-y-3">
          <HStack justify="between" align="start">
            <motion.div variants={itemVariants} className="flex-1">
              {logo && (
                <div className="w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-200">
                  <img 
                    src={logo} 
                    alt={`${name} logo`}
                    className="w-8 h-8 object-contain"
                  />
                </div>
              )}
              
              <VStack gap="xs">
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                  {name}
                </CardTitle>
                
                {sector && (
                  <Badge variant="secondary" className="w-fit text-xs">
                    {sector}
                  </Badge>
                )}
              </VStack>
            </motion.div>
            
            {status && (
              <motion.div variants={itemVariants}>
                <Badge 
                  variant={status === 'active' ? 'default' : 'outline'}
                  className={cn(
                    "capitalize",
                    status === 'active' && "bg-success text-success-foreground",
                    status === 'pending' && "bg-warning text-warning-foreground"
                  )}
                >
                  {status}
                </Badge>
              </motion.div>
            )}
          </HStack>
          
          {description && (
            <motion.div variants={itemVariants}>
              <CardDescription className="text-muted-foreground line-clamp-2">
                {description}
              </CardDescription>
            </motion.div>
          )}
        </CardHeader>

        <CardContent className="space-y-4">
          {showMetrics && Object.keys(metrics).length > 0 && (
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-3 gap-4 p-4 bg-muted/30 rounded-lg">
                {metrics.revenue && (
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <DollarSign className="w-4 h-4 text-success mr-1" />
                    </div>
                    <div className="text-sm font-semibold">{metrics.revenue}</div>
                    <div className="text-xs text-muted-foreground">Revenue</div>
                  </div>
                )}
                
                {metrics.growth && (
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <TrendingUp className="w-4 h-4 text-info mr-1" />
                    </div>
                    <div className="text-sm font-semibold">{metrics.growth}</div>
                    <div className="text-xs text-muted-foreground">Growth</div>
                  </div>
                )}
                
                {metrics.employees && (
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="w-4 h-4 text-primary mr-1" />
                    </div>
                    <div className="text-sm font-semibold">{metrics.employees}</div>
                    <div className="text-xs text-muted-foreground">Employees</div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
          
          {tags.length > 0 && (
            <motion.div variants={itemVariants}>
              <HStack gap="xs" wrap="wrap">
                {tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </HStack>
            </motion.div>
          )}
          
          {showActions && (
            <motion.div variants={itemVariants}>
              <HStack gap="sm" className="pt-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => onViewDetails?.(company)}
                  className="flex-1 group/btn"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                </Button>
                
                {onInvest && (
                  <Button 
                    size="sm"
                    onClick={() => onInvest(company)}
                    className="flex-1"
                  >
                    Learn More
                  </Button>
                )}
              </HStack>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
})

CompanyCard.displayName = "CompanyCard"

export default CompanyCard
import * as React from "react"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { VStack, HStack } from "@/components/layout/Stack"
import { motion } from "framer-motion"
import { 
  TrendingUp, 
  TrendingDown,
  DollarSign, 
  Calendar,
  Target,
  Award,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Clock
} from "lucide-react"

const investmentHighlightVariants = cva(
  "group overflow-hidden transition-all duration-300",
  {
    variants: {
      variant: {
        default: "border hover:border-primary/20 hover:shadow-lg",
        featured: "border-primary/20 bg-gradient-to-br from-primary/5 to-brand-secondary/5 shadow-md",
        premium: "border-2 border-brand-primary/20 bg-gradient-to-br from-brand-primary/5 via-primary/5 to-brand-secondary/5 shadow-lg",
        compact: "border-0 shadow-none hover:shadow-md"
      },
      size: {
        sm: "p-4",
        md: "p-6",
        lg: "p-8"
      },
      layout: {
        vertical: "flex-col",
        horizontal: "flex-row items-center"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      layout: "vertical"
    }
  }
)

const InvestmentHighlight = React.forwardRef(({
  className,
  variant = "default",
  size = "md",
  layout = "vertical",
  investment,
  showBadges = true,
  showMetrics = true,
  showActions = true,
  onLearnMore,
  onInvest,
  ...props
}, ref) => {
  if (!investment) return null

  const {
    id,
    title,
    company,
    description,
    amount,
    minInvestment,
    expectedReturn,
    duration,
    riskLevel = 'medium',
    status = 'open',
    deadline,
    raised = '0%',
    featured = false,
    premium = false,
    highlights = [],
    badges = []
  } = investment

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'low': return 'bg-success/10 text-success border-success/20'
      case 'high': return 'bg-destructive/10 text-destructive border-destructive/20'
      default: return 'bg-warning/10 text-warning border-warning/20'
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'open': return 'bg-success text-success-foreground'
      case 'closing-soon': return 'bg-warning text-warning-foreground'
      case 'closed': return 'bg-muted text-muted-foreground'
      default: return 'bg-primary text-primary-foreground'
    }
  }

  const cardVariants = {
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
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
        className={cn(
          investmentHighlightVariants({ variant: premium ? 'premium' : featured ? 'featured' : variant, size, layout }),
          className
        )}
        {...props}
      >
        <CardHeader className="space-y-4">
          <motion.div variants={itemVariants}>
            <HStack justify="between" align="start" className="mb-3">
              <div className="flex-1">
                <HStack gap="xs" align="center" className="mb-2">
                  {premium && <Star className="w-4 h-4 text-brand-primary fill-current" />}
                  {featured && !premium && <Award className="w-4 h-4 text-primary" />}
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                    {title}
                  </CardTitle>
                </HStack>
                
                {company && (
                  <p className="text-sm text-muted-foreground font-medium">{company}</p>
                )}
              </div>

              <Badge 
                className={cn("capitalize text-xs", getStatusColor(status))}
              >
                {status.replace('-', ' ')}
              </Badge>
            </HStack>
          </motion.div>

          {description && (
            <motion.div variants={itemVariants}>
              <CardDescription className="text-sm leading-relaxed line-clamp-3">
                {description}
              </CardDescription>
            </motion.div>
          )}

          {showBadges && (badges.length > 0 || riskLevel) && (
            <motion.div variants={itemVariants}>
              <HStack gap="xs" wrap="wrap">
                <Badge variant="outline" className={cn("text-xs border", getRiskColor(riskLevel))}>
                  <Shield className="w-3 h-3 mr-1" />
                  {riskLevel} risk
                </Badge>
                {badges.map((badge, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {badge}
                  </Badge>
                ))}
              </HStack>
            </motion.div>
          )}
        </CardHeader>

        <CardContent className="space-y-4">
          {showMetrics && (
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-muted/30 rounded-lg">
                {amount && (
                  <div className="text-center">
                    <DollarSign className="w-4 h-4 mx-auto mb-1 text-primary" />
                    <div className="text-sm font-semibold">{amount}</div>
                    <div className="text-xs text-muted-foreground">Target</div>
                  </div>
                )}
                
                {minInvestment && (
                  <div className="text-center">
                    <Target className="w-4 h-4 mx-auto mb-1 text-muted-foreground" />
                    <div className="text-sm font-semibold">{minInvestment}</div>
                    <div className="text-xs text-muted-foreground">Min. Investment</div>
                  </div>
                )}
                
                {expectedReturn && (
                  <div className="text-center">
                    <TrendingUp className="w-4 h-4 mx-auto mb-1 text-success" />
                    <div className="text-sm font-semibold">{expectedReturn}</div>
                    <div className="text-xs text-muted-foreground">Expected Return</div>
                  </div>
                )}
                
                {duration && (
                  <div className="text-center">
                    <Clock className="w-4 h-4 mx-auto mb-1 text-muted-foreground" />
                    <div className="text-sm font-semibold">{duration}</div>
                    <div className="text-xs text-muted-foreground">Duration</div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {raised && raised !== '0%' && (
            <motion.div variants={itemVariants}>
              <div className="space-y-2">
                <HStack justify="between" align="center">
                  <span className="text-sm text-muted-foreground">Progress</span>
                  <span className="text-sm font-semibold">{raised}</span>
                </HStack>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-brand-secondary h-2 rounded-full transition-all duration-500"
                    style={{ width: raised }}
                  />
                </div>
              </div>
            </motion.div>
          )}

          {deadline && status === 'open' && (
            <motion.div variants={itemVariants}>
              <HStack gap="sm" align="center" className="p-3 bg-warning/10 rounded-lg">
                <Calendar className="w-4 h-4 text-warning" />
                <span className="text-sm text-warning font-medium">
                  Closing: {deadline}
                </span>
              </HStack>
            </motion.div>
          )}

          {highlights.length > 0 && (
            <motion.div variants={itemVariants}>
              <VStack gap="xs">
                <h4 className="text-sm font-semibold text-muted-foreground">Key Highlights:</h4>
                <ul className="space-y-1">
                  {highlights.slice(0, 3).map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Zap className="w-3 h-3 mt-0.5 text-primary flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </VStack>
            </motion.div>
          )}

          {showActions && status === 'open' && (
            <motion.div variants={itemVariants}>
              <HStack gap="sm" className="pt-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => onLearnMore?.(investment)}
                  className="flex-1"
                >
                  Learn More
                </Button>
                
                {onInvest && (
                  <Button 
                    size="sm"
                    onClick={() => onInvest(investment)}
                    className="flex-1 group/btn"
                    variant={premium ? "brand" : "default"}
                  >
                    Invest Now
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                  </Button>
                )}
              </HStack>
            </motion.div>
          )}

          {status === 'closed' && (
            <motion.div variants={itemVariants}>
              <div className="text-center py-4">
                <p className="text-sm text-muted-foreground">This investment opportunity has closed.</p>
              </div>
            </motion.div>
          )}
        </CardContent>

        {(premium || featured) && (
          <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-brand-primary">
            <Star className="absolute -top-6 -right-1 w-3 h-3 text-white fill-current" />
          </div>
        )}
      </Card>
    </motion.div>
  )
})

InvestmentHighlight.displayName = "InvestmentHighlight"

export default InvestmentHighlight
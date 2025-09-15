import * as React from "react"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { VStack, HStack } from "@/components/layout/Stack"
import { Grid } from "@/components/layout/Grid"
import { motion } from "framer-motion"
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Building, 
  Users, 
  ArrowRight,
  PieChart,
  BarChart3,
  Activity
} from "lucide-react"

const sectorOverviewVariants = cva(
  "space-y-6",
  {
    variants: {
      layout: {
        cards: "grid gap-6",
        list: "space-y-4",
        compact: "space-y-3"
      },
      columns: {
        1: "grid-cols-1",
        2: "sm:grid-cols-2",
        3: "sm:grid-cols-2 lg:grid-cols-3",
        4: "sm:grid-cols-2 lg:grid-cols-4"
      }
    },
    defaultVariants: {
      layout: "cards",
      columns: 3
    }
  }
)

const SectorCard = React.forwardRef(({
  className,
  sector,
  showMetrics = true,
  showTrend = true,
  onViewSector,
  ...props
}, ref) => {
  if (!sector) return null

  const {
    id,
    name,
    description,
    icon: IconComponent = Building,
    companies = 0,
    totalValue,
    growth,
    trend = 'stable',
    color = 'primary'
  } = sector

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return TrendingUp
      case 'down': return TrendingDown
      default: return Activity
    }
  }

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'up': return 'text-success'
      case 'down': return 'text-destructive'
      default: return 'text-muted-foreground'
    }
  }

  const TrendIcon = getTrendIcon(trend)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card 
        ref={ref}
        className={cn(
          "group hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4",
          `border-l-${color}`,
          className
        )}
        onClick={() => onViewSector?.(sector)}
        {...props}
      >
        <CardHeader className="pb-3">
          <HStack justify="between" align="start">
            <VStack gap="xs" className="flex-1">
              <HStack gap="sm" align="center">
                <div className={cn(
                  "p-2 rounded-lg transition-colors duration-200",
                  `bg-${color}/10 text-${color} group-hover:bg-${color}/20`
                )}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200">
                  {name}
                </CardTitle>
              </HStack>
              
              {description && (
                <CardDescription className="text-sm line-clamp-2">
                  {description}
                </CardDescription>
              )}
            </VStack>

            {showTrend && growth && (
              <div className="text-right">
                <HStack gap="xs" align="center">
                  <TrendIcon className={cn("w-4 h-4", getTrendColor(trend))} />
                  <span className={cn("text-sm font-semibold", getTrendColor(trend))}>
                    {growth}
                  </span>
                </HStack>
              </div>
            )}
          </HStack>
        </CardHeader>

        <CardContent>
          {showMetrics && (
            <div className="grid grid-cols-2 gap-4 mb-4">
              {companies > 0 && (
                <div className="text-center p-3 bg-muted/30 rounded-lg">
                  <Building className="w-4 h-4 mx-auto mb-1 text-muted-foreground" />
                  <div className="text-sm font-semibold">{companies}</div>
                  <div className="text-xs text-muted-foreground">Companies</div>
                </div>
              )}
              
              {totalValue && (
                <div className="text-center p-3 bg-muted/30 rounded-lg">
                  <DollarSign className="w-4 h-4 mx-auto mb-1 text-muted-foreground" />
                  <div className="text-sm font-semibold">{totalValue}</div>
                  <div className="text-xs text-muted-foreground">Total Value</div>
                </div>
              )}
            </div>
          )}

          <Button 
            variant="outline" 
            size="sm"
            className="w-full group/btn"
            onClick={(e) => {
              e.stopPropagation()
              onViewSector?.(sector)
            }}
          >
            Explore Sector
            <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
})

SectorCard.displayName = "SectorCard"

const SectorOverview = React.forwardRef(({
  className,
  title = "Investment Sectors",
  description,
  sectors = [],
  layout = "cards",
  columns = 3,
  showHeader = true,
  showMetrics = true,
  showTrend = true,
  onViewSector,
  onViewAll,
  ...props
}, ref) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div 
      ref={ref}
      className={cn("space-y-6", className)}
      {...props}
    >
      {showHeader && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <HStack justify="between" align="center" className="mb-6">
            <VStack gap="xs">
              <h2 className="text-2xl font-bold text-balance">{title}</h2>
              {description && (
                <p className="text-muted-foreground text-pretty">{description}</p>
              )}
            </VStack>
            
            {onViewAll && sectors.length > 6 && (
              <Button 
                variant="outline"
                onClick={onViewAll}
                className="shrink-0"
              >
                View All Sectors
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            )}
          </HStack>
        </motion.div>
      )}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={cn(sectorOverviewVariants({ layout, columns }))}>
          {sectors.map((sector) => (
            <SectorCard
              key={sector.id}
              sector={sector}
              showMetrics={showMetrics}
              showTrend={showTrend}
              onViewSector={onViewSector}
            />
          ))}
        </div>
      </motion.div>

      {sectors.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <PieChart className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <CardTitle className="mb-2">No Sectors Available</CardTitle>
            <CardDescription>
              Investment sectors will be displayed here once they become available.
            </CardDescription>
          </CardContent>
        </Card>
      )}
    </div>
  )
})

SectorOverview.displayName = "SectorOverview"

export { SectorOverview, SectorCard }
export default SectorOverview
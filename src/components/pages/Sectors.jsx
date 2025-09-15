import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/layout/Container'
import { Grid } from '@/components/layout/Grid'
import { VStack, HStack } from '@/components/layout/Stack'
import { Section } from '@/components/layout/Section'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Building2, 
  Coins, 
  Smartphone, 
  Shield, 
  Globe, 
  ArrowRight,
  Users,
  Briefcase,
  PieChart,
  BarChart3,
  Target,
  Zap,
  Award
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { FloatingElements } from '@/components/enhanced/FloatingElements'

const Sectors = ({ language }) => {
  const translations = {
    en: {
      pageTitle: 'Our Sectors',
      pageSubtitle: 'Diversified investment opportunities across multiple industries and markets.',
      learnMore: 'Learn More',
      viewCompanies: 'View Companies',
      keyFeatures: 'Key Features',
      marketSize: 'Market Size',
      growth: 'Growth Potential',
      companies: 'Our Companies'
    },
    ar: {
      pageTitle: 'قطاعاتنا',
      pageSubtitle: 'فرص استثمارية متنوعة عبر صناعات وأسواق متعددة.',
      learnMore: 'تعلم المزيد',
      viewCompanies: 'عرض الشركات',
      keyFeatures: 'الميزات الرئيسية',
      marketSize: 'حجم السوق',
      growth: 'إمكانات النمو',
      companies: 'شركاتنا'
    }
  }

  const t = translations[language]

  const sectors = [
    {
      id: 'investment-management',
      title: 'Investment Management',
      description: 'Comprehensive investment solutions including fractional ownership, fund management, and portfolio diversification.',
      icon: TrendingUp,
      color: 'bg-primary',
      marketSize: '$100+ Trillion',
      growth: '8-12% annually',
      features: ['Fractional Ownership', 'Portfolio Management', 'Risk Assessment', 'Global Markets'],
      companies: ['Capimax Investments UK', 'Capimax Investments USA', 'Capimax Investments UAE']
    },
    {
      id: 'real-estate',
      title: 'Real Estate Development',
      description: 'Innovative real estate projects including residential, commercial, and hospitality developments.',
      icon: Building2,
      color: 'bg-success',
      marketSize: '$4+ Trillion',
      growth: '6-10% annually',
      features: ['Residential Development', 'Commercial Properties', 'Hotel Projects', 'Sustainable Building'],
      companies: ['Capimax Development LLP', 'TDH Developments', 'EliteGate Properties']
    },
    {
      id: 'precious-metals',
      title: 'Precious Metals & Minerals',
      description: 'Investment in gold, silver, and precious metals through fractional ownership and trading.',
      icon: Coins,
      color: 'bg-warning',
      marketSize: '$500+ Billion',
      growth: '5-8% annually',
      features: ['Gold Investment', 'Silver Trading', 'Precious Metals Storage', 'Market Analysis'],
      companies: ['Capimax Precious Metals Limited']
    },
    {
      id: 'fintech-blockchain',
      title: 'Fintech & Blockchain',
      description: 'Cutting-edge financial technology solutions including blockchain, smart contracts, and digital payments.',
      icon: Smartphone,
      color: 'bg-brand-tertiary',
      marketSize: '$300+ Billion',
      growth: '15-25% annually',
      features: ['Blockchain Technology', 'Smart Contracts', 'Digital Payments', 'Asset Tokenization'],
      companies: ['Capimax Fintech Blockchain', 'Nova Digital Finance']
    },
    {
      id: 'digital-assets',
      title: 'Digital Assets & Crypto',
      description: 'Digital asset management, cryptocurrency trading, and virtual asset portfolio services.',
      icon: Coins,
      color: 'bg-info',
      marketSize: '$2+ Trillion',
      growth: '20-40% annually',
      features: ['Cryptocurrency Trading', 'Digital Wallets', 'Asset Management', 'Compliance'],
      companies: ['Capimax Virtual Assets', 'Nova Digital Finance']
    },
    {
      id: 'insurance',
      title: 'Insurance & Risk Management',
      description: 'Comprehensive insurance solutions including life, non-life, and investment-linked insurance.',
      icon: Shield,
      color: 'bg-red-500',
      marketSize: '$6+ Trillion',
      growth: '4-7% annually',
      features: ['Life Insurance', 'Investment Insurance', 'Risk Assessment', 'Reinsurance'],
      companies: ['HCC International', 'Assurax Insurance']
    },
    {
      id: 'financial-services',
      title: 'Financial Services',
      description: 'Banking, financial management, accounting, and auditing services for individuals and institutions.',
      icon: Briefcase,
      color: 'bg-indigo-500',
      marketSize: '$25+ Trillion',
      growth: '5-9% annually',
      features: ['Financial Management', 'Accounting Services', 'Audit & Compliance', 'Banking Solutions'],
      companies: ['Capimax Financial Management', 'CIM Financial Group']
    },
    {
      id: 'general-trading',
      title: 'General Trading',
      description: 'International trading operations including import, export, supply chain, and distribution services.',
      icon: Globe,
      color: 'bg-gray-600',
      marketSize: '$20+ Trillion',
      growth: '3-6% annually',
      features: ['Import/Export', 'Supply Chain', 'Distribution', 'Global Networks'],
      companies: ['Capimax General Trading USA']
    }
  ]

  // Enhanced animation variants
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
    <div className="min-h-screen overflow-hidden">
      {/* Enhanced Hero Section */}
      <Section spacing="xl" className="relative bg-gradient-to-br from-primary/10 via-background to-success/5 dark:from-primary/5 dark:via-background dark:to-success/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary/5 dark:bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-success/5 dark:bg-success/15 rounded-full blur-3xl" />
        
        <Container size="xl" className="relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center space-y-8"
          >
            <motion.div variants={itemVariants}>
              <Badge className="mb-6 bg-gradient-to-r from-primary/10 to-success/10 dark:from-primary/20 dark:to-success/20 text-primary border-primary/20 dark:border-primary/40">
                Our Investment Portfolio
              </Badge>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-foreground to-success bg-clip-text text-transparent leading-tight"
            >
              {t.pageTitle}
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            >
              {t.pageSubtitle}
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Enhanced Sectors Grid */}
      <Section spacing="xl" className="relative bg-gradient-to-br from-background via-muted/5 to-card/10 dark:from-background dark:via-muted/10 dark:to-card/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-success/5 dark:bg-success/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 dark:bg-primary/15 rounded-full blur-3xl" />
        
        <Container size="xl" className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <Grid cols={3} gap="xl">
              {sectors.map((sector, index) => (
                <motion.div 
                  key={sector.id} 
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Card className="relative border-0 bg-card/50 dark:bg-card/20 backdrop-blur-sm hover:bg-card/80 dark:hover:bg-card/40 hover:shadow-2xl dark:hover:shadow-primary/20 transition-all duration-500 group h-full overflow-hidden">
                    {/* Animated border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-success to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-[1px] bg-card dark:bg-card/20 rounded-[calc(var(--radius)-1px)]" />
                    </div>
                    
                    {/* Progress indicator */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-success transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    
                    <div className="relative">
                      <CardHeader className="pb-6">
                        <motion.div 
                          className="flex justify-center mb-6"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="relative">
                            <div className={`w-16 h-16 bg-gradient-to-br from-primary/10 to-success/10 dark:from-primary/20 dark:to-success/20 rounded-2xl flex items-center justify-center group-hover:from-primary/20 group-hover:to-success/20 dark:group-hover:from-primary/30 dark:group-hover:to-success/30 transition-all duration-500`}>
                              <sector.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
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
                        
                        <CardTitle className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                          {sector.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground group-hover:text-foreground leading-relaxed transition-colors duration-300">
                          {sector.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="space-y-6">
                        {/* Enhanced Market Info */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-4 bg-muted/50 dark:bg-muted/20 rounded-xl group-hover:bg-primary/5 dark:group-hover:bg-primary/10 transition-all duration-300">
                            <div className="text-sm font-medium text-muted-foreground mb-1">{t.marketSize}</div>
                            <div className="text-lg font-bold text-primary">{sector.marketSize}</div>
                          </div>
                          <div className="text-center p-4 bg-muted/50 dark:bg-muted/20 rounded-xl group-hover:bg-success/5 dark:group-hover:bg-success/10 transition-all duration-300">
                            <div className="text-sm font-medium text-muted-foreground mb-1">{t.growth}</div>
                            <div className="text-lg font-bold text-success flex items-center justify-center gap-1">
                              <TrendingUp className="w-4 h-4" />
                              {sector.growth}
                            </div>
                          </div>
                        </div>

                        {/* Enhanced Key Features */}
                        <div>
                          <div className="text-sm font-medium text-muted-foreground mb-3">{t.keyFeatures}</div>
                          <div className="flex flex-wrap gap-2">
                            {sector.features.map((feature, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs bg-muted/50 dark:bg-muted/30 hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors duration-300">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Enhanced Companies List */}
                        <div>
                          <div className="text-sm font-medium text-muted-foreground mb-3">{t.companies}</div>
                          <div className="space-y-2">
                            {sector.companies.slice(0, 2).map((company, idx) => (
                              <div key={idx} className="text-sm text-muted-foreground group-hover:text-foreground flex items-center space-x-2 p-2 bg-muted/30 dark:bg-muted/10 rounded-lg transition-colors duration-300">
                                <Building2 className="h-4 w-4 text-primary" />
                                <span>{company}</span>
                              </div>
                            ))}
                            {sector.companies.length > 2 && (
                              <div className="text-xs text-muted-foreground text-center p-2 bg-muted/20 dark:bg-muted/5 rounded-lg">
                                +{sector.companies.length - 2} more companies
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <motion.div 
                          className="mt-4 h-1 bg-muted rounded-full overflow-hidden"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: index * 0.2 }}
                        >
                          <motion.div 
                            className="h-full bg-gradient-to-r from-primary to-success rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: '85%' }}
                            transition={{ duration: 1, delay: index * 0.2 + 0.5, ease: "easeOut" }}
                          />
                        </motion.div>

                        {/* Enhanced Action Button */}
                        <div className="pt-4 border-t border-gray-200/50">
                          <Button variant="outline" size="sm" className="w-full hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-300 group/btn" asChild>
                            <Link to="/companies">
                              {t.viewCompanies}
                              <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Section>

      {/* Enhanced Stats Section */}
      <Section spacing="xl" className="relative bg-gradient-to-br from-muted/10 via-card/5 to-background dark:from-muted/5 dark:to-card/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-success/5 dark:bg-success/15 rounded-full blur-3xl" />
        
        <Container size="xl" className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-16"
          >
            <VStack gap="md" align="center" className="text-center">
              <motion.div variants={itemVariants}>
                <Badge className="mb-4 bg-gradient-to-r from-primary/10 to-success/10 dark:from-primary/20 dark:to-success/20 text-primary border-primary/20 dark:border-primary/40">
                  Portfolio Performance
                </Badge>
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-foreground to-success bg-clip-text text-transparent">
                Sector Performance
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Our diversified portfolio across high-growth sectors delivers consistent returns and sustainable growth opportunities.
              </motion.p>
            </VStack>

            <Grid cols={4} gap="lg">
              {[
                { number: '8', label: 'Active Sectors', icon: Target, color: 'text-primary' },
                { number: '$35T+', label: 'Combined Market Size', icon: BarChart3, color: 'text-success' },
                { number: '13', label: 'Portfolio Companies', icon: Building2, color: 'text-info' },
                { number: '15%', label: 'Average Growth', icon: TrendingUp, color: 'text-warning' }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Card className="relative text-center border-0 bg-card/50 dark:bg-card/20 backdrop-blur-sm hover:bg-card/80 dark:hover:bg-card/40 hover:shadow-2xl dark:hover:shadow-primary/10 transition-all duration-500 overflow-hidden group h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-success/5 dark:from-primary/10 dark:to-success/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <CardContent className="relative pt-8 pb-6">
                      <VStack gap="lg" align="center">
                        <motion.div 
                          className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-success/10 dark:from-primary/20 dark:to-success/20 group-hover:from-primary/20 group-hover:to-success/20 dark:group-hover:from-primary/30 dark:group-hover:to-success/30 transition-all duration-300"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <stat.icon className={`h-8 w-8 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                        </motion.div>
                        
                        <motion.div 
                          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent"
                          initial={{ scale: 0.5 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                          {stat.number}
                        </motion.div>
                        
                        <div className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          {stat.label}
                        </div>
                      </VStack>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Section>

      {/* Enhanced CTA Section */}
      <Section 
        spacing="xl" 
        className="relative bg-gradient-to-br from-primary via-primary to-success text-white"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.1]" />
        
        <Container size="xl" className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <VStack gap="xl" align="center" className="text-center">
              <motion.div variants={itemVariants}>
                <VStack gap="md" align="center">
                  <h2 className="text-3xl md:text-5xl font-bold text-white">
                    Ready to Diversify Your Portfolio?
                  </h2>
                  <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed">
                    Explore investment opportunities across our carefully selected high-growth sectors with professional management and proven returns.
                  </p>
                </VStack>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button 
                  size="xl" 
                  variant="secondary" 
                  className="group bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <Link to="/investors">
                    Start Investing
                    <TrendingUp className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button 
                  size="xl" 
                  variant="outline" 
                  className="group border-2 border-white/30 text-white hover:border-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl transition-all duration-300"
                  asChild
                >
                  <Link to="/companies">
                    View All Companies
                    <Building2 className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </VStack>
          </motion.div>
        </Container>

        <FloatingElements />
      </Section>
    </div>
  )
}

export default Sectors


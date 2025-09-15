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
  Shield, 
  Globe, 
  Users, 
  PieChart,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star,
  DollarSign,
  Target,
  Award
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { FloatingElements } from '@/components/enhanced/FloatingElements'

const Investors = ({ language }) => {
  const translations = {
    en: {
      pageTitle: 'For Investors',
      pageSubtitle: 'Discover investment opportunities across our diversified portfolio of companies and sectors.',
      whyInvest: 'Why Invest with Capimax?',
      investmentOptions: 'Investment Options',
      performance: 'Performance Highlights',
      getStarted: 'Get Started',
      learnMore: 'Learn More',
      startInvesting: 'Start Investing',
      contactAdvisor: 'Contact Advisor',
      fractionalOwnership: 'Fractional Ownership',
      fractionalDesc: 'Own fractions of high-value assets including real estate, precious metals, and digital assets.',
      realEstate: 'Real Estate Investment',
      realEstateDesc: 'Invest in residential, commercial, and hospitality development projects.',
      preciousMetals: 'Precious Metals',
      preciousMetalsDesc: 'Diversify with gold, silver, and other precious metals through our secure platform.',
      digitalAssets: 'Digital Assets',
      digitalAssetsDesc: 'Access cryptocurrency and digital asset investment opportunities.',
      diversification: 'Diversification',
      diversificationDesc: 'Spread risk across multiple sectors and asset classes.',
      transparency: 'Full Transparency',
      transparencyDesc: 'Real-time reporting and complete visibility into your investments.',
      security: 'Bank-Level Security',
      securityDesc: 'Comprehensive insurance and security measures protect your investments.',
      globalReach: 'Global Opportunities',
      globalReachDesc: 'Access international markets and investment opportunities.',
      minInvestment: 'Minimum Investment',
      expectedReturn: 'Expected Return',
      riskLevel: 'Risk Level',
      low: 'Low',
      medium: 'Medium',
      high: 'High',
      investors: 'Active Investors',
      aum: 'Assets Under Management',
      avgReturn: 'Average Annual Return',
      satisfaction: 'Investor Satisfaction',
      howItWorks: 'How It Works',
      step1: 'Create Account',
      step1Desc: 'Sign up and complete our simple verification process.',
      step2: 'Choose Investments',
      step2Desc: 'Browse and select from our curated investment opportunities.',
      step3: 'Invest & Monitor',
      step3Desc: 'Make your investment and track performance in real-time.',
      step4: 'Earn Returns',
      step4Desc: 'Receive regular returns and reinvest or withdraw as needed.'
    },
    ar: {
      pageTitle: 'للمستثمرين',
      pageSubtitle: 'اكتشف الفرص الاستثمارية عبر محفظتنا المتنوعة من الشركات والقطاعات.',
      whyInvest: 'لماذا تستثمر مع كابيماكس؟',
      investmentOptions: 'خيارات الاستثمار',
      performance: 'أبرز الأداء',
      getStarted: 'ابدأ',
      learnMore: 'تعلم المزيد',
      startInvesting: 'ابدأ الاستثمار',
      contactAdvisor: 'اتصل بمستشار',
      fractionalOwnership: 'الملكية الجزئية',
      fractionalDesc: 'امتلك أجزاء من الأصول عالية القيمة بما في ذلك العقارات والمعادن الثمينة والأصول الرقمية.',
      realEstate: 'الاستثمار العقاري',
      realEstateDesc: 'استثمر في مشاريع التطوير السكنية والتجارية والضيافة.',
      preciousMetals: 'المعادن الثمينة',
      preciousMetalsDesc: 'نوع مع الذهب والفضة والمعادن الثمينة الأخرى من خلال منصتنا الآمنة.',
      digitalAssets: 'الأصول الرقمية',
      digitalAssetsDesc: 'الوصول إلى فرص الاستثمار في العملات المشفرة والأصول الرقمية.',
      diversification: 'التنويع',
      diversificationDesc: 'انشر المخاطر عبر قطاعات وفئات أصول متعددة.',
      transparency: 'الشفافية الكاملة',
      transparencyDesc: 'تقارير في الوقت الفعلي ورؤية كاملة لاستثماراتك.',
      security: 'أمان على مستوى البنوك',
      securityDesc: 'تدابير التأمين والأمان الشاملة تحمي استثماراتك.',
      globalReach: 'الفرص العالمية',
      globalReachDesc: 'الوصول إلى الأسواق الدولية وفرص الاستثمار.',
      minInvestment: 'الحد الأدنى للاستثمار',
      expectedReturn: 'العائد المتوقع',
      riskLevel: 'مستوى المخاطر',
      low: 'منخفض',
      medium: 'متوسط',
      high: 'عالي',
      investors: 'مستثمر نشط',
      aum: 'الأصول تحت الإدارة',
      avgReturn: 'متوسط العائد السنوي',
      satisfaction: 'رضا المستثمرين',
      howItWorks: 'كيف يعمل',
      step1: 'إنشاء حساب',
      step1Desc: 'سجل وأكمل عملية التحقق البسيطة.',
      step2: 'اختر الاستثمارات',
      step2Desc: 'تصفح واختر من فرص الاستثمار المنسقة لدينا.',
      step3: 'استثمر وراقب',
      step3Desc: 'قم بالاستثمار وتتبع الأداء في الوقت الفعلي.',
      step4: 'احصل على العوائد',
      step4Desc: 'احصل على عوائد منتظمة وأعد الاستثمار أو اسحب حسب الحاجة.'
    }
  }

  const t = translations[language]

  const investmentOptions = [
    {
      id: 'fractional-ownership',
      title: t.fractionalOwnership,
      description: t.fractionalDesc,
      icon: PieChart,
      color: 'bg-primary',
      minInvestment: '$100',
      expectedReturn: '8-15%',
      riskLevel: t.medium,
      features: ['Real Estate Fractions', 'Precious Metals', 'Digital Assets', 'Global Markets']
    },
    {
      id: 'real-estate',
      title: t.realEstate,
      description: t.realEstateDesc,
      icon: TrendingUp,
      color: 'bg-success',
      minInvestment: '$500',
      expectedReturn: '10-18%',
      riskLevel: t.medium,
      features: ['Residential Projects', 'Commercial Properties', 'Hotel Development', 'REIT Options']
    },
    {
      id: 'precious-metals',
      title: t.preciousMetals,
      description: t.preciousMetalsDesc,
      icon: DollarSign,
      color: 'bg-warning',
      minInvestment: '$50',
      expectedReturn: '5-12%',
      riskLevel: t.low,
      features: ['Gold Investment', 'Silver Trading', 'Secure Storage', 'Market Analysis']
    },
    {
      id: 'digital-assets',
      title: t.digitalAssets,
      description: t.digitalAssetsDesc,
      icon: Target,
      color: 'bg-brand-tertiary',
      minInvestment: '$25',
      expectedReturn: '15-35%',
      riskLevel: t.high,
      features: ['Cryptocurrency', 'Digital Wallets', 'Blockchain Assets', 'DeFi Opportunities']
    }
  ]

  const whyInvestFeatures = [
    {
      icon: PieChart,
      title: t.diversification,
      description: t.diversificationDesc
    },
    {
      icon: CheckCircle,
      title: t.transparency,
      description: t.transparencyDesc
    },
    {
      icon: Shield,
      title: t.security,
      description: t.securityDesc
    },
    {
      icon: Globe,
      title: t.globalReach,
      description: t.globalReachDesc
    }
  ]

  const performanceStats = [
    {
      value: '10,000+',
      label: t.investors,
      icon: Users
    },
    {
      value: '$500M+',
      label: t.aum,
      icon: TrendingUp
    },
    {
      value: '12.5%',
      label: t.avgReturn,
      icon: BarChart3
    },
    {
      value: '98%',
      label: t.satisfaction,
      icon: Star
    }
  ]

  const howItWorksSteps = [
    {
      step: '01',
      title: t.step1,
      description: t.step1Desc,
      icon: Users
    },
    {
      step: '02',
      title: t.step2,
      description: t.step2Desc,
      icon: Target
    },
    {
      step: '03',
      title: t.step3,
      description: t.step3Desc,
      icon: TrendingUp
    },
    {
      step: '04',
      title: t.step4,
      description: t.step4Desc,
      icon: Award
    }
  ]

  const getRiskColor = (risk) => {
    switch (risk) {
      case t.low: return 'text-success bg-success/10'
      case t.medium: return 'text-warning bg-warning/10'
      case t.high: return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

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
                Investment Opportunities
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
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8"
            >
              {t.pageSubtitle}
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="xl" className="group bg-gradient-to-r from-primary to-success hover:from-primary/90 hover:to-success/90 text-white shadow-xl hover:shadow-2xl dark:hover:shadow-primary/20 px-8 py-4 rounded-xl transition-all duration-500">
                {t.startInvesting}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="xl" variant="outline" className="group border-2 border-primary/30 dark:border-primary/50 hover:bg-gradient-to-r hover:from-primary hover:to-success hover:border-transparent hover:text-white hover:shadow-xl dark:hover:shadow-primary/20 px-8 py-4 rounded-xl transition-all duration-500">
                {t.contactAdvisor}
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Enhanced Performance Stats */}
      <Section spacing="md" className="relative bg-gradient-to-br from-muted/10 via-card/5 to-background dark:from-muted/5 dark:to-card/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-success/5 dark:bg-success/15 rounded-full blur-3xl" />
        
        <Container size="xl" className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <Grid cols={4} gap="lg">
              {performanceStats.map((stat, index) => (
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
                          <stat.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                        </motion.div>
                        
                        <motion.div 
                          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent"
                          initial={{ scale: 0.5 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                          {stat.value}
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

      {/* Enhanced Investment Options */}
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
            <VStack gap="lg" align="center" className="text-center mb-16">
              <motion.div variants={itemVariants}>
                <Badge className="mb-4 bg-gradient-to-r from-primary/10 to-success/10 dark:from-primary/20 dark:to-success/20 text-primary border-primary/20 dark:border-primary/40">
                  Investment Portfolio
                </Badge>
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-foreground to-success bg-clip-text text-transparent">
                {t.investmentOptions}
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Choose from our diverse range of investment opportunities
              </motion.p>
            </VStack>
            
            <Grid cols={4} gap="lg">
              {investmentOptions.map((option, index) => (
                <motion.div 
                  key={option.id} 
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
                            <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-success/10 dark:from-primary/20 dark:to-success/20 rounded-2xl flex items-center justify-center group-hover:from-primary/20 group-hover:to-success/20 dark:group-hover:from-primary/30 dark:group-hover:to-success/30 transition-all duration-500">
                              <option.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
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
                          {option.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground group-hover:text-foreground leading-relaxed transition-colors duration-300">
                          {option.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="space-y-6">
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between p-3 bg-muted/50 dark:bg-muted/20 rounded-lg group-hover:bg-primary/5 dark:group-hover:bg-primary/10 transition-all duration-300">
                            <span className="text-muted-foreground">{t.minInvestment}:</span>
                            <span className="font-semibold text-primary">{option.minInvestment}</span>
                          </div>
                          <div className="flex justify-between p-3 bg-muted/50 dark:bg-muted/20 rounded-lg group-hover:bg-success/5 dark:group-hover:bg-success/10 transition-all duration-300">
                            <span className="text-muted-foreground">{t.expectedReturn}:</span>
                            <span className="font-semibold text-success">{option.expectedReturn}</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-muted/50 dark:bg-muted/20 rounded-lg transition-all duration-300">
                            <span className="text-muted-foreground">{t.riskLevel}:</span>
                            <Badge className={`text-xs ${getRiskColor(option.riskLevel)}`}>
                              {option.riskLevel}
                            </Badge>
                          </div>
                        </div>

                        <div>
                          <div className="text-sm font-medium text-muted-foreground mb-3">Features:</div>
                          <div className="flex flex-wrap gap-2">
                            {option.features.slice(0, 2).map((feature, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs bg-muted/50 dark:bg-muted/30 hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors duration-300">
                                {feature}
                              </Badge>
                            ))}
                            {option.features.length > 2 && (
                              <Badge variant="secondary" className="text-xs bg-muted/50 dark:bg-muted/30">
                                +{option.features.length - 2}
                              </Badge>
                            )}
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <motion.div 
                          className="mt-4 h-1 bg-muted rounded-full overflow-hidden"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <motion.div 
                            className="h-full bg-gradient-to-r from-primary to-success rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: '90%' }}
                            transition={{ duration: 1, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                          />
                        </motion.div>

                        <div className="pt-4 border-t border-gray-200/50">
                          <Button variant="outline" size="sm" className="w-full hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-300 group/btn">
                            {t.learnMore}
                            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
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

      {/* Enhanced Why Invest */}
      <Section spacing="xl" className="relative bg-gradient-to-br from-muted/10 via-card/5 to-background dark:from-muted/5 dark:to-card/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 dark:bg-primary/15 rounded-full blur-3xl" />
        
        <Container size="xl" className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <VStack gap="lg" align="center" className="text-center mb-16">
              <motion.div variants={itemVariants}>
                <Badge className="mb-4 bg-gradient-to-r from-primary/10 to-success/10 dark:from-primary/20 dark:to-success/20 text-primary border-primary/20 dark:border-primary/40">
                  Why Choose Us
                </Badge>
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-foreground to-success bg-clip-text text-transparent">
                {t.whyInvest}
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                The advantages of investing with Capimax Group
              </motion.p>
            </VStack>
            
            <Grid cols={4} gap="lg">
              {whyInvestFeatures.map((feature, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Card className="relative text-center border-0 bg-card/40 dark:bg-card/10 backdrop-blur-sm hover:bg-card/80 dark:hover:bg-card/30 hover:shadow-2xl dark:hover:shadow-primary/20 transition-all duration-500 group h-full overflow-hidden">
                    {/* Animated border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-success to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-[1px] bg-card dark:bg-card/10 rounded-[calc(var(--radius)-1px)]" />
                    </div>
                    
                    <div className="relative">
                      <CardHeader className="pb-6">
                        <motion.div 
                          className="flex justify-center mb-6"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="relative">
                            <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-success/10 dark:from-primary/20 dark:to-success/20 group-hover:from-primary/20 group-hover:to-success/20 dark:group-hover:from-primary/30 dark:group-hover:to-success/30 transition-all duration-500">
                              <feature.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
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
                        
                        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent>
                        <CardDescription className="text-base text-muted-foreground group-hover:text-foreground leading-relaxed transition-colors duration-300">
                          {feature.description}
                        </CardDescription>
                        
                        {/* Progress indicator */}
                        <motion.div 
                          className="mt-4 h-1 bg-muted rounded-full overflow-hidden"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <motion.div 
                            className="h-full bg-gradient-to-r from-primary to-success rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: '95%' }}
                            transition={{ duration: 1, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                          />
                        </motion.div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Section>

      {/* Enhanced How It Works */}
      <Section spacing="xl" className="relative bg-gradient-to-br from-background via-muted/5 to-card/10 dark:from-background dark:via-muted/10 dark:to-card/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-success/5 dark:bg-success/15 rounded-full blur-3xl" />
        
        <Container size="xl" className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <VStack gap="lg" align="center" className="text-center mb-16">
              <motion.div variants={itemVariants}>
                <Badge className="mb-4 bg-gradient-to-r from-primary/10 to-success/10 dark:from-primary/20 dark:to-success/20 text-primary border-primary/20 dark:border-primary/40">
                  Investment Process
                </Badge>
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-foreground to-success bg-clip-text text-transparent">
                {t.howItWorks}
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Simple steps to start your investment journey
              </motion.p>
            </VStack>
            
            <Grid cols={4} gap="lg">
              {howItWorksSteps.map((step, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group text-center"
                >
                  <Card className="relative border-0 bg-card/40 dark:bg-card/10 backdrop-blur-sm hover:bg-card/80 dark:hover:bg-card/30 hover:shadow-2xl dark:hover:shadow-primary/20 transition-all duration-500 group h-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-success/5 dark:from-primary/10 dark:to-success/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <CardContent className="relative pt-8 pb-8">
                      <VStack gap="lg" align="center">
                        <div className="relative mb-6">
                          <motion.div 
                            className="w-16 h-16 bg-gradient-to-br from-primary to-success rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                          >
                            <step.icon className="h-8 w-8 text-white" />
                          </motion.div>
                          <motion.div 
                            className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-success to-warning rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-125 transition-transform duration-300"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            {step.step}
                          </motion.div>
                          
                          {/* Connecting line for non-last items */}
                          {index < howItWorksSteps.length - 1 && (
                            <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-success/30 dark:from-primary/20 dark:to-success/20" />
                          )}
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                          {step.description}
                        </p>
                        
                        {/* Progress indicator */}
                        <motion.div 
                          className="mt-4 h-1 bg-muted rounded-full overflow-hidden w-full"
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
                    {t.getStarted}
                  </h2>
                  <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed">
                    Join thousands of investors who trust Capimax for their investment needs.
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
                >
                  {t.startInvesting}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="xl" 
                  variant="outline" 
                  className="group border-2 border-white/30 text-white hover:border-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl transition-all duration-300"
                  asChild
                >
                  <Link to="/contact">
                    {t.contactAdvisor}
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

export default Investors


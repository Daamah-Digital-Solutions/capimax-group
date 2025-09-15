import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/layout/Container'
import { Grid } from '@/components/layout/Grid'
import { VStack, HStack } from '@/components/layout/Stack'
import { Section } from '@/components/layout/Section'
import { motion } from 'framer-motion'
import { 
  Building2, 
  Shield, 
  TrendingUp, 
  Award, 
  ExternalLink,
  CheckCircle,
  Star,
  Users,
  Globe,
  Handshake,
  ArrowRight
} from 'lucide-react'
import { FloatingElements } from '@/components/enhanced/FloatingElements'

const Partners = ({ language }) => {
  const translations = {
    en: {
      pageTitle: 'Our Partners',
      pageSubtitle: 'Strategic partnerships that enhance our global investment ecosystem.',
      strategicPartners: 'Strategic Partners',
      awards: 'Awards & Certifications',
      partnershipTypes: 'Partnership Types',
      realEstate: 'Real Estate Development',
      insurance: 'Insurance & Risk Management',
      financial: 'Financial Services',
      technology: 'Technology & Innovation',
      learnMore: 'Learn More',
      visitWebsite: 'Visit Website',
      partnerSince: 'Partner Since',
      sector: 'Sector',
      services: 'Services',
      achievements: 'Key Achievements'
    },
    ar: {
      pageTitle: 'شركاؤنا',
      pageSubtitle: 'شراكات استراتيجية تعزز نظامنا البيئي الاستثماري العالمي.',
      strategicPartners: 'الشركاء الاستراتيجيون',
      awards: 'الجوائز والشهادات',
      partnershipTypes: 'أنواع الشراكات',
      realEstate: 'تطوير العقارات',
      insurance: 'التأمين وإدارة المخاطر',
      financial: 'الخدمات المالية',
      technology: 'التكنولوجيا والابتكار',
      learnMore: 'تعلم المزيد',
      visitWebsite: 'زيارة الموقع',
      partnerSince: 'شريك منذ',
      sector: 'القطاع',
      services: 'الخدمات',
      achievements: 'الإنجازات الرئيسية'
    }
  }

  const t = translations[language]

  const partners = [
    {
      id: 'tdh-developments',
      name: 'TDH Developments',
      description: 'Strategic partnership in real estate development for new projects related to the group.',
      sector: t.realEstate,
      partnerSince: '2024',
      icon: Building2,
      color: 'bg-slate-500',
      services: ['Real Estate Development', 'Project Management', 'Construction'],
      achievements: ['REIT Leadership Award', 'Sustainable Development Projects'],
      website: '#'
    },
    {
      id: 'elitegate-properties',
      name: 'EliteGate Properties',
      description: 'Marketing partnership in hotel properties and sustainable real estate development.',
      sector: t.realEstate,
      partnerSince: '2024',
      icon: Building2,
      color: 'bg-stone-500',
      services: ['Hotel Properties', 'Marketing', 'Sustainable Development'],
      achievements: ['Sustainable Real Estate Development Creativity Award', 'Global Investment Funds Leadership Award'],
      website: '#'
    },
    {
      id: 'profit-max-investment',
      name: 'Profit Max Investment',
      description: 'Administrative partnership in global investment management and fund operations.',
      sector: t.financial,
      partnerSince: '2024',
      icon: TrendingUp,
      color: 'bg-rose-500',
      services: ['Investment Management', 'Fund Administration', 'Global Markets'],
      achievements: ['Global Investment Funds Leadership Award', 'Outstanding Strategic Partnerships Award'],
      website: '#'
    },
    {
      id: 'cim-financial-group',
      name: 'CIM Financial Group',
      description: 'Financial and accounting services, auditing, and documentation for developmental projects.',
      sector: t.financial,
      partnerSince: '2024',
      icon: Building2,
      color: 'bg-indigo-500',
      services: ['Accounting Services', 'Auditing', 'Financial Documentation', 'Compliance'],
      achievements: [
        'Fractional Investment Excellence Award',
        'Certified Platform Security Seal',
        'Digital Wallet Security Compliance',
        'Digital Custody & Compliance Certification'
      ],
      website: '#'
    },
    {
      id: 'assurax-insurance',
      name: 'Assurax Insurance',
      description: 'Integrated insurance and risk assessment services within the investment ecosystem.',
      sector: t.insurance,
      partnerSince: '2024',
      icon: Shield,
      color: 'bg-violet-500',
      services: ['Investment Insurance', 'Risk Assessment', 'Platform Security', 'Compliance'],
      achievements: ['Certified Platform Security Seal', 'Digital Custody & Compliance Certification'],
      website: '#'
    },
    {
      id: 'nova-digital-finance',
      name: 'Nova Digital Finance',
      description: 'Technical partner for digital banking services and comprehensive financial solutions.',
      sector: t.technology,
      partnerSince: '2024',
      icon: TrendingUp,
      color: 'bg-teal-500',
      services: ['Digital Banking', 'Financial Technology', 'Digital Wallets', 'Blockchain Solutions'],
      achievements: [
        'Blockchain Finance Excellence Certificate',
        'Crypto-Friendly Investment Platform Award',
        'Nova Digital Wallet Integrity Seal'
      ],
      website: '#'
    },
    {
      id: 'hcc-insurance',
      name: 'HCC Insurance',
      description: 'Comprehensive investment insurance for assets and projects inside and outside the group.',
      sector: t.insurance,
      partnerSince: '2024',
      icon: Shield,
      color: 'bg-red-600',
      services: ['Investment Insurance', 'Asset Protection', 'Cybersecurity', 'Risk Management'],
      achievements: [
        'CapiMax Cyber Resilience',
        'Certified Platform Security Seal',
        'Nova Verified Cyber Defense',
        'Innovation in Investment-Linked Insurance'
      ],
      website: '#'
    }
  ]

  const partnershipTypes = [
    {
      type: t.realEstate,
      description: 'Partnerships in property development, construction, and real estate investment.',
      icon: Building2,
      color: 'bg-success',
      partners: ['TDH Developments', 'EliteGate Properties']
    },
    {
      type: t.insurance,
      description: 'Risk management, asset protection, and comprehensive insurance solutions.',
      icon: Shield,
      color: 'bg-red-500',
      partners: ['Assurax Insurance', 'HCC Insurance']
    },
    {
      type: t.financial,
      description: 'Financial services, accounting, auditing, and investment management.',
      icon: TrendingUp,
      color: 'bg-primary',
      partners: ['CIM Financial Group', 'Profit Max Investment']
    },
    {
      type: t.technology,
      description: 'Digital banking, fintech solutions, and blockchain technology.',
      icon: Users,
      color: 'bg-brand-tertiary',
      partners: ['Nova Digital Finance']
    }
  ]

  const allAwards = partners.flatMap(partner => 
    partner.achievements.map(achievement => ({
      award: achievement,
      partner: partner.name,
      sector: partner.sector
    }))
  )

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
                Strategic Partnerships
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

      {/* Enhanced Partnership Types */}
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
                  Partnership Categories
                </Badge>
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-foreground to-success bg-clip-text text-transparent">
                {t.partnershipTypes}
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Diverse partnerships across key sectors of our business
              </motion.p>
            </VStack>
            
            <Grid cols={4} gap="lg">
              {partnershipTypes.map((type, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Card className="relative text-center border-0 bg-card/50 dark:bg-card/20 backdrop-blur-sm hover:bg-card/80 dark:hover:bg-card/40 hover:shadow-2xl dark:hover:shadow-primary/20 transition-all duration-500 group h-full overflow-hidden">
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
                              <type.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
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
                          {type.type}
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <CardDescription className="text-muted-foreground group-hover:text-foreground leading-relaxed transition-colors duration-300">
                          {type.description}
                        </CardDescription>
                        <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          <div className="font-medium mb-2 text-primary">{type.partners.length} Active Partners</div>
                          <div className="space-y-1">
                            {type.partners.map((partner, idx) => (
                              <div key={idx} className="text-xs p-2 bg-muted/30 dark:bg-muted/10 rounded-lg flex items-center space-x-2">
                                <Building2 className="h-3 w-3 text-primary" />
                                <span>{partner}</span>
                              </div>
                            ))}
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
                            whileInView={{ width: '90%' }}
                            transition={{ duration: 1, delay: index * 0.2 + 0.5, ease: "easeOut" }}
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

      {/* Enhanced Strategic Partners */}
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
                  Our Network
                </Badge>
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-foreground to-success bg-clip-text text-transparent">
                {t.strategicPartners}
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Meet our trusted partners who help us deliver exceptional value
              </motion.p>
            </VStack>
            
            <Grid cols={3} gap="xl">
              {partners.map((partner, index) => (
                <motion.div 
                  key={partner.id} 
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
                        <div className="flex items-start justify-between mb-6">
                          <motion.div 
                            className="flex justify-center"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="relative">
                              <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-success/10 dark:from-primary/20 dark:to-success/20 rounded-2xl flex items-center justify-center group-hover:from-primary/20 group-hover:to-success/20 dark:group-hover:from-primary/30 dark:group-hover:to-success/30 transition-all duration-500">
                                <partner.icon className="h-7 w-7 text-primary group-hover:scale-110 transition-transform duration-300" />
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
                          <Badge className="bg-muted/50 dark:bg-muted/30 hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors duration-300">
                            {partner.sector}
                          </Badge>
                        </div>
                        
                        <CardTitle className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                          {partner.name}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground group-hover:text-foreground leading-relaxed transition-colors duration-300">
                          {partner.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="space-y-6">
                        <div className="text-center p-3 bg-muted/50 dark:bg-muted/20 rounded-lg group-hover:bg-primary/5 dark:group-hover:bg-primary/10 transition-all duration-300">
                          <div className="text-sm font-medium text-muted-foreground mb-1">{t.partnerSince}</div>
                          <div className="text-lg font-bold text-primary">{partner.partnerSince}</div>
                        </div>

                        <div>
                          <div className="font-medium text-muted-foreground mb-3 text-sm">{t.services}</div>
                          <div className="flex flex-wrap gap-2">
                            {partner.services.slice(0, 3).map((service, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs bg-muted/50 dark:bg-muted/30 hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors duration-300">
                                {service}
                              </Badge>
                            ))}
                            {partner.services.length > 3 && (
                              <Badge variant="secondary" className="text-xs bg-muted/50 dark:bg-muted/30">
                                +{partner.services.length - 3}
                              </Badge>
                            )}
                          </div>
                        </div>

                        <div>
                          <div className="font-medium text-muted-foreground mb-3 text-sm">{t.achievements}</div>
                          <div className="space-y-2">
                            {partner.achievements.slice(0, 2).map((achievement, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-sm p-2 bg-muted/30 dark:bg-muted/10 rounded-lg transition-colors duration-300">
                                <Award className="h-4 w-4 text-warning flex-shrink-0" />
                                <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{achievement}</span>
                              </div>
                            ))}
                            {partner.achievements.length > 2 && (
                              <div className="text-xs text-muted-foreground text-center p-2 bg-muted/20 dark:bg-muted/5 rounded-lg">
                                +{partner.achievements.length - 2} more awards
                              </div>
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
                            whileInView={{ width: '95%' }}
                            transition={{ duration: 1, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                          />
                        </motion.div>

                        <div className="pt-4 border-t border-gray-200/50">
                          <Button variant="outline" size="sm" className="w-full hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-300 group/btn">
                            {t.learnMore}
                            <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
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

      {/* Enhanced Awards & Certifications */}
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
                <Badge className="mb-4 bg-gradient-to-r from-warning/10 to-success/10 dark:from-warning/20 dark:to-success/20 text-warning border-warning/20 dark:border-warning/40">
                  Recognition & Excellence
                </Badge>
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-warning via-primary to-success bg-clip-text text-transparent">
                {t.awards}
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Recognition and certifications from our trusted partners
              </motion.p>
            </VStack>
            
            <Grid cols={3} gap="lg">
              {allAwards.slice(0, 12).map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <Card className="relative border-0 bg-card/40 dark:bg-card/10 backdrop-blur-sm hover:bg-card/80 dark:hover:bg-card/30 hover:shadow-xl dark:hover:shadow-warning/10 transition-all duration-500 group h-full overflow-hidden">
                    {/* Animated border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-warning via-primary to-success opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-[1px] bg-card dark:bg-card/10 rounded-[calc(var(--radius)-1px)]" />
                    </div>
                    
                    <div className="relative">
                      <CardHeader className="pb-4">
                        <div className="flex items-start space-x-3">
                          <motion.div 
                            className="p-3 bg-gradient-to-br from-warning/10 to-warning/20 dark:from-warning/20 dark:to-warning/30 rounded-xl group-hover:from-warning/20 group-hover:to-warning/30 dark:group-hover:from-warning/30 dark:group-hover:to-warning/40 transition-all duration-500"
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Award className="h-5 w-5 text-warning group-hover:scale-110 transition-transform duration-300" />
                          </motion.div>
                          <div className="flex-1">
                            <CardTitle className="text-sm font-bold group-hover:text-primary transition-colors duration-300 line-clamp-2">
                              {item.award}
                            </CardTitle>
                            <CardDescription className="text-xs mt-1 group-hover:text-foreground transition-colors duration-300">
                              Awarded by {item.partner}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <Badge className="text-xs bg-muted/50 dark:bg-muted/30 hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors duration-300">
                          {item.sector}
                        </Badge>
                        
                        {/* Progress indicator */}
                        <motion.div 
                          className="mt-3 h-1 bg-muted rounded-full overflow-hidden"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <motion.div 
                            className="h-full bg-gradient-to-r from-warning to-success rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: '80%' }}
                            transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
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

      {/* Enhanced Partnership Stats */}
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
                  Partnership Impact
                </Badge>
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-foreground to-success bg-clip-text text-transparent">
                Partnership Impact
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                The strength of our collaborative ecosystem
              </motion.p>
            </VStack>

            <Grid cols={4} gap="lg">
              {[
                { number: '7', label: 'Strategic Partners', icon: Handshake, color: 'text-primary' },
                { number: '25+', label: 'Awards & Certifications', icon: Award, color: 'text-warning' },
                { number: '4', label: 'Sector Coverage', icon: Globe, color: 'text-info' },
                { number: '100%', label: 'Compliance Rate', icon: CheckCircle, color: 'text-success' }
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
                    Become a Partner
                  </h2>
                  <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed">
                    Join our network of trusted partners and help us build the future of global investment.
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
                  Partnership Opportunities
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="xl" 
                  variant="outline" 
                  className="group border-2 border-white/30 text-white hover:border-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl transition-all duration-300"
                >
                  Contact Us
                  <ExternalLink className="ml-2 h-5 w-5" />
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

export default Partners


import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Building2,
  Shield,
  Globe,
  TrendingUp,
  Users,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Check,
  Star,
  Award,
  Target,
  BarChart3,
  DollarSign,
  Calendar,
  ArrowRight
} from 'lucide-react'

const CapimaxInvestment = ({ language = 'en' }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const translations = {
    en: {
      heroTitle: "Capimax Investment",
      heroSubtitle: "Leading global investment platform offering fractional ownership, real estate, precious metals, digital assets, and fintech solutions.",
      overview: "Company Overview",
      services: "Our Services",
      locations: "Global Locations",
      keyFeatures: "Key Features",
      investment: "Investment Opportunities",
      contact: "Contact Information",
      getStarted: "Start Your Investment Journey",

      // Overview content
      overviewTitle: "Global Investment Excellence",
      overviewDescription: "Capimax Investment represents the core investment arm of the Capimax Group, operating across three continents with specialized expertise in real estate, digital assets, and precious metals. We provide innovative investment solutions that combine traditional security with cutting-edge digital innovation.",

      // Services
      realEstate: "Real Estate Investment",
      realEstateDesc: "Global residential and commercial real estate investment opportunities",
      fractionalInvestment: "Fractional Investment",
      fractionalDesc: "Access premium investments with fractional ownership opportunities",
      digitalAssets: "Digital Assets",
      digitalAssetsDesc: "Blockchain-backed asset management and tokenization services",
      preciousMetals: "Precious Metals",
      preciousMetalsDesc: "Secure investment in gold, silver, and rare metals with certificates",

      // Key Features
      transparency: "Transparency",
      transparencyDesc: "Every investment is backed by verifiable data and detailed reports",
      security: "Security",
      securityDesc: "Bank-level security with comprehensive insurance coverage",
      innovation: "Innovation",
      innovationDesc: "Cutting-edge technology including blockchain and tokenization",
      globalReach: "Global Reach",
      globalReachDesc: "Operating across UK, USA, UAE with expanding presence worldwide",

      // Locations
      uaeOffice: "UAE Operations",
      uaeAddress: "Dubai, UAE - Real estate and financial investment in the Middle East",
      ukOffice: "UK Operations",
      ukAddress: "London, UK - European real estate and commercial investments",
      usaOffice: "USA Operations",
      usaAddress: "New York, USA - Investment in promising American markets",

      // Investment opportunities
      currentOpportunities: "Current Investment Opportunities",
      realEstateOpp: "Real Estate Portfolio",
      commercialOpp: "Commercial Properties",
      digitalOpp: "Digital Asset Funds",
      viewDetails: "View Details",
      investNow: "Invest Now",

      // Stats
      activeInvestors: "Active Investors",
      countries: "Countries",
      totalAssets: "Assets Under Management",
      avgReturns: "Average Annual Returns"
    },
    ar: {
      heroTitle: "كابيماكس للاستثمارات",
      heroSubtitle: "منصة استثمارية عالمية رائدة تقدم الملكية الجزئية والعقارات والمعادن الثمينة والأصول الرقمية وحلول التكنولوجيا المالية.",
      overview: "نظرة عامة على الشركة",
      services: "خدماتنا",
      locations: "المواقع العالمية",
      keyFeatures: "الميزات الرئيسية",
      investment: "الفرص الاستثمارية",
      contact: "معلومات الاتصال",
      getStarted: "ابدأ رحلة الاستثمار",

      overviewTitle: "التميز الاستثماري العالمي",
      overviewDescription: "تمثل كابيماكس للاستثمارات الذراع الاستثماري الأساسي لمجموعة كابيماكس، وتعمل عبر ثلاث قارات مع خبرة متخصصة في العقارات والأصول الرقمية والمعادن الثمينة. نقدم حلول استثمارية مبتكرة تجمع بين الأمان التقليدي والابتكار الرقمي المتطور.",

      realEstate: "الاستثمار العقاري",
      realEstateDesc: "فرص استثمارية عقارية سكنية وتجارية عالمية",
      fractionalInvestment: "الاستثمار الجزئي",
      fractionalDesc: "الوصول إلى الاستثمارات المتميزة مع فرص الملكية الجزئية",
      digitalAssets: "الأصول الرقمية",
      digitalAssetsDesc: "إدارة الأصول المدعومة بالبلوك تشين وخدمات الترميز",
      preciousMetals: "المعادن الثمينة",
      preciousMetalsDesc: "استثمار آمن في الذهب والفضة والمعادن النادرة مع الشهادات",

      transparency: "الشفافية",
      transparencyDesc: "كل استثمار مدعوم ببيانات قابلة للتحقق وتقارير مفصلة",
      security: "الأمان",
      securityDesc: "أمان على مستوى البنوك مع تغطية تأمينية شاملة",
      innovation: "الابتكار",
      innovationDesc: "تكنولوجيا متطورة تشمل البلوك تشين والترميز",
      globalReach: "الوصول العالمي",
      globalReachDesc: "نعمل في المملكة المتحدة والولايات المتحدة والإمارات مع التوسع عالمياً",

      uaeOffice: "العمليات في الإمارات",
      uaeAddress: "دبي، الإمارات - الاستثمار العقاري والمالي في الشرق الأوسط",
      ukOffice: "العمليات في المملكة المتحدة",
      ukAddress: "لندن، المملكة المتحدة - الاستثمارات العقارية والتجارية الأوروبية",
      usaOffice: "العمليات في الولايات المتحدة",
      usaAddress: "نيويورك، الولايات المتحدة - الاستثمار في الأسواق الأمريكية الواعدة",

      currentOpportunities: "الفرص الاستثمارية الحالية",
      realEstateOpp: "محفظة العقارات",
      commercialOpp: "العقارات التجارية",
      digitalOpp: "صناديق الأصول الرقمية",
      viewDetails: "عرض التفاصيل",
      investNow: "استثمر الآن",

      activeInvestors: "مستثمر نشط",
      countries: "دولة",
      totalAssets: "الأصول المدارة",
      avgReturns: "متوسط العوائد السنوية"
    }
  }

  const t = translations[language]

  // Company data based on the enhanced content
  const companyData = {
    locations: [
      {
        region: t.uaeOffice,
        description: t.uaeAddress,
        license: "CN-5639305",
        icon: Globe,
        color: "text-primary"
      },
      {
        region: t.ukOffice,
        description: t.ukAddress,
        license: "16099034",
        icon: Building2,
        color: "text-success"
      },
      {
        region: t.usaOffice,
        description: t.usaAddress,
        license: "2024-001559635",
        icon: TrendingUp,
        color: "text-warning"
      }
    ],

    services: [
      {
        title: t.realEstate,
        description: t.realEstateDesc,
        icon: Building2,
        color: "text-primary"
      },
      {
        title: t.fractionalInvestment,
        description: t.fractionalDesc,
        icon: Users,
        color: "text-success"
      },
      {
        title: t.digitalAssets,
        description: t.digitalAssetsDesc,
        icon: Target,
        color: "text-warning"
      },
      {
        title: t.preciousMetals,
        description: t.preciousMetalsDesc,
        icon: Award,
        color: "text-info"
      }
    ],

    keyFeatures: [
      {
        title: t.transparency,
        description: t.transparencyDesc,
        icon: Shield,
        color: "text-primary"
      },
      {
        title: t.security,
        description: t.securityDesc,
        icon: Shield,
        color: "text-success"
      },
      {
        title: t.innovation,
        description: t.innovationDesc,
        icon: Target,
        color: "text-warning"
      },
      {
        title: t.globalReach,
        description: t.globalReachDesc,
        icon: Globe,
        color: "text-info"
      }
    ],

    stats: [
      { number: '1,000+', label: t.activeInvestors, icon: Users },
      { number: '15+', label: t.countries, icon: Globe },
      { number: '$250M+', label: t.totalAssets, icon: BarChart3 },
      { number: '18.5%', label: t.avgReturns, icon: TrendingUp }
    ],

    opportunities: [
      {
        title: t.realEstateOpp,
        description: "Diversified real estate investment opportunities across global markets",
        status: "Active",
        minInvestment: "$1,000",
        expectedReturn: "12-15%",
        category: "Real Estate"
      },
      {
        title: t.commercialOpp,
        description: "Investment in modern commercial centers and offices in strategic locations",
        status: "Active",
        minInvestment: "$1,000",
        expectedReturn: "15-18%",
        category: "Commercial"
      },
      {
        title: t.digitalOpp,
        description: "Digital asset funds with blockchain-backed investments",
        status: "Coming Soon",
        minInvestment: "$500",
        expectedReturn: "20-25%",
        category: "Digital"
      }
    ]
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section spacing="2xl" className="relative bg-gradient-to-b from-background to-muted/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/5 to-success/5 rounded-full blur-3xl" />

        <Container size="xl" className="relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <Building2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  Investment Excellence
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                {t.heroTitle}
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                {t.heroSubtitle}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 px-8 py-4 rounded-lg font-semibold">
                {t.getStarted}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 rounded-lg font-medium">
                {t.contact}
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section spacing="xl" className="bg-muted/30">
        <Container size="xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {companyData.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Overview Section */}
      <Section spacing="2xl">
        <Container size="xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <Badge className="mb-4">{t.overview}</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {t.overviewTitle}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.overviewDescription}
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-success/10 rounded-xl flex items-center justify-center">
                  <Building2 className="w-24 h-24 text-primary/30" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-card shadow-lg rounded-lg p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Global Operations Active</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section spacing="2xl" className="bg-muted/20">
        <Container size="xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <Badge className="mb-4">{t.services}</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Investment Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive investment solutions designed to meet diverse financial goals and risk profiles.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyData.services.map((service, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white/50 dark:bg-card/20 backdrop-blur-sm">
                    <CardHeader className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-4">
                        <service.icon className={`w-8 h-8 ${service.color}`} />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Global Locations Section */}
      <Section spacing="2xl">
        <Container size="xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <Badge className="mb-4">{t.locations}</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Global Operations
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Operating across three continents with specialized expertise in key financial markets.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {companyData.locations.map((location, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                          <location.icon className={`w-6 h-6 ${location.color}`} />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{location.region}</CardTitle>
                          <Badge variant="secondary" className="text-xs">
                            License: {location.license}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="leading-relaxed">
                        {location.description}
                      </CardDescription>
                      <Button variant="ghost" size="sm" className="mt-4 p-0 h-auto">
                        Verify License <ExternalLink className="ml-2 w-3 h-3" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Key Features Section */}
      <Section spacing="2xl" className="bg-muted/20">
        <Container size="xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <Badge className="mb-4">{t.keyFeatures}</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Capimax Investment
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Built on pillars of trust, innovation, and excellence to deliver superior investment experiences.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyData.keyFeatures.map((feature, index) => (
                <motion.div key={index} variants={itemVariants} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-6">
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Investment Opportunities Section */}
      <Section spacing="2xl">
        <Container size="xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <Badge className="mb-4">{t.investment}</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t.currentOpportunities}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover carefully vetted investment opportunities with attractive returns and professional management.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {companyData.opportunities.map((opportunity, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant={opportunity.status === 'Active' ? 'default' : 'secondary'}>
                          {opportunity.status}
                        </Badge>
                        <Badge variant="outline">{opportunity.category}</Badge>
                      </div>
                      <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="leading-relaxed">
                        {opportunity.description}
                      </CardDescription>

                      <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                        <div>
                          <div className="text-sm text-muted-foreground">Min Investment</div>
                          <div className="font-semibold">{opportunity.minInvestment}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Expected Return</div>
                          <div className="font-semibold text-green-600">{opportunity.expectedReturn}</div>
                        </div>
                      </div>

                      <div className="flex gap-2 pt-4">
                        <Button variant="outline" size="sm" className="flex-1">
                          {t.viewDetails}
                        </Button>
                        <Button size="sm" className="flex-1" disabled={opportunity.status !== 'Active'}>
                          {t.investNow}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section spacing="2xl" className="bg-foreground text-background">
        <Container size="xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-background">
                Ready to Start Your Investment Journey?
              </h2>
              <p className="text-lg md:text-xl text-background/80 max-w-3xl mx-auto">
                Join thousands of investors who trust Capimax Investment for their financial growth and wealth building needs.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90 px-8 py-4">
                Start Investing Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-background/20 text-background hover:bg-background/10 px-8 py-4">
                Schedule Consultation
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </div>
  )
}

export default CapimaxInvestment
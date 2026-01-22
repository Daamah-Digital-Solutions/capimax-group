import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/layout/Container'
import { Grid, GridItem } from '@/components/layout/Grid'
import { VStack, HStack } from '@/components/layout/Stack'
import { Section, HeroSection, FeatureSection } from '@/components/layout/Section'
import { HeroSection as BusinessHero, CompanyCard, SectorOverview, InvestmentHighlight } from '@/components/business'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useTheme } from '@/hooks/use-theme'

// Import company logos
import capimaxInvestmentsUKDark from '@/assets/capimax logos svg/dark/capi max all versions logos_capi max investments uk dark.svg'
import capimaxFinancialManagementUKDark from '@/assets/capimax logos svg/dark/capi max all versions logos_capi max financial management uk dark -11.svg'
import hccInternationalDark from '@/assets/capimax logos svg/dark/capi max all versions logos_capi max investments dark .svg'
import capimaxPreciousMetalsDark from '@/assets/capimax logos svg/dark/capi max all versions logos_capi max Investment in precious metals  uk dark  .svg'
import capimaxHoldingDark from '@/assets/capimax logos svg/dark/capi max all versions logos_capi max holding  uk dark  .svg'
import capimaxVirtualAssetsDark from '@/assets/capimax logos svg/dark/capi max all versions logos_capi max  Virtual Asset uk dark .svg'
import capimaxInvestmentsUSADark from '@/assets/capimax logos svg/dark/capi max all versions logos_capi max investments usa dark.svg'
import capimaxGeneralTradingUSADark from '@/assets/capimax logos svg/dark/capi max all versions logos_capi max general trading usa dark.svg'
import capimaxInvestmentsUAEDark from '@/assets/capimax logos svg/dark/capi max all versions logos_capi max investments uae dark.svg'

import capimaxInvestmentsUKLight from '@/assets/capimax logos svg/light/capi max all versions logos_capi max investments uk light.svg'
import capimaxFinancialManagementUKLight from '@/assets/capimax logos svg/light/capi max all versions logos_capi max financial management uk light  .svg'
import hccInternationalLight from '@/assets/capimax logos svg/light/capi max all versions logos_capi max investments  light .svg'
import capimaxPreciousMetalsLight from '@/assets/capimax logos svg/light/capi max all versions logos_capi max Investment in precious metals  uk light  .svg'
import capimaxHoldingLight from '@/assets/capimax logos svg/light/capi max all versions logos_capi max holding  uk light   .svg'
import capimaxVirtualAssetsLight from '@/assets/capimax logos svg/light/capi max all versions logos_capi max  Virtual Asset uk light .svg'
import capimaxDevelopmentLight from '@/assets/capimax logos svg/light/capi max all versions logos_capi max development uk light .svg'
import capimaxInvestmentsUSALight from '@/assets/capimax logos svg/light/capi max all versions logos_capi max investments usa light.svg'
import capimaxGeneralTradingUSALight from '@/assets/capimax logos svg/light/capi max all versions logos_capi max general trading usa light.svg'
import capimaxInvestmentsUAELight from '@/assets/capimax logos svg/light/capi max all versions logos_capi max investments uae light.svg'
import { 
  ArrowRight, 
  TrendingUp, 
  Shield, 
  Globe, 
  Users,
  Building2,
  Coins,
  Smartphone,
  Award,
  CheckCircle,
  Play,
  Star,
  ChevronRight,
  BarChart3,
  Target,
  Zap,
  Eye,
  Clock,
  ExternalLink
} from 'lucide-react'

const Home = ({ language }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const heroRef = useRef(null)
  const { isDark } = useTheme()

  // Company logos data for global presence slider
  const companyLogos = [
    {
      name: "Capimax Investments UK",
      country: "United Kingdom",
      flag: "🇬🇧",
      logo: isDark ? capimaxInvestmentsUKLight : capimaxInvestmentsUKDark,
    },
    {
      name: "Capimax Financial Management UK",
      country: "United Kingdom",
      flag: "🇬🇧",
      logo: isDark ? capimaxFinancialManagementUKLight : capimaxFinancialManagementUKDark,
    },
    {
      name: "HCC International",
      country: "United Kingdom",
      flag: "🇬🇧",
      logo: isDark ? hccInternationalLight : hccInternationalDark,
    },
    {
      name: "Capimax Precious Metals",
      country: "United Kingdom",
      flag: "🇬🇧",
      logo: isDark ? capimaxPreciousMetalsLight : capimaxPreciousMetalsDark,
    },
    {
      name: "Capimax Holding",
      country: "United Kingdom",
      flag: "🇬🇧",
      logo: isDark ? capimaxHoldingLight : capimaxHoldingDark,
    },
    {
      name: "Capimax Virtual Assets",
      country: "United Kingdom",
      flag: "🇬🇧",
      logo: isDark ? capimaxVirtualAssetsLight : capimaxVirtualAssetsDark,
    },
    {
      name: "Capimax Development",
      country: "United Kingdom",
      flag: "🇬🇧",
      logo: capimaxDevelopmentLight, // Only light version available
    },
    {
      name: "Capimax Investments USA",
      country: "United States",
      flag: "🇺🇸",
      logo: isDark ? capimaxInvestmentsUSALight : capimaxInvestmentsUSADark,
    },
    {
      name: "Capimax General Trading USA",
      country: "United States",
      flag: "🇺🇸",
      logo: isDark ? capimaxGeneralTradingUSALight : capimaxGeneralTradingUSADark,
    },
    {
      name: "Capimax Investments UAE",
      country: "United Arab Emirates",
      flag: "🇦🇪",
      logo: isDark ? capimaxInvestmentsUAELight : capimaxInvestmentsUAEDark,
    }
  ]
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  const translations = {
    en: {
      heroTitle: 'Global Investments Under One Umbrella',
      heroSubtitle: 'Leading global investment platform offering fractional ownership, real estate, precious metals, digital assets, and fintech solutions.',
      exploreGroup: 'Explore the Group',
      ourCompanies: 'Our Companies',
      forInvestors: 'For Investors',
      globalPresence: 'Our Global Presence',
      globalSubtitle: 'Operating across three continents with specialized companies in key financial markets worldwide.',
      trustedBy: 'Trusted by investors worldwide',
      contactUs: 'Contact Us',
      watchVideo: 'Watch Video',
      trustedBy: 'Trusted by investors worldwide',
      investors: 'Active Investors',
      countries: 'Countries',
      companies: 'Companies',
      sectors: 'Sectors',
      whyCapimax: 'Why Choose Capimax?',
      innovation: 'Innovation',
      innovationDesc: 'Cutting-edge technology and blockchain solutions',
      security: 'Security',
      securityDesc: 'Bank-level security with comprehensive insurance',
      transparency: 'Transparency',
      transparencyDesc: 'Full transparency with real-time reporting',
      global: 'Global Reach',
      globalDesc: 'Operating across UK, USA, UAE and expanding',
      featuredCompanies: 'Our Portfolio Companies',
      viewAll: 'View All Companies',
      investments: 'Capimax Investments',
      investmentsDesc: 'Digital investment platform for fractional ownership',
      development: 'Capimax Development',
      developmentDesc: 'Real estate development and construction',
      fintech: 'Capimax Fintech',
      fintechDesc: 'Blockchain and financial technology solutions',
      virtualAssets: 'Virtual Assets',
      virtualAssetsDesc: 'Digital asset management and trading',
      latestNews: 'Latest News & Updates',
      newsTitle1: 'Capimax Group Expands to New Markets',
      newsDesc1: 'Strategic expansion into Asian and African markets announced',
      newsTitle2: 'New Tokenization Platform Launched',
      newsDesc2: 'Revolutionary platform for asset tokenization now live',
      newsTitle3: 'Partnership with Leading Insurance Provider',
      newsDesc3: 'Enhanced security and coverage for all investments',
      readMore: 'Read More',
      getStarted: 'Ready to Start Your Investment Journey?',
      getStartedDesc: 'Join thousands of investors who trust Capimax for their investment needs and build your wealth with confidence.',
      startInvesting: 'Start Investing',
      learnMore: 'Learn More',
      performanceTitle: 'Performance & Growth',
      performanceDesc: 'Track our consistent growth across all sectors',
      totalAssets: 'Total Assets Under Management',
      avgReturns: 'Average Annual Returns',
      successRate: 'Investment Success Rate'
    },
    ar: {
      heroTitle: 'استثمارات عالمية تحت مظلة واحدة',
      heroSubtitle: 'منصة استثمارية عالمية رائدة تقدم الملكية الجزئية والعقارات والمعادن الثمينة والأصول الرقمية وحلول التكنولوجيا المالية.',
      exploreGroup: 'استكشف المجموعة',
      ourCompanies: 'شركاتنا',
      forInvestors: 'للمستثمرين',
      globalPresence: 'حضورنا العالمي',
      globalSubtitle: 'نعمل عبر ثلاث قارات مع شركات متخصصة في الأسواق المالية الرئيسية حول العالم.',
      trustedBy: 'موثوق به من قبل المستثمرين في جميع أنحاء العالم',
      contactUs: 'اتصل بنا',
      watchVideo: 'شاهد الفيديو',
      trustedBy: 'موثوق من قبل المستثمرين في جميع أنحاء العالم',
      investors: 'مستثمر نشط',
      countries: 'دولة',
      companies: 'شركة',
      sectors: 'قطاع',
      whyCapimax: 'لماذا تختار كابيماكس؟',
      innovation: 'الابتكار',
      innovationDesc: 'تكنولوجيا متطورة وحلول البلوك تشين',
      security: 'الأمان',
      securityDesc: 'أمان على مستوى البنوك مع تأمين شامل',
      transparency: 'الشفافية',
      transparencyDesc: 'شفافية كاملة مع تقارير في الوقت الفعلي',
      global: 'الوصول العالمي',
      globalDesc: 'نعمل في المملكة المتحدة والولايات المتحدة والإمارات ونتوسع',
      featuredCompanies: 'شركات المحفظة',
      viewAll: 'عرض جميع الشركات',
      investments: 'كابيماكس للاستثمارات',
      investmentsDesc: 'منصة استثمار رقمية للملكية الجزئية',
      development: 'كابيماكس للتطوير',
      developmentDesc: 'تطوير العقارات والإنشاءات',
      fintech: 'كابيماكس فينتك',
      fintechDesc: 'حلول البلوك تشين والتكنولوجيا المالية',
      virtualAssets: 'الأصول الافتراضية',
      virtualAssetsDesc: 'إدارة وتداول الأصول الرقمية',
      latestNews: 'آخر الأخبار والتحديثات',
      newsTitle1: 'مجموعة كابيماكس تتوسع في أسواق جديدة',
      newsDesc1: 'تم الإعلان عن التوسع الاستراتيجي في الأسواق الآسيوية والأفريقية',
      newsTitle2: 'إطلاق منصة جديدة للترميز',
      newsDesc2: 'منصة ثورية لترميز الأصول متاحة الآن',
      newsTitle3: 'شراكة مع مقدم تأمين رائد',
      newsDesc3: 'أمان وتغطية محسنة لجميع الاستثمارات',
      readMore: 'اقرأ المزيد',
      getStarted: 'مستعد لبدء رحلة الاستثمار؟',
      getStartedDesc: 'انضم إلى آلاف المستثمرين الذين يثقون في كابيماكس لاحتياجاتهم الاستثمارية وابني ثروتك بثقة.',
      startInvesting: 'ابدأ الاستثمار',
      learnMore: 'تعلم المزيد',
      performanceTitle: 'الأداء والنمو',
      performanceDesc: 'تتبع نمونا المستمر عبر جميع القطاعات',
      totalAssets: 'إجمالي الأصول المدارة',
      avgReturns: 'متوسط العوائد السنوية',
      successRate: 'معدل نجاح الاستثمارات'
    }
  }

  const t = translations[language]

  // Enhanced statistics with animations
  const stats = [
    { number: '10,000+', label: t.investors, icon: Users, color: 'text-primary' },
    { number: '15+', label: t.countries, icon: Globe, color: 'text-success' },
    { number: '11', label: t.companies, icon: Building2, color: 'text-warning' },
    { number: '8', label: t.sectors, icon: TrendingUp, color: 'text-info' }
  ]

  // Enhanced performance metrics
  const performanceStats = [
    { number: '$250M+', label: t.totalAssets, icon: BarChart3, trend: '+28%' },
    { number: '18.5%', label: t.avgReturns, icon: Target, trend: '+3.2%' },
    { number: '94%', label: t.successRate, icon: Award, trend: '+2%' }
  ]

  const features = [
    {
      icon: Zap,
      title: t.innovation,
      description: t.innovationDesc,
      color: 'text-primary'
    },
    {
      icon: Shield,
      title: t.security,
      description: t.securityDesc,
      color: 'text-success'
    },
    {
      icon: Eye,
      title: t.transparency,
      description: t.transparencyDesc,
      color: 'text-info'
    },
    {
      icon: Globe,
      title: t.global,
      description: t.globalDesc,
      color: 'text-warning'
    }
  ]

  const featuredCompanies = [
    {
      id: 'capimax-investments',
      name: t.investments,
      description: t.investmentsDesc,
      icon: TrendingUp,
      color: 'bg-primary',
      gradient: 'from-primary to-primary-foreground'
    },
    {
      id: 'capimax-development',
      name: t.development,
      description: t.developmentDesc,
      icon: Building2,
      color: 'bg-success',
      gradient: 'from-success to-success/80'
    },
    {
      id: 'capimax-fintech',
      name: t.fintech,
      description: t.fintechDesc,
      icon: Smartphone,
      color: 'bg-brand-tertiary',
      gradient: 'from-brand-tertiary to-brand-secondary'
    },
    {
      id: 'capimax-virtual-assets',
      name: t.virtualAssets,
      description: t.virtualAssetsDesc,
      icon: Coins,
      color: 'bg-warning',
      gradient: 'from-warning to-warning/80'
    }
  ]

  const news = [
    {
      title: t.newsTitle1,
      description: t.newsDesc1,
      date: '2024-12-01',
      image: '/api/placeholder/400/200',
      category: 'Expansion'
    },
    {
      title: t.newsTitle2,
      description: t.newsDesc2,
      date: '2024-11-28',
      image: '/api/placeholder/400/200',
      category: 'Technology'
    },
    {
      title: t.newsTitle3,
      description: t.newsDesc3,
      date: '2024-11-25',
      image: '/api/placeholder/400/200',
      category: 'Partnership'
    }
  ]

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

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity
      }
    }
  }

  // Sample data for showcasing design system components
  const sampleCompanies = [
    {
      id: 1,
      name: "Capimax Investments",
      sector: "Investment Management",
      description: "Leading digital investment platform offering fractional ownership and diverse portfolio management with AI-powered insights.",
      logo: null,
      status: "active",
      metrics: {
        revenue: "$50M+",
        growth: "+35%",
        employees: "150+"
      },
      tags: ["Fintech", "Digital Assets", "AI-Powered"]
    },
    {
      id: 2,
      name: "Capimax Development",
      sector: "Real Estate",
      description: "Premium real estate development focusing on sustainable and innovative construction solutions across major markets.",
      logo: null,
      status: "active", 
      metrics: {
        revenue: "$25M+",
        growth: "+28%",
        employees: "75+"
      },
      tags: ["Construction", "Sustainable", "Premium"]
    },
    {
      id: 3,
      name: "Capimax Fintech",
      sector: "Financial Technology",
      description: "Blockchain-powered financial solutions and payment processing systems for modern businesses and enterprises.",
      logo: null,
      status: "pending",
      metrics: {
        revenue: "$15M+",
        growth: "+120%", 
        employees: "45+"
      },
      tags: ["Blockchain", "Payments", "B2B"]
    }
  ]

  const sampleSectors = [
    {
      id: 1,
      name: "Financial Technology",
      description: "Innovation in digital payments, blockchain, and financial services",
      companies: 4,
      totalValue: "$125M",
      growth: "+45%",
      trend: "up",
      color: "primary"
    },
    {
      id: 2,
      name: "Real Estate Development", 
      description: "Premium properties and sustainable construction projects",
      companies: 3,
      totalValue: "$89M",
      growth: "+22%",
      trend: "up",
      color: "success"
    },
    {
      id: 3,
      name: "Investment Management",
      description: "Portfolio management and fractional ownership platforms",
      companies: 2,
      totalValue: "$67M",
      growth: "+18%",
      trend: "stable",
      color: "info"
    }
  ]

  const sampleInvestments = [
    {
      id: 1,
      title: "Premium Office Complex Development",
      company: "Capimax Development",
      description: "A state-of-the-art commercial office complex in Dubai's business district with sustainable design and smart building technology",
      amount: "$5.2M",
      minInvestment: "$1,000",
      expectedReturn: "12-15%",
      duration: "24 months",
      riskLevel: "medium",
      status: "open",
      deadline: "March 31, 2025",
      raised: "68%",
      featured: true,
      highlights: [
        "Prime location in Dubai Business Bay",
        "LEED Gold certified sustainable design",
        "Pre-leased to multinational corporations",
        "Expected 15% annual returns"
      ],
      badges: ["Featured", "Sustainable", "Pre-leased"]
    },
    {
      id: 2,
      title: "Tech Startup Portfolio Fund",
      company: "Capimax Investments",
      description: "Diversified portfolio of early-stage technology companies with AI and blockchain focus",
      amount: "$2.8M",
      minInvestment: "$500", 
      expectedReturn: "25-35%",
      duration: "36 months",
      riskLevel: "high",
      status: "open",
      deadline: "February 15, 2025",
      raised: "42%",
      premium: true,
      highlights: [
        "Access to exclusive startup deals",
        "Portfolio of 15+ tech companies", 
        "Expert fund management team",
        "Potential for high returns"
      ],
      badges: ["Premium", "High Growth", "Tech Focus"]
    }
  ]

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredCompanies.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Enhanced Hero Section */}
      <motion.div
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-success/5"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-success/10 rounded-full blur-3xl" />
        
        <Container size="xl" className="relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium"
              >
                <Star className="w-4 h-4" />
                {t.trustedBy}
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-foreground to-success bg-clip-text text-transparent leading-tight">
                {t.heroTitle}
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                {t.heroSubtitle}
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="xl"
                className="group bg-gradient-to-r from-primary to-success hover:from-primary/90 hover:to-success/90 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link to="/companies">
                  {t.exploreGroup}
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button
                size="xl"
                variant="outline"
                className="group border-2 border-primary/20 hover:border-primary hover:bg-primary/5 px-8 py-4 rounded-xl transition-all duration-300"
                asChild
              >
                <Link to="/investors">
                  {t.forInvestors}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </Container>

        {/* Subtle floating elements */}
        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          className="absolute top-1/4 right-10 w-2 h-2 bg-primary/30 rounded-full"
        />
        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          style={{ animationDelay: '3s' }}
          className="absolute bottom-1/3 left-10 w-2 h-2 bg-primary/20 rounded-full"
        />
      </motion.div>

      {/* Enhanced Global Presence Section */}
      <Section spacing="2xl" className="relative bg-gradient-to-br from-primary/5 via-background to-success/5 dark:from-card/20 dark:via-background dark:to-card/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/8 to-success/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-success/6 to-primary/6 rounded-full blur-3xl" />

        <Container size="xl" className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center space-y-12"
          >
            {/* Header */}
            <VStack gap="lg" align="center">
              <motion.div variants={itemVariants} className="text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border/20">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    Global Network
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                  Our Global <span className="text-primary">Presence</span>
                </h2>
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
                  {t.globalSubtitle}
                </p>
              </motion.div>
            </VStack>

            {/* Animated Logo Slider */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative overflow-hidden">
                {/* First slider row - moving right */}
                <motion.div
                  animate={{ x: ["0%", "-100%"] }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="flex space-x-8 mb-8"
                >
                  {[...companyLogos, ...companyLogos].map((company, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      className="flex-shrink-0 group relative"
                    >
                      <div
                        className="w-32 h-32 rounded-xl border border-border/10 flex items-center justify-center p-4 group-hover:border-primary/20 group-hover:shadow-lg transition-all duration-500 backdrop-blur-sm"
                        style={{ backgroundColor: isDark ? '#0e1319' : 'rgba(255, 255, 255, 0.95)' }}
                      >
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="bg-white dark:bg-card shadow-lg rounded-md px-3 py-2 border border-border/20">
                          <p className="text-xs font-semibold text-foreground text-center whitespace-nowrap">
                            {company.flag} {company.country}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Second slider row - moving left */}
                <motion.div
                  animate={{ x: ["-100%", "0%"] }}
                  transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="flex space-x-8 mb-8"
                >
                  {[...companyLogos.slice().reverse(), ...companyLogos.slice().reverse()].map((company, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      className="flex-shrink-0 group relative"
                    >
                      <div
                        className="w-32 h-32 rounded-xl border border-border/10 flex items-center justify-center p-4 group-hover:border-primary/20 group-hover:shadow-lg transition-all duration-500 backdrop-blur-sm"
                        style={{ backgroundColor: isDark ? '#0e1319' : 'rgba(255, 255, 255, 0.95)' }}
                      >
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="bg-white dark:bg-card shadow-lg rounded-md px-3 py-2 border border-border/20">
                          <p className="text-xs font-semibold text-foreground text-center whitespace-nowrap">
                            {company.flag} {company.country}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Gradient overlays for seamless effect */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            </motion.div>

          </motion.div>
        </Container>
      </Section>

      {/* Enhanced Stats Section */}
      <Section spacing="xl" className="relative bg-gradient-to-br from-background via-muted/5 to-card/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
        <Container size="xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <Grid cols={4} gap="lg" className="max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div key={index} variants={itemVariants} whileHover={{ y: -4 }} className="group">
                  <Card className="text-center border-0 bg-card/50 dark:bg-card/20 backdrop-blur-sm hover:bg-card/80 dark:hover:bg-card/40 hover:shadow-lg dark:hover:shadow-primary/10 transition-all duration-300 group">
                    <CardContent className="pt-6 pb-4">
                      <VStack gap="md" align="center">
                        <motion.div
                          className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-success/10 dark:from-primary/20 dark:to-success/20 group-hover:from-primary/20 group-hover:to-success/20 dark:group-hover:from-primary/30 dark:group-hover:to-success/30 transition-all duration-300"
                          whileHover={{ scale: 1.05, rotate: 5 }}
                        >
                          <stat.icon className="h-8 w-8 text-primary group-hover:text-success transition-colors duration-300" />
                        </motion.div>
                        <div className="space-y-2">
                          <motion.div
                            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent"
                            initial={{ scale: 0.5 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                          >
                            {stat.number}
                          </motion.div>
                          <div className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            {stat.label}
                          </div>
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

      {/* Enhanced Performance Metrics Section */}
      <Section spacing="xl" className="relative bg-gradient-to-br from-muted/20 via-background to-muted/10 dark:from-muted/10 dark:to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-success/5 dark:bg-success/10 rounded-full blur-2xl" />
        
        <Container size="xl" className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-12"
          >
            <VStack gap="md" align="center" className="text-center">
              <motion.div variants={itemVariants}>
                <Badge className="mb-4 bg-primary/10 dark:bg-primary/20 text-primary border-primary/20 dark:border-primary/40">
                  Performance Metrics
                </Badge>
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-foreground to-success bg-clip-text text-transparent">
                {t.performanceTitle}
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                {t.performanceDesc}
              </motion.p>
            </VStack>

            <Grid cols={3} gap="xl">
              {performanceStats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Card className="relative text-center border-0 bg-card/50 dark:bg-card/20 backdrop-blur-sm hover:bg-card/80 dark:hover:bg-card/40 hover:shadow-2xl dark:hover:shadow-primary/10 transition-all duration-500 overflow-hidden group h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-success/5 dark:from-primary/10 dark:to-success/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-success transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    
                    <CardContent className="relative pt-8 pb-6">
                      <VStack gap="lg" align="center">
                        <motion.div 
                          className="relative p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-success/10 dark:from-primary/20 dark:to-success/20 group-hover:from-primary/20 group-hover:to-success/20 dark:group-hover:from-primary/30 dark:group-hover:to-success/30 transition-all duration-300"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <stat.icon className="h-10 w-10 text-primary group-hover:text-success transition-colors duration-300" />
                          <motion.div
                            className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        </motion.div>
                        
                        <div className="space-y-3">
                          <motion.div 
                            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent"
                            initial={{ scale: 0.5 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                          >
                            {stat.number}
                          </motion.div>
                          <div className="text-base font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            {stat.label}
                          </div>
                          <Badge 
                            variant="secondary" 
                            className="bg-success/10 dark:bg-success/20 text-success border-success/20 dark:border-success/40 group-hover:bg-success/20 dark:group-hover:bg-success/30 transition-all duration-300"
                          >
                            <TrendingUp className="w-3 h-3 mr-1" />
                            {stat.trend}
                          </Badge>
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

      {/* Professional Why Choose Section */}
      <Section spacing="2xl" className="relative bg-background">
        
        <Container size="xl" className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-16"
          >
            <VStack gap="lg" align="center" className="text-center mb-16">
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border/20">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    Excellence
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Why Choose <span className="text-primary">Capimax</span>
                </h2>
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
                  We combine innovation, security, and transparency to deliver exceptional investment experiences.
                </p>
              </motion.div>
            </VStack>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="group text-center"
                >
                  <div className="relative p-6 rounded-lg border border-border/20 hover:border-primary/30 hover:shadow-lg transition-all duration-300" style={{ backgroundColor: '#0e1319' }}>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 dark:bg-primary/20 mb-6 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors duration-300">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Enhanced Featured Companies Section */}
      <FeatureSection spacing="xl" className="bg-gradient-to-br from-muted/30 to-background">
        <Container size="xl">
          <VStack gap="xl" align="center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <VStack gap="md" align="center" className="text-center max-w-3xl">
                <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold">
                  {t.featuredCompanies}
                </motion.h2>
                <motion.p variants={itemVariants} className="text-xl text-muted-foreground">
                  Discover our portfolio of specialized companies across various sectors, each delivering innovative solutions and sustainable growth.
                </motion.p>
              </VStack>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="w-full"
            >
              <Grid cols={3} gap="lg" className="w-full">
                {sampleCompanies.map((company, index) => (
                  <motion.div key={company.id} variants={itemVariants}>
                    <CompanyCard
                      company={company}
                      onViewDetails={(company) => console.log('View details:', company)}
                      onInvest={(company) => console.log('Invest:', company)}
                    />
                  </motion.div>
                ))}
              </Grid>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="group border-2 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
                asChild
              >
                <Link to="/companies">
                  {t.viewAll}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </VStack>
        </Container>
      </FeatureSection>

      {/* Enhanced Investment Sectors Section */}
      <Section spacing="xl" className="relative bg-gradient-to-br from-background via-muted/5 to-card/10 dark:from-background dark:via-muted/10 dark:to-card/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 dark:bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-success/5 dark:bg-success/15 rounded-full blur-3xl" />
        
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
                  Investment Sectors
                </Badge>
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-foreground to-success bg-clip-text text-transparent">
                Diversified Investment Opportunities
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed">
                Explore our carefully curated investment sectors, each offering unique opportunities for growth and portfolio diversification across emerging and established markets.
              </motion.p>
            </VStack>
            
            <Grid cols={3} gap="xl">
              {sampleSectors.map((sector, index) => (
                <motion.div 
                  key={sector.id} 
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Card className="relative border-0 bg-card/50 dark:bg-card/20 backdrop-blur-sm hover:bg-card/80 dark:hover:bg-card/40 hover:shadow-2xl dark:hover:shadow-primary/20 transition-all duration-500 group h-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-success/5 dark:from-primary/10 dark:to-success/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-success transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    
                    <CardHeader className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <Badge 
                          variant="secondary" 
                          className={`${sector.color === 'primary' ? 'bg-primary/10 text-primary dark:bg-primary/20' : 
                                      sector.color === 'success' ? 'bg-success/10 text-success dark:bg-success/20' : 
                                      'bg-info/10 text-info dark:bg-info/20'}`}
                        >
                          {sector.companies} Companies
                        </Badge>
                        <motion.div
                          className="p-2 bg-primary/10 dark:bg-primary/20 rounded-lg group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-all duration-300"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <TrendingUp className="w-5 h-5 text-primary" />
                        </motion.div>
                      </div>
                      
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                        {sector.name}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {sector.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-muted/50 dark:bg-muted/20 rounded-lg group-hover:bg-primary/5 dark:group-hover:bg-primary/10 transition-all duration-300">
                          <div className="text-lg font-bold text-primary">{sector.totalValue}</div>
                          <div className="text-xs text-muted-foreground">Total Value</div>
                        </div>
                        <div className="text-center p-3 bg-muted/50 dark:bg-muted/20 rounded-lg group-hover:bg-success/5 dark:group-hover:bg-success/10 transition-all duration-300">
                          <div className="text-lg font-bold text-success flex items-center justify-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            {sector.growth}
                          </div>
                          <div className="text-xs text-muted-foreground">Growth</div>
                        </div>
                      </div>
                      
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
                      
                      <Button size="sm" variant="outline" className="w-full hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-300">
                        Explore Sector
                        <ArrowRight className="ml-2 w-3 h-3" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Section>

      {/* Enhanced Featured Investment Opportunities Section */}
      <FeatureSection spacing="xl" className="relative bg-gradient-to-br from-card/30 via-muted/10 to-background dark:from-card/10 dark:via-muted/5 dark:to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 dark:bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-success/5 dark:bg-success/15 rounded-full blur-3xl" />
        
        <Container size="xl" className="relative z-10">
          <VStack gap="xl" align="center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <VStack gap="md" align="center" className="text-center max-w-4xl">
                <motion.div variants={itemVariants}>
                  <Badge className="mb-4 bg-gradient-to-r from-primary/10 to-success/10 dark:from-primary/20 dark:to-success/20 text-primary border-primary/20 dark:border-primary/40">
                    Featured Opportunities
                  </Badge>
                </motion.div>
                <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-foreground to-success bg-clip-text text-transparent">
                  Featured Investment Opportunities
                </motion.h2>
                <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Discover exclusive investment opportunities with attractive returns, professional management, and comprehensive due diligence backed by our expertise and market insights.
                </motion.p>
              </VStack>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="w-full"
            >
              <Grid cols={2} gap="xl" className="w-full">
                {sampleInvestments.map((investment, index) => (
                  <motion.div 
                    key={investment.id} 
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    className="group"
                  >
                    <Card className="relative border-0 bg-card/50 dark:bg-card/20 backdrop-blur-sm hover:bg-card/80 dark:hover:bg-card/40 hover:shadow-2xl dark:hover:shadow-primary/20 transition-all duration-500 group h-full overflow-hidden">
                      {/* Featured/Premium Badge */}
                      {investment.featured && (
                        <div className="absolute top-4 right-4 z-20">
                          <Badge className="bg-gradient-to-r from-primary to-success text-white">
                            ⭐ Featured
                          </Badge>
                        </div>
                      )}
                      {investment.premium && (
                        <div className="absolute top-4 right-4 z-20">
                          <Badge className="bg-gradient-to-r from-warning to-orange-500 text-white">
                            👑 Premium
                          </Badge>
                        </div>
                      )}
                      
                      {/* Animated border */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary via-success to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-[1px] bg-card dark:bg-card/20 rounded-[calc(var(--radius)-1px)]" />
                      </div>
                      
                      <div className="relative p-6">
                        <VStack gap="lg" align="start">
                          {/* Investment Header */}
                          <div>
                            <Badge variant="outline" className="mb-3 text-primary border-primary/20 dark:border-primary/40">
                              {investment.company}
                            </Badge>
                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300 mb-2">
                              {investment.title}
                            </h3>
                            <CardDescription className="text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                              {investment.description}
                            </CardDescription>
                          </div>
                          
                          {/* Investment Metrics */}
                          <div className="grid grid-cols-2 gap-4 w-full">
                            <div className="text-center p-3 bg-muted/50 dark:bg-muted/20 rounded-lg group-hover:bg-primary/5 dark:group-hover:bg-primary/10 transition-all duration-300">
                              <div className="text-lg font-bold text-primary">{investment.amount}</div>
                              <div className="text-xs text-muted-foreground">Target Amount</div>
                            </div>
                            <div className="text-center p-3 bg-muted/50 dark:bg-muted/20 rounded-lg group-hover:bg-success/5 dark:group-hover:bg-success/10 transition-all duration-300">
                              <div className="text-lg font-bold text-success">{investment.expectedReturn}</div>
                              <div className="text-xs text-muted-foreground">Expected Return</div>
                            </div>
                            <div className="text-center p-3 bg-muted/50 dark:bg-muted/20 rounded-lg group-hover:bg-info/5 dark:group-hover:bg-info/10 transition-all duration-300">
                              <div className="text-sm font-bold text-info">{investment.minInvestment}</div>
                              <div className="text-xs text-muted-foreground">Min Investment</div>
                            </div>
                            <div className="text-center p-3 bg-muted/50 dark:bg-muted/20 rounded-lg group-hover:bg-warning/5 dark:group-hover:bg-warning/10 transition-all duration-300">
                              <div className="text-sm font-bold text-warning">{investment.duration}</div>
                              <div className="text-xs text-muted-foreground">Duration</div>
                            </div>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="w-full">
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-muted-foreground">Progress</span>
                              <span className="font-medium text-primary">{investment.raised} raised</span>
                            </div>
                            <motion.div 
                              className="h-2 bg-muted rounded-full overflow-hidden"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ delay: index * 0.2 }}
                            >
                              <motion.div 
                                className="h-full bg-gradient-to-r from-primary to-success rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: investment.raised }}
                                transition={{ duration: 1, delay: index * 0.2 + 0.5, ease: "easeOut" }}
                              />
                            </motion.div>
                          </div>
                          
                          {/* Action Buttons */}
                          <div className="flex gap-3 pt-4 border-t border-gray-200/50 w-full">
                            <Button size="sm" variant="outline" className="flex-1 hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-300">
                              Learn More
                            </Button>
                            <Button size="sm" className="flex-1 bg-gradient-to-r from-primary to-success hover:from-primary/90 hover:to-success/90 transition-all duration-300">
                              Invest Now
                            </Button>
                          </div>
                        </VStack>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </Grid>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button 
                size="xl" 
                className="group bg-gradient-to-r from-primary to-success hover:from-primary/90 hover:to-success/90 text-white shadow-xl hover:shadow-2xl dark:hover:shadow-primary/20 px-8 py-4 rounded-xl transition-all duration-500"
                asChild
              >
                <Link to="/investors">
                  View All Opportunities
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </VStack>
        </Container>
      </FeatureSection>

      {/* Enhanced Latest News & Updates Section */}
      <Section spacing="xl" className="relative bg-gradient-to-br from-muted/10 via-background to-card/5 dark:from-muted/5 dark:to-card/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
        <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 dark:bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-success/5 dark:bg-success/15 rounded-full blur-3xl" />
        
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
                  Latest Updates
                </Badge>
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-foreground to-success bg-clip-text text-transparent">
                {t.latestNews}
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed">
                Stay informed with the latest developments, announcements, and insights from Capimax Group as we continue to innovate, expand, and shape the future of global investment.
              </motion.p>
            </VStack>

            <Grid cols={3} gap="xl">
              {news.map((article, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Card className="relative border-0 bg-card/50 dark:bg-card/20 backdrop-blur-sm hover:bg-card/80 dark:hover:bg-card/40 hover:shadow-2xl dark:hover:shadow-primary/20 transition-all duration-500 group h-full overflow-hidden">
                    {/* Animated border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-success to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-[1px] bg-card dark:bg-card/20 rounded-[calc(var(--radius)-1px)]" />
                    </div>
                    
                    {/* Article Image */}
                    <div className="relative aspect-video bg-gradient-to-br from-muted/50 to-muted/20 dark:from-muted/20 dark:to-muted/10 group-hover:from-primary/10 group-hover:to-success/10 dark:group-hover:from-primary/20 dark:group-hover:to-success/20 transition-all duration-500 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent dark:from-black/60" />
                      
                      {/* Category Badge */}
                      <Badge 
                        variant="secondary" 
                        className={`absolute top-4 left-4 z-10 ${
                          article.category === 'Expansion' ? 'bg-primary/90 text-white' : 
                          article.category === 'Technology' ? 'bg-success/90 text-white' : 
                          'bg-warning/90 text-black'
                        } backdrop-blur-sm transition-all duration-300`}
                      >
                        {article.category}
                      </Badge>
                      
                      {/* Overlay Pattern */}
                      <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-grid-pattern" />
                      
                      {/* Article Icon */}
                      <motion.div 
                        className="absolute bottom-4 right-4 p-2 bg-background/10 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <ArrowRight className="w-4 h-4 text-white" />
                      </motion.div>
                    </div>
                    
                    <div className="relative">
                      <CardHeader className="pb-4">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground group-hover:text-foreground mb-3 transition-colors duration-300">
                          <Clock className="w-4 h-4" />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                          <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                          <span className="text-primary">3 min read</span>
                        </div>
                        <CardTitle className="text-lg font-bold line-clamp-2 group-hover:text-primary transition-colors duration-300">
                          {article.title}
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <CardDescription className="text-muted-foreground group-hover:text-foreground line-clamp-3 leading-relaxed transition-colors duration-300">
                          {article.description}
                        </CardDescription>
                        
                        {/* Progress indicator */}
                        <motion.div 
                          className="h-1 bg-muted rounded-full overflow-hidden"
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
                        
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200/50">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="group/btn hover:bg-primary/10 hover:text-primary transition-all duration-300"
                          >
                            {t.readMore}
                            <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                          
                          {/* Social share */}
                          <div className="flex items-center space-x-1">
                            <motion.button 
                              className="p-1 text-muted-foreground hover:text-primary transition-colors duration-300"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Eye className="w-3 h-3" />
                            </motion.button>
                            <span className="text-xs text-muted-foreground">1.2k</span>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </Grid>
            
            {/* View all news button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <Button 
                size="xl" 
                variant="outline"
                className="group border-2 border-primary/30 dark:border-primary/50 hover:bg-gradient-to-r hover:from-primary hover:to-success hover:border-transparent hover:text-white hover:shadow-xl dark:hover:shadow-primary/20 px-8 py-4 rounded-xl transition-all duration-500"
                asChild
              >
                <Link to="/news">
                  View All News & Updates
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Enhanced CTA Section */}
      <Section spacing="2xl" className="relative bg-gradient-to-br from-primary via-primary/90 to-success overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

        <Container size="xl" className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center space-y-12 max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                {t.getStarted}
              </h2>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                {t.getStartedDesc}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Button
                size="xl"
                variant="secondary"
                className="group bg-white text-primary hover:bg-white/90 hover:shadow-2xl px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300"
                asChild
              >
                <Link to="/investors">
                  {t.startInvesting}
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="group border-2 border-white/30 text-white hover:border-white hover:bg-white/10 backdrop-blur-sm px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300"
                asChild
              >
                <Link to="/about">
                  {t.learnMore}
                  <ExternalLink className="ml-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </div>
  )
}

export default Home
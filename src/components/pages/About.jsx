import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/layout/Container'
import { Grid } from '@/components/layout/Grid'
import { VStack, HStack } from '@/components/layout/Stack'
import { Section } from '@/components/layout/Section'
import { motion } from 'framer-motion'
import { FloatingElements } from '@/components/enhanced/FloatingElements'
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Globe, 
  TrendingUp, 
  Shield, 
  Award,
  Building2,
  Calendar,
  MapPin,
  ArrowRight,
  Zap,
  CheckCircle,
  Star,
  BarChart3,
  Clock
} from 'lucide-react'
import { Link } from 'react-router-dom'

const About = ({ language }) => {
  const translations = {
    en: {
      pageTitle: 'About Capimax Group',
      pageSubtitle: 'Leading the future of global investment through innovation, security, and transparency.',
      pageDescription: 'Discover our journey, vision, and commitment to democratizing investment opportunities worldwide.',
      ourStory: 'Our Story',
      storyText: 'Capimax Group was founded with a vision to democratize investment opportunities and create a secure, transparent ecosystem where everyone can participate in global markets. Since our inception, we have grown into a comprehensive investment platform operating across multiple countries and sectors.',
      vision: 'Our Vision',
      visionText: 'To be the leading global investment platform in fractional ownership and crowdfunding, integrating traditional and digital systems (tokenization and blockchain) to empower everyone to invest in a secure, flexible, transparent, and verifiable environment.',
      mission: 'Our Mission',
      missionText: 'To provide a global investment ecosystem that combines security, transparency, and technological innovation, enabling individuals and institutions to achieve sustainable growth within an environment supported by evaluation, insurance, and digital documentation.',
      values: 'Our Values',
      valuesSubtitle: 'The principles that guide everything we do',
      innovation: 'Innovation',
      innovationDesc: 'We continuously push the boundaries of financial technology to create better investment solutions.',
      security: 'Security',
      securityDesc: 'We prioritize the safety and protection of our investors\' assets through comprehensive security measures.',
      transparency: 'Transparency',
      transparencyDesc: 'We believe in complete transparency in all our operations and investment processes.',
      integrity: 'Integrity',
      integrityDesc: 'We conduct business with the highest ethical standards and maintain trust with all stakeholders.',
      excellence: 'Excellence',
      excellenceDesc: 'We strive for excellence in every aspect of our services and continuously improve our offerings.',
      globalPresence: 'Global Presence',
      globalSubtitle: 'Operating across multiple countries and expanding worldwide',
      uk: 'United Kingdom',
      ukDesc: 'Headquarters in London with multiple subsidiaries and strategic partnerships',
      usa: 'United States',
      usaDesc: 'Operations in New York and Wyoming with growing market presence',
      uae: 'United Arab Emirates',
      uaeDesc: 'Strategic presence in Abu Dhabi and Dubai serving MENA region',
      keyStats: 'Key Statistics',
      companies: '11 Companies',
      companiesDesc: 'Specialized subsidiaries across various sectors',
      sectors: '8 Sectors',
      sectorsDesc: 'Diversified portfolio covering multiple industries',
      countries: '3+ Countries',
      countriesDesc: 'Global operations with plans for expansion',
      investors: '10,000+ Investors',
      investorsDesc: 'Growing community of satisfied investors',
      leadership: 'Leadership Team',
      leadershipSubtitle: 'Meet the visionaries behind Capimax Group',
      ceo: 'Chief Executive Officer',
      ceoName: 'Ibrahim Gad',
      ceoDesc: 'Visionary leader with extensive experience in global finance and investment management.',
      timeline: 'Our Journey',
      timelineSubtitle: 'Key milestones in our growth story',
      founded: '2024 - Founded',
      foundedDesc: 'Capimax Group established with initial companies in UK',
      expansion: '2024 - Global Expansion',
      expansionDesc: 'Extended operations to USA and UAE markets',
      platform: '2024 - Platform Launch',
      platformDesc: 'Launched comprehensive digital investment platform',
      future: '2025 - Future Growth',
      futureDesc: 'Planned expansion into Asian and African markets',
      joinUs: 'Ready to Join Our Journey?',
      joinUsDesc: 'Be part of the future of global investment and build your wealth with confidence.',
      getStarted: 'Get Started',
      learnMore: 'Explore Opportunities'
    },
    ar: {
      pageTitle: 'حول مجموعة كابيماكس',
      pageSubtitle: 'نقود مستقبل الاستثمار العالمي من خلال الابتكار والأمان والشفافية.',
      pageDescription: 'اكتشف رحلتنا ورؤيتنا والتزامنا بإضفاء الطابع الديمقراطي على الفرص الاستثمارية في جميع أنحاء العالم.',
      ourStory: 'قصتنا',
      storyText: 'تأسست مجموعة كابيماكس برؤية لإضفاء الطابع الديمقراطي على الفرص الاستثمارية وإنشاء نظام بيئي آمن وشفاف حيث يمكن للجميع المشاركة في الأسواق العالمية.',
      vision: 'رؤيتنا',
      visionText: 'أن نكون المنصة الاستثمارية العالمية الرائدة في الملكية الجزئية والتمويل الجماعي، ودمج الأنظمة التقليدية والرقمية لتمكين الجميع من الاستثمار في بيئة آمنة.',
      mission: 'مهمتنا',
      missionText: 'توفير نظام بيئي استثماري عالمي يجمع بين الأمان والشفافية والابتكار التكنولوجي، مما يمكن الأفراد والمؤسسات من تحقيق نمو مستدام.',
      values: 'قيمنا',
      valuesSubtitle: 'المبادئ التي توجه كل ما نقوم به',
      innovation: 'الابتكار',
      innovationDesc: 'نواصل دفع حدود التكنولوجيا المالية لإنشاء حلول استثمارية أفضل.',
      security: 'الأمان',
      securityDesc: 'نعطي الأولوية لسلامة وحماية أصول مستثمرينا من خلال تدابير أمنية شاملة.',
      transparency: 'الشفافية',
      transparencyDesc: 'نؤمن بالشفافية الكاملة في جميع عملياتنا وعمليات الاستثمار.',
      integrity: 'النزاهة',
      integrityDesc: 'نمارس الأعمال بأعلى المعايير الأخلاقية ونحافظ على الثقة مع جميع أصحاب المصلحة.',
      excellence: 'التميز',
      excellenceDesc: 'نسعى للتميز في كل جانب من جوانب خدماتنا ونحسن عروضنا باستمرار.',
      globalPresence: 'الحضور العالمي',
      globalSubtitle: 'نعمل عبر عدة دول ونتوسع في جميع أنحاء العالم',
      uk: 'المملكة المتحدة',
      ukDesc: 'المقر الرئيسي في لندن مع عدة شركات تابعة وشراكات استراتيجية',
      usa: 'الولايات المتحدة',
      usaDesc: 'عمليات في نيويورك ووايومنغ مع حضور متنامي في السوق',
      uae: 'الإمارات العربية المتحدة',
      uaeDesc: 'حضور استراتيجي في أبوظبي ودبي يخدم منطقة الشرق الأوسط وشمال أفريقيا',
      keyStats: 'الإحصائيات الرئيسية',
      companies: '11 شركة',
      companiesDesc: 'شركات تابعة متخصصة عبر قطاعات مختلفة',
      sectors: '8 قطاعات',
      sectorsDesc: 'محفظة متنوعة تغطي صناعات متعددة',
      countries: '3+ دول',
      countriesDesc: 'عمليات عالمية مع خطط للتوسع',
      investors: '10,000+ مستثمر',
      investorsDesc: 'مجتمع متنامي من المستثمرين الراضين',
      leadership: 'فريق القيادة',
      leadershipSubtitle: 'تعرف على الرؤساء وراء مجموعة كابيماكس',
      ceo: 'الرئيس التنفيذي',
      ceoName: 'إبراهيم جاد',
      ceoDesc: 'قائد صاحب رؤية مع خبرة واسعة في التمويل العالمي وإدارة الاستثمارات.',
      timeline: 'رحلتنا',
      timelineSubtitle: 'المعالم الرئيسية في قصة نمونا',
      founded: '2024 - التأسيس',
      foundedDesc: 'تأسست مجموعة كابيماكس مع الشركات الأولية في المملكة المتحدة',
      expansion: '2024 - التوسع العالمي',
      expansionDesc: 'توسيع العمليات إلى أسواق الولايات المتحدة والإمارات',
      platform: '2024 - إطلاق المنصة',
      platformDesc: 'إطلاق منصة الاستثمار الرقمية الشاملة',
      future: '2025 - النمو المستقبلي',
      futureDesc: 'التوسع المخطط في الأسواق الآسيوية والأفريقية',
      joinUs: 'مستعد للانضمام إلى رحلتنا؟',
      joinUsDesc: 'كن جزءًا من مستقبل الاستثمار العالمي وابني ثروتك بثقة.',
      getStarted: 'ابدأ',
      learnMore: 'استكشف الفرص'
    }
  }

  const t = translations[language]

  // Core values data
  const values = [
    {
      icon: Zap,
      title: t.innovation,
      description: t.innovationDesc,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Shield,
      title: t.security,
      description: t.securityDesc,
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      icon: Eye,
      title: t.transparency,
      description: t.transparencyDesc,
      color: 'text-info',
      bgColor: 'bg-info/10'
    },
    {
      icon: Heart,
      title: t.integrity,
      description: t.integrityDesc,
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    },
    {
      icon: Award,
      title: t.excellence,
      description: t.excellenceDesc,
      color: 'text-success',
      bgColor: 'bg-success/10'
    }
  ]

  // Global presence data
  const locations = [
    {
      country: t.uk,
      description: t.ukDesc,
      icon: Building2,
      flag: '🇬🇧',
      status: 'Headquarters'
    },
    {
      country: t.usa,
      description: t.usaDesc,
      icon: BarChart3,
      flag: '🇺🇸',
      status: 'Operations'
    },
    {
      country: t.uae,
      description: t.uaeDesc,
      icon: Globe,
      flag: '🇦🇪',
      status: 'Strategic Hub'
    }
  ]

  // Statistics data
  const stats = [
    { 
      number: '11', 
      label: t.companies, 
      description: t.companiesDesc,
      icon: Building2,
      color: 'text-primary'
    },
    { 
      number: '8', 
      label: t.sectors, 
      description: t.sectorsDesc,
      icon: Target,
      color: 'text-success'
    },
    { 
      number: '3+', 
      label: t.countries, 
      description: t.countriesDesc,
      icon: Globe,
      color: 'text-info'
    },
    { 
      number: '10,000+', 
      label: t.investors, 
      description: t.investorsDesc,
      icon: Users,
      color: 'text-warning'
    }
  ]

  // Timeline data
  const timeline = [
    {
      year: '2024',
      title: t.founded,
      description: t.foundedDesc,
      icon: Building2,
      status: 'completed'
    },
    {
      year: '2024',
      title: t.expansion,
      description: t.expansionDesc,
      icon: Globe,
      status: 'completed'
    },
    {
      year: '2024',
      title: t.platform,
      description: t.platformDesc,
      icon: TrendingUp,
      status: 'completed'
    },
    {
      year: '2025',
      title: t.future,
      description: t.futureDesc,
      icon: Star,
      status: 'future'
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

  const cardHoverVariants = {
    rest: {
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
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
                About Us
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
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              {t.pageDescription}
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Enhanced Our Story Section */}
      <Section spacing="xl" className="relative bg-gradient-to-br from-background via-muted/5 to-card/10 dark:from-background dark:via-muted/10 dark:to-card/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-success/5 dark:bg-success/15 rounded-full blur-3xl" />
        
        <Container size="xl" className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-16"
          >
            <Grid cols={2} gap="xl" className="items-center">
              <motion.div variants={itemVariants} className="space-y-6">
                <div>
                  <Badge className="mb-4 bg-gradient-to-r from-primary/10 to-success/10 dark:from-primary/20 dark:to-success/20 text-primary border-primary/20 dark:border-primary/40">
                    {t.ourStory}
                  </Badge>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-foreground to-success bg-clip-text text-transparent">
                    Building the Future of Investment
                  </h2>
                </div>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {t.storyText}
                </p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <Card className="aspect-square border-0 bg-gradient-to-br from-card/50 to-card/20 dark:from-card/20 dark:to-card/5 backdrop-blur-sm hover:shadow-2xl dark:hover:shadow-primary/20 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-success/5 dark:from-primary/10 dark:to-success/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardContent className="relative p-8 h-full flex items-center justify-center">
                    <div className="text-center space-y-6">
                      <motion.div 
                        className="w-24 h-24 bg-gradient-to-br from-primary to-success rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <Building2 className="w-12 h-12 text-white" />
                      </motion.div>
                      <div className="space-y-2">
                        <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">Since 2024</div>
                        <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Growing Strong</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </motion.div>
        </Container>
      </Section>

      {/* Enhanced Vision & Mission Section */}
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
            <Grid cols={2} gap="xl">
              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="relative h-full border-0 bg-card/50 dark:bg-card/20 backdrop-blur-sm hover:bg-card/80 dark:hover:bg-card/40 hover:shadow-2xl dark:hover:shadow-primary/20 transition-all duration-500 overflow-hidden">
                  {/* Animated border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-success to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-[1px] bg-card dark:bg-card/20 rounded-[calc(var(--radius)-1px)]" />
                  </div>
                  
                  {/* Progress indicator */}
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-success transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  
                  <div className="relative">
                    <CardHeader className="pb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div 
                          className="p-4 bg-gradient-to-br from-primary/10 to-primary/20 dark:from-primary/20 dark:to-primary/30 rounded-2xl group-hover:from-primary/20 group-hover:to-primary/30 dark:group-hover:from-primary/30 dark:group-hover:to-primary/40 transition-all duration-500"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Target className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                        </motion.div>
                        <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">{t.vision}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base md:text-lg text-muted-foreground group-hover:text-foreground leading-relaxed transition-colors duration-300">
                        {t.visionText}
                      </CardDescription>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="relative h-full border-0 bg-card/50 dark:bg-card/20 backdrop-blur-sm hover:bg-card/80 dark:hover:bg-card/40 hover:shadow-2xl dark:hover:shadow-success/20 transition-all duration-500 overflow-hidden">
                  {/* Animated border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-success via-primary to-success opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-[1px] bg-card dark:bg-card/20 rounded-[calc(var(--radius)-1px)]" />
                  </div>
                  
                  {/* Progress indicator */}
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-success to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  
                  <div className="relative">
                    <CardHeader className="pb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div 
                          className="p-4 bg-gradient-to-br from-success/10 to-success/20 dark:from-success/20 dark:to-success/30 rounded-2xl group-hover:from-success/20 group-hover:to-success/30 dark:group-hover:from-success/30 dark:group-hover:to-success/40 transition-all duration-500"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <CheckCircle className="w-8 h-8 text-success group-hover:scale-110 transition-transform duration-300" />
                        </motion.div>
                        <CardTitle className="text-2xl font-bold group-hover:text-success transition-colors duration-300">{t.mission}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base md:text-lg text-muted-foreground group-hover:text-foreground leading-relaxed transition-colors duration-300">
                        {t.missionText}
                      </CardDescription>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            </Grid>
          </motion.div>
        </Container>
      </Section>

      {/* Enhanced Values Section */}
      <Section spacing="xl" className="relative bg-gradient-to-br from-background via-muted/5 to-card/10 dark:from-background dark:via-muted/10 dark:to-card/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-success/5 dark:bg-success/15 rounded-full blur-3xl" />
        
        <Container size="xl" className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-16"
          >
            <VStack gap="lg" align="center" className="text-center">
              <motion.div variants={itemVariants}>
                <Badge className="mb-4 bg-gradient-to-r from-primary/10 to-success/10 dark:from-primary/20 dark:to-success/20 text-primary border-primary/20 dark:border-primary/40">
                  Our Foundation
                </Badge>
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-foreground to-success bg-clip-text text-transparent">
                {t.values}
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                {t.valuesSubtitle}
              </motion.p>
            </VStack>

            <Grid cols={5} gap="lg">
              {values.map((value, index) => (
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
                      <CardContent className="pt-8 pb-6">
                        <VStack gap="lg" align="center">
                          <motion.div 
                            className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-success/10 dark:from-primary/20 dark:to-success/20 group-hover:from-primary/20 group-hover:to-success/20 dark:group-hover:from-primary/30 dark:group-hover:to-success/30 transition-all duration-500"
                            whileHover={{ scale: 1.15, rotate: 10 }}
                            transition={{ duration: 0.3 }}
                          >
                            <value.icon className={`h-8 w-8 ${value.color} group-hover:scale-110 transition-transform duration-300`} />
                          </motion.div>
                          <div className="space-y-3">
                            <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                            <p className="text-sm text-muted-foreground group-hover:text-foreground leading-relaxed transition-colors duration-300">
                              {value.description}
                            </p>
                          </div>
                          
                          {/* Progress indicator */}
                          <motion.div 
                            className="mt-4 h-1 bg-muted rounded-full overflow-hidden w-full"
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
                        </VStack>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Section>

      {/* Enhanced Key Statistics */}
      <Section spacing="xl" className="relative bg-gradient-to-br from-muted/10 via-card/5 to-background dark:from-muted/5 dark:to-card/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 dark:bg-primary/15 rounded-full blur-3xl" />
        <Container size="xl" className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-16"
          >
            <VStack gap="md" align="center" className="text-center">
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold">
                {t.keyStats}
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-muted-foreground">
                Numbers that reflect our growth and success
              </motion.p>
            </VStack>

            <Grid cols={4} gap="lg">
              {stats.map((stat, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <motion.div
                    initial="rest"
                    whileHover="hover"
                    variants={cardHoverVariants}
                  >
                    <Card className="text-center border-0 bg-gradient-to-br from-background to-muted/20">
                      <CardContent className="pt-8">
                        <VStack gap="md" align="center">
                          <div className="p-3 bg-gradient-to-br from-primary/10 to-success/10 rounded-xl">
                            <stat.icon className={`h-8 w-8 ${stat.color}`} />
                          </div>
                          <div className="space-y-2">
                            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
                              {stat.number}
                            </div>
                            <div className="font-semibold">{stat.label}</div>
                            <div className="text-sm text-muted-foreground">
                              {stat.description}
                            </div>
                          </div>
                        </VStack>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Section>

      {/* Global Presence */}
      <Section spacing="xl" className="relative bg-gradient-to-br from-background via-muted/5 to-card/10 dark:from-background dark:via-muted/10 dark:to-card/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-success/5 dark:bg-success/15 rounded-full blur-3xl" />
        <Container size="xl" className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-16"
          >
            <VStack gap="md" align="center" className="text-center">
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold">
                {t.globalPresence}
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-3xl">
                {t.globalSubtitle}
              </motion.p>
            </VStack>

            <Grid cols={3} gap="lg">
              {locations.map((location, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <motion.div
                    initial="rest"
                    whileHover="hover"
                    variants={cardHoverVariants}
                  >
                    <Card className="border-0 bg-gradient-to-br from-card to-card/80 h-full">
                      <CardContent className="pt-8">
                        <VStack gap="lg" align="center" className="text-center">
                          <div className="space-y-4">
                            <div className="text-4xl">{location.flag}</div>
                            <Badge variant="secondary" className="px-3 py-1 bg-primary/10 text-primary">
                              {location.status}
                            </Badge>
                          </div>
                          <div className="space-y-3">
                            <h3 className="text-xl font-bold">{location.country}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {location.description}
                            </p>
                          </div>
                        </VStack>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Section>

      {/* Timeline Section */}
      <Section spacing="xl" className="relative bg-muted/30 dark:bg-muted/10">
        <Container size="xl" className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-16"
          >
            <VStack gap="md" align="center" className="text-center">
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold">
                {t.timeline}
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-3xl">
                {t.timelineSubtitle}
              </motion.p>
            </VStack>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-success transform -translate-x-1/2 hidden md:block" />
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      <div className="flex-1">
                        <Card className={`border-0 bg-gradient-to-br from-card to-card/80 ${item.status === 'future' ? 'border border-primary/20' : ''}`}>
                          <CardContent className="pt-6">
                            <HStack gap="md" align="start">
                              <div className={`p-3 rounded-xl ${item.status === 'completed' ? 'bg-success/10' : 'bg-primary/10'}`}>
                                <item.icon className={`w-6 h-6 ${item.status === 'completed' ? 'text-success' : 'text-primary'}`} />
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <Badge variant={item.status === 'completed' ? 'default' : 'secondary'} className="text-xs">
                                    {item.year}
                                  </Badge>
                                  {item.status === 'completed' && (
                                    <CheckCircle className="w-4 h-4 text-success" />
                                  )}
                                </div>
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                              </div>
                            </HStack>
                          </CardContent>
                        </Card>
                      </div>
                      
                      {/* Center dot for timeline */}
                      <div className="hidden md:block">
                        <div className={`w-4 h-4 rounded-full border-4 ${item.status === 'completed' ? 'bg-success border-success' : 'bg-primary border-primary'}`} />
                      </div>
                      
                      <div className="flex-1 hidden md:block" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
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
                    {t.joinUs}
                  </h2>
                  <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed">
                    {t.joinUsDesc}
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
                    {t.getStarted}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button 
                  size="xl" 
                  variant="outline" 
                  className="group border-2 border-white/30 text-white hover:border-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl transition-all duration-300"
                  asChild
                >
                  <Link to="/companies">
                    {t.learnMore}
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

export default About
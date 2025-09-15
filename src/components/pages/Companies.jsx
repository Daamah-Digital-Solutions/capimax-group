import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Container } from '@/components/layout/Container'
import { Grid } from '@/components/layout/Grid'
import { VStack, HStack } from '@/components/layout/Stack'
import { Section } from '@/components/layout/Section'
import { motion } from 'framer-motion'
import { FloatingElements } from '@/components/enhanced/FloatingElements'
import { 
  Building2, 
  TrendingUp, 
  Coins, 
  Smartphone, 
  Shield, 
  Globe, 
  Search,
  ArrowRight,
  MapPin,
  Calendar,
  Users,
  ExternalLink,
  Filter,
  X
} from 'lucide-react'

const Companies = ({ language }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('all')

  const translations = {
    en: {
      pageTitle: 'Our Companies',
      pageSubtitle: 'Discover our portfolio of specialized companies across various sectors and countries.',
      searchPlaceholder: 'Search companies...',
      allCountries: 'All Countries',
      uk: 'United Kingdom',
      usa: 'United States',
      uae: 'United Arab Emirates',
      viewDetails: 'View Details',
      learnMore: 'Learn More',
      incorporated: 'Incorporated',
      director: 'Director',
      sector: 'Sector',
      location: 'Location',
      companyNumber: 'Company Number',
      subsidiaries: 'Direct Subsidiaries',
      partnerships: 'Strategic Partnerships',
      filterBy: 'Filter by Country',
      noResults: 'No companies found matching your search criteria.',
      clearFilters: 'Clear Filters'
    },
    ar: {
      pageTitle: 'شركاتنا',
      pageSubtitle: 'اكتشف محفظة شركاتنا المتخصصة عبر قطاعات ودول مختلفة.',
      searchPlaceholder: 'البحث في الشركات...',
      allCountries: 'جميع الدول',
      uk: 'المملكة المتحدة',
      usa: 'الولايات المتحدة',
      uae: 'دولة الإمارات العربية المتحدة',
      viewDetails: 'عرض التفاصيل',
      learnMore: 'تعلم المزيد',
      incorporated: 'تاريخ التأسيس',
      director: 'المدير',
      sector: 'القطاع',
      location: 'الموقع',
      companyNumber: 'رقم الشركة',
      subsidiaries: 'الشركات التابعة المباشرة',
      partnerships: 'الشراكات الاستراتيجية',
      filterBy: 'تصفية حسب الدولة',
      noResults: 'لم يتم العثور على شركات تطابق معايير البحث الخاصة بك.',
      clearFilters: 'مسح المرشحات'
    }
  }

  const t = translations[language]

  const companies = [
    {
      id: 'capimax-investments-uk',
      name: 'Capimax Investments Limited',
      country: 'UK',
      countryFlag: '🇬🇧',
      description: 'Digital investment platform for fractional ownership in real estate, precious metals, and global markets.',
      sector: 'Investment Management',
      icon: TrendingUp,
      color: 'bg-primary',
      companyNumber: '16099034',
      incorporated: '25th November 2024',
      director: 'Ibrahim Gad',
      location: 'London, UK',
      type: 'subsidiary',
      activities: ['Investment Management', 'Fund Management', 'Unit Trusts']
    },
    {
      id: 'capimax-financial-management',
      name: 'Capimax Financial Management LTD',
      country: 'UK',
      countryFlag: '🇬🇧',
      description: 'Financial services holding company providing comprehensive financial management solutions.',
      sector: 'Financial Services',
      icon: Building2,
      color: 'bg-success',
      companyNumber: '16099090',
      incorporated: '25th November 2024',
      director: 'Ibrahim Gad',
      location: 'London, UK',
      type: 'subsidiary',
      activities: ['Financial Management', 'Risk Evaluation', 'Financial Markets Administration']
    },
    {
      id: 'hcc-international',
      name: 'HCC International Company Limited',
      country: 'UK',
      countryFlag: '🇬🇧',
      description: 'Comprehensive insurance services including life insurance, non-life insurance, and reinsurance.',
      sector: 'Insurance',
      icon: Shield,
      color: 'bg-red-500',
      companyNumber: '16113542',
      incorporated: '2nd December 2024',
      director: 'Ibrahim Gad',
      location: 'London, UK',
      type: 'subsidiary',
      activities: ['Life Insurance', 'Non-life Insurance', 'Reinsurance']
    },
    {
      id: 'capimax-precious-metals',
      name: 'Capimax For Investments In Precious Metals And Minerals Limited',
      country: 'UK',
      countryFlag: '🇬🇧',
      description: 'Specialized investment company focusing on precious metals, gold, silver, and mineral investments.',
      sector: 'Precious Metals',
      icon: Coins,
      color: 'bg-warning',
      companyNumber: '16115521',
      incorporated: '3rd December 2024',
      director: 'Ibrahim Gad',
      location: 'London, UK',
      type: 'subsidiary',
      activities: ['Precious Metals Production', 'Wholesale of Metals', 'Metal Ores Trading']
    },
    {
      id: 'capimax-holding',
      name: 'Capimax Holding Limited',
      country: 'UK',
      countryFlag: '🇬🇧',
      description: 'Parent holding company managing all group companies and overseeing corporate governance.',
      sector: 'Holding Company',
      icon: Building2,
      color: 'bg-brand-tertiary',
      companyNumber: '16250665',
      incorporated: '13th February 2025',
      director: 'Ibrahim Gad',
      location: 'London, UK',
      type: 'subsidiary',
      activities: ['Financial Services Holding', 'Venture Capital', 'Financial Leasing']
    },
    {
      id: 'capimax-virtual-assets',
      name: 'Capi Max Virtual Assets LTD',
      country: 'UK',
      countryFlag: '🇬🇧',
      description: 'Licensed digital asset company managing cryptocurrencies, digital wallets, and virtual asset portfolios.',
      sector: 'Digital Assets',
      icon: Coins,
      color: 'bg-warning',
      companyNumber: '16465707',
      incorporated: '21st May 2025',
      director: 'Ibrahim Gad',
      location: 'London, UK',
      type: 'subsidiary',
      activities: ['Digital Asset Management', 'Fund Management', 'Financial Markets Administration']
    },
    {
      id: 'cim-financial-group',
      name: 'CIM Financial Group Limited',
      country: 'UK',
      countryFlag: '🇬🇧',
      description: 'Financial and accounting services, auditing, and documentation for developmental projects.',
      sector: 'Financial Services',
      icon: Building2,
      color: 'bg-indigo-500',
      companyNumber: '16465715',
      incorporated: '21st May 2025',
      director: 'Ibrahim Gad',
      location: 'London, UK',
      type: 'subsidiary',
      activities: ['Financial Services', 'Risk Evaluation', 'Accounting and Auditing']
    },
    {
      id: 'nova-digital-finance',
      name: 'Nova Digital Finance LTD',
      country: 'UK',
      countryFlag: '🇬🇧',
      description: 'Technical partner for digital banking services and comprehensive financial solutions.',
      sector: 'Digital Banking',
      icon: Smartphone,
      color: 'bg-teal-500',
      companyNumber: '16483755',
      incorporated: '29th May 2025',
      director: 'Ibrahim Gad',
      location: 'London, UK',
      type: 'subsidiary',
      activities: ['Financial Intermediation', 'Credit Granting', 'Digital Banking']
    },
    {
      id: 'capimax-fintech-blockchain',
      name: 'Capimax Fintech, Blockchain Limited',
      country: 'UK',
      countryFlag: '🇬🇧',
      description: 'Innovation arm developing solutions in digital payments, smart contracts, and asset tokenization.',
      sector: 'Fintech & Blockchain',
      icon: Smartphone,
      color: 'bg-cyan-500',
      companyNumber: '16538119',
      incorporated: '24th June 2025',
      director: 'Ibrahim Gad',
      location: 'London, UK',
      type: 'subsidiary',
      activities: ['Information Technology Services', 'Financial Services', 'Fund Management']
    },
    {
      id: 'capimax-development-llp',
      name: 'Capimax Development LLP',
      country: 'UK',
      countryFlag: '🇬🇧',
      description: 'Specialized real estate development company focusing on innovative residential and commercial projects.',
      sector: 'Real Estate Development',
      icon: Building2,
      color: 'bg-emerald-500',
      companyNumber: 'OC454650',
      incorporated: '26th November 2024',
      director: 'Ibrahim Gad, Sayed Ibrahim',
      location: 'London, UK',
      type: 'subsidiary',
      activities: ['Real Estate Development', 'Construction', 'Property Management']
    },
    {
      id: 'capimax-investments-usa',
      name: 'CAPIMAX INVESTMENTS LLC',
      country: 'USA',
      countryFlag: '🇺🇸',
      description: 'US operations for investment management and fund administration.',
      sector: 'Investment Management',
      icon: TrendingUp,
      color: 'bg-brand-primary',
      companyNumber: '2024-001559635',
      incorporated: '24th November 2024',
      director: 'Ibrahim Gad',
      location: 'Wyoming, USA',
      type: 'subsidiary',
      activities: ['Investment Management', 'Fund Administration', 'Asset Management']
    },
    {
      id: 'capimax-general-trading-usa',
      name: 'CAPIMAX FOR GENERAL TRADING LLC',
      country: 'USA',
      countryFlag: '🇺🇸',
      description: 'Diversified trading company providing supply, distribution, import, and export services.',
      sector: 'General Trading',
      icon: Globe,
      color: 'bg-gray-600',
      companyNumber: '7469500',
      incorporated: '21st November 2024',
      director: 'Ibrahim Gad',
      location: 'New York, USA',
      type: 'subsidiary',
      activities: ['General Trading', 'Import/Export', 'Supply Chain Management']
    },
    {
      id: 'capimax-investments-uae',
      name: 'CAPI MAX INVESTMENTS - L.L.C',
      country: 'UAE',
      countryFlag: '🇦🇪',
      description: 'UAE operations covering agricultural, real estate, commercial, and technology investments.',
      sector: 'Investment Management',
      icon: TrendingUp,
      color: 'bg-amber-600',
      companyNumber: 'CN-5639305',
      incorporated: '29th November 2024',
      director: 'Ibrahim Gad, Mohammed Bin Ibrahim A Alduhmush',
      location: 'Abu Dhabi, UAE',
      type: 'subsidiary',
      activities: ['Agricultural Investment', 'Real Estate Investment', 'Technology Investment']
    }
  ]

  const partnerships = [
    {
      id: 'tdh-developments',
      name: 'TDH Developments',
      description: 'Strategic partnership in real estate development for new projects.',
      sector: 'Real Estate Development',
      icon: Building2,
      color: 'bg-slate-500',
      type: 'partnership'
    },
    {
      id: 'elitegate-properties',
      name: 'EliteGate Properties',
      description: 'Marketing partnership in hotel properties and sustainable development.',
      sector: 'Real Estate',
      icon: Building2,
      color: 'bg-stone-500',
      type: 'partnership'
    },
    {
      id: 'profit-max-investment',
      name: 'Profit Max Investment',
      description: 'Administrative partnership in global investment management.',
      sector: 'Investment Management',
      icon: TrendingUp,
      color: 'bg-rose-500',
      type: 'partnership'
    },
    {
      id: 'assurax-insurance',
      name: 'Assurax Insurance',
      description: 'Integrated insurance and risk assessment services.',
      sector: 'Insurance',
      icon: Shield,
      color: 'bg-violet-500',
      type: 'partnership'
    }
  ]

  const allCompanies = [...companies, ...partnerships]

  const filteredCompanies = allCompanies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.sector.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCountry = selectedCountry === 'all' || 
                          company.country === selectedCountry ||
                          company.type === 'partnership'
    
    return matchesSearch && matchesCountry
  })

  const subsidiaries = filteredCompanies.filter(c => c.type === 'subsidiary')
  const partnershipsList = filteredCompanies.filter(c => c.type === 'partnership')

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
                Our Portfolio
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
              Explore our comprehensive portfolio of specialized companies operating across multiple sectors and international markets.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Enhanced Search and Filters */}
      <Section spacing="md" className="relative bg-gradient-to-br from-muted/10 via-card/5 to-background dark:from-muted/5 dark:to-card/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.01] dark:opacity-[0.03]" />
        
        <Container size="xl" className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <Card className="border-0 bg-card/50 dark:bg-card/20 backdrop-blur-sm shadow-xl">
              <CardContent className="p-6 space-y-6">
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between"
                >
                  <div className="relative flex-1 max-w-lg">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder={t.searchPlaceholder}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-12 h-12 border-0 bg-muted/30 dark:bg-muted/20 focus:bg-background transition-colors duration-300 rounded-xl"
                    />
                  </div>
                  
                  <HStack gap="md" align="center">
                    <div className="flex items-center gap-3">
                      <Filter className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-muted-foreground">{t.filterBy}</span>
                    </div>
                    <select
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                      className="px-4 py-3 border-0 bg-muted/30 dark:bg-muted/20 rounded-lg focus:bg-background transition-colors duration-300"
                    >
                      <option value="all">{t.allCountries}</option>
                      <option value="UK">{t.uk}</option>
                      <option value="USA">{t.usa}</option>
                      <option value="UAE">{t.uae}</option>
                    </select>
                    
                    {(searchTerm || selectedCountry !== 'all') && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSearchTerm('')
                          setSelectedCountry('all')
                        }}
                        className="group hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-300"
                      >
                        <X className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                        {t.clearFilters}
                      </Button>
                    )}
                  </HStack>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
                  <Badge className="px-3 py-1 bg-gradient-to-r from-primary/10 to-success/10 dark:from-primary/20 dark:to-success/20 text-primary border-primary/20 dark:border-primary/40">
                    Total: {filteredCompanies.length} {filteredCompanies.length === 1 ? 'Company' : 'Companies'}
                  </Badge>
                  {subsidiaries.length > 0 && (
                    <Badge variant="secondary" className="px-3 py-1 bg-muted/50 dark:bg-muted/30">
                      {subsidiaries.length} Subsidiaries
                    </Badge>
                  )}
                  {partnershipsList.length > 0 && (
                    <Badge variant="secondary" className="px-3 py-1 bg-muted/50 dark:bg-muted/30">
                      {partnershipsList.length} Partnerships
                    </Badge>
                  )}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </Section>

      {/* Enhanced Direct Subsidiaries */}
      {subsidiaries.length > 0 && (
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
                <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
                  {t.subsidiaries}
                </motion.h2>
                <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-3xl">
                  Fully owned companies operating under the Capimax Group umbrella, each specializing in their respective sectors.
                </motion.p>
              </VStack>

              <Grid cols={3} gap="lg">
                {subsidiaries.map((company, index) => (
                  <motion.div key={company.id} variants={itemVariants}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      className="group"
                    >
                      <Card className="relative h-full border-0 bg-card/50 dark:bg-card/20 backdrop-blur-sm hover:bg-card/80 dark:hover:bg-card/40 hover:shadow-2xl dark:hover:shadow-primary/20 transition-all duration-500 group overflow-hidden">
                        {/* Animated border */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-success to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute inset-[1px] bg-card dark:bg-card/20 rounded-[calc(var(--radius)-1px)]" />
                        </div>
                        
                        {/* Progress indicator */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-success transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        
                        <div className="relative">
                        <CardHeader>
                          <HStack gap="md" align="start" className="mb-4">
                            <motion.div 
                              className={`w-14 h-14 ${company.color} rounded-2xl flex items-center justify-center`}
                              whileHover={{ rotate: 5, scale: 1.05 }}
                              transition={{ duration: 0.3 }}
                            >
                              <company.icon className="h-7 w-7 text-white" />
                            </motion.div>
                            <div className="flex-1">
                              <HStack gap="sm" align="center" className="mb-2">
                                <span className="text-3xl">{company.countryFlag}</span>
                                <Badge variant="secondary" className="px-2 py-1 bg-primary/10 text-primary border border-primary/20">
                                  {company.country}
                                </Badge>
                              </HStack>
                              <Badge variant="outline" className="text-xs text-muted-foreground">
                                {company.sector}
                              </Badge>
                            </div>
                          </HStack>
                          <CardTitle className="text-lg line-clamp-2 hover:text-primary transition-colors duration-300">
                            {company.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <CardDescription className="line-clamp-3 leading-relaxed">
                            {company.description}
                          </CardDescription>
                          
                          <VStack gap="sm" className="text-sm text-muted-foreground">
                            <HStack gap="sm" align="center">
                              <Calendar className="h-4 w-4 text-primary" />
                              <span>{t.incorporated}: {company.incorporated}</span>
                            </HStack>
                            <HStack gap="sm" align="center">
                              <MapPin className="h-4 w-4 text-primary" />
                              <span>{company.location}</span>
                            </HStack>
                            <HStack gap="sm" align="center">
                              <Users className="h-4 w-4 text-primary" />
                              <span>{t.director}: {company.director}</span>
                            </HStack>
                          </VStack>

                          <div className="flex flex-wrap gap-1">
                            {company.activities?.slice(0, 2).map((activity, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs hover:bg-primary/5 transition-colors">
                                {activity}
                              </Badge>
                            ))}
                            {company.activities?.length > 2 && (
                              <Badge variant="outline" className="text-xs bg-muted/50">
                                +{company.activities.length - 2} more
                              </Badge>
                            )}
                          </div>

                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full group border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300" 
                            asChild
                          >
                            <Link to={`/company/${company.id}`}>
                              {t.viewDetails}
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        </CardContent>
                        </div>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </Grid>
            </motion.div>
          </Container>
        </Section>
      )}

      {/* Enhanced Strategic Partnerships */}
      {partnershipsList.length > 0 && (
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
                <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-success to-primary bg-clip-text text-transparent">
                  {t.partnerships}
                </motion.h2>
                <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-3xl">
                  Strategic partnerships and collaborations that enhance our service offerings and expand our global reach.
                </motion.p>
              </VStack>

              <Grid cols={4} gap="lg">
                {partnershipsList.map((partner, index) => (
                  <motion.div key={partner.id} variants={itemVariants}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      className="group"
                    >
                      <Card className="relative h-full border-0 bg-card/40 dark:bg-card/10 backdrop-blur-sm hover:bg-card/80 dark:hover:bg-card/30 hover:shadow-2xl dark:hover:shadow-success/20 transition-all duration-500 group text-center overflow-hidden">
                        {/* Animated border */}
                        <div className="absolute inset-0 bg-gradient-to-r from-success via-primary to-success opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute inset-[1px] bg-card dark:bg-card/10 rounded-[calc(var(--radius)-1px)]" />
                        </div>
                        
                        <div className="relative">
                        <CardHeader>
                          <motion.div 
                            className={`w-16 h-16 ${partner.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <partner.icon className="h-8 w-8 text-white" />
                          </motion.div>
                          <CardTitle className="text-lg line-clamp-2 hover:text-primary transition-colors duration-300">
                            {partner.name}
                          </CardTitle>
                          <Badge variant="secondary" className="px-2 py-1 text-xs bg-success/10 text-success border border-success/20">
                            {partner.sector}
                          </Badge>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <CardDescription className="line-clamp-4 leading-relaxed">
                            {partner.description}
                          </CardDescription>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full group border-success/20 hover:border-success hover:bg-success/5 transition-all duration-300"
                          >
                            {t.learnMore}
                            <ExternalLink className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                          </Button>
                        </CardContent>
                        </div>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </Grid>
            </motion.div>
          </Container>
        </Section>
      )}

      {/* Enhanced No Results */}
      {filteredCompanies.length === 0 && (
        <Section spacing="xl" className="relative bg-gradient-to-br from-background via-muted/5 to-card/10 dark:from-background dark:via-muted/10 dark:to-card/20">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
          <div className="absolute top-0 left-0 w-72 h-72 bg-success/5 dark:bg-success/15 rounded-full blur-3xl" />
          <Container size="xl" className="relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="text-center max-w-lg mx-auto"
            >
              <motion.div variants={itemVariants} className="space-y-6">
                <motion.div
                  animate={{ 
                    y: [-10, 10, -10],
                    rotate: [-5, 5, -5] 
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="w-24 h-24 bg-gradient-to-br from-primary/20 to-success/20 rounded-2xl flex items-center justify-center mx-auto"
                >
                  <Building2 className="h-12 w-12 text-muted-foreground" />
                </motion.div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-muted-foreground">{t.noResults}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Try adjusting your search terms or filters to find the companies you're looking for.
                  </p>
                </div>
                <Button
                  size="lg"
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCountry('all')
                  }}
                  className="group bg-gradient-to-r from-primary to-success hover:from-primary/90 hover:to-success/90 text-white px-8 py-3 rounded-xl"
                >
                  <X className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                  {t.clearFilters}
                </Button>
              </motion.div>
            </motion.div>
          </Container>
        </Section>
      )}
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
                    Ready to Partner With Us?
                  </h2>
                  <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed">
                    Join our network of successful companies and strategic partnerships. Together, we build the future of global investment.
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
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button 
                  size="xl" 
                  variant="outline" 
                  className="group border-2 border-white/30 text-white hover:border-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl transition-all duration-300"
                  asChild
                >
                  <Link to="/investors">
                    Explore Opportunities
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

export default Companies


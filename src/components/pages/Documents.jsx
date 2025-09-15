import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Container } from '@/components/layout/Container'
import { Grid } from '@/components/layout/Grid'
import { VStack, HStack } from '@/components/layout/Stack'
import { Section } from '@/components/layout/Section'
import { motion } from 'framer-motion'
import { 
  FileText, 
  Download, 
  Search, 
  Shield, 
  Award, 
  Building2,
  Calendar,
  Eye,
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Filter
} from 'lucide-react'
import { FloatingElements } from '@/components/enhanced/FloatingElements'

const Documents = ({ language }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const translations = {
    en: {
      pageTitle: 'Documents & Licenses',
      pageSubtitle: 'Access our comprehensive collection of legal documents, licenses, and certifications.',
      searchPlaceholder: 'Search documents...',
      allCategories: 'All Categories',
      licenses: 'Licenses',
      certificates: 'Certificates',
      reports: 'Reports',
      legal: 'Legal Documents',
      download: 'Download',
      view: 'View',
      verified: 'Verified',
      category: 'Category',
      issueDate: 'Issue Date',
      expiryDate: 'Expiry Date',
      status: 'Status',
      active: 'Active',
      noResults: 'No documents found matching your search criteria.',
      clearFilters: 'Clear Filters'
    },
    ar: {
      pageTitle: 'الوثائق والتراخيص',
      pageSubtitle: 'الوصول إلى مجموعتنا الشاملة من الوثائق القانونية والتراخيص والشهادات.',
      searchPlaceholder: 'البحث في الوثائق...',
      allCategories: 'جميع الفئات',
      licenses: 'التراخيص',
      certificates: 'الشهادات',
      reports: 'التقارير',
      legal: 'الوثائق القانونية',
      download: 'تحميل',
      view: 'عرض',
      verified: 'موثق',
      category: 'الفئة',
      issueDate: 'تاريخ الإصدار',
      expiryDate: 'تاريخ الانتهاء',
      status: 'الحالة',
      active: 'نشط',
      noResults: 'لم يتم العثور على وثائق تطابق معايير البحث الخاصة بك.',
      clearFilters: 'مسح المرشحات'
    }
  }

  const t = translations[language]

  const documents = [
    // UK Company Documents
    {
      id: 'capimax-investments-uk-cert',
      title: 'Capimax Investments Limited - Certificate of Incorporation',
      description: 'Official certificate of incorporation for Capimax Investments Limited (UK)',
      category: 'licenses',
      type: 'Certificate of Incorporation',
      country: 'UK',
      companyNumber: '16099034',
      issueDate: '2024-11-25',
      expiryDate: null,
      status: 'active',
      verified: true,
      fileSize: '2.1 MB',
      format: 'PDF'
    },
    {
      id: 'capimax-financial-cert',
      title: 'Capimax Financial Management LTD - Certificate of Incorporation',
      description: 'Official certificate of incorporation for Capimax Financial Management LTD',
      category: 'licenses',
      type: 'Certificate of Incorporation',
      country: 'UK',
      companyNumber: '16099090',
      issueDate: '2024-11-25',
      expiryDate: null,
      status: 'active',
      verified: true,
      fileSize: '1.8 MB',
      format: 'PDF'
    },
    {
      id: 'hcc-international-cert',
      title: 'HCC International Company Limited - Certificate of Incorporation',
      description: 'Official certificate of incorporation for HCC International Company Limited',
      category: 'licenses',
      type: 'Certificate of Incorporation',
      country: 'UK',
      companyNumber: '16113542',
      issueDate: '2024-12-02',
      expiryDate: null,
      status: 'active',
      verified: true,
      fileSize: '2.3 MB',
      format: 'PDF'
    },
    {
      id: 'capimax-precious-metals-cert',
      title: 'Capimax Precious Metals & Minerals Limited - Certificate',
      description: 'Certificate of incorporation for precious metals investment company',
      category: 'licenses',
      type: 'Certificate of Incorporation',
      country: 'UK',
      companyNumber: '16115521',
      issueDate: '2024-12-03',
      expiryDate: null,
      status: 'active',
      verified: true,
      fileSize: '2.0 MB',
      format: 'PDF'
    },
    {
      id: 'capimax-holding-cert',
      title: 'Capimax Holding Limited - Certificate of Incorporation',
      description: 'Official certificate for the parent holding company',
      category: 'licenses',
      type: 'Certificate of Incorporation',
      country: 'UK',
      companyNumber: '16250665',
      issueDate: '2025-02-13',
      expiryDate: null,
      status: 'active',
      verified: true,
      fileSize: '1.9 MB',
      format: 'PDF'
    },
    {
      id: 'capimax-virtual-assets-cert',
      title: 'Capi Max Virtual Assets LTD - Certificate of Incorporation',
      description: 'Certificate for digital asset management company',
      category: 'licenses',
      type: 'Certificate of Incorporation',
      country: 'UK',
      companyNumber: '16465707',
      issueDate: '2025-05-21',
      expiryDate: null,
      status: 'active',
      verified: true,
      fileSize: '2.2 MB',
      format: 'PDF'
    },
    {
      id: 'cim-financial-cert',
      title: 'CIM Financial Group Limited - Certificate of Incorporation',
      description: 'Certificate for financial services and auditing company',
      category: 'licenses',
      type: 'Certificate of Incorporation',
      country: 'UK',
      companyNumber: '16465715',
      issueDate: '2025-05-21',
      expiryDate: null,
      status: 'active',
      verified: true,
      fileSize: '2.4 MB',
      format: 'PDF'
    },
    {
      id: 'nova-digital-cert',
      title: 'Nova Digital Finance LTD - Certificate of Incorporation',
      description: 'Certificate for digital banking and fintech company',
      category: 'licenses',
      type: 'Certificate of Incorporation',
      country: 'UK',
      companyNumber: '16483755',
      issueDate: '2025-05-29',
      expiryDate: null,
      status: 'active',
      verified: true,
      fileSize: '2.1 MB',
      format: 'PDF'
    },
    {
      id: 'capimax-fintech-cert',
      title: 'Capimax Fintech, Blockchain Limited - Certificate',
      description: 'Certificate for blockchain and fintech solutions company',
      category: 'licenses',
      type: 'Certificate of Incorporation',
      country: 'UK',
      companyNumber: '16538119',
      issueDate: '2025-06-24',
      expiryDate: null,
      status: 'active',
      verified: true,
      fileSize: '2.0 MB',
      format: 'PDF'
    },
    {
      id: 'capimax-development-cert',
      title: 'Capimax Development LLP - Certificate of Incorporation',
      description: 'Certificate for real estate development partnership',
      category: 'licenses',
      type: 'LLP Certificate',
      country: 'UK',
      companyNumber: 'OC454650',
      issueDate: '2024-11-26',
      expiryDate: null,
      status: 'active',
      verified: true,
      fileSize: '1.7 MB',
      format: 'PDF'
    },
    // USA Company Documents
    {
      id: 'capimax-investments-usa-cert',
      title: 'CAPIMAX INVESTMENTS LLC - Certificate of Good Standing',
      description: 'Wyoming LLC certificate of good standing',
      category: 'licenses',
      type: 'Certificate of Good Standing',
      country: 'USA',
      companyNumber: '2024-001559635',
      issueDate: '2024-11-26',
      expiryDate: null,
      status: 'active',
      verified: true,
      fileSize: '1.5 MB',
      format: 'PDF'
    },
    {
      id: 'capimax-trading-usa-cert',
      title: 'CAPIMAX FOR GENERAL TRADING LLC - Certificate',
      description: 'New York LLC certificate of good standing',
      category: 'licenses',
      type: 'Certificate of Good Standing',
      country: 'USA',
      companyNumber: '7469500',
      issueDate: '2024-11-25',
      expiryDate: '2026-11-30',
      status: 'active',
      verified: true,
      fileSize: '1.3 MB',
      format: 'PDF'
    },
    // UAE Company Documents
    {
      id: 'capimax-investments-uae-license',
      title: 'CAPI MAX INVESTMENTS - L.L.C - Business License',
      description: 'UAE business license for investment activities',
      category: 'licenses',
      type: 'Business License',
      country: 'UAE',
      companyNumber: 'CN-5639305',
      issueDate: '2024-11-29',
      expiryDate: '2025-11-28',
      status: 'active',
      verified: true,
      fileSize: '2.8 MB',
      format: 'PDF'
    },
    // Awards and Certifications
    {
      id: 'fractional-investment-award',
      title: 'Fractional Investment Excellence Award',
      description: 'Award for best investment platform providing innovative fractional ownership solutions',
      category: 'certificates',
      type: 'Award Certificate',
      issuer: 'CIM Financial Group',
      issueDate: '2024-12-01',
      expiryDate: null,
      status: 'active',
      verified: true,
      fileSize: '1.2 MB',
      format: 'PDF'
    },
    {
      id: 'platform-security-seal',
      title: 'Certified Platform Security Seal',
      description: 'Security certification for platform infrastructure and data protection',
      category: 'certificates',
      type: 'Security Certificate',
      issuer: 'Assurax Insurance UK',
      issueDate: '2024-11-15',
      expiryDate: '2025-11-15',
      status: 'active',
      verified: true,
      fileSize: '0.8 MB',
      format: 'PDF'
    },
    {
      id: 'blockchain-excellence-cert',
      title: 'Blockchain Finance Excellence Certificate',
      description: 'Certification for using blockchain technologies in investment management',
      category: 'certificates',
      type: 'Technology Certificate',
      issuer: 'Nova Digital Finance',
      issueDate: '2024-12-10',
      expiryDate: '2026-12-10',
      status: 'active',
      verified: true,
      fileSize: '1.1 MB',
      format: 'PDF'
    },
    {
      id: 'cyber-resilience-cert',
      title: 'CapiMax Cyber Resilience Certificate',
      description: 'Certification for cybersecurity practices and incident response capabilities',
      category: 'certificates',
      type: 'Security Certificate',
      issuer: 'HCC International Insurance UK',
      issueDate: '2024-11-20',
      expiryDate: '2025-11-20',
      status: 'active',
      verified: true,
      fileSize: '1.4 MB',
      format: 'PDF'
    },
    // Financial Reports
    {
      id: 'annual-report-2024',
      title: 'Capimax Group Annual Report 2024',
      description: 'Comprehensive annual report covering all group companies and financial performance',
      category: 'reports',
      type: 'Annual Report',
      issueDate: '2024-12-31',
      expiryDate: null,
      status: 'active',
      verified: true,
      fileSize: '15.2 MB',
      format: 'PDF'
    },
    {
      id: 'compliance-report-2024',
      title: 'Regulatory Compliance Report 2024',
      description: 'Report on regulatory compliance across all jurisdictions',
      category: 'reports',
      type: 'Compliance Report',
      issueDate: '2024-12-15',
      expiryDate: null,
      status: 'active',
      verified: true,
      fileSize: '8.7 MB',
      format: 'PDF'
    }
  ]

  const categories = [
    { value: 'all', label: t.allCategories },
    { value: 'licenses', label: t.licenses },
    { value: 'certificates', label: t.certificates },
    { value: 'reports', label: t.reports },
    { value: 'legal', label: t.legal }
  ]

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.type.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-success'
      case 'expired': return 'bg-red-500'
      case 'pending': return 'bg-warning'
      default: return 'bg-gray-500'
    }
  }

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'licenses': return Building2
      case 'certificates': return Award
      case 'reports': return FileText
      case 'legal': return Shield
      default: return FileText
    }
  }

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
                Legal & Compliance
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
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                  <motion.div variants={itemVariants} className="relative flex-1 max-w-md">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <Search className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <Input
                      placeholder={t.searchPlaceholder}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-12 h-12 border-0 bg-muted/30 dark:bg-muted/20 focus:bg-background transition-colors duration-300"
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Filter className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-muted-foreground">{t.category}:</span>
                    </div>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-4 py-2 border-0 bg-muted/30 dark:bg-muted/20 rounded-lg focus:bg-background transition-colors duration-300"
                    >
                      {categories.map(category => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                    {(searchTerm || selectedCategory !== 'all') && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-300"
                        onClick={() => {
                          setSearchTerm('')
                          setSelectedCategory('all')
                        }}
                      >
                        {t.clearFilters}
                      </Button>
                    )}
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </Section>

      {/* Enhanced Documents Grid */}
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
            {filteredDocuments.length > 0 ? (
              <Grid cols={3} gap="lg">
                {filteredDocuments.map((doc, index) => {
                  const CategoryIcon = getCategoryIcon(doc.category)
                  return (
                    <motion.div 
                      key={doc.id} 
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
                                    <CategoryIcon className="h-7 w-7 text-primary group-hover:scale-110 transition-transform duration-300" />
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
                              
                              <div className="flex items-center space-x-2">
                                {doc.verified && (
                                  <motion.div 
                                    className="p-1 bg-success/10 dark:bg-success/20 rounded-full group-hover:bg-success/20 dark:group-hover:bg-success/30 transition-all duration-300"
                                    whileHover={{ scale: 1.2 }}
                                  >
                                    <CheckCircle className="h-4 w-4 text-success" />
                                  </motion.div>
                                )}
                                <div className={`w-4 h-4 ${getStatusColor(doc.status)} rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg`}></div>
                              </div>
                            </div>
                            
                            <CardTitle className="text-lg font-bold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                              {doc.title}
                            </CardTitle>
                            <CardDescription className="text-muted-foreground group-hover:text-foreground leading-relaxed transition-colors duration-300 line-clamp-2">
                              {doc.description}
                            </CardDescription>
                          </CardHeader>
                          
                          <CardContent className="space-y-6">
                            <div className="flex items-center justify-between p-3 bg-muted/50 dark:bg-muted/20 rounded-lg group-hover:bg-primary/5 dark:group-hover:bg-primary/10 transition-all duration-300">
                              <Badge className="bg-muted/50 dark:bg-muted/30 hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors duration-300">
                                {doc.type}
                              </Badge>
                              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                {doc.format} • {doc.fileSize}
                              </span>
                            </div>

                            <div className="space-y-3 text-sm">
                              <div className="flex items-center justify-between p-2 bg-muted/30 dark:bg-muted/10 rounded-lg transition-colors duration-300">
                                <span className="text-muted-foreground">{t.issueDate}:</span>
                                <span className="font-medium">{new Date(doc.issueDate).toLocaleDateString()}</span>
                              </div>
                              {doc.expiryDate && (
                                <div className="flex items-center justify-between p-2 bg-muted/30 dark:bg-muted/10 rounded-lg transition-colors duration-300">
                                  <span className="text-muted-foreground">{t.expiryDate}:</span>
                                  <span className="font-medium">{new Date(doc.expiryDate).toLocaleDateString()}</span>
                                </div>
                              )}
                              {doc.companyNumber && (
                                <div className="flex items-center justify-between p-2 bg-muted/30 dark:bg-muted/10 rounded-lg transition-colors duration-300">
                                  <span className="text-muted-foreground">Company #:</span>
                                  <span className="font-mono text-xs font-medium">{doc.companyNumber}</span>
                                </div>
                              )}
                              {doc.issuer && (
                                <div className="flex items-center justify-between p-2 bg-muted/30 dark:bg-muted/10 rounded-lg transition-colors duration-300">
                                  <span className="text-muted-foreground">Issued by:</span>
                                  <span className="text-xs font-medium">{doc.issuer}</span>
                                </div>
                              )}
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
                                whileInView={{ width: doc.verified ? '100%' : '75%' }}
                                transition={{ duration: 1, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                              />
                            </motion.div>

                            <div className="flex space-x-3 pt-4 border-t border-gray-200/50">
                              <Button variant="outline" size="sm" className="flex-1 hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-300 group/btn">
                                <Eye className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                                {t.view}
                              </Button>
                              <Button size="sm" className="flex-1 bg-gradient-to-r from-primary to-success hover:from-primary/90 hover:to-success/90 shadow-lg hover:shadow-xl transition-all duration-300 group/btn">
                                <Download className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                                {t.download}
                              </Button>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    </motion.div>
                  )
                })}
              </Grid>
            ) : (
              <motion.div variants={itemVariants} className="text-center py-16">
                <motion.div 
                  className="p-6 bg-gradient-to-br from-muted/20 to-muted/30 dark:from-muted/10 dark:to-muted/20 rounded-2xl inline-block mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <FileText className="h-16 w-16 text-muted-foreground mx-auto" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-muted-foreground">{t.noResults}</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search terms or filters.
                </p>
                <Button
                  className="group hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-300"
                  variant="outline"
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('all')
                  }}
                >
                  {t.clearFilters}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            )}
          </motion.div>
        </Container>
      </Section>

      {/* Enhanced Document Stats */}
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
                  Documentation Overview
                </Badge>
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-foreground to-success bg-clip-text text-transparent">
                Document Overview
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Comprehensive documentation across all our operations
              </motion.p>
            </VStack>

            <Grid cols={4} gap="lg">
              {[
                { 
                  number: documents.filter(d => d.category === 'licenses').length, 
                  label: 'Active Licenses', 
                  icon: Building2, 
                  color: 'text-primary' 
                },
                { 
                  number: documents.filter(d => d.category === 'certificates').length, 
                  label: 'Certifications', 
                  icon: Award, 
                  color: 'text-warning' 
                },
                { 
                  number: documents.filter(d => d.verified).length, 
                  label: 'Verified Documents', 
                  icon: CheckCircle, 
                  color: 'text-success' 
                },
                { 
                  number: '3', 
                  label: 'Jurisdictions', 
                  icon: Shield, 
                  color: 'text-info' 
                }
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

      <FloatingElements />
    </div>
  )
}

export default Documents


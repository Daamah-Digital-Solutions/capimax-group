import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Container } from '@/components/layout/Container'
import { Grid } from '@/components/layout/Grid'
import { VStack, HStack } from '@/components/layout/Stack'
import { PageHeader, FloatingElements } from '@/components/enhanced/PageHeader'
import { AnimatedSection, itemVariants, gridVariants, cardHoverVariants } from '@/components/enhanced/AnimatedSection'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Search, 
  ArrowRight, 
  Clock,
  User,
  Tag,
  TrendingUp,
  Building2,
  Globe,
  Award,
  Filter,
  X,
  Zap,
  Eye,
  Star,
  BookOpen,
  FileText
} from 'lucide-react'

const News = ({ language }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const translations = {
    en: {
      pageTitle: 'News & Updates',
      pageSubtitle: 'Stay informed with the latest news, announcements, and developments from Capimax Group.',
      searchPlaceholder: 'Search news...',
      allCategories: 'All Categories',
      company: 'Company News',
      investment: 'Investment Updates',
      partnership: 'Partnerships',
      awards: 'Awards & Recognition',
      readMore: 'Read More',
      readTime: 'min read',
      publishedBy: 'Published by',
      category: 'Category',
      noResults: 'No news articles found matching your search criteria.',
      clearFilters: 'Clear Filters',
      latestNews: 'Latest News',
      featuredNews: 'Featured News'
    },
    ar: {
      pageTitle: 'الأخبار والتحديثات',
      pageSubtitle: 'ابق على اطلاع بآخر الأخبار والإعلانات والتطورات من مجموعة كابيماكس.',
      searchPlaceholder: 'البحث في الأخبار...',
      allCategories: 'جميع الفئات',
      company: 'أخبار الشركة',
      investment: 'تحديثات الاستثمار',
      partnership: 'الشراكات',
      awards: 'الجوائز والتقدير',
      readMore: 'اقرأ المزيد',
      readTime: 'دقيقة قراءة',
      publishedBy: 'نشر بواسطة',
      category: 'الفئة',
      noResults: 'لم يتم العثور على مقالات إخبارية تطابق معايير البحث الخاصة بك.',
      clearFilters: 'مسح المرشحات',
      latestNews: 'آخر الأخبار',
      featuredNews: 'الأخبار المميزة'
    }
  }

  const t = translations[language]

  const newsArticles = [
    {
      id: 'global-expansion-2024',
      title: 'Capimax Group Announces Strategic Expansion into Asian and African Markets',
      excerpt: 'The company reveals ambitious plans to extend operations across emerging markets, targeting significant growth in digital asset management and real estate investment.',
      content: 'Capimax Group today announced its strategic expansion into key Asian and African markets, marking a significant milestone in the company\'s global growth strategy...',
      category: 'company',
      author: 'Ibrahim Gad',
      publishDate: '2024-12-01',
      readTime: 5,
      featured: true,
      tags: ['Expansion', 'Global Markets', 'Strategy'],
      image: '/api/placeholder/600/300'
    },
    {
      id: 'tokenization-platform-launch',
      title: 'Revolutionary Asset Tokenization Platform Goes Live',
      excerpt: 'Capimax launches cutting-edge blockchain platform enabling fractional ownership of real estate, precious metals, and digital assets.',
      content: 'The new tokenization platform represents a breakthrough in democratizing investment access, allowing investors to own fractions of high-value assets...',
      category: 'investment',
      author: 'CIM Financial Group',
      publishDate: '2024-11-28',
      readTime: 4,
      featured: true,
      tags: ['Blockchain', 'Tokenization', 'Digital Assets'],
      image: '/api/placeholder/600/300'
    },
    {
      id: 'insurance-partnership',
      title: 'Strategic Partnership with Leading Insurance Provider Enhances Security',
      excerpt: 'New partnership with HCC International provides comprehensive coverage and enhanced security measures for all investment platforms.',
      content: 'This strategic alliance strengthens our commitment to investor protection and platform security, providing bank-level insurance coverage...',
      category: 'partnership',
      author: 'Capimax Group',
      publishDate: '2024-11-25',
      readTime: 3,
      featured: false,
      tags: ['Insurance', 'Security', 'Partnership'],
      image: '/api/placeholder/600/300'
    },
    {
      id: 'fractional-investment-award',
      title: 'Capimax Receives Fractional Investment Excellence Award',
      excerpt: 'Recognition for innovative approach to fractional ownership and democratizing investment opportunities.',
      content: 'The award recognizes Capimax\'s pioneering work in making high-value investments accessible to a broader range of investors...',
      category: 'awards',
      author: 'Awards Committee',
      publishDate: '2024-11-20',
      readTime: 2,
      featured: false,
      tags: ['Awards', 'Recognition', 'Innovation'],
      image: '/api/placeholder/600/300'
    },
    {
      id: 'uk-subsidiaries-incorporation',
      title: 'Capimax Group Incorporates Multiple UK Subsidiaries',
      excerpt: 'Strategic incorporation of specialized companies across investment management, fintech, and precious metals sectors.',
      content: 'The incorporation of multiple UK subsidiaries demonstrates our commitment to regulatory compliance and specialized service delivery...',
      category: 'company',
      author: 'Legal Department',
      publishDate: '2024-11-15',
      readTime: 4,
      featured: false,
      tags: ['Incorporation', 'UK', 'Subsidiaries'],
      image: '/api/placeholder/600/300'
    },
    {
      id: 'blockchain-excellence-certification',
      title: 'Nova Digital Finance Achieves Blockchain Excellence Certification',
      excerpt: 'Technical partner receives prestigious certification for blockchain finance solutions and digital wallet security.',
      content: 'This certification validates our technical capabilities and commitment to maintaining the highest standards in blockchain technology...',
      category: 'awards',
      author: 'Nova Digital Finance',
      publishDate: '2024-11-10',
      readTime: 3,
      featured: false,
      tags: ['Blockchain', 'Certification', 'Technology'],
      image: '/api/placeholder/600/300'
    },
    {
      id: 'uae-operations-launch',
      title: 'Capimax Launches Operations in United Arab Emirates',
      excerpt: 'New UAE subsidiary focuses on agricultural, real estate, and technology investments in the Middle East region.',
      content: 'The launch of CAPI MAX INVESTMENTS - L.L.C in Abu Dhabi marks our entry into the dynamic Middle Eastern market...',
      category: 'company',
      author: 'UAE Operations Team',
      publishDate: '2024-11-05',
      readTime: 4,
      featured: false,
      tags: ['UAE', 'Middle East', 'Operations'],
      image: '/api/placeholder/600/300'
    },
    {
      id: 'platform-security-certification',
      title: 'Capimax Platform Receives Certified Security Seal',
      excerpt: 'Comprehensive security audit results in prestigious platform security certification from Assurax Insurance.',
      content: 'The security certification covers all aspects of our platform infrastructure, data protection, and investor asset security...',
      category: 'awards',
      author: 'Security Team',
      publishDate: '2024-10-30',
      readTime: 3,
      featured: false,
      tags: ['Security', 'Certification', 'Platform'],
      image: '/api/placeholder/600/300'
    }
  ]

  const categories = [
    { value: 'all', label: t.allCategories },
    { value: 'company', label: t.company },
    { value: 'investment', label: t.investment },
    { value: 'partnership', label: t.partnership },
    { value: 'awards', label: t.awards }
  ]

  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const featuredArticles = filteredArticles.filter(article => article.featured)
  const regularArticles = filteredArticles.filter(article => !article.featured)

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'company': return Building2
      case 'investment': return TrendingUp
      case 'partnership': return Globe
      case 'awards': return Award
      default: return Building2
    }
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case 'company': return 'bg-primary'
      case 'investment': return 'bg-success'
      case 'partnership': return 'bg-brand-tertiary'
      case 'awards': return 'bg-warning'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="min-h-screen">
      {/* Enhanced Page Header */}
      <PageHeader
        title={t.pageTitle}
        subtitle={t.pageSubtitle}
        description="Stay ahead with the latest developments, strategic announcements, and industry insights from Capimax Group."
        badge="News & Media"
        variant="gradient"
        size="lg"
      />

      {/* Enhanced Search and Filters */}
      <AnimatedSection spacing="md" background="muted">
        <Container size="xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={gridVariants}
            className="space-y-6"
          >
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
                  className="pl-12 h-12 bg-card/50 backdrop-blur-sm border-primary/20 focus:border-primary text-base rounded-xl"
                />
              </div>
              
              <HStack gap="md" align="center">
                <div className="flex items-center gap-3">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">{t.category}</span>
                </div>
                <motion.select
                  whileHover={{ scale: 1.02 }}
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-primary/20 rounded-xl bg-card/50 backdrop-blur-sm focus:border-primary focus:outline-none transition-all duration-300"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </motion.select>
                
                {(searchTerm || selectedCategory !== 'all') && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSearchTerm('')
                        setSelectedCategory('all')
                      }}
                      className="group h-12 px-4 border-destructive/20 hover:border-destructive hover:bg-destructive/5 rounded-xl"
                    >
                      <X className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                      {t.clearFilters}
                    </Button>
                  </motion.div>
                )}
              </HStack>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="px-3 py-1 bg-primary/10 text-primary border border-primary/20">
                Total: {filteredArticles.length} {filteredArticles.length === 1 ? 'Article' : 'Articles'}
              </Badge>
              {featuredArticles.length > 0 && (
                <Badge variant="outline" className="px-3 py-1">
                  <Star className="w-3 h-3 mr-1" />
                  {featuredArticles.length} Featured
                </Badge>
              )}
              <Badge variant="outline" className="px-3 py-1">
                <BookOpen className="w-3 h-3 mr-1" />
                {regularArticles.length} Latest
              </Badge>
            </motion.div>
          </motion.div>
        </Container>
      </AnimatedSection>

      {/* Enhanced Featured News */}
      {featuredArticles.length > 0 && (
        <AnimatedSection spacing="xl">
          <Container size="xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={gridVariants}
              className="space-y-16"
            >
              <VStack gap="md" align="center" className="text-center">
                <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
                  {t.featuredNews}
                </motion.h2>
                <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-3xl">
                  Highlighted stories and major announcements from Capimax Group's expanding global operations.
                </motion.p>
              </VStack>

              <Grid cols={2} gap="lg">
                {featuredArticles.map((article, index) => {
                  const CategoryIcon = getCategoryIcon(article.category)
                  return (
                    <motion.div key={article.id} variants={itemVariants}>
                      <motion.div
                        initial="rest"
                        whileHover="hover"
                        variants={cardHoverVariants}
                      >
                        <Card className="h-full border-0 bg-gradient-to-br from-card to-card/80 overflow-hidden">
                          <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            <motion.div 
                              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full"
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                              <HStack gap="sm" align="center">
                                <Star className="w-3 h-3 text-warning" />
                                <span className="text-xs font-medium text-primary">Featured</span>
                              </HStack>
                            </motion.div>
                          </div>
                          <CardHeader>
                            <HStack gap="md" align="start" className="mb-4">
                              <motion.div 
                                className={`p-3 ${getCategoryColor(article.category)} rounded-xl`}
                                whileHover={{ rotate: 5, scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                              >
                                <CategoryIcon className="h-5 w-5 text-white" />
                              </motion.div>
                              <div className="flex-1">
                                <Badge variant="secondary" className="mb-2 px-2 py-1 text-xs bg-primary/10 text-primary border border-primary/20">
                                  {categories.find(c => c.value === article.category)?.label}
                                </Badge>
                                <HStack gap="sm" align="center" className="text-xs text-muted-foreground">
                                  <Calendar className="h-3 w-3" />
                                  <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                                </HStack>
                              </div>
                            </HStack>
                            <CardTitle className="text-xl line-clamp-2 hover:text-primary transition-colors duration-300">
                              {article.title}
                            </CardTitle>
                            <CardDescription className="line-clamp-3 leading-relaxed">
                              {article.excerpt}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <HStack gap="md" align="center" className="text-sm text-muted-foreground">
                              <HStack gap="sm" align="center">
                                <Clock className="h-4 w-4 text-primary" />
                                <span>{article.readTime} {t.readTime}</span>
                              </HStack>
                              <HStack gap="sm" align="center">
                                <User className="h-4 w-4 text-primary" />
                                <span className="line-clamp-1">{article.author}</span>
                              </HStack>
                            </HStack>
                            
                            <div className="flex flex-wrap gap-2">
                              {article.tags.slice(0, 3).map((tag, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs hover:bg-primary/5 transition-colors">
                                  {tag}
                                </Badge>
                              ))}
                            </div>

                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="w-full group border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                            >
                              {t.readMore}
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </motion.div>
                  )
                })}
              </Grid>
            </motion.div>
          </Container>
        </AnimatedSection>
      )}

      {/* Enhanced Latest News */}
      {regularArticles.length > 0 && (
        <AnimatedSection spacing="xl" background="muted">
          <Container size="xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={gridVariants}
              className="space-y-16"
            >
              <VStack gap="md" align="center" className="text-center">
                <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold">
                  {t.latestNews}
                </motion.h2>
                <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-3xl">
                  Stay updated with the latest developments, partnerships, and achievements from across our global operations.
                </motion.p>
              </VStack>

              <Grid cols={3} gap="lg">
                {regularArticles.map((article, index) => {
                  const CategoryIcon = getCategoryIcon(article.category)
                  return (
                    <motion.div key={article.id} variants={itemVariants}>
                      <motion.div
                        initial="rest"
                        whileHover="hover"
                        variants={cardHoverVariants}
                      >
                        <Card className="h-full border-0 bg-gradient-to-br from-background to-card/50">
                          <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-t-lg relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                          </div>
                          <CardHeader>
                            <HStack gap="md" align="start" className="mb-4">
                              <motion.div 
                                className={`p-2 ${getCategoryColor(article.category)} rounded-xl`}
                                whileHover={{ rotate: 5, scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                              >
                                <CategoryIcon className="h-4 w-4 text-white" />
                              </motion.div>
                              <div className="flex-1">
                                <Badge variant="secondary" className="mb-2 px-2 py-1 text-xs">
                                  {categories.find(c => c.value === article.category)?.label}
                                </Badge>
                                <HStack gap="sm" align="center" className="text-xs text-muted-foreground">
                                  <Calendar className="h-3 w-3" />
                                  <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                                </HStack>
                              </div>
                            </HStack>
                            <CardTitle className="text-lg line-clamp-2 hover:text-primary transition-colors duration-300">
                              {article.title}
                            </CardTitle>
                            <CardDescription className="line-clamp-3 leading-relaxed">
                              {article.excerpt}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <HStack gap="md" align="center" className="text-sm text-muted-foreground">
                              <HStack gap="sm" align="center">
                                <Clock className="h-4 w-4 text-primary" />
                                <span>{article.readTime} {t.readTime}</span>
                              </HStack>
                              <HStack gap="sm" align="center">
                                <User className="h-4 w-4 text-primary" />
                                <span className="line-clamp-1 text-xs">{article.author}</span>
                              </HStack>
                            </HStack>
                            
                            <div className="flex flex-wrap gap-1">
                              {article.tags.slice(0, 2).map((tag, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs hover:bg-primary/5 transition-colors">
                                  {tag}
                                </Badge>
                              ))}
                              {article.tags.length > 2 && (
                                <Badge variant="outline" className="text-xs bg-muted/50">
                                  +{article.tags.length - 2}
                                </Badge>
                              )}
                            </div>

                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="w-full group border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                            >
                              {t.readMore}
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </motion.div>
                  )
                })}
              </Grid>
            </motion.div>
          </Container>
        </AnimatedSection>
      )}

      {/* Enhanced No Results */}
      {filteredArticles.length === 0 && (
        <AnimatedSection spacing="xl">
          <Container size="xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={gridVariants}
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
                  <FileText className="h-12 w-12 text-muted-foreground" />
                </motion.div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-muted-foreground">{t.noResults}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Try adjusting your search terms or explore different categories to find the news you're looking for.
                  </p>
                </div>
                <Button
                  size="lg"
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('all')
                  }}
                  className="group bg-gradient-to-r from-primary to-success hover:from-primary/90 hover:to-success/90 text-white px-8 py-3 rounded-xl"
                >
                  <X className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                  {t.clearFilters}
                </Button>
              </motion.div>
            </motion.div>
          </Container>
        </AnimatedSection>
      )}
      {/* Enhanced Newsletter CTA */}
      <AnimatedSection 
        spacing="xl" 
        className="bg-gradient-to-br from-primary via-primary to-success text-white"
        hasPattern
      >
        <Container size="xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={gridVariants}
          >
            <VStack gap="xl" align="center" className="text-center">
              <motion.div variants={itemVariants}>
                <VStack gap="md" align="center">
                  <h2 className="text-3xl md:text-5xl font-bold text-white">
                    Stay Informed
                  </h2>
                  <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed">
                    Subscribe to our newsletter for the latest updates on investments, partnerships, and company developments delivered directly to your inbox.
                  </p>
                </VStack>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg"
              >
                <div className="relative flex-1">
                  <Input
                    placeholder="Enter your email address"
                    className="h-12 px-4 bg-white/10 border-white/20 text-white placeholder:text-white/70 backdrop-blur-sm rounded-xl"
                  />
                </div>
                <Button 
                  size="xl" 
                  variant="secondary" 
                  className="group bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 shrink-0"
                >
                  Subscribe
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </VStack>
          </motion.div>
        </Container>

        <FloatingElements />
      </AnimatedSection>
    </div>
  )
}

export default News


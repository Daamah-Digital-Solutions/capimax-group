import { useState } from 'react'
import {
  Calendar,
  Search,
  ArrowRight,
  Clock,
  User,
  TrendingUp,
  Building2,
  Globe,
  Award,
  X,
  Star,
  FileText,
} from 'lucide-react'
import { PageHero, Band, Marker, Reveal, BTN } from '@/components/editorial'

const News = ({ language }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const translations = {
    en: {
      pageTitle: 'News & ',
      pageTitleAccent: 'updates.',
      pageEyebrow: 'News & Media',
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
      latestNews: 'Latest ',
      latestNewsAccent: 'news.',
      featuredNews: 'Featured ',
      featuredNewsAccent: 'news.',
      featuredMarker: 'Featured news',
      latestMarker: 'Latest news',
      filterMarker: 'Browse the archive',
      featuredBody: "Highlighted stories and major announcements from Capimax Group's expanding global operations.",
      latestBody: 'Stay updated with the latest developments, partnerships, and achievements from across our global operations.',
      newsletterMarker: 'Stay informed',
      newsletterTitle: 'Stay ',
      newsletterAccent: 'informed.',
      newsletterDesc: 'Subscribe to our newsletter for the latest updates on investments, partnerships, and company developments delivered directly to your inbox.',
      subscribe: 'Subscribe',
      articles: 'Articles',
      article: 'Article',
      featuredLabel: 'Featured',
    },
    ar: {
      pageTitle: 'الأخبار ',
      pageTitleAccent: 'والتحديثات.',
      pageEyebrow: 'الأخبار والإعلام',
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
      latestNews: 'آخر ',
      latestNewsAccent: 'الأخبار.',
      featuredNews: 'الأخبار ',
      featuredNewsAccent: 'المميزة.',
      featuredMarker: 'الأخبار المميزة',
      latestMarker: 'آخر الأخبار',
      filterMarker: 'تصفح الأرشيف',
      featuredBody: 'قصص بارزة وإعلانات رئيسية من عمليات مجموعة كابيماكس العالمية المتنامية.',
      latestBody: 'ابق على اطلاع بآخر التطورات والشراكات والإنجازات عبر عملياتنا العالمية.',
      newsletterMarker: 'ابق على اطلاع',
      newsletterTitle: 'ابق على ',
      newsletterAccent: 'اطلاع.',
      newsletterDesc: 'اشترك في نشرتنا الإخبارية لتصلك آخر التحديثات حول الاستثمارات والشراكات وتطورات الشركة مباشرة إلى بريدك.',
      subscribe: 'اشترك',
      articles: 'مقالات',
      article: 'مقال',
      featuredLabel: 'مميز',
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
      author: 'Capimax Group',
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

  const categoryLabel = (category) => categories.find(c => c.value === category)?.label

  const hasFilters = searchTerm || selectedCategory !== 'all'
  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('all')
  }

  return (
    <div className="bg-cream text-ink">
      <PageHero
        eyebrow={t.pageEyebrow}
        title={t.pageTitle}
        accent={t.pageTitleAccent}
        subtitle={t.pageSubtitle}
      />

      {/* ===================================================== FILTERS */}
      <Band tone="paper">
        <Reveal>
          <Marker num="01" label={t.filterMarker} light />
        </Reveal>

        <Reveal className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/40" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent border border-[color:var(--line-dark)] pl-11 pr-4 py-3 text-ink placeholder:text-ink/40 focus:border-primary outline-none transition-colors"
            />
          </div>
          <div className="flex items-center gap-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-transparent border border-[color:var(--line-dark)] px-4 py-3 text-ink focus:border-primary outline-none transition-colors"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>{category.label}</option>
              ))}
            </select>
            {hasFilters && (
              <button onClick={clearFilters} className={BTN.ghostDark}>
                <X className="w-4 h-4" />
                {t.clearFilters}
              </button>
            )}
          </div>
        </Reveal>

        <Reveal className="mt-8 flex flex-wrap gap-6 mono-label text-ink/45" delay={0.05}>
          <span style={{ fontSize: '0.62rem' }}>
            {filteredArticles.length} {filteredArticles.length === 1 ? t.article : t.articles}
          </span>
          {featuredArticles.length > 0 && (
            <span style={{ fontSize: '0.62rem' }} className="inline-flex items-center gap-1.5 text-primary">
              <Star className="w-3 h-3" /> {featuredArticles.length} {t.featuredLabel}
            </span>
          )}
        </Reveal>
      </Band>

      {/* ===================================================== FEATURED */}
      {featuredArticles.length > 0 && (
        <Band tone="light">
          <Reveal className="grid lg:grid-cols-2 gap-10 items-end">
            <div>
              <Marker num="02" label={t.featuredMarker} light />
              <h2 className="font-display font-medium leading-[1.04]" style={{ fontSize: 'clamp(2.2rem,4.5vw,4rem)', letterSpacing: '-0.025em' }}>
                {t.featuredNews}<span className="accent-em">{t.featuredNewsAccent}</span>
              </h2>
            </div>
            <p className="text-lg text-ink/70 leading-relaxed lg:pb-2">{t.featuredBody}</p>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-2 border-t border-l border-[color:var(--line-dark)]">
            {featuredArticles.map((article, index) => {
              const CategoryIcon = getCategoryIcon(article.category)
              return (
                <Reveal key={article.id} delay={(index % 2) * 0.05}>
                  <article className="group flex flex-col h-full p-8 border-b border-r border-[color:var(--line-dark)] hover:bg-[rgba(47,173,111,0.05)] transition-colors relative">
                    <span className="absolute top-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-500" />
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2">
                        <CategoryIcon className="w-5 h-5 text-primary" />
                        <span className="mono-label text-ink/45" style={{ fontSize: '0.6rem' }}>{categoryLabel(article.category)}</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 mono-label text-primary" style={{ fontSize: '0.6rem' }}>
                        <Star className="w-3 h-3" /> {t.featuredLabel}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-2xl font-medium leading-snug text-ink group-hover:text-primary transition-colors">{article.title}</h3>
                    <p className="mt-4 text-ink/65 leading-relaxed flex-1">{article.excerpt}</p>

                    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink/55">
                      <span className="inline-flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-primary" />{new Date(article.publishDate).toLocaleDateString()}</span>
                      <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-primary" />{article.readTime} {t.readTime}</span>
                      <span className="inline-flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-primary" />{article.author}</span>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {article.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="mono-label text-ink/45 border border-[color:var(--line-dark)] px-2.5 py-1" style={{ fontSize: '0.58rem' }}>{tag}</span>
                      ))}
                    </div>

                    <button className="group/btn mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary self-start">
                      {t.readMore}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </Band>
      )}

      {/* ===================================================== LATEST */}
      {regularArticles.length > 0 && (
        <Band tone="dark">
          <Reveal className="grid lg:grid-cols-2 gap-10 items-end">
            <div>
              <Marker num="03" label={t.latestMarker} />
              <h2 className="font-display font-medium leading-[1.04] text-sand" style={{ fontSize: 'clamp(2.2rem,4.5vw,4rem)', letterSpacing: '-0.025em' }}>
                {t.latestNews}<span className="accent-em">{t.latestNewsAccent}</span>
              </h2>
            </div>
            <p className="text-lg text-sand/70 leading-relaxed lg:pb-2">{t.latestBody}</p>
          </Reveal>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[color:var(--line-sand)]">
            {regularArticles.map((article, index) => {
              const CategoryIcon = getCategoryIcon(article.category)
              return (
                <Reveal key={article.id} delay={(index % 3) * 0.05}>
                  <article className="group flex flex-col h-full p-7 border-b border-r border-[color:var(--line-sand)] hover:bg-[rgba(47,173,111,0.05)] transition-colors">
                    <div className="flex items-center justify-between">
                      <CategoryIcon className="w-5 h-5 text-primary" />
                      <span className="mono-label text-sand/40" style={{ fontSize: '0.6rem' }}>{categoryLabel(article.category)}</span>
                    </div>

                    <h3 className="mt-5 font-display text-lg font-medium leading-snug text-sand group-hover:text-primary transition-colors">{article.title}</h3>
                    <p className="mt-3 text-sm text-sand/60 leading-relaxed flex-1">{article.excerpt}</p>

                    <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-sand/55">
                      <span className="inline-flex items-center gap-1.5"><Calendar className="w-3 h-3 text-primary" />{new Date(article.publishDate).toLocaleDateString()}</span>
                      <span className="inline-flex items-center gap-1.5"><Clock className="w-3 h-3 text-primary" />{article.readTime} {t.readTime}</span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {article.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="mono-label text-sand/45 border border-[color:var(--line-sand)] px-2.5 py-1" style={{ fontSize: '0.56rem' }}>{tag}</span>
                      ))}
                    </div>

                    <button className="group/btn mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary self-start">
                      {t.readMore}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </Band>
      )}

      {/* ===================================================== NO RESULTS */}
      {filteredArticles.length === 0 && (
        <Band tone="light">
          <Reveal className="text-center py-20 border border-[color:var(--line-dark)]">
            <FileText className="w-14 h-14 text-ink/25 mx-auto" />
            <h3 className="mt-6 font-display text-2xl font-medium text-ink">{t.noResults}</h3>
            <p className="mt-3 text-ink/60 max-w-md mx-auto">Try adjusting your search terms or explore different categories.</p>
            <button onClick={clearFilters} className={`group mt-8 ${BTN.forest}`}>
              <X className="w-4 h-4" />
              {t.clearFilters}
            </button>
          </Reveal>
        </Band>
      )}

      {/* ===================================================== NEWSLETTER */}
      <Band tone="pitch" className="relative overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-[40rem] h-[40rem] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(47,173,111,0.09), transparent 60%)' }} />
        <Reveal className="relative max-w-2xl">
          <Marker num="04" label={t.newsletterMarker} />
          <h2 className="font-display font-medium leading-[1.02] text-sand" style={{ fontSize: 'clamp(2.4rem,5vw,4.5rem)', letterSpacing: '-0.03em' }}>
            {t.newsletterTitle}<span className="accent-em">{t.newsletterAccent}</span>
          </h2>
          <p className="mt-6 text-lg text-sand/70 leading-relaxed">{t.newsletterDesc}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-transparent border border-[color:var(--line-sand)] px-4 py-3 text-sand placeholder:text-sand/40 focus:border-primary outline-none transition-colors"
            />
            <button className={`group ${BTN.sand}`}>
              {t.subscribe}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </Reveal>
      </Band>
    </div>
  )
}

export default News

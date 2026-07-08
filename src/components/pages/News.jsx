import { useState } from 'react'
import {
  Calendar,
  Search,
  ArrowRight,
  Clock,
  Rocket,
  Newspaper,
  Building2,
  Globe,
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
      pageTitleAccent: 'media.',
      pageEyebrow: 'News & Media',
      pageSubtitle: 'Press coverage, announcements, and platform milestones from Capimax Group Holding and its licensed companies and platforms across the USA and UK.',
      searchPlaceholder: 'Search news & media...',
      allCategories: 'All Categories',
      company: 'Company News',
      launches: 'Platform Launches',
      media: 'Media Coverage',
      partnership: 'Partnerships',
      readMore: 'Read More',
      category: 'Category',
      noResults: 'No items found matching your search criteria.',
      clearFilters: 'Clear Filters',
      latestNews: 'Latest ',
      latestNewsAccent: 'items.',
      featuredNews: 'Featured ',
      featuredNewsAccent: 'coverage.',
      featuredMarker: 'Featured coverage',
      latestMarker: 'Latest items',
      filterMarker: 'Browse the archive',
      featuredBody: 'Highlighted press coverage and major announcements from across the Capimax Group ecosystem. Real coverage is being added as it is confirmed with the client.',
      latestBody: 'Company news, platform launches, and media mentions from across the group. This archive is a placeholder until confirmed press items are supplied.',
      newsletterMarker: 'Stay informed',
      newsletterTitle: 'Stay ',
      newsletterAccent: 'informed.',
      newsletterDesc: 'Subscribe for the latest news, platform launches, and media coverage from Capimax Group and its platforms, delivered directly to your inbox.',
      subscribe: 'Subscribe',
      articles: 'Items',
      article: 'Item',
      featuredLabel: 'Featured',
      placeholderNote: 'Placeholder — confirmed press items pending from the client.',
      sourcePending: 'Source link pending',
      viewSource: 'View source',
    },
    ar: {
      pageTitle: 'الأخبار ',
      pageTitleAccent: 'والإعلام.',
      pageEyebrow: 'الأخبار والإعلام',
      pageSubtitle: 'التغطية الإعلامية والإعلانات ومحطات المنصات من مجموعة كابيماكس القابضة وشركاتها ومنصاتها المرخّصة في الولايات المتحدة والمملكة المتحدة.',
      searchPlaceholder: 'البحث في الأخبار والإعلام...',
      allCategories: 'جميع الفئات',
      company: 'أخبار الشركة',
      launches: 'إطلاق المنصات',
      media: 'التغطية الإعلامية',
      partnership: 'الشراكات',
      readMore: 'اقرأ المزيد',
      category: 'الفئة',
      noResults: 'لم يتم العثور على عناصر تطابق معايير البحث الخاصة بك.',
      clearFilters: 'مسح المرشحات',
      latestNews: 'آخر ',
      latestNewsAccent: 'العناصر.',
      featuredNews: 'التغطية ',
      featuredNewsAccent: 'المميزة.',
      featuredMarker: 'التغطية المميزة',
      latestMarker: 'آخر العناصر',
      filterMarker: 'تصفح الأرشيف',
      featuredBody: 'تغطية إعلامية بارزة وإعلانات رئيسية من منظومة مجموعة كابيماكس. تُضاف التغطية الفعلية عند تأكيدها مع العميل.',
      latestBody: 'أخبار الشركة وإطلاق المنصات والتغطيات الإعلامية عبر المجموعة. هذا الأرشيف مبدئي إلى حين توفير عناصر التغطية المؤكّدة.',
      newsletterMarker: 'ابق على اطلاع',
      newsletterTitle: 'ابق على ',
      newsletterAccent: 'اطلاع.',
      newsletterDesc: 'اشترك لتصلك آخر الأخبار وإطلاق المنصات والتغطية الإعلامية من مجموعة كابيماكس ومنصاتها مباشرة إلى بريدك.',
      subscribe: 'اشترك',
      articles: 'عناصر',
      article: 'عنصر',
      featuredLabel: 'مميز',
      placeholderNote: 'عنصر مبدئي — بانتظار عناصر التغطية المؤكّدة من العميل.',
      sourcePending: 'رابط المصدر قيد الإعداد',
      viewSource: 'عرض المصدر',
    }
  }

  const t = translations[language]

  // NOTE: Placeholder press/media items. Real coverage (title, outlet, date,
  // source link) is pending from the client. Each item is structured so a
  // confirmed press mention can drop straight in: set `title`, `outlet`,
  // `sourceUrl`, `publishDate`, and flip `placeholder` to false.
  const placeholderExcerpt =
    'Placeholder entry reserved for confirmed press coverage. Once the client supplies the outlet, headline, and source link, this item will link directly to the original article.'
  const newsArticles = [
    {
      id: 'placeholder-featured-coverage',
      title: '[Press coverage — source pending]',
      excerpt: placeholderExcerpt,
      category: 'media',
      author: t.placeholderNote,
      outlet: 'Outlet pending',
      sourceUrl: null,
      publishDate: '2026-01-01',
      featured: true,
      tags: ['Placeholder', 'Media Coverage'],
      image: '/api/placeholder/600/300'
    },
    {
      id: 'placeholder-platform-launch',
      title: '[Platform launch announcement — pending]',
      excerpt: placeholderExcerpt,
      category: 'launches',
      author: t.placeholderNote,
      outlet: 'Outlet pending',
      sourceUrl: null,
      publishDate: '2026-01-01',
      featured: true,
      tags: ['Placeholder', 'Platform Launches'],
      image: '/api/placeholder/600/300'
    },
    {
      id: 'placeholder-company-news',
      title: '[Company news — pending]',
      excerpt: placeholderExcerpt,
      category: 'company',
      author: t.placeholderNote,
      outlet: 'Outlet pending',
      sourceUrl: null,
      publishDate: '2026-01-01',
      featured: false,
      tags: ['Placeholder', 'Company News'],
      image: '/api/placeholder/600/300'
    },
    {
      id: 'placeholder-media-mention',
      title: '[Media mention — source pending]',
      excerpt: placeholderExcerpt,
      category: 'media',
      author: t.placeholderNote,
      outlet: 'Outlet pending',
      sourceUrl: null,
      publishDate: '2026-01-01',
      featured: false,
      tags: ['Placeholder', 'Media Coverage'],
      image: '/api/placeholder/600/300'
    },
    {
      id: 'placeholder-partnership',
      title: '[Partnership announcement — pending]',
      excerpt: placeholderExcerpt,
      category: 'partnership',
      author: t.placeholderNote,
      outlet: 'Outlet pending',
      sourceUrl: null,
      publishDate: '2026-01-01',
      featured: false,
      tags: ['Placeholder', 'Partnerships'],
      image: '/api/placeholder/600/300'
    },
    {
      id: 'placeholder-platform-milestone',
      title: '[Platform milestone — pending]',
      excerpt: placeholderExcerpt,
      category: 'launches',
      author: t.placeholderNote,
      outlet: 'Outlet pending',
      sourceUrl: null,
      publishDate: '2026-01-01',
      featured: false,
      tags: ['Placeholder', 'Platform Launches'],
      image: '/api/placeholder/600/300'
    }
  ]

  const categories = [
    { value: 'all', label: t.allCategories },
    { value: 'company', label: t.company },
    { value: 'launches', label: t.launches },
    { value: 'media', label: t.media },
    { value: 'partnership', label: t.partnership }
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
      case 'launches': return Rocket
      case 'media': return Newspaper
      case 'partnership': return Globe
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
                      <span className="inline-flex items-center gap-1.5"><Newspaper className="w-3.5 h-3.5 text-primary" />{article.outlet}</span>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {article.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="mono-label text-ink/45 border border-[color:var(--line-dark)] px-2.5 py-1" style={{ fontSize: '0.58rem' }}>{tag}</span>
                      ))}
                    </div>

                    {article.sourceUrl ? (
                      <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer" className="group/btn mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary self-start">
                        {t.viewSource}
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-ink/40 self-start">
                        <Clock className="w-3.5 h-3.5" />
                        {t.sourcePending}
                      </span>
                    )}
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
                      <span className="inline-flex items-center gap-1.5"><Newspaper className="w-3 h-3 text-primary" />{article.outlet}</span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {article.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="mono-label text-sand/45 border border-[color:var(--line-sand)] px-2.5 py-1" style={{ fontSize: '0.56rem' }}>{tag}</span>
                      ))}
                    </div>

                    {article.sourceUrl ? (
                      <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer" className="group/btn mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary self-start">
                        {t.viewSource}
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-sand/40 self-start">
                        <Clock className="w-3 h-3" />
                        {t.sourcePending}
                      </span>
                    )}
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

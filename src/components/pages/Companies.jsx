import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Search, X, Building2, TrendingUp, Shield } from 'lucide-react'
import { companyRegistry, companyIds } from '@/data/companies'
import { companyContent } from '@/data/content'
import { getCompanyLogo } from '@/data/logos'
import { PageHero, Band, Marker, Heading, Reveal, BTN } from '@/components/editorial'

const companyName = (id, language) =>
  companyContent[id]?.[language]?.name || companyRegistry[id]?.legalName || id

const Companies = ({ language }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('all')

  const translations = {
    en: {
      heroEyebrow: 'The Group · UK · USA · UAE',
      heroTitle: 'Specialized companies, ',
      heroAccent: 'one umbrella.',
      heroSubtitle:
        'A portfolio of regulated entities, each with a defined role in the Capimax ecosystem — across investment, finance, and technology.',
      searchPlaceholder: 'Search companies, sectors…',
      allCountries: 'All',
      uk: 'UK',
      usa: 'USA',
      uae: 'UAE',
      companiesMarker: 'The Companies',
      companiesTitle: 'Thirteen entities, ',
      companiesAccent: 'one mandate.',
      noResults: 'No companies match your search.',
      clearFilters: 'Clear filters',
      filterBy: 'Filter',
      partnersMarker: 'Strategic Partnerships',
      partnersTitle: 'Partners who extend ',
      partnersAccent: 'our reach.',
      partnersBody:
        'Strategic collaborations that enhance our offering and expand our footprint across markets.',
      learnMore: 'Learn more',
      ctaMarker: 'Begin a conversation',
      ctaTitle: 'Ready to partner ',
      ctaAccent: 'with us?',
      ctaBody: 'Explore the group, our platforms, and the assets you can own.',
      contactCta: 'Contact us',
      investorsCta: 'For Investors',
      results: 'companies',
    },
    ar: {
      heroEyebrow: 'المجموعة · المملكة المتحدة · الولايات المتحدة · الإمارات',
      heroTitle: 'شركات متخصصة، ',
      heroAccent: 'مظلة واحدة.',
      heroSubtitle:
        'محفظة من الكيانات المرخّصة، لكل منها دور محدّد في منظومة كابي ماكس — عبر الاستثمار والمال والتقنية.',
      searchPlaceholder: 'ابحث في الشركات والقطاعات…',
      allCountries: 'الكل',
      uk: 'المملكة المتحدة',
      usa: 'الولايات المتحدة',
      uae: 'الإمارات',
      companiesMarker: 'الشركات',
      companiesTitle: 'ثلاثة عشر كيانًا، ',
      companiesAccent: 'مهمة واحدة.',
      noResults: 'لا توجد شركات تطابق بحثك.',
      clearFilters: 'مسح التصفية',
      filterBy: 'تصفية',
      partnersMarker: 'الشراكات الاستراتيجية',
      partnersTitle: 'شركاء يوسّعون ',
      partnersAccent: 'حضورنا.',
      partnersBody:
        'تعاونات استراتيجية تعزّز خدماتنا وتوسّع حضورنا عبر الأسواق.',
      learnMore: 'اعرف المزيد',
      ctaMarker: 'ابدأ محادثة',
      ctaTitle: 'هل أنت مستعد للشراكة ',
      ctaAccent: 'معنا؟',
      ctaBody: 'استكشف المجموعة ومنصّاتنا والأصول التي يمكنك تملّكها.',
      contactCta: 'تواصل معنا',
      investorsCta: 'للمستثمرين',
      results: 'شركة',
    },
  }

  const t = translations[language]

  const partnerships = [
    {
      id: 'tdh-developments',
      en: { name: 'TDH Developments', sector: 'Real Estate Development', description: 'Strategic partnership in real estate development for new projects.' },
      ar: { name: 'تي دي إتش للتطوير', sector: 'التطوير العقاري', description: 'شراكة استراتيجية في التطوير العقاري للمشاريع الجديدة.' },
      icon: Building2,
    },
    {
      id: 'elitegate-properties',
      en: { name: 'EliteGate Properties', sector: 'Real Estate', description: 'Marketing partnership in hotel properties and sustainable development.' },
      ar: { name: 'إيليت جيت العقارية', sector: 'العقارات', description: 'شراكة تسويقية في العقارات الفندقية والتطوير المستدام.' },
      icon: Building2,
    },
    {
      id: 'profit-max-investment',
      en: { name: 'Profit Max Investment', sector: 'Investment Management', description: 'Administrative partnership in global investment management.' },
      ar: { name: 'بروفيت ماكس للاستثمار', sector: 'إدارة الاستثمار', description: 'شراكة إدارية في إدارة الاستثمارات العالمية.' },
      icon: TrendingUp,
    },
    {
      id: 'assurax-insurance',
      en: { name: 'Assurax Insurance', sector: 'Insurance', description: 'Integrated insurance and risk assessment services.' },
      ar: { name: 'أشوراكس للتأمين', sector: 'التأمين', description: 'خدمات تأمين وتقييم مخاطر متكاملة.' },
      icon: Shield,
    },
  ]

  // Filter the canonical company registry.
  const filteredIds = companyIds.filter((id) => {
    const meta = companyRegistry[id]
    const name = companyName(id, language)
    const legal = meta.legalName || ''
    const term = searchTerm.toLowerCase()
    const matchesSearch =
      name.toLowerCase().includes(term) ||
      legal.toLowerCase().includes(term) ||
      (meta.sector || '').toLowerCase().includes(term)
    const matchesCountry = selectedCountry === 'all' || meta.country === selectedCountry
    return matchesSearch && matchesCountry
  })

  const hasFilters = searchTerm || selectedCountry !== 'all'
  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCountry('all')
  }

  const countryOptions = [
    { value: 'all', label: t.allCountries },
    { value: 'UK', label: t.uk },
    { value: 'USA', label: t.usa },
    { value: 'UAE', label: t.uae },
  ]

  return (
    <div className="bg-cream text-ink">
      <PageHero
        eyebrow={t.heroEyebrow}
        title={t.heroTitle}
        accent={t.heroAccent}
        subtitle={t.heroSubtitle}
      />

      {/* ===================================================== THE COMPANIES */}
      <Band tone="darker">
        <Reveal className="grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <Marker num="01" label={t.companiesMarker} light />
            <Heading lead={t.companiesTitle} accent={t.companiesAccent} light />
          </div>

          {/* Search + filter — minimal, sharp */}
          <div className="flex flex-col sm:flex-row gap-3 lg:justify-end lg:pb-2">
            <div className="relative flex-1 sm:max-w-xs">
              <Search className="absolute top-1/2 -translate-y-1/2 left-3 w-4 h-4 text-sand/40" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full bg-transparent border border-[color:var(--line-sand)] text-sand placeholder:text-sand/40 pl-9 pr-3 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              aria-label={t.filterBy}
              className="bg-transparent border border-[color:var(--line-sand)] text-sand py-3 px-3 text-sm focus:outline-none focus:border-primary transition-colors [&>option]:text-ink"
            >
              {countryOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            {hasFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center justify-center gap-2 border border-[color:var(--line-sand-mid)] text-sand hover:bg-sand hover:text-forest-pitch px-4 py-3 text-sm transition-colors"
              >
                <X className="w-4 h-4" />
                {t.clearFilters}
              </button>
            )}
          </div>
        </Reveal>

        {filteredIds.length > 0 ? (
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[color:var(--line-sand)]">
            {filteredIds.map((id, i) => {
              const meta = companyRegistry[id]
              const Icon = meta.icon
              const logo = getCompanyLogo(id, 'dark') // dark band -> light logo asset
              const name = companyName(id, language)
              return (
                <Reveal key={id} delay={(i % 3) * 0.05}>
                  <Link
                    to={`/company/${id}`}
                    className="group block p-8 border-b border-r border-[color:var(--line-sand)] hover:bg-[rgba(47,173,111,0.05)] transition-colors h-full relative"
                  >
                    <span className="absolute top-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-500" style={{ transitionTimingFunction: 'var(--ease-out)' }} />
                    <div className="flex items-start justify-between gap-3">
                      <div className="h-16 flex items-center">
                        {logo ? (
                          <img src={logo} alt={name} className="h-14 w-auto max-w-[230px] object-contain object-left" />
                        ) : (
                          <Icon className="w-10 h-10 text-primary" />
                        )}
                      </div>
                      <span className="mono-label text-sand/35 shrink-0" style={{ fontSize: '0.6rem' }}>/ {String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className={`mt-6 font-display text-xl font-medium leading-snug group-hover:text-primary transition-colors ${logo ? 'sr-only' : ''}`}>{name}</h3>
                    <p className={`text-sm text-sand/55 ${logo ? 'mt-3' : 'mt-2'}`}>{meta.sector}</p>
                    <div className="mt-5 inline-flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 group-hover:gap-2 transition-all">
                      {meta.countryFlag} <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        ) : (
          <Reveal className="mt-16 border-t border-[color:var(--line-sand)] py-20 text-center">
            <p className="font-display text-2xl text-sand/70">{t.noResults}</p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 inline-flex items-center justify-center gap-2 border border-[color:var(--line-sand-mid)] text-sand hover:bg-sand hover:text-forest-pitch px-6 py-3 text-sm transition-colors"
            >
              <X className="w-4 h-4" />
              {t.clearFilters}
            </button>
          </Reveal>
        )}
      </Band>

      {/* ==================================================== PARTNERSHIPS */}
      <Band tone="light">
        <Reveal className="grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <Marker num="02" label={t.partnersMarker} />
            <Heading lead={t.partnersTitle} accent={t.partnersAccent} />
          </div>
          <p className="text-lg text-ink/70 leading-relaxed lg:pb-2">{t.partnersBody}</p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[color:var(--line-dark)]">
          {partnerships.map((partner, i) => {
            const p = partner[language]
            const Icon = partner.icon
            return (
              <Reveal key={partner.id} delay={(i % 4) * 0.05}>
                <Link
                  to="/partners"
                  className="group flex flex-col h-full p-8 border-b border-r border-[color:var(--line-dark)] hover:bg-[rgba(47,173,111,0.04)] transition-colors relative"
                >
                  <span className="absolute top-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-500" style={{ transitionTimingFunction: 'var(--ease-out)' }} />
                  <Icon className="w-9 h-9 text-primary" />
                  <h3 className="mt-5 font-display text-lg font-medium leading-snug group-hover:text-primary transition-colors">{p.name}</h3>
                  <p className="mono-label text-ink/45 mt-2" style={{ fontSize: '0.6rem' }}>{p.sector}</p>
                  <p className="mt-3 text-sm text-ink/65 leading-relaxed flex-1">{p.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
                    {t.learnMore} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </Band>

      {/* ============================================================= CTA */}
      <Band tone="pitch" className="relative overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-[40rem] h-[40rem]" style={{ background: 'radial-gradient(circle, rgba(47,173,111,0.09), transparent 60%)' }} />
        <Reveal className="relative max-w-3xl">
          <Marker num="03" label={t.ctaMarker} light />
          <Heading lead={t.ctaTitle} accent={t.ctaAccent} light size="clamp(2.4rem,5.5vw,4.5rem)" />
          <p className="mt-7 text-lg text-sand/70 leading-relaxed">{t.ctaBody}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className={`group ${BTN.sand}`}>
              {t.contactCta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/investors" className={BTN.ghostLight}>{t.investorsCta}</Link>
          </div>
        </Reveal>
      </Band>
    </div>
  )
}

export default Companies

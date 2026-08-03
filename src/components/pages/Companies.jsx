import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Search, X, MapPin } from 'lucide-react'
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
      heroEyebrow: 'The Group · USA · UK · Global',
      heroTitle: 'Specialized companies, ',
      heroAccent: 'one umbrella.',
      heroSubtitle:
        'The companies wholly owned by Capimax Group — each a regulated entity with a defined role across real estate technology, tokenization, and fractional ownership, and its own country of registration.',
      searchPlaceholder: 'Search companies, sectors…',
      allCountries: 'All',
      uk: 'UK',
      usa: 'USA',
      companiesMarker: 'The Companies',
      companiesTitle: 'A focused group, ',
      companiesAccent: 'one mandate.',
      noResults: 'No companies match your search.',
      clearFilters: 'Clear filters',
      filterBy: 'Filter',
      registeredIn: 'Registered in',
      registeredOffice: 'Registered office',
      ctaMarker: 'Begin a conversation',
      ctaTitle: 'Ready to partner ',
      ctaAccent: 'with us?',
      ctaBody: 'Explore the group, our platforms, and the assets you can own.',
      contactCta: 'Contact us',
      investorsCta: 'For Investors',
    },
    ar: {
      heroEyebrow: 'المجموعة · الولايات المتحدة · المملكة المتحدة · عالميًا',
      heroTitle: 'شركات متخصصة، ',
      heroAccent: 'مظلة واحدة.',
      heroSubtitle:
        'الشركات المملوكة بالكامل لمجموعة كابي ماكس — كل منها كيان مرخّص له دور محدّد عبر تكنولوجيا العقارات والترميز والملكية الجزئية، ولكلٍّ دولة تسجيله.',
      searchPlaceholder: 'ابحث في الشركات والقطاعات…',
      allCountries: 'الكل',
      uk: 'المملكة المتحدة',
      usa: 'الولايات المتحدة',
      companiesMarker: 'الشركات',
      companiesTitle: 'مجموعة مركّزة، ',
      companiesAccent: 'مهمة واحدة.',
      noResults: 'لا توجد شركات تطابق بحثك.',
      clearFilters: 'مسح التصفية',
      filterBy: 'تصفية',
      registeredIn: 'مسجّلة في',
      registeredOffice: 'المقر المسجّل',
      ctaMarker: 'ابدأ محادثة',
      ctaTitle: 'هل أنت مستعد للشراكة ',
      ctaAccent: 'معنا؟',
      ctaBody: 'استكشف المجموعة ومنصّاتنا والأصول التي يمكنك تملّكها.',
      contactCta: 'تواصل معنا',
      investorsCta: 'للمستثمرين',
    },
  }

  const t = translations[language]

  // Filter the canonical company registry (wholly-owned subsidiaries only).
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
    { value: 'USA', label: t.usa },
    { value: 'UK', label: t.uk },
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
                    className="group flex flex-col h-full p-8 border-b border-r border-[color:var(--line-sand)] hover:bg-[rgba(47,173,111,0.05)] transition-colors relative"
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
                    {/* Legal name (always visible for clarity, even when a logo shows) */}
                    <p className="text-sm text-sand/80 font-medium leading-snug">{meta.legalName}</p>
                    <p className="text-sm text-sand/55 mt-1.5">{meta.sector}</p>

                    {/* Registration jurisdiction + official address */}
                    <div className="mt-auto pt-5">
                      <div className="mono-label text-sand/40 mb-1.5" style={{ fontSize: '0.56rem' }}>{t.registeredIn}</div>
                      <p className="text-sm text-sand/75 flex items-center gap-1.5">
                        <span>{meta.countryFlag}</span> {meta.location}
                      </p>
                      {meta.address && (
                        <p className="mt-2 text-xs text-sand/45 leading-relaxed flex items-start gap-1.5">
                          <MapPin className="w-3 h-3 mt-0.5 shrink-0 text-primary/70" />
                          <span>{meta.address}</span>
                        </p>
                      )}
                    </div>

                    <div className="mt-5 inline-flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 group-hover:gap-2 transition-all">
                      <ArrowRight className="w-3.5 h-3.5" />
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

      {/* ============================================================= CTA */}
      <Band tone="pitch" className="relative overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-[40rem] h-[40rem]" style={{ background: 'radial-gradient(circle, rgba(47,173,111,0.09), transparent 60%)' }} />
        <Reveal className="relative max-w-3xl">
          <Marker num="02" label={t.ctaMarker} light />
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

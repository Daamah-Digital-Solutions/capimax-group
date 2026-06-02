import { CheckCircle2, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { currencyContent, platformContent, PLATFORM_URLS } from '@/data/content'
import { PageHero, Band, Marker, Heading, Reveal, BTN } from '@/components/editorial'

const Currency = ({ language }) => {
  const translations = {
    en: {
      eyebrow: 'Digital Asset',
      highlightsMarker: 'Why Pronova',
      highlightsTitle: ['Built for ', 'real utility.'],
      highlightsSubtitle: 'A utility currency built for real operational use across the ecosystem.',
      usageMarker: 'Where Pronova is used',
      usageTitle: ['Across the ', 'Capimax platforms.'],
      usageSubtitle: 'Pronova powers payments, settlements, and access across the Capimax platforms.',
      visitPlatform: 'Visit',
      explorePlatform: 'Explore platform',
      externalTitle: 'Live platforms',
      ctaMarker: 'Put Pronova to work',
      ctaTitle: ['Own a share of ', 'real assets.'],
      ctaSubtitle: 'Start investing across the Capimax ecosystem or explore the platforms Pronova connects.',
      startInvesting: 'Start Investing',
      viewPlatforms: 'View Platforms',
    },
    ar: {
      eyebrow: 'أصل رقمي',
      highlightsMarker: 'لماذا Pronova',
      highlightsTitle: ['مصممة لـ', 'استخدام حقيقي.'],
      highlightsSubtitle: 'عملة خدمية مصممة للاستخدام التشغيلي الحقيقي عبر المنظومة.',
      usageMarker: 'أين تُستخدم Pronova',
      usageTitle: ['عبر ', 'منصات كابي ماكس.'],
      usageSubtitle: 'تشغّل Pronova عمليات الدفع والتسوية والوصول عبر منصات كابي ماكس.',
      visitPlatform: 'زيارة',
      explorePlatform: 'استكشاف المنصة',
      externalTitle: 'المنصات المباشرة',
      ctaMarker: 'استثمر مع Pronova',
      ctaTitle: ['تملّك حصة من ', 'أصول حقيقية.'],
      ctaSubtitle: 'ابدأ الاستثمار عبر منظومة كابي ماكس أو استكشف المنصات التي تربطها Pronova.',
      startInvesting: 'ابدأ الاستثمار',
      viewPlatforms: 'عرض المنصات',
    },
  }

  const t = translations[language]
  const c = currencyContent[language]

  const externalLinks = [
    { label: 'capimaxrt.com', url: PLATFORM_URLS.realEstateTokenization },
    { label: 'capimaxtokenization.store', url: PLATFORM_URLS.tokenizationStore },
    { label: 'capimaxpropshare.shop', url: PLATFORM_URLS.propShare },
    { label: 'capimaxinvestment.com', url: PLATFORM_URLS.investmentsPlatform },
  ]

  return (
    <div className="bg-cream text-ink">
      <PageHero eyebrow={t.eyebrow} title={c.name} subtitle={c.description} />

      {/* ===================================================== HIGHLIGHTS */}
      <Band tone="light">
        <Reveal className="grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <Marker num="01" label={t.highlightsMarker} />
            <Heading lead={t.highlightsTitle[0]} accent={t.highlightsTitle[1]} />
          </div>
          <p className="text-lg text-ink/70 leading-relaxed lg:pb-2">{t.highlightsSubtitle}</p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 border-t border-l border-[color:var(--line-dark)]">
          {c.highlights.map((highlight, idx) => (
            <Reveal key={idx} delay={(idx % 2) * 0.05}>
              <div className="group flex items-start gap-5 h-full p-8 border-b border-r border-[color:var(--line-dark)] hover:bg-[rgba(47,173,111,0.05)] transition-colors">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                <p className="text-lg text-ink/85 leading-relaxed">{highlight}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* =============================================== WHERE IT IS USED */}
      <Band tone="dark">
        <Reveal className="grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <Marker num="02" label={t.usageMarker} light />
            <Heading lead={t.usageTitle[0]} accent={t.usageTitle[1]} light />
          </div>
          <p className="text-lg text-sand/70 leading-relaxed lg:pb-2">{t.usageSubtitle}</p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 border-t border-l border-[color:var(--line-sand)]">
          {platformContent.map((platform, i) => {
            const p = platform[language]
            return (
              <Reveal key={platform.id} delay={(i % 2) * 0.05}>
                <div className="group flex flex-col h-full p-8 border-b border-r border-[color:var(--line-sand)] hover:bg-[rgba(47,173,111,0.05)] transition-colors relative">
                  <span className="absolute top-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-500" style={{ transitionTimingFunction: 'var(--ease-out)' }} />
                  <span className="mono-label text-sand/35" style={{ fontSize: '0.6rem' }}>/ 0{i + 1}</span>
                  <h3 className="mt-5 font-display text-xl font-medium leading-snug group-hover:text-primary transition-colors">{p.name}</h3>
                  <p className="mt-3 text-sm text-sand/60 leading-relaxed flex-1">{p.short}</p>
                  <div className="mt-6 flex items-center gap-5 text-sm">
                    <Link to={`/platforms/${platform.id}`} className="text-primary inline-flex items-center gap-1 hover:gap-2 transition-all">
                      {t.explorePlatform} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    {platform.externalUrl && (
                      <a href={platform.externalUrl} target="_blank" rel="noopener noreferrer" className="text-sand/50 hover:text-sand inline-flex items-center gap-1">
                        {t.visitPlatform} <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-14">
          <div className="mono-label text-sand/45 mb-5">{t.externalTitle}</div>
          <div className="flex flex-wrap gap-3">
            {externalLinks.map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 px-5 py-3 text-sm border border-[color:var(--line-sand-mid)] text-sand hover:bg-sand hover:text-forest-pitch transition-colors">
                {link.label}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </Reveal>
      </Band>

      {/* =========================================================== CTA */}
      <Band tone="pitch" className="relative overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-[40rem] h-[40rem]" style={{ background: 'radial-gradient(circle, rgba(47,173,111,0.09), transparent 60%)' }} />
        <div className="relative">
          <Reveal className="max-w-3xl">
            <Marker num="03" label={t.ctaMarker} light />
            <Heading lead={t.ctaTitle[0]} accent={t.ctaTitle[1]} light size="clamp(2.6rem,6vw,5rem)" />
            <p className="mt-7 text-lg text-sand/70 leading-relaxed">{t.ctaSubtitle}</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link to="/investors" className={`group ${BTN.sand}`}>
                {t.startInvesting}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/platforms" className={BTN.ghostLight}>{t.viewPlatforms}</Link>
            </div>
          </Reveal>
        </div>
      </Band>
    </div>
  )
}

export default Currency

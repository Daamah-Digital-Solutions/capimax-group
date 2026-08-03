import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { platformContent, currencyContent, novaContent } from '@/data/content'
import { PageHero, Band, Marker, Heading, Reveal } from '@/components/editorial'

const Platforms = ({ language }) => {
  const translations = {
    en: {
      eyebrow: 'Capimax Ecosystem',
      title: 'Our ',
      accent: 'platforms.',
      description:
        'Explore the digital platforms powering the Capimax ecosystem — from real estate tokenization to a multi-party real estate exchange, all built for transparency, verifiability, and real-world utility.',
      platformsMarker: 'The platforms',
      platformsTitle: ['Digital infrastructure, ', 'one ecosystem.'],
      learnMore: 'Learn more',
      visitPlatform: 'Visit',
      highlightsMarker: 'Currency & digital finance',
      highlightsTitle: ['A utility currency and ', 'digital finance.'],
      highlightsBody: 'Beyond the platforms, a utility currency and a digital-finance arm complete the infrastructure behind ownership.',
      currencyCta: 'Explore Pronova',
      novaCta: 'Explore Nova',
    },
    ar: {
      eyebrow: 'منظومة كابي ماكس',
      title: 'منصّاتنا',
      accent: '',
      description:
        'استكشف المنصات الرقمية التي تشغّل منظومة كابي ماكس — من ترميز العقارات إلى منصة التبادل العقاري متعددة الأطراف، جميعها مبنية على الشفافية وقابلية التحقق والاستخدام العملي الحقيقي.',
      platformsMarker: 'المنصات',
      platformsTitle: ['بنية رقمية، ', 'منظومة واحدة.'],
      learnMore: 'اعرف المزيد',
      visitPlatform: 'زيارة',
      highlightsMarker: 'العملة والتمويل الرقمي',
      highlightsTitle: ['عملة خدمية و', 'تمويل رقمي.'],
      highlightsBody: 'إلى جانب المنصات، تكمل عملة خدمية وذراع تمويل رقمي البنية التحتية للتملّك.',
      currencyCta: 'استكشف Pronova',
      novaCta: 'استكشف Nova',
    },
  }

  const t = translations[language]

  return (
    <div className="bg-cream text-ink">
      <PageHero eyebrow={t.eyebrow} title={t.title} accent={t.accent} subtitle={t.description} />

      {/* ===================================================== PLATFORMS */}
      <Band tone="light">
        <Reveal className="grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <Marker num="01" label={t.platformsMarker} />
            <Heading lead={t.platformsTitle[0]} accent={t.platformsTitle[1]} />
          </div>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          {platformContent.map((platform, index) => {
            const copy = platform[language]
            return (
              <Reveal key={platform.id} delay={(index % 2) * 0.05}>
                <div className="group flex flex-col h-full bg-white border border-[color:var(--line-dark)] hover:shadow-xl hover:shadow-forest/5 transition-all duration-300 overflow-hidden">
                  {/* Real platform screenshot */}
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-[color:var(--line-dark)]">
                    {platform.screenshot ? (
                      <img
                        src={platform.screenshot}
                        alt={`${copy.name} platform`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center" style={{ background: 'radial-gradient(circle at 50% 35%, rgba(47,173,111,0.18), #0a2928)' }}>
                        <span className="font-display text-sand/85 text-2xl">{copy.name}</span>
                      </div>
                    )}
                    <span className="absolute top-3 left-3 mono-label bg-forest-pitch/85 text-sand px-2.5 py-1" style={{ fontSize: '0.55rem' }}>/ 0{index + 1}</span>
                  </div>
                  {/* Definition */}
                  <div className="flex flex-col flex-1 p-7">
                    <h3 className="font-display text-2xl font-medium leading-snug group-hover:text-primary transition-colors">{copy.name}</h3>
                    <p className="mt-2 text-primary text-sm font-medium leading-relaxed">{copy.short}</p>
                    <p className="mt-3 text-ink/65 leading-relaxed flex-1">{copy.description}</p>
                    <div className="mt-7 flex items-center gap-5 text-sm">
                      <Link to={`/platforms/${platform.id}`} className="text-primary inline-flex items-center gap-1 hover:gap-2 transition-all font-medium">
                        {t.learnMore} <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      {platform.externalUrl && (
                        <a href={platform.externalUrl} target="_blank" rel="noopener noreferrer" className="text-ink/50 hover:text-ink inline-flex items-center gap-1">
                          {t.visitPlatform} <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Band>

      {/* =============================================== CURRENCY & FINANCE */}
      <Band tone="dark" className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem]" style={{ background: 'radial-gradient(circle, rgba(47,173,111,0.08), transparent 60%)' }} />
        <div className="relative">
          <Reveal>
            <Marker num="02" label={t.highlightsMarker} light />
            <div className="grid lg:grid-cols-2 gap-10 items-end">
              <Heading lead={t.highlightsTitle[0]} accent={t.highlightsTitle[1]} light />
              <p className="text-lg text-sand/70 leading-relaxed lg:pb-2">{t.highlightsBody}</p>
            </div>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-2 border-t border-l border-[color:var(--line-sand)]">
            <Reveal>
              <Link to="/currency" className="group flex flex-col h-full p-8 border-b border-r border-[color:var(--line-sand)] hover:bg-[rgba(47,173,111,0.05)] transition-colors">
                <span className="font-display italic text-3xl text-primary leading-none">¤</span>
                <h3 className="mt-5 font-display text-2xl font-medium group-hover:text-primary transition-colors">{currencyContent[language].name}</h3>
                <p className="mt-3 text-sand/65 leading-relaxed flex-1">{currencyContent[language].short}</p>
                <span className="mt-7 text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all text-sm">
                  {t.currencyCta} <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </Reveal>
            <Reveal delay={0.05}>
              <Link to="/nova" className="group flex flex-col h-full p-8 border-b border-r border-[color:var(--line-sand)] hover:bg-[rgba(47,173,111,0.05)] transition-colors">
                <span className="font-display italic text-3xl text-primary leading-none">N</span>
                <h3 className="mt-5 font-display text-2xl font-medium group-hover:text-primary transition-colors">{novaContent[language].name}</h3>
                <p className="mt-3 text-sand/65 leading-relaxed flex-1">{novaContent[language].tagline}</p>
                <span className="mt-7 text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all text-sm">
                  {t.novaCta} <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </Band>
    </div>
  )
}

export default Platforms

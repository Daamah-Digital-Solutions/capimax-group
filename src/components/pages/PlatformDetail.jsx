import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { platformContent } from '@/data/content'
import { PageHero, Band, Marker, Heading, Reveal, BTN } from '@/components/editorial'

const PlatformDetail = ({ language }) => {
  const { id } = useParams()
  const platform = platformContent.find((p) => p.id === id)

  const translations = {
    en: {
      eyebrow: 'Capimax Platform',
      visitPlatform: 'Visit platform',
      backToPlatforms: 'Back to Platforms',
      exploreMore: 'Explore more',
      exploreTitle: ['Other platforms in the ', 'ecosystem.'],
      overviewMarker: 'Overview',
      notFoundTitle: 'Platform ',
      notFoundAccent: 'not found.',
      notFoundText: 'The platform you are looking for does not exist or has moved.',
      learnMore: 'Learn more',
    },
    ar: {
      eyebrow: 'منصة كابي ماكس',
      visitPlatform: 'زيارة المنصة',
      backToPlatforms: 'العودة إلى المنصات',
      exploreMore: 'استكشف المزيد',
      exploreTitle: ['منصات أخرى في ', 'المنظومة.'],
      overviewMarker: 'نظرة عامة',
      notFoundTitle: 'المنصة ',
      notFoundAccent: 'غير موجودة.',
      notFoundText: 'المنصة التي تبحث عنها غير موجودة أو تم نقلها.',
      learnMore: 'اعرف المزيد',
    },
  }

  const t = translations[language]

  if (!platform) {
    return (
      <div className="bg-cream text-ink">
        <PageHero eyebrow={t.eyebrow} title={t.notFoundTitle} accent={t.notFoundAccent} subtitle={t.notFoundText} />
        <Band tone="light">
          <Reveal>
            <Link to="/platforms" className={`group ${BTN.forest}`}>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              {t.backToPlatforms}
            </Link>
          </Reveal>
        </Band>
      </div>
    )
  }

  const copy = platform[language]
  const otherPlatforms = platformContent.filter((p) => p.id !== platform.id)

  return (
    <div className="bg-cream text-ink">
      <PageHero eyebrow={t.eyebrow} title={copy.name} subtitle={copy.short}>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          {platform.externalUrl && (
            <a href={platform.externalUrl} target="_blank" rel="noopener noreferrer" className={`group ${BTN.green}`}>
              {t.visitPlatform}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          )}
          <Link to="/platforms" className={`group ${BTN.ghostLight}`}>
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {t.backToPlatforms}
          </Link>
        </div>
      </PageHero>

      {/* ====================================================== OVERVIEW */}
      <Band tone="light">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-24">
          <Reveal className="lg:sticky lg:top-28 self-start">
            <Marker num="01" label={t.overviewMarker} />
            <Heading lead={copy.name} size="clamp(1.9rem,3.2vw,2.8rem)" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl leading-[1.6] text-ink/85">{copy.description}</p>
            {platform.externalUrl && (
              <div className="mt-10">
                <a href={platform.externalUrl} target="_blank" rel="noopener noreferrer" className={`group ${BTN.forest}`}>
                  {t.visitPlatform}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            )}
          </Reveal>
        </div>
      </Band>

      {/* ============================================== OTHER PLATFORMS */}
      <Band tone="dark">
        <Reveal>
          <Marker num="02" label={t.exploreMore} light />
          <Heading lead={t.exploreTitle[0]} accent={t.exploreTitle[1]} light />
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[color:var(--line-sand)]">
          {otherPlatforms.map((other, i) => {
            const otherCopy = other[language]
            return (
              <Reveal key={other.id} delay={(i % 3) * 0.05}>
                <div className="group flex flex-col h-full p-8 border-b border-r border-[color:var(--line-sand)] hover:bg-[rgba(47,173,111,0.05)] transition-colors relative">
                  <span className="absolute top-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-500" style={{ transitionTimingFunction: 'var(--ease-out)' }} />
                  <span className="mono-label text-sand/35" style={{ fontSize: '0.6rem' }}>/ 0{i + 1}</span>
                  <h3 className="mt-5 font-display text-xl font-medium leading-snug group-hover:text-primary transition-colors">{otherCopy.name}</h3>
                  <p className="mt-3 text-sm text-sand/60 leading-relaxed flex-1">{otherCopy.short}</p>
                  <Link to={`/platforms/${other.id}`} className="mt-6 text-primary inline-flex items-center gap-1 hover:gap-2 transition-all text-sm">
                    {t.learnMore} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Band>
    </div>
  )
}

export default PlatformDetail

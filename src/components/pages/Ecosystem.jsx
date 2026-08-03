import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Layers, Handshake, Newspaper, Boxes, Globe } from 'lucide-react'
import { PageHero, Band, Marker, Heading, Reveal, BTN } from '@/components/editorial'
import { platformContent, ECOSYSTEM } from '@/data/content'

const Ecosystem = ({ language }) => {
  const isAr = language === 'ar'

  const t = {
    en: {
      heroEyebrow: 'CapiMax Ecosystem',
      heroTitle: 'One gateway to the ',
      heroAccent: 'entire ecosystem.',
      heroSubtitle:
        'CapiMax Ecosystem is the main digital gateway that brings together all of the group\'s platforms, partnerships, services, news, and updates in one integrated place.',
      introMarker: 'What it is',
      introTitle: 'The digital home of ',
      introAccent: 'the group.',
      introBody1:
        'CapiMax Ecosystem unifies everything the group builds — real estate technology, tokenization, fractional ownership, digital finance, verification, and partnerships — into a single connected experience.',
      introBody2:
        'It is where developers, property owners, investors, brokers, liquidity providers, valuation firms, and insurance partners meet within one integrated global ownership ecosystem.',
      portalMarker: 'The main portals',
      portalTitle: 'Enter the ecosystem.',
      visitPrimary: 'Visit capimax.io',
      visitAlt: 'Visit capimax.us',
      liveLabel: 'Live ecosystem portal',
      unifiesMarker: 'What it brings together',
      unifiesTitle: 'Everything, ',
      unifiesAccent: 'in one place.',
      platformsT: 'Platforms',
      platformsD: 'Every platform in the group — BRX, RT, PropShare, and Asset — reachable from one place.',
      partnersT: 'Partnerships',
      partnersD: 'The licensed partners across real estate, finance, insurance, security, and legal.',
      servicesT: 'Services',
      servicesD: 'Ownership, tokenization, structuring, and digital-finance services across the ecosystem.',
      newsT: 'News & Updates',
      newsD: 'The latest launches, partnerships, and coverage from across the CapiMax ecosystem.',
      explore: 'Explore',
      ctaMarker: 'Begin a conversation',
      ctaTitle: 'Step into ',
      ctaAccent: 'the ecosystem.',
      ctaBody: 'Explore the platforms, partners, and ownership models that make up CapiMax — or reach out to get started.',
      exploreP: 'Explore Platforms',
      contact: 'Contact Us',
    },
    ar: {
      heroEyebrow: 'منظومة كابي ماكس',
      heroTitle: 'بوابة واحدة إلى ',
      heroAccent: 'المنظومة بالكامل.',
      heroSubtitle:
        'منظومة كابي ماكس هي البوابة الرقمية الرئيسية التي تجمع جميع منصّات المجموعة وشراكاتها وخدماتها وأخبارها وتحديثاتها في مكان واحد متكامل.',
      introMarker: 'ما هي',
      introTitle: 'البيت الرقمي ',
      introAccent: 'للمجموعة.',
      introBody1:
        'توحّد منظومة كابي ماكس كل ما تبنيه المجموعة — تكنولوجيا العقارات، والترميز، والملكية الجزئية، والتمويل الرقمي، والتحقق، والشراكات — في تجربة واحدة مترابطة.',
      introBody2:
        'هي المكان الذي يلتقي فيه المطوّرون ومالكو العقارات والمستثمرون والوسطاء ومزوّدو السيولة وشركات التقييم وشركاء التأمين ضمن منظومة تملّك عالمية واحدة متكاملة.',
      portalMarker: 'البوابات الرئيسية',
      portalTitle: 'ادخل المنظومة.',
      visitPrimary: 'زيارة capimax.io',
      visitAlt: 'زيارة capimax.us',
      liveLabel: 'بوابة المنظومة المباشرة',
      unifiesMarker: 'ما الذي تجمعه',
      unifiesTitle: 'كل شيء، ',
      unifiesAccent: 'في مكان واحد.',
      platformsT: 'المنصات',
      platformsD: 'كل منصّات المجموعة — BRX وRT وبروب شير وأسِت — في متناول يدك من مكان واحد.',
      partnersT: 'الشراكات',
      partnersD: 'الشركاء المرخّصون في العقارات والمال والتأمين والأمن والقانون.',
      servicesT: 'الخدمات',
      servicesD: 'خدمات التملّك والترميز والهيكلة والتمويل الرقمي عبر المنظومة.',
      newsT: 'الأخبار والتحديثات',
      newsD: 'أحدث الإطلاقات والشراكات والتغطيات من منظومة كابي ماكس.',
      explore: 'استكشف',
      ctaMarker: 'ابدأ محادثة',
      ctaTitle: 'ادخل إلى ',
      ctaAccent: 'المنظومة.',
      ctaBody: 'استكشف المنصات والشركاء ونماذج التملّك التي تشكّل كابي ماكس — أو تواصل معنا للبدء.',
      exploreP: 'استكشف المنصات',
      contact: 'تواصل معنا',
    },
  }[language]

  const pills = platformContent.map((p) => p[language].name)

  const unifies = [
    { icon: Layers, title: t.platformsT, desc: t.platformsD, to: '/platforms' },
    { icon: Handshake, title: t.partnersT, desc: t.partnersD, to: '/partners' },
    { icon: Boxes, title: t.servicesT, desc: t.servicesD, to: '/sectors' },
    { icon: Newspaper, title: t.newsT, desc: t.newsD, to: '/news' },
  ]

  return (
    <div className="bg-cream text-ink">
      <PageHero
        eyebrow={t.heroEyebrow}
        title={t.heroTitle}
        accent={t.heroAccent}
        subtitle={t.heroSubtitle}
      >
        <div className="mt-8 flex flex-wrap gap-2">
          {pills.map((name) => (
            <span key={name} className="mono-label text-sand/70 border border-[color:var(--line-sand-mid)] px-3 py-1.5" style={{ fontSize: '0.6rem' }}>
              {name}
            </span>
          ))}
        </div>
      </PageHero>

      {/* ===================================================== WHAT IT IS */}
      <Band tone="light">
        <Reveal className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <Marker num="01" label={t.introMarker} />
            <Heading lead={t.introTitle} accent={t.introAccent} />
          </div>
          <div className="space-y-5 lg:pt-2">
            <p className="text-lg text-ink/70 leading-relaxed">{t.introBody1}</p>
            <p className="text-ink/60 leading-relaxed">{t.introBody2}</p>
          </div>
        </Reveal>
      </Band>

      {/* ===================================================== MAIN PORTALS */}
      <Band tone="dark" className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem]" style={{ background: 'radial-gradient(circle, rgba(47,173,111,0.10), transparent 60%)' }} />
        <div className="relative">
          <Reveal>
            <Marker num="02" label={t.portalMarker} light />
            <Heading lead={t.portalTitle} light className="max-w-2xl" />
          </Reveal>

          <div className="mt-14 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
            {/* Live screenshot of capimax.io */}
            <Reveal>
              <a href={ECOSYSTEM.primaryUrl} target="_blank" rel="noopener noreferrer" className="group block relative border border-[color:var(--line-sand-mid)] overflow-hidden">
                <div className="flex items-center gap-1.5 px-4 py-3 bg-forest-pitch border-b border-[color:var(--line-sand)]">
                  <span className="w-2.5 h-2.5 rounded-full bg-sand/25" />
                  <span className="w-2.5 h-2.5 rounded-full bg-sand/25" />
                  <span className="w-2.5 h-2.5 rounded-full bg-sand/25" />
                  <span className="ms-3 mono-label text-sand/50" style={{ fontSize: '0.6rem' }}>www.capimax.io</span>
                </div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={ECOSYSTEM.screenshot} alt="CapiMax ecosystem portal" loading="lazy" className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700" />
                  <div className="absolute inset-0 bg-forest-pitch/0 group-hover:bg-forest-pitch/10 transition-colors" />
                  <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 bg-sand text-forest-pitch text-xs font-semibold px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    {t.visitPrimary} <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>
            </Reveal>

            {/* Portal links */}
            <Reveal delay={0.05} className="space-y-4">
              <div className="mono-label text-primary flex items-center gap-2" style={{ fontSize: '0.6rem' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> {t.liveLabel}
              </div>
              <a href={ECOSYSTEM.primaryUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-4 p-6 border border-[color:var(--line-sand)] hover:bg-[rgba(47,173,111,0.06)] transition-colors">
                <div className="flex items-center gap-4">
                  <Globe className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  <div>
                    <div className="font-display text-xl text-sand">capimax.io</div>
                    <div className="text-sm text-sand/55">{isAr ? 'البوابة الرئيسية للمنظومة' : 'Primary ecosystem portal'}</div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-sand/50 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </a>
              <a href={ECOSYSTEM.altUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-4 p-6 border border-[color:var(--line-sand)] hover:bg-[rgba(47,173,111,0.06)] transition-colors">
                <div className="flex items-center gap-4">
                  <Globe className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  <div>
                    <div className="font-display text-xl text-sand">capimax.us</div>
                    <div className="text-sm text-sand/55">{isAr ? 'بوابة الولايات المتحدة' : 'United States portal'}</div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-sand/50 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </a>
            </Reveal>
          </div>
        </div>
      </Band>

      {/* ===================================================== WHAT IT UNIFIES */}
      <Band tone="light">
        <Reveal>
          <Marker num="03" label={t.unifiesMarker} />
          <h2 className="font-display font-medium leading-[1.02]" style={{ fontSize: 'clamp(2.2rem,4.5vw,4rem)', letterSpacing: '-0.025em' }}>
            {t.unifiesTitle}<span className="accent-em">{t.unifiesAccent}</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[color:var(--line-dark)]">
          {unifies.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} delay={(i % 4) * 0.05}>
                <Link to={item.to} className="group flex flex-col h-full p-8 border-b border-r border-[color:var(--line-dark)] hover:bg-[rgba(47,173,111,0.05)] transition-colors relative">
                  <span className="absolute top-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-500" style={{ transitionTimingFunction: 'var(--ease-out)' }} />
                  <Icon className="w-9 h-9 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-5 font-display text-lg font-medium leading-snug group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="mt-3 text-sm text-ink/65 leading-relaxed flex-1">{item.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
                    {t.explore} <ArrowRight className="w-3.5 h-3.5" />
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
          <Marker num="04" label={t.ctaMarker} light />
          <h2 className="font-display font-medium leading-[0.98] text-sand" style={{ fontSize: 'clamp(2.6rem,7vw,6rem)', letterSpacing: '-0.03em' }}>
            {t.ctaTitle}<span className="accent-em">{t.ctaAccent}</span>
          </h2>
          <p className="mt-7 text-lg text-sand/70 leading-relaxed">{t.ctaBody}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link to="/platforms" className={`group ${BTN.sand}`}>
              {t.exploreP}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className={BTN.ghostLight}>{t.contact}</Link>
          </div>
        </Reveal>
      </Band>
    </div>
  )
}

export default Ecosystem

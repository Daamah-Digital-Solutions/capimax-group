import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { companyRegistry, companyIds } from '@/data/companies'
import { companyContent, platformContent, currencyContent, novaContent } from '@/data/content'
import { getCompanyLogo } from '@/data/logos'
import { useTheme } from '@/hooks/use-theme.jsx'

const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&w=1600&q=80',
  about: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=80',
}

const EASE = [0.16, 1, 0.3, 1]

// Button treatments (sharp, editorial — matching the reference).
const BTN_SAND = 'inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-medium bg-sand text-forest-pitch hover:bg-[color:var(--color-sand-light)] transition-colors duration-300'
const BTN_GHOST_LIGHT = 'inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-medium border border-[color:var(--line-sand-mid)] text-sand hover:bg-sand hover:text-forest-pitch transition-colors duration-300'

const companyName = (id, language) =>
  companyContent[id]?.[language]?.name || companyRegistry[id]?.legalName || id

// Companies that have a real logo asset (for the marquee).
const logoCompanies = companyIds.filter((id) => getCompanyLogo(id, 'dark'))

const Reveal = ({ children, delay = 0, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '0px 0px -80px 0px' }}
    transition={{ duration: 0.9, ease: EASE, delay }}
    className={className}
  >
    {children}
  </motion.div>
)

const Marker = ({ num, label, light }) => (
  <div className={`flex items-center gap-4 pb-3 mb-10 border-b ${light ? 'border-[color:var(--line-dark)]' : 'border-[color:var(--line-sand)]'}`}>
    <span className="font-display italic text-2xl text-primary leading-none">{num}</span>
    <span className={`mono-label ${light ? 'text-ink/45' : 'text-sand/55'}`}>{label}</span>
  </div>
)

const Home = ({ language }) => {
  const isAr = language === 'ar'
  const { isDark } = useTheme()
  // Marquee sits on a white band (light) / deep band (dark): pick the readable logo variant.
  const marqueeBg = isDark ? 'dark' : 'light'
  const c = {
    en: {
      heroEyebrow: 'A diversified holding group · UK · USA · UAE',
      heroLine1: 'Real-world assets,',
      heroAccent: 'shared ownership.',
      heroLede: 'Capimax Holding owns and governs a portfolio of investment, financial, and technology companies — turning tangible assets into transparent, fractional ownership.',
      exploreGroup: 'Explore the Group',
      startOwning: 'Start Owning',
      glance: '— At a glance',
      stats: [
        { n: '13', s: '', label: 'Companies' },
        { n: '3', s: '', label: 'Jurisdictions' },
        { n: '8', s: '', label: 'Sectors' },
      ],

      aboutMarker: 'About Capimax',
      aboutTitle: ['An entity built on ', 'governance.', ' Led by ownership.'],
      aboutLede: 'As the parent of the group, Capimax Holding sets strategy, capital allocation, and risk across every subsidiary — pairing institutional discipline with modern ownership models.',
      aboutBody: 'From real estate and precious metals to digital assets and fintech, each company operates with a clear mandate under one umbrella. Together they make owning a share of real, income-generating assets simple, transparent, and compliant.',
      aboutMeta: [
        ['Established', '2024'],
        ['Companies', '13'],
        ['Jurisdictions', 'UK · USA · UAE'],
        ['Structure', 'Holding Group'],
      ],

      groupMarker: 'The Group',
      groupTitle: ['Specialized companies, ', 'one umbrella.'],
      groupBody: 'A portfolio of regulated entities, each with a defined role in the Capimax ecosystem.',
      viewAll: 'View all companies',

      methodMarker: 'How ownership works',
      methodTitle: ['From a real asset ', 'to your share.'],
      methods: [
        ['Structure', 'Assets are placed into legally structured SPVs under the group.'],
        ['Tokenize', 'Ownership is divided into transferable, fractional shares.'],
        ['Own & exit', 'Track performance and exit through regulated secondary markets.'],
      ],

      ecoMarker: 'Platforms & digital infrastructure',
      ecoTitle: ['The Capimax ', 'ecosystem.'],
      ecoBody: 'Platforms, a utility currency, and digital finance — the infrastructure behind ownership.',
      learnMore: 'Learn more',
      visit: 'Visit',
      currencyLabel: 'Pronova — utility currency',
      novaLabel: 'Nova Digital Finance',

      whyMarker: 'Why Capimax',
      whyTitle: ['The right partner for ', 'lasting ownership.'],
      why: [
        ['Governance', 'Group-level strategy, risk, and regulatory compliance.'],
        ['Asset-backed', 'Real assets, structured in SPVs and insured via HCC.'],
        ['Transparency', 'Clear reporting on what you own and how it performs.'],
        ['Global reach', 'Operating across the UK, USA, and UAE.'],
        ['Fractional access', 'High-value assets, owned in accessible shares.'],
        ['Long-term value', 'Built for compounding, not speculation.'],
      ],

      ctaMarker: 'Begin a conversation',
      ctaTitle: ['Let’s build something ', 'that lasts.'],
      ctaBody: 'Explore the group, our platforms, and the assets you can own.',
      contactCta: 'Contact us',
      exploreCta: 'Explore the Group',
    },
    ar: {
      heroEyebrow: 'مجموعة قابضة متنوّعة · المملكة المتحدة · الولايات المتحدة · الإمارات',
      heroLine1: 'أصولٌ حقيقية،',
      heroAccent: 'ملكية مشتركة.',
      heroLede: 'تملك كابي ماكس القابضة وتحوكم محفظة من الشركات الاستثمارية والمالية والتقنية — وتحوّل الأصول الملموسة إلى ملكية جزئية شفافة.',
      exploreGroup: 'استكشف المجموعة',
      startOwning: 'ابدأ التملّك',
      glance: '— لمحة',
      stats: [
        { n: '13', s: '', label: 'شركة' },
        { n: '3', s: '', label: 'ولايات' },
        { n: '8', s: '', label: 'قطاعات' },
      ],

      aboutMarker: 'عن كابي ماكس',
      aboutTitle: ['كيان مبني على ', 'الحوكمة.', ' يقوده التملّك.'],
      aboutLede: 'بصفتها الكيان الأم، تضع كابي ماكس القابضة الاستراتيجية وتخصيص رأس المال وإدارة المخاطر لكل شركة تابعة — جامعةً بين الانضباط المؤسسي ونماذج التملّك الحديثة.',
      aboutBody: 'من العقارات والمعادن الثمينة إلى الأصول الرقمية والتقنية المالية، تعمل كل شركة بدور واضح تحت مظلة واحدة. معًا تجعل تملّك حصة في أصول حقيقية مدرّة للدخل أمرًا بسيطًا وشفافًا.',
      aboutMeta: [
        ['التأسيس', '2024'],
        ['الشركات', '13'],
        ['الولايات', 'UK · USA · UAE'],
        ['الهيكل', 'مجموعة قابضة'],
      ],

      groupMarker: 'المجموعة',
      groupTitle: ['شركات متخصصة، ', 'مظلة واحدة.'],
      groupBody: 'محفظة من الكيانات المرخّصة، لكل منها دور محدّد في منظومة كابي ماكس.',
      viewAll: 'عرض كل الشركات',

      methodMarker: 'كيف يعمل التملّك',
      methodTitle: ['من أصل حقيقي ', 'إلى حصتك.'],
      methods: [
        ['الهيكلة', 'تُوضع الأصول في هياكل SPV قانونية ضمن المجموعة.'],
        ['الترميز', 'تُقسَّم الملكية إلى حصص جزئية قابلة للتداول.'],
        ['التملّك والتخارج', 'تابع الأداء وتخارج عبر أسواق ثانوية منظّمة.'],
      ],

      ecoMarker: 'المنصات والبنية الرقمية',
      ecoTitle: ['منظومة ', 'كابي ماكس.'],
      ecoBody: 'منصات وعملة خدمية وتمويل رقمي — البنية التحتية للتملّك.',
      learnMore: 'اعرف المزيد',
      visit: 'زيارة',
      currencyLabel: 'Pronova — عملة خدمية',
      novaLabel: 'نوفا للتمويل الرقمي',

      whyMarker: 'لماذا كابي ماكس',
      whyTitle: ['الشريك الصحيح ', 'لتملّك مستدام.'],
      why: [
        ['الحوكمة', 'استراتيجية وإدارة مخاطر وامتثال على مستوى المجموعة.'],
        ['مدعوم بأصول', 'أصول حقيقية مُهيكلة في SPV ومؤمَّنة عبر HCC.'],
        ['الشفافية', 'تقارير واضحة عمّا تملكه وكيف يؤدي.'],
        ['حضور عالمي', 'نعمل عبر المملكة المتحدة والولايات المتحدة والإمارات.'],
        ['وصول جزئي', 'أصول عالية القيمة، تُمتلك بحصص في المتناول.'],
        ['قيمة طويلة الأمد', 'مبنية للنمو المركّب لا المضاربة.'],
      ],

      ctaMarker: 'ابدأ محادثة',
      ctaTitle: ['لنبنِ شيئًا ', 'يدوم.'],
      ctaBody: 'استكشف المجموعة ومنصّاتنا والأصول التي يمكنك تملّكها.',
      contactCta: 'تواصل معنا',
      exploreCta: 'استكشف المجموعة',
    },
  }[language]

  return (
    <div className="bg-cream text-ink">
      {/* ============================================================ HERO */}
      <section className="relative -mt-[68px] min-h-screen flex flex-col justify-end bg-forest-pitch overflow-hidden">
        <img src={IMAGES.hero} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ filter: 'brightness(0.42) saturate(0.8) contrast(1.1)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,22,26,0.55) 0%, rgba(0,22,26,0.35) 40%, rgba(0,22,26,0.92) 100%)' }} />
        <div className="absolute inset-y-0 left-1/4 w-px bg-gradient-to-b from-transparent via-[color:var(--line-sand)] to-transparent" />
        <div className="absolute inset-y-0 left-3/4 w-px bg-gradient-to-b from-transparent via-[color:var(--line-sand)] to-transparent" />

        <div className="relative z-10 max-w-[1480px] w-full mx-auto px-6 lg:px-12 pt-44 pb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE }}>
            <span className="eyebrow inline-flex items-center gap-3 text-sand/85">
              <span className="h-px w-10 bg-primary" />
              {c.heroEyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.15 }}
            className="mt-8 font-display font-medium text-sand"
            style={{ fontSize: 'clamp(3rem, 9vw, 7rem)', lineHeight: 0.95, letterSpacing: '-0.03em' }}
          >
            {c.heroLine1}<br />
            <span className="accent-em">{c.heroAccent}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
            className="mt-12 pt-10 border-t border-[color:var(--line-sand-mid)] grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-20 items-start"
          >
            <div>
              <p className="text-lg text-sand/80 leading-relaxed max-w-xl">{c.heroLede}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link to="/companies" className={`group ${BTN_SAND}`}>
                  {c.exploreGroup}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/investors" className={BTN_GHOST_LIGHT}>{c.startOwning}</Link>
              </div>
            </div>
            <div>
              <div className="mono-label text-sand/45 mb-5">{c.glance}</div>
              <div className="grid grid-cols-3 gap-6">
                {c.stats.map((st, i) => (
                  <div key={i}>
                    <div className="font-display font-medium text-sand" style={{ fontSize: 'clamp(2.2rem,4vw,3.4rem)', lineHeight: 1 }}>{st.n}</div>
                    <div className="mono-label text-sand/50 mt-2" style={{ fontSize: '0.6rem' }}>{st.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================================================== LOGO MARQUEE */}
      <section className="relative bg-white dark:bg-[#08201d] border-b border-[color:var(--line-mid)] py-16 overflow-hidden">
        <div className="space-y-12">
          {/* Row 1 — scrolls left */}
          <div className="flex">
            <div className="marquee-track flex items-center gap-28 pr-28 w-max shrink-0">
              {[...logoCompanies, ...logoCompanies].map((id, i) => (
                <img
                  key={`a-${i}`}
                  src={getCompanyLogo(id, marqueeBg)}
                  alt={companyName(id, language)}
                  className="h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 shrink-0"
                />
              ))}
            </div>
          </div>
          {/* Row 2 — scrolls the opposite way */}
          <div className="flex">
            <div className="marquee-track flex items-center gap-28 pr-28 w-max shrink-0" style={{ animationDirection: 'reverse' }}>
              {[...[...logoCompanies].reverse(), ...[...logoCompanies].reverse()].map((id, i) => (
                <img
                  key={`b-${i}`}
                  src={getCompanyLogo(id, marqueeBg)}
                  alt={companyName(id, language)}
                  className="h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 shrink-0"
                />
              ))}
            </div>
          </div>
        </div>

        {/* edge fades (white in light, deep in dark) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 lg:w-40 bg-gradient-to-r from-white dark:from-[#08201d] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 lg:w-40 bg-gradient-to-l from-white dark:from-[#08201d] to-transparent" />
      </section>

      {/* =========================================================== ABOUT */}
      <section className="bg-paper text-ink py-28 lg:py-40">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-12 grid lg:grid-cols-[1fr_1.5fr] gap-14 lg:gap-28">
          <Reveal className="lg:sticky lg:top-28 self-start">
            <Marker num="01" label={c.aboutMarker} light />
            <h2 className="font-display font-medium leading-[1.02]" style={{ fontSize: 'clamp(2.2rem,4vw,3.6rem)', letterSpacing: '-0.025em' }}>
              {c.aboutTitle[0]}<span className="accent-em">{c.aboutTitle[1]}</span>{c.aboutTitle[2]}
            </h2>
            <p className="mt-7 text-lg text-ink/70 leading-relaxed">{c.aboutLede}</p>
            <div className="mt-10 grid grid-cols-2 gap-y-7 gap-x-8">
              {c.aboutMeta.map(([k, v], i) => (
                <div key={i}>
                  <div className="mono-label text-ink/45" style={{ fontSize: '0.62rem' }}>{k}</div>
                  <div className="font-display text-xl mt-1">{v}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xl leading-[1.55] text-ink/85">
              <span className="font-display italic text-primary float-left mr-3 leading-[0.8]" style={{ fontSize: '4.5rem' }}>
                {isAr ? '«' : 'C'}
              </span>
              {c.aboutBody}
            </p>
            <div className="mt-10 border-l-2 border-accent pl-6 py-1">
              <p className="font-display italic text-2xl text-ink/80 leading-snug">
                {isAr ? 'نحن نبني تملّكًا يدوم — لا مجرد عوائد.' : 'We build ownership that endures — not just returns.'}
              </p>
            </div>
            <div className="mt-12 relative overflow-hidden aspect-[16/10]">
              <img src={IMAGES.about} alt="" className="w-full h-full object-cover" style={{ filter: 'saturate(0.9) contrast(1.05) brightness(0.92)' }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(0,22,26,0.6) 100%)' }} />
              <span className="absolute bottom-5 left-5 mono-label text-sand/80" style={{ fontSize: '0.6rem' }}>FIG. 01 / FOUNDATION</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================= THE GROUP */}
      <section className="bg-forest-darker text-sand py-28 lg:py-40">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-12">
          <Reveal className="grid lg:grid-cols-2 gap-10 items-end">
            <div>
              <Marker num="02" label={c.groupMarker} />
              <h2 className="font-display font-medium leading-[1.02]" style={{ fontSize: 'clamp(2.2rem,4.5vw,4rem)', letterSpacing: '-0.025em' }}>
                {c.groupTitle[0]}<span className="accent-em">{c.groupTitle[1]}</span>
              </h2>
            </div>
            <p className="text-lg text-sand/70 leading-relaxed lg:pb-2">{c.groupBody}</p>
          </Reveal>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[color:var(--line-sand)]">
            {companyIds.map((id, i) => {
              const meta = companyRegistry[id]
              const Icon = meta.icon
              const logo = getCompanyLogo(id, 'dark') // dark section -> light logo asset
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
                  </Link>
                </Reveal>
              )
            })}
          </div>

          <Reveal className="mt-12">
            <Link to="/companies" className={`group ${BTN_GHOST_LIGHT}`}>
              {c.viewAll}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ====================================================== METHODOLOGY */}
      <section className="bg-cream text-ink py-28 lg:py-40">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-12">
          <Reveal className="grid lg:grid-cols-[1.5fr_1fr] gap-10 items-end">
            <div>
              <Marker num="03" label={c.methodMarker} light />
              <h2 className="font-display font-medium leading-[1.02]" style={{ fontSize: 'clamp(2.2rem,4.5vw,4rem)', letterSpacing: '-0.025em' }}>
                {c.methodTitle[0]}<span className="accent-em">{c.methodTitle[1]}</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 border-t border-[color:var(--line-dark)]">
            {c.methods.map(([title, desc], i) => (
              <Reveal key={i}>
                <div className="group grid grid-cols-[60px_1fr] md:grid-cols-[100px_280px_1fr_48px] gap-6 items-center py-9 border-b border-[color:var(--line-dark)] hover:px-4 transition-all duration-500" style={{ transitionTimingFunction: 'var(--ease-out)' }}>
                  <span className="font-display italic text-3xl text-primary">0{i + 1}.</span>
                  <h3 className="font-display text-2xl md:text-3xl font-medium">{title}</h3>
                  <p className="text-ink/65 leading-relaxed col-span-2 md:col-span-1">{desc}</p>
                  <ArrowRight className="hidden md:block w-5 h-5 text-ink/30 group-hover:text-primary group-hover:translate-x-2 transition-all justify-self-end" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= ECOSYSTEM */}
      <section className="bg-forest text-sand py-28 lg:py-40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem]" style={{ background: 'radial-gradient(circle, rgba(47,173,111,0.08), transparent 60%)' }} />
        <div className="relative max-w-[1480px] mx-auto px-6 lg:px-12">
          <Reveal>
            <Marker num="04" label={c.ecoMarker} />
            <div className="grid lg:grid-cols-2 gap-10 items-end">
              <h2 className="font-display font-medium leading-[1.02]" style={{ fontSize: 'clamp(2.2rem,4.5vw,4rem)', letterSpacing: '-0.025em' }}>
                {c.ecoTitle[0]}<span className="accent-em">{c.ecoTitle[1]}</span>
              </h2>
              <p className="text-lg text-sand/70 leading-relaxed lg:pb-2">{c.ecoBody}</p>
            </div>
          </Reveal>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[color:var(--line-sand)]">
            {platformContent.map((p, i) => (
              <Reveal key={p.id} delay={(i % 4) * 0.05}>
                <div className="group flex flex-col h-full p-7 border-b border-r border-[color:var(--line-sand)] hover:bg-[rgba(47,173,111,0.05)] transition-colors">
                  <span className="mono-label text-sand/35" style={{ fontSize: '0.6rem' }}>/ 0{i + 1}</span>
                  <h4 className="mt-4 font-display text-lg font-medium leading-snug">{p[language].name}</h4>
                  <p className="mt-2 text-sm text-sand/60 leading-relaxed flex-1">{p[language].short}</p>
                  <div className="mt-5 flex items-center gap-4 text-sm">
                    <Link to={`/platforms/${p.id}`} className="text-primary inline-flex items-center gap-1 hover:gap-2 transition-all">
                      {c.learnMore} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    {p.externalUrl && (
                      <a href={p.externalUrl} target="_blank" rel="noopener noreferrer" className="text-sand/50 hover:text-sand inline-flex items-center gap-1">
                        {c.visit} <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid md:grid-cols-2 border-l border-[color:var(--line-sand)]">
            <Reveal>
              <Link to="/currency" className="group flex items-center gap-5 p-7 border-b border-r border-[color:var(--line-sand)] hover:bg-[rgba(47,173,111,0.05)] transition-colors">
                <span className="font-display italic text-3xl text-primary">¤</span>
                <span className="flex-1">
                  <span className="block font-display text-lg font-medium">{c.currencyLabel}</span>
                  <span className="block text-sm text-sand/60 mt-1">{currencyContent[language].short}</span>
                </span>
                <ArrowUpRight className="w-4 h-4 text-sand/40 group-hover:text-primary transition-colors" />
              </Link>
            </Reveal>
            <Reveal delay={0.05}>
              <Link to="/nova" className="group flex items-center gap-5 p-7 border-b border-r border-[color:var(--line-sand)] hover:bg-[rgba(47,173,111,0.05)] transition-colors">
                <span className="font-display italic text-3xl text-primary">N</span>
                <span className="flex-1">
                  <span className="block font-display text-lg font-medium">{c.novaLabel}</span>
                  <span className="block text-sm text-sand/60 mt-1">{novaContent[language].tagline}</span>
                </span>
                <ArrowUpRight className="w-4 h-4 text-sand/40 group-hover:text-primary transition-colors" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =============================================================== WHY */}
      <section className="bg-forest-deep text-sand py-28 lg:py-40">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-12">
          <Reveal className="grid lg:grid-cols-2 gap-10 items-end">
            <div>
              <Marker num="05" label={c.whyMarker} />
              <h2 className="font-display font-medium leading-[1.02]" style={{ fontSize: 'clamp(2.2rem,4.5vw,4rem)', letterSpacing: '-0.025em' }}>
                {c.whyTitle[0]}<span className="accent-em">{c.whyTitle[1]}</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[color:var(--line-sand)]">
            {c.why.map(([title, desc], i) => (
              <Reveal key={i} delay={(i % 3) * 0.05}>
                <div className="group p-8 border-b border-r border-[color:var(--line-sand)] hover:bg-forest transition-colors h-full relative">
                  <span className="absolute top-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-500" style={{ transitionTimingFunction: 'var(--ease-out)' }} />
                  <span className="font-display italic text-3xl text-primary">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-xl font-medium">{title}</h3>
                  <p className="mt-2 text-sm text-sand/60 leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================================== CTA */}
      <section className="bg-forest-pitch text-sand py-28 lg:py-40 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-[40rem] h-[40rem]" style={{ background: 'radial-gradient(circle, rgba(47,173,111,0.09), transparent 60%)' }} />
        <div className="relative max-w-[1480px] mx-auto px-6 lg:px-12">
          <Reveal className="max-w-3xl">
            <Marker num="06" label={c.ctaMarker} />
            <h2 className="font-display font-medium leading-[0.98]" style={{ fontSize: 'clamp(2.6rem,7vw,6rem)', letterSpacing: '-0.03em' }}>
              {c.ctaTitle[0]}<span className="accent-em">{c.ctaTitle[1]}</span>
            </h2>
            <p className="mt-7 text-lg text-sand/70 leading-relaxed">{c.ctaBody}</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className={`group ${BTN_SAND}`}>
                {c.contactCta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/companies" className={BTN_GHOST_LIGHT}>{c.exploreCta}</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

export default Home

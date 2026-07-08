import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Building2, Hotel, LineChart, ShieldCheck, Shield, BadgeCheck } from 'lucide-react'
import { PageHero, Band, Marker, Reveal, BTN } from '@/components/editorial'
import { getPartnerLogo } from '@/data/logos'

const Partners = ({ language }) => {
  const translations = {
    en: {
      heroEyebrow: 'The Ecosystem',
      heroTitle: 'The partners who make it ',
      heroAccent: 'verifiable.',
      heroSubtitle: 'Licensed operators, insurers, and oversight bodies who make the Capimax ecosystem verifiable and complete.',
      partnershipTypes: 'Partnership Types',
      realEstate: 'Real Estate & Commercial',
      insurance: 'Insurance',
      oversight: 'Oversight & Verification',
      learnMore: 'Learn More',
      visitWebsite: 'Visit Website',
      role: 'Role in the ecosystem',
      responsibilities: 'Responsibilities',
      typesMarker: 'Partnership categories',
      typesTitle: 'Three roles, ',
      typesTitleAccent: 'one accountable chain.',
      typesBody: 'Every partner occupies a defined place in the chain — building the assets, insuring them, and independently verifying that what investors see is real.',
      partnersInCategory: 'Partners',
      partnersMarker: 'The network',
      partnersTitle: 'Meet the partners ',
      partnersTitleAccent: 'behind the group.',
      partnersBody: 'Independent, licensed partners across real estate, insurance, and financial oversight — each with a clear mandate within the ecosystem.',
      statsMarker: 'How the network holds together',
      statsTitle: 'Structure over ',
      statsTitleAccent: 'promises.',
      stat1: 'Real estate & commercial partners',
      stat1Label: 'building and operating the underlying assets',
      stat2: 'Insurance partners',
      stat2Label: 'covering assets and platform risk',
      stat3: 'Independent oversight partner',
      stat3Label: 'evaluation, verification & document custody',
      stat4: 'USA + UK',
      stat4Label: 'jurisdictions where our partners are licensed',
      ctaMarker: 'Begin a conversation',
      ctaTitle: 'Become a ',
      ctaTitleAccent: 'partner.',
      ctaBody: 'Operators, insurers, and verification bodies who share our standard for transparency — let\'s talk about a role in the ecosystem.',
      partnershipOpps: 'Partnership Opportunities',
      contactUs: 'Contact Us',
    },
    ar: {
      heroEyebrow: 'المنظومة',
      heroTitle: 'الشركاء الذين يجعلونها ',
      heroAccent: 'قابلة للتحقق.',
      heroSubtitle: 'شركات مرخّصة وشركات تأمين وجهات رقابية تجعل منظومة كابيماكس قابلة للتحقق ومكتملة.',
      partnershipTypes: 'أنواع الشراكات',
      realEstate: 'العقارات والأعمال التجارية',
      insurance: 'التأمين',
      oversight: 'الرقابة والتحقق',
      learnMore: 'تعرّف أكثر',
      visitWebsite: 'زيارة الموقع',
      role: 'الدور في المنظومة',
      responsibilities: 'المسؤوليات',
      typesMarker: 'فئات الشراكة',
      typesTitle: 'ثلاثة أدوار، ',
      typesTitleAccent: 'سلسلة مساءلة واحدة.',
      typesBody: 'لكل شريك موقع محدّد في السلسلة — بناء الأصول، والتأمين عليها، والتحقق المستقل من أن ما يراه المستثمرون حقيقي.',
      partnersInCategory: 'الشركاء',
      partnersMarker: 'الشبكة',
      partnersTitle: 'تعرّف على الشركاء ',
      partnersTitleAccent: 'وراء المجموعة.',
      partnersBody: 'شركاء مستقلون ومرخّصون في العقارات والتأمين والرقابة المالية — لكلٍّ منهم تفويض واضح ضمن المنظومة.',
      statsMarker: 'كيف تترابط الشبكة',
      statsTitle: 'بنية بدلاً من ',
      statsTitleAccent: 'الوعود.',
      stat1: 'شركاء العقارات والأعمال',
      stat1Label: 'بناء وتشغيل الأصول الأساسية',
      stat2: 'شركاء التأمين',
      stat2Label: 'تغطية الأصول ومخاطر المنصّة',
      stat3: 'شريك رقابي مستقل',
      stat3Label: 'التقييم والتحقق وحفظ المستندات',
      stat4: 'الولايات المتحدة + المملكة المتحدة',
      stat4Label: 'الولايات القضائية التي يُرخَّص فيها شركاؤنا',
      ctaMarker: 'ابدأ محادثة',
      ctaTitle: 'كن ',
      ctaTitleAccent: 'شريكاً.',
      ctaBody: 'المشغّلون وشركات التأمين وجهات التحقق الذين يشاركوننا معيار الشفافية — لنتحدّث عن دور ضمن المنظومة.',
      partnershipOpps: 'فرص الشراكة',
      contactUs: 'تواصل معنا',
    },
  }

  const t = translations[language]

  // Partner categories — each with a clear role in the ecosystem.
  // Keys map partners to a category and drive the grouped card layout.
  const categories = {
    realEstate: {
      label: t.realEstate,
      icon: Building2,
      description: language === 'ar'
        ? 'شركاء مرخّصون يطوّرون ويشغّلون العقارات والأصول التجارية التي ترتكز عليها منتجات المجموعة.'
        : 'Licensed partners that develop and operate the real estate and commercial assets our products are built on.',
    },
    insurance: {
      label: t.insurance,
      icon: ShieldCheck,
      description: language === 'ar'
        ? 'شركات تأمين تغطي الأصول الأساسية ومخاطر المنصّة الرقمية، لحماية المستثمرين والممتلكات معاً.'
        : 'Insurers that cover the underlying assets and platform risk — protecting both investors and property.',
    },
    oversight: {
      label: t.oversight,
      icon: BadgeCheck,
      description: language === 'ar'
        ? 'جهة مستقلة تتولى التقييم المالي والتحقق وحفظ المستندات ومراقبة المخاطر والامتثال عبر المنظومة.'
        : 'An independent body handling financial evaluation, verification, document custody, risk monitoring, and compliance across the ecosystem.',
    },
  }

  const partners = [
    {
      id: 'elite-gate',
      name: 'Elite Gate',
      category: 'realEstate',
      icon: Building2,
      role: language === 'ar'
        ? 'شريك عقاري وتجاري يوفّر ويطوّر الأصول العقارية التي تُرمّز وتُتاح للملكية الجزئية عبر منصّات المجموعة.'
        : 'Real estate & commercial partner that sources and develops the property assets tokenized and offered for fractional ownership across the group\'s platforms.',
      responsibilities: language === 'ar'
        ? ['توفير الأصول العقارية', 'تطوير المشاريع', 'التشغيل التجاري']
        : ['Asset sourcing', 'Project development', 'Commercial operation'],
      website: '#',
    },
    {
      id: 'prim-inn',
      name: 'Prim Inn',
      category: 'realEstate',
      icon: Hotel,
      role: language === 'ar'
        ? 'شريك في الضيافة والعقارات المُدِرّة للدخل، يشغّل أصولاً فندقية تدعم منتجات الملكية الجزئية المدعومة بالعقار.'
        : 'Hospitality and income-producing real estate partner, operating hotel assets that back the group\'s property-linked fractional ownership products.',
      responsibilities: language === 'ar'
        ? ['العقارات الفندقية', 'أصول مُدِرّة للدخل', 'إدارة التشغيل']
        : ['Hotel properties', 'Income-producing assets', 'Operations management'],
      website: '#',
    },
    {
      id: 'nova-asset-management',
      name: 'Nova Asset Management',
      category: 'realEstate',
      icon: LineChart,
      role: language === 'ar'
        ? 'شريك في إدارة الأصول، يشرف على أداء المحافظ العقارية الأساسية ويحافظ على قيمتها طوال دورة الاستثمار.'
        : 'Asset management partner overseeing the performance of the underlying property portfolios and preserving their value through the investment lifecycle.',
      responsibilities: language === 'ar'
        ? ['إدارة الأصول', 'مراقبة الأداء', 'الحفاظ على القيمة']
        : ['Asset management', 'Performance monitoring', 'Value preservation'],
      website: '#',
    },
    {
      id: 'hcc',
      name: 'HCC',
      category: 'insurance',
      icon: Shield,
      role: language === 'ar'
        ? 'شريك تأمين يوفّر تغطية للأصول والمنصّة الرقمية، بما يشمل حماية الممتلكات والمرونة الإلكترونية للبنية التقنية.'
        : 'Insurance partner providing asset and platform coverage — including property protection and cyber resilience for the group\'s technology.',
      responsibilities: language === 'ar'
        ? ['تأمين الأصول', 'حماية الممتلكات', 'المرونة الإلكترونية']
        : ['Asset insurance', 'Property protection', 'Cyber resilience'],
      website: '#',
    },
    {
      id: 'assurx-insurance',
      name: 'Assurax Insurance',
      category: 'insurance',
      icon: ShieldCheck,
      role: language === 'ar'
        ? 'شريك تأمين متخصص في تقييم المخاطر وتأمين المنتجات الرقمية، بما يحمي المستثمرين المشاركين في الملكية الجزئية والأصول المُرمّزة.'
        : 'Insurance partner specializing in risk assessment and coverage for digital products, protecting investors participating in fractional ownership and tokenized assets.',
      responsibilities: language === 'ar'
        ? ['تقييم المخاطر', 'تأمين المنتجات الرقمية', 'حماية المستثمر']
        : ['Risk assessment', 'Digital product coverage', 'Investor protection'],
      website: '#',
    },
    {
      id: 'cim-financial-group',
      name: 'CIM Financial Group',
      category: 'oversight',
      icon: BadgeCheck,
      role: language === 'ar'
        ? 'الجهة الرقابية المستقلة للمنظومة، مسؤولة عن التقييم المالي والتحقق وحفظ المستندات ومراقبة المخاطر والامتثال — بما يضمن أن كل ما يُعرض على المستثمرين مُوثّق ومُتحقَّق منه.'
        : 'The ecosystem\'s independent oversight body — responsible for financial evaluation, verification, document custody, risk monitoring, and compliance, ensuring everything presented to investors is documented and verified.',
      responsibilities: language === 'ar'
        ? ['التقييم المالي', 'التحقق', 'حفظ المستندات', 'مراقبة المخاطر', 'الامتثال']
        : ['Financial evaluation', 'Verification', 'Document custody', 'Risk monitoring', 'Compliance'],
      website: '#',
    },
  ]

  // Order the categories for the grouped layout.
  const categoryOrder = ['realEstate', 'insurance', 'oversight']

  const stats = [
    { number: '3', title: t.stat1, label: t.stat1Label },
    { number: '2', title: t.stat2, label: t.stat2Label },
    { number: '1', title: t.stat3, label: t.stat3Label },
    { number: t.stat4, label: t.stat4Label },
  ]

  return (
    <div className="bg-cream text-ink">
      <PageHero
        eyebrow={t.heroEyebrow}
        title={t.heroTitle}
        accent={t.heroAccent}
        subtitle={t.heroSubtitle}
      />

      {/* ================================================ PARTNERSHIP TYPES */}
      <Band tone="light">
        <Reveal className="grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <Marker num="01" label={t.typesMarker} />
            <h2 className="font-display font-medium leading-[1.02]" style={{ fontSize: 'clamp(2.2rem,4.5vw,4rem)', letterSpacing: '-0.025em' }}>
              {t.typesTitle}<span className="accent-em">{t.typesTitleAccent}</span>
            </h2>
          </div>
          <p className="text-lg text-ink/70 leading-relaxed lg:pb-2">{t.typesBody}</p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[color:var(--line-dark)]">
          {categoryOrder.map((key, i) => {
            const cat = categories[key]
            const Icon = cat.icon
            const members = partners.filter((p) => p.category === key)
            return (
              <Reveal key={key} delay={(i % 3) * 0.05}>
                <div className="group flex flex-col h-full p-7 border-b border-r border-[color:var(--line-dark)] hover:bg-[rgba(47,173,111,0.05)] transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-display italic text-2xl text-primary leading-none">{String(i + 1).padStart(2, '0')}</span>
                    <Icon className="w-6 h-6 text-primary/70" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-medium leading-snug group-hover:text-primary transition-colors">{cat.label}</h3>
                  <p className="mt-3 text-sm text-ink/65 leading-relaxed flex-1">{cat.description}</p>
                  <div className="mt-5 pt-4 border-t border-[color:var(--line-dark)]">
                    <div className="mono-label text-primary mb-2" style={{ fontSize: '0.58rem' }}>{members.length} {t.partnersInCategory}</div>
                    <div className="space-y-1">
                      {members.map((p) => (
                        <div key={p.id} className="text-sm text-ink/70">— {p.name}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Band>

      {/* ================================================== STRATEGIC PARTNERS */}
      <Band tone="dark">
        <Reveal className="grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <Marker num="02" label={t.partnersMarker} light />
            <h2 className="font-display font-medium leading-[1.02] text-sand" style={{ fontSize: 'clamp(2.2rem,4.5vw,4rem)', letterSpacing: '-0.025em' }}>
              {t.partnersTitle}<span className="accent-em">{t.partnersTitleAccent}</span>
            </h2>
          </div>
          <p className="text-lg text-sand/70 leading-relaxed lg:pb-2">{t.partnersBody}</p>
        </Reveal>

        {/* Partners grouped by category */}
        <div className="mt-16 space-y-14">
          {categoryOrder.map((key) => {
            const cat = categories[key]
            const CatIcon = cat.icon
            const members = partners.filter((p) => p.category === key)
            return (
              <div key={key}>
                <Reveal>
                  <div className="flex items-center gap-4 pb-3 mb-8 border-b border-[color:var(--line-sand)]">
                    <CatIcon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    <span className="mono-label text-sand/55">{cat.label}</span>
                    <span className="mono-label text-sand/30 ms-auto" style={{ fontSize: '0.58rem' }}>{members.length} {t.partnersInCategory}</span>
                  </div>
                </Reveal>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[color:var(--line-sand)]">
                  {members.map((partner, i) => {
                    const hasSite = partner.website && partner.website !== '#'
                    const Logo = partner.icon
                    const logo = getPartnerLogo(partner.id, 'dark')
                    return (
                      <Reveal key={partner.id} delay={(i % 3) * 0.05}>
                        <div className="group flex flex-col h-full p-8 border-b border-r border-[color:var(--line-sand)] hover:bg-[rgba(47,173,111,0.05)] transition-colors relative">
                          <span className="absolute top-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-500" style={{ transitionTimingFunction: 'var(--ease-out)' }} />
                          <div className="flex items-center justify-between gap-3">
                            {logo ? (
                              <span className="inline-flex items-center justify-center h-20 px-5 border border-[color:var(--line-sand)]">
                                <img src={logo} alt={partner.name} className="h-14 w-auto max-w-[220px] object-contain" />
                              </span>
                            ) : (
                              <span className="flex items-center justify-center w-12 h-12 border border-[color:var(--line-sand)] text-primary">
                                <Logo className="w-6 h-6" strokeWidth={1.5} />
                              </span>
                            )}
                            <span className="mono-label text-sand/35 shrink-0 text-end" style={{ fontSize: '0.58rem' }}>{cat.label}</span>
                          </div>
                          <h3 className="mt-5 font-display text-xl font-medium leading-snug text-sand group-hover:text-primary transition-colors">{partner.name}</h3>

                          <div className="mt-4">
                            <div className="mono-label text-sand/45 mb-2" style={{ fontSize: '0.58rem' }}>{t.role}</div>
                            <p className="text-sm text-sand/60 leading-relaxed flex-1">{partner.role}</p>
                          </div>

                          <div className="mt-6 pt-5 border-t border-[color:var(--line-sand)]">
                            <div className="mono-label text-sand/45 mb-2" style={{ fontSize: '0.58rem' }}>{t.responsibilities}</div>
                            <div className="flex flex-wrap gap-2">
                              {partner.responsibilities.map((item, idx) => (
                                <span key={idx} className="text-[0.7rem] px-2.5 py-1 border border-[color:var(--line-sand)] text-sand/75">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>

                          {hasSite ? (
                            <a href={partner.website} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all">
                              {t.visitWebsite} <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          ) : (
                            <Link to="/contact" className="mt-6 inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all">
                              {t.learnMore} <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          )}
                        </div>
                      </Reveal>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </Band>

      {/* =================================================== PARTNERSHIP STATS */}
      <Band tone="darker">
        <Reveal>
          <Marker num="03" label={t.statsMarker} light />
          <h2 className="font-display font-medium leading-[1.02] text-sand max-w-3xl" style={{ fontSize: 'clamp(2.2rem,4.5vw,4rem)', letterSpacing: '-0.025em' }}>
            {t.statsTitle}<span className="accent-em">{t.statsTitleAccent}</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 border-t border-l border-[color:var(--line-sand)]">
          {stats.map((stat, i) => (
            <Reveal key={i} delay={(i % 4) * 0.05}>
              <div className="p-8 border-b border-r border-[color:var(--line-sand)] h-full flex flex-col">
                <div className="font-display font-medium text-sand" style={{ fontSize: 'clamp(1.7rem,3.4vw,3rem)', lineHeight: 1.05 }}>{stat.number}</div>
                {stat.title && <div className="mt-3 font-display text-sm text-sand/85 leading-snug">{stat.title}</div>}
                <div className="mono-label text-sand/50 mt-3" style={{ fontSize: '0.58rem' }}>{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* ============================================================= CTA */}
      <Band tone="pitch" className="relative overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-[40rem] h-[40rem]" style={{ background: 'radial-gradient(circle, rgba(47,173,111,0.09), transparent 60%)' }} />
        <Reveal className="relative max-w-3xl">
          <Marker num="04" label={t.ctaMarker} light />
          <h2 className="font-display font-medium leading-[0.98] text-sand" style={{ fontSize: 'clamp(2.6rem,7vw,6rem)', letterSpacing: '-0.03em' }}>
            {t.ctaTitle}<span className="accent-em">{t.ctaTitleAccent}</span>
          </h2>
          <p className="mt-7 text-lg text-sand/70 leading-relaxed">{t.ctaBody}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className={`group ${BTN.sand}`}>
              {t.partnershipOpps}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className={BTN.ghostLight}>{t.contactUs}</Link>
          </div>
        </Reveal>
      </Band>
    </div>
  )
}

export default Partners

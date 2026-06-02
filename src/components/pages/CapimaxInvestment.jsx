import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, TrendingUp } from 'lucide-react'
import { PageHero, Band, Marker, Reveal, BTN } from '@/components/editorial'

const CapimaxInvestment = ({ language = 'en' }) => {
  const translations = {
    en: {
      heroEyebrow: 'Investment Excellence',
      heroTitle: 'Capimax ',
      heroAccent: 'Investment.',
      heroSubtitle: 'Leading global investment platform offering fractional ownership, real estate, precious metals, digital assets, and fintech solutions.',
      overview: 'Company Overview',
      services: 'Our Services',
      locations: 'Global Locations',
      keyFeatures: 'Key Features',
      investment: 'Investment Opportunities',
      contact: 'Contact Information',
      getStarted: 'Start Your Investment Journey',

      overviewTitle: 'Global investment ',
      overviewTitleAccent: 'excellence.',
      overviewDescription: 'Capimax Investment represents the core investment arm of the Capimax Group, operating across three continents with specialized expertise in real estate, digital assets, and precious metals. We provide innovative investment solutions that combine traditional security with cutting-edge digital innovation.',

      servicesTitle: 'Investment ',
      servicesTitleAccent: 'services.',
      servicesBody: 'Comprehensive investment solutions designed to meet diverse financial goals and risk profiles.',
      realEstate: 'Real Estate Investment',
      realEstateDesc: 'Global residential and commercial real estate investment opportunities',
      fractionalInvestment: 'Fractional Investment',
      fractionalDesc: 'Access premium investments with fractional ownership opportunities',
      digitalAssets: 'Digital Assets',
      digitalAssetsDesc: 'Blockchain-backed asset management and tokenization services',
      preciousMetals: 'Precious Metals',
      preciousMetalsDesc: 'Secure investment in gold, silver, and rare metals with certificates',

      featuresTitle: 'Why choose ',
      featuresTitleAccent: 'Capimax Investment.',
      featuresBody: 'Built on pillars of trust, innovation, and excellence to deliver superior investment experiences.',
      transparency: 'Transparency',
      transparencyDesc: 'Every investment is backed by verifiable data and detailed reports',
      security: 'Security',
      securityDesc: 'Bank-level security with comprehensive insurance coverage',
      innovation: 'Innovation',
      innovationDesc: 'Cutting-edge technology including blockchain and tokenization',
      globalReach: 'Global Reach',
      globalReachDesc: 'Operating across UK, USA, UAE with expanding presence worldwide',

      locationsTitle: 'Global ',
      locationsTitleAccent: 'operations.',
      locationsBody: 'Operating across three continents with specialized expertise in key financial markets.',
      uaeOffice: 'UAE Operations',
      uaeAddress: 'Dubai, UAE - Real estate and financial investment in the Middle East',
      ukOffice: 'UK Operations',
      ukAddress: 'London, UK - European real estate and commercial investments',
      usaOffice: 'USA Operations',
      usaAddress: 'New York, USA - Investment in promising American markets',
      verifyLicense: 'Verify License',
      license: 'License',

      currentOpportunities: 'Current investment ',
      currentOpportunitiesAccent: 'opportunities.',
      opportunitiesBody: 'Discover carefully vetted investment opportunities with attractive returns and professional management.',
      realEstateOpp: 'Real Estate Portfolio',
      realEstateOppDesc: 'Diversified real estate investment opportunities across global markets',
      commercialOpp: 'Commercial Properties',
      commercialOppDesc: 'Investment in modern commercial centers and offices in strategic locations',
      digitalOpp: 'Digital Asset Funds',
      digitalOppDesc: 'Digital asset funds with blockchain-backed investments',
      viewDetails: 'View Details',
      investNow: 'Invest Now',
      minInvestment: 'Min Investment',
      expectedReturn: 'Expected Return',
      active: 'Active',
      comingSoon: 'Coming Soon',

      ctaMarker: 'Begin a conversation',
      ctaTitle: 'Ready to start your ',
      ctaTitleAccent: 'investment journey?',
      ctaBody: 'Join thousands of investors who trust Capimax Investment for their financial growth and wealth building needs.',
      startToday: 'Start Investing Today',
      scheduleConsult: 'Schedule Consultation',

      overviewMarker: 'Company overview',
      servicesMarker: 'Our services',
      locationsMarker: 'Global locations',
      featuresMarker: 'Key features',
      opportunitiesMarker: 'Investment opportunities',
      operationsActive: 'Global Operations Active',

      activeInvestors: 'Active Investors',
      countries: 'Countries',
      totalAssets: 'Assets Under Management',
      avgReturns: 'Average Annual Returns',
    },
    ar: {
      heroEyebrow: 'التميز الاستثماري',
      heroTitle: 'كابيماكس ',
      heroAccent: 'للاستثمارات.',
      heroSubtitle: 'منصة استثمارية عالمية رائدة تقدم الملكية الجزئية والعقارات والمعادن الثمينة والأصول الرقمية وحلول التكنولوجيا المالية.',
      overview: 'نظرة عامة على الشركة',
      services: 'خدماتنا',
      locations: 'المواقع العالمية',
      keyFeatures: 'الميزات الرئيسية',
      investment: 'الفرص الاستثمارية',
      contact: 'معلومات الاتصال',
      getStarted: 'ابدأ رحلة الاستثمار',

      overviewTitle: 'التميز الاستثماري ',
      overviewTitleAccent: 'العالمي.',
      overviewDescription: 'تمثل كابيماكس للاستثمارات الذراع الاستثماري الأساسي لمجموعة كابيماكس، وتعمل عبر ثلاث قارات مع خبرة متخصصة في العقارات والأصول الرقمية والمعادن الثمينة. نقدم حلول استثمارية مبتكرة تجمع بين الأمان التقليدي والابتكار الرقمي المتطور.',

      servicesTitle: 'الخدمات ',
      servicesTitleAccent: 'الاستثمارية.',
      servicesBody: 'حلول استثمارية شاملة مصممة لتلبية أهداف مالية متنوعة وملفات مخاطر مختلفة.',
      realEstate: 'الاستثمار العقاري',
      realEstateDesc: 'فرص استثمارية عقارية سكنية وتجارية عالمية',
      fractionalInvestment: 'الاستثمار الجزئي',
      fractionalDesc: 'الوصول إلى الاستثمارات المتميزة مع فرص الملكية الجزئية',
      digitalAssets: 'الأصول الرقمية',
      digitalAssetsDesc: 'إدارة الأصول المدعومة بالبلوك تشين وخدمات الترميز',
      preciousMetals: 'المعادن الثمينة',
      preciousMetalsDesc: 'استثمار آمن في الذهب والفضة والمعادن النادرة مع الشهادات',

      featuresTitle: 'لماذا تختار ',
      featuresTitleAccent: 'كابيماكس للاستثمارات.',
      featuresBody: 'مبنية على ركائز الثقة والابتكار والتميز لتقديم تجارب استثمارية متفوقة.',
      transparency: 'الشفافية',
      transparencyDesc: 'كل استثمار مدعوم ببيانات قابلة للتحقق وتقارير مفصلة',
      security: 'الأمان',
      securityDesc: 'أمان على مستوى البنوك مع تغطية تأمينية شاملة',
      innovation: 'الابتكار',
      innovationDesc: 'تكنولوجيا متطورة تشمل البلوك تشين والترميز',
      globalReach: 'الوصول العالمي',
      globalReachDesc: 'نعمل في المملكة المتحدة والولايات المتحدة والإمارات مع التوسع عالمياً',

      locationsTitle: 'العمليات ',
      locationsTitleAccent: 'العالمية.',
      locationsBody: 'نعمل عبر ثلاث قارات مع خبرة متخصصة في الأسواق المالية الرئيسية.',
      uaeOffice: 'العمليات في الإمارات',
      uaeAddress: 'دبي، الإمارات - الاستثمار العقاري والمالي في الشرق الأوسط',
      ukOffice: 'العمليات في المملكة المتحدة',
      ukAddress: 'لندن، المملكة المتحدة - الاستثمارات العقارية والتجارية الأوروبية',
      usaOffice: 'العمليات في الولايات المتحدة',
      usaAddress: 'نيويورك، الولايات المتحدة - الاستثمار في الأسواق الأمريكية الواعدة',
      verifyLicense: 'التحقق من الترخيص',
      license: 'ترخيص',

      currentOpportunities: 'الفرص الاستثمارية ',
      currentOpportunitiesAccent: 'الحالية.',
      opportunitiesBody: 'اكتشف فرصاً استثمارية مدروسة بعناية بعوائد جذابة وإدارة احترافية.',
      realEstateOpp: 'محفظة العقارات',
      realEstateOppDesc: 'فرص استثمارية عقارية متنوعة عبر الأسواق العالمية',
      commercialOpp: 'العقارات التجارية',
      commercialOppDesc: 'الاستثمار في المراكز التجارية والمكاتب الحديثة في مواقع استراتيجية',
      digitalOpp: 'صناديق الأصول الرقمية',
      digitalOppDesc: 'صناديق أصول رقمية باستثمارات مدعومة بالبلوك تشين',
      viewDetails: 'عرض التفاصيل',
      investNow: 'استثمر الآن',
      minInvestment: 'الحد الأدنى للاستثمار',
      expectedReturn: 'العائد المتوقع',
      active: 'نشط',
      comingSoon: 'قريباً',

      ctaMarker: 'ابدأ محادثة',
      ctaTitle: 'هل أنت مستعد لبدء ',
      ctaTitleAccent: 'رحلة الاستثمار؟',
      ctaBody: 'انضم إلى آلاف المستثمرين الذين يثقون بكابيماكس للاستثمارات لنمو ثرواتهم المالية.',
      startToday: 'ابدأ الاستثمار اليوم',
      scheduleConsult: 'حجز استشارة',

      overviewMarker: 'نظرة عامة على الشركة',
      servicesMarker: 'خدماتنا',
      locationsMarker: 'المواقع العالمية',
      featuresMarker: 'الميزات الرئيسية',
      opportunitiesMarker: 'الفرص الاستثمارية',
      operationsActive: 'العمليات العالمية نشطة',

      activeInvestors: 'مستثمر نشط',
      countries: 'دولة',
      totalAssets: 'الأصول المدارة',
      avgReturns: 'متوسط العوائد السنوية',
    },
  }

  const t = translations[language]

  const companyData = {
    locations: [
      { region: t.uaeOffice, description: t.uaeAddress, license: 'CN-5639305' },
      { region: t.ukOffice, description: t.ukAddress, license: '16099034' },
      { region: t.usaOffice, description: t.usaAddress, license: '2024-001559635' },
    ],
    services: [
      { title: t.realEstate, description: t.realEstateDesc },
      { title: t.fractionalInvestment, description: t.fractionalDesc },
      { title: t.digitalAssets, description: t.digitalAssetsDesc },
      { title: t.preciousMetals, description: t.preciousMetalsDesc },
    ],
    keyFeatures: [
      { title: t.transparency, description: t.transparencyDesc },
      { title: t.security, description: t.securityDesc },
      { title: t.innovation, description: t.innovationDesc },
      { title: t.globalReach, description: t.globalReachDesc },
    ],
    stats: [
      { number: '1,000+', label: t.activeInvestors },
      { number: '15+', label: t.countries },
      { number: '$250M+', label: t.totalAssets },
      { number: '18.5%', label: t.avgReturns },
    ],
    opportunities: [
      {
        title: t.realEstateOpp,
        description: t.realEstateOppDesc,
        status: t.active,
        isActive: true,
        minInvestment: '$1,000',
        expectedReturn: '12-15%',
        category: 'Real Estate',
      },
      {
        title: t.commercialOpp,
        description: t.commercialOppDesc,
        status: t.active,
        isActive: true,
        minInvestment: '$1,000',
        expectedReturn: '15-18%',
        category: 'Commercial',
      },
      {
        title: t.digitalOpp,
        description: t.digitalOppDesc,
        status: t.comingSoon,
        isActive: false,
        minInvestment: '$500',
        expectedReturn: '20-25%',
        category: 'Digital',
      },
    ],
  }

  return (
    <div className="bg-cream text-ink">
      <PageHero
        eyebrow={t.heroEyebrow}
        title={t.heroTitle}
        accent={t.heroAccent}
        subtitle={t.heroSubtitle}
      >
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link to="/investors" className={`group ${BTN.sand}`}>
            {t.getStarted}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/contact" className={BTN.ghostLight}>{t.contact}</Link>
        </div>
      </PageHero>

      {/* =========================================================== STATS */}
      <Band tone="dark">
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-[color:var(--line-sand)]">
          {companyData.stats.map((stat, i) => (
            <Reveal key={i} delay={(i % 4) * 0.05}>
              <div className="p-8 border-b border-r border-[color:var(--line-sand)] h-full">
                <div className="font-display font-medium text-sand" style={{ fontSize: 'clamp(2.2rem,4vw,3.4rem)', lineHeight: 1 }}>{stat.number}</div>
                <div className="mono-label text-sand/50 mt-3" style={{ fontSize: '0.6rem' }}>{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* ======================================================== OVERVIEW */}
      <Band tone="light">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-14 lg:gap-24 items-start">
          <Reveal>
            <Marker num="01" label={t.overviewMarker} />
            <h2 className="font-display font-medium leading-[1.04]" style={{ fontSize: 'clamp(2.2rem,4vw,3.6rem)', letterSpacing: '-0.025em' }}>
              {t.overviewTitle}<span className="accent-em">{t.overviewTitleAccent}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl leading-[1.55] text-ink/85">{t.overviewDescription}</p>
            <div className="mt-8 inline-flex items-center gap-3 border border-[color:var(--line-dark)] px-5 py-3">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="mono-label text-ink/60" style={{ fontSize: '0.62rem' }}>{t.operationsActive}</span>
            </div>
          </Reveal>
        </div>
      </Band>

      {/* ======================================================== SERVICES */}
      <Band tone="paper">
        <Reveal className="grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <Marker num="02" label={t.servicesMarker} />
            <h2 className="font-display font-medium leading-[1.02]" style={{ fontSize: 'clamp(2.2rem,4.5vw,4rem)', letterSpacing: '-0.025em' }}>
              {t.servicesTitle}<span className="accent-em">{t.servicesTitleAccent}</span>
            </h2>
          </div>
          <p className="text-lg text-ink/70 leading-relaxed lg:pb-2">{t.servicesBody}</p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[color:var(--line-dark)]">
          {companyData.services.map((service, i) => (
            <Reveal key={i} delay={(i % 4) * 0.05}>
              <div className="group flex flex-col h-full p-7 border-b border-r border-[color:var(--line-dark)] hover:bg-[rgba(47,173,111,0.05)] transition-colors">
                <span className="font-display italic text-2xl text-primary leading-none">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 font-display text-lg font-medium leading-snug group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="mt-3 text-sm text-ink/65 leading-relaxed flex-1">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* ================================================ GLOBAL LOCATIONS */}
      <Band tone="dark">
        <Reveal className="grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <Marker num="03" label={t.locationsMarker} light />
            <h2 className="font-display font-medium leading-[1.02] text-sand" style={{ fontSize: 'clamp(2.2rem,4.5vw,4rem)', letterSpacing: '-0.025em' }}>
              {t.locationsTitle}<span className="accent-em">{t.locationsTitleAccent}</span>
            </h2>
          </div>
          <p className="text-lg text-sand/70 leading-relaxed lg:pb-2">{t.locationsBody}</p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[color:var(--line-sand)]">
          {companyData.locations.map((location, i) => (
            <Reveal key={i} delay={(i % 3) * 0.05}>
              <div className="group flex flex-col h-full p-8 border-b border-r border-[color:var(--line-sand)] hover:bg-[rgba(47,173,111,0.05)] transition-colors">
                <span className="font-display italic text-2xl text-primary leading-none">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 font-display text-xl font-medium leading-snug text-sand group-hover:text-primary transition-colors">{location.region}</h3>
                <p className="mt-3 text-sm text-sand/60 leading-relaxed flex-1">{location.description}</p>
                <div className="mt-6 pt-5 border-t border-[color:var(--line-sand)]">
                  <div className="mono-label text-sand/45" style={{ fontSize: '0.58rem' }}>{t.license}</div>
                  <div className="font-display text-base mt-1 text-sand">{location.license}</div>
                  <Link to="/documents" className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all">
                    {t.verifyLicense} <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* ===================================================== KEY FEATURES */}
      <Band tone="light">
        <Reveal className="grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <Marker num="04" label={t.featuresMarker} />
            <h2 className="font-display font-medium leading-[1.02]" style={{ fontSize: 'clamp(2.2rem,4.5vw,4rem)', letterSpacing: '-0.025em' }}>
              {t.featuresTitle}<span className="accent-em">{t.featuresTitleAccent}</span>
            </h2>
          </div>
          <p className="text-lg text-ink/70 leading-relaxed lg:pb-2">{t.featuresBody}</p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[color:var(--line-dark)]">
          {companyData.keyFeatures.map((feature, i) => (
            <Reveal key={i} delay={(i % 4) * 0.05}>
              <div className="group flex flex-col h-full p-7 border-b border-r border-[color:var(--line-dark)] hover:bg-[rgba(47,173,111,0.05)] transition-colors relative">
                <span className="absolute top-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-500" style={{ transitionTimingFunction: 'var(--ease-out)' }} />
                <span className="font-display italic text-2xl text-primary leading-none">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 font-display text-lg font-medium leading-snug group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="mt-3 text-sm text-ink/65 leading-relaxed flex-1">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* ============================================ INVESTMENT OPPORTUNITIES */}
      <Band tone="paper">
        <Reveal className="grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <Marker num="05" label={t.opportunitiesMarker} />
            <h2 className="font-display font-medium leading-[1.02]" style={{ fontSize: 'clamp(2.2rem,4.5vw,4rem)', letterSpacing: '-0.025em' }}>
              {t.currentOpportunities}<span className="accent-em">{t.currentOpportunitiesAccent}</span>
            </h2>
          </div>
          <p className="text-lg text-ink/70 leading-relaxed lg:pb-2">{t.opportunitiesBody}</p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[color:var(--line-dark)]">
          {companyData.opportunities.map((opportunity, i) => (
            <Reveal key={i} delay={(i % 3) * 0.05}>
              <div className="group flex flex-col h-full p-8 border-b border-r border-[color:var(--line-dark)] hover:bg-[rgba(47,173,111,0.05)] transition-colors">
                <div className="flex items-center justify-between gap-3">
                  <span className={`text-[0.65rem] px-2.5 py-1 border ${opportunity.isActive ? 'border-primary text-primary' : 'border-[color:var(--line-dark)] text-ink/45'}`}>
                    {opportunity.status}
                  </span>
                  <span className="mono-label text-ink/40" style={{ fontSize: '0.58rem' }}>{opportunity.category}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-medium leading-snug group-hover:text-primary transition-colors">{opportunity.title}</h3>
                <p className="mt-3 text-sm text-ink/65 leading-relaxed flex-1">{opportunity.description}</p>

                <div className="mt-6 pt-5 border-t border-[color:var(--line-dark)] grid grid-cols-2 gap-4">
                  <div>
                    <div className="mono-label text-ink/45" style={{ fontSize: '0.55rem' }}>{t.minInvestment}</div>
                    <div className="font-display text-base mt-1">{opportunity.minInvestment}</div>
                  </div>
                  <div>
                    <div className="mono-label text-ink/45" style={{ fontSize: '0.55rem' }}>{t.expectedReturn}</div>
                    <div className="font-display text-base mt-1 text-primary flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" />{opportunity.expectedReturn}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-4 text-sm">
                  <Link to="/investors" className="inline-flex items-center gap-1 text-ink/70 hover:text-primary hover:gap-2 transition-all">
                    {t.viewDetails} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/investors" className="inline-flex items-center gap-1 text-primary hover:gap-2 transition-all">
                    {t.investNow} <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* ============================================================= CTA */}
      <Band tone="pitch" className="relative overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-[40rem] h-[40rem]" style={{ background: 'radial-gradient(circle, rgba(47,173,111,0.09), transparent 60%)' }} />
        <Reveal className="relative max-w-3xl">
          <Marker num="06" label={t.ctaMarker} light />
          <h2 className="font-display font-medium leading-[0.98] text-sand" style={{ fontSize: 'clamp(2.6rem,7vw,6rem)', letterSpacing: '-0.03em' }}>
            {t.ctaTitle}<span className="accent-em">{t.ctaTitleAccent}</span>
          </h2>
          <p className="mt-7 text-lg text-sand/70 leading-relaxed">{t.ctaBody}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link to="/investors" className={`group ${BTN.sand}`}>
              {t.startToday}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className={BTN.ghostLight}>{t.scheduleConsult}</Link>
          </div>
        </Reveal>
      </Band>
    </div>
  )
}

export default CapimaxInvestment

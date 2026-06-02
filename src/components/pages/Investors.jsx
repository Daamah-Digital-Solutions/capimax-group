import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { platformContent, currencyContent, novaContent } from '@/data/content'
import { PageHero, Band, Marker, Heading, Reveal, BTN } from '@/components/editorial'

const Investors = ({ language }) => {
  const translations = {
    en: {
      pageEyebrow: 'For Investors · Fractional ownership',
      pageTitle: 'Own a share of ',
      pageAccent: 'real assets.',
      pageSubtitle: 'Discover investment opportunities across our diversified portfolio of companies and sectors.',
      startInvesting: 'Start Investing',
      contactAdvisor: 'Contact Advisor',
      learnMore: 'Learn More',
      explore: 'Explore',
      visit: 'Visit',
      performance: 'Performance Highlights',
      perfLead: 'Numbers that build ',
      perfAccent: 'trust.',
      investmentOptions: 'Investment Options',
      optionsLead: 'Choose how you ',
      optionsAccent: 'own.',
      optionsSubtitle: 'Choose from our diverse range of investment opportunities.',
      fractionalOwnership: 'Fractional Ownership',
      fractionalDesc: 'Own fractions of high-value assets including real estate, precious metals, and digital assets.',
      realEstate: 'Real Estate Investment',
      realEstateDesc: 'Invest in residential, commercial, and hospitality development projects.',
      preciousMetals: 'Precious Metals',
      preciousMetalsDesc: 'Diversify with gold, silver, and other precious metals through our secure platform.',
      digitalAssets: 'Digital Assets',
      digitalAssetsDesc: 'Access cryptocurrency and digital asset investment opportunities.',
      diversification: 'Diversification',
      diversificationDesc: 'Spread risk across multiple sectors and asset classes.',
      transparency: 'Full Transparency',
      transparencyDesc: 'Real-time reporting and complete visibility into your investments.',
      security: 'Bank-Level Security',
      securityDesc: 'Comprehensive insurance and security measures protect your investments.',
      globalReach: 'Global Opportunities',
      globalReachDesc: 'Access international markets and investment opportunities.',
      whyInvest: 'Why Invest with Capimax?',
      whyLead: 'The advantages of ',
      whyAccent: 'ownership.',
      whySubtitle: 'The advantages of investing with Capimax Group.',
      minInvestment: 'Minimum Investment',
      expectedReturn: 'Expected Return',
      riskLevel: 'Risk Level',
      low: 'Low',
      medium: 'Medium',
      high: 'High',
      investors: 'Active Investors',
      aum: 'Assets Under Management',
      avgReturn: 'Average Annual Return',
      satisfaction: 'Investor Satisfaction',
      howItWorks: 'How It Works',
      howLead: 'From sign-up to ',
      howAccent: 'returns.',
      howSubtitle: 'Simple steps to start your investment journey.',
      step1: 'Create Account',
      step1Desc: 'Sign up and complete our simple verification process.',
      step2: 'Choose Investments',
      step2Desc: 'Browse and select from our curated investment opportunities.',
      step3: 'Invest & Monitor',
      step3Desc: 'Make your investment and track performance in real-time.',
      step4: 'Earn Returns',
      step4Desc: 'Receive regular returns and reinvest or withdraw as needed.',
      ecosystem: 'The Capimax Ecosystem',
      ecoLead: 'An integrated ',
      ecoAccent: 'network.',
      ecosystemSubtitle: 'An integrated network of investment platforms, a utility currency, and digital finance.',
      platformsLabel: 'Investment Platforms',
      currencyLabel: 'Pronova — utility currency',
      novaLabel: 'Nova Digital Finance',
      ctaMarker: 'Begin investing',
      ctaLead: 'Start owning ',
      ctaAccent: 'today.',
      ctaSubtitle: 'Join thousands of investors who trust Capimax for their investment needs.',
    },
    ar: {
      pageEyebrow: 'للمستثمرين · الملكية الجزئية',
      pageTitle: 'امتلك حصة من ',
      pageAccent: 'أصول حقيقية.',
      pageSubtitle: 'اكتشف الفرص الاستثمارية عبر محفظتنا المتنوعة من الشركات والقطاعات.',
      startInvesting: 'ابدأ الاستثمار',
      contactAdvisor: 'اتصل بمستشار',
      learnMore: 'تعلم المزيد',
      explore: 'استكشف',
      visit: 'زيارة',
      performance: 'أبرز الأداء',
      perfLead: 'أرقام تبني ',
      perfAccent: 'الثقة.',
      investmentOptions: 'خيارات الاستثمار',
      optionsLead: 'اختر كيف ',
      optionsAccent: 'تتملّك.',
      optionsSubtitle: 'اختر من مجموعتنا المتنوعة من الفرص الاستثمارية.',
      fractionalOwnership: 'الملكية الجزئية',
      fractionalDesc: 'امتلك أجزاء من الأصول عالية القيمة بما في ذلك العقارات والمعادن الثمينة والأصول الرقمية.',
      realEstate: 'الاستثمار العقاري',
      realEstateDesc: 'استثمر في مشاريع التطوير السكنية والتجارية والضيافة.',
      preciousMetals: 'المعادن الثمينة',
      preciousMetalsDesc: 'نوع مع الذهب والفضة والمعادن الثمينة الأخرى من خلال منصتنا الآمنة.',
      digitalAssets: 'الأصول الرقمية',
      digitalAssetsDesc: 'الوصول إلى فرص الاستثمار في العملات المشفرة والأصول الرقمية.',
      diversification: 'التنويع',
      diversificationDesc: 'انشر المخاطر عبر قطاعات وفئات أصول متعددة.',
      transparency: 'الشفافية الكاملة',
      transparencyDesc: 'تقارير في الوقت الفعلي ورؤية كاملة لاستثماراتك.',
      security: 'أمان على مستوى البنوك',
      securityDesc: 'تدابير التأمين والأمان الشاملة تحمي استثماراتك.',
      globalReach: 'الفرص العالمية',
      globalReachDesc: 'الوصول إلى الأسواق الدولية وفرص الاستثمار.',
      whyInvest: 'لماذا تستثمر مع كابيماكس؟',
      whyLead: 'مزايا ',
      whyAccent: 'التملّك.',
      whySubtitle: 'مزايا الاستثمار مع مجموعة كابيماكس.',
      minInvestment: 'الحد الأدنى للاستثمار',
      expectedReturn: 'العائد المتوقع',
      riskLevel: 'مستوى المخاطر',
      low: 'منخفض',
      medium: 'متوسط',
      high: 'عالي',
      investors: 'مستثمر نشط',
      aum: 'الأصول تحت الإدارة',
      avgReturn: 'متوسط العائد السنوي',
      satisfaction: 'رضا المستثمرين',
      howItWorks: 'كيف يعمل',
      howLead: 'من التسجيل إلى ',
      howAccent: 'العوائد.',
      howSubtitle: 'خطوات بسيطة لبدء رحلتك الاستثمارية.',
      step1: 'إنشاء حساب',
      step1Desc: 'سجل وأكمل عملية التحقق البسيطة.',
      step2: 'اختر الاستثمارات',
      step2Desc: 'تصفح واختر من فرص الاستثمار المنسقة لدينا.',
      step3: 'استثمر وراقب',
      step3Desc: 'قم بالاستثمار وتتبع الأداء في الوقت الفعلي.',
      step4: 'احصل على العوائد',
      step4Desc: 'احصل على عوائد منتظمة وأعد الاستثمار أو اسحب حسب الحاجة.',
      ecosystem: 'منظومة كابي ماكس',
      ecoLead: 'شبكة ',
      ecoAccent: 'متكاملة.',
      ecosystemSubtitle: 'شبكة متكاملة من منصات الاستثمار، وعملة خدمية، والتمويل الرقمي.',
      platformsLabel: 'منصات الاستثمار',
      currencyLabel: 'Pronova — عملة خدمية',
      novaLabel: 'نوفا للتمويل الرقمي',
      ctaMarker: 'ابدأ الاستثمار',
      ctaLead: 'ابدأ التملّك ',
      ctaAccent: 'اليوم.',
      ctaSubtitle: 'انضم إلى آلاف المستثمرين الذين يثقون بكابيماكس لاحتياجاتهم الاستثمارية.',
    },
  }

  const t = translations[language]

  const investmentOptions = [
    {
      id: 'fractional-ownership',
      title: t.fractionalOwnership,
      description: t.fractionalDesc,
      minInvestment: '$100',
      expectedReturn: '8-15%',
      riskLevel: t.medium,
      features: ['Real Estate Fractions', 'Precious Metals', 'Digital Assets', 'Global Markets'],
    },
    {
      id: 'real-estate',
      title: t.realEstate,
      description: t.realEstateDesc,
      minInvestment: '$500',
      expectedReturn: '10-18%',
      riskLevel: t.medium,
      features: ['Residential Projects', 'Commercial Properties', 'Hotel Development', 'REIT Options'],
    },
    {
      id: 'precious-metals',
      title: t.preciousMetals,
      description: t.preciousMetalsDesc,
      minInvestment: '$50',
      expectedReturn: '5-12%',
      riskLevel: t.low,
      features: ['Gold Investment', 'Silver Trading', 'Secure Storage', 'Market Analysis'],
    },
    {
      id: 'digital-assets',
      title: t.digitalAssets,
      description: t.digitalAssetsDesc,
      minInvestment: '$25',
      expectedReturn: '15-35%',
      riskLevel: t.high,
      features: ['Cryptocurrency', 'Digital Wallets', 'Blockchain Assets', 'DeFi Opportunities'],
    },
  ]

  const whyInvestFeatures = [
    { title: t.diversification, description: t.diversificationDesc },
    { title: t.transparency, description: t.transparencyDesc },
    { title: t.security, description: t.securityDesc },
    { title: t.globalReach, description: t.globalReachDesc },
  ]

  const performanceStats = [
    { value: '10,000+', label: t.investors },
    { value: '$500M+', label: t.aum },
    { value: '12.5%', label: t.avgReturn },
    { value: '98%', label: t.satisfaction },
  ]

  const howItWorksSteps = [
    { step: '01', title: t.step1, description: t.step1Desc },
    { step: '02', title: t.step2, description: t.step2Desc },
    { step: '03', title: t.step3, description: t.step3Desc },
    { step: '04', title: t.step4, description: t.step4Desc },
  ]

  return (
    <div className="bg-cream text-ink">
      <PageHero
        eyebrow={t.pageEyebrow}
        title={t.pageTitle}
        accent={t.pageAccent}
        subtitle={t.pageSubtitle}
      >
        <div className="mt-9 flex flex-col sm:flex-row gap-3">
          <Link to="/contact" className={`group ${BTN.sand}`}>
            {t.startInvesting}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/contact" className={BTN.ghostLight}>{t.contactAdvisor}</Link>
        </div>
      </PageHero>

      {/* ============================================ PERFORMANCE HIGHLIGHTS */}
      <Band tone="paper">
        <Reveal>
          <Marker num="01" label={t.performance} />
          <Heading lead={t.perfLead} accent={t.perfAccent} />
        </Reveal>

        <div className="mt-14 border-t border-l border-[color:var(--line-dark)] grid sm:grid-cols-2 lg:grid-cols-4">
          {performanceStats.map((stat, i) => (
            <Reveal key={i} delay={(i % 4) * 0.05}>
              <div className="group p-8 border-b border-r border-[color:var(--line-dark)] hover:bg-[rgba(47,173,111,0.06)] transition-colors h-full">
                <div className="font-display font-medium text-ink" style={{ fontSize: 'clamp(2.4rem,4vw,3.4rem)', lineHeight: 1 }}>{stat.value}</div>
                <div className="mono-label text-ink/50 mt-4" style={{ fontSize: '0.62rem' }}>{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* =============================================== INVESTMENT OPTIONS */}
      <Band tone="light">
        <Reveal>
          <Marker num="02" label={t.investmentOptions} />
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <Heading lead={t.optionsLead} accent={t.optionsAccent} />
            <p className="text-lg text-ink/70 leading-relaxed lg:pb-2">{t.optionsSubtitle}</p>
          </div>
        </Reveal>

        <div className="mt-14 border-t border-l border-[color:var(--line-dark)] grid sm:grid-cols-2 lg:grid-cols-4">
          {investmentOptions.map((option, i) => (
            <Reveal key={option.id} delay={(i % 4) * 0.05}>
              <div className="group relative flex flex-col h-full p-8 border-b border-r border-[color:var(--line-dark)] hover:bg-[rgba(47,173,111,0.06)] transition-colors">
                <span className="absolute top-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-500" style={{ transitionTimingFunction: 'var(--ease-out)' }} />
                <span className="font-display italic text-3xl text-primary">0{i + 1}</span>
                <h3 className="mt-4 font-display text-xl font-medium leading-snug">{option.title}</h3>
                <p className="mt-3 text-sm text-ink/65 leading-relaxed">{option.description}</p>

                <div className="mt-6 space-y-2.5 text-sm">
                  <div className="flex justify-between py-2 border-b border-[color:var(--line-mid)]">
                    <span className="text-ink/55">{t.minInvestment}</span>
                    <span className="font-medium text-ink">{option.minInvestment}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[color:var(--line-mid)]">
                    <span className="text-ink/55">{t.expectedReturn}</span>
                    <span className="font-medium text-primary">{option.expectedReturn}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[color:var(--line-mid)]">
                    <span className="text-ink/55">{t.riskLevel}</span>
                    <span className="font-medium text-ink">{option.riskLevel}</span>
                  </div>
                </div>

                <Link to="/companies" className="mt-6 pt-4 text-sm text-primary inline-flex items-center gap-1 hover:gap-2 transition-all">
                  {t.learnMore} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* ===================================================== WHY INVEST */}
      <Band tone="dark">
        <Reveal>
          <Marker num="03" label={t.whyInvest} light />
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <Heading lead={t.whyLead} accent={t.whyAccent} light />
            <p className="text-lg text-sand/70 leading-relaxed lg:pb-2">{t.whySubtitle}</p>
          </div>
        </Reveal>

        <div className="mt-14 border-t border-l border-[color:var(--line-sand)] grid sm:grid-cols-2 lg:grid-cols-4">
          {whyInvestFeatures.map((feature, i) => (
            <Reveal key={i} delay={(i % 4) * 0.05}>
              <div className="group relative p-8 border-b border-r border-[color:var(--line-sand)] hover:bg-[rgba(47,173,111,0.05)] transition-colors h-full">
                <span className="absolute top-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-500" style={{ transitionTimingFunction: 'var(--ease-out)' }} />
                <span className="font-display italic text-3xl text-primary">0{i + 1}</span>
                <h3 className="mt-4 font-display text-xl font-medium">{feature.title}</h3>
                <p className="mt-2 text-sm text-sand/65 leading-relaxed">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* ===================================================== HOW IT WORKS */}
      <Band tone="paper">
        <Reveal>
          <Marker num="04" label={t.howItWorks} />
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <Heading lead={t.howLead} accent={t.howAccent} />
            <p className="text-lg text-ink/70 leading-relaxed lg:pb-2">{t.howSubtitle}</p>
          </div>
        </Reveal>

        <div className="mt-14 border-t border-[color:var(--line-dark)]">
          {howItWorksSteps.map((step, i) => (
            <Reveal key={i}>
              <div className="group grid grid-cols-[60px_1fr] md:grid-cols-[100px_280px_1fr_48px] gap-6 items-center py-9 border-b border-[color:var(--line-dark)] hover:px-4 transition-all duration-500" style={{ transitionTimingFunction: 'var(--ease-out)' }}>
                <span className="font-display italic text-3xl text-primary">{step.step}.</span>
                <h3 className="font-display text-2xl md:text-3xl font-medium">{step.title}</h3>
                <p className="text-ink/65 leading-relaxed col-span-2 md:col-span-1">{step.description}</p>
                <ArrowRight className="hidden md:block w-5 h-5 text-ink/30 group-hover:text-primary group-hover:translate-x-2 transition-all justify-self-end" />
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* ======================================================= ECOSYSTEM */}
      <Band tone="darker" className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem]" style={{ background: 'radial-gradient(circle, rgba(47,173,111,0.08), transparent 60%)' }} />
        <div className="relative">
          <Reveal>
            <Marker num="05" label={t.ecosystem} light />
            <div className="grid lg:grid-cols-2 gap-8 items-end">
              <Heading lead={t.ecoLead} accent={t.ecoAccent} light />
              <p className="text-lg text-sand/70 leading-relaxed lg:pb-2">{t.ecosystemSubtitle}</p>
            </div>
          </Reveal>

          <Reveal className="mt-14">
            <span className="mono-label text-sand/55" style={{ fontSize: '0.62rem' }}>— {t.platformsLabel}</span>
          </Reveal>
          <div className="mt-6 border-t border-l border-[color:var(--line-sand)] grid sm:grid-cols-2 lg:grid-cols-4">
            {platformContent.map((platform, i) => (
              <Reveal key={platform.id} delay={(i % 4) * 0.05}>
                <div className="group flex flex-col h-full p-7 border-b border-r border-[color:var(--line-sand)] hover:bg-[rgba(47,173,111,0.05)] transition-colors">
                  <span className="mono-label text-sand/35" style={{ fontSize: '0.6rem' }}>/ 0{i + 1}</span>
                  <h4 className="mt-4 font-display text-lg font-medium leading-snug">{platform[language].name}</h4>
                  <p className="mt-2 text-sm text-sand/60 leading-relaxed flex-1">{platform[language].short}</p>
                  <div className="mt-5 flex items-center gap-4 text-sm">
                    <Link to={`/platforms/${platform.id}`} className="text-primary inline-flex items-center gap-1 hover:gap-2 transition-all">
                      {t.explore} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    {platform.externalUrl && (
                      <a href={platform.externalUrl} target="_blank" rel="noopener noreferrer" className="text-sand/50 hover:text-sand inline-flex items-center gap-1">
                        {t.visit} <ArrowUpRight className="w-3.5 h-3.5" />
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
                  <span className="block font-display text-lg font-medium">{t.currencyLabel}</span>
                  <span className="block text-sm text-sand/60 mt-1">{currencyContent[language].short}</span>
                </span>
                <ArrowUpRight className="w-4 h-4 text-sand/40 group-hover:text-primary transition-colors" />
              </Link>
            </Reveal>
            <Reveal delay={0.05}>
              <Link to="/nova" className="group flex items-center gap-5 p-7 border-b border-r border-[color:var(--line-sand)] hover:bg-[rgba(47,173,111,0.05)] transition-colors">
                <span className="font-display italic text-3xl text-primary">N</span>
                <span className="flex-1">
                  <span className="block font-display text-lg font-medium">{t.novaLabel}</span>
                  <span className="block text-sm text-sand/60 mt-1">{novaContent[language].tagline}</span>
                </span>
                <ArrowUpRight className="w-4 h-4 text-sand/40 group-hover:text-primary transition-colors" />
              </Link>
            </Reveal>
          </div>
        </div>
      </Band>

      {/* ============================================================= CTA */}
      <Band tone="pitch" className="relative overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-[40rem] h-[40rem]" style={{ background: 'radial-gradient(circle, rgba(47,173,111,0.09), transparent 60%)' }} />
        <Reveal className="relative max-w-3xl">
          <Marker num="06" label={t.ctaMarker} light />
          <Heading lead={t.ctaLead} accent={t.ctaAccent} light size="clamp(2.6rem,7vw,6rem)" />
          <p className="mt-7 text-lg text-sand/70 leading-relaxed">{t.ctaSubtitle}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className={`group ${BTN.green}`}>
              {t.startInvesting}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className={BTN.ghostLight}>{t.contactAdvisor}</Link>
          </div>
        </Reveal>
      </Band>
    </div>
  )
}

export default Investors

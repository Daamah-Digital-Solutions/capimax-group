import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp } from 'lucide-react'
import { PageHero, Band, Marker, Reveal, BTN } from '@/components/editorial'

const Sectors = ({ language }) => {
  const translations = {
    en: {
      heroEyebrow: 'Our Investment Portfolio',
      heroTitle: 'Diversified across ',
      heroAccent: 'real economies.',
      heroSubtitle: 'Diversified investment opportunities across multiple industries and markets.',
      viewCompanies: 'View Companies',
      keyFeatures: 'Key Features',
      marketSize: 'Market Size',
      growth: 'Growth Potential',
      companies: 'Our Companies',
      sectorsMarker: 'The sectors',
      sectorsTitle: 'Eight pillars, ',
      sectorsTitleAccent: 'one strategy.',
      statsMarker: 'Portfolio performance',
      statsTitle: 'Sector ',
      statsTitleAccent: 'performance.',
      statsBody: 'Our diversified portfolio across high-growth sectors delivers consistent returns and sustainable growth opportunities.',
      ctaMarker: 'Begin a conversation',
      ctaTitle: 'Ready to diversify ',
      ctaTitleAccent: 'your portfolio?',
      ctaBody: 'Explore investment opportunities across our carefully selected high-growth sectors with professional management and proven returns.',
      startInvesting: 'Start Investing',
      viewAll: 'View All Companies',
      moreCompanies: 'more companies',
    },
    ar: {
      heroEyebrow: 'محفظتنا الاستثمارية',
      heroTitle: 'تنويع عبر ',
      heroAccent: 'اقتصادات حقيقية.',
      heroSubtitle: 'فرص استثمارية متنوعة عبر صناعات وأسواق متعددة.',
      viewCompanies: 'عرض الشركات',
      keyFeatures: 'الميزات الرئيسية',
      marketSize: 'حجم السوق',
      growth: 'إمكانات النمو',
      companies: 'شركاتنا',
      sectorsMarker: 'القطاعات',
      sectorsTitle: 'ثمانية ركائز، ',
      sectorsTitleAccent: 'استراتيجية واحدة.',
      statsMarker: 'أداء المحفظة',
      statsTitle: 'أداء ',
      statsTitleAccent: 'القطاعات.',
      statsBody: 'تحقق محفظتنا المتنوعة عبر قطاعات عالية النمو عوائد ثابتة وفرص نمو مستدامة.',
      ctaMarker: 'ابدأ محادثة',
      ctaTitle: 'هل أنت مستعد لتنويع ',
      ctaTitleAccent: 'محفظتك؟',
      ctaBody: 'استكشف الفرص الاستثمارية عبر قطاعاتنا المختارة بعناية عالية النمو بإدارة احترافية وعوائد مثبتة.',
      startInvesting: 'ابدأ الاستثمار',
      viewAll: 'عرض كل الشركات',
      moreCompanies: 'شركة أخرى',
    },
  }

  const t = translations[language]

  const sectors = [
    {
      id: 'investment-management',
      title: language === 'ar' ? 'إدارة الاستثمار' : 'Investment Management',
      description: language === 'ar'
        ? 'حلول استثمارية شاملة تشمل الملكية الجزئية وإدارة الصناديق وتنويع المحافظ.'
        : 'Comprehensive investment solutions including fractional ownership, fund management, and portfolio diversification.',
      marketSize: '$100+ Trillion',
      growth: '8-12% annually',
      features: language === 'ar'
        ? ['الملكية الجزئية', 'إدارة المحافظ', 'تقييم المخاطر', 'الأسواق العالمية']
        : ['Fractional Ownership', 'Portfolio Management', 'Risk Assessment', 'Global Markets'],
      companies: ['Capimax Investments UK', 'Capimax Investments USA', 'Capimax Investments UAE'],
    },
    {
      id: 'real-estate',
      title: language === 'ar' ? 'تطوير العقارات' : 'Real Estate Development',
      description: language === 'ar'
        ? 'مشاريع عقارية مبتكرة تشمل التطوير السكني والتجاري والضيافة.'
        : 'Innovative real estate projects including residential, commercial, and hospitality developments.',
      marketSize: '$4+ Trillion',
      growth: '6-10% annually',
      features: language === 'ar'
        ? ['التطوير السكني', 'العقارات التجارية', 'مشاريع الفنادق', 'البناء المستدام']
        : ['Residential Development', 'Commercial Properties', 'Hotel Projects', 'Sustainable Building'],
      companies: ['Capimax Development LLP', 'TDH Developments', 'EliteGate Properties'],
    },
    {
      id: 'precious-metals',
      title: language === 'ar' ? 'المعادن الثمينة والمعادن' : 'Precious Metals & Minerals',
      description: language === 'ar'
        ? 'الاستثمار في الذهب والفضة والمعادن الثمينة عبر الملكية الجزئية والتداول.'
        : 'Investment in gold, silver, and precious metals through fractional ownership and trading.',
      marketSize: '$500+ Billion',
      growth: '5-8% annually',
      features: language === 'ar'
        ? ['الاستثمار في الذهب', 'تداول الفضة', 'تخزين المعادن الثمينة', 'تحليل السوق']
        : ['Gold Investment', 'Silver Trading', 'Precious Metals Storage', 'Market Analysis'],
      companies: ['Capimax Precious Metals Limited'],
    },
    {
      id: 'fintech-blockchain',
      title: language === 'ar' ? 'التقنية المالية والبلوكشين' : 'Fintech & Blockchain',
      description: language === 'ar'
        ? 'حلول تقنية مالية متطورة تشمل البلوكشين والعقود الذكية والمدفوعات الرقمية.'
        : 'Cutting-edge financial technology solutions including blockchain, smart contracts, and digital payments.',
      marketSize: '$300+ Billion',
      growth: '15-25% annually',
      features: language === 'ar'
        ? ['تقنية البلوكشين', 'العقود الذكية', 'المدفوعات الرقمية', 'ترميز الأصول']
        : ['Blockchain Technology', 'Smart Contracts', 'Digital Payments', 'Asset Tokenization'],
      companies: ['Capimax Fintech Blockchain', 'Nova Digital Finance'],
    },
    {
      id: 'digital-assets',
      title: language === 'ar' ? 'الأصول الرقمية والعملات' : 'Digital Assets & Crypto',
      description: language === 'ar'
        ? 'إدارة الأصول الرقمية وتداول العملات المشفرة وخدمات محافظ الأصول الافتراضية.'
        : 'Digital asset management, cryptocurrency trading, and virtual asset portfolio services.',
      marketSize: '$2+ Trillion',
      growth: '20-40% annually',
      features: language === 'ar'
        ? ['تداول العملات المشفرة', 'المحافظ الرقمية', 'إدارة الأصول', 'الامتثال']
        : ['Cryptocurrency Trading', 'Digital Wallets', 'Asset Management', 'Compliance'],
      companies: ['Capimax Virtual Assets', 'Nova Digital Finance'],
    },
    {
      id: 'insurance',
      title: language === 'ar' ? 'التأمين وإدارة المخاطر' : 'Insurance & Risk Management',
      description: language === 'ar'
        ? 'حلول تأمينية شاملة تشمل تأمين الحياة وغير الحياة والتأمين المرتبط بالاستثمار.'
        : 'Comprehensive insurance solutions including life, non-life, and investment-linked insurance.',
      marketSize: '$6+ Trillion',
      growth: '4-7% annually',
      features: language === 'ar'
        ? ['تأمين الحياة', 'تأمين الاستثمار', 'تقييم المخاطر', 'إعادة التأمين']
        : ['Life Insurance', 'Investment Insurance', 'Risk Assessment', 'Reinsurance'],
      companies: ['HCC International', 'Assurax Insurance'],
    },
    {
      id: 'financial-services',
      title: language === 'ar' ? 'الخدمات المالية' : 'Financial Services',
      description: language === 'ar'
        ? 'الخدمات المصرفية والإدارة المالية والمحاسبة والتدقيق للأفراد والمؤسسات.'
        : 'Banking, financial management, accounting, and auditing services for individuals and institutions.',
      marketSize: '$25+ Trillion',
      growth: '5-9% annually',
      features: language === 'ar'
        ? ['الإدارة المالية', 'خدمات المحاسبة', 'التدقيق والامتثال', 'الحلول المصرفية']
        : ['Financial Management', 'Accounting Services', 'Audit & Compliance', 'Banking Solutions'],
      companies: ['Capimax Financial Management', 'CIM Financial Group'],
    },
    {
      id: 'general-trading',
      title: language === 'ar' ? 'التجارة العامة' : 'General Trading',
      description: language === 'ar'
        ? 'عمليات تجارية دولية تشمل الاستيراد والتصدير وسلسلة التوريد وخدمات التوزيع.'
        : 'International trading operations including import, export, supply chain, and distribution services.',
      marketSize: '$20+ Trillion',
      growth: '3-6% annually',
      features: language === 'ar'
        ? ['الاستيراد/التصدير', 'سلسلة التوريد', 'التوزيع', 'الشبكات العالمية']
        : ['Import/Export', 'Supply Chain', 'Distribution', 'Global Networks'],
      companies: ['Capimax General Trading USA'],
    },
    {
      id: 'asset-tokenization',
      title: language === 'ar' ? 'ترميز الأصول' : 'Asset Tokenization',
      description: language === 'ar'
        ? 'تحويل الأصول الواقعية مثل العقارات إلى حصص رقمية جزئية مؤمّنة على البلوكشين عبر هياكل SPV قانونية.'
        : 'Converting real-world assets such as real estate into fractional digital shares secured on the blockchain through legally structured SPVs.',
      marketSize: '$16+ Trillion (by 2030)',
      growth: '40%+ annually',
      features: language === 'ar'
        ? ['ترميز العقارات', 'هياكل SPV', 'سوق ثانوي', 'شفافية البلوكشين']
        : ['Real Estate Tokenization', 'SPV Structuring', 'Secondary Markets', 'Blockchain Transparency'],
      companies: ['Capimax Real Estate Tokenization', 'Capimax Fintech Blockchain'],
    },
    {
      id: 'fractional-investment',
      title: language === 'ar' ? 'الاستثمار الجزئي' : 'Fractional Investment',
      description: language === 'ar'
        ? 'تمكين المستثمرين من تملّك حصص في أصول عالية القيمة بمبالغ في المتناول، مع إدارة مركزية وتقارير دورية.'
        : 'Enabling investors to own shares of high-value assets at accessible amounts, with centralized management and periodic reporting.',
      marketSize: '$5+ Trillion',
      growth: '12-18% annually',
      features: language === 'ar'
        ? ['ملكية جزئية', 'حد أدنى منخفض', 'تنويع المحفظة', 'دخل ثابت']
        : ['Fractional Ownership', 'Low Minimums', 'Portfolio Diversification', 'Income Streams'],
      companies: ['Capimax PropShare', 'Capimax Investments UK'],
    },
    {
      id: 'investment-platforms',
      title: language === 'ar' ? 'منصات الاستثمار' : 'Investment Platforms',
      description: language === 'ar'
        ? 'منصات رقمية متعددة الأصول توحّد الفرص الاستثمارية والمحافظ والتقارير في واجهة واحدة.'
        : 'Multi-asset digital platforms that unify investment opportunities, portfolios, and reporting within a single interface.',
      marketSize: '$1+ Trillion',
      growth: '20-30% annually',
      features: language === 'ar'
        ? ['وصول متعدد الأصول', 'إدارة المحافظ', 'تقارير لحظية', 'منظومة موحّدة']
        : ['Multi-asset Access', 'Portfolio Management', 'Real-time Reporting', 'Unified Ecosystem'],
      companies: ['Capimax One', 'Capimax Investments Platform'],
    },
  ]

  const stats = [
    { number: '8', label: language === 'ar' ? 'قطاعات نشطة' : 'Active Sectors' },
    { number: '$35T+', label: language === 'ar' ? 'حجم السوق المجمّع' : 'Combined Market Size' },
    { number: '13', label: language === 'ar' ? 'شركات المحفظة' : 'Portfolio Companies' },
    { number: '15%', label: language === 'ar' ? 'متوسط النمو' : 'Average Growth' },
  ]

  return (
    <div className="bg-cream text-ink">
      <PageHero
        eyebrow={t.heroEyebrow}
        title={t.heroTitle}
        accent={t.heroAccent}
        subtitle={t.heroSubtitle}
      />

      {/* ===================================================== SECTORS GRID */}
      <Band tone="light">
        <Reveal>
          <Marker num="01" label={t.sectorsMarker} />
          <h2 className="font-display font-medium leading-[1.02]" style={{ fontSize: 'clamp(2.2rem,4.5vw,4rem)', letterSpacing: '-0.025em' }}>
            {t.sectorsTitle}<span className="accent-em">{t.sectorsTitleAccent}</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[color:var(--line-dark)]">
          {sectors.map((sector, i) => (
            <Reveal key={sector.id} delay={(i % 3) * 0.05}>
              <div className="group flex flex-col h-full p-8 border-b border-r border-[color:var(--line-dark)] hover:bg-[rgba(47,173,111,0.05)] transition-colors relative">
                <span className="absolute top-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-500" style={{ transitionTimingFunction: 'var(--ease-out)' }} />
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-display italic text-2xl text-primary leading-none">{String(i + 1).padStart(2, '0')}</span>
                  <span className="mono-label text-ink/35" style={{ fontSize: '0.6rem' }}>{sector.growth}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-medium leading-snug group-hover:text-primary transition-colors">{sector.title}</h3>
                <p className="mt-3 text-sm text-ink/65 leading-relaxed flex-1">{sector.description}</p>

                <div className="mt-6 pt-5 border-t border-[color:var(--line-dark)] grid grid-cols-2 gap-4">
                  <div>
                    <div className="mono-label text-ink/45" style={{ fontSize: '0.58rem' }}>{t.marketSize}</div>
                    <div className="font-display text-base mt-1">{sector.marketSize}</div>
                  </div>
                  <div>
                    <div className="mono-label text-ink/45" style={{ fontSize: '0.58rem' }}>{t.growth}</div>
                    <div className="font-display text-base mt-1 text-primary flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" />{sector.growth}
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="mono-label text-ink/45 mb-2" style={{ fontSize: '0.58rem' }}>{t.keyFeatures}</div>
                  <div className="flex flex-wrap gap-2">
                    {sector.features.map((feature, idx) => (
                      <span key={idx} className="text-[0.7rem] px-2.5 py-1 border border-[color:var(--line-dark)] text-ink/70">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <div className="mono-label text-ink/45 mb-2" style={{ fontSize: '0.58rem' }}>{t.companies}</div>
                  <div className="space-y-1.5">
                    {sector.companies.slice(0, 2).map((company, idx) => (
                      <div key={idx} className="text-sm text-ink/70">— {company}</div>
                    ))}
                    {sector.companies.length > 2 && (
                      <div className="text-xs text-ink/45">+{sector.companies.length - 2} {t.moreCompanies}</div>
                    )}
                  </div>
                </div>

                <Link to="/companies" className="mt-6 inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all">
                  {t.viewCompanies} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* =========================================================== STATS */}
      <Band tone="dark">
        <Reveal className="grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <Marker num="02" label={t.statsMarker} light />
            <h2 className="font-display font-medium leading-[1.02] text-sand" style={{ fontSize: 'clamp(2.2rem,4.5vw,4rem)', letterSpacing: '-0.025em' }}>
              {t.statsTitle}<span className="accent-em">{t.statsTitleAccent}</span>
            </h2>
          </div>
          <p className="text-lg text-sand/70 leading-relaxed lg:pb-2">{t.statsBody}</p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 border-t border-l border-[color:var(--line-sand)]">
          {stats.map((stat, i) => (
            <Reveal key={i} delay={(i % 4) * 0.05}>
              <div className="p-8 border-b border-r border-[color:var(--line-sand)] h-full">
                <div className="font-display font-medium text-sand" style={{ fontSize: 'clamp(2.2rem,4vw,3.4rem)', lineHeight: 1 }}>{stat.number}</div>
                <div className="mono-label text-sand/50 mt-3" style={{ fontSize: '0.6rem' }}>{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* ============================================================= CTA */}
      <Band tone="pitch" className="relative overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-[40rem] h-[40rem]" style={{ background: 'radial-gradient(circle, rgba(47,173,111,0.09), transparent 60%)' }} />
        <Reveal className="relative max-w-3xl">
          <Marker num="03" label={t.ctaMarker} light />
          <h2 className="font-display font-medium leading-[0.98] text-sand" style={{ fontSize: 'clamp(2.6rem,7vw,6rem)', letterSpacing: '-0.03em' }}>
            {t.ctaTitle}<span className="accent-em">{t.ctaTitleAccent}</span>
          </h2>
          <p className="mt-7 text-lg text-sand/70 leading-relaxed">{t.ctaBody}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link to="/investors" className={`group ${BTN.sand}`}>
              {t.startInvesting}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/companies" className={BTN.ghostLight}>{t.viewAll}</Link>
          </div>
        </Reveal>
      </Band>
    </div>
  )
}

export default Sectors

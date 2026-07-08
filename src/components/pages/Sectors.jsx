import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PageHero, Band, Marker, Reveal, BTN } from '@/components/editorial'

const Sectors = ({ language }) => {
  const translations = {
    en: {
      heroEyebrow: 'What we build',
      heroTitle: 'The pillars of ',
      heroAccent: 'the ecosystem.',
      heroSubtitle: 'The technology, ownership models, and infrastructure that power a global, verifiable real-estate ecosystem.',
      viewCompanies: 'View Companies',
      keyFeatures: 'Capabilities',
      companies: 'Delivered by',
      sectorsMarker: 'The sectors',
      sectorsTitle: 'Seven pillars, ',
      sectorsTitleAccent: 'one ecosystem.',
      statsMarker: 'By structure',
      statsTitle: 'One connected ',
      statsTitleAccent: 'ecosystem.',
      statsBody: 'Real estate technology, fractional ownership, tokenization, and blockchain — working as a single, verifiable system across the USA and the UK.',
      ctaMarker: 'Begin a conversation',
      ctaTitle: 'Ready to own ',
      ctaTitleAccent: 'a share?',
      ctaBody: 'Explore how the group turns real-world real estate into transparent, verifiable, fractional ownership.',
      startInvesting: 'Explore Ownership',
      viewAll: 'View All Companies',
      moreCompanies: 'more',
    },
    ar: {
      heroEyebrow: 'ما نبنيه',
      heroTitle: 'ركائز ',
      heroAccent: 'المنظومة.',
      heroSubtitle: 'التكنولوجيا ونماذج الملكية والبنية التحتية التي تشغّل منظومة عقارية عالمية قابلة للتحقق.',
      viewCompanies: 'عرض الشركات',
      keyFeatures: 'القدرات',
      companies: 'تنفّذها',
      sectorsMarker: 'القطاعات',
      sectorsTitle: 'سبع ركائز، ',
      sectorsTitleAccent: 'منظومة واحدة.',
      statsMarker: 'حسب الهيكل',
      statsTitle: 'منظومة واحدة ',
      statsTitleAccent: 'مترابطة.',
      statsBody: 'تكنولوجيا العقارات، والملكية الجزئية، والترميز، والبلوكشين — تعمل كنظام واحد قابل للتحقق عبر الولايات المتحدة والمملكة المتحدة.',
      ctaMarker: 'ابدأ محادثة',
      ctaTitle: 'مستعد لتملّك ',
      ctaTitleAccent: 'حصة؟',
      ctaBody: 'اكتشف كيف تحوّل المجموعة العقارات الحقيقية إلى ملكية جزئية شفافة وقابلة للتحقق.',
      startInvesting: 'اكتشف التملّك',
      viewAll: 'عرض كل الشركات',
      moreCompanies: 'أخرى',
    },
  }

  const t = translations[language]

  const sectors = [
    {
      id: 'real-estate-technology',
      title: language === 'ar' ? 'تكنولوجيا العقارات' : 'Real Estate Technology',
      description: language === 'ar'
        ? 'منصات وأدوات رقمية تربط كل المشاركين في سلسلة القيمة العقارية — المطوّرين والملاك والمستثمرين والوسطاء ومزوّدي السيولة.'
        : 'Digital platforms and tools connecting every participant in the real estate value chain — developers, owners, investors, brokers, and liquidity providers.',
      features: language === 'ar'
        ? ['منصات عقارية تقنية', 'أنظمة متعددة الأطراف', 'الانضمام الرقمي', 'البيانات والتقارير']
        : ['PropTech Platforms', 'Multi-party Systems', 'Digital Onboarding', 'Data & Reporting'],
      companies: ['Capimax Real Estate Technologies', 'Capimax Technologies UK'],
    },
    {
      id: 'fractional-ownership',
      title: language === 'ar' ? 'الملكية الجزئية' : 'Fractional Ownership',
      description: language === 'ar'
        ? 'تقسيم العقارات عالية القيمة إلى حصص ميسورة وقابلة للتحويل — بملكية واضحة وتقارير دورية، عبر نموذجين: رقمي ومرمّز.'
        : 'High-value real estate divided into affordable, transferable shares — with clear ownership, periodic reporting, and two models: digital and tokenized.',
      features: language === 'ar'
        ? ['حصص جزئية', 'حد أدنى منخفض', 'ملكية واضحة', 'تحويلات ثانوية']
        : ['Fractional Shares', 'Low Minimums', 'Clear Ownership', 'Secondary Transfers'],
      companies: ['Capimax Fractional Ownership', 'Capimax PropShare'],
    },
    {
      id: 'asset-tokenization',
      title: language === 'ar' ? 'ترميز الأصول' : 'Asset Tokenization',
      description: language === 'ar'
        ? 'تحويل العقارات الحقيقية إلى حصص رقمية جزئية مؤمّنة على البلوكشين عبر هياكل SPV قانونية مستقلة.'
        : 'Converting real-world real estate into fractional digital shares secured on the blockchain through legally structured, independent SPVs.',
      features: language === 'ar'
        ? ['ترميز العقارات', 'هياكل SPV مستقلة', 'عقود ذكية', 'أسواق ثانوية']
        : ['Real Estate Tokenization', 'Independent SPVs', 'Smart Contracts', 'Secondary Markets'],
      companies: ['Capimax Digital Assets', 'Capimax RT'],
    },
    {
      id: 'blockchain-solutions',
      title: language === 'ar' ? 'حلول البلوكشين' : 'Blockchain Solutions',
      description: language === 'ar'
        ? 'بنية تحتية للبلوكشين آمنة ومدقّقة وعقود ذكية تجعل سجلات الملكية شفافة وغير قابلة للتلاعب وقابلة للتحقق.'
        : 'Secure, audited blockchain infrastructure and smart contracts that make ownership records transparent, tamper-proof, and verifiable.',
      features: language === 'ar'
        ? ['بنية تحتية للبلوكشين', 'عقود ذكية', 'تدقيق أمني', 'سجلات قابلة للتحقق']
        : ['Blockchain Infrastructure', 'Smart Contracts', 'Security Audits', 'Verifiable Records'],
      companies: ['Capimax Technologies UK', 'Capimax Digital Assets'],
    },
    {
      id: 'virtual-assets',
      title: language === 'ar' ? 'الأصول الافتراضية' : 'Virtual Assets',
      description: language === 'ar'
        ? 'إدارة الأصول الافتراضية واستخدامها التشغيلي داخل منظومة حقيقية مدعومة بالأصول — مرتبطة بالتمويل عبر نوفا للتمويل الرقمي.'
        : 'Management and operational use of virtual assets within a real, asset-backed ecosystem — connected to financing through Nova Digital Finance.',
      features: language === 'ar'
        ? ['إدارة الأصول الرقمية', 'فائدة مدعومة بالأصول', 'التسوية الرقمية', 'الامتثال']
        : ['Digital Asset Management', 'Asset-backed Utility', 'Digital Settlement', 'Compliance'],
      companies: ['Capimax Digital Assets', 'Nova Digital Finance'],
    },
    {
      id: 'digital-property-infrastructure',
      title: language === 'ar' ? 'البنية التحتية للملكية الرقمية' : 'Digital Property Infrastructure',
      description: language === 'ar'
        ? 'البنية القانونية والتقنية خلف الملكية — هياكل SPV وسجلات الملكية والتقييم والتحقق والتأمين لكل أصل.'
        : 'The legal and technical rails behind ownership — SPV structures, ownership records, valuation, verification, and insurance for every asset.',
      features: language === 'ar'
        ? ['هياكل SPV', 'سجلات الملكية', 'التقييم والتحقق', 'التأمين']
        : ['SPV Structures', 'Ownership Records', 'Valuation & Verification', 'Insurance'],
      companies: ['Capimax Asset Structure', 'Capimax Real Estate Technologies'],
    },
    {
      id: 'real-estate-marketplaces',
      title: language === 'ar' ? 'أسواق العقارات الرقمية' : 'Real Estate Marketplaces',
      description: language === 'ar'
        ? 'أسواق متعددة الأطراف يكتشف فيها المطوّرون والملاك والمستثمرون والوسطاء ومزوّدو السيولة العقارات ويتملّكونها ويتبادلونها.'
        : 'Multi-party marketplaces where developers, owners, investors, brokers, and liquidity providers discover, own, and exchange real estate.',
      features: language === 'ar'
        ? ['سوق متعدد الأطراف', 'الاكتشاف والإدراج', 'التملّك والتبادل', 'السيولة']
        : ['Multi-party Marketplace', 'Discovery & Listing', 'Ownership & Exchange', 'Liquidity'],
      companies: ['Capimax BRX', 'Capimax Real Estate'],
    },
  ]

  const stats = [
    { number: '7', label: language === 'ar' ? 'قطاعات محورية' : 'Focus Sectors' },
    { number: '8', label: language === 'ar' ? 'شركات المجموعة' : 'Group Companies' },
    { number: '5', label: language === 'ar' ? 'منصات' : 'Platforms' },
    { number: 'USA · UK', label: language === 'ar' ? 'الولايات القضائية' : 'Jurisdictions' },
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
                <span className="font-display italic text-2xl text-primary leading-none">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-5 font-display text-xl font-medium leading-snug group-hover:text-primary transition-colors">{sector.title}</h3>
                <p className="mt-3 text-sm text-ink/65 leading-relaxed flex-1">{sector.description}</p>

                <div className="mt-6 pt-5 border-t border-[color:var(--line-dark)]">
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
                <div className="font-display font-medium text-sand" style={{ fontSize: 'clamp(2rem,3.6vw,3.2rem)', lineHeight: 1 }}>{stat.number}</div>
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

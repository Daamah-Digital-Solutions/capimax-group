import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Building2, Landmark, ShieldCheck, Lock, Scale, Wrench } from 'lucide-react'
import { PageHero, Band, Marker, Reveal, BTN } from '@/components/editorial'
import { getPartnerLogo } from '@/data/logos'

const Partners = ({ language }) => {
  const isAr = language === 'ar'

  const t = {
    en: {
      heroEyebrow: 'The Ecosystem',
      heroTitle: 'The partners who make it ',
      heroAccent: 'verifiable.',
      heroSubtitle: 'Licensed operators, insurers, auditors, and oversight bodies — organized by role — who make the Capimax ecosystem verifiable and complete.',
      introMarker: 'The network',
      introTitle: 'Every partner, ',
      introAccent: 'a defined role.',
      introBody: 'Our partners are grouped into clear categories — real estate, finance, insurance, blockchain security, legal, and facility management — each with a defined mandate within the ecosystem.',
      field: 'Partnership field',
      visitWebsite: 'Visit Website',
      viewPartner: 'View Partner',
      learnMore: 'Learn More',
      partners: 'Partners',
      ctaMarker: 'Begin a conversation',
      ctaTitle: 'Become a ',
      ctaAccent: 'partner.',
      ctaBody: "Operators, insurers, auditors, and verification bodies who share our standard for transparency — let's talk about a role in the ecosystem.",
      partnershipOpps: 'Partnership Opportunities',
      contactUs: 'Contact Us',
    },
    ar: {
      heroEyebrow: 'المنظومة',
      heroTitle: 'الشركاء الذين يجعلونها ',
      heroAccent: 'قابلة للتحقق.',
      heroSubtitle: 'شركات مرخّصة وشركات تأمين ومدقّقون وجهات رقابية — منظّمون حسب الدور — يجعلون منظومة كابي ماكس قابلة للتحقق ومكتملة.',
      introMarker: 'الشبكة',
      introTitle: 'لكل شريك ',
      introAccent: 'دور محدّد.',
      introBody: 'يُصنَّف شركاؤنا في فئات واضحة — العقارات، والمال، والتأمين، وأمن البلوكشين، والقانون، وإدارة المرافق — لكلٍّ منها تفويض محدّد ضمن المنظومة.',
      field: 'مجال الشراكة',
      visitWebsite: 'زيارة الموقع',
      viewPartner: 'عرض الشريك',
      learnMore: 'اعرف المزيد',
      partners: 'شركاء',
      ctaMarker: 'ابدأ محادثة',
      ctaTitle: 'كن ',
      ctaAccent: 'شريكاً.',
      ctaBody: 'المشغّلون وشركات التأمين والمدقّقون وجهات التحقق الذين يشاركوننا معيار الشفافية — لنتحدّث عن دور ضمن المنظومة.',
      partnershipOpps: 'فرص الشراكة',
      contactUs: 'تواصل معنا',
    },
  }[language]

  // Partner categories in the client's requested order.
  const categories = [
    { key: 'realEstate', icon: Building2, label: isAr ? 'شركاء العقارات' : 'Real Estate Partners' },
    { key: 'financial', icon: Landmark, label: isAr ? 'الشركاء الماليون' : 'Financial Partners' },
    { key: 'insurance', icon: ShieldCheck, label: isAr ? 'شركاء التأمين' : 'Insurance Partners' },
    { key: 'security', icon: Lock, label: isAr ? 'أمن العقود الذكية والبلوكشين' : 'Smart Contract & Blockchain Security' },
    { key: 'legal', icon: Scale, label: isAr ? 'الشركاء القانونيون' : 'Legal Partners' },
    { key: 'facility', icon: Wrench, label: isAr ? 'إدارة العقارات والمرافق' : 'Property & Facility Management' },
  ]

  // Each partner: independent card with logo, name, brief, field, and CTA.
  // website: null => "Learn More" -> contact (official URL pending).
  const partners = [
    // ---- Real Estate ----
    {
      id: 'elite-gate', name: 'Elite Gate', category: 'realEstate', icon: Building2, website: null,
      field: isAr ? 'العقارات والتجاري' : 'Real Estate & Commercial',
      brief: isAr
        ? 'توفّر وتطوّر الأصول العقارية والتجارية التي تُرمّز وتُتاح للملكية الجزئية عبر منصّات المجموعة.'
        : "Sources and develops the property and commercial assets tokenized and offered for fractional ownership across the group's platforms.",
    },
    {
      id: 'prim-inn', name: 'Prim Inn', category: 'realEstate', icon: Building2, website: null,
      field: isAr ? 'الضيافة والعقارات المُدِرّة للدخل' : 'Hospitality & Income Real Estate',
      brief: isAr
        ? 'تشغّل عقارات فندقية ومُدِرّة للدخل تدعم منتجات الملكية الجزئية المرتبطة بالعقار.'
        : "Operates hotel and income-producing real estate that backs the group's property-linked fractional ownership products.",
    },
    {
      id: 'nova-asset-management', name: 'Nova Asset Management', category: 'realEstate', icon: Building2, website: null,
      field: isAr ? 'إدارة الأصول' : 'Asset Management',
      brief: isAr
        ? 'تشرف على أداء المحافظ العقارية الأساسية وتحافظ على قيمتها طوال دورة الاستثمار.'
        : 'Oversees the performance of the underlying property portfolios and preserves value through the investment lifecycle.',
    },
    // ---- Financial ----
    {
      id: 'cim-global-financial', name: 'CIM Global Financial', category: 'financial', icon: Landmark, website: null,
      field: isAr ? 'التقييم المالي والتحقق' : 'Financial Evaluation & Verification',
      brief: isAr
        ? 'التقييم المالي المستقل والتحقق وحفظ المستندات بما يعزّز شفافية المنظومة ومساءلتها.'
        : "Independent financial evaluation, verification, and document custody that underpins the ecosystem's transparency.",
    },
    {
      id: 'cim-finance-group', name: 'CIM Finance Group', category: 'financial', icon: Landmark, website: null,
      field: isAr ? 'الخدمات المالية' : 'Financial Services',
      brief: isAr
        ? 'شريك خدمات مالية يدعم الهيكلة والامتثال والرقابة المالية عبر المجموعة.'
        : 'Financial services partner supporting structuring, compliance, and financial oversight across the group.',
    },
    // ---- Insurance ----
    {
      id: 'covertech', name: 'CoverTech Insurance', category: 'insurance', icon: ShieldCheck, website: null,
      field: isAr ? 'التأمين والتغطية' : 'Insurance & Coverage',
      brief: isAr
        ? 'توفّر تغطية تأمينية للأصول والمنتجات الرقمية، لحماية المستثمرين والممتلكات عبر المنظومة.'
        : 'Provides insurance coverage for assets and digital products, protecting investors and property across the ecosystem.',
    },
    {
      id: 'hcc', name: 'HCC', category: 'insurance', icon: ShieldCheck, website: null,
      field: isAr ? 'تأمين الأصول والمرونة الإلكترونية' : 'Asset & Cyber Insurance',
      brief: isAr
        ? 'تغطية للأصول والمنصّة تشمل حماية الممتلكات والمرونة الإلكترونية لتقنية المجموعة.'
        : "Asset and platform coverage — including property protection and cyber resilience for the group's technology.",
    },
    {
      id: 'assurax', name: 'Assurax', category: 'insurance', icon: ShieldCheck, website: null,
      field: isAr ? 'تأمين المنتجات الرقمية' : 'Digital Product Insurance',
      brief: isAr
        ? 'تقييم المخاطر وتأمين المنتجات الرقمية، لحماية المستثمرين في الملكية الجزئية والمرمّزة.'
        : 'Risk assessment and coverage for digital products, protecting investors in fractional and tokenized ownership.',
    },
    // ---- Smart Contract & Blockchain Security ----
    {
      id: 'solidproof', name: 'SolidProof', category: 'security', icon: Lock, website: null,
      field: isAr ? 'تدقيق العقود الذكية' : 'Smart Contract Audit',
      brief: isAr
        ? 'تدقيق مستقل للعقود الذكية والتحقق من أمان البلوكشين لأنظمة الترميز في المجموعة.'
        : "Independent smart-contract auditing and blockchain security verification for the group's tokenization systems.",
    },
    {
      id: 'proof-anchor', name: 'Proof Anchor', category: 'security', icon: Lock, website: null,
      field: isAr ? 'التحقق على البلوكشين' : 'Blockchain Verification',
      brief: isAr
        ? 'إثبات وتثبيت سجلات الملكية على البلوكشين بما يجعل التحقق مستقلًا وغير قابل للتلاعب.'
        : 'On-chain proof and anchoring of ownership records, making verification independent and tamper-evident.',
    },
    // ---- Legal ----
    {
      id: 'lexcrest', name: 'Lexcrest Legal', category: 'legal', icon: Scale, website: null,
      field: isAr ? 'القانون والهيكلة' : 'Legal & Structuring',
      brief: isAr
        ? 'المستشار القانوني لهيكلة الـSPV وأطر الملكية والامتثال عبر الولايات المتحدة والمملكة المتحدة.'
        : 'Legal counsel for SPV structuring, ownership frameworks, and cross-border compliance across the USA and UK.',
    },
    // ---- Property & Facility Management ----
    {
      id: 'nova-facility-management', name: 'Nova Facility Management', category: 'facility', icon: Wrench, website: null,
      field: isAr ? 'إدارة المرافق' : 'Facility Management',
      brief: isAr
        ? 'تدير التشغيل اليومي والصيانة للأصول العقارية الأساسية للمجموعة.'
        : "Manages the day-to-day operation and maintenance of the group's underlying real estate assets.",
    },
    {
      id: 'crown-fm', name: 'Crown FM', category: 'facility', icon: Wrench, website: null,
      field: isAr ? 'إدارة العقارات والمرافق' : 'Property & Facility Management',
      brief: isAr
        ? 'شريك إدارة العقارات والمرافق لضمان تشغيل الأصول والحفاظ على قيمتها.'
        : 'Property and facility management partner ensuring assets remain well-operated and value-preserving.',
    },
  ]

  const PartnerCard = ({ partner }) => {
    const logo = getPartnerLogo(partner.id, 'light') // dark-ink logo on a white plate
    const Icon = partner.icon
    const hasSite = partner.website && partner.website !== '#'
    return (
      <div className="group flex flex-col h-full bg-white border border-[color:var(--line-mid)] hover:border-primary/40 hover:shadow-xl hover:shadow-forest/5 transition-all duration-300">
        {/* Logo plate — white so colored SVGs and JPG logos read consistently */}
        <div className="h-28 flex items-center justify-center px-6 border-b border-[color:var(--line-soft)]">
          {logo ? (
            <img src={logo} alt={partner.name} className="h-12 w-auto max-w-[170px] object-contain" />
          ) : (
            <div className="flex flex-col items-center gap-2 text-primary/70">
              <Icon className="w-9 h-9" strokeWidth={1.5} />
              <span className="font-display text-sm font-medium text-ink/80">{partner.name}</span>
            </div>
          )}
        </div>
        {/* Body */}
        <div className="flex flex-col flex-1 p-6">
          <h3 className="font-display text-lg font-medium text-ink leading-snug">{partner.name}</h3>
          <span className="mono-label text-primary mt-1.5" style={{ fontSize: '0.58rem' }}>{partner.field}</span>
          <p className="mt-3 text-sm text-ink/65 leading-relaxed flex-1">{partner.brief}</p>
          <div className="mt-5 pt-4 border-t border-[color:var(--line-soft)] flex items-center gap-5">
            {hasSite ? (
              <a href={partner.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:gap-2 transition-all">
                {t.visitWebsite} <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            ) : (
              <Link to="/contact" className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:gap-2 transition-all">
                {t.viewPartner} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-cream text-ink">
      <PageHero
        eyebrow={t.heroEyebrow}
        title={t.heroTitle}
        accent={t.heroAccent}
        subtitle={t.heroSubtitle}
      />

      {/* ===================================================== PARTNER NETWORK */}
      <Band tone="light">
        <Reveal className="grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <Marker num="01" label={t.introMarker} />
            <h2 className="font-display font-medium leading-[1.02]" style={{ fontSize: 'clamp(2.2rem,4.5vw,4rem)', letterSpacing: '-0.025em' }}>
              {t.introTitle}<span className="accent-em">{t.introAccent}</span>
            </h2>
          </div>
          <p className="text-lg text-ink/70 leading-relaxed lg:pb-2">{t.introBody}</p>
        </Reveal>

        {/* Grouped by category */}
        <div className="mt-16 space-y-16">
          {categories.map((cat, ci) => {
            const CatIcon = cat.icon
            const members = partners.filter((p) => p.category === cat.key)
            if (members.length === 0) return null
            return (
              <div key={cat.key}>
                <Reveal>
                  <div className="flex items-center gap-4 pb-3 mb-8 border-b border-[color:var(--line-dark)]">
                    <span className="font-display italic text-2xl text-primary leading-none">{String(ci + 1).padStart(2, '0')}</span>
                    <CatIcon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    <span className="mono-label text-ink/60">{cat.label}</span>
                    <span className="mono-label text-ink/35 ms-auto" style={{ fontSize: '0.58rem' }}>{members.length} {members.length === 1 ? (isAr ? 'شريك' : 'Partner') : t.partners}</span>
                  </div>
                </Reveal>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {members.map((partner, i) => (
                    <Reveal key={partner.id} delay={(i % 3) * 0.05}>
                      <PartnerCard partner={partner} />
                    </Reveal>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </Band>

      {/* ============================================================= CTA */}
      <Band tone="pitch" className="relative overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-[40rem] h-[40rem]" style={{ background: 'radial-gradient(circle, rgba(47,173,111,0.09), transparent 60%)' }} />
        <Reveal className="relative max-w-3xl">
          <Marker num="02" label={t.ctaMarker} light />
          <h2 className="font-display font-medium leading-[0.98] text-sand" style={{ fontSize: 'clamp(2.6rem,7vw,6rem)', letterSpacing: '-0.03em' }}>
            {t.ctaTitle}<span className="accent-em">{t.ctaAccent}</span>
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

import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { PageHero, Band, Marker, Reveal, BTN } from '@/components/editorial'

const Partners = ({ language }) => {
  const translations = {
    en: {
      heroEyebrow: 'Strategic Partnerships',
      heroTitle: 'A network built on ',
      heroAccent: 'trust.',
      heroSubtitle: 'Strategic partnerships that enhance our global investment ecosystem.',
      strategicPartners: 'Strategic Partners',
      awards: 'Awards & Certifications',
      partnershipTypes: 'Partnership Types',
      realEstate: 'Real Estate Development',
      insurance: 'Insurance & Risk Management',
      financial: 'Financial Services',
      technology: 'Technology & Innovation',
      learnMore: 'Learn More',
      visitWebsite: 'Visit Website',
      partnerSince: 'Partner Since',
      sector: 'Sector',
      services: 'Services',
      achievements: 'Key Achievements',
      typesMarker: 'Partnership categories',
      typesTitle: 'Diverse partners, ',
      typesTitleAccent: 'shared standards.',
      typesBody: 'Diverse partnerships across key sectors of our business.',
      activePartners: 'Active Partners',
      partnersMarker: 'Our network',
      partnersTitle: 'Meet the partners ',
      partnersTitleAccent: 'behind the group.',
      partnersBody: 'Trusted partners who help us deliver exceptional value.',
      moreAwards: 'more awards',
      awardsMarker: 'Recognition & excellence',
      awardsTitle: 'Recognition that ',
      awardsTitleAccent: 'speaks for itself.',
      awardsBody: 'Recognition and certifications from our trusted partners.',
      awardedBy: 'Awarded by',
      statsMarker: 'Partnership impact',
      statsTitle: 'The strength of our ',
      statsTitleAccent: 'collaborative ecosystem.',
      ctaMarker: 'Begin a conversation',
      ctaTitle: 'Become a ',
      ctaTitleAccent: 'partner.',
      ctaBody: 'Join our network of trusted partners and help us build the future of global investment.',
      partnershipOpps: 'Partnership Opportunities',
      contactUs: 'Contact Us',
    },
    ar: {
      heroEyebrow: 'شراكات استراتيجية',
      heroTitle: 'شبكة مبنية على ',
      heroAccent: 'الثقة.',
      heroSubtitle: 'شراكات استراتيجية تعزز نظامنا البيئي الاستثماري العالمي.',
      strategicPartners: 'الشركاء الاستراتيجيون',
      awards: 'الجوائز والشهادات',
      partnershipTypes: 'أنواع الشراكات',
      realEstate: 'تطوير العقارات',
      insurance: 'التأمين وإدارة المخاطر',
      financial: 'الخدمات المالية',
      technology: 'التكنولوجيا والابتكار',
      learnMore: 'تعلم المزيد',
      visitWebsite: 'زيارة الموقع',
      partnerSince: 'شريك منذ',
      sector: 'القطاع',
      services: 'الخدمات',
      achievements: 'الإنجازات الرئيسية',
      typesMarker: 'فئات الشراكة',
      typesTitle: 'شركاء متنوعون، ',
      typesTitleAccent: 'معايير مشتركة.',
      typesBody: 'شراكات متنوعة عبر القطاعات الرئيسية لأعمالنا.',
      activePartners: 'شركاء نشطون',
      partnersMarker: 'شبكتنا',
      partnersTitle: 'تعرّف على الشركاء ',
      partnersTitleAccent: 'وراء المجموعة.',
      partnersBody: 'شركاء موثوقون يساعدوننا على تقديم قيمة استثنائية.',
      moreAwards: 'جوائز أخرى',
      awardsMarker: 'التقدير والتميز',
      awardsTitle: 'تقدير ',
      awardsTitleAccent: 'يتحدث عن نفسه.',
      awardsBody: 'تقدير وشهادات من شركائنا الموثوقين.',
      awardedBy: 'مُنحت من',
      statsMarker: 'أثر الشراكة',
      statsTitle: 'قوة منظومتنا ',
      statsTitleAccent: 'التعاونية.',
      ctaMarker: 'ابدأ محادثة',
      ctaTitle: 'كن ',
      ctaTitleAccent: 'شريكاً.',
      ctaBody: 'انضم إلى شبكة شركائنا الموثوقين وساعدنا في بناء مستقبل الاستثمار العالمي.',
      partnershipOpps: 'فرص الشراكة',
      contactUs: 'تواصل معنا',
    },
  }

  const t = translations[language]

  const partners = [
    {
      id: 'tdh-developments',
      name: 'TDH Developments',
      description: language === 'ar'
        ? 'شراكة استراتيجية في تطوير العقارات لمشاريع جديدة متعلقة بالمجموعة.'
        : 'Strategic partnership in real estate development for new projects related to the group.',
      sector: t.realEstate,
      partnerSince: '2024',
      services: ['Real Estate Development', 'Project Management', 'Construction'],
      achievements: ['REIT Leadership Award', 'Sustainable Development Projects'],
      website: 'https://tdh-developments.com',
    },
    {
      id: 'elitegate-properties',
      name: 'EliteGate Properties',
      description: language === 'ar'
        ? 'شراكة تسويقية في عقارات الفنادق والتطوير العقاري المستدام.'
        : 'Marketing partnership in hotel properties and sustainable real estate development.',
      sector: t.realEstate,
      partnerSince: '2024',
      services: ['Hotel Properties', 'Marketing', 'Sustainable Development'],
      achievements: ['Sustainable Real Estate Development Creativity Award', 'Global Investment Funds Leadership Award'],
      website: '#',
    },
    {
      id: 'profit-max-investment',
      name: 'Profit Max Investment',
      description: language === 'ar'
        ? 'شراكة إدارية في إدارة الاستثمار العالمي وعمليات الصناديق.'
        : 'Administrative partnership in global investment management and fund operations.',
      sector: t.financial,
      partnerSince: '2024',
      services: ['Investment Management', 'Fund Administration', 'Global Markets'],
      achievements: ['Global Investment Funds Leadership Award', 'Outstanding Strategic Partnerships Award'],
      website: '#',
    },
    {
      id: 'cim-financial-group',
      name: 'CIM Financial Group',
      description: language === 'ar'
        ? 'الخدمات المالية والمحاسبية والتدقيق والتوثيق للمشاريع التنموية.'
        : 'Financial and accounting services, auditing, and documentation for developmental projects.',
      sector: t.financial,
      partnerSince: '2024',
      services: ['Accounting Services', 'Auditing', 'Financial Documentation', 'Compliance'],
      achievements: [
        'Fractional Investment Excellence Award',
        'Certified Platform Security Seal',
        'Digital Wallet Security Compliance',
        'Digital Custody & Compliance Certification',
      ],
      website: '#',
    },
    {
      id: 'assurax-insurance',
      name: 'Assurax Insurance',
      description: language === 'ar'
        ? 'خدمات تأمين وتقييم مخاطر متكاملة ضمن المنظومة الاستثمارية.'
        : 'Integrated insurance and risk assessment services within the investment ecosystem.',
      sector: t.insurance,
      partnerSince: '2024',
      services: ['Investment Insurance', 'Risk Assessment', 'Platform Security', 'Compliance'],
      achievements: ['Certified Platform Security Seal', 'Digital Custody & Compliance Certification'],
      website: '#',
    },
    {
      id: 'nova-digital-finance',
      name: 'Nova Digital Finance',
      description: language === 'ar'
        ? 'شريك تقني للخدمات المصرفية الرقمية والحلول المالية الشاملة.'
        : 'Technical partner for digital banking services and comprehensive financial solutions.',
      sector: t.technology,
      partnerSince: '2024',
      services: ['Digital Banking', 'Financial Technology', 'Digital Wallets', 'Blockchain Solutions'],
      achievements: [
        'Blockchain Finance Excellence Certificate',
        'Crypto-Friendly Investment Platform Award',
        'Nova Digital Wallet Integrity Seal',
      ],
      website: '#',
    },
    {
      id: 'hcc-insurance',
      name: 'HCC Insurance',
      description: language === 'ar'
        ? 'تأمين استثماري شامل للأصول والمشاريع داخل المجموعة وخارجها.'
        : 'Comprehensive investment insurance for assets and projects inside and outside the group.',
      sector: t.insurance,
      partnerSince: '2024',
      services: ['Investment Insurance', 'Asset Protection', 'Cybersecurity', 'Risk Management'],
      achievements: [
        'CapiMax Cyber Resilience',
        'Certified Platform Security Seal',
        'Nova Verified Cyber Defense',
        'Innovation in Investment-Linked Insurance',
      ],
      website: '#',
    },
  ]

  const partnershipTypes = [
    {
      type: t.realEstate,
      description: language === 'ar'
        ? 'شراكات في تطوير العقارات والبناء والاستثمار العقاري.'
        : 'Partnerships in property development, construction, and real estate investment.',
      partners: ['TDH Developments', 'EliteGate Properties'],
    },
    {
      type: t.insurance,
      description: language === 'ar'
        ? 'إدارة المخاطر وحماية الأصول وحلول التأمين الشاملة.'
        : 'Risk management, asset protection, and comprehensive insurance solutions.',
      partners: ['Assurax Insurance', 'HCC Insurance'],
    },
    {
      type: t.financial,
      description: language === 'ar'
        ? 'الخدمات المالية والمحاسبة والتدقيق وإدارة الاستثمار.'
        : 'Financial services, accounting, auditing, and investment management.',
      partners: ['CIM Financial Group', 'Profit Max Investment'],
    },
    {
      type: t.technology,
      description: language === 'ar'
        ? 'الخدمات المصرفية الرقمية وحلول التقنية المالية وتقنية البلوكشين.'
        : 'Digital banking, fintech solutions, and blockchain technology.',
      partners: ['Nova Digital Finance'],
    },
  ]

  const allAwards = partners.flatMap((partner) =>
    partner.achievements.map((achievement) => ({
      award: achievement,
      partner: partner.name,
      sector: partner.sector,
    }))
  )

  const stats = [
    { number: '7', label: language === 'ar' ? 'شركاء استراتيجيون' : 'Strategic Partners' },
    { number: '25+', label: language === 'ar' ? 'جوائز وشهادات' : 'Awards & Certifications' },
    { number: '4', label: language === 'ar' ? 'تغطية القطاعات' : 'Sector Coverage' },
    { number: '100%', label: language === 'ar' ? 'معدل الامتثال' : 'Compliance Rate' },
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

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[color:var(--line-dark)]">
          {partnershipTypes.map((type, i) => (
            <Reveal key={i} delay={(i % 4) * 0.05}>
              <div className="group flex flex-col h-full p-7 border-b border-r border-[color:var(--line-dark)] hover:bg-[rgba(47,173,111,0.05)] transition-colors">
                <span className="font-display italic text-2xl text-primary leading-none">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 font-display text-lg font-medium leading-snug group-hover:text-primary transition-colors">{type.type}</h3>
                <p className="mt-3 text-sm text-ink/65 leading-relaxed flex-1">{type.description}</p>
                <div className="mt-5 pt-4 border-t border-[color:var(--line-dark)]">
                  <div className="mono-label text-primary mb-2" style={{ fontSize: '0.58rem' }}>{type.partners.length} {t.activePartners}</div>
                  <div className="space-y-1">
                    {type.partners.map((partner, idx) => (
                      <div key={idx} className="text-sm text-ink/70">— {partner}</div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
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

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[color:var(--line-sand)]">
          {partners.map((partner, i) => {
            const hasSite = partner.website && partner.website !== '#'
            return (
              <Reveal key={partner.id} delay={(i % 3) * 0.05}>
                <div className="group flex flex-col h-full p-8 border-b border-r border-[color:var(--line-sand)] hover:bg-[rgba(47,173,111,0.05)] transition-colors relative">
                  <span className="absolute top-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-500" style={{ transitionTimingFunction: 'var(--ease-out)' }} />
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-display italic text-2xl text-primary leading-none">{String(i + 1).padStart(2, '0')}</span>
                    <span className="mono-label text-sand/35 shrink-0" style={{ fontSize: '0.58rem' }}>{partner.sector}</span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-medium leading-snug text-sand group-hover:text-primary transition-colors">{partner.name}</h3>
                  <p className="mt-3 text-sm text-sand/60 leading-relaxed flex-1">{partner.description}</p>

                  <div className="mt-6 pt-5 border-t border-[color:var(--line-sand)]">
                    <div className="mono-label text-sand/45" style={{ fontSize: '0.58rem' }}>{t.partnerSince}</div>
                    <div className="font-display text-lg mt-1 text-sand">{partner.partnerSince}</div>
                  </div>

                  <div className="mt-5">
                    <div className="mono-label text-sand/45 mb-2" style={{ fontSize: '0.58rem' }}>{t.services}</div>
                    <div className="flex flex-wrap gap-2">
                      {partner.services.slice(0, 3).map((service, idx) => (
                        <span key={idx} className="text-[0.7rem] px-2.5 py-1 border border-[color:var(--line-sand)] text-sand/75">
                          {service}
                        </span>
                      ))}
                      {partner.services.length > 3 && (
                        <span className="text-[0.7rem] px-2.5 py-1 border border-[color:var(--line-sand)] text-sand/55">
                          +{partner.services.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="mono-label text-sand/45 mb-2" style={{ fontSize: '0.58rem' }}>{t.achievements}</div>
                    <div className="space-y-1.5">
                      {partner.achievements.slice(0, 2).map((achievement, idx) => (
                        <div key={idx} className="text-sm text-sand/70">— {achievement}</div>
                      ))}
                      {partner.achievements.length > 2 && (
                        <div className="text-xs text-sand/45">+{partner.achievements.length - 2} {t.moreAwards}</div>
                      )}
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
      </Band>

      {/* ============================================ AWARDS & CERTIFICATIONS */}
      <Band tone="light">
        <Reveal className="grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <Marker num="03" label={t.awardsMarker} />
            <h2 className="font-display font-medium leading-[1.02]" style={{ fontSize: 'clamp(2.2rem,4.5vw,4rem)', letterSpacing: '-0.025em' }}>
              {t.awardsTitle}<span className="accent-em">{t.awardsTitleAccent}</span>
            </h2>
          </div>
          <p className="text-lg text-ink/70 leading-relaxed lg:pb-2">{t.awardsBody}</p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[color:var(--line-dark)]">
          {allAwards.slice(0, 12).map((item, i) => (
            <Reveal key={i} delay={(i % 3) * 0.04}>
              <div className="group flex flex-col h-full p-7 border-b border-r border-[color:var(--line-dark)] hover:bg-[rgba(47,173,111,0.05)] transition-colors">
                <span className="font-display italic text-2xl text-primary leading-none">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 font-display text-base font-medium leading-snug group-hover:text-primary transition-colors flex-1">{item.award}</h3>
                <div className="mt-4 pt-3 border-t border-[color:var(--line-dark)]">
                  <div className="text-sm text-ink/65">{t.awardedBy} {item.partner}</div>
                  <div className="mono-label text-ink/40 mt-1" style={{ fontSize: '0.55rem' }}>{item.sector}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* =================================================== PARTNERSHIP STATS */}
      <Band tone="darker">
        <Reveal>
          <Marker num="04" label={t.statsMarker} light />
          <h2 className="font-display font-medium leading-[1.02] text-sand max-w-3xl" style={{ fontSize: 'clamp(2.2rem,4.5vw,4rem)', letterSpacing: '-0.025em' }}>
            {t.statsTitle}<span className="accent-em">{t.statsTitleAccent}</span>
          </h2>
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
          <Marker num="05" label={t.ctaMarker} light />
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

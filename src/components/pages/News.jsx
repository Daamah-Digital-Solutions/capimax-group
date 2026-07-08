import { ArrowRight, ArrowUpRight, Calendar } from 'lucide-react'
import { PageHero, Band, Marker, Reveal, BTN } from '@/components/editorial'

// News content supplied by the client (news.docx). Partnership logos and
// media-coverage screenshots live in /public/news/. Dates are approximate and
// can be adjusted by the client.
const News = ({ language }) => {
  const t = {
    en: {
      pageEyebrow: 'News & Media',
      pageTitle: 'News & ',
      pageTitleAccent: 'media.',
      pageSubtitle: 'Announcements, strategic partnerships, and press coverage from across the Capimax ecosystem.',

      featuredMarker: 'Featured announcement',
      brings: 'What it brings together',
      visit: 'Visit',
      viewSource: 'View source',
      scope: 'Scope & responsibilities',

      partnersMarker: 'Strategic partnerships',
      partnersTitle: 'New partnerships across ',
      partnersTitleAccent: 'the ecosystem.',
      partnersBody: 'Capimax Group is building an accountable, verifiable ecosystem through strategic partnerships in finance, insurance, blockchain security, and law.',

      mediaMarker: 'Official news sources',
      mediaTitle: 'In the ',
      mediaTitleAccent: 'press.',
      mediaBody: 'Capimax Group and its platforms, featured by our official media partners.',
      readCoverage: 'Read the coverage',

      newsletterMarker: 'Stay informed',
      newsletterTitle: 'Stay ',
      newsletterAccent: 'informed.',
      newsletterDesc: 'Subscribe for the latest announcements, partnerships, and media coverage from Capimax Group and its platforms.',
      subscribe: 'Subscribe',
      emailPlaceholder: 'Enter your email address',
    },
    ar: {
      pageEyebrow: 'الأخبار والإعلام',
      pageTitle: 'الأخبار ',
      pageTitleAccent: 'والإعلام.',
      pageSubtitle: 'الإعلانات والشراكات الاستراتيجية والتغطية الإعلامية عبر منظومة كابيماكس.',

      featuredMarker: 'إعلان مميّز',
      brings: 'ما تجمعه المنصة',
      visit: 'زيارة',
      viewSource: 'عرض المصدر',
      scope: 'النطاق والمسؤوليات',

      partnersMarker: 'الشراكات الاستراتيجية',
      partnersTitle: 'شراكات جديدة عبر ',
      partnersTitleAccent: 'المنظومة.',
      partnersBody: 'تبني مجموعة كابيماكس منظومة قابلة للمساءلة والتحقق عبر شراكات استراتيجية في المال والتأمين وأمن البلوكشين والقانون.',

      mediaMarker: 'مصادر الأخبار الرسمية',
      mediaTitle: 'في ',
      mediaTitleAccent: 'الإعلام.',
      mediaBody: 'تغطية لمجموعة كابيماكس ومنصاتها من شركائنا الإعلاميين الرسميين.',
      readCoverage: 'اقرأ التغطية',

      newsletterMarker: 'ابق على اطلاع',
      newsletterTitle: 'ابق على ',
      newsletterAccent: 'اطلاع.',
      newsletterDesc: 'اشترك لتصلك آخر الإعلانات والشراكات والتغطية الإعلامية من مجموعة كابيماكس ومنصاتها.',
      subscribe: 'اشترك',
      emailPlaceholder: 'أدخل بريدك الإلكتروني',
    },
  }[language]

  const launch = {
    date: '2026-01-05',
    links: [
      { label: 'capimax.io', url: 'https://www.capimax.io' },
      { label: 'capimax.us', url: 'https://www.capimax.us' },
    ],
    en: {
      label: 'Platform Launch',
      title: 'Capimax Group Launches the Capimax Ecosystem Platform',
      body: 'Capimax Group announces the official launch of the Capimax Ecosystem — the group’s primary digital gateway that brings together all Capimax platforms, strategic partnerships, services, and investment solutions within one integrated ecosystem. It serves as the central entry point for the entire group, giving users seamless access to:',
      scope: [
        'All Capimax platforms',
        'Investment opportunities',
        'Digital & real-estate asset platforms',
        'Strategic partners',
        'Verification Center',
        'Official news & announcements',
        'Corporate services',
        'Global digital ownership ecosystem',
      ],
    },
    ar: {
      label: 'إطلاق منصة',
      title: 'مجموعة كابيماكس تطلق منصة Capimax Ecosystem',
      body: 'تعلن مجموعة كابيماكس عن الإطلاق الرسمي لمنظومة Capimax Ecosystem — البوابة الرقمية الرئيسية للمجموعة التي تجمع كل منصات كابيماكس والشراكات الاستراتيجية والخدمات والحلول الاستثمارية في منظومة واحدة متكاملة. وتمثّل نقطة الدخول المركزية للمجموعة بالكامل، وتمنح المستخدمين وصولًا سلسًا إلى:',
      scope: [
        'كل منصات كابيماكس',
        'الفرص الاستثمارية',
        'منصات الأصول الرقمية والعقارية',
        'الشركاء الاستراتيجيون',
        'مركز التحقق',
        'الأخبار والإعلانات الرسمية',
        'الخدمات المؤسسية',
        'منظومة الملكية الرقمية العالمية',
      ],
    },
  }

  const partnerships = [
    {
      id: 'cim',
      date: '2026-01-15',
      image: '/news/cim-global-financial-logo.jpg',
      fit: 'contain',
      url: 'https://www.cimglobalfinancial.com/strategic-partnership',
      en: {
        label: 'Partnership',
        title: 'Strategic Partnership with CIM Global Financial',
        excerpt: 'CIM Global Financial will serve as the principal financial and investment-services partner across the entire Capimax Ecosystem — strengthening transparency, governance, and investor confidence.',
        scope: ['Financial Analysis', 'Investment Analysis', 'Independent Valuation Services', 'Financial Oversight', 'Financial Reporting', 'Asset Valuation', 'Document Custody & Secure Storage', 'Document Certification', 'Verification Services', 'Issuance of Verification Numbers', 'Verification Links', 'Financial Governance Support'],
      },
      ar: {
        label: 'شراكة',
        title: 'شراكة استراتيجية مع CIM Global Financial',
        excerpt: 'تعمل CIM Global Financial كالشريك الرئيسي للخدمات المالية والاستثمارية عبر منظومة كابيماكس بالكامل — بما يعزّز الشفافية والحوكمة وثقة المستثمرين.',
        scope: ['التحليل المالي', 'التحليل الاستثماري', 'خدمات التقييم المستقل', 'الرقابة المالية', 'التقارير المالية', 'تقييم الأصول', 'حفظ المستندات والتخزين الآمن', 'تصديق المستندات', 'خدمات التحقق', 'إصدار أرقام التحقق', 'روابط التحقق', 'دعم الحوكمة المالية'],
      },
    },
    {
      id: 'covertech',
      date: '2026-01-15',
      image: '/news/covertech-partnership-certificate.jpg',
      fit: 'cover',
      url: 'https://www.covertechinsurance.com/capimax-ecosystem',
      en: {
        label: 'Partnership',
        title: 'Strategic Partnership with CoverTech Insurance',
        excerpt: 'CoverTech Insurance will provide comprehensive insurance and digital-insurance solutions across the Capimax Ecosystem — enhancing the security and protection of investors, assets, and platform operations worldwide.',
        scope: ['Real Estate Insurance', 'Digital Asset Insurance', 'Tokenized Asset Insurance', 'Investor Protection Coverage', 'Investment Portfolio Insurance', 'Platform Insurance', 'Real Estate Tokenization Insurance', 'Global Risk Management Services'],
      },
      ar: {
        label: 'شراكة',
        title: 'شراكة استراتيجية مع CoverTech Insurance',
        excerpt: 'توفّر CoverTech Insurance حلول تأمين رقمية شاملة عبر منظومة كابيماكس — بما يعزّز أمن وحماية المستثمرين والأصول وعمليات المنصات عالميًا.',
        scope: ['تأمين العقارات', 'تأمين الأصول الرقمية', 'تأمين الأصول المرمّزة', 'تغطية حماية المستثمرين', 'تأمين المحافظ الاستثمارية', 'تأمين المنصات', 'تأمين ترميز العقارات', 'خدمات إدارة المخاطر العالمية'],
      },
    },
    {
      id: 'proof-anchor',
      date: '2026-01-20',
      image: '/news/proof-anchor-logo.jpg',
      fit: 'contain',
      url: 'https://www.proofanchor.io',
      en: {
        label: 'Collaboration',
        title: 'Strategic Collaboration with Proof Anchor',
        excerpt: 'Proof Anchor will strengthen blockchain security across all tokenization platforms, supporting the ongoing security and integrity of smart contracts used throughout the ecosystem.',
        scope: ['Smart Contract Audits', 'Independent Smart Contract Reviews', 'Security Assessment Reports', 'Continuous Smart Contract Monitoring', 'Blockchain Security Services', 'Smart Contract Repository', 'Public Verification Services', 'Enhanced Transparency & Investor Confidence'],
      },
      ar: {
        label: 'تعاون',
        title: 'تعاون استراتيجي مع Proof Anchor',
        excerpt: 'تعزّز Proof Anchor أمن البلوكشين عبر جميع منصات الترميز، وتدعم استمرارية أمان وسلامة العقود الذكية المستخدمة في المنظومة.',
        scope: ['تدقيق العقود الذكية', 'مراجعات مستقلة للعقود الذكية', 'تقارير تقييم أمني', 'مراقبة مستمرة للعقود الذكية', 'خدمات أمن البلوكشين', 'مستودع العقود الذكية', 'خدمات التحقق العلني', 'تعزيز الشفافية وثقة المستثمرين'],
      },
    },
    {
      id: 'lexcrest',
      date: '2026-01-22',
      image: '/news/lexcrest-global-logo.jpg',
      fit: 'contain',
      url: 'https://www.lexcrestlegal.com',
      en: {
        label: 'Partnership',
        title: 'Strategic Partnership with Lexcrest Legal',
        excerpt: 'Lexcrest Legal will serve as the ecosystem’s global legal partner, strengthening the legal framework supporting the Capimax Ecosystem and ensuring compliance with international legal standards.',
        scope: ['Legal Due Diligence', 'Legal Document Review', 'Contract Drafting & Review', 'Corporate Legal Structuring', 'SPV Formation', 'Legal Governance', 'Regulatory Compliance', 'Corporate Advisory Services', 'Tokenization Legal Support', 'Digital Asset Legal Services'],
      },
      ar: {
        label: 'شراكة',
        title: 'شراكة استراتيجية مع Lexcrest Legal',
        excerpt: 'تعمل Lexcrest Legal كشريك قانوني عالمي للمنظومة، بما يعزّز الإطار القانوني الداعم لمنظومة كابيماكس ويضمن الامتثال للمعايير القانونية الدولية.',
        scope: ['العناية القانونية', 'مراجعة المستندات القانونية', 'صياغة ومراجعة العقود', 'الهيكلة القانونية المؤسسية', 'تأسيس شركات SPV', 'الحوكمة القانونية', 'الامتثال التنظيمي', 'الخدمات الاستشارية المؤسسية', 'الدعم القانوني للترميز', 'الخدمات القانونية للأصول الرقمية'],
      },
    },
  ]

  const media = [
    {
      id: 'gb-journal',
      name: 'Global Business Journal',
      date: '2026-07-08',
      image: '/news/gb-journal-coverage.jpg',
      url: 'https://www.gbjournal.world/',
      en: { tagline: 'Capimax is building one of the first integrated blockchain-powered real estate ecosystems.' },
      ar: { tagline: 'كابيماكس تبني واحدة من أوائل المنظومات العقارية المتكاملة المدعومة بالبلوكشين.' },
    },
    {
      id: 'econix',
      name: 'Econix Global',
      date: '2026-07-08',
      image: '/news/econix-coverage.jpg',
      url: 'https://econixglobal.com/',
      en: { tagline: 'A global gateway for tokenized and digital real estate.' },
      ar: { tagline: 'بوابة عالمية للعقارات المرمّزة والرقمية.' },
    },
    {
      id: 'domynex',
      name: 'Domynex Global',
      date: '2026-07-08',
      image: '/news/domynex-coverage.jpg',
      url: 'https://domynexglobal.com/',
      en: { tagline: 'PropTech & Smart Cities — inside Capimax RT and the connected real estate ecosystem.' },
      ar: { tagline: 'التقنية العقارية والمدن الذكية — داخل كابيماكس RT والمنظومة العقارية المترابطة.' },
    },
  ]

  const fmt = (d) => new Date(d).toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' })

  return (
    <div className="bg-cream text-ink">
      <PageHero eyebrow={t.pageEyebrow} title={t.pageTitle} accent={t.pageTitleAccent} subtitle={t.pageSubtitle} />

      {/* ============================================== FEATURED LAUNCH */}
      <Band tone="dark" className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(47,173,111,0.09), transparent 60%)' }} />
        <Reveal className="relative max-w-3xl">
          <Marker num="01" label={t.featuredMarker} />
          <div className="flex items-center gap-4 mb-6 text-sand/55">
            <span className="mono-label text-primary" style={{ fontSize: '0.62rem' }}>{launch[language].label}</span>
            <span className="inline-flex items-center gap-1.5 text-sm"><Calendar className="w-3.5 h-3.5 text-primary" />{fmt(launch.date)}</span>
          </div>
          <h2 className="font-display font-medium leading-[1.05] text-sand" style={{ fontSize: 'clamp(2rem,4.5vw,3.6rem)', letterSpacing: '-0.025em' }}>
            {launch[language].title}
          </h2>
          <p className="mt-7 text-lg text-sand/75 leading-relaxed">{launch[language].body}</p>

          <div className="mt-7">
            <div className="mono-label text-sand/45 mb-3" style={{ fontSize: '0.6rem' }}>{t.brings}</div>
            <div className="flex flex-wrap gap-2">
              {launch[language].scope.map((s, idx) => (
                <span key={idx} className="text-sm px-3 py-1.5 border border-[color:var(--line-sand)] text-sand/80">{s}</span>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            {launch.links.map((l) => (
              <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className={`group ${BTN.sand}`}>
                {t.visit} {l.label}
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ))}
          </div>
        </Reveal>
      </Band>

      {/* ============================================== STRATEGIC PARTNERSHIPS */}
      <Band tone="light">
        <Reveal className="grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <Marker num="02" label={t.partnersMarker} light />
            <h2 className="font-display font-medium leading-[1.04]" style={{ fontSize: 'clamp(2.2rem,4.5vw,4rem)', letterSpacing: '-0.025em' }}>
              {t.partnersTitle}<span className="accent-em">{t.partnersTitleAccent}</span>
            </h2>
          </div>
          <p className="text-lg text-ink/70 leading-relaxed lg:pb-2">{t.partnersBody}</p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 border-t border-l border-[color:var(--line-dark)]">
          {partnerships.map((a, i) => {
            const copy = a[language]
            return (
              <Reveal key={a.id} delay={(i % 2) * 0.05}>
                <article className="group flex flex-col h-full border-b border-r border-[color:var(--line-dark)] hover:bg-[rgba(47,173,111,0.04)] transition-colors">
                  <div className="aspect-[16/9] overflow-hidden bg-white border-b border-[color:var(--line-dark)] flex items-center justify-center">
                    <img
                      src={a.image}
                      alt={copy.title}
                      loading="lazy"
                      className={a.fit === 'contain' ? 'max-h-[72%] max-w-[72%] object-contain' : 'w-full h-full object-cover'}
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-7">
                    <div className="flex items-center gap-4 text-ink/50">
                      <span className="mono-label text-primary" style={{ fontSize: '0.6rem' }}>{copy.label}</span>
                      <span className="inline-flex items-center gap-1.5 text-xs"><Calendar className="w-3 h-3" />{fmt(a.date)}</span>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-medium leading-snug group-hover:text-primary transition-colors">{copy.title}</h3>
                    <p className="mt-3 text-sm text-ink/65 leading-relaxed">{copy.excerpt}</p>

                    <div className="mt-5 pt-5 border-t border-[color:var(--line-dark)] flex-1">
                      <div className="mono-label text-ink/45 mb-2.5" style={{ fontSize: '0.58rem' }}>{t.scope}</div>
                      <div className="flex flex-wrap gap-2">
                        {copy.scope.map((s, idx) => (
                          <span key={idx} className="text-[0.7rem] px-2.5 py-1 border border-[color:var(--line-dark)] text-ink/70">{s}</span>
                        ))}
                      </div>
                    </div>

                    <a href={a.url} target="_blank" rel="noopener noreferrer" className="group/btn mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary self-start">
                      {t.viewSource}
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Band>

      {/* ============================================== MEDIA PARTNERS */}
      <Band tone="darker">
        <Reveal className="grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <Marker num="03" label={t.mediaMarker} />
            <h2 className="font-display font-medium leading-[1.04] text-sand" style={{ fontSize: 'clamp(2.2rem,4.5vw,4rem)', letterSpacing: '-0.025em' }}>
              {t.mediaTitle}<span className="accent-em">{t.mediaTitleAccent}</span>
            </h2>
          </div>
          <p className="text-lg text-sand/70 leading-relaxed lg:pb-2">{t.mediaBody}</p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[color:var(--line-sand)]">
          {media.map((m, i) => (
            <Reveal key={m.id} delay={(i % 3) * 0.05}>
              <a href={m.url} target="_blank" rel="noopener noreferrer" className="group flex flex-col h-full border-b border-r border-[color:var(--line-sand)] hover:bg-[rgba(47,173,111,0.05)] transition-colors">
                <div className="aspect-[16/9] overflow-hidden border-b border-[color:var(--line-sand)]">
                  <img src={m.image} alt={m.name} loading="lazy" className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500" />
                </div>
                <div className="flex flex-col flex-1 p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg font-medium text-sand group-hover:text-primary transition-colors">{m.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-sand/40 group-hover:text-primary transition-colors" />
                  </div>
                  <p className="mt-3 text-sm text-sand/60 leading-relaxed flex-1">{m[language].tagline}</p>
                  <span className="mt-5 mono-label text-primary" style={{ fontSize: '0.6rem' }}>{t.readCoverage}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* ============================================== NEWSLETTER */}
      <Band tone="pitch" className="relative overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-[40rem] h-[40rem] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(47,173,111,0.09), transparent 60%)' }} />
        <Reveal className="relative max-w-2xl">
          <Marker num="04" label={t.newsletterMarker} />
          <h2 className="font-display font-medium leading-[1.02] text-sand" style={{ fontSize: 'clamp(2.4rem,5vw,4.5rem)', letterSpacing: '-0.03em' }}>
            {t.newsletterTitle}<span className="accent-em">{t.newsletterAccent}</span>
          </h2>
          <p className="mt-6 text-lg text-sand/70 leading-relaxed">{t.newsletterDesc}</p>
          <form className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder={t.emailPlaceholder} className="flex-1 bg-transparent border border-[color:var(--line-sand)] px-4 py-3 text-sand placeholder:text-sand/40 focus:border-primary outline-none transition-colors" />
            <button type="submit" className={`group ${BTN.sand}`}>
              {t.subscribe}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </Reveal>
      </Band>
    </div>
  )
}

export default News

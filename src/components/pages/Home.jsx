import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { companyRegistry, companyIds } from '@/data/companies'
import { companyContent, platformContent, currencyContent, novaContent } from '@/data/content'

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

// All group companies drive the wordmark marquee (dedicated logos pending from client).
const marqueeCompanies = companyIds

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
  const c = {
    en: {
      heroEyebrow: 'Real estate technology · Tokenization · Fractional ownership',
      heroLine1: 'Real-world real estate,',
      heroAccent: 'verifiable ownership.',
      heroLede: 'Capimax Group Holding is a Delaware-registered holding company building a global ecosystem for real estate technology, fractional ownership, and asset tokenization across the USA and UK.',
      exploreGroup: 'Explore the Group',
      startOwning: 'Own a share',
      glance: '— At a glance',
      stats: [
        { n: '8', label: 'Companies' },
        { n: '5', label: 'Platforms' },
        { n: 'USA · UK', label: 'Jurisdictions' },
      ],

      aboutMarker: 'About Capimax',
      aboutTitle: ['A holding company built on ', 'governance,', ' powered by technology.'],
      aboutLede: 'Capimax Group Holding is registered in the State of Delaware, USA. It owns licensed companies and specialized platforms across the USA and UK, focused on real estate technology, fractional ownership, and tokenization.',
      aboutBody: 'From real estate technology and digital property infrastructure to asset tokenization and blockchain, each company operates with a clear mandate under one umbrella — turning real-world real estate into transparent, verifiable, fractional ownership on a global scale.',
      aboutQuote: 'We build ownership that endures — and can be verified.',
      aboutMeta: [
        ['Registered', 'Delaware, USA'],
        ['Companies', '8'],
        ['Jurisdictions', 'USA · UK'],
        ['Structure', 'Holding Group'],
      ],

      serveMarker: 'Who we serve',
      serveTitle: ['One ecosystem for ', 'every party.'],
      serveBody: 'Capimax operates globally through licensed, regulated platforms that connect every side of real estate.',
      serve: [
        ['Developers', 'Bring projects and inventory into the ecosystem.'],
        ['Property owners', 'Unlock liquidity from real, held assets.'],
        ['Investors', 'Own fractional, documented shares.'],
        ['Brokers', 'Connect supply and demand across the marketplace.'],
        ['Liquidity providers', 'Enable exit and secondary-market liquidity.'],
      ],

      groupMarker: 'The Group',
      groupTitle: ['Specialized companies, ', 'one umbrella.'],
      groupBody: 'A portfolio of regulated entities, each with a defined role in the Capimax ecosystem.',
      viewAll: 'View all companies',

      techMarker: 'Technology & innovation',
      techTitle: ['A new generation of ', 'real estate technology.'],
      techBody: 'Capimax RT and Capimax BRX bring developers, owners, investors, brokers, and liquidity providers into one connected system.',
      techCards: [
        ['Capimax RT', 'The real estate tokenization platform — real estate converted into transferable digital shares through legally structured SPVs, secured on the blockchain.'],
        ['Capimax BRX', 'The multi-party real estate exchange — where discovery, ownership, and exchange come together in one connected marketplace.'],
      ],
      techUnify: 'One system unifies:',
      techParties: ['Developer', 'Owner', 'Investor', 'Liquidity provider', 'Broker'],

      methodMarker: 'How ownership works',
      methodTitle: ['From a real asset ', 'to your share.'],
      methods: [
        ['Structure', 'Each asset is placed into its own independent, legally structured SPV.'],
        ['Tokenize or digitize', 'Ownership is divided into transferable, fractional shares — tokenized on the blockchain or managed digitally.'],
        ['Own & exit', 'Track performance and exit through platforms, secondary markets, or liquidity providers.'],
      ],

      ecoMarker: 'Platforms & digital infrastructure',
      ecoTitle: ['The Capimax ', 'ecosystem.'],
      ecoBody: 'Licensed platforms, a utility currency, and digital finance — the infrastructure behind ownership.',
      learnMore: 'Learn more',
      visit: 'Visit',
      currencyLabel: 'Pronova — utility currency',
      novaLabel: 'Nova Digital Finance',

      verifyMarker: 'A verifiable ecosystem',
      verifyTitle: ['Everything, ', 'verifiable.'],
      verifyBody: 'Every digital asset is linked to a documented, real-world asset. Every project has its own independent SPV. And every layer is built to be verified and audited.',
      verify: [
        ['Independent SPV per asset', 'Each project sits in its own verifiable SPV.'],
        ['Documented ownership', 'Ownership certificates and records are verifiable.'],
        ['Property & company records', 'The property and its owning company are verifiable.'],
        ['Professional smart contracts', 'Audited, professional smart contracts govern tokenized assets.'],
        ['Security reviews & audits', 'Multi-level technical audits and verification.'],
        ['Independent valuation', 'Assets valued by independent valuation partners.'],
        ['Specialized insurance', 'Assets and operations insured via HCC and AssurX.'],
        ['Legal & regulatory registration', 'Digital assets registered within a clear legal framework.'],
      ],

      wyMarker: 'Legal & regulatory foundation',
      wyTitle: ['Anchored in ', 'the United States.'],
      wyBody: 'For its digital-asset and tokenization activity, the group chose the United States — and the State of Wyoming in particular — as one of the most advanced jurisdictions for digital assets and blockchain.',
      wyPoints: [
        'Registration of digital assets',
        'Protection of owners, investors, and developers',
        'Legal structures for digital assets',
        'Regulation of digital and fractional ownership',
        'Support for blockchain and smart contracts',
        'Transparency, compliance, and verifiability',
      ],

      whyMarker: 'Why Capimax',
      whyTitle: ['The right partner for ', 'verifiable ownership.'],
      why: [
        ['Delaware holding', 'A registered holding company with group-level governance and compliance.'],
        ['Verifiable', 'Every asset backed by documents and an independent SPV.'],
        ['Tokenized & digital', 'Real estate as transferable, blockchain-secured shares.'],
        ['Multi-party', 'Developers, owners, investors, brokers, and liquidity providers in one system.'],
        ['Global reach', 'Licensed platforms operating across the USA and UK.'],
        ['Asset-backed', 'Real assets, structured in SPVs and insured via HCC.'],
      ],

      newsMarker: 'News & media',
      newsTitle: ['In the ', 'press.'],
      newsBody: 'Coverage of Capimax Group, its companies, and its platforms.',
      newsPending: 'Press logos & article links pending',
      readNews: 'Read the news',

      ctaMarker: 'Begin a conversation',
      ctaTitle: ['Own a share of ', 'real estate.'],
      ctaBody: 'Explore the group, our platforms, and the assets you can own.',
      contactCta: 'Contact us',
      exploreCta: 'Explore Platforms',
    },
    ar: {
      heroEyebrow: 'تكنولوجيا العقارات · الترميز · الملكية الجزئية',
      heroLine1: 'عقاراتٌ حقيقية،',
      heroAccent: 'ملكية قابلة للتحقق.',
      heroLede: 'كابي ماكس جروب القابضة شركة قابضة مسجّلة في ديلاوير، تبني منظومة عالمية لتكنولوجيا العقارات والملكية الجزئية وترميز الأصول عبر الولايات المتحدة والمملكة المتحدة.',
      exploreGroup: 'استكشف المجموعة',
      startOwning: 'تملّك حصة',
      glance: '— لمحة',
      stats: [
        { n: '8', label: 'شركات' },
        { n: '5', label: 'منصات' },
        { n: 'USA · UK', label: 'الولايات القضائية' },
      ],

      aboutMarker: 'عن كابي ماكس',
      aboutTitle: ['شركة قابضة مبنية على ', 'الحوكمة،', ' مدعومة بالتكنولوجيا.'],
      aboutLede: 'كابي ماكس جروب القابضة مسجّلة في ولاية ديلاوير بالولايات المتحدة. تمتلك شركات مرخّصة ومنصات متخصصة عبر الولايات المتحدة والمملكة المتحدة، تركّز على تكنولوجيا العقارات والملكية الجزئية والترميز.',
      aboutBody: 'من تكنولوجيا العقارات والبنية التحتية للملكية الرقمية إلى ترميز الأصول والبلوكشين، تعمل كل شركة بدور واضح تحت مظلة واحدة — لتحويل العقارات الحقيقية إلى ملكية جزئية شفافة وقابلة للتحقق على المستوى العالمي.',
      aboutQuote: 'نبني تملّكًا يدوم — ويمكن التحقق منه.',
      aboutMeta: [
        ['التسجيل', 'ديلاوير، الولايات المتحدة'],
        ['الشركات', '8'],
        ['الولايات القضائية', 'USA · UK'],
        ['الهيكل', 'مجموعة قابضة'],
      ],

      serveMarker: 'من نخدم',
      serveTitle: ['منظومة واحدة ', 'لكل الأطراف.'],
      serveBody: 'تعمل كابي ماكس عالميًا عبر منصات مرخّصة ومنظّمة تربط كل أطراف العقار.',
      serve: [
        ['المطوّرون', 'يُدخلون المشاريع والمخزون إلى المنظومة.'],
        ['ملاك العقارات', 'يُطلقون السيولة من أصول حقيقية مملوكة.'],
        ['المستثمرون', 'يمتلكون حصصًا جزئية موثّقة.'],
        ['الوسطاء', 'يربطون العرض بالطلب عبر السوق.'],
        ['مزوّدو السيولة', 'يتيحون التخارج وسيولة السوق الثانوي.'],
      ],

      groupMarker: 'المجموعة',
      groupTitle: ['شركات متخصصة، ', 'مظلة واحدة.'],
      groupBody: 'محفظة من الكيانات المرخّصة، لكل منها دور محدّد في منظومة كابي ماكس.',
      viewAll: 'عرض كل الشركات',

      techMarker: 'التكنولوجيا والابتكار',
      techTitle: ['جيل جديد من ', 'التكنولوجيا العقارية.'],
      techBody: 'كابي ماكس RT وكابي ماكس BRX تجمعان المطوّرين والملاك والمستثمرين والوسطاء ومزوّدي السيولة في نظام واحد مترابط.',
      techCards: [
        ['كابي ماكس RT', 'منصة ترميز العقارات — تحويل العقارات إلى حصص رقمية قابلة للتحويل عبر هياكل SPV قانونية، ومؤمّنة على البلوكشين.'],
        ['كابي ماكس BRX', 'منصة التبادل العقاري متعددة الأطراف — حيث يجتمع الاكتشاف والتملّك والتبادل في سوق واحد مترابط.'],
      ],
      techUnify: 'نظام واحد يوحّد:',
      techParties: ['المطوّر', 'المالك', 'المستثمر', 'مزوّد السيولة', 'الوسيط'],

      methodMarker: 'كيف يعمل التملّك',
      methodTitle: ['من أصل حقيقي ', 'إلى حصتك.'],
      methods: [
        ['الهيكلة', 'يُوضع كل أصل في شركة SPV مستقلة ومُهيكلة قانونيًا.'],
        ['الترميز أو الرقمنة', 'تُقسَّم الملكية إلى حصص جزئية قابلة للتحويل — مرمّزة على البلوكشين أو مُدارة رقميًا.'],
        ['التملّك والتخارج', 'تابع الأداء وتخارج عبر المنصات أو الأسواق الثانوية أو مزوّدي السيولة.'],
      ],

      ecoMarker: 'المنصات والبنية الرقمية',
      ecoTitle: ['منظومة ', 'كابي ماكس.'],
      ecoBody: 'منصات مرخّصة وعملة خدمية وتمويل رقمي — البنية التحتية للتملّك.',
      learnMore: 'اعرف المزيد',
      visit: 'زيارة',
      currencyLabel: 'Pronova — عملة خدمية',
      novaLabel: 'نوفا للتمويل الرقمي',

      verifyMarker: 'منظومة قابلة للتحقق',
      verifyTitle: ['كل شيء ', 'قابل للتحقق.'],
      verifyBody: 'كل أصل رقمي مرتبط بأصل حقيقي موثّق. لكل مشروع شركة SPV مستقلة. وكل طبقة مبنية لتكون قابلة للتحقق والتدقيق.',
      verify: [
        ['SPV مستقلة لكل أصل', 'كل مشروع في شركة SPV مستقلة قابلة للتحقق.'],
        ['ملكية موثّقة', 'شهادات وسجلات الملكية قابلة للتحقق.'],
        ['سجلات العقار والشركة', 'العقار والشركة المالكة قابلان للتحقق.'],
        ['عقود ذكية احترافية', 'عقود ذكية احترافية ومدقّقة تحكم الأصول المرمّزة.'],
        ['مراجعات أمنية وتدقيق', 'تدقيق تقني وتحقق متعدد المستويات.'],
        ['تقييم مستقل', 'تُقيَّم الأصول عبر شركاء تقييم مستقلين.'],
        ['تأمين متخصص', 'الأصول والعمليات مؤمّنة عبر HCC وAssurX.'],
        ['تسجيل قانوني وتنظيمي', 'الأصول الرقمية مسجّلة ضمن إطار قانوني واضح.'],
      ],

      wyMarker: 'الأساس القانوني والتنظيمي',
      wyTitle: ['راسخة في ', 'الولايات المتحدة.'],
      wyBody: 'لنشاطها في الأصول الرقمية والترميز، اختارت المجموعة الولايات المتحدة — وولاية وايومنغ تحديدًا — كواحدة من أكثر الولايات تطوّرًا في مجال الأصول الرقمية والبلوكشين.',
      wyPoints: [
        'تسجيل الأصول الرقمية',
        'حماية الملاك والمستثمرين والمطوّرين',
        'هياكل قانونية للأصول الرقمية',
        'تنظيم الملكية الرقمية والجزئية',
        'دعم البلوكشين والعقود الذكية',
        'الشفافية والامتثال وقابلية التحقق',
      ],

      whyMarker: 'لماذا كابي ماكس',
      whyTitle: ['الشريك الصحيح ', 'لملكية قابلة للتحقق.'],
      why: [
        ['قابضة في ديلاوير', 'شركة قابضة مسجّلة بحوكمة وامتثال على مستوى المجموعة.'],
        ['قابل للتحقق', 'كل أصل مدعوم بمستندات وشركة SPV مستقلة.'],
        ['مرمّز ورقمي', 'العقارات كحصص قابلة للتحويل ومؤمّنة بالبلوكشين.'],
        ['متعدد الأطراف', 'المطوّرون والملاك والمستثمرون والوسطاء ومزوّدو السيولة في نظام واحد.'],
        ['حضور عالمي', 'منصات مرخّصة تعمل عبر الولايات المتحدة والمملكة المتحدة.'],
        ['مدعوم بأصول', 'أصول حقيقية مُهيكلة في SPV ومؤمّنة عبر HCC.'],
      ],

      newsMarker: 'الأخبار والإعلام',
      newsTitle: ['في ', 'الإعلام.'],
      newsBody: 'تغطية إعلامية لمجموعة كابي ماكس وشركاتها ومنصاتها.',
      newsPending: 'شعارات الصحف وروابط المقالات قيد الإضافة',
      readNews: 'اقرأ الأخبار',

      ctaMarker: 'ابدأ محادثة',
      ctaTitle: ['تملّك حصة من ', 'العقارات.'],
      ctaBody: 'استكشف المجموعة ومنصّاتنا والأصول التي يمكنك تملّكها.',
      contactCta: 'تواصل معنا',
      exploreCta: 'استكشف المنصات',
    },
  }[language]

  // Placeholder press slots for the News & Media ticker (client to supply real logos + links).
  const pressSlots = ['01', '02', '03', '04', '05', '06', '07', '08']

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
                    <div className="font-display font-medium text-sand" style={{ fontSize: 'clamp(1.5rem,3vw,2.6rem)', lineHeight: 1 }}>{st.n}</div>
                    <div className="mono-label text-sand/50 mt-2" style={{ fontSize: '0.6rem' }}>{st.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================= COMPANY MARQUEE */}
      <section className="relative bg-white dark:bg-[#08201d] border-b border-[color:var(--line-mid)] py-14 overflow-hidden">
        <div className="space-y-8">
          <div className="flex">
            <div className="marquee-track flex items-center gap-16 pr-16 w-max shrink-0">
              {[...marqueeCompanies, ...marqueeCompanies].map((id, i) => (
                <span key={`a-${i}`} className="font-display text-2xl lg:text-3xl text-ink/60 dark:text-sand/60 whitespace-nowrap shrink-0">
                  {companyName(id, language)}
                </span>
              ))}
            </div>
          </div>
          <div className="flex">
            <div className="marquee-track flex items-center gap-16 pr-16 w-max shrink-0" style={{ animationDirection: 'reverse' }}>
              {[...[...marqueeCompanies].reverse(), ...[...marqueeCompanies].reverse()].map((id, i) => (
                <span key={`b-${i}`} className="font-display text-2xl lg:text-3xl text-ink/40 dark:text-sand/40 whitespace-nowrap shrink-0">
                  {companyName(id, language)}
                </span>
              ))}
            </div>
          </div>
        </div>
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
              <p className="font-display italic text-2xl text-ink/80 leading-snug">{c.aboutQuote}</p>
            </div>
            <div className="mt-12 relative overflow-hidden aspect-[16/10]">
              <img src={IMAGES.about} alt="" className="w-full h-full object-cover" style={{ filter: 'saturate(0.9) contrast(1.05) brightness(0.92)' }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(0,22,26,0.6) 100%)' }} />
              <span className="absolute bottom-5 left-5 mono-label text-sand/80" style={{ fontSize: '0.6rem' }}>FIG. 01 / FOUNDATION</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ====================================================== WHO WE SERVE */}
      <section className="bg-cream text-ink py-28 lg:py-40">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-12">
          <Reveal className="grid lg:grid-cols-2 gap-10 items-end">
            <div>
              <Marker num="02" label={c.serveMarker} light />
              <h2 className="font-display font-medium leading-[1.02]" style={{ fontSize: 'clamp(2.2rem,4.5vw,4rem)', letterSpacing: '-0.025em' }}>
                {c.serveTitle[0]}<span className="accent-em">{c.serveTitle[1]}</span>
              </h2>
            </div>
            <p className="text-lg text-ink/70 leading-relaxed lg:pb-2">{c.serveBody}</p>
          </Reveal>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-[color:var(--line-dark)]">
            {c.serve.map(([title, desc], i) => (
              <Reveal key={i} delay={(i % 5) * 0.05}>
                <div className="group p-7 border-b border-r border-[color:var(--line-dark)] hover:bg-[rgba(47,173,111,0.06)] transition-colors h-full">
                  <span className="font-display italic text-2xl text-primary">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-lg font-medium leading-snug">{title}</h3>
                  <p className="mt-2 text-sm text-ink/65 leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= THE GROUP */}
      <section className="bg-forest-darker text-sand py-28 lg:py-40">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-12">
          <Reveal className="grid lg:grid-cols-2 gap-10 items-end">
            <div>
              <Marker num="03" label={c.groupMarker} />
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
              const name = companyName(id, language)
              return (
                <Reveal key={id} delay={(i % 3) * 0.05}>
                  <Link
                    to={`/company/${id}`}
                    className="group block p-8 border-b border-r border-[color:var(--line-sand)] hover:bg-[rgba(47,173,111,0.05)] transition-colors h-full relative"
                  >
                    <span className="absolute top-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-500" style={{ transitionTimingFunction: 'var(--ease-out)' }} />
                    <div className="flex items-start justify-between gap-3">
                      <Icon className="w-9 h-9 text-primary" />
                      <span className="mono-label text-sand/35 shrink-0" style={{ fontSize: '0.6rem' }}>/ {String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="mt-6 font-display text-xl font-medium leading-snug group-hover:text-primary transition-colors">{name}</h3>
                    <p className="text-sm text-sand/55 mt-2">{meta.sector}</p>
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

      {/* ============================================ TECHNOLOGY & INNOVATION */}
      <section className="bg-paper text-ink py-28 lg:py-40">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-12">
          <Reveal className="grid lg:grid-cols-2 gap-10 items-end">
            <div>
              <Marker num="04" label={c.techMarker} light />
              <h2 className="font-display font-medium leading-[1.02]" style={{ fontSize: 'clamp(2.2rem,4.5vw,4rem)', letterSpacing: '-0.025em' }}>
                {c.techTitle[0]}<span className="accent-em">{c.techTitle[1]}</span>
              </h2>
            </div>
            <p className="text-lg text-ink/70 leading-relaxed lg:pb-2">{c.techBody}</p>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 border-t border-l border-[color:var(--line-dark)]">
            {c.techCards.map(([name, desc], i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="group flex flex-col h-full p-9 border-b border-r border-[color:var(--line-dark)] hover:bg-[rgba(47,173,111,0.05)] transition-colors">
                  <span className="font-display italic text-3xl text-primary">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-2xl font-medium leading-snug">{name}</h3>
                  <p className="mt-4 text-ink/70 leading-relaxed flex-1">{desc}</p>
                  <Link to="/platforms" className="mt-6 inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all">
                    {c.learnMore} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="mono-label text-ink/45" style={{ fontSize: '0.62rem' }}>{c.techUnify}</span>
            {c.techParties.map((p, i) => (
              <span key={i} className="text-sm px-3 py-1 border border-[color:var(--line-dark)] text-ink/70">{p}</span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ====================================================== METHODOLOGY */}
      <section className="bg-cream text-ink py-28 lg:py-40">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-12">
          <Reveal className="grid lg:grid-cols-[1.5fr_1fr] gap-10 items-end">
            <div>
              <Marker num="05" label={c.methodMarker} light />
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
            <Marker num="06" label={c.ecoMarker} />
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

      {/* ============================================== VERIFIABLE ECOSYSTEM */}
      <section className="bg-cream text-ink py-28 lg:py-40">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-12">
          <Reveal className="grid lg:grid-cols-2 gap-10 items-end">
            <div>
              <Marker num="07" label={c.verifyMarker} light />
              <h2 className="font-display font-medium leading-[1.02]" style={{ fontSize: 'clamp(2.2rem,4.5vw,4rem)', letterSpacing: '-0.025em' }}>
                {c.verifyTitle[0]}<span className="accent-em">{c.verifyTitle[1]}</span>
              </h2>
            </div>
            <p className="text-lg text-ink/70 leading-relaxed lg:pb-2">{c.verifyBody}</p>
          </Reveal>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[color:var(--line-dark)]">
            {c.verify.map(([title, desc], i) => (
              <Reveal key={i} delay={(i % 4) * 0.05}>
                <div className="group p-7 border-b border-r border-[color:var(--line-dark)] hover:bg-[rgba(47,173,111,0.06)] transition-colors h-full">
                  <span className="font-display italic text-2xl text-primary">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-lg font-medium leading-snug">{title}</h3>
                  <p className="mt-2 text-sm text-ink/65 leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================== WYOMING / LEGAL */}
      <section className="bg-forest-deep text-sand py-28 lg:py-40 relative overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-[36rem] h-[36rem]" style={{ background: 'radial-gradient(circle, rgba(47,173,111,0.08), transparent 60%)' }} />
        <div className="relative max-w-[1480px] mx-auto px-6 lg:px-12 grid lg:grid-cols-[1fr_1fr] gap-14 lg:gap-24 items-start">
          <Reveal>
            <Marker num="08" label={c.wyMarker} />
            <h2 className="font-display font-medium leading-[1.02]" style={{ fontSize: 'clamp(2.2rem,4.5vw,4rem)', letterSpacing: '-0.025em' }}>
              {c.wyTitle[0]}<span className="accent-em">{c.wyTitle[1]}</span>
            </h2>
            <p className="mt-7 text-lg text-sand/70 leading-relaxed">{c.wyBody}</p>
          </Reveal>
          <Reveal delay={0.1} className="border-t border-[color:var(--line-sand)]">
            {c.wyPoints.map((point, i) => (
              <div key={i} className="flex items-center gap-5 py-5 border-b border-[color:var(--line-sand)]">
                <span className="font-display italic text-xl text-primary">0{i + 1}</span>
                <span className="font-display text-lg">{point}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* =============================================================== WHY */}
      <section className="bg-forest-darker text-sand py-28 lg:py-40">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-12">
          <Reveal className="grid lg:grid-cols-2 gap-10 items-end">
            <div>
              <Marker num="09" label={c.whyMarker} />
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

      {/* ===================================================== NEWS & MEDIA */}
      <section className="bg-white dark:bg-[#08201d] text-ink dark:text-sand py-20 overflow-hidden border-b border-[color:var(--line-mid)]">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <span className="mono-label text-ink/45 dark:text-sand/45">— {c.newsMarker}</span>
              <h2 className="mt-4 font-display font-medium leading-[1.02]" style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)', letterSpacing: '-0.025em' }}>
                {c.newsTitle[0]}<span className="accent-em">{c.newsTitle[1]}</span>
              </h2>
              <p className="mt-3 text-ink/60 dark:text-sand/60">{c.newsBody}</p>
            </div>
            <Link to="/news" className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all shrink-0">
              {c.readNews} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex">
          <div className="marquee-track flex items-center gap-6 pr-6 w-max shrink-0">
            {[...pressSlots, ...pressSlots].map((slot, i) => (
              <div key={i} className="flex items-center justify-center h-16 w-40 border border-[color:var(--line-mid)] text-ink/30 dark:text-sand/30 shrink-0">
                <span className="mono-label" style={{ fontSize: '0.58rem' }}>{c.newsPending}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================================== CTA */}
      <section className="bg-forest-pitch text-sand py-28 lg:py-40 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-[40rem] h-[40rem]" style={{ background: 'radial-gradient(circle, rgba(47,173,111,0.09), transparent 60%)' }} />
        <div className="relative max-w-[1480px] mx-auto px-6 lg:px-12">
          <Reveal className="max-w-3xl">
            <Marker num="10" label={c.ctaMarker} />
            <h2 className="font-display font-medium leading-[0.98]" style={{ fontSize: 'clamp(2.6rem,7vw,6rem)', letterSpacing: '-0.03em' }}>
              {c.ctaTitle[0]}<span className="accent-em">{c.ctaTitle[1]}</span>
            </h2>
            <p className="mt-7 text-lg text-sand/70 leading-relaxed">{c.ctaBody}</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className={`group ${BTN_SAND}`}>
                {c.contactCta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/platforms" className={BTN_GHOST_LIGHT}>{c.exploreCta}</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

export default Home

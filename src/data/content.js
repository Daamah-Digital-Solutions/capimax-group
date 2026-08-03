// Shared bilingual content for Capimax Group entities.
// V2 identity (client "Final Client Edits/V2"): a Delaware-registered holding
// company for a global real-estate-technology ecosystem — real estate technology,
// fractional ownership, asset tokenization, blockchain, and digital real-estate
// solutions across the USA & UK.
//
// Each entity exposes { en, ar } sub-objects; components read entity[language].
// Centralized because the SAME copy (companies, platforms, currency, Nova) is
// reused across Home, Company detail, platform pages, Sectors, and Ownership.

// ---------------------------------------------------------------------------
// External platform URLs (used to wire "Visit platform" CTAs so links work).
// null => the platform has no public site yet; callers hide the "Visit" CTA.
// ---------------------------------------------------------------------------
export const PLATFORM_URLS = {
  rt: 'https://capimaxrt.tech',
  brx: 'https://www.capimaxbrx.com',
  propShare: 'https://capimaxpropshare.com',
  asset: 'https://panel.capimaxinvestment.com',
}

// ---------------------------------------------------------------------------
// CapiMax Ecosystem — the main digital gateway that unifies all of the group's
// platforms, partnerships, services, news, and updates.
// ---------------------------------------------------------------------------
export const ECOSYSTEM = {
  primaryUrl: 'https://www.capimax.io',
  altUrl: 'https://www.capimax.us',
  screenshot: '/platforms/ecosystem.jpg',
}

// ---------------------------------------------------------------------------
// Companies — keyed by the ids in companies.js / Companies.jsx / CompanyDetail.jsx
// ---------------------------------------------------------------------------
export const companyContent = {
  'capimax-group-holding': {
    en: {
      name: 'Capimax Group Holding',
      tagline: 'A Delaware holding company for a global real-estate-technology ecosystem',
      description:
        'Capimax Group Holding is a holding company registered in the State of Delaware, USA. It owns a group of licensed and registered companies and specialized platforms across the United States and the United Kingdom, focused on real estate technology, fractional ownership, asset tokenization, blockchain, and digital solutions connected to the real estate sector on a global level.',
      role:
        'The holding company sets group strategy, governance, and compliance, and unifies the operational and technical vision across every subsidiary and platform — building one verifiable, global ecosystem.',
      services: ['Group Strategy', 'Governance', 'Ownership Structuring', 'Risk & Compliance', 'Ecosystem Oversight'],
    },
    ar: {
      name: 'كابي ماكس جروب القابضة',
      tagline: 'شركة قابضة في ديلاوير لمنظومة عالمية لتكنولوجيا العقارات',
      description:
        'كابي ماكس جروب القابضة هي شركة قابضة مسجّلة في ولاية ديلاوير بالولايات المتحدة الأمريكية، تمتلك مجموعة من الشركات المسجلة والمرخّصة بالولايات المتحدة والمملكة المتحدة والمنصات المتخصصة في تكنولوجيا العقارات، والملكية الجزئية، وترميز الأصول، والبلوكشين، والحلول الرقمية المرتبطة بالقطاع العقاري على المستوى العالمي.',
      role:
        'تتولى الشركة القابضة وضع استراتيجية المجموعة والحوكمة والامتثال، وتوحيد الرؤية التشغيلية والتقنية عبر جميع الشركات التابعة والمنصات — لبناء منظومة عالمية واحدة قابلة للتحقق.',
      services: ['استراتيجية المجموعة', 'الحوكمة', 'هيكلة الملكية', 'المخاطر والامتثال', 'الإشراف على المنظومة'],
    },
  },
  'real-estate-technologies': {
    en: {
      name: 'Capimax Real Estate Technologies',
      tagline: 'Next-generation technology for global real estate',
      description:
        'Capimax Real Estate Technologies builds the digital infrastructure of the group’s real estate ecosystem — platforms and tools that connect developers, owners, investors, brokers, and liquidity providers within one system.',
      role:
        'It develops the real estate marketplaces and digital property infrastructure that make ownership accessible, transparent, and verifiable across borders.',
      services: ['Real Estate Technology', 'Digital Property Infrastructure', 'Real Estate Marketplaces', 'Multi-party Platforms'],
    },
    ar: {
      name: 'كابي ماكس لتكنولوجيا العقارات',
      tagline: 'جيل جديد من التكنولوجيا العقارية العالمية',
      description:
        'تبني كابي ماكس لتكنولوجيا العقارات البنية الرقمية لمنظومة المجموعة العقارية — منصات وأدوات تربط المطوّرين والملاك والمستثمرين والوسطاء ومزوّدي السيولة داخل نظام واحد.',
      role:
        'تطوّر أسواق العقارات الرقمية والبنية التحتية للملكية الرقمية بما يجعل التملّك متاحًا وشفافًا وقابلًا للتحقق عبر الحدود.',
      services: ['تكنولوجيا العقارات', 'البنية التحتية للملكية الرقمية', 'أسواق العقارات الرقمية', 'المنصات متعددة الأطراف'],
    },
  },
  'asset-structure': {
    en: {
      name: 'Capimax Asset Structure',
      tagline: 'Legal structuring for real-world assets',
      description:
        'Capimax Asset Structure designs the legal and ownership frameworks behind every asset in the ecosystem, placing each project into an independent, verifiable SPV.',
      role:
        'It ensures every digital asset is linked to a documented real-world asset — with a dedicated SPV, clear ownership records, and audit-ready structures.',
      services: ['SPV Structuring', 'Asset-Backed Frameworks', 'Ownership Records', 'Legal Structuring'],
    },
    ar: {
      name: 'كابي ماكس لهيكلة الأصول',
      tagline: 'الهيكلة القانونية للأصول الحقيقية',
      description:
        'تصمّم كابي ماكس لهيكلة الأصول الأطر القانونية وأطر الملكية خلف كل أصل داخل المنظومة، وتضع كل مشروع في شركة SPV مستقلة قابلة للتحقق.',
      role:
        'تضمن أن يكون كل أصل رقمي مرتبطًا بأصل حقيقي موثّق — مع شركة SPV مخصّصة وسجلات ملكية واضحة وهياكل جاهزة للتدقيق.',
      services: ['هيكلة SPV', 'أطر مدعومة بالأصول', 'سجلات الملكية', 'الهيكلة القانونية'],
    },
  },
  'digital-assets': {
    en: {
      name: 'Capimax Digital Assets',
      tagline: 'Asset tokenization on the blockchain',
      description:
        'Capimax Digital Assets tokenizes real-world real estate into secure, transferable digital shares, registered on the blockchain and governed by smart contracts.',
      role:
        'Operating from Wyoming, it anchors the group’s tokenization and digital-asset activity within one of the most advanced legal and regulatory frameworks for digital assets.',
      services: ['Asset Tokenization', 'Digital Asset Management', 'Blockchain Registration', 'Smart-Contract Assets'],
    },
    ar: {
      name: 'كابي ماكس للأصول الرقمية',
      tagline: 'ترميز الأصول عبر البلوكشين',
      description:
        'ترمّز كابي ماكس للأصول الرقمية العقارات الحقيقية إلى حصص رقمية آمنة وقابلة للتحويل، مسجّلة على البلوكشين ومحكومة بالعقود الذكية.',
      role:
        'تعمل من ولاية وايومنغ لترسيخ نشاط الترميز والأصول الرقمية للمجموعة ضمن واحد من أكثر الأطر القانونية والتنظيمية تطوّرًا في مجال الأصول الرقمية.',
      services: ['ترميز الأصول', 'إدارة الأصول الرقمية', 'التسجيل على البلوكشين', 'أصول العقود الذكية'],
    },
  },
  'fractional-ownership': {
    en: {
      name: 'Capimax Fractional Ownership',
      tagline: 'Own a share of real assets, globally',
      description:
        'Capimax Fractional Ownership makes high-value real estate accessible by dividing it into affordable, transferable shares with clear ownership and periodic reporting.',
      role:
        'It runs the group’s two ownership models — a traditional-digital model via Capimax PropShare, and a tokenization model via the digital-asset platforms and blockchain.',
      services: ['Fractional Ownership', 'Ownership Management', 'Investor Onboarding', 'Secondary Transfers'],
    },
    ar: {
      name: 'كابي ماكس للملكية الجزئية',
      tagline: 'تملّك حصة من أصول حقيقية عالميًا',
      description:
        'تجعل كابي ماكس للملكية الجزئية العقارات عالية القيمة متاحة عبر تقسيمها إلى حصص ميسورة وقابلة للتحويل بملكية واضحة وتقارير دورية.',
      role:
        'تدير نموذجَي التملّك في المجموعة — نموذج رقمي تقليدي عبر منصة كابي ماكس بروب شير، ونموذج ترميز عبر منصات الأصول الرقمية والبلوكشين.',
      services: ['الملكية الجزئية', 'إدارة الملكية', 'انضمام المستثمرين', 'التحويلات الثانوية'],
    },
  },
  'property-holding-uk': {
    en: {
      name: 'Capimax Property Holding',
      tagline: 'Holding and structuring UK real estate',
      description:
        'Capimax Property Holding sources, holds, and prepares real estate in the United Kingdom, bringing verified property into the group’s ownership and tokenization pipeline.',
      role:
        'It connects on-the-ground real estate expertise with the group’s digital platforms and SPV structures — the property anchor of the UK operation.',
      services: ['Real Estate Sourcing', 'Asset Onboarding', 'Property Structuring', 'Market Operations'],
    },
    ar: {
      name: 'كابي ماكس القابضة العقارية',
      tagline: 'تملّك وهيكلة العقارات في المملكة المتحدة',
      description:
        'توفّر كابي ماكس القابضة العقارية وتتملّك وتجهّز العقارات في المملكة المتحدة، وتُدخل أصولًا موثّقة إلى مسار التملّك والترميز في المجموعة.',
      role:
        'تربط الخبرة العقارية الميدانية بمنصات المجموعة الرقمية وهياكل الـSPV — الركيزة العقارية لعمليات المملكة المتحدة.',
      services: ['توفير العقارات', 'إدخال الأصول', 'هيكلة العقارات', 'العمليات السوقية'],
    },
  },
  'technologies-uk': {
    en: {
      name: 'Capimax Technologies UK',
      tagline: 'The engineering arm of the ecosystem',
      description:
        'Capimax Technologies UK builds the blockchain infrastructure, smart contracts, and tokenization systems that power the group’s platforms.',
      role:
        'It delivers secure, scalable, and audited technology — from smart-contract development to multi-level verification systems.',
      services: ['Blockchain Infrastructure', 'Smart Contracts', 'Tokenization Systems', 'Security & Audit'],
    },
    ar: {
      name: 'كابي ماكس للتقنيات – المملكة المتحدة',
      tagline: 'الذراع الهندسي للمنظومة',
      description:
        'تبني كابي ماكس للتقنيات البنية التحتية للبلوكشين والعقود الذكية وأنظمة الترميز التي تشغّل منصات المجموعة.',
      role:
        'تقدّم تقنية آمنة وقابلة للتوسّع ومدقّقة — من تطوير العقود الذكية إلى أنظمة التحقق متعددة المستويات.',
      services: ['البنية التحتية للبلوكشين', 'العقود الذكية', 'أنظمة الترميز', 'الأمان والتدقيق'],
    },
  },
  'nova-digital-finance': {
    en: {
      name: 'Nova Digital Finance',
      tagline: 'Digital finance connected to real assets',
      description:
        'Nova Digital Finance provides funding and liquidity solutions connected to the group’s real, tokenized assets across the United States and the United Kingdom.',
      role:
        'It bridges digital finance with real-world ownership, supplying structured liquidity to the ecosystem rather than speculative products.',
      services: ['Digital Financing', 'Liquidity Provision', 'Financial Intermediation', 'Digital Banking'],
    },
    ar: {
      name: 'نوفا للتمويل الرقمي',
      tagline: 'تمويل رقمي مرتبط بأصول حقيقية',
      description:
        'تقدّم نوفا للتمويل الرقمي حلول التمويل والسيولة المرتبطة بأصول المجموعة الحقيقية والمرمّزة عبر الولايات المتحدة والمملكة المتحدة.',
      role:
        'تربط التمويل الرقمي بالملكية الحقيقية، وتوفّر سيولة منظّمة للمنظومة بدلًا من المنتجات المضاربية.',
      services: ['التمويل الرقمي', 'توفير السيولة', 'الوساطة المالية', 'الخدمات المصرفية الرقمية'],
    },
  },
}

// ---------------------------------------------------------------------------
// Platforms (V2): Capimax BRX, Capimax RT, Capimax PropShare, Capimax Asset.
// Nova Digital Finance has its own /nova page (company entry above).
// ---------------------------------------------------------------------------
export const platformContent = [
  {
    id: 'brx',
    externalUrl: PLATFORM_URLS.brx,
    screenshot: '/platforms/brx.jpg',
    en: {
      name: 'Capimax BRX',
      short: 'A blockchain-based real-estate exchange for tokenized, fractional ownership.',
      description:
        'Capimax BRX is a global platform for tokenizing real-estate assets on the blockchain. It enables fractional property investment and connects developers, property owners, investors, brokers, and liquidity providers in one connected marketplace — with multiple mechanisms for investing, trading, and exit across primary and secondary markets.',
    },
    ar: {
      name: 'كابي ماكس BRX',
      short: 'منصة تبادل عقاري قائمة على البلوكشين للملكية الجزئية المرمّزة.',
      description:
        'كابي ماكس BRX منصة عالمية لترميز الأصول العقارية باستخدام تقنية البلوكشين، تتيح الاستثمار الجزئي في العقارات، وتربط بين المطوّرين ومالكي العقارات والمستثمرين والوسطاء ومزوّدي السيولة في سوق واحد مترابط — مع آليات متعددة للاستثمار والتداول والتخارج عبر السوقين الأولي والثانوي.',
    },
  },
  {
    id: 'rt',
    externalUrl: PLATFORM_URLS.rt,
    screenshot: '/platforms/rt.jpg',
    en: {
      name: 'Capimax RT',
      short: 'Real-estate tokenization backed by legally structured, independent SPVs.',
      description:
        'Capimax RT is the group’s dedicated real-estate tokenization platform. It converts real-world properties into transferable digital shares through legally structured, independent SPVs — with transparent reporting, blockchain-secured ownership records, and controlled exit via secondary markets or liquidity providers.',
    },
    ar: {
      name: 'كابي ماكس RT',
      short: 'ترميز العقارات مدعومًا بهياكل SPV قانونية مستقلة.',
      description:
        'كابي ماكس RT منصة المجموعة المتخصصة لترميز العقارات. تحوّل العقارات الحقيقية إلى حصص رقمية قابلة للتحويل عبر هياكل SPV قانونية مستقلة — مع تقارير شفافة وسجلات ملكية مؤمّنة على البلوكشين وتخارج منظّم عبر السوق الثانوي أو مزوّدي السيولة.',
    },
  },
  {
    id: 'propshare',
    externalUrl: PLATFORM_URLS.propShare,
    screenshot: '/platforms/propshare.jpg',
    en: {
      name: 'Capimax PropShare',
      short: 'Digital fractional real-estate ownership — structured and managed, without blockchain.',
      description:
        'Capimax PropShare is the group’s digital fractional real-estate platform, operating without blockchain. Investors participate in carefully selected properties through structured ownership, centralized management, and periodic performance reporting — with an integrated secondary market for exit. Built for stability and long-term value.',
    },
    ar: {
      name: 'كابي ماكس بروب شير',
      short: 'ملكية عقارية جزئية رقمية — منظّمة ومُدارة، بدون بلوكشين.',
      description:
        'كابي ماكس بروب شير منصة المجموعة للملكية العقارية الجزئية الرقمية، تعمل بدون بلوكشين. يشارك المستثمرون في عقارات مختارة بعناية عبر ملكية منظّمة وإدارة مركزية وتقارير أداء دورية — مع سوق ثانوي متكامل للتخارج. مبنية على الاستقرار والقيمة طويلة الأجل.',
    },
  },
  {
    id: 'asset',
    externalUrl: PLATFORM_URLS.asset,
    screenshot: '/platforms/asset.jpg',
    en: {
      name: 'Capimax Asset',
      short: 'Structured investor access to real, asset-backed, tokenized opportunities.',
      description:
        'Capimax Asset gives investors structured access to the group’s real, asset-backed opportunities — each linked to a documented property and an independent SPV, within one compliant operational framework that unifies onboarding, ownership, and reporting.',
    },
    ar: {
      name: 'كابي ماكس أسِت',
      short: 'وصول منظّم للمستثمرين إلى فرص حقيقية مدعومة بالأصول ومرمّزة.',
      description:
        'تمنح كابي ماكس أسِت المستثمرين وصولًا منظّمًا إلى فرص المجموعة الحقيقية المدعومة بالأصول — كل منها مرتبط بعقار موثّق وشركة SPV مستقلة، ضمن إطار تشغيلي متوافق يوحّد الانضمام والملكية والتقارير.',
    },
  },
]

// ---------------------------------------------------------------------------
// Digital currency — Pronova (the group contributes to the Pronova project)
// ---------------------------------------------------------------------------
export const currencyContent = {
  id: 'pronova',
  externalUrl: null,
  en: {
    name: 'Pronova',
    short: 'A utility currency within the Capimax ecosystem.',
    description:
      'Pronova is a utility-focused digital currency. Capimax Group contributes to the Pronova Cryptocurrency project as part of its digital-asset ecosystem — Pronova is designed for operational use cases such as payments, fee reductions, and internal settlement across the group’s licensed platforms, rather than speculative trading.',
    highlights: [
      'Capimax Group is a contributor to the Pronova Cryptocurrency project',
      'Utility tied to real investment activity across licensed platforms',
      'Designed for payments, fee reductions, and internal settlement',
      'Connected to the group’s tokenized, asset-backed ecosystem',
    ],
  },
  ar: {
    name: 'Pronova',
    short: 'عملة خدمية داخل منظومة كابي ماكس.',
    description:
      'Pronova عملة رقمية خدمية. تساهم مجموعة كابي ماكس في مشروع عملة Pronova كجزء من منظومتها للأصول الرقمية — وهي مصمّمة لحالات استخدام تشغيلية مثل الدفع وتخفيض الرسوم والتسوية الداخلية عبر منصات المجموعة المرخّصة، وليست أداة مضاربة.',
    highlights: [
      'مجموعة كابي ماكس مساهِمة في مشروع عملة Pronova',
      'فائدة مرتبطة بنشاط استثماري حقيقي عبر منصات مرخّصة',
      'مصمّمة للدفع وتخفيض الرسوم والتسوية الداخلية',
      'مرتبطة بمنظومة المجموعة المرمّزة والمدعومة بالأصول',
    ],
  },
}

// ---------------------------------------------------------------------------
// Digital finance — Nova (page-level content reuses the company entry)
// ---------------------------------------------------------------------------
export const novaContent = companyContent['nova-digital-finance']

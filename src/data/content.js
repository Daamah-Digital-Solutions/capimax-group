// Shared bilingual content for Capimax Group entities.
// Source: client "Final Client Edits" content document (file 1).
// Each entity exposes { en, ar } sub-objects; components read entity[language].
//
// NOTE on convention: the project normally keeps UI strings inline per component.
// This module is intentionally centralized because the SAME entity copy (companies,
// platforms, currency, Nova) is reused across the Home page, Company detail pages,
// dedicated platform pages, the Sectors page, and the Investors page. Keeping a
// single source of truth avoids the copy drifting between pages.

// ---------------------------------------------------------------------------
// Real external platform URLs (used to wire "Visit platform" CTAs so links work).
// ---------------------------------------------------------------------------
export const PLATFORM_URLS = {
  realEstateTokenization: 'https://capimaxrt.com',
  tokenizationStore: 'https://capimaxtokenization.store',
  propShare: 'https://capimaxpropshare.shop',
  investmentsPlatform: 'https://capimaxinvestment.com',
}

// ---------------------------------------------------------------------------
// Companies — keyed by the ids already used in Companies.jsx / CompanyDetail.jsx
// ---------------------------------------------------------------------------
export const companyContent = {
  'capimax-holding': {
    en: {
      name: 'Capimax Holding',
      tagline: 'The parent company of the Capimax ecosystem',
      description:
        'Capimax Holding is the parent company of an integrated group of investment, financial, and technology-focused entities operating across multiple jurisdictions, including the United Kingdom, the United States, and the United Arab Emirates.',
      role: 'The holding company is responsible for group strategy, governance, asset structuring, capital allocation, and risk management, ensuring sustainable growth, operational alignment, and regulatory compliance across all subsidiaries and platforms.',
      services: ['Group Strategy', 'Governance', 'Asset Structuring', 'Capital Allocation', 'Risk Management'],
    },
    ar: {
      name: 'كابي ماكس القابضة',
      tagline: 'الكيان الأم لمنظومة كابي ماكس',
      description:
        'كابي ماكس القابضة هي الكيان الأم لمجموعة متكاملة من الشركات والمنصات الاستثمارية والمالية والتقنية، تعمل عبر عدة ولايات قضائية وتشمل المملكة المتحدة، الولايات المتحدة، والإمارات العربية المتحدة.',
      role: 'تتولى الشركة وضع الاستراتيجية العامة، الحوكمة، إدارة الأصول، وهيكلة الاستثمارات، وتوحيد الرؤية التشغيلية والتقنية لجميع الشركات التابعة، بما يضمن النمو المستدام، وإدارة المخاطر، والامتثال التنظيمي.',
      services: ['الاستراتيجية العامة', 'الحوكمة', 'هيكلة الأصول', 'تخصيص رأس المال', 'إدارة المخاطر'],
    },
  },
  'capimax-investments-uk': {
    en: {
      name: 'Capimax Investments UK',
      tagline: 'Professional investment management in the UK market',
      description:
        'Capimax Investments UK is a professional investment company focused on identifying, structuring, and managing investment opportunities within the UK market.',
      role: 'The company specializes in real estate, private investments, and income-generating projects, utilizing structured investment vehicles such as SPVs and partnership models, while adhering to UK legal and regulatory frameworks.',
      services: ['Real Estate', 'Private Investments', 'Income-generating Projects', 'SPV Structuring', 'Partnership Models'],
    },
    ar: {
      name: 'كابي ماكس للاستثمارات – المملكة المتحدة',
      tagline: 'إدارة استثمارية احترافية في السوق البريطاني',
      description:
        'شركة استثمارية متخصصة في إدارة الفرص الاستثمارية داخل السوق البريطاني، مع تركيز على العقارات، الشركات الناشئة، والمشاريع ذات التدفقات النقدية المستقرة.',
      role: 'تعمل الشركة وفق نماذج استثمار احترافية تشمل الملكية الجزئية، الشراكات الاستثمارية، وهياكل الـSPV، مع الالتزام بالمعايير القانونية والتنظيمية في المملكة المتحدة.',
      services: ['العقارات', 'الاستثمارات الخاصة', 'المشاريع المدرة للدخل', 'هياكل الـSPV', 'الشراكات الاستثمارية'],
    },
  },
  'capimax-investments-usa': {
    en: {
      name: 'Capimax Investments USA',
      tagline: 'Flexible investment structuring under U.S. jurisdictions',
      description:
        'Capimax Investments USA operates as an investment entity structured under U.S. jurisdictions, focusing on private investments, real estate projects, and high-growth opportunities.',
      role: 'The company provides flexible investment structuring through SPVs and private placement models, serving international investors while maintaining compliance with applicable U.S. regulations.',
      services: ['Private Investments', 'Real Estate Projects', 'High-growth Opportunities', 'SPV Structuring', 'Private Placement'],
    },
    ar: {
      name: 'كابي ماكس للاستثمارات – الولايات المتحدة',
      tagline: 'هيكلة استثمارية مرنة وفق الأطر الأمريكية',
      description:
        'كيان استثماري أمريكي يركز على هيكلة وإدارة الاستثمارات وفق نماذج قانونية مرنة، تشمل الـSPV، والاستثمار الخاص، والمشاريع عالية النمو.',
      role: 'تخدم الشركة المستثمرين الدوليين وتدير فرصًا استثمارية في العقارات، التكنولوجيا، والأصول البديلة، مع الالتزام بأطر الامتثال المعتمدة.',
      services: ['الاستثمار الخاص', 'المشاريع العقارية', 'الفرص عالية النمو', 'هياكل الـSPV', 'الطرح الخاص'],
    },
  },
  'capimax-investments-uae': {
    en: {
      name: 'Capimax Investments UAE',
      tagline: 'Diversified investment across the UAE and the wider region',
      description:
        'Capimax Investments UAE manages diversified investment opportunities across the Emirates, spanning agricultural, real estate, and technology investments, serving regional and international investors.',
      role: 'Operating from Abu Dhabi, the company anchors the group’s presence in the GCC, structuring and managing investments within UAE regulatory frameworks.',
      services: ['Agricultural Investment', 'Real Estate Investment', 'Technology Investment', 'Regional Structuring'],
    },
    ar: {
      name: 'كابي ماكس للاستثمارات – الإمارات',
      tagline: 'استثمار متنوع في الإمارات والمنطقة',
      description:
        'تدير كابي ماكس للاستثمارات في الإمارات فرصًا استثمارية متنوعة تشمل الاستثمار الزراعي والعقاري والتقني، وتخدم المستثمرين الإقليميين والدوليين.',
      role: 'تعمل الشركة من أبوظبي لترسيخ حضور المجموعة في دول الخليج، مع هيكلة وإدارة الاستثمارات وفق الأطر التنظيمية الإماراتية.',
      services: ['الاستثمار الزراعي', 'الاستثمار العقاري', 'الاستثمار التقني', 'الهيكلة الإقليمية'],
    },
  },
  'capimax-virtual-assets': {
    en: {
      name: 'Capimax Virtual Assets UK',
      tagline: 'Real-world utility for virtual assets',
      description:
        'Capimax Virtual Assets UK is dedicated to the management, integration, and operational use of virtual assets and digital currencies within a real investment ecosystem.',
      role: 'The company focuses on digital asset utilization, crypto-based payment solutions, and secure integration of virtual assets into investment platforms rather than speculative trading activities.',
      services: ['Digital Asset Management', 'Crypto Payment Solutions', 'Platform Integration', 'Digital Settlement'],
    },
    ar: {
      name: 'كابي ماكس للأصول الافتراضية – المملكة المتحدة',
      tagline: 'استخدام عملي حقيقي للأصول الافتراضية',
      description:
        'شركة متخصصة في الأصول الافتراضية والعملات الرقمية، تعمل على تطوير نماذج استخدام عملية للأصول المشفرة داخل منظومة استثمارية حقيقية.',
      role: 'تشمل أنشطتها إدارة الأصول الرقمية، تكامل العملات المشفرة مع المنصات الاستثمارية، وتطوير حلول دفع وتسوية رقمية.',
      services: ['إدارة الأصول الرقمية', 'حلول الدفع المشفّر', 'تكامل المنصات', 'التسوية الرقمية'],
    },
  },
  'capimax-fintech-blockchain': {
    en: {
      name: 'Capimax Blockchain & FinTech UK',
      tagline: 'The technology arm of the group',
      description:
        'Capimax Blockchain & FinTech is the group’s technology arm, specializing in blockchain infrastructure, smart contracts, asset tokenization systems, and financial technology solutions.',
      role: 'The company develops secure, scalable, and compliant systems that support digital investments, tokenized assets, and financial integrations across the Capimax ecosystem.',
      services: ['Blockchain Infrastructure', 'Smart Contracts', 'Tokenization Systems', 'Digital Wallets', 'FinTech Solutions'],
    },
    ar: {
      name: 'كابي ماكس للبلوكشين والتقنيات المالية',
      tagline: 'الذراع التقني للمجموعة',
      description:
        'ذراع تقني متخصص في تطوير حلول البلوكشين والتقنيات المالية، يشمل العقود الذكية، أنظمة الترميز، المحافظ الرقمية، والبنية التحتية للتكامل المالي.',
      role: 'تقدم الشركة حلولًا تقنية موجهة للأسواق الاستثمارية والتنظيمية، مع تركيز على الأمان، القابلية للتوسع، والامتثال.',
      services: ['البنية التحتية للبلوكشين', 'العقود الذكية', 'أنظمة الترميز', 'المحافظ الرقمية', 'حلول التقنية المالية'],
    },
  },
  'capimax-financial-management': {
    en: {
      name: 'Capimax Financial Management',
      tagline: 'Financial planning, reporting, and investment analysis',
      description:
        'Capimax Financial Management provides professional financial planning, reporting, and investment analysis services.',
      role: 'Its core activities include financial modeling, cash flow management, performance reporting, and risk assessment, supporting informed decision-making for both the group and its investors.',
      services: ['Financial Modeling', 'Cash Flow Management', 'Performance Reporting', 'Risk Assessment'],
    },
    ar: {
      name: 'كابي ماكس للإدارة المالية',
      tagline: 'التخطيط المالي والتقارير وتحليل الاستثمار',
      description:
        'شركة متخصصة في الإدارة المالية، التخطيط المالي، إعداد النماذج الاستثمارية، وتحليل المخاطر.',
      role: 'تخدم الشركات التابعة والمستثمرين من خلال إعداد التقارير، إدارة التدفقات النقدية، ودعم اتخاذ القرار الاستثماري المبني على البيانات.',
      services: ['النمذجة المالية', 'إدارة التدفقات النقدية', 'تقارير الأداء', 'تقييم المخاطر'],
    },
  },
  'capimax-precious-metals': {
    en: {
      name: 'Capimax FPR – Investment in Precious Metals',
      tagline: 'Tangible assets for value preservation',
      description:
        'Capimax FPR specializes in investments in precious metals such as gold and silver, offering structured exposure to tangible assets as a hedge against market volatility.',
      role: 'The company operates under transparent valuation and management frameworks, positioning precious metals as long-term value preservation instruments.',
      services: ['Gold Investment', 'Silver Investment', 'Physical Ownership', 'Transparent Valuation'],
    },
    ar: {
      name: 'كابي ماكس للاستثمار في المعادن الثمينة',
      tagline: 'أصول ملموسة لحفظ القيمة',
      description:
        'كيان استثماري يركز على الذهب، الفضة، والمعادن الثمينة كأصول تحوط وحفظ قيمة.',
      role: 'تعتمد الشركة نماذج استثمار منظمة تجمع بين التملك الفعلي، الإدارة الاحترافية، والشفافية في التسعير والعوائد.',
      services: ['الاستثمار في الذهب', 'الاستثمار في الفضة', 'التملك الفعلي', 'التقييم الشفّاف'],
    },
  },
  'capimax-general-trading-usa': {
    en: {
      name: 'Capimax General Trading',
      tagline: 'Diversifying revenue across commercial sectors',
      description:
        'Capimax General Trading operates across multiple commercial sectors, facilitating the trade of goods, materials, and services that support the group’s broader investment activities.',
      role: 'The company contributes to diversification of revenue streams and operational support within the Capimax Group.',
      services: ['Goods Trading', 'Materials Supply', 'Commercial Services', 'Import / Export'],
    },
    ar: {
      name: 'كابي ماكس للتجارة العامة',
      tagline: 'تنويع مصادر الدخل عبر قطاعات متعددة',
      description:
        'شركة تجارة عامة تعمل في قطاعات متعددة تشمل السلع، المواد، والخدمات التجارية، مع دعم الأنشطة الاستثمارية للمجموعة.',
      role: 'تسهم في تنويع مصادر الدخل وتعزيز التكامل التشغيلي داخل المجموعة.',
      services: ['تجارة السلع', 'توريد المواد', 'الخدمات التجارية', 'الاستيراد والتصدير'],
    },
  },
  'capimax-development-llp': {
    en: {
      name: 'Capimax Development',
      tagline: 'The real estate development arm of the group',
      description:
        'Capimax Development is the real estate development arm of the group, responsible for project development, construction oversight, and asset preparation.',
      role: 'The company transforms real estate opportunities into structured, investment-ready assets suitable for direct investment or tokenization.',
      services: ['Project Development', 'Construction Oversight', 'Asset Preparation', 'Property Management'],
    },
    ar: {
      name: 'كابي ماكس للتطوير',
      tagline: 'ذراع التطوير العقاري للمجموعة',
      description:
        'ذراع التطوير العقاري للمجموعة، مسؤولة عن تطوير المشاريع، إدارة البناء، والإشراف على الأصول العقارية قبل طرحها للاستثمار أو الترميز.',
      role: 'تعمل الشركة على تحويل الفرص العقارية إلى أصول استثمارية منظمة وجاهزة للاستثمار المباشر أو الترميز.',
      services: ['تطوير المشاريع', 'الإشراف على البناء', 'تجهيز الأصول', 'إدارة العقارات'],
    },
  },
  'hcc-international': {
    en: {
      name: 'HCC International',
      tagline: 'Insurance and risk protection for the ecosystem',
      description:
        'HCC International provides insurance and risk-protection services across the Capimax ecosystem, including life, non-life, and reinsurance lines.',
      role: 'The company underpins the group with cyber-insurance and risk coverage that protect investors, platforms, and digital assets.',
      services: ['Life Insurance', 'Non-life Insurance', 'Reinsurance', 'Cyber Insurance'],
    },
    ar: {
      name: 'إتش سي سي إنترناشيونال',
      tagline: 'التأمين وحماية المخاطر للمنظومة',
      description:
        'تقدم إتش سي سي إنترناشيونال خدمات التأمين وحماية المخاطر عبر منظومة كابي ماكس، وتشمل التأمين على الحياة والتأمين العام وإعادة التأمين.',
      role: 'تدعم الشركة المجموعة بتغطية تأمينية وتأمين سيبراني يحمي المستثمرين والمنصات والأصول الرقمية.',
      services: ['التأمين على الحياة', 'التأمين العام', 'إعادة التأمين', 'التأمين السيبراني'],
    },
  },
  'cim-financial-group': {
    en: {
      name: 'CIM Financial Group',
      tagline: 'Financial services and advisory',
      description:
        'CIM Financial Group delivers financial services, risk evaluation, and accounting and auditing support across the group.',
      role: 'The company strengthens financial governance and advisory functions within the Capimax ecosystem.',
      services: ['Financial Services', 'Risk Evaluation', 'Accounting & Auditing', 'Advisory'],
    },
    ar: {
      name: 'مجموعة سي آي إم المالية',
      tagline: 'الخدمات المالية والاستشارات',
      description:
        'تقدم مجموعة سي آي إم المالية خدمات مالية وتقييم المخاطر ودعم المحاسبة والتدقيق عبر المجموعة.',
      role: 'تعزز الشركة الحوكمة المالية والوظائف الاستشارية داخل منظومة كابي ماكس.',
      services: ['الخدمات المالية', 'تقييم المخاطر', 'المحاسبة والتدقيق', 'الاستشارات'],
    },
  },
  'nova-digital-finance': {
    en: {
      name: 'Nova Digital Finance',
      tagline: 'Digital finance connected to real investments',
      description:
        'Nova Digital Finance is a digital finance platform offering innovative funding solutions connected to digital assets and cryptocurrencies.',
      role: 'The platform bridges digital finance with real-world investment applications, providing structured financing tools that support sustainable investment activities within the Capimax ecosystem.',
      services: ['Digital Financing', 'Credit Granting', 'Financial Intermediation', 'Digital Banking'],
    },
    ar: {
      name: 'نوفا للتمويل الرقمي',
      tagline: 'تمويل رقمي مرتبط باستثمارات حقيقية',
      description:
        'منصة تمويل رقمي تقدم حلول تمويل مبتكرة مرتبطة بالأصول الرقمية والعملات المشفرة، مع التركيز على الاستخدام الاستثماري العملي بدلاً من المضاربة.',
      role: 'تعمل كنقطة ربط بين التمويل الرقمي ومنصات الاستثمار التابعة للمجموعة، وتوفر أدوات تمويل منظمة تدعم الأنشطة الاستثمارية المستدامة.',
      services: ['التمويل الرقمي', 'منح الائتمان', 'الوساطة المالية', 'الخدمات المصرفية الرقمية'],
    },
  },
}

// ---------------------------------------------------------------------------
// Platforms
// ---------------------------------------------------------------------------
export const platformContent = [
  {
    id: 'real-estate-tokenization',
    externalUrl: PLATFORM_URLS.realEstateTokenization,
    en: {
      name: 'Capimax Real Estate Tokenization',
      short: 'Tokenize real estate via legally structured SPVs.',
      description:
        'Capimax Real Estate Tokenization is a specialized platform enabling the tokenization of real estate assets through legally structured SPVs. The platform allows fractional ownership, transparent reporting, and controlled exit mechanisms via secondary markets or liquidity providers, leveraging blockchain technology for efficiency and traceability.',
    },
    ar: {
      name: 'منصة كابي ماكس لترميز العقارات',
      short: 'ترميز الأصول العقارية عبر هياكل SPV قانونية.',
      description:
        'منصة متخصصة في ترميز الأصول العقارية عبر نماذج قانونية قائمة على الـSPV، تتيح للمستثمرين التملك الجزئي والتداول المنظم من خلال السوق الثانوي أو مزودي السيولة. تعتمد المنصة على البلوكشين لتعزيز الشفافية، التوثيق، وكفاءة العمليات.',
    },
  },
  {
    id: 'propshare',
    externalUrl: PLATFORM_URLS.propShare,
    en: {
      name: 'Capimax PropShare',
      short: 'Digital fractional real estate (non-blockchain).',
      description:
        'Capimax PropShare is a digital fractional real estate investment platform that operates without blockchain technology. It enables investors to participate in carefully selected properties through structured ownership models, centralized management, and periodic performance reporting, focusing on stability and long-term value.',
    },
    ar: {
      name: 'كابي ماكس بروب شير',
      short: 'استثمار عقاري جزئي رقمي (بدون بلوكشين).',
      description:
        'منصة استثمار عقاري جزئي رقمية (غير قائمة على البلوكشين)، تتيح للمستثمرين المشاركة في عقارات مختارة عبر نموذج ملكية واضح، تقارير دورية، وإدارة مركزية. تركز على سهولة الاستخدام، الامتثال، والاستثمار طويل الأجل.',
    },
  },
  {
    id: 'capimax-one',
    externalUrl: PLATFORM_URLS.investmentsPlatform,
    en: {
      name: 'Capimax One',
      short: 'The unified gateway to the Capimax ecosystem.',
      description:
        'Capimax One is an integrated digital gateway that unifies the group’s investment platforms and services within a single interface. It provides investors with portfolio management tools, reporting, access to opportunities, and account control across the Capimax ecosystem.',
    },
    ar: {
      name: 'كابي ماكس ون',
      short: 'البوابة الموحدة لمنظومة كابي ماكس.',
      description:
        'منصة موحدة تجمع مختلف خدمات واستثمارات كابي ماكس في واجهة واحدة، تشمل المحافظ، التقارير، الفرص الاستثمارية، وإدارة الحسابات. تمثل نقطة الدخول الرئيسية لمنظومة كابي ماكس الرقمية.',
    },
  },
  {
    id: 'investments-platform',
    externalUrl: PLATFORM_URLS.investmentsPlatform,
    en: {
      name: 'Capimax Investments Platform',
      short: 'Multi-asset access in one operational framework.',
      description:
        'Capimax Investments Platform provides access to a diversified range of investment opportunities, including real estate, precious metals, private projects, and digital assets, within a unified operational and regulatory framework.',
    },
    ar: {
      name: 'منصة كابي ماكس للاستثمارات',
      short: 'وصول متعدد الأصول ضمن إطار واحد.',
      description:
        'منصة استثمار متعددة الأصول تتيح الوصول إلى العقارات، المعادن، المشاريع، والأصول الرقمية، ضمن إطار تشغيلي وتنظيمي موحد.',
    },
  },
]

// ---------------------------------------------------------------------------
// Digital currency — Pronova
// ---------------------------------------------------------------------------
export const currencyContent = {
  id: 'pronova',
  externalUrl: 'https://capimaxinvestment.com',
  en: {
    name: 'Pronova Crypto',
    short: 'A utility currency powering the Capimax ecosystem.',
    description:
      'Pronova is a utility-focused digital currency developed to support the Capimax ecosystem. It is designed for operational use cases such as payments, fee reductions, internal settlements, and investment facilitation across platforms, rather than speculative trading.',
    highlights: [
      'Accepted as a payment method across licensed Capimax platforms',
      'Asset-backed utility tied to real investment activity',
      'Designed for payments, fee reductions, and internal settlement',
      'Safe exit through conversion into income-generating assets',
    ],
  },
  ar: {
    name: 'عملة Pronova الرقمية',
    short: 'عملة خدمية تشغّل منظومة كابي ماكس.',
    description:
      'عملة رقمية خدمية تم تطويرها لدعم منظومة كابي ماكس، وتُستخدم في الدفع، التخفيضات، تسوية الرسوم، وتعزيز كفاءة الاستثمار داخل المنصات. تمثل أداة تشغيلية مرتبطة بأنشطة استثمار حقيقية أكثر من كونها أداة مضاربة.',
    highlights: [
      'معتمدة كوسيلة دفع عبر منصات كابي ماكس المرخصة',
      'فائدة مدعومة بأصول ومرتبطة بنشاط استثماري حقيقي',
      'مصممة للدفع وتخفيض الرسوم والتسوية الداخلية',
      'تخارج آمن عبر التحويل إلى أصول مدرة للدخل',
    ],
  },
}

// ---------------------------------------------------------------------------
// Digital finance — Nova (page-level content reuses the company entry)
// ---------------------------------------------------------------------------
export const novaContent = companyContent['nova-digital-finance']

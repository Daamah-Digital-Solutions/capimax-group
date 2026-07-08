import { ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHero, Band, Marker, Heading, Eyebrow, Reveal, BTN } from '@/components/editorial'

const About = ({ language }) => {
  const isAr = language === 'ar'
  const translations = {
    en: {
      pageEyebrow: 'About the Group · USA · UK',
      pageTitle: 'Built on governance, ',
      pageAccent: 'led by ownership.',
      pageSubtitle: 'A holding company building the infrastructure of real-estate technology, fractional ownership, and asset tokenization — with verifiable ownership at its core, globally.',
      ourStory: 'Our Story',
      storyLead: 'The infrastructure of ',
      storyAccent: 'verifiable ownership.',
      storyText: 'Capimax Group Holding is a holding company registered in the State of Delaware, USA, owning licensed and registered companies and specialized platforms across the USA and UK, focused on real estate technology, fractional ownership, asset tokenization, blockchain, and digital solutions connected to the real estate sector globally. Its ecosystem serves developers, property owners, investors, brokers, and liquidity providers through licensed platforms and digital-finance infrastructure.',
      storyMeta: [
        ['Registered', 'Delaware, USA'],
        ['Group Companies', '8'],
        ['Jurisdictions', 'USA · UK'],
        ['Backing', 'SPV per asset'],
      ],
      visionMission: 'Vision & Mission',
      vmLead: 'Direction with ',
      vmAccent: 'discipline.',
      vision: 'Our Vision',
      visionText: 'To lead the future of real-estate technology and asset tokenization — making ownership fractional, verifiable, and globally accessible by connecting traditional real-estate value with blockchain and digital-asset infrastructure.',
      mission: 'Our Mission',
      missionText: 'To operate a governed ecosystem of licensed platforms that lets developers, property owners, investors, brokers, and liquidity providers transact real-estate value transparently — with every asset structured, documented, and independently backed.',
      values: 'Our Values',
      valuesLead: 'The principles that ',
      valuesAccent: 'guide us.',
      valuesSubtitle: 'The principles that guide everything we do.',
      innovation: 'Innovation',
      innovationDesc: 'We build real-estate technology that turns illiquid assets into fractional, transferable, and verifiable ownership.',
      security: 'Security',
      securityDesc: 'Every asset is structured and independently backed by its own SPV, protecting the rights of each owner.',
      transparency: 'Transparency',
      transparencyDesc: 'Ownership, documentation, and asset records are verifiable on-chain and off-chain across our platforms.',
      integrity: 'Integrity',
      integrityDesc: 'We operate through licensed, registered companies under the highest governance and compliance standards.',
      excellence: 'Excellence',
      excellenceDesc: 'We hold every platform in the ecosystem to a consistent standard of engineering and service.',
      globalPresence: 'Global Presence',
      globalLead: 'Operating ',
      globalAccent: 'across borders.',
      globalSubtitle: 'Licensed and registered across the USA and UK, serving the real-estate sector globally.',
      uk: 'United Kingdom',
      ukDesc: 'Licensed and registered companies and platforms serving the European and global real-estate market.',
      ukStatus: 'Registered',
      usa: 'United States',
      usaDesc: 'Group holding company registered in the State of Delaware, with licensed companies and platforms.',
      usaStatus: 'Headquarters',
      global: 'Global Reach',
      globalDesc: 'Platforms and digital-asset infrastructure serving developers, owners, and investors worldwide.',
      globalStatus: 'Ecosystem',
      keyStats: 'Key Facts',
      statsLead: 'The structure behind the ',
      statsAccent: 'group.',
      companies: 'Group Companies',
      companiesDesc: 'Licensed and registered companies and specialized platforms.',
      sectors: 'Jurisdictions',
      sectorsDesc: 'Registered and operating across the USA and United Kingdom.',
      countries: 'Focus Areas',
      countriesDesc: 'Real-estate tech, fractional ownership, tokenization, and digital assets.',
      investors: 'Asset Backing',
      investorsDesc: 'Every asset is structured and backed by an independent SPV.',
      timeline: 'The Ecosystem',
      timelineLead: 'How the group ',
      timelineAccent: 'connects.',
      timelineSubtitle: 'Licensed platforms and infrastructure across the ecosystem.',
      founded: 'Platforms',
      foundedDesc: 'Capimax BRX, RT, PropShare, and Asset — licensed platforms for fractional and tokenized real estate.',
      expansion: 'Digital Finance',
      expansionDesc: 'Nova Digital Finance provides the digital-finance rails connecting assets, owners, and liquidity.',
      platform: 'Utility Currency',
      platformDesc: 'Pronova serves as the utility currency powering transactions across the ecosystem.',
      future: 'Global Reach',
      futureDesc: 'Serving developers, property owners, investors, brokers, and liquidity providers worldwide.',
      ctaMarker: 'Begin a conversation',
      joinUsLead: 'Ready to build ownership with ',
      joinUsAccent: 'us?',
      joinUsDesc: 'Partner with a governed ecosystem redefining how real-estate value is owned, tokenized, and verified.',
      getStarted: 'Get Started',
      learnMore: 'Explore the Ecosystem',
    },
    ar: {
      pageEyebrow: 'عن المجموعة · الولايات المتحدة · المملكة المتحدة',
      pageTitle: 'مبنية على الحوكمة، ',
      pageAccent: 'يقودها التملّك.',
      pageSubtitle: 'شركة قابضة تبني بنية تقنية العقارات والملكية الجزئية وترميز الأصول — بملكية قابلة للتحقق في صميمها، عالميًا.',
      ourStory: 'قصتنا',
      storyLead: 'بنية ',
      storyAccent: 'الملكية القابلة للتحقق.',
      storyText: 'مجموعة كابيماكس القابضة هي شركة قابضة مسجّلة في ولاية ديلاوير بالولايات المتحدة، تمتلك شركات ومنصات متخصصة مرخّصة ومسجّلة في الولايات المتحدة والمملكة المتحدة، متخصصة في تقنية العقارات والملكية الجزئية وترميز الأصول والبلوك تشين والحلول الرقمية المرتبطة بقطاع العقارات عالميًا. تخدم منظومتها المطوّرين ومالكي العقارات والمستثمرين والوسطاء ومزوّدي السيولة عبر منصات مرخّصة وبنية تمويل رقمي.',
      storyMeta: [
        ['التسجيل', 'ديلاوير، الولايات المتحدة'],
        ['شركات المجموعة', '8'],
        ['نطاقات العمل', 'الولايات المتحدة · المملكة المتحدة'],
        ['الضمان', 'كيان مستقل لكل أصل'],
      ],
      visionMission: 'الرؤية والمهمة',
      vmLead: 'اتجاهٌ مع ',
      vmAccent: 'انضباط.',
      vision: 'رؤيتنا',
      visionText: 'أن نقود مستقبل تقنية العقارات وترميز الأصول — بجعل الملكية جزئية وقابلة للتحقق ومتاحة عالميًا، من خلال ربط قيمة العقارات التقليدية ببنية البلوك تشين والأصول الرقمية.',
      mission: 'مهمتنا',
      missionText: 'تشغيل منظومة محوكمة من المنصات المرخّصة تتيح للمطوّرين ومالكي العقارات والمستثمرين والوسطاء ومزوّدي السيولة تداول قيمة العقارات بشفافية — مع هيكلة كل أصل وتوثيقه وضمانه بشكل مستقل.',
      values: 'قيمنا',
      valuesLead: 'المبادئ التي ',
      valuesAccent: 'توجّهنا.',
      valuesSubtitle: 'المبادئ التي توجه كل ما نقوم به.',
      innovation: 'الابتكار',
      innovationDesc: 'نبني تقنية عقارية تحوّل الأصول غير السائلة إلى ملكية جزئية قابلة للنقل والتحقق.',
      security: 'الأمان',
      securityDesc: 'كل أصل مُهيكل ومضمون بشكل مستقل عبر كيان خاص به، بما يحمي حقوق كل مالك.',
      transparency: 'الشفافية',
      transparencyDesc: 'الملكية والتوثيق وسجلات الأصول قابلة للتحقق داخل السلسلة وخارجها عبر منصاتنا.',
      integrity: 'النزاهة',
      integrityDesc: 'نعمل من خلال شركات مرخّصة ومسجّلة وفق أعلى معايير الحوكمة والامتثال.',
      excellence: 'التميز',
      excellenceDesc: 'نلتزم بمعيار موحّد من الهندسة والخدمة لكل منصة في المنظومة.',
      globalPresence: 'الحضور العالمي',
      globalLead: 'نعمل ',
      globalAccent: 'عبر الحدود.',
      globalSubtitle: 'مرخّصون ومسجّلون في الولايات المتحدة والمملكة المتحدة، ونخدم قطاع العقارات عالميًا.',
      uk: 'المملكة المتحدة',
      ukDesc: 'شركات ومنصات مرخّصة ومسجّلة تخدم السوق العقاري الأوروبي والعالمي.',
      ukStatus: 'مسجّلة',
      usa: 'الولايات المتحدة',
      usaDesc: 'الشركة القابضة للمجموعة مسجّلة في ولاية ديلاوير، مع شركات ومنصات مرخّصة.',
      usaStatus: 'المقر الرئيسي',
      global: 'الامتداد العالمي',
      globalDesc: 'منصات وبنية أصول رقمية تخدم المطوّرين والمالكين والمستثمرين حول العالم.',
      globalStatus: 'المنظومة',
      keyStats: 'حقائق أساسية',
      statsLead: 'الهيكل وراء ',
      statsAccent: 'المجموعة.',
      companies: 'شركات المجموعة',
      companiesDesc: 'شركات ومنصات متخصصة مرخّصة ومسجّلة.',
      sectors: 'نطاقات العمل',
      sectorsDesc: 'مسجّلة وتعمل في الولايات المتحدة والمملكة المتحدة.',
      countries: 'مجالات التركيز',
      countriesDesc: 'تقنية العقارات والملكية الجزئية والترميز والأصول الرقمية.',
      investors: 'ضمان الأصول',
      investorsDesc: 'كل أصل مُهيكل ومضمون عبر كيان مستقل خاص به.',
      timeline: 'المنظومة',
      timelineLead: 'كيف تترابط ',
      timelineAccent: 'المجموعة.',
      timelineSubtitle: 'منصات مرخّصة وبنية تحتية عبر المنظومة.',
      founded: 'المنصات',
      foundedDesc: 'كابيماكس BRX وRT وPropShare وAsset — منصات مرخّصة للعقارات الجزئية والمُرمّزة.',
      expansion: 'التمويل الرقمي',
      expansionDesc: 'نوفا للتمويل الرقمي توفّر قنوات التمويل الرقمي التي تربط الأصول والمالكين والسيولة.',
      platform: 'العملة النفعية',
      platformDesc: 'برونوفا تعمل كعملة نفعية تشغّل المعاملات عبر المنظومة.',
      future: 'الامتداد العالمي',
      futureDesc: 'نخدم المطوّرين ومالكي العقارات والمستثمرين والوسطاء ومزوّدي السيولة حول العالم.',
      ctaMarker: 'ابدأ محادثة',
      joinUsLead: 'مستعد لبناء الملكية ',
      joinUsAccent: 'معنا؟',
      joinUsDesc: 'اعقد شراكة مع منظومة محوكمة تعيد تعريف كيفية امتلاك قيمة العقارات وترميزها والتحقق منها.',
      getStarted: 'ابدأ',
      learnMore: 'استكشف المنظومة',
    },
  }

  const t = translations[language]

  const values = [
    { title: t.innovation, description: t.innovationDesc },
    { title: t.security, description: t.securityDesc },
    { title: t.transparency, description: t.transparencyDesc },
    { title: t.integrity, description: t.integrityDesc },
    { title: t.excellence, description: t.excellenceDesc },
  ]

  const locations = [
    { country: t.usa, description: t.usaDesc, flag: '🇺🇸', status: t.usaStatus },
    { country: t.uk, description: t.ukDesc, flag: '🇬🇧', status: t.ukStatus },
    { country: t.global, description: t.globalDesc, flag: '🌐', status: t.globalStatus },
  ]

  const stats = [
    { number: '8', label: t.companies, description: t.companiesDesc },
    { number: 'USA · UK', label: t.sectors, description: t.sectorsDesc },
    { number: '5', label: t.countries, description: t.countriesDesc },
    { number: 'SPV', label: t.investors, description: t.investorsDesc },
  ]

  const timeline = [
    { title: t.founded, description: t.foundedDesc },
    { title: t.expansion, description: t.expansionDesc },
    { title: t.platform, description: t.platformDesc },
    { title: t.future, description: t.futureDesc },
  ]

  return (
    <div className="bg-cream text-ink">
      <PageHero
        eyebrow={t.pageEyebrow}
        title={t.pageTitle}
        accent={t.pageAccent}
        subtitle={t.pageSubtitle}
      />

      {/* ===================================================== OUR STORY */}
      <Band tone="light">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-14 lg:gap-24">
          <Reveal className="lg:sticky lg:top-28 self-start">
            <Marker num="01" label={t.ourStory} />
            <Heading lead={t.storyLead} accent={t.storyAccent} />
            <div className="mt-10 grid grid-cols-2 gap-y-7 gap-x-8">
              {t.storyMeta.map(([k, v], i) => (
                <div key={i}>
                  <div className="mono-label text-ink/45" style={{ fontSize: '0.62rem' }}>{k}</div>
                  <div className="font-display text-xl mt-1">{v}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xl leading-[1.6] text-ink/85">
              <span className="font-display italic text-primary float-left mr-3 leading-[0.8]" style={{ fontSize: '4.5rem' }}>
                {isAr ? '«' : 'C'}
              </span>
              {t.storyText}
            </p>
            <div className="mt-10 border-l-2 border-[color:var(--color-primary)] pl-6 py-1">
              <p className="font-display italic text-2xl text-ink/80 leading-snug">
                {isAr ? 'نجعل الملكية جزئية وقابلة للتحقق — لا مجرد فكرة مجردة.' : 'We make ownership fractional and verifiable — not just an abstraction.'}
              </p>
            </div>
          </Reveal>
        </div>
      </Band>

      {/* ================================================ VISION & MISSION */}
      <Band tone="dark">
        <Reveal>
          <Marker num="02" label={t.visionMission} light />
          <Heading lead={t.vmLead} accent={t.vmAccent} light />
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 border-t border-l border-[color:var(--line-sand)]">
          {[[t.vision, t.visionText], [t.mission, t.missionText]].map(([title, body], i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="group relative p-9 lg:p-12 border-b border-r border-[color:var(--line-sand)] hover:bg-[rgba(47,173,111,0.05)] transition-colors h-full">
                <span className="absolute top-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-500" style={{ transitionTimingFunction: 'var(--ease-out)' }} />
                <span className="font-display italic text-3xl text-primary">0{i + 1}</span>
                <h3 className="mt-4 font-display text-2xl font-medium">{title}</h3>
                <p className="mt-4 text-sand/70 leading-relaxed">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* ========================================================= VALUES */}
      <Band tone="paper">
        <Reveal>
          <Marker num="03" label={t.values} />
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <Heading lead={t.valuesLead} accent={t.valuesAccent} />
            <p className="text-lg text-ink/70 leading-relaxed lg:pb-2">{t.valuesSubtitle}</p>
          </div>
        </Reveal>

        <div className="mt-14 border-t border-l border-[color:var(--line-dark)] grid sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, i) => (
            <Reveal key={i} delay={(i % 3) * 0.05}>
              <div className="group relative p-8 border-b border-r border-[color:var(--line-dark)] hover:bg-[rgba(47,173,111,0.06)] transition-colors h-full">
                <span className="absolute top-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-500" style={{ transitionTimingFunction: 'var(--ease-out)' }} />
                <span className="font-display italic text-3xl text-primary">0{i + 1}</span>
                <h3 className="mt-4 font-display text-xl font-medium">{value.title}</h3>
                <p className="mt-2 text-sm text-ink/65 leading-relaxed">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* ================================================ GLOBAL PRESENCE */}
      <Band tone="darker">
        <Reveal>
          <Marker num="04" label={t.globalPresence} light />
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <Heading lead={t.globalLead} accent={t.globalAccent} light />
            <p className="text-lg text-sand/70 leading-relaxed lg:pb-2">{t.globalSubtitle}</p>
          </div>
        </Reveal>

        <div className="mt-14 border-t border-l border-[color:var(--line-sand)] grid sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((location, i) => (
            <Reveal key={i} delay={(i % 3) * 0.05}>
              <div className="group relative p-9 border-b border-r border-[color:var(--line-sand)] hover:bg-[rgba(47,173,111,0.05)] transition-colors h-full">
                <span className="absolute top-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-500" style={{ transitionTimingFunction: 'var(--ease-out)' }} />
                <div className="flex items-center justify-between">
                  <span className="text-4xl">{location.flag}</span>
                  <span className="mono-label text-primary" style={{ fontSize: '0.6rem' }}>{location.status}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-medium">{location.country}</h3>
                <p className="mt-3 text-sm text-sand/65 leading-relaxed">{location.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* ================================================== KEY STATISTICS */}
      <Band tone="light">
        <Reveal>
          <Marker num="05" label={t.keyStats} />
          <Heading lead={t.statsLead} accent={t.statsAccent} />
        </Reveal>

        <div className="mt-14 border-t border-l border-[color:var(--line-dark)] grid sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={i} delay={(i % 4) * 0.05}>
              <div className="group p-8 border-b border-r border-[color:var(--line-dark)] hover:bg-[rgba(47,173,111,0.06)] transition-colors h-full">
                <div className="font-display font-medium text-ink" style={{ fontSize: 'clamp(2.4rem,4vw,3.4rem)', lineHeight: 1 }}>{stat.number}</div>
                <div className="mt-4 font-display text-lg font-medium">{stat.label}</div>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">{stat.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* ======================================================== TIMELINE */}
      <Band tone="paper">
        <Reveal>
          <Marker num="06" label={t.timeline} />
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <Heading lead={t.timelineLead} accent={t.timelineAccent} />
            <p className="text-lg text-ink/70 leading-relaxed lg:pb-2">{t.timelineSubtitle}</p>
          </div>
        </Reveal>

        <div className="mt-14 border-t border-[color:var(--line-dark)]">
          {timeline.map((item, i) => (
            <Reveal key={i}>
              <div className="group grid grid-cols-[64px_1fr] md:grid-cols-[120px_1fr_48px] gap-6 items-center py-9 border-b border-[color:var(--line-dark)] hover:px-4 transition-all duration-500" style={{ transitionTimingFunction: 'var(--ease-out)' }}>
                <span className="font-display italic text-2xl md:text-3xl text-primary">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-medium">{item.title}</h3>
                  <p className="mt-2 text-ink/65 leading-relaxed">{item.description}</p>
                </div>
                <CheckCircle className="hidden md:block w-5 h-5 text-ink/30 group-hover:text-primary transition-colors justify-self-end" />
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* ============================================================= CTA */}
      <Band tone="pitch" className="relative overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-[40rem] h-[40rem]" style={{ background: 'radial-gradient(circle, rgba(47,173,111,0.09), transparent 60%)' }} />
        <Reveal className="relative max-w-3xl">
          <Marker num="07" label={t.ctaMarker} light />
          <Heading lead={t.joinUsLead} accent={t.joinUsAccent} light size="clamp(2.6rem,7vw,6rem)" />
          <p className="mt-7 text-lg text-sand/70 leading-relaxed">{t.joinUsDesc}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link to="/investors" className={`group ${BTN.green}`}>
              {t.getStarted}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/companies" className={BTN.ghostLight}>{t.learnMore}</Link>
          </div>
        </Reveal>
      </Band>
    </div>
  )
}

export default About

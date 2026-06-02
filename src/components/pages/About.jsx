import { ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHero, Band, Marker, Heading, Eyebrow, Reveal, BTN } from '@/components/editorial'

const About = ({ language }) => {
  const isAr = language === 'ar'
  const translations = {
    en: {
      pageEyebrow: 'About the Group · UK · USA · UAE',
      pageTitle: 'Built on governance, ',
      pageAccent: 'led by ownership.',
      pageSubtitle: 'Leading the future of global investment through innovation, security, and transparency — democratizing investment opportunities worldwide.',
      ourStory: 'Our Story',
      storyLead: 'Building the future of ',
      storyAccent: 'investment.',
      storyText: 'Capimax Group was founded with a vision to democratize investment opportunities and create a secure, transparent ecosystem where everyone can participate in global markets. Since our inception, we have grown into a comprehensive investment platform operating across multiple countries and sectors.',
      storyMeta: [
        ['Established', '2024'],
        ['Companies', '11'],
        ['Sectors', '8'],
        ['Jurisdictions', 'UK · USA · UAE'],
      ],
      visionMission: 'Vision & Mission',
      vmLead: 'Direction with ',
      vmAccent: 'discipline.',
      vision: 'Our Vision',
      visionText: 'To be the leading global investment platform in fractional ownership and crowdfunding, integrating traditional and digital systems (tokenization and blockchain) to empower everyone to invest in a secure, flexible, transparent, and verifiable environment.',
      mission: 'Our Mission',
      missionText: 'To provide a global investment ecosystem that combines security, transparency, and technological innovation, enabling individuals and institutions to achieve sustainable growth within an environment supported by evaluation, insurance, and digital documentation.',
      values: 'Our Values',
      valuesLead: 'The principles that ',
      valuesAccent: 'guide us.',
      valuesSubtitle: 'The principles that guide everything we do.',
      innovation: 'Innovation',
      innovationDesc: 'We continuously push the boundaries of financial technology to create better investment solutions.',
      security: 'Security',
      securityDesc: 'We prioritize the safety and protection of our investors\' assets through comprehensive security measures.',
      transparency: 'Transparency',
      transparencyDesc: 'We believe in complete transparency in all our operations and investment processes.',
      integrity: 'Integrity',
      integrityDesc: 'We conduct business with the highest ethical standards and maintain trust with all stakeholders.',
      excellence: 'Excellence',
      excellenceDesc: 'We strive for excellence in every aspect of our services and continuously improve our offerings.',
      globalPresence: 'Global Presence',
      globalLead: 'Operating ',
      globalAccent: 'across borders.',
      globalSubtitle: 'Operating across multiple countries and expanding worldwide.',
      uk: 'United Kingdom',
      ukDesc: 'Headquarters in London with multiple subsidiaries and strategic partnerships.',
      ukStatus: 'Headquarters',
      usa: 'United States',
      usaDesc: 'Operations in New York and Wyoming with growing market presence.',
      usaStatus: 'Operations',
      uae: 'United Arab Emirates',
      uaeDesc: 'Strategic presence in Abu Dhabi and Dubai serving the MENA region.',
      uaeStatus: 'Strategic Hub',
      keyStats: 'Key Statistics',
      statsLead: 'Numbers behind the ',
      statsAccent: 'group.',
      companies: '11 Companies',
      companiesDesc: 'Specialized subsidiaries across various sectors.',
      sectors: '8 Sectors',
      sectorsDesc: 'Diversified portfolio covering multiple industries.',
      countries: '3+ Countries',
      countriesDesc: 'Global operations with plans for expansion.',
      investors: '10,000+ Investors',
      investorsDesc: 'Growing community of satisfied investors.',
      timeline: 'Our Journey',
      timelineLead: 'Key milestones in our ',
      timelineAccent: 'growth.',
      timelineSubtitle: 'Key milestones in our growth story.',
      founded: 'Founded',
      foundedDesc: 'Capimax Group established with initial companies in the UK.',
      expansion: 'Global Expansion',
      expansionDesc: 'Extended operations to USA and UAE markets.',
      platform: 'Platform Launch',
      platformDesc: 'Launched comprehensive digital investment platform.',
      future: 'Future Growth',
      futureDesc: 'Planned expansion into Asian and African markets.',
      ctaMarker: 'Begin a conversation',
      joinUsLead: 'Ready to join our ',
      joinUsAccent: 'journey?',
      joinUsDesc: 'Be part of the future of global investment and build your wealth with confidence.',
      getStarted: 'Get Started',
      learnMore: 'Explore Opportunities',
    },
    ar: {
      pageEyebrow: 'عن المجموعة · المملكة المتحدة · الولايات المتحدة · الإمارات',
      pageTitle: 'مبنية على الحوكمة، ',
      pageAccent: 'يقودها التملّك.',
      pageSubtitle: 'نقود مستقبل الاستثمار العالمي من خلال الابتكار والأمان والشفافية — وإضفاء الطابع الديمقراطي على الفرص الاستثمارية في جميع أنحاء العالم.',
      ourStory: 'قصتنا',
      storyLead: 'نبني مستقبل ',
      storyAccent: 'الاستثمار.',
      storyText: 'تأسست مجموعة كابيماكس برؤية لإضفاء الطابع الديمقراطي على الفرص الاستثمارية وإنشاء نظام بيئي آمن وشفاف حيث يمكن للجميع المشاركة في الأسواق العالمية.',
      storyMeta: [
        ['التأسيس', '2024'],
        ['الشركات', '11'],
        ['القطاعات', '8'],
        ['الولايات', 'UK · USA · UAE'],
      ],
      visionMission: 'الرؤية والمهمة',
      vmLead: 'اتجاهٌ مع ',
      vmAccent: 'انضباط.',
      vision: 'رؤيتنا',
      visionText: 'أن نكون المنصة الاستثمارية العالمية الرائدة في الملكية الجزئية والتمويل الجماعي، ودمج الأنظمة التقليدية والرقمية لتمكين الجميع من الاستثمار في بيئة آمنة.',
      mission: 'مهمتنا',
      missionText: 'توفير نظام بيئي استثماري عالمي يجمع بين الأمان والشفافية والابتكار التكنولوجي، مما يمكن الأفراد والمؤسسات من تحقيق نمو مستدام.',
      values: 'قيمنا',
      valuesLead: 'المبادئ التي ',
      valuesAccent: 'توجّهنا.',
      valuesSubtitle: 'المبادئ التي توجه كل ما نقوم به.',
      innovation: 'الابتكار',
      innovationDesc: 'نواصل دفع حدود التكنولوجيا المالية لإنشاء حلول استثمارية أفضل.',
      security: 'الأمان',
      securityDesc: 'نعطي الأولوية لسلامة وحماية أصول مستثمرينا من خلال تدابير أمنية شاملة.',
      transparency: 'الشفافية',
      transparencyDesc: 'نؤمن بالشفافية الكاملة في جميع عملياتنا وعمليات الاستثمار.',
      integrity: 'النزاهة',
      integrityDesc: 'نمارس الأعمال بأعلى المعايير الأخلاقية ونحافظ على الثقة مع جميع أصحاب المصلحة.',
      excellence: 'التميز',
      excellenceDesc: 'نسعى للتميز في كل جانب من جوانب خدماتنا ونحسن عروضنا باستمرار.',
      globalPresence: 'الحضور العالمي',
      globalLead: 'نعمل ',
      globalAccent: 'عبر الحدود.',
      globalSubtitle: 'نعمل عبر عدة دول ونتوسع في جميع أنحاء العالم.',
      uk: 'المملكة المتحدة',
      ukDesc: 'المقر الرئيسي في لندن مع عدة شركات تابعة وشراكات استراتيجية.',
      ukStatus: 'المقر الرئيسي',
      usa: 'الولايات المتحدة',
      usaDesc: 'عمليات في نيويورك ووايومنغ مع حضور متنامي في السوق.',
      usaStatus: 'العمليات',
      uae: 'الإمارات العربية المتحدة',
      uaeDesc: 'حضور استراتيجي في أبوظبي ودبي يخدم منطقة الشرق الأوسط وشمال أفريقيا.',
      uaeStatus: 'مركز استراتيجي',
      keyStats: 'الإحصائيات الرئيسية',
      statsLead: 'الأرقام وراء ',
      statsAccent: 'المجموعة.',
      companies: '11 شركة',
      companiesDesc: 'شركات تابعة متخصصة عبر قطاعات مختلفة.',
      sectors: '8 قطاعات',
      sectorsDesc: 'محفظة متنوعة تغطي صناعات متعددة.',
      countries: '3+ دول',
      countriesDesc: 'عمليات عالمية مع خطط للتوسع.',
      investors: '10,000+ مستثمر',
      investorsDesc: 'مجتمع متنامي من المستثمرين الراضين.',
      timeline: 'رحلتنا',
      timelineLead: 'المعالم الرئيسية في ',
      timelineAccent: 'نمونا.',
      timelineSubtitle: 'المعالم الرئيسية في قصة نمونا.',
      founded: 'التأسيس',
      foundedDesc: 'تأسست مجموعة كابيماكس مع الشركات الأولية في المملكة المتحدة.',
      expansion: 'التوسع العالمي',
      expansionDesc: 'توسيع العمليات إلى أسواق الولايات المتحدة والإمارات.',
      platform: 'إطلاق المنصة',
      platformDesc: 'إطلاق منصة الاستثمار الرقمية الشاملة.',
      future: 'النمو المستقبلي',
      futureDesc: 'التوسع المخطط في الأسواق الآسيوية والأفريقية.',
      ctaMarker: 'ابدأ محادثة',
      joinUsLead: 'مستعد للانضمام إلى ',
      joinUsAccent: 'رحلتنا؟',
      joinUsDesc: 'كن جزءًا من مستقبل الاستثمار العالمي وابني ثروتك بثقة.',
      getStarted: 'ابدأ',
      learnMore: 'استكشف الفرص',
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
    { country: t.uk, description: t.ukDesc, flag: '🇬🇧', status: t.ukStatus },
    { country: t.usa, description: t.usaDesc, flag: '🇺🇸', status: t.usaStatus },
    { country: t.uae, description: t.uaeDesc, flag: '🇦🇪', status: t.uaeStatus },
  ]

  const stats = [
    { number: '11', label: t.companies, description: t.companiesDesc },
    { number: '8', label: t.sectors, description: t.sectorsDesc },
    { number: '3+', label: t.countries, description: t.countriesDesc },
    { number: '10,000+', label: t.investors, description: t.investorsDesc },
  ]

  const timeline = [
    { year: '2024', title: t.founded, description: t.foundedDesc },
    { year: '2024', title: t.expansion, description: t.expansionDesc },
    { year: '2024', title: t.platform, description: t.platformDesc },
    { year: '2025', title: t.future, description: t.futureDesc },
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
                {isAr ? 'نحن نبني تملّكًا يدوم — لا مجرد عوائد.' : 'We build ownership that endures — not just returns.'}
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
                <span className="font-display italic text-2xl md:text-3xl text-primary">{item.year}</span>
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

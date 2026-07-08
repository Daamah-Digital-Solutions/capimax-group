import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { platformContent, currencyContent, novaContent } from '@/data/content'
import { PageHero, Band, Marker, Heading, Reveal, BTN } from '@/components/editorial'

const Investors = ({ language }) => {
  const translations = {
    en: {
      pageEyebrow: 'Fractional Ownership · SPV-backed',
      pageTitle: 'Own a share of ',
      pageAccent: 'real assets.',
      pageSubtitle: 'Capimax makes real-world real estate ownable in transparent, verifiable, fractional shares — through two models, each backed by independent SPVs.',
      explorePlatforms: 'Explore Platforms',
      talkToTeam: 'Talk to the team',
      explore: 'Explore',
      visit: 'Visit',

      conceptMarker: 'The concept',
      conceptLead: 'What fractional ',
      conceptAccent: 'ownership is.',
      conceptBody: 'Fractional ownership divides a high-value property into affordable, transferable shares. Instead of buying a whole asset, you own a documented share of it — with clear records, periodic reporting, and a path to exit. Technology makes the entire lifecycle accessible, transparent, and global.',
      pillar1: 'Accessible', pillar1Desc: 'High-value real estate, owned in affordable shares.',
      pillar2: 'Transferable', pillar2Desc: 'Shares can be transferred or exited through the platforms.',
      pillar3: 'Documented', pillar3Desc: 'Every share is backed by documented, verifiable ownership.',
      pillar4: 'Global', pillar4Desc: 'Own across borders through licensed, regulated platforms.',

      modelsMarker: 'Two models',
      modelsLead: 'Two ways to ',
      modelsAccent: 'own.',
      modelsSubtitle: 'The group delivers fractional ownership through two complementary models.',
      model1Title: 'Traditional-digital model',
      model1Platform: 'via Capimax PropShare',
      model1Desc: 'Structured, non-blockchain ownership of carefully selected properties — with centralized management, clear ownership, and periodic performance reporting.',
      model1Points: ['Structured ownership', 'Centralized management', 'Periodic reporting', 'Long-term stability'],
      model2Title: 'Tokenization model',
      model2Platform: 'via Capimax RT & Digital Assets',
      model2Desc: 'Real estate tokenized into transferable digital shares on the blockchain through legally structured SPVs — with transparent records and controlled exit via secondary markets or liquidity providers.',
      model2Points: ['Blockchain-secured', 'Independent SPVs', 'Transferable shares', 'Secondary-market exit'],

      partiesMarker: 'One ecosystem',
      partiesLead: 'A model that connects ',
      partiesAccent: 'everyone.',
      partiesSubtitle: 'Capimax brings every side of real estate into one connected ecosystem — and defines how they work together.',
      party1: 'Real Estate Developer', party1Desc: 'Brings projects and inventory into the ecosystem.',
      party2: 'Property Owner', party2Desc: 'Unlocks liquidity from real, held assets.',
      party3: 'Investor', party3Desc: 'Owns fractional, documented shares.',
      party4: 'Broker', party4Desc: 'Connects supply and demand across the marketplace.',
      party5: 'Liquidity Provider', party5Desc: 'Enables exit and secondary-market liquidity.',

      protectMarker: 'Protected & verifiable',
      protectLead: 'Every asset, ',
      protectAccent: 'accounted for.',
      protectSubtitle: 'Ownership is only as strong as the structure behind it. Ours is built to be verified at every level.',
      protect1: 'Independent SPV', protect1Desc: 'Every project sits in its own independent, verifiable SPV.',
      protect2: 'Verification & documentation', protect2Desc: 'Ownership and asset documents are verified and documented globally.',
      protect3: 'Independent valuation', protect3Desc: 'Assets are valued through independent valuation partners.',
      protect4: 'Insurance', protect4Desc: 'Assets and operations are covered by specialized insurance (HCC, AssurX).',
      protect5: 'Verifiable records', protect5Desc: 'Every digital asset is linked to a documented, real-world asset.',
      protect6: 'Oversight & compliance', protect6Desc: 'Document custody, verification, and compliance via CIM Financial Group.',

      ecosystem: 'The Capimax Ecosystem',
      ecoLead: 'The platforms behind ',
      ecoAccent: 'ownership.',
      ecosystemSubtitle: 'Licensed platforms, a utility currency, and digital finance — the infrastructure that makes ownership work.',
      platformsLabel: 'Platforms',
      currencyLabel: 'Pronova — utility currency',
      novaLabel: 'Nova Digital Finance',

      ctaMarker: 'Begin ownership',
      ctaLead: 'Start owning ',
      ctaAccent: 'today.',
      ctaSubtitle: 'Explore the platforms and the assets you can own — or talk to our team.',
      ctaPrimary: 'Explore Platforms',
      ctaSecondary: 'Contact us',
    },
    ar: {
      pageEyebrow: 'الملكية الجزئية · مدعومة بـ SPV',
      pageTitle: 'امتلك حصة من ',
      pageAccent: 'أصول حقيقية.',
      pageSubtitle: 'تجعل كابي ماكس العقارات الحقيقية قابلة للتملّك في حصص جزئية شفافة وقابلة للتحقق — عبر نموذجين، كلٌّ مدعوم بشركات SPV مستقلة.',
      explorePlatforms: 'استكشف المنصات',
      talkToTeam: 'تحدّث إلى الفريق',
      explore: 'استكشف',
      visit: 'زيارة',

      conceptMarker: 'المفهوم',
      conceptLead: 'ما هي الملكية ',
      conceptAccent: 'الجزئية.',
      conceptBody: 'تقسم الملكية الجزئية العقار عالي القيمة إلى حصص ميسورة وقابلة للتحويل. بدلاً من شراء الأصل كاملاً، تمتلك حصة موثّقة منه — بسجلات واضحة وتقارير دورية ومسار للتخارج. وتجعل التكنولوجيا دورة الحياة كاملة متاحة وشفافة وعالمية.',
      pillar1: 'متاح', pillar1Desc: 'عقارات عالية القيمة، تُمتلك في حصص ميسورة.',
      pillar2: 'قابل للتحويل', pillar2Desc: 'يمكن تحويل الحصص أو التخارج منها عبر المنصات.',
      pillar3: 'موثّق', pillar3Desc: 'كل حصة مدعومة بملكية موثّقة وقابلة للتحقق.',
      pillar4: 'عالمي', pillar4Desc: 'التملّك عبر الحدود من خلال منصات مرخّصة ومنظّمة.',

      modelsMarker: 'نموذجان',
      modelsLead: 'طريقتان ',
      modelsAccent: 'للتملّك.',
      modelsSubtitle: 'تقدّم المجموعة الملكية الجزئية عبر نموذجين متكاملين.',
      model1Title: 'النموذج الرقمي التقليدي',
      model1Platform: 'عبر منصة كابي ماكس بروب شير',
      model1Desc: 'ملكية منظّمة غير قائمة على البلوكشين لعقارات مختارة بعناية — بإدارة مركزية وملكية واضحة وتقارير أداء دورية.',
      model1Points: ['ملكية منظّمة', 'إدارة مركزية', 'تقارير دورية', 'استقرار طويل الأجل'],
      model2Title: 'نموذج الترميز',
      model2Platform: 'عبر كابي ماكس RT والأصول الرقمية',
      model2Desc: 'عقارات مرمّزة إلى حصص رقمية قابلة للتحويل على البلوكشين عبر هياكل SPV قانونية — بسجلات شفافة وتخارج منظّم عبر السوق الثانوي أو مزوّدي السيولة.',
      model2Points: ['مؤمّن بالبلوكشين', 'هياكل SPV مستقلة', 'حصص قابلة للتحويل', 'تخارج عبر السوق الثانوي'],

      partiesMarker: 'منظومة واحدة',
      partiesLead: 'نموذج يربط ',
      partiesAccent: 'الجميع.',
      partiesSubtitle: 'تجمع كابي ماكس كل أطراف العقار في منظومة واحدة مترابطة — وتحدّد كيف يعملون معًا.',
      party1: 'المطوّر العقاري', party1Desc: 'يُدخل المشاريع والمخزون إلى المنظومة.',
      party2: 'مالك العقار', party2Desc: 'يُطلق السيولة من أصول حقيقية مملوكة.',
      party3: 'المستثمر', party3Desc: 'يمتلك حصصًا جزئية موثّقة.',
      party4: 'الوسيط العقاري', party4Desc: 'يربط العرض بالطلب عبر السوق.',
      party5: 'مزوّد السيولة', party5Desc: 'يتيح التخارج وسيولة السوق الثانوي.',

      protectMarker: 'محمي وقابل للتحقق',
      protectLead: 'كل أصل ',
      protectAccent: 'موثّق ومحسوب.',
      protectSubtitle: 'الملكية بقوة الهيكل الذي خلفها. وهيكلنا مبني ليكون قابلاً للتحقق على كل مستوى.',
      protect1: 'SPV مستقلة', protect1Desc: 'كل مشروع في شركة SPV مستقلة قابلة للتحقق.',
      protect2: 'التحقق والتوثيق', protect2Desc: 'مستندات الملكية والأصول موثّقة ومتحقَّق منها عالميًا.',
      protect3: 'تقييم مستقل', protect3Desc: 'تُقيَّم الأصول عبر شركاء تقييم مستقلين.',
      protect4: 'التأمين', protect4Desc: 'الأصول والعمليات مغطّاة بتأمين متخصص (HCC، AssurX).',
      protect5: 'سجلات قابلة للتحقق', protect5Desc: 'كل أصل رقمي مرتبط بأصل حقيقي موثّق.',
      protect6: 'الرقابة والامتثال', protect6Desc: 'حفظ المستندات والتحقق والامتثال عبر مجموعة CIM المالية.',

      ecosystem: 'منظومة كابي ماكس',
      ecoLead: 'المنصات التي خلف ',
      ecoAccent: 'التملّك.',
      ecosystemSubtitle: 'منصات مرخّصة، وعملة خدمية، وتمويل رقمي — البنية التي تجعل التملّك ممكنًا.',
      platformsLabel: 'المنصات',
      currencyLabel: 'Pronova — عملة خدمية',
      novaLabel: 'نوفا للتمويل الرقمي',

      ctaMarker: 'ابدأ التملّك',
      ctaLead: 'ابدأ التملّك ',
      ctaAccent: 'اليوم.',
      ctaSubtitle: 'استكشف المنصات والأصول التي يمكنك تملّكها — أو تحدّث إلى فريقنا.',
      ctaPrimary: 'استكشف المنصات',
      ctaSecondary: 'تواصل معنا',
    },
  }

  const t = translations[language]

  const conceptPillars = [
    { title: t.pillar1, description: t.pillar1Desc },
    { title: t.pillar2, description: t.pillar2Desc },
    { title: t.pillar3, description: t.pillar3Desc },
    { title: t.pillar4, description: t.pillar4Desc },
  ]

  const models = [
    { title: t.model1Title, platform: t.model1Platform, description: t.model1Desc, points: t.model1Points },
    { title: t.model2Title, platform: t.model2Platform, description: t.model2Desc, points: t.model2Points },
  ]

  const parties = [
    { title: t.party1, description: t.party1Desc },
    { title: t.party2, description: t.party2Desc },
    { title: t.party3, description: t.party3Desc },
    { title: t.party4, description: t.party4Desc },
    { title: t.party5, description: t.party5Desc },
  ]

  const protections = [
    { title: t.protect1, description: t.protect1Desc },
    { title: t.protect2, description: t.protect2Desc },
    { title: t.protect3, description: t.protect3Desc },
    { title: t.protect4, description: t.protect4Desc },
    { title: t.protect5, description: t.protect5Desc },
    { title: t.protect6, description: t.protect6Desc },
  ]

  return (
    <div className="bg-cream text-ink">
      <PageHero
        eyebrow={t.pageEyebrow}
        title={t.pageTitle}
        accent={t.pageAccent}
        subtitle={t.pageSubtitle}
      >
        <div className="mt-9 flex flex-col sm:flex-row gap-3">
          <Link to="/platforms" className={`group ${BTN.sand}`}>
            {t.explorePlatforms}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/contact" className={BTN.ghostLight}>{t.talkToTeam}</Link>
        </div>
      </PageHero>

      {/* ================================================= THE CONCEPT */}
      <Band tone="paper">
        <Reveal>
          <Marker num="01" label={t.conceptMarker} />
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <Heading lead={t.conceptLead} accent={t.conceptAccent} />
            <p className="text-lg text-ink/70 leading-relaxed lg:pb-2">{t.conceptBody}</p>
          </div>
        </Reveal>

        <div className="mt-14 border-t border-l border-[color:var(--line-dark)] grid sm:grid-cols-2 lg:grid-cols-4">
          {conceptPillars.map((p, i) => (
            <Reveal key={i} delay={(i % 4) * 0.05}>
              <div className="group p-8 border-b border-r border-[color:var(--line-dark)] hover:bg-[rgba(47,173,111,0.06)] transition-colors h-full">
                <span className="font-display italic text-3xl text-primary">0{i + 1}</span>
                <h3 className="mt-4 font-display text-xl font-medium">{p.title}</h3>
                <p className="mt-2 text-sm text-ink/65 leading-relaxed">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* ================================================= TWO MODELS */}
      <Band tone="light">
        <Reveal>
          <Marker num="02" label={t.modelsMarker} />
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <Heading lead={t.modelsLead} accent={t.modelsAccent} />
            <p className="text-lg text-ink/70 leading-relaxed lg:pb-2">{t.modelsSubtitle}</p>
          </div>
        </Reveal>

        <div className="mt-14 border-t border-l border-[color:var(--line-dark)] grid md:grid-cols-2">
          {models.map((m, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="group relative flex flex-col h-full p-9 border-b border-r border-[color:var(--line-dark)] hover:bg-[rgba(47,173,111,0.05)] transition-colors">
                <span className="absolute top-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-500" style={{ transitionTimingFunction: 'var(--ease-out)' }} />
                <span className="font-display italic text-3xl text-primary">0{i + 1}</span>
                <h3 className="mt-4 font-display text-2xl font-medium leading-snug">{m.title}</h3>
                <p className="mono-label text-primary mt-2" style={{ fontSize: '0.62rem' }}>{m.platform}</p>
                <p className="mt-4 text-ink/70 leading-relaxed">{m.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {m.points.map((point, idx) => (
                    <span key={idx} className="text-[0.72rem] px-2.5 py-1 border border-[color:var(--line-dark)] text-ink/70">{point}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* ================================================= THE PARTIES */}
      <Band tone="dark">
        <Reveal>
          <Marker num="03" label={t.partiesMarker} light />
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <Heading lead={t.partiesLead} accent={t.partiesAccent} light />
            <p className="text-lg text-sand/70 leading-relaxed lg:pb-2">{t.partiesSubtitle}</p>
          </div>
        </Reveal>

        <div className="mt-14 border-t border-l border-[color:var(--line-sand)] grid sm:grid-cols-2 lg:grid-cols-5">
          {parties.map((party, i) => (
            <Reveal key={i} delay={(i % 5) * 0.05}>
              <div className="group p-7 border-b border-r border-[color:var(--line-sand)] hover:bg-[rgba(47,173,111,0.05)] transition-colors h-full">
                <span className="font-display italic text-2xl text-primary">0{i + 1}</span>
                <h3 className="mt-4 font-display text-lg font-medium leading-snug">{party.title}</h3>
                <p className="mt-2 text-sm text-sand/60 leading-relaxed">{party.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* =========================================== PROTECTED & VERIFIABLE */}
      <Band tone="paper">
        <Reveal>
          <Marker num="04" label={t.protectMarker} />
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <Heading lead={t.protectLead} accent={t.protectAccent} />
            <p className="text-lg text-ink/70 leading-relaxed lg:pb-2">{t.protectSubtitle}</p>
          </div>
        </Reveal>

        <div className="mt-14 border-t border-l border-[color:var(--line-dark)] grid sm:grid-cols-2 lg:grid-cols-3">
          {protections.map((item, i) => (
            <Reveal key={i} delay={(i % 3) * 0.05}>
              <div className="group p-8 border-b border-r border-[color:var(--line-dark)] hover:bg-[rgba(47,173,111,0.06)] transition-colors h-full">
                <span className="font-display italic text-2xl text-primary">0{i + 1}</span>
                <h3 className="mt-4 font-display text-lg font-medium leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm text-ink/65 leading-relaxed">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* ======================================================= ECOSYSTEM */}
      <Band tone="darker" className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem]" style={{ background: 'radial-gradient(circle, rgba(47,173,111,0.08), transparent 60%)' }} />
        <div className="relative">
          <Reveal>
            <Marker num="05" label={t.ecosystem} light />
            <div className="grid lg:grid-cols-2 gap-8 items-end">
              <Heading lead={t.ecoLead} accent={t.ecoAccent} light />
              <p className="text-lg text-sand/70 leading-relaxed lg:pb-2">{t.ecosystemSubtitle}</p>
            </div>
          </Reveal>

          <Reveal className="mt-14">
            <span className="mono-label text-sand/55" style={{ fontSize: '0.62rem' }}>— {t.platformsLabel}</span>
          </Reveal>
          <div className="mt-6 border-t border-l border-[color:var(--line-sand)] grid sm:grid-cols-2 lg:grid-cols-4">
            {platformContent.map((platform, i) => (
              <Reveal key={platform.id} delay={(i % 4) * 0.05}>
                <div className="group flex flex-col h-full p-7 border-b border-r border-[color:var(--line-sand)] hover:bg-[rgba(47,173,111,0.05)] transition-colors">
                  <span className="mono-label text-sand/35" style={{ fontSize: '0.6rem' }}>/ 0{i + 1}</span>
                  <h4 className="mt-4 font-display text-lg font-medium leading-snug">{platform[language].name}</h4>
                  <p className="mt-2 text-sm text-sand/60 leading-relaxed flex-1">{platform[language].short}</p>
                  <div className="mt-5 flex items-center gap-4 text-sm">
                    <Link to={`/platforms/${platform.id}`} className="text-primary inline-flex items-center gap-1 hover:gap-2 transition-all">
                      {t.explore} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    {platform.externalUrl && (
                      <a href={platform.externalUrl} target="_blank" rel="noopener noreferrer" className="text-sand/50 hover:text-sand inline-flex items-center gap-1">
                        {t.visit} <ArrowUpRight className="w-3.5 h-3.5" />
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
                  <span className="block font-display text-lg font-medium">{t.currencyLabel}</span>
                  <span className="block text-sm text-sand/60 mt-1">{currencyContent[language].short}</span>
                </span>
                <ArrowUpRight className="w-4 h-4 text-sand/40 group-hover:text-primary transition-colors" />
              </Link>
            </Reveal>
            <Reveal delay={0.05}>
              <Link to="/nova" className="group flex items-center gap-5 p-7 border-b border-r border-[color:var(--line-sand)] hover:bg-[rgba(47,173,111,0.05)] transition-colors">
                <span className="font-display italic text-3xl text-primary">N</span>
                <span className="flex-1">
                  <span className="block font-display text-lg font-medium">{t.novaLabel}</span>
                  <span className="block text-sm text-sand/60 mt-1">{novaContent[language].tagline}</span>
                </span>
                <ArrowUpRight className="w-4 h-4 text-sand/40 group-hover:text-primary transition-colors" />
              </Link>
            </Reveal>
          </div>
        </div>
      </Band>

      {/* ============================================================= CTA */}
      <Band tone="pitch" className="relative overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-[40rem] h-[40rem]" style={{ background: 'radial-gradient(circle, rgba(47,173,111,0.09), transparent 60%)' }} />
        <Reveal className="relative max-w-3xl">
          <Marker num="06" label={t.ctaMarker} light />
          <Heading lead={t.ctaLead} accent={t.ctaAccent} light size="clamp(2.6rem,7vw,6rem)" />
          <p className="mt-7 text-lg text-sand/70 leading-relaxed">{t.ctaSubtitle}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link to="/platforms" className={`group ${BTN.green}`}>
              {t.ctaPrimary}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className={BTN.ghostLight}>{t.ctaSecondary}</Link>
          </div>
        </Reveal>
      </Band>
    </div>
  )
}

export default Investors

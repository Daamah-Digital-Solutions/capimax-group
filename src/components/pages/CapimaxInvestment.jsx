import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { PageHero, Band, Marker, Reveal, BTN } from '@/components/editorial'

// Capimax Asset platform page (route /companies/capimax-investment).
// Replaces the retired "Capimax Invest" per the V2 spec.
const CapimaxInvestment = ({ language = 'en' }) => {
  const translations = {
    en: {
      heroEyebrow: 'Platform · Capimax Asset',
      heroTitle: 'Capimax ',
      heroAccent: 'Asset.',
      heroSubtitle: 'Structured access to real, asset-backed opportunities — each linked to a documented property and an independent SPV, within one compliant framework.',
      explorePlatforms: 'Explore Platforms',
      contact: 'Contact',

      overviewMarker: 'Platform overview',
      overviewTitle: 'Real assets, ',
      overviewTitleAccent: 'structured access.',
      overviewDescription: 'Capimax Asset is the group’s platform for structured access to real, asset-backed opportunities. Every opportunity is tied to a documented, real-world property and an independent SPV — within one regulated, auditable operational framework.',
      assetBacked: 'Every asset documented & SPV-backed',

      howMarker: 'How it works',
      howTitle: 'From asset ',
      howTitleAccent: 'to access.',
      howBody: 'Ownership is only as strong as the structure behind it. Capimax Asset is built to be verified at every step.',
      how1: 'Documented assets', how1Desc: 'Every asset is linked to documented, verifiable ownership.',
      how2: 'Independent SPV', how2Desc: 'Each asset sits in its own independent, verifiable SPV.',
      how3: 'Two ownership models', how3Desc: 'Digital ownership via Capimax PropShare, or tokenized via Capimax RT.',
      how4: 'Compliant framework', how4Desc: 'One regulated, auditable operational framework.',

      accessMarker: 'What you can access',
      accessTitle: 'Access across ',
      accessTitleAccent: 'the ecosystem.',
      accessBody: 'A curated set of real, asset-backed opportunities across the group’s real-estate ecosystem.',
      access1: 'Real Estate Portfolios', access1Desc: 'Fractional access to documented real estate across the USA and UK.', access1Status: 'Available',
      access2: 'Tokenized Real Estate', access2Desc: 'Blockchain-secured, SPV-backed shares via Capimax RT.', access2Status: 'Available',
      access3: 'Digital Assets', access3Desc: 'Asset-backed digital assets connected to Nova Digital Finance.', access3Status: 'Coming soon',

      whyMarker: 'Why Capimax Asset',
      whyTitle: 'Built for ',
      whyTitleAccent: 'verifiable ownership.',
      whyBody: 'Every layer is designed to be transparent, verifiable, and protected.',
      why1: 'Verifiable', why1Desc: 'Every asset backed by documents you can verify.',
      why2: 'Asset-backed', why2Desc: 'Each digital asset linked to a documented real asset.',
      why3: 'Insured', why3Desc: 'Assets and operations insured via HCC and AssurX.',
      why4: 'Global', why4Desc: 'Licensed platforms operating across the USA and UK.',

      relatedMarker: 'Related',
      exploreOwnership: 'Fractional Ownership',
      exploreDocuments: 'Verify Documents',
      explorePlatformsLink: 'All Platforms',

      ctaMarker: 'Begin a conversation',
      ctaTitle: 'Own a share of ',
      ctaTitleAccent: 'real estate.',
      ctaBody: 'Explore the platforms and the assets you can own — or talk to our team.',
      startToday: 'Explore Platforms',
      scheduleConsult: 'Contact us',
    },
    ar: {
      heroEyebrow: 'منصة · كابي ماكس أسِت',
      heroTitle: 'كابي ماكس ',
      heroAccent: 'أسِت.',
      heroSubtitle: 'وصول منظّم إلى فرص حقيقية مدعومة بالأصول — كلٌّ مرتبط بعقار موثّق وشركة SPV مستقلة، ضمن إطار متوافق واحد.',
      explorePlatforms: 'استكشف المنصات',
      contact: 'تواصل',

      overviewMarker: 'نظرة عامة على المنصة',
      overviewTitle: 'أصول حقيقية، ',
      overviewTitleAccent: 'وصول منظّم.',
      overviewDescription: 'كابي ماكس أسِت هي منصة المجموعة للوصول المنظّم إلى فرص حقيقية مدعومة بالأصول. كل فرصة مرتبطة بعقار حقيقي موثّق وشركة SPV مستقلة — ضمن إطار تشغيلي منظّم وقابل للتدقيق.',
      assetBacked: 'كل أصل موثّق ومدعوم بشركة SPV',

      howMarker: 'كيف يعمل',
      howTitle: 'من الأصل ',
      howTitleAccent: 'إلى الوصول.',
      howBody: 'الملكية بقوة الهيكل الذي خلفها. وكابي ماكس أسِت مبنية لتكون قابلة للتحقق في كل خطوة.',
      how1: 'أصول موثّقة', how1Desc: 'كل أصل مرتبط بملكية موثّقة وقابلة للتحقق.',
      how2: 'SPV مستقلة', how2Desc: 'كل أصل في شركة SPV مستقلة قابلة للتحقق.',
      how3: 'نموذجا تملّك', how3Desc: 'ملكية رقمية عبر بروب شير، أو ترميز عبر كابي ماكس RT.',
      how4: 'إطار متوافق', how4Desc: 'إطار تشغيلي منظّم وقابل للتدقيق.',

      accessMarker: 'ما يمكنك الوصول إليه',
      accessTitle: 'وصول عبر ',
      accessTitleAccent: 'المنظومة.',
      accessBody: 'مجموعة مختارة من الفرص الحقيقية المدعومة بالأصول عبر منظومة المجموعة العقارية.',
      access1: 'محافظ عقارية', access1Desc: 'وصول جزئي إلى عقارات موثّقة عبر الولايات المتحدة والمملكة المتحدة.', access1Status: 'متاح',
      access2: 'عقارات مرمّزة', access2Desc: 'حصص مؤمّنة بالبلوكشين ومدعومة بـ SPV عبر كابي ماكس RT.', access2Status: 'متاح',
      access3: 'أصول رقمية', access3Desc: 'أصول رقمية مدعومة بأصول ومرتبطة بنوفا للتمويل الرقمي.', access3Status: 'قريبًا',

      whyMarker: 'لماذا كابي ماكس أسِت',
      whyTitle: 'مبنية لأجل ',
      whyTitleAccent: 'ملكية قابلة للتحقق.',
      whyBody: 'كل طبقة مصمّمة لتكون شفافة وقابلة للتحقق ومحميّة.',
      why1: 'قابل للتحقق', why1Desc: 'كل أصل مدعوم بمستندات يمكنك التحقق منها.',
      why2: 'مدعوم بأصول', why2Desc: 'كل أصل رقمي مرتبط بأصل حقيقي موثّق.',
      why3: 'مؤمّن', why3Desc: 'الأصول والعمليات مؤمّنة عبر HCC وAssurX.',
      why4: 'عالمي', why4Desc: 'منصات مرخّصة تعمل عبر الولايات المتحدة والمملكة المتحدة.',

      relatedMarker: 'روابط ذات صلة',
      exploreOwnership: 'الملكية الجزئية',
      exploreDocuments: 'تحقّق من المستندات',
      explorePlatformsLink: 'كل المنصات',

      ctaMarker: 'ابدأ محادثة',
      ctaTitle: 'تملّك حصة من ',
      ctaTitleAccent: 'العقارات.',
      ctaBody: 'استكشف المنصات والأصول التي يمكنك تملّكها — أو تحدّث إلى فريقنا.',
      startToday: 'استكشف المنصات',
      scheduleConsult: 'تواصل معنا',
    },
  }

  const t = translations[language]

  const howItWorks = [
    { title: t.how1, description: t.how1Desc },
    { title: t.how2, description: t.how2Desc },
    { title: t.how3, description: t.how3Desc },
    { title: t.how4, description: t.how4Desc },
  ]

  const access = [
    { title: t.access1, description: t.access1Desc, status: t.access1Status, isActive: true },
    { title: t.access2, description: t.access2Desc, status: t.access2Status, isActive: true },
    { title: t.access3, description: t.access3Desc, status: t.access3Status, isActive: false },
  ]

  const whyFeatures = [
    { title: t.why1, description: t.why1Desc },
    { title: t.why2, description: t.why2Desc },
    { title: t.why3, description: t.why3Desc },
    { title: t.why4, description: t.why4Desc },
  ]

  return (
    <div className="bg-cream text-ink">
      <PageHero
        eyebrow={t.heroEyebrow}
        title={t.heroTitle}
        accent={t.heroAccent}
        subtitle={t.heroSubtitle}
      >
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link to="/platforms" className={`group ${BTN.sand}`}>
            {t.explorePlatforms}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/contact" className={BTN.ghostLight}>{t.contact}</Link>
        </div>
      </PageHero>

      {/* ======================================================== OVERVIEW */}
      <Band tone="light">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-14 lg:gap-24 items-start">
          <Reveal>
            <Marker num="01" label={t.overviewMarker} />
            <h2 className="font-display font-medium leading-[1.04]" style={{ fontSize: 'clamp(2.2rem,4vw,3.6rem)', letterSpacing: '-0.025em' }}>
              {t.overviewTitle}<span className="accent-em">{t.overviewTitleAccent}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl leading-[1.55] text-ink/85">{t.overviewDescription}</p>
            <div className="mt-8 inline-flex items-center gap-3 border border-[color:var(--line-dark)] px-5 py-3">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="mono-label text-ink/60" style={{ fontSize: '0.62rem' }}>{t.assetBacked}</span>
            </div>
          </Reveal>
        </div>
      </Band>

      {/* ======================================================== HOW IT WORKS */}
      <Band tone="paper">
        <Reveal className="grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <Marker num="02" label={t.howMarker} />
            <h2 className="font-display font-medium leading-[1.02]" style={{ fontSize: 'clamp(2.2rem,4.5vw,4rem)', letterSpacing: '-0.025em' }}>
              {t.howTitle}<span className="accent-em">{t.howTitleAccent}</span>
            </h2>
          </div>
          <p className="text-lg text-ink/70 leading-relaxed lg:pb-2">{t.howBody}</p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[color:var(--line-dark)]">
          {howItWorks.map((item, i) => (
            <Reveal key={i} delay={(i % 4) * 0.05}>
              <div className="group flex flex-col h-full p-7 border-b border-r border-[color:var(--line-dark)] hover:bg-[rgba(47,173,111,0.05)] transition-colors">
                <span className="font-display italic text-2xl text-primary leading-none">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 font-display text-lg font-medium leading-snug group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="mt-3 text-sm text-ink/65 leading-relaxed flex-1">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* ===================================================== WHAT YOU ACCESS */}
      <Band tone="dark">
        <Reveal className="grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <Marker num="03" label={t.accessMarker} light />
            <h2 className="font-display font-medium leading-[1.02] text-sand" style={{ fontSize: 'clamp(2.2rem,4.5vw,4rem)', letterSpacing: '-0.025em' }}>
              {t.accessTitle}<span className="accent-em">{t.accessTitleAccent}</span>
            </h2>
          </div>
          <p className="text-lg text-sand/70 leading-relaxed lg:pb-2">{t.accessBody}</p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[color:var(--line-sand)]">
          {access.map((item, i) => (
            <Reveal key={i} delay={(i % 3) * 0.05}>
              <div className="group flex flex-col h-full p-8 border-b border-r border-[color:var(--line-sand)] hover:bg-[rgba(47,173,111,0.05)] transition-colors">
                <span className={`self-start text-[0.65rem] px-2.5 py-1 border ${item.isActive ? 'border-primary text-primary' : 'border-[color:var(--line-sand)] text-sand/45'}`}>
                  {item.status}
                </span>
                <h3 className="mt-5 font-display text-xl font-medium leading-snug text-sand group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="mt-3 text-sm text-sand/60 leading-relaxed flex-1">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* ================================================ WHY CAPIMAX ASSET */}
      <Band tone="light">
        <Reveal className="grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <Marker num="04" label={t.whyMarker} />
            <h2 className="font-display font-medium leading-[1.02]" style={{ fontSize: 'clamp(2.2rem,4.5vw,4rem)', letterSpacing: '-0.025em' }}>
              {t.whyTitle}<span className="accent-em">{t.whyTitleAccent}</span>
            </h2>
          </div>
          <p className="text-lg text-ink/70 leading-relaxed lg:pb-2">{t.whyBody}</p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[color:var(--line-dark)]">
          {whyFeatures.map((feature, i) => (
            <Reveal key={i} delay={(i % 4) * 0.05}>
              <div className="group flex flex-col h-full p-7 border-b border-r border-[color:var(--line-dark)] hover:bg-[rgba(47,173,111,0.05)] transition-colors relative">
                <span className="absolute top-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-500" style={{ transitionTimingFunction: 'var(--ease-out)' }} />
                <span className="font-display italic text-2xl text-primary leading-none">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 font-display text-lg font-medium leading-snug group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="mt-3 text-sm text-ink/65 leading-relaxed flex-1">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* ========================================================== RELATED */}
      <Band tone="paper">
        <Reveal>
          <Marker num="05" label={t.relatedMarker} />
        </Reveal>
        <div className="mt-8 grid sm:grid-cols-3 border-t border-l border-[color:var(--line-dark)]">
          {[
            { to: '/investors', label: t.exploreOwnership },
            { to: '/documents', label: t.exploreDocuments },
            { to: '/platforms', label: t.explorePlatformsLink },
          ].map((link, i) => (
            <Link
              key={i}
              to={link.to}
              className="group flex items-center justify-between gap-4 p-8 border-b border-r border-[color:var(--line-dark)] hover:bg-[rgba(47,173,111,0.05)] transition-colors"
            >
              <span className="font-display text-lg font-medium group-hover:text-primary transition-colors">{link.label}</span>
              <ArrowUpRight className="w-5 h-5 text-ink/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </Band>

      {/* ============================================================= CTA */}
      <Band tone="pitch" className="relative overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-[40rem] h-[40rem]" style={{ background: 'radial-gradient(circle, rgba(47,173,111,0.09), transparent 60%)' }} />
        <Reveal className="relative max-w-3xl">
          <Marker num="06" label={t.ctaMarker} light />
          <h2 className="font-display font-medium leading-[0.98] text-sand" style={{ fontSize: 'clamp(2.6rem,7vw,6rem)', letterSpacing: '-0.03em' }}>
            {t.ctaTitle}<span className="accent-em">{t.ctaTitleAccent}</span>
          </h2>
          <p className="mt-7 text-lg text-sand/70 leading-relaxed">{t.ctaBody}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link to="/platforms" className={`group ${BTN.sand}`}>
              {t.startToday}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className={BTN.ghostLight}>{t.scheduleConsult}</Link>
          </div>
        </Reveal>
      </Band>
    </div>
  )
}

export default CapimaxInvestment

import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { novaContent } from '@/data/content'
import { PageHero, Band, Marker, Heading, Reveal, BTN } from '@/components/editorial'

const Nova = ({ language }) => {
  const translations = {
    en: {
      eyebrow: 'Digital Finance',
      roleMarker: 'The financing role',
      roleTitle: ['Bridging digital finance ', 'to real assets.'],
      servicesMarker: 'What Nova offers',
      servicesTitle: ['Structured ', 'financing tools.'],
      servicesSubtitle: 'Structured financing tools that support sustainable investment activity.',
      ecosystemMarker: 'Part of the ecosystem',
      ecosystemTitle: ['Connected to the ', 'wider group.'],
      ecosystemSubtitle: 'Nova bridges digital finance with the Capimax currency and investment platforms.',
      currencyCard: 'Pronova Currency',
      currencyCardDesc: 'The utility currency Nova settles and finances with across the ecosystem.',
      platformsCard: 'Capimax Platforms',
      platformsCardDesc: 'The investment platforms Nova integrates with for real-world funding.',
      explore: 'Explore',
      ctaMarker: 'Finance your next investment',
      ctaTitle: ['Let’s build something ', 'that lasts.'],
      ctaSubtitle: 'Talk to our team or start investing across the Capimax ecosystem.',
      contactUs: 'Contact Us',
      startInvesting: 'Start Investing',
    },
    ar: {
      eyebrow: 'تمويل رقمي',
      roleMarker: 'الدور التمويلي',
      roleTitle: ['ربط التمويل الرقمي ', 'بأصول حقيقية.'],
      servicesMarker: 'ما تقدمه نوفا',
      servicesTitle: ['أدوات ', 'تمويل منظمة.'],
      servicesSubtitle: 'أدوات تمويل منظمة تدعم النشاط الاستثماري المستدام.',
      ecosystemMarker: 'جزء من المنظومة',
      ecosystemTitle: ['مرتبطة ', 'بالمجموعة الأوسع.'],
      ecosystemSubtitle: 'تربط نوفا التمويل الرقمي بعملة كابي ماكس ومنصاتها الاستثمارية.',
      currencyCard: 'عملة Pronova',
      currencyCardDesc: 'العملة الخدمية التي تسوّي وتموّل بها نوفا عبر المنظومة.',
      platformsCard: 'منصات كابي ماكس',
      platformsCardDesc: 'المنصات الاستثمارية التي تتكامل معها نوفا للتمويل الحقيقي.',
      explore: 'استكشاف',
      ctaMarker: 'موّل استثمارك القادم',
      ctaTitle: ['لنبنِ شيئًا ', 'يدوم.'],
      ctaSubtitle: 'تواصل مع فريقنا أو ابدأ الاستثمار عبر منظومة كابي ماكس.',
      contactUs: 'تواصل معنا',
      startInvesting: 'ابدأ الاستثمار',
    },
  }

  const t = translations[language]
  const n = novaContent[language]

  return (
    <div className="bg-cream text-ink">
      <PageHero eyebrow={t.eyebrow} title={n.name} subtitle={n.description} />

      {/* ========================================================== ROLE */}
      <Band tone="light">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-24">
          <Reveal className="lg:sticky lg:top-28 self-start">
            <Marker num="01" label={t.roleMarker} />
            <Heading lead={t.roleTitle[0]} accent={t.roleTitle[1]} size="clamp(1.9rem,3.4vw,3rem)" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl leading-[1.6] text-ink/85">{n.role}</p>
            <p className="mt-7 text-lg text-ink/65 leading-relaxed">{n.tagline}</p>
          </Reveal>
        </div>
      </Band>

      {/* ====================================================== SERVICES */}
      <Band tone="dark">
        <Reveal className="grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <Marker num="02" label={t.servicesMarker} light />
            <Heading lead={t.servicesTitle[0]} accent={t.servicesTitle[1]} light />
          </div>
          <p className="text-lg text-sand/70 leading-relaxed lg:pb-2">{t.servicesSubtitle}</p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[color:var(--line-sand)]">
          {n.services.map((service, idx) => (
            <Reveal key={idx} delay={(idx % 4) * 0.05}>
              <div className="group flex flex-col h-full p-8 border-b border-r border-[color:var(--line-sand)] hover:bg-[rgba(47,173,111,0.05)] transition-colors relative">
                <span className="absolute top-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-500" style={{ transitionTimingFunction: 'var(--ease-out)' }} />
                <span className="font-display italic text-3xl text-primary leading-none">0{idx + 1}</span>
                <h3 className="mt-5 font-display text-lg font-medium leading-snug group-hover:text-primary transition-colors">{service}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* ===================================================== ECOSYSTEM */}
      <Band tone="light">
        <Reveal className="grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <Marker num="03" label={t.ecosystemMarker} />
            <Heading lead={t.ecosystemTitle[0]} accent={t.ecosystemTitle[1]} />
          </div>
          <p className="text-lg text-ink/70 leading-relaxed lg:pb-2">{t.ecosystemSubtitle}</p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 border-t border-l border-[color:var(--line-dark)]">
          <Reveal>
            <Link to="/currency" className="group flex flex-col h-full p-8 border-b border-r border-[color:var(--line-dark)] hover:bg-[rgba(47,173,111,0.05)] transition-colors">
              <span className="font-display italic text-3xl text-primary leading-none">¤</span>
              <h3 className="mt-5 font-display text-2xl font-medium group-hover:text-primary transition-colors">{t.currencyCard}</h3>
              <p className="mt-3 text-ink/65 leading-relaxed flex-1">{t.currencyCardDesc}</p>
              <span className="mt-7 text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all text-sm">
                {t.explore} <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <Link to="/platforms" className="group flex flex-col h-full p-8 border-b border-r border-[color:var(--line-dark)] hover:bg-[rgba(47,173,111,0.05)] transition-colors">
              <span className="font-display italic text-3xl text-primary leading-none">▦</span>
              <h3 className="mt-5 font-display text-2xl font-medium group-hover:text-primary transition-colors">{t.platformsCard}</h3>
              <p className="mt-3 text-ink/65 leading-relaxed flex-1">{t.platformsCardDesc}</p>
              <span className="mt-7 text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all text-sm">
                {t.explore} <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </Reveal>
        </div>
      </Band>

      {/* =========================================================== CTA */}
      <Band tone="pitch" className="relative overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-[40rem] h-[40rem]" style={{ background: 'radial-gradient(circle, rgba(47,173,111,0.09), transparent 60%)' }} />
        <div className="relative">
          <Reveal className="max-w-3xl">
            <Marker num="04" label={t.ctaMarker} light />
            <Heading lead={t.ctaTitle[0]} accent={t.ctaTitle[1]} light size="clamp(2.6rem,6vw,5rem)" />
            <p className="mt-7 text-lg text-sand/70 leading-relaxed">{t.ctaSubtitle}</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className={`group ${BTN.sand}`}>
                {t.contactUs}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/investors" className={BTN.ghostLight}>{t.startInvesting}</Link>
            </div>
          </Reveal>
        </div>
      </Band>
    </div>
  )
}

export default Nova

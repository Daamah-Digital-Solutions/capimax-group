import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHero, Band, Marker, Heading, Reveal, BTN } from '@/components/editorial'

const Team = ({ language }) => {
  const translations = {
    en: {
      eyebrow: 'Our People',
      title: 'Leadership ',
      accent: '& team.',
      description:
        'Meet the leadership and specialist team building Capimax Group Holding across real estate technology, asset tokenization, fractional ownership, and digital assets in the USA and UK.',
      teamMarker: 'The team',
      teamTitle: ['Specialist people, ', 'one platform.'],
      ctaMarker: 'Work with us',
      ctaTitle: ['Want to work with ', 'our team?'],
      ctaDescription:
        'Reach out to discuss platform partnerships, ecosystem opportunities, or career possibilities with our team.',
      getInTouch: 'Get in touch',
      team: [
        { role: 'Group Governance', bio: 'Sets group strategy and governance across the holding company and its licensed operating companies and platforms.' },
        { role: 'Real Estate Technology', bio: 'Builds the technology platforms that connect developers, owners, brokers, and investors across the real estate lifecycle.' },
        { role: 'Asset Tokenization & Digital Assets', bio: 'Leads the tokenization and digital-asset strategy, structuring real-world assets for on-chain ownership and transfer.' },
        { role: 'Fractional Ownership', bio: 'Designs the fractional-ownership model and investor experience that opens access to real estate and other assets.' },
        { role: 'Real Estate (UK)', bio: 'Directs UK real estate activity and platform operations across the group’s licensed British entities.' },
        { role: 'Technology & Blockchain', bio: 'Engineers the blockchain infrastructure, smart contracts, and integrations underpinning the ecosystem.' },
        { role: 'Compliance & Verification', bio: 'Maintains regulatory adherence, licensing, and verification standards across the USA and UK jurisdictions.' },
        { role: 'Partnerships', bio: 'Develops relationships with developers, brokers, liquidity providers, and platform partners across both markets.' },
      ],
    },
    ar: {
      eyebrow: 'فريقنا',
      title: 'القيادة ',
      accent: 'والفريق.',
      description:
        'تعرّف على القيادة وفريق المتخصصين الذي يبني مجموعة كابيماكس القابضة عبر تكنولوجيا العقارات وترميز الأصول والملكية الجزئية والأصول الرقمية في الولايات المتحدة والمملكة المتحدة.',
      teamMarker: 'الفريق',
      teamTitle: ['كفاءات متخصّصة، ', 'منصة واحدة.'],
      ctaMarker: 'اعمل معنا',
      ctaTitle: ['هل ترغب في العمل ', 'مع فريقنا؟'],
      ctaDescription:
        'تواصل معنا لمناقشة شراكات المنصات أو فرص المنظومة أو فرص العمل مع فريقنا.',
      getInTouch: 'تواصل معنا',
      team: [
        { role: 'حوكمة المجموعة', bio: 'تضع استراتيجية المجموعة والحوكمة عبر الشركة القابضة وشركاتها ومنصاتها التشغيلية المرخّصة.' },
        { role: 'تكنولوجيا العقارات', bio: 'تبني المنصات التقنية التي تربط المطوّرين والمُلّاك والوسطاء والمستثمرين عبر دورة حياة العقار.' },
        { role: 'ترميز الأصول والأصول الرقمية', bio: 'تقود استراتيجية الترميز والأصول الرقمية، وتهيكل الأصول الواقعية للملكية والتداول على السلسلة.' },
        { role: 'الملكية الجزئية', bio: 'تصمّم نموذج الملكية الجزئية وتجربة المستثمر التي تتيح الوصول إلى العقارات والأصول الأخرى.' },
        { role: 'العقارات (المملكة المتحدة)', bio: 'تدير النشاط العقاري وعمليات المنصات في المملكة المتحدة عبر كيانات المجموعة المرخّصة.' },
        { role: 'التكنولوجيا والبلوكشين', bio: 'تهندس بنية البلوكشين والعقود الذكية والتكاملات التي تدعم المنظومة.' },
        { role: 'الامتثال والتحقق', bio: 'تحافظ على الالتزام التنظيمي والترخيص ومعايير التحقق عبر ولايات الولايات المتحدة والمملكة المتحدة.' },
        { role: 'الشراكات', bio: 'تطوّر العلاقات مع المطوّرين والوسطاء ومزوّدي السيولة وشركاء المنصات عبر السوقين.' },
      ],
    },
  }

  const t = translations[language]

  return (
    <div className="bg-cream text-ink">
      <PageHero eyebrow={t.eyebrow} title={t.title} accent={t.accent} subtitle={t.description} />

      {/* ========================================================== TEAM */}
      <Band tone="light">
        <Reveal className="grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <Marker num="01" label={t.teamMarker} />
            <Heading lead={t.teamTitle[0]} accent={t.teamTitle[1]} />
          </div>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[color:var(--line-dark)]">
          {t.team.map((member, i) => (
            <Reveal key={i} delay={(i % 4) * 0.05}>
              <div className="group flex flex-col h-full p-8 border-b border-r border-[color:var(--line-dark)] hover:bg-[rgba(47,173,111,0.05)] transition-colors relative">
                <span className="absolute top-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-500" style={{ transitionTimingFunction: 'var(--ease-out)' }} />
                <div className="flex items-center justify-center w-16 h-16 border border-[color:var(--line-dark)] bg-forest text-sand font-display italic text-2xl font-medium group-hover:border-primary transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-6 font-display text-xl font-medium leading-snug group-hover:text-primary transition-colors">{member.role}</h3>
                <p className="mt-4 text-sm text-ink/65 leading-relaxed flex-1">{member.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* =========================================================== CTA */}
      <Band tone="pitch" className="relative overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-[40rem] h-[40rem]" style={{ background: 'radial-gradient(circle, rgba(47,173,111,0.09), transparent 60%)' }} />
        <div className="relative">
          <Reveal className="max-w-3xl">
            <Marker num="02" label={t.ctaMarker} light />
            <Heading lead={t.ctaTitle[0]} accent={t.ctaTitle[1]} light size="clamp(2.4rem,5.5vw,4.5rem)" />
            <p className="mt-7 text-lg text-sand/70 leading-relaxed">{t.ctaDescription}</p>
            <div className="mt-10">
              <Link to="/contact" className={`group ${BTN.sand}`}>
                {t.getInTouch}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </Band>
    </div>
  )
}

export default Team

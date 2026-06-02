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
        'Meet the experienced leadership and specialist team driving Capimax Group across investment, technology, compliance, and real estate.',
      teamMarker: 'The team',
      teamTitle: ['Experienced people, ', 'one mandate.'],
      ctaMarker: 'Work with us',
      ctaTitle: ['Want to work with ', 'our team?'],
      ctaDescription:
        'Reach out to discuss investment opportunities, partnerships, or career possibilities with our leadership.',
      getInTouch: 'Get in touch',
      team: [
        { role: 'Executive Leadership', bio: 'Sets group strategy, governance, and capital allocation across all Capimax companies and markets.' },
        { role: 'Investment Office', bio: 'Directs portfolio strategy and asset allocation, balancing risk and return across global markets.' },
        { role: 'Financial Management', bio: 'Oversees financial planning, reporting, and capital structure across the group portfolio.' },
        { role: 'Technology', bio: 'Builds the technology platform powering fractional ownership, analytics, and digital investor experiences.' },
        { role: 'Compliance & Governance', bio: 'Ensures regulatory adherence and robust governance across every jurisdiction the group operates in.' },
        { role: 'Real Estate', bio: 'Leads sourcing and development of residential, commercial, and hospitality real estate projects.' },
        { role: 'Digital Assets', bio: 'Manages the digital asset and tokenization strategy, bridging traditional finance with blockchain.' },
        { role: 'Partnerships', bio: 'Develops strategic partnerships and investor relations across the group’s markets.' },
      ],
    },
    ar: {
      eyebrow: 'فريقنا',
      title: 'القيادة ',
      accent: 'والفريق.',
      description:
        'تعرّف على القيادة ذات الخبرة وفريق المتخصصين الذي يقود مجموعة كابيماكس عبر الاستثمار والتكنولوجيا والامتثال والعقارات.',
      teamMarker: 'الفريق',
      teamTitle: ['خبرات متمكّنة، ', 'رؤية واحدة.'],
      ctaMarker: 'اعمل معنا',
      ctaTitle: ['هل ترغب في العمل ', 'مع فريقنا؟'],
      ctaDescription:
        'تواصل معنا لمناقشة الفرص الاستثمارية أو الشراكات أو فرص العمل مع قيادتنا.',
      getInTouch: 'تواصل معنا',
      team: [
        { role: 'القيادة التنفيذية', bio: 'تضع استراتيجية المجموعة والحوكمة وتخصيص رأس المال عبر جميع شركات كابي ماكس وأسواقها.' },
        { role: 'إدارة الاستثمار', bio: 'توجّه استراتيجية المحفظة وتوزيع الأصول، موازنةً بين المخاطر والعوائد عبر الأسواق العالمية.' },
        { role: 'الإدارة المالية', bio: 'تشرف على التخطيط المالي والتقارير وهيكل رأس المال عبر محفظة المجموعة.' },
        { role: 'التكنولوجيا', bio: 'تبني المنصة التقنية التي تدعم الملكية الجزئية والتحليلات وتجارب المستثمرين الرقمية.' },
        { role: 'الامتثال والحوكمة', bio: 'تضمن الالتزام التنظيمي والحوكمة القوية في كل ولاية قضائية تعمل بها المجموعة.' },
        { role: 'العقارات', bio: 'تقود تطوير المشاريع العقارية السكنية والتجارية والضيافة.' },
        { role: 'الأصول الرقمية', bio: 'تدير استراتيجية الأصول الرقمية والترميز لربط التمويل التقليدي بالبلوكشين.' },
        { role: 'الشراكات', bio: 'تطوّر الشراكات الاستراتيجية وعلاقات المستثمرين عبر أسواق المجموعة.' },
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

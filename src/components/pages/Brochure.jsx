import { Download, Eye, FileText, ArrowRight, Info } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHero, Band, Marker, Heading, Reveal, BTN } from '@/components/editorial'

const Brochure = ({ language }) => {
  const translations = {
    en: {
      eyebrow: 'Resources',
      title: 'Company ',
      accent: 'brochures.',
      description:
        'Download our official brochures to explore Capimax Group, our investment philosophy, and the companies across our portfolio.',
      brochuresMarker: 'Downloads',
      brochuresTitle: ['Official ', 'documents.'],
      download: 'Download',
      view: 'View',
      note: 'All brochures are PDF files that open or download directly in your browser.',
      ctaMarker: 'More resources',
      ctaTitle: ['Looking for ', 'more?'],
      ctaDescription:
        'Explore our full library of reports, certificates, and corporate documents.',
      browseAll: 'Browse all documents',
      brochures: [
        { title: 'Capimax Group Profile', description: 'A complete overview of Capimax Group, our vision, leadership, and the sectors we invest in.', fileUrl: '/brochures/capimax-group-profile.pdf', fileSize: 'PDF · 4.2 MB' },
        { title: 'Pronova Overview', description: 'An introduction to Pronova, our digital finance and asset tokenization initiative within the group.', fileUrl: '/brochures/pronova-overview.pdf', fileSize: 'PDF · 2.8 MB' },
        { title: 'Investment Opportunities', description: 'A detailed look at current fractional ownership and portfolio opportunities for investors.', fileUrl: '/brochures/capimax-investment-opportunities.pdf', fileSize: 'PDF · 3.5 MB' },
      ],
    },
    ar: {
      eyebrow: 'موارد',
      title: 'بروشورات ',
      accent: 'الشركة.',
      description:
        'قم بتنزيل بروشوراتنا الرسمية لاستكشاف مجموعة كابيماكس وفلسفتنا الاستثمارية والشركات عبر محفظتنا.',
      brochuresMarker: 'التنزيلات',
      brochuresTitle: ['المستندات ', 'الرسمية.'],
      download: 'تنزيل',
      view: 'عرض',
      note: 'جميع البروشورات ملفات PDF تُفتح أو تُنزّل مباشرة في متصفحك.',
      ctaMarker: 'مزيد من الموارد',
      ctaTitle: ['هل تبحث عن ', 'المزيد؟'],
      ctaDescription:
        'استكشف مكتبتنا الكاملة من التقارير والشهادات والمستندات المؤسسية.',
      browseAll: 'تصفح كل المستندات',
      brochures: [
        { title: 'ملف مجموعة كابيماكس', description: 'نظرة شاملة على مجموعة كابيماكس ورؤيتنا وقيادتنا والقطاعات التي نستثمر فيها.', fileUrl: '/brochures/capimax-group-profile.pdf', fileSize: 'PDF · 4.2 ميجابايت' },
        { title: 'نظرة عامة على برونوفا', description: 'مقدمة عن برونوفا، مبادرتنا في التمويل الرقمي وترميز الأصول ضمن المجموعة.', fileUrl: '/brochures/pronova-overview.pdf', fileSize: 'PDF · 2.8 ميجابايت' },
        { title: 'الفرص الاستثمارية', description: 'نظرة تفصيلية على فرص الملكية الجزئية والمحفظة الحالية للمستثمرين.', fileUrl: '/brochures/capimax-investment-opportunities.pdf', fileSize: 'PDF · 3.5 ميجابايت' },
      ],
    },
  }

  const t = translations[language]

  return (
    <div className="bg-cream text-ink">
      <PageHero eyebrow={t.eyebrow} title={t.title} accent={t.accent} subtitle={t.description} />

      {/* ===================================================== BROCHURES */}
      <Band tone="light">
        <Reveal className="grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <Marker num="01" label={t.brochuresMarker} />
            <Heading lead={t.brochuresTitle[0]} accent={t.brochuresTitle[1]} />
          </div>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[color:var(--line-dark)]">
          {t.brochures.map((brochure, i) => (
            <Reveal key={brochure.fileUrl} delay={(i % 3) * 0.05}>
              <div className="group flex flex-col h-full p-8 border-b border-r border-[color:var(--line-dark)] hover:bg-[rgba(47,173,111,0.05)] transition-colors relative">
                <span className="absolute top-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-500" style={{ transitionTimingFunction: 'var(--ease-out)' }} />
                <FileText className="h-9 w-9 text-primary" />
                <h3 className="mt-6 font-display text-xl font-medium leading-snug group-hover:text-primary transition-colors">{brochure.title}</h3>
                <div className="mono-label text-ink/45 mt-2" style={{ fontSize: '0.6rem' }}>{brochure.fileSize}</div>
                <p className="mt-4 text-sm text-ink/65 leading-relaxed flex-1">{brochure.description}</p>
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <a href={brochure.fileUrl} download target="_blank" rel="noopener noreferrer" className={`group/btn flex-1 ${BTN.forest}`}>
                    <Download className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                    {t.download}
                  </a>
                  <a href={brochure.fileUrl} target="_blank" rel="noopener noreferrer" className={`flex-1 ${BTN.ghostDark}`}>
                    <Eye className="w-4 h-4" />
                    {t.view}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex items-center gap-2 text-sm text-ink/60">
          <Info className="h-4 w-4 text-primary" />
          <span>{t.note}</span>
        </Reveal>
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
              <Link to="/documents" className={`group ${BTN.sand}`}>
                {t.browseAll}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </Band>
    </div>
  )
}

export default Brochure

import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PageHero, Band, Reveal, BTN } from '@/components/editorial'

const Legal = ({ language }) => {
  const { doc } = useParams()

  const content = {
    privacy: {
      en: {
        title: 'Privacy ',
        accent: 'Policy',
        eyebrow: 'Legal',
        intro: 'This Privacy Policy explains how Capimax Group collects, uses, and protects your personal information.',
        sections: [
          { h: 'Information We Collect', p: 'We collect information you provide directly (such as contact details when you enquire) and data collected automatically when you use our website.' },
          { h: 'How We Use Information', p: 'We use your information to respond to enquiries, provide investment information, comply with regulatory obligations, and improve our services.' },
          { h: 'Data Protection', p: 'We apply appropriate technical and organizational measures to safeguard your data across all Capimax entities and platforms.' },
          { h: 'Contact', p: 'For privacy questions, contact us at info@capimaxgroup.com.' },
        ],
      },
      ar: {
        title: 'سياسة ',
        accent: 'الخصوصية',
        eyebrow: 'قانوني',
        intro: 'توضح سياسة الخصوصية هذه كيفية جمع مجموعة كابي ماكس لمعلوماتك الشخصية واستخدامها وحمايتها.',
        sections: [
          { h: 'المعلومات التي نجمعها', p: 'نجمع المعلومات التي تقدمها مباشرة (مثل بيانات الاتصال عند الاستفسار) والبيانات التي تُجمع تلقائيًا عند استخدامك للموقع.' },
          { h: 'كيف نستخدم المعلومات', p: 'نستخدم معلوماتك للرد على الاستفسارات وتقديم المعلومات الاستثمارية والامتثال للالتزامات التنظيمية وتحسين خدماتنا.' },
          { h: 'حماية البيانات', p: 'نطبّق تدابير تقنية وتنظيمية مناسبة لحماية بياناتك عبر جميع كيانات ومنصات كابي ماكس.' },
          { h: 'التواصل', p: 'للأسئلة المتعلقة بالخصوصية، تواصل معنا على info@capimaxgroup.com.' },
        ],
      },
    },
    terms: {
      en: {
        title: 'Terms of ',
        accent: 'Service',
        eyebrow: 'Legal',
        intro: 'These Terms govern your use of the Capimax Group website and services.',
        sections: [
          { h: 'Use of the Site', p: 'The content on this website is provided for general information and does not constitute investment advice or an offer of securities.' },
          { h: 'Investments', p: 'All investments carry risk. Past performance is not indicative of future results. Seek independent advice before investing.' },
          { h: 'Intellectual Property', p: 'All trademarks, logos, and content are the property of Capimax Group and its subsidiaries.' },
          { h: 'Contact', p: 'For questions about these Terms, contact info@capimaxgroup.com.' },
        ],
      },
      ar: {
        title: 'شروط ',
        accent: 'الخدمة',
        eyebrow: 'قانوني',
        intro: 'تحكم هذه الشروط استخدامك لموقع وخدمات مجموعة كابي ماكس.',
        sections: [
          { h: 'استخدام الموقع', p: 'المحتوى على هذا الموقع مقدّم لأغراض المعلومات العامة ولا يُعد نصيحة استثمارية أو عرضًا لأوراق مالية.' },
          { h: 'الاستثمارات', p: 'كل الاستثمارات تنطوي على مخاطر. الأداء السابق لا يضمن النتائج المستقبلية. اطلب استشارة مستقلة قبل الاستثمار.' },
          { h: 'الملكية الفكرية', p: 'جميع العلامات التجارية والشعارات والمحتوى ملك لمجموعة كابي ماكس وشركاتها التابعة.' },
          { h: 'التواصل', p: 'للأسئلة حول هذه الشروط، تواصل على info@capimaxgroup.com.' },
        ],
      },
    },
    cookies: {
      en: {
        title: 'Cookie ',
        accent: 'Policy',
        eyebrow: 'Legal',
        intro: 'This Cookie Policy explains how we use cookies and similar technologies on our website.',
        sections: [
          { h: 'What Are Cookies', p: 'Cookies are small text files stored on your device that help the website function and improve your experience.' },
          { h: 'How We Use Cookies', p: 'We use cookies for essential functionality, analytics, and to remember your preferences such as theme.' },
          { h: 'Managing Cookies', p: 'You can control or delete cookies through your browser settings at any time.' },
          { h: 'Contact', p: 'For questions about cookies, contact info@capimaxgroup.com.' },
        ],
      },
      ar: {
        title: 'سياسة ',
        accent: 'ملفات تعريف الارتباط',
        eyebrow: 'قانوني',
        intro: 'توضح سياسة ملفات تعريف الارتباط هذه كيفية استخدامنا لها وللتقنيات المشابهة على موقعنا.',
        sections: [
          { h: 'ما هي ملفات تعريف الارتباط', p: 'هي ملفات نصية صغيرة تُخزَّن على جهازك تساعد الموقع على العمل وتحسين تجربتك.' },
          { h: 'كيف نستخدمها', p: 'نستخدمها للوظائف الأساسية والتحليلات ولتذكّر تفضيلاتك مثل المظهر.' },
          { h: 'إدارة ملفات تعريف الارتباط', p: 'يمكنك التحكم بها أو حذفها من إعدادات المتصفح في أي وقت.' },
          { h: 'التواصل', p: 'للأسئلة، تواصل على info@capimaxgroup.com.' },
        ],
      },
    },
  }

  const back = { en: 'Back to Home', ar: 'العودة للرئيسية' }
  const entry = content[doc] || content.privacy
  const c = entry[language]

  return (
    <div className="bg-cream text-ink">
      <PageHero eyebrow={c.eyebrow} title={c.title} accent={c.accent} subtitle={c.intro} />

      <Band tone="light" containerClassName="max-w-3xl">
        <Reveal>
          <div className="border-t border-[color:var(--line-dark)]">
            {c.sections.map((s, i) => (
              <div key={i} className="py-9 border-b border-[color:var(--line-dark)]">
                <div className="flex items-baseline gap-4">
                  <span className="font-display italic text-2xl text-primary leading-none">0{i + 1}</span>
                  <h2 className="font-display text-2xl font-medium leading-snug">{s.h}</h2>
                </div>
                <p className="mt-4 text-ink/70 leading-relaxed">{s.p}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/" className={`group ${BTN.ghostDark}`}>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              {back[language]}
            </Link>
          </div>
        </Reveal>
      </Band>
    </div>
  )
}

export default Legal

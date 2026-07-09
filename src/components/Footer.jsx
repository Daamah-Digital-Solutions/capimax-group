import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Facebook, ArrowUpRight, ArrowRight } from 'lucide-react'
import capimaxLogo from '@/assets/capimax-group-logo.png'

const Footer = ({ language }) => {
  const [email, setEmail] = useState('')
  const isAr = language === 'ar'

  const t = {
    en: {
      ctaEyebrow: 'Begin a conversation',
      ctaTitle: ['Let’s build something ', 'that lasts.'],
      ctaBtn: 'Get in touch',
      about: 'A Delaware-registered holding company turning real-world real estate into transparent, fractional, and verifiable ownership across the USA and UK.',
      navTitle: 'Navigate',
      exploreTitle: 'Explore',
      contactTitle: 'Get in touch',
      nav: [['Home', '/'], ['About', '/about'], ['Companies', '/companies'], ['Platforms', '/platforms'], ['Ownership', '/investors'], ['Contact', '/contact']],
      explore: [['Sectors', '/sectors'], ['Documents', '/documents'], ['Team', '/team'], ['Brochure', '/brochure'], ['News', '/news'], ['Partners', '/partners']],
      offices: [
        { region: 'United States', address: 'Delaware, United States', phone: '+1 205-360-0594', phoneHref: 'tel:+12053600594' },
        { region: 'United Kingdom', address: '128 City Road, London, EC1V 2NX, United Kingdom', phone: '+44 7577 370309', phoneHref: 'tel:+447577370309' },
      ],
      rights: '© 2026 Capimax Group · All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      tagline: 'WE BUILD ENDURING OWNERSHIP',
    },
    ar: {
      ctaEyebrow: 'ابدأ محادثة',
      ctaTitle: ['لنبنِ شيئًا ', 'يدوم.'],
      ctaBtn: 'تواصل معنا',
      about: 'شركة قابضة مسجّلة في ولاية ديلاوير الأمريكية، تحوّل العقارات الواقعية إلى ملكية شفافة وجزئية وقابلة للتحقّق عبر الولايات المتحدة والمملكة المتحدة.',
      navTitle: 'تصفّح',
      exploreTitle: 'استكشف',
      contactTitle: 'تواصل',
      nav: [['الرئيسية', '/'], ['من نحن', '/about'], ['الشركات', '/companies'], ['المنصات', '/platforms'], ['التملّك', '/investors'], ['تواصل', '/contact']],
      explore: [['القطاعات', '/sectors'], ['المستندات', '/documents'], ['الفريق', '/team'], ['البروشور', '/brochure'], ['الأخبار', '/news'], ['الشركاء', '/partners']],
      offices: [
        { region: 'الولايات المتحدة', address: 'ديلاوير، الولايات المتحدة', phone: '+1 205-360-0594', phoneHref: 'tel:+12053600594' },
        { region: 'المملكة المتحدة', address: '128 سيتي رود، لندن، EC1V 2NX، المملكة المتحدة', phone: '+44 7577 370309', phoneHref: 'tel:+447577370309' },
      ],
      rights: '© 2026 مجموعة كابي ماكس · جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الاستخدام',
      tagline: 'نبني تملّكًا يدوم',
    },
  }[language]

  const socials = [
    { Icon: Linkedin, url: 'https://www.linkedin.com/company/capimax-group' },
    { Icon: Twitter, url: 'https://x.com/capimaxgroup' },
    { Icon: Facebook, url: 'https://www.facebook.com/capimaxgroup' },
  ]

  const onSubscribe = (e) => {
    e.preventDefault()
    window.location.href = `mailto:info@capimaxgroup.com?subject=${encodeURIComponent('Newsletter')}&body=${encodeURIComponent('Subscribe: ' + email)}`
  }

  const colHead = 'mono-label text-primary mb-6'
  const linkCls = 'block py-1.5 text-sand/65 hover:text-sand hover:pl-1 transition-all duration-300'

  return (
    <footer className="bg-forest text-sand relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[36rem] h-[36rem]" style={{ background: 'radial-gradient(circle, rgba(47,173,111,0.07), transparent 60%)' }} />

      {/* CTA strip */}
      <div className="relative max-w-[1480px] mx-auto px-6 lg:px-12 py-16 lg:py-20 border-b border-[color:var(--line-sand)] grid lg:grid-cols-[1.5fr_1fr] gap-8 items-center">
        <div>
          <span className="eyebrow inline-flex items-center gap-3 text-sand/55">
            <span className="h-px w-8 bg-primary" />
            {t.ctaEyebrow}
          </span>
          <h2 className="mt-4 font-display font-medium leading-tight" style={{ fontSize: 'clamp(1.9rem,4vw,3.4rem)', letterSpacing: '-0.02em' }}>
            {t.ctaTitle[0]}<span className="accent-em">{t.ctaTitle[1]}</span>
          </h2>
        </div>
        <div className="lg:justify-self-end">
          <Link to="/contact" className="group inline-flex items-center gap-2 bg-sand text-forest-pitch font-semibold px-7 py-4 hover:bg-[color:var(--color-sand-light)] transition-colors">
            {t.ctaBtn}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Main */}
      <div className="relative max-w-[1480px] mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2.2fr_1fr_1fr_1.4fr] gap-12">
        {/* Brand */}
        <div>
          <Link to="/">
            <img src={capimaxLogo} alt="Capimax Group" className="h-9 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
          </Link>
          <p className="mt-6 text-sm text-sand/55 leading-relaxed max-w-sm">{t.about}</p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ Icon, url }, i) => (
              <a key={i} href={url} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 border border-[color:var(--line-sand-mid)] flex items-center justify-center text-sand/70 hover:bg-sand hover:text-forest-pitch hover:-translate-y-0.5 transition-all">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          {/* Newsletter */}
          <form onSubmit={onSubscribe} className="mt-7 flex max-w-sm border border-[color:var(--line-sand-mid)]">
            <input
              type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder={isAr ? 'بريدك الإلكتروني' : 'Your email'}
              className="flex-1 bg-transparent px-4 py-3 text-sm text-sand placeholder:text-sand/40 focus:outline-none"
            />
            <button type="submit" className="px-4 bg-sand text-forest-pitch hover:bg-[color:var(--color-sand-light)] transition-colors" aria-label="Subscribe">
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Navigate */}
        <div>
          <h4 className={colHead}>{t.navTitle}</h4>
          {t.nav.map(([name, path]) => (
            <Link key={path} to={path} className={linkCls}>{name}</Link>
          ))}
        </div>

        {/* Explore */}
        <div>
          <h4 className={colHead}>{t.exploreTitle}</h4>
          {t.explore.map(([name, path]) => (
            <Link key={path} to={path} className={linkCls}>{name}</Link>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 className={colHead}>{t.contactTitle}</h4>
          <a href="mailto:info@capimaxgroup.com" className={linkCls}>info@capimaxgroup.com</a>
          <div className="mt-4 space-y-4">
            {t.offices.map((office) => (
              <div key={office.region}>
                <p className="mono-label text-sand/80 text-xs mb-1">{office.region}</p>
                <p className="text-sand/55 text-sm leading-relaxed">{office.address}</p>
                <a href={office.phoneHref} dir="ltr" className={`block text-sand/55 hover:text-sand text-sm leading-relaxed transition-colors ${isAr ? 'text-right' : ''}`}>{office.phone}</a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-[color:var(--line-sand)]">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="mono-label text-sand/45" style={{ fontSize: '0.62rem' }}>{t.rights}</p>
          <div className="flex items-center gap-6">
            <Link to="/legal/privacy" className="mono-label text-sand/45 hover:text-sand transition-colors" style={{ fontSize: '0.62rem' }}>{t.privacy}</Link>
            <Link to="/legal/terms" className="mono-label text-sand/45 hover:text-sand transition-colors" style={{ fontSize: '0.62rem' }}>{t.terms}</Link>
            <span className="mono-label text-primary hidden md:inline" style={{ fontSize: '0.62rem' }}>{t.tagline}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

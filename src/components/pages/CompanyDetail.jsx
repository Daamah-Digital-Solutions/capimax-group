import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Building2,
  MapPin,
  ArrowLeft,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  ArrowUpRight,
} from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { companyRegistry } from '@/data/companies'
import { companyContent } from '@/data/content'
import { getCompanyLogo } from '@/data/logos'
import { Band, Marker, Heading, Eyebrow, Reveal, BTN, EASE } from '@/components/editorial'

const CompanyDetail = ({ language }) => {
  const { id } = useParams()

  const translations = {
    en: {
      backToCompanies: 'Back to Companies',
      overviewMarker: 'Company Overview',
      roleMarker: 'Role in the Group',
      servicesMarker: 'Services & Activities',
      activitiesMarker: 'Business Activities',
      keyInfoMarker: 'Key Information',
      contactMarker: 'Contact',
      relatedMarker: 'Related Links',
      companyNumber: 'Company Number',
      incorporated: 'Incorporated',
      location: 'Location',
      sector: 'Sector',
      status: 'Status',
      active: 'Active',
      notFound: 'Company Not Found',
      notFoundDesc: 'The company you are looking for does not exist or has been moved.',
      subsidiaryOf: 'Subsidiary of',
      exploreGroup: 'Explore the Group',
      visitPlatforms: 'Our Platforms',
      forInvestors: 'For Investors',
      overviewTitle: 'A focused entity ',
      overviewAccent: 'within the group.',
      roleTitle: 'Its mandate ',
      roleAccent: 'in the ecosystem.',
      whatWeDo: 'What we do',
      activitiesTitle: 'Registered ',
      activitiesAccent: 'activities.',
    },
    ar: {
      backToCompanies: 'العودة إلى الشركات',
      overviewMarker: 'نظرة عامة على الشركة',
      roleMarker: 'الدور داخل المجموعة',
      servicesMarker: 'الخدمات والأنشطة',
      activitiesMarker: 'الأنشطة التجارية',
      keyInfoMarker: 'المعلومات الرئيسية',
      contactMarker: 'التواصل',
      relatedMarker: 'روابط ذات صلة',
      companyNumber: 'رقم الشركة',
      incorporated: 'تاريخ التأسيس',
      location: 'الموقع',
      sector: 'القطاع',
      status: 'الحالة',
      active: 'نشط',
      notFound: 'الشركة غير موجودة',
      notFoundDesc: 'الشركة التي تبحث عنها غير موجودة أو تم نقلها.',
      subsidiaryOf: 'شركة تابعة لـ',
      exploreGroup: 'استكشف المجموعة',
      visitPlatforms: 'منصاتنا',
      forInvestors: 'للمستثمرين',
      overviewTitle: 'كيان متخصص ',
      overviewAccent: 'ضمن المجموعة.',
      roleTitle: 'دورها ',
      roleAccent: 'في المنظومة.',
      whatWeDo: 'ما نقوم به',
      activitiesTitle: 'الأنشطة ',
      activitiesAccent: 'المسجّلة.',
    },
  }

  const t = translations[language]
  const meta = companyRegistry[id]
  const copy = companyContent[id]?.[language]

  if (!meta) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream text-ink px-6">
        <div className="text-center max-w-md">
          <Building2 className="h-14 w-14 text-primary mx-auto mb-6" />
          <h1 className="font-display font-medium text-3xl mb-3">{t.notFound}</h1>
          <p className="text-ink/65 mb-8 leading-relaxed">{t.notFoundDesc}</p>
          <Link to="/companies" className={`group ${BTN.forest}`}>
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {t.backToCompanies}
          </Link>
        </div>
      </div>
    )
  }

  const name = copy?.name || meta.legalName
  const description = copy?.description || ''
  const role = copy?.role
  const services = copy?.services || []
  const Icon = meta.icon || Building2
  const logo = getCompanyLogo(id, 'dark') // hero is dark -> light logo asset

  const keyInfo = [
    [t.companyNumber, meta.companyNumber],
    [t.incorporated, meta.incorporated],
    [t.location, meta.location],
    [t.sector, meta.sector],
  ].filter(([, value]) => value)

  return (
    <div className="bg-cream text-ink">
      {/* ============================================================ HERO */}
      <section className="relative bg-forest-pitch text-sand pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
        <div className="absolute -top-20 right-0 w-[34rem] h-[34rem]" style={{ background: 'radial-gradient(circle, rgba(47,173,111,0.12), transparent 60%)' }} />
        <Container size="xl" className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE }}>
            <Link
              to="/companies"
              className="group inline-flex items-center gap-2 mono-label text-sand/55 hover:text-sand transition-colors"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              {t.backToCompanies}
            </Link>

            <div className="mt-10 grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-center">
              <div>
                <Eyebrow light>
                  <span>{meta.countryFlag} {meta.sector}</span>
                </Eyebrow>
                <h1 className="mt-6 font-display font-medium leading-[1.04] text-balance" style={{ fontSize: 'clamp(2.4rem,5.5vw,4.8rem)', letterSpacing: '-0.03em' }}>
                  {name}
                </h1>
                <p className="mt-5 mono-label text-sand/45" style={{ fontSize: '0.62rem' }}>{meta.legalName}</p>
                {meta.parentCompany && (
                  <p className="mt-6 text-sm text-sand/60">
                    <span className="text-sand/40">{t.subsidiaryOf}: </span>
                    {meta.parentCompany}
                  </p>
                )}
              </div>

              {/* Big logo plate */}
              <div className="flex items-center justify-center lg:justify-end">
                <div className="w-full max-w-sm aspect-[4/3] border border-[color:var(--line-sand)] flex items-center justify-center p-10">
                  {logo ? (
                    <img src={logo} alt={name} className="max-h-full max-w-full object-contain" />
                  ) : (
                    <Icon className="w-24 h-24 text-primary" />
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ======================================================== OVERVIEW */}
      {description && (
        <Band tone="light">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-14 lg:gap-24">
            <Reveal className="lg:sticky lg:top-28 self-start">
              <Marker num="01" label={t.overviewMarker} />
              <Heading lead={t.overviewTitle} accent={t.overviewAccent} size="clamp(2rem,3.6vw,3.2rem)" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl leading-[1.55] text-ink/85">
                <span className="font-display italic text-primary float-left mr-3 leading-[0.8]" style={{ fontSize: '4.5rem' }}>
                  {language === 'ar' ? '«' : name.charAt(0)}
                </span>
                {description}
              </p>
            </Reveal>
          </div>
        </Band>
      )}

      {/* ============================================================ ROLE */}
      {role && (
        <Band tone="darker">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-14 lg:gap-24">
            <Reveal className="lg:sticky lg:top-28 self-start">
              <Marker num="02" label={t.roleMarker} light />
              <Heading lead={t.roleTitle} accent={t.roleAccent} light size="clamp(2rem,3.6vw,3.2rem)" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl leading-[1.6] text-sand/80">{role}</p>
              <div className="mt-10 border-l-2 border-accent pl-6 py-1">
                <p className="font-display italic text-2xl text-sand/85 leading-snug">{copy?.tagline}</p>
              </div>
            </Reveal>
          </div>
        </Band>
      )}

      {/* ======================================================== SERVICES */}
      {services.length > 0 && (
        <Band tone="light">
          <Reveal>
            <Marker num="03" label={t.servicesMarker} />
            <Heading lead={t.whatWeDo} size="clamp(2rem,4vw,3.4rem)" />
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[color:var(--line-dark)]">
            {services.map((service, i) => (
              <Reveal key={i} delay={(i % 3) * 0.05}>
                <div className="group flex items-start gap-4 p-8 border-b border-r border-[color:var(--line-dark)] hover:bg-[rgba(47,173,111,0.04)] transition-colors h-full">
                  <span className="font-display italic text-2xl text-primary leading-none">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-display text-lg font-medium leading-snug">{service}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Band>
      )}

      {/* ===================================================== ACTIVITIES */}
      <Band tone="paper">
        <Reveal>
          <Marker num="04" label={t.activitiesMarker} />
          <Heading lead={t.activitiesTitle} accent={t.activitiesAccent} size="clamp(2rem,4vw,3.4rem)" />
        </Reveal>
        <div className="mt-12 border-t border-[color:var(--line-dark)]">
          {meta.activities.map((activity, i) => (
            <Reveal key={i}>
              <div className="group grid grid-cols-[48px_1fr] md:grid-cols-[80px_1fr_48px] gap-5 items-center py-6 border-b border-[color:var(--line-dark)] hover:px-3 transition-all duration-500" style={{ transitionTimingFunction: 'var(--ease-out)' }}>
                <span className="font-display italic text-2xl text-primary">0{i + 1}.</span>
                <h3 className="font-display text-xl md:text-2xl font-medium">{activity}</h3>
                <ArrowRight className="hidden md:block w-5 h-5 text-ink/30 group-hover:text-primary group-hover:translate-x-2 transition-all justify-self-end" />
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* ============================================== KEY INFO + CONTACT */}
      <Band tone="dark">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Key Information */}
          <Reveal>
            <Marker num="05" label={t.keyInfoMarker} light />
            <div className="grid sm:grid-cols-2 gap-y-8 gap-x-10">
              {keyInfo.map(([label, value], i) => (
                <div key={i}>
                  <div className="mono-label text-sand/45" style={{ fontSize: '0.62rem' }}>{label}</div>
                  <div className="font-display text-lg mt-1 text-sand">{value}</div>
                </div>
              ))}
              <div>
                <div className="mono-label text-sand/45" style={{ fontSize: '0.62rem' }}>{t.status}</div>
                <div className="font-display text-lg mt-1 text-primary">{t.active}</div>
              </div>
            </div>
          </Reveal>

          {/* Contact */}
          <Reveal delay={0.1}>
            <Marker num="06" label={t.contactMarker} light />
            <div className="space-y-5">
              <a href={meta.website} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-sand/80 hover:text-sand transition-colors">
                <Globe className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">capimaxgroup.com</span>
                <ArrowUpRight className="w-4 h-4 text-sand/40 group-hover:text-primary ml-auto transition-colors" />
              </a>
              <a href={`mailto:${meta.email}`} className="flex items-center gap-4 text-sand/80 hover:text-sand transition-colors">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">{meta.email}</span>
              </a>
              {meta.phone && (
                <a href={`tel:${meta.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 text-sand/80 hover:text-sand transition-colors">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm">{meta.phone}</span>
                </a>
              )}
              <div className="flex items-start gap-4 text-sand/80">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">{meta.location}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Band>

      {/* ==================================================== RELATED LINKS */}
      <Band tone="pitch" className="relative overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-[40rem] h-[40rem]" style={{ background: 'radial-gradient(circle, rgba(47,173,111,0.09), transparent 60%)' }} />
        <Reveal className="relative">
          <Marker num="07" label={t.relatedMarker} light />
          <div className="grid sm:grid-cols-3 border-t border-l border-[color:var(--line-sand)]">
            {[
              { to: '/companies', label: t.exploreGroup },
              { to: '/platforms', label: t.visitPlatforms },
              { to: '/investors', label: t.forInvestors },
            ].map((link, i) => (
              <Link
                key={i}
                to={link.to}
                className="group flex items-center justify-between gap-4 p-8 border-b border-r border-[color:var(--line-sand)] hover:bg-[rgba(47,173,111,0.05)] transition-colors"
              >
                <span className="font-display text-lg font-medium group-hover:text-primary transition-colors">{link.label}</span>
                <ArrowRight className="w-5 h-5 text-sand/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/companies" className={`group ${BTN.ghostLight}`}>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              {t.backToCompanies}
            </Link>
          </div>
        </Reveal>
      </Band>
    </div>
  )
}

export default CompanyDetail

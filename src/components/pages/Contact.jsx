import { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Globe,
} from 'lucide-react'
import { PageHero, Band, Marker, Reveal, BTN } from '@/components/editorial'

const Contact = ({ language }) => {
  const isAr = language === 'ar'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  })

  const translations = {
    en: {
      pageTitle: 'Contact ',
      pageTitleAccent: 'us.',
      pageEyebrow: 'Get in touch',
      pageSubtitle: 'Get in touch with our team about fractional ownership, asset tokenization, our platforms, partnerships, or general inquiries.',
      getInTouch: 'Get in Touch',
      contactForm: 'Contact Form',
      contactFormAccent: 'a message.',
      contactFormLead: 'Send us ',
      officeLocations: 'Office ',
      officeLocationsAccent: 'locations.',
      businessHours: 'Business Hours',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      subject: 'Subject',
      message: 'Message',
      inquiryType: 'Inquiry Type',
      general: 'General Inquiry',
      fractional: 'Fractional Ownership',
      tokenization: 'Asset Tokenization',
      platforms: 'Platforms / Capimax BRX',
      partnership: 'Partnerships',
      media: 'Media & Press',
      sendMessage: 'Send Message',
      required: 'Required',
      optional: 'Optional',
      headquarters: 'Headquarters',
      operations: 'Registered Office',
      weekdays: 'Monday - Friday',
      weekends: 'Saturday - Sunday',
      closed: 'Closed',
      responseTime: 'Response Time',
      responseTimeDesc: 'We typically respond within 24 hours during business days.',
      emergencyContact: 'Direct Line',
      emergencyDesc: 'For time-sensitive partnership or platform matters, reach our team directly.',
      newsletter: 'Newsletter',
      newsletterAccent: 'informed.',
      newsletterLead: 'Stay ',
      newsletterDesc: 'Subscribe to receive updates on our platforms, tokenization launches, and company news.',
      formMarker: 'Send a message',
      infoMarker: 'Direct contacts',
      officesMarker: 'Where we are',
      newsletterMarker: 'Newsletter',
      visitOffices: 'Reach us at our offices in the United States and United Kingdom.',
      subscribe: 'Subscribe',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      websiteLabel: 'Website',
      subjectPlaceholder: 'Fractional ownership inquiry',
    },
    ar: {
      pageTitle: 'اتصل ',
      pageTitleAccent: 'بنا.',
      pageEyebrow: 'تواصل معنا',
      pageSubtitle: 'تواصل مع فريقنا بشأن الملكية الجزئية أو ترميز الأصول أو منصاتنا أو الشراكات أو الاستفسارات العامة.',
      getInTouch: 'تواصل معنا',
      contactForm: 'نموذج الاتصال',
      contactFormAccent: 'رسالة.',
      contactFormLead: 'أرسل لنا ',
      officeLocations: 'مواقع ',
      officeLocationsAccent: 'المكاتب.',
      businessHours: 'ساعات العمل',
      name: 'الاسم الكامل',
      email: 'عنوان البريد الإلكتروني',
      phone: 'رقم الهاتف',
      subject: 'الموضوع',
      message: 'الرسالة',
      inquiryType: 'نوع الاستفسار',
      general: 'استفسار عام',
      fractional: 'الملكية الجزئية',
      tokenization: 'ترميز الأصول',
      platforms: 'المنصات / كابيماكس BRX',
      partnership: 'الشراكات',
      media: 'الإعلام والصحافة',
      sendMessage: 'إرسال الرسالة',
      required: 'مطلوب',
      optional: 'اختياري',
      headquarters: 'المقر الرئيسي',
      operations: 'المكتب المسجّل',
      weekdays: 'الاثنين - الجمعة',
      weekends: 'السبت - الأحد',
      closed: 'مغلق',
      responseTime: 'وقت الاستجابة',
      responseTimeDesc: 'نحن عادة نرد خلال 24 ساعة خلال أيام العمل.',
      emergencyContact: 'خط مباشر',
      emergencyDesc: 'للأمور العاجلة المتعلقة بالشراكات أو المنصات، تواصل مع فريقنا مباشرة.',
      newsletter: 'النشرة الإخبارية',
      newsletterAccent: 'على اطلاع.',
      newsletterLead: 'ابق ',
      newsletterDesc: 'اشترك لتلقي التحديثات حول منصاتنا وإطلاقات الترميز وأخبار الشركة.',
      formMarker: 'أرسل رسالة',
      infoMarker: 'جهات اتصال مباشرة',
      officesMarker: 'أين نحن',
      newsletterMarker: 'النشرة الإخبارية',
      visitOffices: 'تواصل معنا في مكتبينا بالولايات المتحدة والمملكة المتحدة.',
      subscribe: 'اشترك',
      emailLabel: 'البريد الإلكتروني',
      phoneLabel: 'الهاتف',
      websiteLabel: 'الموقع الإلكتروني',
      subjectPlaceholder: 'استفسار عن الملكية الجزئية',
    }
  }

  const t = translations[language]

  // NOTE: Office address & phone are placeholders pending final client data.
  const addressTBD = isAr ? 'العنوان — يُحدَّد لاحقًا' : 'Address — to be confirmed'
  const phoneTBD = isAr ? 'الهاتف — يُحدَّد لاحقًا' : 'Phone — to be confirmed'

  const offices = [
    {
      id: 'usa',
      city: isAr ? 'الولايات المتحدة' : 'United States',
      country: isAr ? 'ديلاوير' : 'Delaware',
      flag: '🇺🇸',
      type: t.headquarters,
      address: addressTBD,
      phone: phoneTBD,
      email: 'usa@capimaxgroup.com',
      hours: {
        weekdays: '9:00 AM - 6:00 PM EST',
        weekends: t.closed
      }
    },
    {
      id: 'uk',
      city: isAr ? 'المملكة المتحدة' : 'United Kingdom',
      country: isAr ? 'لندن' : 'London',
      flag: '🇬🇧',
      type: t.operations,
      address: addressTBD,
      phone: phoneTBD,
      email: 'uk@capimaxgroup.com',
      hours: {
        weekdays: '9:00 AM - 6:00 PM GMT',
        weekends: t.closed
      }
    }
  ]

  const inquiryTypes = [
    { value: 'general', label: t.general },
    { value: 'fractional', label: t.fractional },
    { value: 'tokenization', label: t.tokenization },
    { value: 'platforms', label: t.platforms },
    { value: 'partnership', label: t.partnership },
    { value: 'media', label: t.media }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  // Shared input class for light bands (hairline, sharp corners).
  const inputClass = 'w-full bg-transparent border border-[color:var(--line-dark)] px-4 py-3 text-ink placeholder:text-ink/40 focus:border-primary outline-none transition-colors'
  const labelClass = 'mono-label text-ink/55 block mb-2'

  return (
    <div className="bg-cream text-ink">
      <PageHero
        eyebrow={t.pageEyebrow}
        title={t.pageTitle}
        accent={t.pageTitleAccent}
        subtitle={t.pageSubtitle}
      />

      {/* ===================================================== FORM + INFO */}
      <Band tone="light">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-14 lg:gap-20">
          {/* Form */}
          <Reveal>
            <Marker num="01" label={t.formMarker} light />
            <h2 className="font-display font-medium leading-[1.04]" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', letterSpacing: '-0.025em' }}>
              {t.contactFormLead}<span className="accent-em">{t.contactFormAccent}</span>
            </h2>

            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>{t.name} *</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="John Doe"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>{t.email} *</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>{t.phone} ({t.optional})</label>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>{t.inquiryType} *</label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    required
                    className={inputClass}
                  >
                    {inquiryTypes.map(type => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClass}>{t.subject} *</label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder={t.subjectPlaceholder}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>{t.message} *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  placeholder="Please provide details about your inquiry..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button type="submit" className={`group w-full ${BTN.forest}`}>
                <Send className="w-4 h-4" />
                {t.sendMessage}
              </button>
            </form>
          </Reveal>

          {/* Direct contacts */}
          <Reveal delay={0.1}>
            <Marker num="02" label={t.infoMarker} light />

            <div className="border-t border-l border-[color:var(--line-dark)]">
              <div className="p-7 border-b border-r border-[color:var(--line-dark)]">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-lg font-medium text-ink">{t.responseTime}</h3>
                </div>
                <p className="mt-3 text-sm text-ink/60 leading-relaxed">{t.responseTimeDesc}</p>
              </div>

              <div className="p-7 border-b border-r border-[color:var(--line-dark)]">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-lg font-medium text-ink">{t.emergencyContact}</h3>
                </div>
                <p className="mt-3 text-sm text-ink/60 leading-relaxed">{t.emergencyDesc}</p>
                <span className="mt-3 inline-block text-ink/50 italic text-sm">{phoneTBD}</span>
              </div>

              <a href="mailto:info@capimaxgroup.com" className="group flex items-center gap-4 p-7 border-b border-r border-[color:var(--line-dark)] hover:bg-[rgba(47,173,111,0.05)] transition-colors">
                <Mail className="w-5 h-5 text-primary" />
                <span>
                  <span className="mono-label text-ink/45 block" style={{ fontSize: '0.6rem' }}>{t.emailLabel}</span>
                  <span className="text-ink/80 group-hover:text-primary transition-colors">info@capimaxgroup.com</span>
                </span>
              </a>

              <div className="flex items-center gap-4 p-7 border-b border-r border-[color:var(--line-dark)]">
                <Phone className="w-5 h-5 text-primary" />
                <span>
                  <span className="mono-label text-ink/45 block" style={{ fontSize: '0.6rem' }}>{t.phoneLabel}</span>
                  <span className="text-ink/50 italic">{phoneTBD}</span>
                </span>
              </div>

              <a href="https://capimaxgroup.com" className="group flex items-center gap-4 p-7 border-b border-r border-[color:var(--line-dark)] hover:bg-[rgba(47,173,111,0.05)] transition-colors">
                <Globe className="w-5 h-5 text-primary" />
                <span>
                  <span className="mono-label text-ink/45 block" style={{ fontSize: '0.6rem' }}>{t.websiteLabel}</span>
                  <span className="text-ink/80 group-hover:text-primary transition-colors">capimaxgroup.com</span>
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </Band>

      {/* ===================================================== OFFICES */}
      <Band tone="dark">
        <Reveal className="grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <Marker num="03" label={t.officesMarker} />
            <h2 className="font-display font-medium leading-[1.04] text-sand" style={{ fontSize: 'clamp(2.2rem,4.5vw,4rem)', letterSpacing: '-0.025em' }}>
              {t.officeLocations}<span className="accent-em">{t.officeLocationsAccent}</span>
            </h2>
          </div>
          <p className="text-lg text-sand/70 leading-relaxed lg:pb-2">{t.visitOffices}</p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 border-t border-l border-[color:var(--line-sand)]">
          {offices.map((office, i) => (
            <Reveal key={office.id} delay={(i % 2) * 0.05}>
              <div className="group flex flex-col h-full p-8 border-b border-r border-[color:var(--line-sand)] hover:bg-[rgba(47,173,111,0.05)] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{office.flag}</span>
                  <span className="mono-label text-sand/45" style={{ fontSize: '0.6rem' }}>{office.type}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-medium text-sand">{office.city}, {office.country}</h3>

                <div className="mt-5 space-y-3 text-sm flex-1">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span className="text-sand/65">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    {office.phoneHref
                      ? <a href={`tel:${office.phoneHref}`} className="text-sand/65 hover:text-primary transition-colors">{office.phone}</a>
                      : <span className="text-sand/50 italic">{office.phone}</span>}
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-sand/65 hover:text-primary transition-colors">{office.email}</a>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[color:var(--line-sand)]">
                  <div className="mono-label text-sand/45 mb-2" style={{ fontSize: '0.6rem' }}>{t.businessHours}</div>
                  <div className="text-sm text-sand/65 space-y-1">
                    <div>{t.weekdays}: {office.hours.weekdays}</div>
                    <div>{t.weekends}: {office.hours.weekends}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* ===================================================== NEWSLETTER */}
      <Band tone="pitch" className="relative overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-[40rem] h-[40rem] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(47,173,111,0.09), transparent 60%)' }} />
        <Reveal className="relative max-w-2xl">
          <Marker num="04" label={t.newsletterMarker} />
          <h2 className="font-display font-medium leading-[1.02] text-sand" style={{ fontSize: 'clamp(2.4rem,5vw,4.5rem)', letterSpacing: '-0.03em' }}>
            {t.newsletterLead}<span className="accent-em">{t.newsletterAccent}</span>
          </h2>
          <p className="mt-6 text-lg text-sand/70 leading-relaxed">{t.newsletterDesc}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent border border-[color:var(--line-sand)] px-4 py-3 text-sand placeholder:text-sand/40 focus:border-primary outline-none transition-colors"
            />
            <button className={`group ${BTN.sand}`}>
              {t.subscribe}
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </Reveal>
      </Band>
    </div>
  )
}

export default Contact

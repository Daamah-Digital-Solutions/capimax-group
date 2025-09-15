import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Building2,
  Globe,
  MessageSquare,
  Users,
  ExternalLink
} from 'lucide-react'

const Contact = ({ language }) => {
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
      pageTitle: 'Contact Us',
      pageSubtitle: 'Get in touch with our team for investment opportunities, partnerships, or general inquiries.',
      getInTouch: 'Get in Touch',
      contactForm: 'Contact Form',
      officeLocations: 'Office Locations',
      businessHours: 'Business Hours',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      subject: 'Subject',
      message: 'Message',
      inquiryType: 'Inquiry Type',
      general: 'General Inquiry',
      investment: 'Investment Opportunity',
      partnership: 'Partnership',
      support: 'Support',
      sendMessage: 'Send Message',
      required: 'Required',
      optional: 'Optional',
      headquarters: 'Headquarters',
      operations: 'Operations',
      weekdays: 'Monday - Friday',
      weekends: 'Saturday - Sunday',
      closed: 'Closed',
      responseTime: 'Response Time',
      responseTimeDesc: 'We typically respond within 24 hours during business days.',
      emergencyContact: 'Emergency Contact',
      emergencyDesc: 'For urgent matters, please call our emergency hotline.',
      socialMedia: 'Follow Us',
      newsletter: 'Newsletter',
      newsletterDesc: 'Subscribe to receive updates on investment opportunities and company news.'
    },
    ar: {
      pageTitle: 'اتصل بنا',
      pageSubtitle: 'تواصل مع فريقنا للحصول على الفرص الاستثمارية أو الشراكات أو الاستفسارات العامة.',
      getInTouch: 'تواصل معنا',
      contactForm: 'نموذج الاتصال',
      officeLocations: 'مواقع المكاتب',
      businessHours: 'ساعات العمل',
      name: 'الاسم الكامل',
      email: 'عنوان البريد الإلكتروني',
      phone: 'رقم الهاتف',
      subject: 'الموضوع',
      message: 'الرسالة',
      inquiryType: 'نوع الاستفسار',
      general: 'استفسار عام',
      investment: 'فرصة استثمارية',
      partnership: 'شراكة',
      support: 'الدعم',
      sendMessage: 'إرسال الرسالة',
      required: 'مطلوب',
      optional: 'اختياري',
      headquarters: 'المقر الرئيسي',
      operations: 'العمليات',
      weekdays: 'الاثنين - الجمعة',
      weekends: 'السبت - الأحد',
      closed: 'مغلق',
      responseTime: 'وقت الاستجابة',
      responseTimeDesc: 'نحن عادة نرد خلال 24 ساعة خلال أيام العمل.',
      emergencyContact: 'الاتصال الطارئ',
      emergencyDesc: 'للأمور العاجلة، يرجى الاتصال بخط الطوارئ الخاص بنا.',
      socialMedia: 'تابعنا',
      newsletter: 'النشرة الإخبارية',
      newsletterDesc: 'اشترك لتلقي التحديثات حول الفرص الاستثمارية وأخبار الشركة.'
    }
  }

  const t = translations[language]

  const offices = [
    {
      id: 'london',
      city: 'London',
      country: 'United Kingdom',
      flag: '🇬🇧',
      type: t.headquarters,
      address: '128 City Road, London, EC1V 2NX',
      phone: '+44 20 7946 0958',
      email: 'london@capimaxgroup.com',
      hours: {
        weekdays: '9:00 AM - 6:00 PM GMT',
        weekends: t.closed
      }
    },
    {
      id: 'newyork',
      city: 'New York',
      country: 'United States',
      flag: '🇺🇸',
      type: t.operations,
      address: '1 World Trade Center, New York, NY 10007',
      phone: '+1 (212) 555-0123',
      email: 'newyork@capimaxgroup.com',
      hours: {
        weekdays: '9:00 AM - 6:00 PM EST',
        weekends: t.closed
      }
    },
    {
      id: 'abudhabi',
      city: 'Abu Dhabi',
      country: 'United Arab Emirates',
      flag: '🇦🇪',
      type: t.operations,
      address: 'Al Maryah Island, Abu Dhabi Global Market',
      phone: '+971 2 555 0123',
      email: 'abudhabi@capimaxgroup.com',
      hours: {
        weekdays: '9:00 AM - 6:00 PM GST',
        weekends: t.closed
      }
    }
  ]

  const inquiryTypes = [
    { value: 'general', label: t.general },
    { value: 'investment', label: t.investment },
    { value: 'partnership', label: t.partnership },
    { value: 'support', label: t.support }
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6">Contact</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t.pageTitle}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {t.pageSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">{t.contactForm}</h2>
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t.name} <span className="text-red-500">*</span>
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t.email} <span className="text-red-500">*</span>
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t.phone} <span className="text-muted-foreground">({t.optional})</span>
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t.inquiryType} <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border rounded-md bg-background"
                          required
                        >
                          {inquiryTypes.map(type => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t.subject} <span className="text-red-500">*</span>
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="Investment Inquiry"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t.message} <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        placeholder="Please provide details about your inquiry..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2 h-5 w-5" />
                      {t.sendMessage}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">{t.getInTouch}</h2>
                
                {/* Response Time */}
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Clock className="h-5 w-5" />
                      <span>{t.responseTime}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      {t.responseTimeDesc}
                    </CardDescription>
                  </CardContent>
                </Card>

                {/* Emergency Contact */}
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Phone className="h-5 w-5" />
                      <span>{t.emergencyContact}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-2">
                      {t.emergencyDesc}
                    </CardDescription>
                    <a 
                      href="tel:+442079460958" 
                      className="text-primary font-semibold hover:underline"
                    >
                      +44 20 7946 0958
                    </a>
                  </CardContent>
                </Card>

                {/* General Contact */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <a 
                        href="mailto:info@capimaxgroup.com"
                        className="text-muted-foreground hover:text-primary"
                      >
                        info@capimaxgroup.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Phone</div>
                      <a 
                        href="tel:+442079460958"
                        className="text-muted-foreground hover:text-primary"
                      >
                        +44 20 7946 0958
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Website</div>
                      <a 
                        href="https://capimaxgroup.com"
                        className="text-muted-foreground hover:text-primary"
                      >
                        capimaxgroup.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.officeLocations}
            </h2>
            <p className="text-xl text-muted-foreground">
              Visit us at our global offices
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office) => (
              <Card key={office.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{office.flag}</div>
                    <Badge variant="secondary">{office.type}</Badge>
                  </div>
                  <CardTitle className="text-xl">
                    {office.city}, {office.country}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 mt-1 text-primary" />
                    <div className="text-sm text-muted-foreground">
                      {office.address}
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <a 
                      href={`tel:${office.phone}`}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {office.phone}
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <a 
                      href={`mailto:${office.email}`}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {office.email}
                    </a>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="text-sm font-medium mb-2">{t.businessHours}</div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>{t.weekdays}: {office.hours.weekdays}</div>
                      <div>{t.weekends}: {office.hours.weekends}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.newsletter}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t.newsletterDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button>
                Subscribe
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact


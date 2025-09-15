import { useParams } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Building2, 
  MapPin, 
  Calendar, 
  Users, 
  ExternalLink,
  ArrowLeft,
  Phone,
  Mail,
  Globe,
  FileText,
  Award,
  TrendingUp,
  Shield,
  Coins,
  Smartphone
} from 'lucide-react'
import { Link } from 'react-router-dom'

const CompanyDetail = ({ language }) => {
  const { id } = useParams()

  const translations = {
    en: {
      backToCompanies: 'Back to Companies',
      companyOverview: 'Company Overview',
      keyInformation: 'Key Information',
      businessActivities: 'Business Activities',
      contactInformation: 'Contact Information',
      documents: 'Documents & Certifications',
      partnerships: 'Partnerships & Affiliations',
      companyNumber: 'Company Number',
      incorporated: 'Incorporated',
      director: 'Director',
      location: 'Location',
      sector: 'Sector',
      status: 'Status',
      active: 'Active',
      website: 'Website',
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
      viewDocument: 'View Document',
      downloadCertificate: 'Download Certificate',
      notFound: 'Company Not Found',
      notFoundDesc: 'The company you are looking for does not exist or has been moved.',
      subsidiaryOf: 'Subsidiary of',
      parentCompany: 'Parent Company'
    },
    ar: {
      backToCompanies: 'العودة إلى الشركات',
      companyOverview: 'نظرة عامة على الشركة',
      keyInformation: 'المعلومات الرئيسية',
      businessActivities: 'الأنشطة التجارية',
      contactInformation: 'معلومات الاتصال',
      documents: 'الوثائق والشهادات',
      partnerships: 'الشراكات والانتماءات',
      companyNumber: 'رقم الشركة',
      incorporated: 'تاريخ التأسيس',
      director: 'المدير',
      location: 'الموقع',
      sector: 'القطاع',
      status: 'الحالة',
      active: 'نشط',
      website: 'الموقع الإلكتروني',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      address: 'العنوان',
      viewDocument: 'عرض الوثيقة',
      downloadCertificate: 'تحميل الشهادة',
      notFound: 'الشركة غير موجودة',
      notFoundDesc: 'الشركة التي تبحث عنها غير موجودة أو تم نقلها.',
      subsidiaryOf: 'شركة تابعة لـ',
      parentCompany: 'الشركة الأم'
    }
  }

  const t = translations[language]

  // Company data - in a real app, this would come from an API
  const companies = {
    'capimax-investments-uk': {
      id: 'capimax-investments-uk',
      name: 'Capimax Investments Limited',
      description: 'Digital investment platform for fractional ownership in real estate, precious metals, and global markets. Providing innovative investment solutions with comprehensive risk management and transparent reporting.',
      sector: 'Investment Management',
      icon: TrendingUp,
      color: 'bg-primary',
      companyNumber: '16099034',
      incorporated: '25th November 2024',
      director: 'Ibrahim Gad',
      location: 'London, United Kingdom',
      country: 'UK',
      countryFlag: '🇬🇧',
      status: 'Active',
      parentCompany: 'Capimax Holding Limited',
      website: 'https://investments.capimaxgroup.com',
      email: 'investments@capimaxgroup.com',
      phone: '+44 20 7946 0958',
      address: '128 City Road, London, EC1V 2NX, United Kingdom',
      activities: [
        'Investment Management',
        'Fund Management', 
        'Unit Trusts',
        'Portfolio Management',
        'Risk Assessment',
        'Financial Advisory'
      ],
      documents: [
        {
          title: 'Certificate of Incorporation',
          type: 'Legal Document',
          date: '2024-11-25',
          verified: true
        },
        {
          title: 'Fractional Investment Excellence Award',
          type: 'Award Certificate',
          date: '2024-12-01',
          verified: true
        }
      ],
      partnerships: [
        'CIM Financial Group',
        'Assurax Insurance',
        'Nova Digital Finance'
      ]
    },
    'capimax-development-llp': {
      id: 'capimax-development-llp',
      name: 'Capimax Development LLP',
      description: 'Specialized real estate development company focusing on innovative residential and commercial projects. Leading sustainable development initiatives with cutting-edge design and construction methodologies.',
      sector: 'Real Estate Development',
      icon: Building2,
      color: 'bg-success',
      companyNumber: 'OC454650',
      incorporated: '26th November 2024',
      director: 'Ibrahim Gad, Sayed Ibrahim',
      location: 'London, United Kingdom',
      country: 'UK',
      countryFlag: '🇬🇧',
      status: 'Active',
      parentCompany: 'Capimax Holding Limited',
      website: 'https://development.capimaxgroup.com',
      email: 'development@capimaxgroup.com',
      phone: '+44 20 7946 0958',
      address: '128 City Road, London, EC1V 2NX, United Kingdom',
      activities: [
        'Real Estate Development',
        'Construction Management',
        'Property Investment',
        'Project Management',
        'Sustainable Building',
        'Urban Planning'
      ],
      documents: [
        {
          title: 'LLP Certificate of Incorporation',
          type: 'Legal Document',
          date: '2024-11-26',
          verified: true
        }
      ],
      partnerships: [
        'TDH Developments',
        'EliteGate Properties'
      ]
    },
    'capimax-virtual-assets': {
      id: 'capimax-virtual-assets',
      name: 'Capi Max Virtual Assets LTD',
      description: 'Licensed digital asset company managing cryptocurrencies, digital wallets, and virtual asset portfolios. Providing secure and compliant digital asset management services with advanced blockchain technology.',
      sector: 'Digital Assets',
      icon: Coins,
      color: 'bg-warning',
      companyNumber: '16465707',
      incorporated: '21st May 2025',
      director: 'Ibrahim Gad',
      location: 'London, United Kingdom',
      country: 'UK',
      countryFlag: '🇬🇧',
      status: 'Active',
      parentCompany: 'Capimax Holding Limited',
      website: 'https://virtualassets.capimaxgroup.com',
      email: 'virtualassets@capimaxgroup.com',
      phone: '+44 20 7946 0958',
      address: '128 City Road, London, EC1V 2NX, United Kingdom',
      activities: [
        'Digital Asset Management',
        'Cryptocurrency Trading',
        'Digital Wallet Services',
        'Blockchain Technology',
        'Fund Management',
        'Financial Markets Administration'
      ],
      documents: [
        {
          title: 'Certificate of Incorporation',
          type: 'Legal Document',
          date: '2025-05-21',
          verified: true
        },
        {
          title: 'Crypto-Friendly Investment Platform Award',
          type: 'Award Certificate',
          date: '2024-12-01',
          verified: true
        }
      ],
      partnerships: [
        'Nova Digital Finance',
        'CIM Financial Group'
      ]
    }
  }

  const company = companies[id]

  if (!company) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Building2 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">{t.notFound}</h1>
          <p className="text-muted-foreground mb-6">{t.notFoundDesc}</p>
          <Button asChild>
            <Link to="/companies">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t.backToCompanies}
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Button variant="ghost" asChild>
              <Link to="/companies">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.backToCompanies}
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className={`w-16 h-16 ${company.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
              <company.icon className="h-8 w-8 text-white" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl">{company.countryFlag}</span>
                <Badge variant="secondary">{company.sector}</Badge>
                <Badge className="bg-success/10 text-success">{t.active}</Badge>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{company.name}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {company.description}
              </p>
              
              {company.parentCompany && (
                <div className="mt-4">
                  <span className="text-sm text-muted-foreground">{t.subsidiaryOf}: </span>
                  <span className="text-sm font-medium">{company.parentCompany}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Company Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building2 className="h-5 w-5" />
                    <span>{t.companyOverview}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {company.description}
                  </p>
                </CardContent>
              </Card>

              {/* Business Activities */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5" />
                    <span>{t.businessActivities}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {company.activities.map((activity, index) => (
                      <div key={index} className="flex items-center space-x-2 p-3 bg-muted/50 rounded-lg">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{activity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Documents */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5" />
                    <span>{t.documents}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {company.documents.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            {doc.type === 'Award Certificate' ? (
                              <Award className="h-4 w-4 text-primary" />
                            ) : (
                              <FileText className="h-4 w-4 text-primary" />
                            )}
                          </div>
                          <div>
                            <div className="font-medium">{doc.title}</div>
                            <div className="text-sm text-muted-foreground">
                              {doc.type} • {new Date(doc.date).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {doc.verified && (
                            <Badge variant="outline" className="text-success border-success">
                              Verified
                            </Badge>
                          )}
                          <Button variant="outline" size="sm">
                            {t.viewDocument}
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Partnerships */}
              {company.partnerships && company.partnerships.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="h-5 w-5" />
                      <span>{t.partnerships}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {company.partnerships.map((partner, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Building2 className="h-4 w-4 text-primary" />
                          </div>
                          <span className="font-medium">{partner}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Key Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t.keyInformation}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">{t.companyNumber}</div>
                    <div className="font-mono text-sm">{company.companyNumber}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">{t.incorporated}</div>
                    <div className="text-sm">{company.incorporated}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">{t.director}</div>
                    <div className="text-sm">{company.director}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">{t.location}</div>
                    <div className="text-sm">{company.location}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">{t.sector}</div>
                    <div className="text-sm">{company.sector}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">{t.status}</div>
                    <Badge className="bg-success/10 text-success">{t.active}</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t.contactInformation}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Globe className="h-4 w-4 text-primary" />
                    <a 
                      href={company.website}
                      className="text-sm text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.website}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <a 
                      href={`mailto:${company.email}`}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {company.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <a 
                      href={`tel:${company.phone}`}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {company.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 text-primary mt-0.5" />
                    <div className="text-sm text-muted-foreground">
                      {company.address}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CompanyDetail


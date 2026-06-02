import { useState } from 'react'
import {
  FileText,
  Download,
  Search,
  Shield,
  Award,
  Building2,
  Eye,
  CheckCircle,
  ArrowRight,
  X,
} from 'lucide-react'
import { PageHero, Band, Marker, Reveal, BTN } from '@/components/editorial'

const Documents = ({ language }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const translations = {
    en: {
      pageTitle: 'Documents & ',
      pageTitleAccent: 'Licenses.',
      pageEyebrow: 'Legal & Compliance',
      pageSubtitle: 'Access our comprehensive collection of legal documents, licenses, and certifications.',
      searchPlaceholder: 'Search documents...',
      allCategories: 'All Categories',
      licenses: 'Licenses',
      certificates: 'Certificates',
      reports: 'Reports',
      legal: 'Legal Documents',
      download: 'Download',
      view: 'View',
      verified: 'Verified',
      category: 'Category',
      issueDate: 'Issue Date',
      expiryDate: 'Expiry Date',
      status: 'Status',
      active: 'Active',
      noResults: 'No documents found matching your search criteria.',
      clearFilters: 'Clear Filters',
      overviewMarker: 'Documentation overview',
      overviewTitle: 'Document ',
      overviewTitleAccent: 'overview.',
      overviewBody: 'Comprehensive documentation across all our operations.',
      libraryMarker: 'Document library',
      activeLicenses: 'Active Licenses',
      certifications: 'Certifications',
      verifiedDocs: 'Verified Documents',
      jurisdictions: 'Jurisdictions',
    },
    ar: {
      pageTitle: 'الوثائق ',
      pageTitleAccent: 'والتراخيص.',
      pageEyebrow: 'القانونية والامتثال',
      pageSubtitle: 'الوصول إلى مجموعتنا الشاملة من الوثائق القانونية والتراخيص والشهادات.',
      searchPlaceholder: 'البحث في الوثائق...',
      allCategories: 'جميع الفئات',
      licenses: 'التراخيص',
      certificates: 'الشهادات',
      reports: 'التقارير',
      legal: 'الوثائق القانونية',
      download: 'تحميل',
      view: 'عرض',
      verified: 'موثق',
      category: 'الفئة',
      issueDate: 'تاريخ الإصدار',
      expiryDate: 'تاريخ الانتهاء',
      status: 'الحالة',
      active: 'نشط',
      noResults: 'لم يتم العثور على وثائق تطابق معايير البحث الخاصة بك.',
      clearFilters: 'مسح المرشحات',
      overviewMarker: 'نظرة عامة على الوثائق',
      overviewTitle: 'نظرة عامة على ',
      overviewTitleAccent: 'الوثائق.',
      overviewBody: 'وثائق شاملة عبر جميع عملياتنا.',
      libraryMarker: 'مكتبة الوثائق',
      activeLicenses: 'تراخيص نشطة',
      certifications: 'الشهادات',
      verifiedDocs: 'وثائق موثقة',
      jurisdictions: 'الولايات',
    },
  }

  const t = translations[language]

  const documents = [
    // UK Company Documents
    {
      id: 'capimax-investments-uk-cert',
      fileUrl: '/documents/capimax-investments-uk-certificate.pdf',
      title: 'Capimax Investments Limited - Certificate of Incorporation',
      description: 'Official certificate of incorporation for Capimax Investments Limited (UK)',
      category: 'licenses',
      type: 'Certificate of Incorporation',
      country: 'UK',
      companyNumber: '16099034',
      issueDate: '2024-11-25',
      expiryDate: null,
      status: 'active',
      verified: true,
      fileSize: '2.1 MB',
      format: 'PDF'
    },
    {
      id: 'capimax-financial-cert',
      fileUrl: '/documents/capimax-financial-management-certificate.pdf',
      title: 'Capimax Financial Management LTD - Certificate of Incorporation',
      description: 'Official certificate of incorporation for Capimax Financial Management LTD',
      category: 'licenses',
      type: 'Certificate of Incorporation',
      country: 'UK',
      companyNumber: '16099090',
      issueDate: '2024-11-25',
      expiryDate: null,
      status: 'active',
      verified: true,
      fileSize: '1.8 MB',
      format: 'PDF'
    },
    {
      id: 'hcc-international-cert',
      fileUrl: '/documents/hcc-international-certificate.pdf',
      title: 'HCC International Company Limited - Certificate of Incorporation',
      description: 'Official certificate of incorporation for HCC International Company Limited',
      category: 'licenses',
      type: 'Certificate of Incorporation',
      country: 'UK',
      companyNumber: '16113542',
      issueDate: '2024-12-02',
      expiryDate: null,
      status: 'active',
      verified: true,
      fileSize: '2.3 MB',
      format: 'PDF'
    },
    {
      id: 'capimax-precious-metals-cert',
      fileUrl: '/documents/capimax-precious-metals-certificate.pdf',
      title: 'Capimax Precious Metals & Minerals Limited - Certificate',
      description: 'Certificate of incorporation for precious metals investment company',
      category: 'licenses',
      type: 'Certificate of Incorporation',
      country: 'UK',
      companyNumber: '16115521',
      issueDate: '2024-12-03',
      expiryDate: null,
      status: 'active',
      verified: true,
      fileSize: '2.0 MB',
      format: 'PDF'
    },
    {
      id: 'capimax-holding-cert',
      fileUrl: '/documents/capimax-holding-certificate.pdf',
      title: 'Capimax Holding Limited - Certificate of Incorporation',
      description: 'Official certificate for the parent holding company',
      category: 'licenses',
      type: 'Certificate of Incorporation',
      country: 'UK',
      companyNumber: '16250665',
      issueDate: '2025-02-13',
      expiryDate: null,
      status: 'active',
      verified: true,
      fileSize: '1.9 MB',
      format: 'PDF'
    },
    {
      id: 'capimax-virtual-assets-cert',
      fileUrl: '/documents/capimax-virtual-assets-certificate.pdf',
      title: 'Capi Max Virtual Assets LTD - Certificate of Incorporation',
      description: 'Certificate for digital asset management company',
      category: 'licenses',
      type: 'Certificate of Incorporation',
      country: 'UK',
      companyNumber: '16465707',
      issueDate: '2025-05-21',
      expiryDate: null,
      status: 'active',
      verified: true,
      fileSize: '2.2 MB',
      format: 'PDF'
    },
    {
      id: 'cim-financial-cert',
      fileUrl: '/documents/cim-financial-group-certificate.pdf',
      title: 'CIM Financial Group Limited - Certificate of Incorporation',
      description: 'Certificate for financial services and auditing company',
      category: 'licenses',
      type: 'Certificate of Incorporation',
      country: 'UK',
      companyNumber: '16465715',
      issueDate: '2025-05-21',
      expiryDate: null,
      status: 'active',
      verified: true,
      fileSize: '2.4 MB',
      format: 'PDF'
    },
    {
      id: 'nova-digital-cert',
      fileUrl: '/documents/nova-digital-finance-certificate.pdf',
      title: 'Nova Digital Finance LTD - Certificate of Incorporation',
      description: 'Certificate for digital banking and fintech company',
      category: 'licenses',
      type: 'Certificate of Incorporation',
      country: 'UK',
      companyNumber: '16483755',
      issueDate: '2025-05-29',
      expiryDate: null,
      status: 'active',
      verified: true,
      fileSize: '2.1 MB',
      format: 'PDF'
    },
    {
      id: 'capimax-fintech-cert',
      fileUrl: '/documents/capimax-fintech-blockchain-certificate.pdf',
      title: 'Capimax Fintech, Blockchain Limited - Certificate',
      description: 'Certificate for blockchain and fintech solutions company',
      category: 'licenses',
      type: 'Certificate of Incorporation',
      country: 'UK',
      companyNumber: '16538119',
      issueDate: '2025-06-24',
      expiryDate: null,
      status: 'active',
      verified: true,
      fileSize: '2.0 MB',
      format: 'PDF'
    },
    {
      id: 'capimax-development-cert',
      fileUrl: '/documents/capimax-development-llp-certificate.pdf',
      title: 'Capimax Development LLP - Certificate of Incorporation',
      description: 'Certificate for real estate development partnership',
      category: 'licenses',
      type: 'LLP Certificate',
      country: 'UK',
      companyNumber: 'OC454650',
      issueDate: '2024-11-26',
      expiryDate: null,
      status: 'active',
      verified: true,
      fileSize: '1.7 MB',
      format: 'PDF'
    },
    // USA Company Documents
    {
      id: 'capimax-investments-usa-cert',
      fileUrl: '/documents/capimax-investments-usa-good-standing.pdf',
      title: 'CAPIMAX INVESTMENTS LLC - Certificate of Good Standing',
      description: 'Wyoming LLC certificate of good standing',
      category: 'licenses',
      type: 'Certificate of Good Standing',
      country: 'USA',
      companyNumber: '2024-001559635',
      issueDate: '2024-11-26',
      expiryDate: null,
      status: 'active',
      verified: true,
      fileSize: '1.5 MB',
      format: 'PDF'
    },
    {
      id: 'capimax-trading-usa-cert',
      fileUrl: '/documents/capimax-general-trading-usa-good-standing.pdf',
      title: 'CAPIMAX FOR GENERAL TRADING LLC - Certificate',
      description: 'New York LLC certificate of good standing',
      category: 'licenses',
      type: 'Certificate of Good Standing',
      country: 'USA',
      companyNumber: '7469500',
      issueDate: '2024-11-25',
      expiryDate: '2026-11-30',
      status: 'active',
      verified: true,
      fileSize: '1.3 MB',
      format: 'PDF'
    },
    // UAE Company Documents
    {
      id: 'capimax-investments-uae-license',
      fileUrl: '/documents/capimax-investments-uae-business-license.pdf',
      title: 'CAPI MAX INVESTMENTS - L.L.C - Business License',
      description: 'UAE business license for investment activities',
      category: 'licenses',
      type: 'Business License',
      country: 'UAE',
      companyNumber: 'CN-5639305',
      issueDate: '2024-11-29',
      expiryDate: '2025-11-28',
      status: 'active',
      verified: true,
      fileSize: '2.8 MB',
      format: 'PDF'
    },
    // Awards and Certifications
    {
      id: 'fractional-investment-award',
      fileUrl: '/documents/fractional-investment-excellence-award.pdf',
      title: 'Fractional Investment Excellence Award',
      description: 'Award for best investment platform providing innovative fractional ownership solutions',
      category: 'certificates',
      type: 'Award Certificate',
      issuer: 'CIM Financial Group',
      issueDate: '2024-12-01',
      expiryDate: null,
      status: 'active',
      verified: true,
      fileSize: '1.2 MB',
      format: 'PDF'
    },
    {
      id: 'platform-security-seal',
      fileUrl: '/documents/platform-security-seal.pdf',
      title: 'Certified Platform Security Seal',
      description: 'Security certification for platform infrastructure and data protection',
      category: 'certificates',
      type: 'Security Certificate',
      issuer: 'Assurax Insurance UK',
      issueDate: '2024-11-15',
      expiryDate: '2025-11-15',
      status: 'active',
      verified: true,
      fileSize: '0.8 MB',
      format: 'PDF'
    },
    {
      id: 'blockchain-excellence-cert',
      fileUrl: '/documents/blockchain-finance-excellence-certificate.pdf',
      title: 'Blockchain Finance Excellence Certificate',
      description: 'Certification for using blockchain technologies in investment management',
      category: 'certificates',
      type: 'Technology Certificate',
      issuer: 'Nova Digital Finance',
      issueDate: '2024-12-10',
      expiryDate: '2026-12-10',
      status: 'active',
      verified: true,
      fileSize: '1.1 MB',
      format: 'PDF'
    },
    {
      id: 'cyber-resilience-cert',
      fileUrl: '/documents/capimax-cyber-resilience-certificate.pdf',
      title: 'CapiMax Cyber Resilience Certificate',
      description: 'Certification for cybersecurity practices and incident response capabilities',
      category: 'certificates',
      type: 'Security Certificate',
      issuer: 'HCC International Insurance UK',
      issueDate: '2024-11-20',
      expiryDate: '2025-11-20',
      status: 'active',
      verified: true,
      fileSize: '1.4 MB',
      format: 'PDF'
    },
    // Financial Reports
    {
      id: 'annual-report-2024',
      fileUrl: '/documents/capimax-group-annual-report-2024.pdf',
      title: 'Capimax Group Annual Report 2024',
      description: 'Comprehensive annual report covering all group companies and financial performance',
      category: 'reports',
      type: 'Annual Report',
      issueDate: '2024-12-31',
      expiryDate: null,
      status: 'active',
      verified: true,
      fileSize: '15.2 MB',
      format: 'PDF'
    },
    {
      id: 'compliance-report-2024',
      fileUrl: '/documents/regulatory-compliance-report-2024.pdf',
      title: 'Regulatory Compliance Report 2024',
      description: 'Report on regulatory compliance across all jurisdictions',
      category: 'reports',
      type: 'Compliance Report',
      issueDate: '2024-12-15',
      expiryDate: null,
      status: 'active',
      verified: true,
      fileSize: '8.7 MB',
      format: 'PDF'
    }
  ]

  const categories = [
    { value: 'all', label: t.allCategories },
    { value: 'licenses', label: t.licenses },
    { value: 'certificates', label: t.certificates },
    { value: 'reports', label: t.reports },
    { value: 'legal', label: t.legal }
  ]

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.type.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'licenses': return Building2
      case 'certificates': return Award
      case 'reports': return FileText
      case 'legal': return Shield
      default: return FileText
    }
  }

  const stats = [
    { number: documents.filter(d => d.category === 'licenses').length, label: t.activeLicenses },
    { number: documents.filter(d => d.category === 'certificates').length, label: t.certifications },
    { number: documents.filter(d => d.verified).length, label: t.verifiedDocs },
    { number: '3', label: t.jurisdictions },
  ]

  const hasFilters = searchTerm || selectedCategory !== 'all'
  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('all')
  }

  return (
    <div className="bg-cream text-ink">
      <PageHero
        eyebrow={t.pageEyebrow}
        title={t.pageTitle}
        accent={t.pageTitleAccent}
        subtitle={t.pageSubtitle}
      />

      {/* ===================================================== STATS OVERVIEW */}
      <Band tone="paper">
        <Reveal className="grid lg:grid-cols-[1fr_1.5fr] gap-10 items-end">
          <div>
            <Marker num="01" label={t.overviewMarker} light />
            <h2 className="font-display font-medium leading-[1.04]" style={{ fontSize: 'clamp(2.2rem,4.5vw,4rem)', letterSpacing: '-0.025em' }}>
              {t.overviewTitle}<span className="accent-em">{t.overviewTitleAccent}</span>
            </h2>
          </div>
          <p className="text-lg text-ink/70 leading-relaxed lg:pb-2">{t.overviewBody}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 border-t border-l border-[color:var(--line-dark)]">
          {stats.map((stat, i) => (
            <Reveal key={i} delay={(i % 4) * 0.05}>
              <div className="p-8 border-b border-r border-[color:var(--line-dark)] h-full">
                <div className="font-display font-medium text-ink" style={{ fontSize: 'clamp(2.4rem,4vw,3.6rem)', lineHeight: 1 }}>{stat.number}</div>
                <div className="mono-label text-ink/45 mt-3" style={{ fontSize: '0.62rem' }}>{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>

      {/* ===================================================== LIBRARY + FILTERS */}
      <Band tone="light">
        <Reveal>
          <Marker num="02" label={t.libraryMarker} light />
        </Reveal>

        {/* Search + category filter */}
        <Reveal className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between border-b border-[color:var(--line-dark)] pb-8 mb-12">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/40" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent border border-[color:var(--line-dark)] pl-11 pr-4 py-3 text-ink placeholder:text-ink/40 focus:border-primary outline-none transition-colors"
            />
          </div>
          <div className="flex items-center gap-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-transparent border border-[color:var(--line-dark)] px-4 py-3 text-ink focus:border-primary outline-none transition-colors"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>{category.label}</option>
              ))}
            </select>
            {hasFilters && (
              <button onClick={clearFilters} className={BTN.ghostDark}>
                <X className="w-4 h-4" />
                {t.clearFilters}
              </button>
            )}
          </div>
        </Reveal>

        {filteredDocuments.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[color:var(--line-dark)]">
            {filteredDocuments.map((doc, index) => {
              const CategoryIcon = getCategoryIcon(doc.category)
              return (
                <Reveal key={doc.id} delay={(index % 3) * 0.05}>
                  <div className="group relative flex flex-col h-full p-8 border-b border-r border-[color:var(--line-dark)] hover:bg-[rgba(47,173,111,0.05)] transition-colors">
                    <span className="absolute top-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-500" />
                    <div className="flex items-start justify-between gap-3">
                      <CategoryIcon className="w-8 h-8 text-primary" />
                      {doc.verified && (
                        <span className="inline-flex items-center gap-1.5 mono-label text-primary" style={{ fontSize: '0.6rem' }}>
                          <CheckCircle className="w-3.5 h-3.5" />
                          {t.verified}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-6 font-display text-lg font-medium leading-snug text-ink">{doc.title}</h3>
                    <p className="mt-3 text-sm text-ink/60 leading-relaxed">{doc.description}</p>

                    <div className="mt-6 pt-5 border-t border-[color:var(--line-dark)] space-y-2.5 text-sm flex-1">
                      <div className="flex items-center justify-between">
                        <span className="mono-label text-ink/45" style={{ fontSize: '0.6rem' }}>{doc.type}</span>
                        <span className="text-ink/55 text-xs">{doc.format} • {doc.fileSize}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-ink/50">{t.issueDate}</span>
                        <span className="text-ink/80 font-medium">{new Date(doc.issueDate).toLocaleDateString()}</span>
                      </div>
                      {doc.expiryDate && (
                        <div className="flex items-center justify-between">
                          <span className="text-ink/50">{t.expiryDate}</span>
                          <span className="text-ink/80 font-medium">{new Date(doc.expiryDate).toLocaleDateString()}</span>
                        </div>
                      )}
                      {doc.companyNumber && (
                        <div className="flex items-center justify-between">
                          <span className="text-ink/50">Company #</span>
                          <span className="font-mono text-xs text-ink/80">{doc.companyNumber}</span>
                        </div>
                      )}
                      {doc.issuer && (
                        <div className="flex items-center justify-between">
                          <span className="text-ink/50">Issued by</span>
                          <span className="text-xs text-ink/80">{doc.issuer}</span>
                        </div>
                      )}
                    </div>

                    <div className="mt-6 flex gap-3">
                      <a
                        href={doc.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 ${BTN.ghostDark}`}
                        style={{ padding: '0.75rem 1rem' }}
                      >
                        <Eye className="w-4 h-4" />
                        {t.view}
                      </a>
                      <a
                        href={doc.fileUrl}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 ${BTN.green}`}
                        style={{ padding: '0.75rem 1rem' }}
                      >
                        <Download className="w-4 h-4" />
                        {t.download}
                      </a>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        ) : (
          <Reveal className="text-center py-20 border border-[color:var(--line-dark)]">
            <FileText className="w-14 h-14 text-ink/25 mx-auto" />
            <h3 className="mt-6 font-display text-2xl font-medium text-ink">{t.noResults}</h3>
            <p className="mt-3 text-ink/60">Try adjusting your search terms or filters.</p>
            <button onClick={clearFilters} className={`group mt-8 ${BTN.forest}`}>
              {t.clearFilters}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Reveal>
        )}
      </Band>
    </div>
  )
}

export default Documents

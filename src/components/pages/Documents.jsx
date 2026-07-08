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
  Lock,
  ShieldCheck,
} from 'lucide-react'
import { PageHero, Band, Marker, Reveal, BTN } from '@/components/editorial'

const Documents = ({ language }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const translations = {
    en: {
      pageTitle: 'Transparency & ',
      pageTitleAccent: 'Verification.',
      pageEyebrow: 'Verifiable Ecosystem',
      pageSubtitle: 'The group operates on verifiable documentation. Ownership certificates, contracts, asset documents, company records, and SPV certificates can all be verified.',
      searchPlaceholder: 'Search documents...',
      allCategories: 'All Categories',
      reports: 'Reports',
      certificates: 'Certificates & Awards',
      partners: 'Partner Verification',
      verifiable: 'Verifiable Records',
      download: 'Download',
      view: 'View',
      verified: 'Verified',
      requestAccess: 'Verifiable on request',
      category: 'Category',
      issueDate: 'Issue Date',
      expiryDate: 'Expiry Date',
      status: 'Status',
      active: 'Active',
      noResults: 'No documents found matching your search criteria.',
      clearFilters: 'Clear Filters',
      overviewMarker: 'How verification works',
      overviewTitle: 'A verifiable ',
      overviewTitleAccent: 'ecosystem.',
      overviewBody: 'Every project is held by an independent SPV, and every digital asset is linked to a documented real-world asset. Ownership certificates, contracts, asset documents, company records, and SPV certificates are all verifiable — so trust is grounded in evidence, not claims.',
      custodyMarker: 'Oversight & custody',
      custodyTitle: 'CIM Financial Group ',
      custodyTitleAccent: 'oversight.',
      custodyBody: 'CIM Financial Group is responsible for the independent oversight of the ecosystem — safeguarding trust across every certificate and contract.',
      custody1Title: 'Document custody',
      custody1Body: 'Secure custody of all group and asset documentation.',
      custody2Title: 'Document verification',
      custody2Body: 'Authentication and verification of issued documents.',
      custody3Title: 'Ownership review',
      custody3Body: 'Independent review of ownership and SPV structures.',
      custody4Title: 'Oversight & compliance',
      custody4Body: 'Continuous oversight and regulatory compliance monitoring.',
      custody5Title: 'Records & certificate custody',
      custody5Body: 'Custody of records and issued certificates per asset.',
      libraryMarker: 'Document library',
      verifiableMarker: 'Issued per asset',
      verifiableTitle: 'Verifiable on ',
      verifiableTitleAccent: 'request.',
      verifiableBody: 'The following records are issued per project or per asset and made available for verification on request, under CIM Financial Group custody.',
      independentSpvs: 'Independent SPVs',
      assetBackedTitle: 'Asset-backed',
      partnerVerified: 'Partner Verified',
      jurisdictions: 'Jurisdictions',
    },
    ar: {
      pageTitle: 'الشفافية ',
      pageTitleAccent: 'والتحقق.',
      pageEyebrow: 'منظومة قابلة للتحقق',
      pageSubtitle: 'تعمل المجموعة على أساس وثائق قابلة للتحقق. شهادات الملكية والعقود ووثائق الأصول ووثائق الشركات وشهادات الكيانات ذات الغرض الخاص (SPV) جميعها قابلة للتحقق.',
      searchPlaceholder: 'البحث في الوثائق...',
      allCategories: 'جميع الفئات',
      reports: 'التقارير',
      certificates: 'الشهادات والجوائز',
      partners: 'تحقق الشركاء',
      verifiable: 'سجلات قابلة للتحقق',
      download: 'تحميل',
      view: 'عرض',
      verified: 'موثق',
      requestAccess: 'قابل للتحقق عند الطلب',
      category: 'الفئة',
      issueDate: 'تاريخ الإصدار',
      expiryDate: 'تاريخ الانتهاء',
      status: 'الحالة',
      active: 'نشط',
      noResults: 'لم يتم العثور على وثائق تطابق معايير البحث الخاصة بك.',
      clearFilters: 'مسح المرشحات',
      overviewMarker: 'كيف يعمل التحقق',
      overviewTitle: 'منظومة ',
      overviewTitleAccent: 'قابلة للتحقق.',
      overviewBody: 'كل مشروع محتفظ به عبر كيان ذي غرض خاص (SPV) مستقل، وكل أصل رقمي مرتبط بأصل حقيقي موثّق. شهادات الملكية والعقود ووثائق الأصول ووثائق الشركات وشهادات الكيانات ذات الغرض الخاص جميعها قابلة للتحقق — لتقوم الثقة على الأدلة لا على الادعاءات.',
      custodyMarker: 'الإشراف والحفظ',
      custodyTitle: 'إشراف مجموعة ',
      custodyTitleAccent: 'CIM المالية.',
      custodyBody: 'مجموعة CIM المالية مسؤولة عن الإشراف المستقل على المنظومة — لحماية الثقة عبر كل شهادة وعقد.',
      custody1Title: 'حفظ الوثائق',
      custody1Body: 'الحفظ الآمن لجميع وثائق المجموعة والأصول.',
      custody2Title: 'التحقق من الوثائق',
      custody2Body: 'مصادقة الوثائق الصادرة والتحقق منها.',
      custody3Title: 'مراجعة الملكية',
      custody3Body: 'مراجعة مستقلة لهياكل الملكية والكيانات ذات الغرض الخاص.',
      custody4Title: 'الإشراف والامتثال',
      custody4Body: 'إشراف مستمر ومراقبة الامتثال التنظيمي.',
      custody5Title: 'حفظ السجلات والشهادات',
      custody5Body: 'حفظ السجلات والشهادات الصادرة لكل أصل.',
      libraryMarker: 'مكتبة الوثائق',
      verifiableMarker: 'تصدر لكل أصل',
      verifiableTitle: 'قابلة للتحقق ',
      verifiableTitleAccent: 'عند الطلب.',
      verifiableBody: 'تصدر السجلات التالية لكل مشروع أو لكل أصل وتتاح للتحقق عند الطلب، تحت حفظ مجموعة CIM المالية.',
      independentSpvs: 'كيانات SPV مستقلة',
      assetBackedTitle: 'مدعوم بالأصول',
      partnerVerified: 'موثق من الشركاء',
      jurisdictions: 'الولايات القضائية',
    },
  }

  const t = translations[language]

  // Only PDFs that actually exist in public/documents/ and fit the V2 identity.
  // Titles/descriptions are neutral/aligned — no old-identity company names.
  const documents = [
    // Group Reports
    {
      id: 'annual-report-2024',
      fileUrl: '/documents/capimax-group-annual-report-2024.pdf',
      title: { en: 'Group Annual Report 2024', ar: 'التقرير السنوي للمجموعة 2024' },
      description: {
        en: 'Consolidated annual report covering the group holding structure and ecosystem performance.',
        ar: 'تقرير سنوي موحّد يغطي هيكل المجموعة القابضة وأداء المنظومة.',
      },
      category: 'reports',
      type: { en: 'Annual Report', ar: 'تقرير سنوي' },
      issueDate: '2024-12-31',
      expiryDate: null,
      verified: true,
      fileSize: '15.2 MB',
      format: 'PDF',
    },
    {
      id: 'compliance-report-2024',
      fileUrl: '/documents/regulatory-compliance-report-2024.pdf',
      title: { en: 'Regulatory Compliance Report 2024', ar: 'تقرير الامتثال التنظيمي 2024' },
      description: {
        en: 'Report on regulatory compliance across the group’s USA and UK jurisdictions.',
        ar: 'تقرير حول الامتثال التنظيمي عبر ولايات المجموعة في الولايات المتحدة والمملكة المتحدة.',
      },
      category: 'reports',
      type: { en: 'Compliance Report', ar: 'تقرير امتثال' },
      issueDate: '2024-12-15',
      expiryDate: null,
      verified: true,
      fileSize: '8.7 MB',
      format: 'PDF',
    },
    // Certificates & Awards
    {
      id: 'fractional-investment-award',
      fileUrl: '/documents/fractional-investment-excellence-award.pdf',
      title: { en: 'Fractional Ownership Excellence', ar: 'التميّز في الملكية الجزئية' },
      description: {
        en: 'Award recognizing excellence in fractional ownership solutions across the ecosystem.',
        ar: 'جائزة تقديراً للتميّز في حلول الملكية الجزئية عبر المنظومة.',
      },
      category: 'certificates',
      type: { en: 'Award Certificate', ar: 'شهادة جائزة' },
      issuer: { en: 'CIM Financial Group', ar: 'مجموعة CIM المالية' },
      issueDate: '2024-12-01',
      expiryDate: null,
      verified: true,
      fileSize: '1.2 MB',
      format: 'PDF',
    },
    {
      id: 'platform-security-seal',
      fileUrl: '/documents/platform-security-seal.pdf',
      title: { en: 'Certified Platform Security Seal', ar: 'ختم أمان المنصة المعتمد' },
      description: {
        en: 'Security certification for platform infrastructure and data protection.',
        ar: 'شهادة أمان للبنية التحتية للمنصة وحماية البيانات.',
      },
      category: 'certificates',
      type: { en: 'Security Certificate', ar: 'شهادة أمان' },
      issueDate: '2024-11-15',
      expiryDate: '2025-11-15',
      verified: true,
      fileSize: '0.8 MB',
      format: 'PDF',
    },
    {
      id: 'blockchain-excellence-cert',
      fileUrl: '/documents/blockchain-finance-excellence-certificate.pdf',
      title: { en: 'Blockchain Finance Excellence', ar: 'التميّز في التمويل عبر البلوكشين' },
      description: {
        en: 'Certification for the use of blockchain and tokenization in asset management.',
        ar: 'شهادة لاستخدام البلوكشين والترميز في إدارة الأصول.',
      },
      category: 'certificates',
      type: { en: 'Technology Certificate', ar: 'شهادة تقنية' },
      issueDate: '2024-12-10',
      expiryDate: '2026-12-10',
      verified: true,
      fileSize: '1.1 MB',
      format: 'PDF',
    },
    {
      id: 'cyber-resilience-cert',
      fileUrl: '/documents/capimax-cyber-resilience-certificate.pdf',
      title: { en: 'Cyber Resilience Certificate', ar: 'شهادة المرونة السيبرانية' },
      description: {
        en: 'Certification for cybersecurity practices and incident response capabilities.',
        ar: 'شهادة لممارسات الأمن السيبراني وقدرات الاستجابة للحوادث.',
      },
      category: 'certificates',
      type: { en: 'Security Certificate', ar: 'شهادة أمان' },
      issueDate: '2024-11-20',
      expiryDate: '2025-11-20',
      verified: true,
      fileSize: '1.4 MB',
      format: 'PDF',
    },
    // Partner Verification
    {
      id: 'cim-financial-cert',
      fileUrl: '/documents/cim-financial-group-certificate.pdf',
      title: { en: 'CIM Financial Group', ar: 'مجموعة CIM المالية' },
      description: {
        en: 'Oversight & verification partner — responsible for custody, verification, ownership review and compliance.',
        ar: 'شريك الإشراف والتحقق — المسؤول عن الحفظ والتحقق ومراجعة الملكية والامتثال.',
      },
      category: 'partners',
      type: { en: 'Partner Certificate', ar: 'شهادة شريك' },
      issueDate: '2025-05-21',
      expiryDate: null,
      verified: true,
      fileSize: '2.4 MB',
      format: 'PDF',
    },
    {
      id: 'hcc-international-cert',
      fileUrl: '/documents/hcc-international-certificate.pdf',
      title: { en: 'HCC — Insurance Partner', ar: 'HCC — شريك التأمين' },
      description: {
        en: 'Insurance partner providing coverage across the group’s platforms and assets.',
        ar: 'شريك تأمين يوفر التغطية عبر منصات المجموعة وأصولها.',
      },
      category: 'partners',
      type: { en: 'Partner Certificate', ar: 'شهادة شريك' },
      issueDate: '2024-12-02',
      expiryDate: null,
      verified: true,
      fileSize: '2.3 MB',
      format: 'PDF',
    },
    {
      id: 'nova-digital-cert',
      fileUrl: '/documents/nova-digital-finance-certificate.pdf',
      title: { en: 'Nova Digital Finance', ar: 'نوفا للتمويل الرقمي' },
      description: {
        en: 'Digital finance partner supporting the group’s digital asset infrastructure.',
        ar: 'شريك التمويل الرقمي الداعم للبنية التحتية للأصول الرقمية للمجموعة.',
      },
      category: 'partners',
      type: { en: 'Partner Certificate', ar: 'شهادة شريك' },
      issueDate: '2025-05-29',
      expiryDate: null,
      verified: true,
      fileSize: '2.1 MB',
      format: 'PDF',
    },
  ]

  // Verifiable records that are issued per asset/project — no static PDF, verified on request.
  const verifiableRecords = [
    {
      id: 'ownership-certificates',
      title: { en: 'Ownership Certificates', ar: 'شهادات الملكية' },
      description: {
        en: 'Issued per investor and per asset, evidencing fractional ownership and title.',
        ar: 'تصدر لكل مستثمر ولكل أصل، تثبت الملكية الجزئية وحق التملّك.',
      },
    },
    {
      id: 'spv-certificates',
      title: { en: 'SPV Certificates', ar: 'شهادات الكيانات ذات الغرض الخاص' },
      description: {
        en: 'Each project is held by an independent SPV with its own documentation.',
        ar: 'كل مشروع محتفظ به عبر كيان ذي غرض خاص مستقل بوثائقه الخاصة.',
      },
    },
    {
      id: 'asset-documents',
      title: { en: 'Asset Documents', ar: 'وثائق الأصول' },
      description: {
        en: 'Every digital asset is linked to a documented, real-world underlying asset.',
        ar: 'كل أصل رقمي مرتبط بأصل حقيقي أساسي موثّق.',
      },
    },
    {
      id: 'contracts',
      title: { en: 'Contracts & Agreements', ar: 'العقود والاتفاقيات' },
      description: {
        en: 'Investment and platform contracts, made available for verification on request.',
        ar: 'عقود الاستثمار والمنصة، تتاح للتحقق عند الطلب.',
      },
    },
  ]

  const categories = [
    { value: 'all', label: t.allCategories },
    { value: 'reports', label: t.reports },
    { value: 'certificates', label: t.certificates },
    { value: 'partners', label: t.partners },
  ]

  const filteredDocuments = documents.filter(doc => {
    const term = searchTerm.toLowerCase()
    const matchesSearch =
      doc.title[language].toLowerCase().includes(term) ||
      doc.description[language].toLowerCase().includes(term) ||
      doc.type[language].toLowerCase().includes(term)

    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'reports': return FileText
      case 'certificates': return Award
      case 'partners': return Building2
      default: return FileText
    }
  }

  const custodyItems = [
    { icon: Lock, title: t.custody1Title, body: t.custody1Body },
    { icon: CheckCircle, title: t.custody2Title, body: t.custody2Body },
    { icon: Eye, title: t.custody3Title, body: t.custody3Body },
    { icon: Shield, title: t.custody4Title, body: t.custody4Body },
    { icon: FileText, title: t.custody5Title, body: t.custody5Body },
  ]

  const stats = [
    { number: 'SPV', label: t.independentSpvs },
    { number: '100%', label: t.assetBackedTitle },
    { number: documents.filter(d => d.verified).length, label: t.partnerVerified },
    { number: 'USA · UK', label: t.jurisdictions },
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

      {/* ===================================================== CIM FINANCIAL — OVERSIGHT & CUSTODY */}
      <Band tone="dark">
        <Reveal className="grid lg:grid-cols-[1fr_1.5fr] gap-10 items-end">
          <div>
            <Marker num="02" label={t.custodyMarker} light />
            <h2 className="font-display font-medium leading-[1.04] text-sand" style={{ fontSize: 'clamp(2.2rem,4.5vw,4rem)', letterSpacing: '-0.025em' }}>
              {t.custodyTitle}<span className="accent-em">{t.custodyTitleAccent}</span>
            </h2>
          </div>
          <p className="text-lg text-sand/70 leading-relaxed lg:pb-2">{t.custodyBody}</p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[color:var(--line-sand)]">
          {custodyItems.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal key={i} delay={(i % 3) * 0.05}>
                <div className="h-full p-8 border-b border-r border-[color:var(--line-sand)]">
                  <Icon className="w-7 h-7 text-primary" />
                  <h3 className="mt-5 font-display text-lg font-medium text-sand">{item.title}</h3>
                  <p className="mt-2 text-sm text-sand/60 leading-relaxed">{item.body}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Band>

      {/* ===================================================== LIBRARY + FILTERS */}
      <Band tone="light">
        <Reveal>
          <Marker num="03" label={t.libraryMarker} light />
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

                    <h3 className="mt-6 font-display text-lg font-medium leading-snug text-ink">{doc.title[language]}</h3>
                    <p className="mt-3 text-sm text-ink/60 leading-relaxed">{doc.description[language]}</p>

                    <div className="mt-6 pt-5 border-t border-[color:var(--line-dark)] space-y-2.5 text-sm flex-1">
                      <div className="flex items-center justify-between">
                        <span className="mono-label text-ink/45" style={{ fontSize: '0.6rem' }}>{doc.type[language]}</span>
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
                      {doc.issuer && (
                        <div className="flex items-center justify-between">
                          <span className="text-ink/50">{language === 'ar' ? 'الجهة المصدرة' : 'Issued by'}</span>
                          <span className="text-xs text-ink/80">{doc.issuer[language]}</span>
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
            <p className="mt-3 text-ink/60">{language === 'ar' ? 'حاول تعديل كلمات البحث أو المرشحات.' : 'Try adjusting your search terms or filters.'}</p>
            <button onClick={clearFilters} className={`group mt-8 ${BTN.forest}`}>
              {t.clearFilters}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Reveal>
        )}
      </Band>

      {/* ===================================================== VERIFIABLE ON REQUEST */}
      <Band tone="paper">
        <Reveal className="grid lg:grid-cols-[1fr_1.5fr] gap-10 items-end">
          <div>
            <Marker num="04" label={t.verifiableMarker} light />
            <h2 className="font-display font-medium leading-[1.04]" style={{ fontSize: 'clamp(2.2rem,4.5vw,4rem)', letterSpacing: '-0.025em' }}>
              {t.verifiableTitle}<span className="accent-em">{t.verifiableTitleAccent}</span>
            </h2>
          </div>
          <p className="text-lg text-ink/70 leading-relaxed lg:pb-2">{t.verifiableBody}</p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 border-t border-l border-[color:var(--line-dark)]">
          {verifiableRecords.map((record, i) => (
            <Reveal key={record.id} delay={(i % 2) * 0.05}>
              <div className="group h-full p-8 border-b border-r border-[color:var(--line-dark)] hover:bg-[rgba(47,173,111,0.05)] transition-colors">
                <div className="flex items-start justify-between gap-3">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                  <span className="inline-flex items-center gap-1.5 mono-label text-ink/45" style={{ fontSize: '0.6rem' }}>
                    <Lock className="w-3.5 h-3.5" />
                    {t.requestAccess}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-lg font-medium leading-snug text-ink">{record.title[language]}</h3>
                <p className="mt-3 text-sm text-ink/60 leading-relaxed">{record.description[language]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>
    </div>
  )
}

export default Documents

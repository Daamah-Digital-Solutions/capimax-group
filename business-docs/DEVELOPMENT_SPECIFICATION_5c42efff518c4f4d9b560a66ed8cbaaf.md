# Capimax Group Website - Development Specification

## PROJECT OVERVIEW

**Project Name:** Capimax Group Corporate Website
**Type:** Multi-company corporate website with investment platform features
**Languages:** English (Primary), Arabic (Secondary with RTL support)
**Technology Stack:** React, TypeScript, Tailwind CSS, Vite

---

## TECHNICAL REQUIREMENTS

### Framework & Libraries
- **Frontend:** React 18+ with TypeScript
- **Styling:** Tailwind CSS with custom design system
- **Build Tool:** Vite
- **Routing:** React Router v6
- **State Management:** React Context API / Zustand
- **Forms:** React Hook Form with Zod validation
- **Animations:** Framer Motion
- **Icons:** Lucide React / Heroicons
- **Internationalization:** react-i18next

### Design System
- **Colors:** Corporate blue/gold palette with neutral grays
- **Typography:** Professional font stack (Inter/Roboto for EN, Noto Sans Arabic for AR)
- **Components:** Consistent component library
- **Spacing:** 8px grid system
- **Breakpoints:** Mobile-first responsive design

---

## FOLDER STRUCTURE

```
src/
├── components/
│   ├── ui/                     # Reusable UI components
│   ├── layout/                 # Layout components
│   ├── sections/               # Page sections
│   └── forms/                  # Form components
├── pages/                      # Page components
│   ├── Home/
│   ├── About/
│   ├── Companies/
│   ├── Sectors/
│   ├── Platforms/
│   ├── Opportunities/
│   ├── Partnerships/
│   ├── Services/
│   ├── News/
│   ├── Licenses/
│   └── Contact/
├── hooks/                      # Custom React hooks
├── utils/                      # Utility functions
├── data/                       # Static data and constants
├── types/                      # TypeScript type definitions
├── i18n/                       # Internationalization files
├── assets/                     # Images, icons, fonts
└── styles/                     # Global styles and themes
```

---

## DATA STRUCTURE

### Company Data Model
```typescript
interface Company {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  slug: string;
  category: 'investment' | 'specialized' | 'trading' | 'fintech';
  description: {
    en: string;
    ar: string;
  };
  location: {
    country: string;
    city: string;
    address: {
      en: string;
      ar: string;
    };
  };
  contact: {
    phone: string[];
    email: string;
    website?: string;
  };
  license: {
    number: string;
    verificationUrl: string;
  };
  services: string[];
  logo: string;
  established?: string;
}
```

### Investment Opportunity Model
```typescript
interface InvestmentOpportunity {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  type: 'real-estate' | 'precious-metals' | 'digital-assets' | 'private-deals';
  status: 'active' | 'coming-soon' | 'closed';
  availableShares: number;
  sharePrice: number;
  currency: 'USD' | 'AED' | 'GBP';
  contractType: 'open' | 'closed';
  insurance: boolean;
  description: {
    en: string;
    ar: string;
  };
  riskLevel: 'low' | 'medium' | 'high';
  minimumInvestment: number;
  expectedReturn?: string;
  duration?: string;
  images: string[];
  documents?: {
    name: string;
    url: string;
    type: 'pdf' | 'doc';
  }[];
}
```

### News Article Model
```typescript
interface NewsArticle {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  slug: string;
  category: 'company-news' | 'market-analysis' | 'partnerships' | 'announcements';
  publishDate: string;
  author?: string;
  excerpt: {
    en: string;
    ar: string;
  };
  content: {
    en: string;
    ar: string;
  };
  featuredImage: string;
  tags: string[];
  featured: boolean;
}
```

---

## KEY FEATURES IMPLEMENTATION

### 1. Multilingual Support (i18n)
```typescript
// i18n configuration
const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About Us",
        companies: "Our Companies",
        // ... more translations
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: "الرئيسية",
        about: "من نحن",
        companies: "شركاتنا",
        // ... more translations
      }
    }
  }
};
```

### 2. RTL Support for Arabic
```css
/* Tailwind CSS RTL configuration */
[dir="rtl"] {
  .text-left { text-align: right; }
  .text-right { text-align: left; }
  .ml-4 { margin-right: 1rem; margin-left: 0; }
  .mr-4 { margin-left: 1rem; margin-right: 0; }
}
```

### 3. Responsive Navigation
```typescript
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  
  return (
    <nav className="bg-white shadow-lg">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex">
        {/* Navigation items */}
      </div>
      
      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {/* Hamburger menu */}
      </div>
    </nav>
  );
};
```

### 4. Investment Opportunity Filtering
```typescript
const useOpportunityFilters = () => {
  const [filters, setFilters] = useState({
    type: 'all',
    status: 'all',
    priceRange: [0, 10000],
    riskLevel: 'all'
  });
  
  const filteredOpportunities = useMemo(() => {
    return opportunities.filter(opportunity => {
      // Filter logic
    });
  }, [opportunities, filters]);
  
  return { filters, setFilters, filteredOpportunities };
};
```

### 5. Contact Form with Validation
```typescript
const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(contactSchema)
  });
  
  const onSubmit = async (data: ContactFormData) => {
    // Form submission logic
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form fields */}
    </form>
  );
};
```

---

## CONTENT MANAGEMENT

### Static Data Files
```
src/data/
├── companies.json              # Company information
├── investment-opportunities.json # Investment data
├── news-articles.json         # News and insights
├── partnerships.json          # Partner information
├── licenses.json              # Certificates and licenses
└── translations/
    ├── en.json                # English translations
    └── ar.json                # Arabic translations
```

### Image Assets Organization
```
public/images/
├── companies/                 # Company logos
├── investments/               # Investment opportunity images
├── news/                      # News article images
├── partners/                  # Partner logos
├── certificates/              # License and certificate images
├── team/                      # Team member photos
└── general/                   # General website images
```

---

## SEO OPTIMIZATION

### Meta Tags Implementation
```typescript
const SEOHead = ({ title, description, image, url }: SEOProps) => {
  return (
    <Helmet>
      <title>{title} | Capimax Group</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};
```

### Structured Data
```typescript
const CompanyStructuredData = ({ company }: { company: Company }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": company.name.en,
    "description": company.description.en,
    "url": `https://capimax.group/companies/${company.slug}`,
    "logo": company.logo,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": company.contact.phone[0],
      "contactType": "customer service"
    }
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};
```

---

## PERFORMANCE OPTIMIZATION

### Image Optimization
```typescript
const OptimizedImage = ({ src, alt, className }: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
};
```

### Code Splitting
```typescript
// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Companies = lazy(() => import('./pages/Companies'));

// Route configuration with Suspense
<Suspense fallback={<LoadingSpinner />}>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/companies" element={<Companies />} />
  </Routes>
</Suspense>
```

---

## ACCESSIBILITY FEATURES

### Keyboard Navigation
```typescript
const NavigationItem = ({ href, children }: NavItemProps) => {
  return (
    <Link
      to={href}
      className="focus:outline-none focus:ring-2 focus:ring-blue-500"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          // Handle keyboard activation
        }
      }}
    >
      {children}
    </Link>
  );
};
```

### Screen Reader Support
```typescript
const SkipLink = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2"
  >
    Skip to main content
  </a>
);
```

---

## TESTING STRATEGY

### Unit Tests
- Component rendering tests
- Utility function tests
- Hook behavior tests

### Integration Tests
- Form submission flows
- Navigation functionality
- Language switching

### E2E Tests
- User journey tests
- Cross-browser compatibility
- Mobile responsiveness

---

## DEPLOYMENT CONFIGURATION

### Build Optimization
```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@headlessui/react', 'framer-motion']
        }
      }
    }
  }
});
```

### Environment Variables
```
VITE_API_BASE_URL=https://api.capimax.group
VITE_CONTACT_EMAIL=info@capimax.group
VITE_GOOGLE_MAPS_API_KEY=your_api_key
VITE_ANALYTICS_ID=your_analytics_id
```

---

This specification provides a comprehensive guide for developing the Capimax Group website with all the features and requirements outlined in the original document.
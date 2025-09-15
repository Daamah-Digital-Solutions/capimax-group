# Capimax Group Website - Navigation Structure & Component Breakdown

## MAIN NAVIGATION MENU

### Primary Navigation (Header)
```
CAPIMAX GROUP [LOGO]
├── Home
├── About Us
├── Our Companies ▼
│   ├── All Companies Overview
│   ├── Investment Companies
│   │   ├── Capimax Investments UAE
│   │   ├── Capimax Investments UK
│   │   └── Capimax Investments USA
│   ├── Specialized Services
│   │   ├── Capimax Holding
│   │   ├── Capimax Development
│   │   ├── Capimax Virtual Assets
│   │   ├── Capimax Fintech & Blockchain
│   │   ├── Capimax Precious Metals
│   │   ├── Capimax Financial Management
│   │   ├── Capimax General Trading USA
│   │   ├── Nova Digital Finance
│   │   └── Capimax Virtual Assist
├── Investment Sectors ▼
│   ├── Real Estate
│   ├── Digital Assets
│   ├── Precious Metals
│   ├── FinTech & Blockchain
│   ├── Financial Services
│   ├── Global Trading
│   └── Future Investments
├── Digital Platforms ▼
│   ├── Nova Digital Finance
│   ├── Capimax Virtual Assets Platform
│   ├── Capimax Fintech Hub
│   └── Capimax App (Coming Soon)
├── Investment Opportunities
├── Partnerships
├── Services
├── News & Insights
├── Contact Us
└── [Language Toggle: EN | AR] [Start Investment CTA Button]
```

---

## PAGE COMPONENT BREAKDOWN

### 1. HOME PAGE COMPONENTS

#### Header Component
- **Logo:** Capimax Group branding
- **Navigation Menu:** Primary navigation with dropdowns
- **Language Toggle:** EN/AR switcher
- **CTA Button:** "Start Investment Now"

#### Hero Section Component
- **Background:** Dynamic video/image slider
- **Headline:** Main value proposition
- **Subheadline:** Supporting message
- **CTA Buttons:** 
  - "Discover Investment Opportunities"
  - "Learn More About Us"
- **Statistics Overlay:** Key numbers

#### About Snapshot Component
- **Content:** Brief company description
- **CTA Button:** "Read More" → About page

#### Companies Grid Component
- **Layout:** 4x3 grid of company cards
- **Card Elements:**
  - Company logo
  - Company name
  - Brief description
  - "Learn More" link
- **CTA Button:** "View All Companies"

#### Digital Platforms Component
- **Layout:** 2x2 grid or horizontal cards
- **Card Elements:**
  - Platform icon/image
  - Platform name
  - Description (2-3 lines)
  - "Visit Platform" button
- **CTA Button:** "Discover Our Platforms"

#### Investment Sectors Component
- **Layout:** Icon grid (3x3 or 4x2)
- **Elements:**
  - Sector icon
  - Sector name
  - Brief description
- **CTA Button:** "Explore Sectors"

#### Strategic Partnerships Component
- **Layout:** Partner logo carousel
- **Content:** Brief partnership description
- **CTA Button:** "Learn More"

#### KPIs/Achievements Component
- **Layout:** Infographic style
- **Metrics:**
  - 12+ Subsidiary Companies
  - 60+ Investment Activities
  - 10+ Countries Coverage
  - 1000+ Active Investors

#### Investment CTA Component
- **Message:** "Start your investment today"
- **CTA Button:** "Start Now"

#### News & Insights Component
- **Layout:** 3-column news cards
- **Card Elements:**
  - Article image
  - Headline
  - Date
  - Brief excerpt
  - "Read More" link
- **CTA Button:** "Read More News"

#### Footer Component
- **Sections:**
  - Quick Links
  - Contact Information
  - Office Locations
  - Social Media Links
  - Legal Links

---

### 2. ABOUT US PAGE COMPONENTS

#### Page Header Component
- **Breadcrumb:** Home > About Us
- **Page Title:** "About Capimax Group"
- **Subtitle:** Brief introduction

#### Introduction Section Component
- **Content:** Company overview
- **Visual:** Company image or infographic

#### Mission/Vision/Values Component
- **Layout:** 3-column layout or tabs
- **Content:** Detailed descriptions with icons

#### Journey Timeline Component
- **Layout:** Horizontal or vertical timeline
- **Milestones:** Key company achievements

#### Group Structure Component
- **Visual:** Organizational chart
- **Interactive:** Clickable company nodes

#### Why Choose Us Component
- **Layout:** Feature grid
- **Elements:** Icons with descriptions

#### Leadership Team Component (Optional)
- **Layout:** Team member cards
- **Elements:** Photo, name, title, bio

---

### 3. COMPANIES PAGE COMPONENTS

#### Companies Overview Component
- **Introduction:** Section description
- **Filter/Sort:** By category, location, services

#### Company Grid Component
- **Layout:** Responsive grid
- **Card Elements:**
  - Company logo
  - Company name
  - Category tag
  - Brief description
  - Location
  - "Learn More" button

#### Individual Company Page Components
- **Company Header:**
  - Logo and name
  - Location and contact
  - License verification
- **Services Section:**
  - Service list with descriptions
- **Investment Opportunities:**
  - Current opportunities
- **Contact Form:**
  - Company-specific contact

---

### 4. INVESTMENT OPPORTUNITIES COMPONENTS

#### Opportunities Filter Component
- **Filter Options:**
  - Investment type
  - Status (Active/Coming Soon)
  - Price range
  - Risk level

#### Opportunity Cards Component
- **Card Layout:**
  - Investment image
  - Investment type
  - Status badge
  - Key details (shares, price, type)
  - Insurance status
  - Description
  - "Apply Now" button

#### Opportunity Detail Modal/Page
- **Sections:**
  - Detailed information
  - Risk disclosures
  - Application form
  - Contact information

---

### 5. PARTNERSHIPS PAGE COMPONENTS

#### Partner Logos Component
- **Layout:** Logo grid with hover effects
- **Links:** Partner websites (if applicable)

#### License Verification Component
- **Elements:**
  - Global Entity Number
  - Verification links
  - Certificate displays

#### Partnership News Component
- **Layout:** News cards
- **Content:** Recent partnership announcements

#### Document Downloads Component
- **Elements:**
  - PDF download buttons
  - Document descriptions
  - Verification links

---

### 6. CONTACT PAGE COMPONENTS

#### Office Locations Component
- **Layout:** 3-column layout for offices
- **Elements:**
  - Country flag
  - Address
  - Phone numbers
  - Email
  - Office hours

#### Contact Form Component
- **Fields:**
  - Full Name (required)
  - Email (required)
  - Phone Number
  - Subject
  - Message (required)
  - Preferred Language
  - Company/Organization (optional)
- **Validation:** Real-time form validation
- **Submission:** Success/error messages

#### Interactive Map Component
- **Features:**
  - Multiple office markers
  - Zoom controls
  - Directions integration
  - Office information popups

---

## SHARED COMPONENTS

### Language Toggle Component
- **Functionality:** Switch between EN/AR
- **Storage:** Remember user preference
- **RTL Support:** Layout adjustment for Arabic

### Search Component
- **Features:**
  - Global site search
  - Autocomplete suggestions
  - Filter by content type

### Breadcrumb Component
- **Navigation:** Show current page path
- **Links:** Clickable navigation trail

### Loading Components
- **Skeleton Loaders:** For content loading
- **Progress Indicators:** For form submissions

### Modal Components
- **Investment Application Modal**
- **Contact Form Modal**
- **Image Gallery Modal**
- **Video Player Modal**

### CTA Components
- **Primary CTA:** Main action buttons
- **Secondary CTA:** Supporting actions
- **Floating CTA:** Sticky investment button

---

## RESPONSIVE DESIGN BREAKPOINTS

### Desktop (1200px+)
- Full navigation menu
- Multi-column layouts
- Hover effects
- Large images and videos

### Tablet (768px - 1199px)
- Condensed navigation
- 2-column layouts
- Touch-friendly buttons
- Medium-sized media

### Mobile (320px - 767px)
- Hamburger menu
- Single-column layouts
- Large touch targets
- Optimized forms
- Swipe gestures

---

## ACCESSIBILITY FEATURES

### Navigation
- Keyboard navigation support
- Screen reader compatibility
- Focus indicators
- Skip links

### Content
- Alt text for images
- Descriptive link text
- Proper heading hierarchy
- Color contrast compliance

### Forms
- Label associations
- Error message announcements
- Required field indicators
- Validation feedback

---

## PERFORMANCE OPTIMIZATION

### Images
- WebP format with fallbacks
- Responsive images
- Lazy loading
- Compression optimization

### Code
- Minified CSS/JS
- Code splitting
- Tree shaking
- Bundle optimization

### Caching
- Browser caching
- CDN implementation
- Service worker caching
- API response caching

---

This detailed breakdown provides a comprehensive guide for developers to build the Capimax Group website with all necessary components and features.
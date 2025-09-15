import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ThemeProvider } from './hooks/use-theme.jsx'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Companies from './components/pages/Companies'
import Sectors from './components/pages/Sectors'
import Partners from './components/pages/Partners'
import Documents from './components/pages/Documents'
import Investors from './components/pages/Investors'
import Contact from './components/pages/Contact'
import News from './components/pages/News'
import CompanyDetail from './components/pages/CompanyDetail'

// Language Context
import { createContext, useContext } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en')
  }

  // Apply RTL class to document
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = language
  }, [language])

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    isRTL: language === 'ar'
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

function AppContent() {
  const { language, toggleLanguage, isRTL } = useLanguage()

  return (
    <Router>
      <div className={`min-h-screen bg-background text-foreground ${isRTL ? 'rtl' : 'ltr'}`}>
        <Header 
          language={language} 
          toggleLanguage={toggleLanguage}
        />
        <main>
          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="/about" element={<About language={language} />} />
            <Route path="/companies" element={<Companies language={language} />} />
            <Route path="/company/:id" element={<CompanyDetail language={language} />} />
            <Route path="/sectors" element={<Sectors language={language} />} />
            <Route path="/partners" element={<Partners language={language} />} />
            <Route path="/documents" element={<Documents language={language} />} />
            <Route path="/investors" element={<Investors language={language} />} />
            <Route path="/contact" element={<Contact language={language} />} />
            <Route path="/news" element={<News language={language} />} />
          </Routes>
        </main>
        <Footer language={language} />
      </div>
    </Router>
  )
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="capimax-theme">
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App


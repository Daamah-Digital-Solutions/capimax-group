import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/layout/Container'
import { HStack } from '@/components/layout/Stack'
import { useTheme } from '@/hooks/use-theme.jsx'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  Moon,
  Sun,
  Building2,
  TrendingUp,
  Users,
  FileText,
  Phone,
  Newspaper,
  ArrowRight
} from 'lucide-react'
import capimaxLogo from '@/assets/capimax-group-logo.png'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const Header = ({ language, toggleLanguage }) => {
  const { theme, toggleTheme, isDark } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const translations = {
    en: {
      home: 'Home',
      about: 'About Us',
      companies: 'Our Companies',
      sectors: 'Sectors',
      partners: 'Partners',
      documents: 'Documents',
      investors: 'For Investors',
      contact: 'Contact',
      news: 'News',
      language: 'العربية',
      menu: 'Menu',
      getStarted: 'Get Started'
    },
    ar: {
      home: 'الرئيسية',
      about: 'من نحن',
      companies: 'شركاتنا',
      sectors: 'القطاعات',
      partners: 'الشركاء',
      documents: 'المستندات',
      investors: 'للمستثمرين',
      contact: 'اتصل بنا',
      news: 'الأخبار',
      language: 'English',
      menu: 'القائمة',
      getStarted: 'ابدأ'
    }
  }

  const t = translations[language]

  const navigationItems = [
    { name: t.home, path: '/', icon: Building2 },
    { name: t.about, path: '/about', icon: Users },
    { name: t.companies, path: '/companies', icon: Building2 },
    { name: t.sectors, path: '/sectors', icon: TrendingUp },
    { name: t.partners, path: '/partners', icon: Users },
    { name: t.documents, path: '/documents', icon: FileText },
    { name: t.investors, path: '/investors', icon: TrendingUp },
    { name: t.news, path: '/news', icon: Newspaper },
    { name: t.contact, path: '/contact', icon: Phone }
  ]

  const isActive = (path) => location.pathname === path

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-gray-200/50"
    >
      <Container size="full" className="px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center group">
              <img
                src={capimaxLogo}
                alt="Capimax Group"
                className="h-10 sm:h-12 w-auto object-contain transition-all duration-300"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.slice(0, 7).map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                    isActive(item.path)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActive(item.path) && (
                    <motion.div
                      className="absolute inset-0 bg-primary/10 rounded-lg"
                      layoutId="activeTab"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  )}
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-primary rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "80%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="w-9 h-9 p-0 rounded-full hover:bg-muted/80 transition-all duration-300"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isDark ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {isDark ? (
                    <Sun className="h-4 w-4 text-warning" />
                  ) : (
                    <Moon className="h-4 w-4 text-primary" />
                  )}
                </motion.div>
              </Button>
            </motion.div>

            {/* Get Started Button - Desktop */}
            <motion.div 
              className="hidden md:block"
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild
                className="bg-gradient-to-r from-primary to-success hover:from-primary/90 hover:to-success/90 text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link to="/investors">
                  {t.getStarted}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <motion.div 
              className="lg:hidden"
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-9 h-9 p-0 rounded-full hover:bg-muted/80 transition-all duration-300"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {isMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </motion.div>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-gray-200/50 shadow-xl"
            >
              <Container size="full" className="px-4 py-6">
                <div className="space-y-3">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      variants={itemVariants}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 group ${
                          isActive(item.path)
                            ? 'text-primary bg-primary/10 border border-primary/20'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                      >
                        <item.icon className={`h-5 w-5 ${
                          isActive(item.path) ? 'text-primary' : 'text-muted-foreground'
                        }`} />
                        <span>{item.name}</span>
                        <ArrowRight className={`h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ${
                          isActive(item.path) ? 'text-primary' : 'text-muted-foreground'
                        }`} />
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* Mobile Get Started Button */}
                  <motion.div
                    variants={itemVariants}
                    className="pt-4 border-t border-gray-200/50"
                  >
                    <Button 
                      asChild
                      className="w-full bg-gradient-to-r from-primary to-success hover:from-primary/90 hover:to-success/90 text-white rounded-xl py-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Link to="/investors">
                        {t.getStarted}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  )
}

export default Header
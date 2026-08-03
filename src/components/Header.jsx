import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Moon, Sun } from 'lucide-react'
import capimaxLogo from '@/assets/capimax-group-logo.png'
import { useTheme } from '@/hooks/use-theme.jsx'

const Header = ({ language }) => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const t = {
    en: {
      home: 'Home', about: 'About', companies: 'Companies', ecosystem: 'Ecosystem', platforms: 'Platforms',
      sectors: 'Sectors', ownership: 'Ownership', contact: 'Contact',
      cta: 'Start a conversation', tagline: 'Holding Group',
    },
    ar: {
      home: 'الرئيسية', about: 'من نحن', companies: 'الشركات', ecosystem: 'المنظومة', platforms: 'المنصات',
      sectors: 'القطاعات', ownership: 'التملّك', contact: 'تواصل',
      cta: 'ابدأ محادثة', tagline: 'مجموعة قابضة',
    },
  }[language]

  const nav = [
    { name: t.home, path: '/' },
    { name: t.about, path: '/about' },
    { name: t.companies, path: '/companies' },
    { name: t.ecosystem, path: '/ecosystem' },
    { name: t.platforms, path: '/platforms' },
    { name: t.sectors, path: '/sectors' },
    { name: t.ownership, path: '/investors' },
    { name: t.contact, path: '/contact' },
  ]

  // Transparent (cream text) only over the dark home hero; solid dark elsewhere.
  const solid = scrolled || !isHome

  const Wordmark = ({ onClick }) => (
    <Link to="/" onClick={onClick} className="inline-flex items-center group">
      {/* Original Capimax logo, rendered white to stay visible on the dark header. */}
      <img
        src={capimaxLogo}
        alt="Capimax Group"
        className={`w-auto transition-all duration-500 group-hover:opacity-80 ${solid ? 'h-7' : 'h-9'}`}
        style={{ filter: 'brightness(0) invert(1)' }}
      />
    </Link>
  )

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-[9999] transition-all duration-500 ${
          solid
            ? 'bg-forest-pitch/92 backdrop-blur-xl border-b border-[color:var(--line-sand)]'
            : 'bg-transparent border-b border-transparent'
        }`}
        style={{ transitionTimingFunction: 'var(--ease-out)' }}
      >
        <div
          className={`max-w-[1480px] mx-auto px-6 lg:px-12 grid grid-cols-[1fr_auto_1fr] items-center gap-8 transition-all duration-500 ${
            solid ? 'py-3' : 'py-5'
          }`}
        >
          {/* Left: wordmark */}
          <div className="justify-self-start">
            <Wordmark />
          </div>

          {/* Center: nav */}
          <nav className="justify-self-center hidden lg:flex items-center gap-1">
            {nav.map((item) => {
              const active = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 text-sm text-sand/85 hover:text-sand transition-colors ${active ? 'text-sand' : ''}`}
                >
                  {item.name}
                  <span
                    className={`absolute left-4 right-4 bottom-1 h-px bg-primary origin-left transition-transform duration-500 ${active ? 'scale-x-100' : 'scale-x-0'}`}
                    style={{ transitionTimingFunction: 'var(--ease-out)' }}
                  />
                </Link>
              )
            })}
          </nav>

          {/* Right: theme toggle + CTA + burger */}
          <div className="justify-self-end flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-10 h-10 flex items-center justify-center text-sand/80 hover:text-sand border border-transparent hover:border-[color:var(--line-sand-mid)] transition-colors"
            >
              {isDark ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
            </button>
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center gap-2 border border-[color:var(--line-sand-mid)] text-sand text-[13px] font-medium px-5 py-2.5 hover:bg-sand hover:text-forest-pitch hover:border-sand transition-colors group"
            >
              {t.cta}
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <button
              aria-label="Menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden relative w-11 h-11 border border-[color:var(--line-sand-mid)] flex items-center justify-center"
            >
              <span className="sr-only">Menu</span>
              <div className="relative w-[18px] h-[12px]">
                <span className={`absolute left-0 top-0 w-full h-px bg-sand transition-all duration-300 ${menuOpen ? 'top-1.5 rotate-45' : ''}`} />
                <span className={`absolute left-0 top-1.5 w-full h-px bg-sand transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`absolute left-0 top-3 w-full h-px bg-sand transition-all duration-300 ${menuOpen ? 'top-1.5 -rotate-45' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[9998] bg-forest-pitch lg:hidden"
          >
            <div className="absolute inset-0 opacity-60" style={{ background: 'radial-gradient(circle at 70% 25%, rgba(47,173,111,0.10), transparent 55%)' }} />
            <div className="relative h-full flex flex-col pt-28 px-8 pb-12 overflow-y-auto">
              <ul>
                {nav.map((item, i) => (
                  <li key={item.path} className="border-b border-[color:var(--line-sand)]">
                    <Link
                      to={item.path}
                      className="flex items-baseline gap-4 py-5 text-sand hover:pl-4 transition-all duration-300"
                      style={{ transitionTimingFunction: 'var(--ease-out)' }}
                    >
                      <span className="mono-label text-primary" style={{ fontSize: '0.7rem' }}>0{i + 1}</span>
                      <span className="font-display text-3xl font-medium">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-10 inline-flex items-center justify-center gap-2 bg-sand text-forest-pitch font-semibold px-7 py-4"
              >
                {t.cta}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header

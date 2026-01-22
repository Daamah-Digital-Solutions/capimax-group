import { Link } from 'react-router-dom'
import { Container } from '@/components/layout/Container'
import { Grid } from '@/components/layout/Grid'
import { VStack, HStack } from '@/components/layout/Stack'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Building2,
  TrendingUp,
  Shield,
  Globe,
  ArrowRight,
  Instagram,
  Youtube
} from 'lucide-react'
import capimaxLogo from '@/assets/capimax-group-logo.png'

const Footer = ({ language }) => {
  const translations = {
    en: {
      about: 'About Capimax',
      aboutText: 'Leading global investment platform offering fractional ownership, real estate, precious metals, digital assets, and fintech solutions.',
      quickLinks: 'Quick Links',
      companies: 'Our Companies',
      sectors: 'Sectors', 
      partners: 'Partners',
      investors: 'For Investors',
      contact: 'Contact Info',
      email: 'info@capimaxgroup.com',
      phone: '+44 20 7946 0958',
      address: '128 City Road, London, EC1V 2NX, UK',
      followUs: 'Follow Us',
      allRights: '© 2024 Capimax Group. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookies: 'Cookie Policy',
      newsletter: 'Newsletter',
      newsletterText: 'Stay updated with our latest investment opportunities and insights.',
      subscribe: 'Subscribe',
      emailPlaceholder: 'Enter your email',
      getStarted: 'Get Started Today'
    },
    ar: {
      about: 'حول كابيماكس',
      aboutText: 'منصة استثمارية عالمية رائدة تقدم الملكية الجزئية والعقارات والمعادن الثمينة والأصول الرقمية وحلول التكنولوجيا المالية.',
      quickLinks: 'روابط سريعة',
      companies: 'شركاتنا',
      sectors: 'القطاعات',
      partners: 'الشركاء',
      investors: 'للمستثمرين',
      contact: 'معلومات الاتصال',
      email: 'info@capimaxgroup.com',
      phone: '+44 20 7946 0958',
      address: '128 City Road, London, EC1V 2NX, UK',
      followUs: 'تابعنا',
      allRights: '© 2024 مجموعة كابيماكس. جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
      cookies: 'سياسة ملفات تعريف الارتباط',
      newsletter: 'النشرة الإخبارية',
      newsletterText: 'ابق على اطلاع بأحدث الفرص الاستثمارية والرؤى لدينا.',
      subscribe: 'اشترك',
      emailPlaceholder: 'أدخل بريدك الإلكتروني',
      getStarted: 'ابدأ اليوم'
    }
  }

  const t = translations[language]

  const quickLinks = [
    { name: t.companies, path: '/companies', icon: Building2 },
    { name: t.sectors, path: '/sectors', icon: TrendingUp },
    { name: t.partners, path: '/partners', icon: Shield },
    { name: t.investors, path: '/investors', icon: Globe }
  ]

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: '#', color: 'text-blue-600' },
    { name: 'Twitter', icon: Twitter, url: '#', color: 'text-blue-400' },
    { name: 'Facebook', icon: Facebook, url: '#', color: 'text-blue-700' },
    { name: 'Instagram', icon: Instagram, url: '#', color: 'text-pink-600' },
    { name: 'YouTube', icon: Youtube, url: '#', color: 'text-red-600' }
  ]

  const legalLinks = [
    { name: t.privacy, path: '/privacy' },
    { name: t.terms, path: '/terms' },
    { name: t.cookies, path: '/cookies' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <footer className="bg-gradient-to-br from-card via-card to-muted/30 border-t border-gray-200/50">
      {/* Main Footer Content */}
      <Container size="xl" className="px-4 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <Grid cols={4} gap="xl" className="mb-12">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <VStack gap="lg" align="start">
                {/* Logo */}
                <Link to="/">
                  <motion.div
                    className="flex items-center"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={capimaxLogo}
                      alt="Capimax Group"
                      className="h-12 w-auto object-contain"
                    />
                  </motion.div>
                </Link>

                <p className="text-muted-foreground leading-relaxed">
                  {t.aboutText}
                </p>

                {/* Social Links */}
                <div>
                  <h4 className="font-semibold mb-4">{t.followUs}</h4>
                  <HStack gap="sm">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 bg-muted/50 hover:bg-primary/10 rounded-xl flex items-center justify-center transition-all duration-300 group`}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <social.icon className={`w-5 h-5 text-muted-foreground group-hover:${social.color} transition-colors duration-300`} />
                      </motion.a>
                    ))}
                  </HStack>
                </div>
              </VStack>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <VStack gap="lg" align="start">
                <h4 className="font-semibold text-lg">{t.quickLinks}</h4>
                <VStack gap="sm" align="start">
                  {quickLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-all duration-300 group"
                      >
                        <link.icon className="w-4 h-4 group-hover:text-primary transition-colors" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.name}
                        </span>
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </Link>
                    </motion.div>
                  ))}
                </VStack>
              </VStack>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <VStack gap="lg" align="start">
                <h4 className="font-semibold text-lg">{t.contact}</h4>
                <VStack gap="md" align="start">
                  <motion.div 
                    className="flex items-start space-x-3 text-muted-foreground group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Mail className="w-5 h-5 mt-0.5 text-primary group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-medium group-hover:text-primary transition-colors">Email</div>
                      <a href={`mailto:${t.email}`} className="text-sm hover:text-primary transition-colors">
                        {t.email}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start space-x-3 text-muted-foreground group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Phone className="w-5 h-5 mt-0.5 text-success group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-medium group-hover:text-success transition-colors">Phone</div>
                      <a href={`tel:${t.phone}`} className="text-sm hover:text-success transition-colors">
                        {t.phone}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start space-x-3 text-muted-foreground group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MapPin className="w-5 h-5 mt-0.5 text-warning group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-medium group-hover:text-warning transition-colors">Address</div>
                      <div className="text-sm">{t.address}</div>
                    </div>
                  </motion.div>
                </VStack>
              </VStack>
            </motion.div>

            {/* Newsletter */}
            <motion.div variants={itemVariants}>
              <VStack gap="lg" align="start">
                <h4 className="font-semibold text-lg">{t.newsletter}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t.newsletterText}
                </p>
                
                <div className="w-full space-y-3">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder={t.emailPlaceholder}
                      className="flex-1 px-4 py-2 bg-background border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    />
                    <motion.button
                      className="px-6 py-2 bg-gradient-to-r from-primary to-success text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {t.subscribe}
                      <ArrowRight className="ml-2 w-3 h-3 inline group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                  
                  <motion.div
                    className="pt-4"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link 
                      to="/investors"
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-success/10 border border-primary/20 rounded-xl text-primary hover:bg-gradient-to-r hover:from-primary/20 hover:to-success/20 transition-all duration-300 group"
                    >
                      <span className="font-medium">{t.getStarted}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>
              </VStack>
            </motion.div>
          </Grid>

          {/* Bottom Bar */}
          <motion.div 
            variants={itemVariants}
            className="pt-8 border-t border-gray-200/50"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <motion.div 
                className="text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {t.allRights}
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                {legalLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 1 + (index * 0.1) }}
                  >
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-success/5 rounded-full blur-3xl pointer-events-none" />
    </footer>
  )
}

export default Footer
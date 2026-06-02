// Shared editorial primitives for the Capimax brand theme (teal #0a2928 + green #2fad6f).
// Use these on every page so the whole site stays consistent. Reference: pages/Home.jsx.
import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'

export const EASE = [0.16, 1, 0.3, 1]

// Sharp, editorial buttons — crisp in both light and dark.
export const BTN = {
  // primary on DARK sections (off-white fill)
  sand: 'inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-medium bg-sand text-forest-pitch hover:bg-[color:var(--color-sand-light)] transition-colors duration-300',
  // secondary on DARK sections
  ghostLight: 'inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-medium border border-[color:var(--line-sand-mid)] text-sand hover:bg-sand hover:text-forest-pitch transition-colors duration-300',
  // primary on LIGHT sections (teal fill)
  forest: 'inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-medium bg-forest text-sand hover:bg-forest-mid transition-colors duration-300',
  // secondary on LIGHT sections
  ghostDark: 'inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-medium border border-[color:var(--line-dark)] text-ink hover:bg-forest hover:text-sand transition-colors duration-300',
  // green accent button (works anywhere)
  green: 'inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-medium bg-primary text-primary-foreground hover:bg-[color:var(--color-secondary-green)] transition-colors duration-300',
}

export const Reveal = ({ children, delay = 0, className, as: Tag = motion.div }) => (
  <Tag
    initial={{ opacity: 0, y: 36 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '0px 0px -80px 0px' }}
    transition={{ duration: 0.9, ease: EASE, delay }}
    className={className}
  >
    {children}
  </Tag>
)

// Mono eyebrow with a small accent rule.
export const Eyebrow = ({ children, light }) => (
  <span className={`eyebrow inline-flex items-center gap-3 ${light ? 'text-sand/55' : 'text-primary'}`}>
    <span className="h-px w-8 bg-primary" />
    {children}
  </span>
)

// Numbered section marker (italic number + mono label + underline).
export const Marker = ({ num, label, light }) => (
  <div className={`flex items-center gap-4 pb-3 mb-9 border-b ${light ? 'border-[color:var(--line-sand)]' : 'border-[color:var(--line-dark)]'}`}>
    {num && <span className="font-display italic text-2xl text-primary leading-none">{num}</span>}
    <span className={`mono-label ${light ? 'text-sand/55' : 'text-ink/45'}`}>{label}</span>
  </div>
)

// Section heading: Playfair with a green italic accent word.
export const Heading = ({ lead, accent, tail, light, className = '', size = 'clamp(2.2rem,4.5vw,4rem)' }) => (
  <h2 className={`font-display font-medium leading-[1.04] text-balance ${light ? 'text-sand' : 'text-ink'} ${className}`} style={{ fontSize: size, letterSpacing: '-0.025em' }}>
    {lead}
    {accent && <span className="accent-em">{accent}</span>}
    {tail}
  </h2>
)

/**
 * Dark editorial hero used at the top of inner pages (sits under the solid header).
 */
export const PageHero = ({ eyebrow, title, accent, tail, subtitle, children }) => (
  <section className="relative bg-forest-pitch text-sand pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden">
    <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
    <div className="absolute -top-20 right-0 w-[34rem] h-[34rem]" style={{ background: 'radial-gradient(circle, rgba(47,173,111,0.12), transparent 60%)' }} />
    <Container size="xl" className="relative z-10">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE }}>
        {eyebrow && <Eyebrow light>{eyebrow}</Eyebrow>}
        <h1 className="mt-6 font-display font-medium leading-[1.04] text-balance" style={{ fontSize: 'clamp(2.6rem,6.5vw,5.5rem)', letterSpacing: '-0.03em' }}>
          {title}
          {accent && <span className="accent-em">{accent}</span>}
          {tail}
        </h1>
        {subtitle && <p className="mt-7 text-lg md:text-xl text-sand/70 max-w-2xl leading-relaxed">{subtitle}</p>}
        {children}
      </motion.div>
    </Container>
  </section>
)

/**
 * Section band with a tone. Wraps content in a Container.
 * tones: light | paper | dark | darker | pitch
 */
export const Band = ({ tone = 'light', className = '', containerClassName = '', children }) => {
  const tones = {
    light: 'bg-cream text-ink',
    paper: 'bg-paper text-ink border-y border-[color:var(--line-mid)]',
    dark: 'bg-forest text-sand',
    darker: 'bg-forest-darker text-sand',
    pitch: 'bg-forest-pitch text-sand',
  }
  return (
    <section className={`py-20 lg:py-28 ${tones[tone] || tones.light} ${className}`}>
      <Container size="xl" className={containerClassName}>
        {children}
      </Container>
    </section>
  )
}

// Convenience: is a tone dark? (for choosing marker/eyebrow variants)
export const isDarkTone = (tone) => tone === 'dark' || tone === 'darker' || tone === 'pitch'

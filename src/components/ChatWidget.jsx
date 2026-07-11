// Capimax AI assistant — custom on-brand chat widget (n8n backend).
// Matches the editorial brand system (forest teal + green + sand), bilingual EN/AR,
// RTL-aware, and mounted globally so it persists across route changes.
//
// Backend: POST { action, sessionId, chatInput } -> { output }
// The sessionId is kept stable for the whole visit (persisted in sessionStorage)
// so the bot keeps context — server memory = last 12 messages.
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageSquareText, X, ArrowUp, RefreshCw } from 'lucide-react'

const CHAT_ENDPOINT = 'https://ai.capimaxgroup.com/webhook/capimax-group/chat'
const SESSION_KEY = 'capimax-chat-session'
const EASE = [0.16, 1, 0.3, 1]

const COPY = {
  en: {
    launch: 'Chat with us',
    title: 'Capimax Assistant',
    status: 'Online · usually replies in seconds',
    greeting:
      "Hello — I'm the Capimax assistant. Ask me anything about our companies, platforms, fractional ownership, or how to get started.",
    placeholder: 'Type your message…',
    send: 'Send',
    error: 'Sorry, something went wrong. Please try again.',
    reset: 'New chat',
    poweredBy: 'AI assistant',
  },
  ar: {
    launch: 'تحدّث معنا',
    title: 'مساعد كابي ماكس',
    status: 'متصل · يردّ عادةً خلال ثوانٍ',
    greeting:
      'أهلًا — أنا مساعد كابي ماكس. اسألني عن أي حاجة تخص شركاتنا، منصّاتنا، الملكية الجزئية، أو إزاي تبدأ.',
    placeholder: 'اكتب رسالتك…',
    send: 'إرسال',
    error: 'حصل خطأ، حاول مرة تانية من فضلك.',
    reset: 'محادثة جديدة',
    poweredBy: 'مساعد ذكي',
  },
}

// Stable per-visit session id (survives route changes and refresh).
function getSessionId() {
  try {
    let id = sessionStorage.getItem(SESSION_KEY)
    if (!id) {
      id =
        (crypto?.randomUUID && crypto.randomUUID()) ||
        `sess-${Math.abs(Date.now())}-${Math.floor(Math.random() * 1e6)}`
      sessionStorage.setItem(SESSION_KEY, id)
    }
    return id
  } catch {
    return `sess-${Math.floor(Math.random() * 1e9)}`
  }
}

const TypingDots = () => (
  <span className="inline-flex items-center gap-1 py-1">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="w-1.5 h-1.5 rounded-full bg-primary/70"
        animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
        transition={{ duration: 1, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
      />
    ))}
  </span>
)

const ChatWidget = ({ language = 'en' }) => {
  const isAr = language === 'ar'
  const t = COPY[isAr ? 'ar' : 'en']

  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState([{ role: 'bot', text: COPY.en.greeting }])

  const sessionRef = useRef(getSessionId())
  const scrollRef = useRef(null)
  const inputRef = useRef(null)

  // Keep the greeting in sync with the active language while it's still the only message.
  useEffect(() => {
    setMessages((prev) =>
      prev.length === 1 && prev[0].role === 'bot' ? [{ role: 'bot', text: t.greeting }] : prev,
    )
  }, [language]) // eslint-disable-line react-hooks/exhaustive-deps

  // Auto-scroll to the newest message.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, loading, open])

  // Focus the input when the panel opens.
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 250)
  }, [open])

  const resetChat = () => {
    try {
      sessionStorage.removeItem(SESSION_KEY)
    } catch {
      /* ignore */
    }
    sessionRef.current = getSessionId()
    setMessages([{ role: 'bot', text: t.greeting }])
  }

  const send = async () => {
    const text = input.trim()
    if (!text || loading) return

    setInput('')
    setMessages((prev) => [...prev, { role: 'user', text }])
    setLoading(true)

    try {
      const res = await fetch(CHAT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'sendMessage',
          sessionId: sessionRef.current,
          chatInput: text,
        }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json().catch(() => ({}))
      const reply =
        data?.output ?? data?.text ?? data?.message ?? data?.reply ?? t.error
      setMessages((prev) => [...prev, { role: 'bot', text: String(reply) }])
    } catch {
      setMessages((prev) => [...prev, { role: 'bot', text: t.error, error: true }])
    } finally {
      setLoading(false)
    }
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  const side = isAr ? 'left-5 lg:left-8' : 'right-5 lg:right-8'

  return (
    <div className={`fixed bottom-5 lg:bottom-8 ${side} z-[70] flex flex-col items-end`}>
      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.35, ease: EASE }}
            style={{ transformOrigin: isAr ? 'bottom left' : 'bottom right' }}
            className="mb-4 w-[calc(100vw-2.5rem)] sm:w-[380px] h-[min(600px,72vh)] flex flex-col overflow-hidden bg-cream shadow-2xl shadow-forest-pitch/25 border border-[color:var(--line-dark)] rounded-2xl"
            dir={isAr ? 'rtl' : 'ltr'}
            role="dialog"
            aria-label={t.title}
          >
            {/* Header */}
            <div className="relative bg-forest text-sand px-5 py-4 flex items-center gap-3 overflow-hidden">
              <div
                className="absolute -top-8 ltr:-right-8 rtl:-left-8 w-32 h-32"
                style={{ background: 'radial-gradient(circle, rgba(47,173,111,0.25), transparent 60%)' }}
              />
              <span className="relative shrink-0 w-10 h-10 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                <MessageSquareText className="w-5 h-5 text-primary" />
              </span>
              <div className="relative min-w-0 flex-1">
                <p className="font-display font-medium leading-tight truncate">{t.title}</p>
                <p className="flex items-center gap-1.5 text-[0.7rem] text-sand/60 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="truncate">{t.status}</span>
                </p>
              </div>
              <button
                onClick={resetChat}
                aria-label={t.reset}
                title={t.reset}
                className="relative shrink-0 w-8 h-8 flex items-center justify-center text-sand/60 hover:text-sand hover:bg-sand/10 rounded-full transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="relative shrink-0 w-8 h-8 flex items-center justify-center text-sand/60 hover:text-sand hover:bg-sand/10 rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-5 flex flex-col gap-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[82%] px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap break-words ${
                    m.role === 'user'
                      ? 'self-end bg-forest text-sand rounded-2xl rounded-br-sm ltr:rounded-br-sm rtl:rounded-bl-sm rtl:rounded-br-2xl'
                      : m.error
                        ? 'self-start bg-[color:var(--color-error)]/10 text-[color:var(--color-error)] border border-[color:var(--color-error)]/25 rounded-2xl'
                        : 'self-start bg-white text-ink border border-[color:var(--line-mid)] rounded-2xl rounded-bl-sm'
                  }`}
                >
                  {m.text}
                </div>
              ))}
              {loading && (
                <div className="self-start bg-white border border-[color:var(--line-mid)] rounded-2xl rounded-bl-sm px-4 py-2.5">
                  <TypingDots />
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-[color:var(--line-mid)] bg-cream p-3">
              <div className="flex items-end gap-2 bg-white border border-[color:var(--line-dark)] rounded-xl px-3 py-2 focus-within:border-primary transition-colors">
                <textarea
                  ref={inputRef}
                  rows={1}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder={t.placeholder}
                  className="flex-1 resize-none bg-transparent text-sm text-ink placeholder:text-ink/40 focus:outline-none max-h-24 py-1"
                />
                <button
                  onClick={send}
                  disabled={!input.trim() || loading}
                  aria-label={t.send}
                  className="shrink-0 w-9 h-9 flex items-center justify-center bg-primary text-primary-foreground rounded-lg hover:bg-[color:var(--color-secondary-green)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
              <p className="mono-label text-ink/35 text-center mt-2" style={{ fontSize: '0.6rem' }}>
                {t.poweredBy}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : t.launch}
        whileTap={{ scale: 0.92 }}
        className="relative w-14 h-14 rounded-full bg-forest text-sand shadow-xl shadow-forest-pitch/30 flex items-center justify-center hover:bg-forest-mid transition-colors"
      >
        <span
          className="absolute inset-0 rounded-full"
          style={{ background: 'radial-gradient(circle at 30% 30%, rgba(47,173,111,0.35), transparent 65%)' }}
        />
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <X className="w-6 h-6" />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageSquareText className="w-6 h-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}

export default ChatWidget

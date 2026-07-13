import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { ArrowLeft } from 'lucide-react'
import { StarField } from '../celestial/StarField'

interface SectionShellProps {
  title: string
  eyebrow?: string
  subtitle?: string
  onBack: () => void
  children: ReactNode
  night?: boolean
}

/** Full-screen scrapbook page shell used by every section, so reading never feels cramped. */
export function SectionShell({ title, eyebrow, subtitle, onBack, children, night = false }: SectionShellProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`relative min-h-dvh w-full px-4 sm:px-6 py-8 pb-20 ${night ? 'bg-night-paper-texture' : 'bg-paper-texture'}`}
    >
      <StarField count={night ? 30 : 8} className="opacity-70" slow />
      <div className="relative z-10 max-w-3xl mx-auto">
        <button
          type="button"
          onClick={onBack}
          className={`inline-flex items-center gap-2 font-hand text-xl mb-6 rounded-full px-4 py-2 border shadow-paper hover:scale-105 active:scale-95 transition-transform ${night ? 'text-moon-cream' : ''}`}
          style={{ borderColor: 'var(--saturn-gold)', color: night ? 'var(--moon-cream)' : 'var(--ink)' }}
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          back to the scrapbook
        </button>

        <header className="text-center mb-8">
          {eyebrow && (
            <p className="font-hand text-xl" style={{ color: 'var(--rose)' }}>{eyebrow}</p>
          )}
          <h2
            className="font-serif-heading text-3xl sm:text-4xl font-semibold mt-1"
            style={{ color: night ? 'var(--moon-cream)' : 'var(--ink)' }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="font-body mt-3 max-w-xl mx-auto" style={{ color: night ? 'var(--moon-cream)' : 'var(--muted-ink)', opacity: night ? 0.85 : 1 }}>
              {subtitle}
            </p>
          )}
        </header>

        {children}
      </div>
    </motion.div>
  )
}

import { Saturn } from './Saturn'
import { Moon } from './Moon'
import { PaperStar } from './PaperStar'
import { Heart, Sparkle } from 'lucide-react'

export type SealType = 'saturn' | 'moon' | 'heart' | 'star' | 'constellation' | 'bracelet' | 'stamp'

interface CelestialSealProps {
  type: SealType
  className?: string
}

/** A small wax-seal-like decorative badge used on envelopes and cards. */
export function CelestialSeal({ type, className = 'w-10 h-10' }: CelestialSealProps) {
  const base = `${className} rounded-full flex items-center justify-center shadow-paper border border-[var(--saturn-gold)]/40`
  const style = { background: 'radial-gradient(circle at 35% 30%, var(--moon-cream), var(--tape))' }

  switch (type) {
    case 'saturn':
      return (
        <span className={base} style={style} aria-hidden="true">
          <Saturn className="w-3/4 h-3/4" />
        </span>
      )
    case 'moon':
      return (
        <span className={base} style={style} aria-hidden="true">
          <Moon className="w-3/4 h-3/4" />
        </span>
      )
    case 'heart':
      return (
        <span className={base} style={style} aria-hidden="true">
          <Heart className="w-1/2 h-1/2" style={{ color: 'var(--burgundy)' }} strokeWidth={1.5} />
        </span>
      )
    case 'star':
      return (
        <span className={base} style={style} aria-hidden="true">
          <PaperStar className="w-1/2 h-1/2" />
        </span>
      )
    case 'constellation':
      return (
        <span className={base} style={style} aria-hidden="true">
          <Sparkle className="w-1/2 h-1/2" style={{ color: 'var(--faded-blue)' }} strokeWidth={1.5} />
        </span>
      )
    case 'bracelet':
      return (
        <span className={base} style={style} aria-hidden="true">
          <span className="font-hand text-[0.55em]" style={{ color: 'var(--burgundy)' }}>OH</span>
        </span>
      )
    case 'stamp':
    default:
      return (
        <span
          className={`${className} flex items-center justify-center border-2 border-dashed border-[var(--saturn-gold)]/60 rounded-sm`}
          style={{ background: 'var(--moon-cream)' }}
          aria-hidden="true"
        >
          <PaperStar className="w-1/2 h-1/2" filled={false} />
        </span>
      )
  }
}

import { useState } from 'react'
import { motion } from 'motion/react'
import { PaperStar } from '../celestial/PaperStar'

interface FlipStampProps {
  label: string
  revealText: string
  className?: string
}

/** A postage-stamp decoration that flips on tap/click to reveal a small hidden note. */
export function FlipStamp({ label, revealText, className = '' }: FlipStampProps) {
  const [flipped, setFlipped] = useState(false)

  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      className={`relative w-48 h-48 sm:w-56 sm:h-56 [perspective:600px] focus-visible:outline-4 ${className}`}
      aria-label={flipped ? `${label}, showing: ${revealText}. Press to flip back.` : `${label}. Press to flip and reveal a note.`}
      aria-pressed={flipped}
    >
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 180, damping: 18 }}
      >
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-sm border-2 border-dashed [backface-visibility:hidden]"
          style={{ borderColor: 'var(--saturn-gold)', background: 'var(--moon-cream)' }}
        >
          <PaperStar className="w-6 h-6" />
          <span className="font-hand text-sm px-1 text-center leading-tight" style={{ color: 'var(--midnight)' }}>{label}</span>
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center rounded-sm border-2 border-dashed [backface-visibility:hidden] [transform:rotateY(180deg)] p-2"
          style={{ borderColor: 'var(--saturn-gold)', background: 'var(--midnight)' }}
        >
          <span className="font-hand text-base px-1 text-center leading-tight" style={{ color: 'var(--moon-cream)' }}>{revealText}</span>
        </div>
      </motion.div>
    </button>
  )
}

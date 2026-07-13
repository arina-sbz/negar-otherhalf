import { motion } from 'motion/react'
import { ScrapbookImage } from '../common/ScrapbookImage'
import type { Memory } from '@/data/birthdayContent'

interface PolaroidCardProps {
  memory: Memory
  rotate: number
  onSelect: () => void
}

/** A single framed photo, image-only — no caption or text on the card itself. */
export function PolaroidCard({ memory, rotate, onSelect }: PolaroidCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      initial={{ rotate }}
      whileHover={{ rotate: 0, y: -6, scale: 1.05 }}
      whileFocus={{ rotate: 0, y: -6, scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="w-full bg-[var(--moon-cream)] p-2.5 pb-4 shadow-lifted border border-white/60 focus-visible:outline-4 select-none"
      aria-label={memory.imageAlt}
    >
      <ScrapbookImage
        src={memory.image}
        alt={memory.imageAlt}
        className="w-full aspect-[3/4] object-cover bg-[var(--paper-dark)]"
        width={360}
        height={480}
      />
    </motion.button>
  )
}

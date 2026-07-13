import { motion } from 'motion/react'
import { Saturn } from '../celestial/Saturn'
import { Moon } from '../celestial/Moon'
import { PaperStar } from '../celestial/PaperStar'
import { StarField } from '../celestial/StarField'
import { ShootingStar } from '../celestial/ShootingStar'
import { useReducedMotion } from '@/hooks/useLocalStorage'
import type { BirthdayContent } from '@/data/birthdayContent'

interface GiftSceneProps {
  content: BirthdayContent
  onOpen: () => void
  opening: boolean
}

export function GiftScene({ content, onOpen, opening }: GiftSceneProps) {
  const reducedMotion = useReducedMotion()

  return (
    <div className="relative min-h-dvh w-full overflow-hidden bg-paper-texture flex items-center justify-center px-4 py-10">
      <StarField count={18} slow />
      <ShootingStar intervalMs={6000} />

      {/* decorative scraps */}
      <PaperStar className="w-6 h-6 absolute top-[12%] left-[10%] animate-drift" />
      <PaperStar className="w-4 h-4 absolute bottom-[18%] left-[16%] animate-drift" />
      <Moon className="w-10 h-10 absolute top-[16%] right-[12%] animate-drift" />
      <span className="tape-corner absolute top-6 left-1/3 -rotate-6" aria-hidden="true" />
      <span className="tape-corner absolute bottom-10 right-1/4 rotate-3" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 max-w-md w-full text-center"
      >
        <p className="font-serif-heading text-2xl md:text-3xl italic leading-snug whitespace-pre-line" style={{ color: 'var(--ink)' }}>
          {content.coverMessage}
        </p>
        <p className="font-hand text-xl mt-3" style={{ color: 'var(--muted-ink)' }}>
          {content.coverSubline}
        </p>

        <motion.div
          className="relative mx-auto mt-10 mb-10 w-52 h-52 md:w-64 md:h-64"
          animate={
            reducedMotion || opening
              ? {}
              : { rotate: [0, 1.5, -1.5, 0], y: [0, -6, 0] }
          }
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.div
            className="absolute inset-0 rounded-md shadow-lifted border"
            style={{ background: 'linear-gradient(160deg, var(--paper-dark), var(--tape))', borderColor: 'var(--saturn-gold)' }}
            animate={opening ? { rotateX: -35, y: -20, opacity: 0.3 } : {}}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
          />
          <div className="absolute inset-x-0 top-1/2 h-2 -translate-y-1/2" style={{ background: 'var(--burgundy)', opacity: 0.7 }} aria-hidden="true" />
          <div className="absolute inset-y-0 left-1/2 w-2 -translate-x-1/2" style={{ background: 'var(--burgundy)', opacity: 0.7 }} aria-hidden="true" />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={opening ? { scale: 1.3, opacity: 0 } : { scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Saturn className="w-20 h-20 md:w-24 md:h-24" spin={!reducedMotion} />
          </motion.div>
        </motion.div>

        <button
          type="button"
          onClick={onOpen}
          disabled={opening}
          className="font-body inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base md:text-lg font-medium shadow-paper border hover:scale-105 active:scale-95 transition-transform disabled:opacity-70"
          style={{ background: 'var(--burgundy)', color: 'var(--moon-cream)', borderColor: 'var(--burgundy)' }}
        >
          {opening ? 'Opening…' : 'Open your birthday gift'}
        </button>
      </motion.div>
    </div>
  )
}

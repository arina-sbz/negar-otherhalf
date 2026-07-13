import { motion, useAnimationControls } from 'motion/react'

interface BeadProps {
  letter: string
}

function Bead({ letter }: BeadProps) {
  const controls = useAnimationControls()

  const handleTap = () => {
    void controls.start({
      scale: [1, 1.3, 1],
      rotate: [0, -14, 14, 0],
      backgroundColor: ['var(--moon-cream)', 'var(--saturn-gold)', 'var(--moon-cream)'],
      transition: { duration: 0.5, ease: 'easeInOut' },
    })
  }

  return (
    <motion.button
      type="button"
      onClick={handleTap}
      animate={controls}
      whileHover={{ y: -3 }}
      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border shadow-paper font-hand text-base sm:text-lg font-bold focus-visible:outline-4"
      style={{
        background: 'var(--moon-cream)',
        borderColor: 'var(--saturn-gold)',
        color: 'var(--burgundy)',
      }}
      aria-label={`Bead: ${letter}`}
    >
      {letter}
    </motion.button>
  )
}

interface BraceletRowProps {
  word: string
  className?: string
}

/** An interactive friendship-bracelet strip: tap a bead and it pops, like the real thing. */
export function BraceletRow({ word, className = '' }: BraceletRowProps) {
  const letters = word.split('')

  return (
    <div className={`flex items-center justify-center gap-1.5 flex-wrap ${className}`} role="group" aria-label={`Friendship bracelet spelling ${word}`}>
      {letters.map((letter, i) =>
        letter === ' ' ? <span key={i} className="w-2" aria-hidden="true" /> : <Bead key={i} letter={letter} />,
      )}
    </div>
  )
}

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Saturn } from '../celestial/Saturn'

interface SecretStickerProps {
  message: string
  found: boolean
  onFound: () => void
}

/** A subtle, clickable Saturn sticker hiding a secret note. Reduced-motion safe. */
export function SecretSticker({ message, found, onFound }: SecretStickerProps) {
  const [revealed, setRevealed] = useState(false)
  const [clicks, setClicks] = useState(0)

  const handleClick = () => {
    const next = clicks + 1
    setClicks(next)
    if (next >= 1) {
      setRevealed(true)
      onFound()
    }
  }

  return (
    <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 z-10">
      <button
        type="button"
        onClick={handleClick}
        className="relative w-10 h-10 rounded-full opacity-70 hover:opacity-100 focus-visible:opacity-100 transition-opacity"
        aria-label="A suspiciously sparkly Saturn sticker"
      >
        <motion.span
          className="block w-full h-full"
          animate={found ? {} : { rotate: [0, 8, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
        >
          <Saturn className="w-full h-full" />
        </motion.span>
        {!found && (
          <span
            className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full animate-twinkle"
            style={{ background: 'var(--saturn-gold)' }}
            aria-hidden="true"
          />
        )}
      </button>

      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            role="status"
            className="absolute bottom-12 right-0 w-56 rounded-sm border shadow-lifted bg-paper-texture p-4"
            style={{ borderColor: 'var(--saturn-gold)' }}
          >
            <p className="font-hand text-lg leading-snug" style={{ color: 'var(--ink)' }}>
              {message}
            </p>
            <button
              type="button"
              onClick={() => setRevealed(false)}
              className="mt-2 font-hand text-base underline"
              style={{ color: 'var(--muted-ink)' }}
            >
              close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

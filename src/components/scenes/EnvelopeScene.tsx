import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Saturn } from '../celestial/Saturn'
import { Moon } from '../celestial/Moon'
import { StarField } from '../celestial/StarField'
import { CelestialSeal } from '../celestial/CelestialSeal'
import type { BirthdayContent } from '@/data/birthdayContent'

interface EnvelopeSceneProps {
  content: BirthdayContent
  onContinue: () => void
}

export function EnvelopeScene({ content, onContinue }: EnvelopeSceneProps) {
  const [opened, setOpened] = useState(false)

  return (
    <div className="relative min-h-dvh w-full overflow-hidden bg-paper-texture flex items-center justify-center px-4 py-12">
      <StarField count={opened ? 8 : 16} slow={opened} />

      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div
            key="envelope"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 text-center"
          >
            <button
              type="button"
              onClick={() => setOpened(true)}
              className="group relative block w-72 sm:w-80 aspect-[4/3] mx-auto rounded-sm shadow-lifted border focus-visible:outline-4"
              style={{ background: 'var(--paper-dark)', borderColor: 'var(--saturn-gold)' }}
              aria-label="Open the envelope addressed to My Other Half"
            >
              <svg viewBox="0 0 300 220" className="absolute inset-0 w-full h-full" aria-hidden="true">
                <polygon points="0,0 300,0 150,120" fill="var(--tape)" opacity="0.55" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6 text-left">
                <p className="font-hand text-2xl" style={{ color: 'var(--ink)' }}>To: {content.bestFriendNickname}</p>
                <p className="font-hand text-lg mt-1" style={{ color: 'var(--muted-ink)' }}>
                  From: The other half of this friendship
                </p>
              </div>
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform group-hover:scale-110 group-focus-visible:scale-110">
                <CelestialSeal type="saturn" className="w-14 h-14" />
              </span>
            </button>
            <p className="font-hand text-lg mt-6" style={{ color: 'var(--muted-ink)' }}>
              tap the seal to open
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="letter"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-xl"
          >
            <div className="relative bg-paper-texture border shadow-lifted rounded-sm px-6 py-10 sm:px-10 sm:py-12" style={{ borderColor: 'var(--tape)' }}>
              <span className="tape-corner -top-3 left-8 -rotate-6" aria-hidden="true" />
              <span className="tape-corner -top-3 right-8 rotate-6" aria-hidden="true" />
              <div className="max-w-prose mx-auto space-y-5 font-body text-base sm:text-lg leading-relaxed" style={{ color: 'var(--ink)' }}>
                {content.mainLetter.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="flex flex-col items-center mt-10 gap-3">
                <div className="flex items-center gap-3" aria-hidden="true">
                  <Moon className="w-6 h-6" />
                  <Saturn className="w-8 h-8" />
                </div>
                <p className="font-hand text-2xl" style={{ color: 'var(--rose)' }}>{content.senderName}</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="font-hand text-2xl mb-4" style={{ color: 'var(--muted-ink)' }}>
                Ready to look through our little universe?
              </p>
              <button
                type="button"
                onClick={onContinue}
                className="font-body inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base md:text-lg font-medium shadow-paper border hover:scale-105 active:scale-95 transition-transform"
                style={{ background: 'var(--burgundy)', color: 'var(--moon-cream)', borderColor: 'var(--burgundy)' }}
              >
                Open the scrapbook
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

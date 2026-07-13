import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import confetti from 'canvas-confetti'
import { ArrowLeft } from 'lucide-react'
import { Saturn } from '../celestial/Saturn'
import { Moon } from '../celestial/Moon'
import { StarField } from '../celestial/StarField'
import { ShootingStar } from '../celestial/ShootingStar'
import { CelestialSeal } from '../celestial/CelestialSeal'
import { Constellation } from '../celestial/Constellation'
import { ScrapbookImage } from '../common/ScrapbookImage'
import { BraceletRow } from '../common/BraceletRow'
import { VoiceNotePlayer } from '../audio/VoiceNotePlayer'
import { useReducedMotion } from '@/hooks/useLocalStorage'
import type { BirthdayContent } from '@/data/birthdayContent'

interface FinalSceneProps {
  content: BirthdayContent
  activatedStars: string[]
  onActivateStar: (id: string) => void
  onBack: () => void
  duckAudio: () => void
  restoreAudio: () => void
  voiceNote: {
    available: boolean
    playing: boolean
    onPlay: () => void
    onPause: () => void
  }
}

export function FinalScene({ content, activatedStars, onActivateStar, onBack, duckAudio, restoreAudio, voiceNote }: FinalSceneProps) {
  const [opened, setOpened] = useState(false)
  const [oneMore, setOneMore] = useState(false)
  const reducedMotion = useReducedMotion()
  const confettiFired = useRef(false)

  const handleOpen = () => {
    setOpened(true)
    duckAudio()
    if (!confettiFired.current && !reducedMotion) {
      confettiFired.current = true
      const duration = 1800
      const end = Date.now() + duration
      ;(function frame() {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 60,
          origin: { x: 0, y: 0.6 },
          colors: ['#c99b4a', '#d98a94', '#f3e6c8'],
        })
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 60,
          origin: { x: 1, y: 0.6 },
          colors: ['#c99b4a', '#d98a94', '#f3e6c8'],
        })
        if (Date.now() < end) requestAnimationFrame(frame)
      })()
    } else if (!confettiFired.current) {
      confettiFired.current = true
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } })
    }
  }

  useEffect(() => {
    return () => restoreAudio()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!opened) {
    return (
      <div className="relative min-h-dvh w-full bg-paper-texture flex items-center justify-center px-4 py-10">
        <StarField count={12} slow />
        <button
          type="button"
          onClick={onBack}
          className="absolute top-6 left-4 sm:left-6 inline-flex items-center gap-2 font-hand text-xl rounded-full px-4 py-2 border shadow-paper"
          style={{ borderColor: 'var(--saturn-gold)', color: 'var(--ink)' }}
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" /> back to the scrapbook
        </button>

        <div className="relative z-10 text-center max-w-md">
          <p className="font-hand text-2xl mb-2" style={{ color: 'var(--rose)' }}>a sealed final page</p>
          <h2 className="font-serif-heading text-3xl sm:text-4xl font-semibold mb-8" style={{ color: 'var(--ink)' }}>
            {content.taylorInspiredSectionLabels.finalPage}
          </h2>

          <button
            type="button"
            onClick={handleOpen}
            className="relative mx-auto flex flex-col items-center gap-4 focus-visible:outline-4 rounded-md"
            aria-label="Open the final sealed page"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-40 h-52 sm:w-48 sm:h-60 rounded-sm border shadow-lifted flex items-center justify-center"
              style={{ background: 'linear-gradient(160deg, var(--paper-dark), var(--tape))', borderColor: 'var(--saturn-gold)' }}
            >
              <CelestialSeal type="constellation" className="w-16 h-16" />
            </motion.div>
            <span className="font-body text-sm font-medium rounded-full px-5 py-2.5 border shadow-paper" style={{ background: 'var(--burgundy)', color: 'var(--moon-cream)', borderColor: 'var(--burgundy)' }}>
              Untie the ribbon
            </span>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-dvh w-full bg-night-paper-texture px-4 sm:px-6 py-10 pb-24 overflow-hidden">
      <StarField count={40} />
      <ShootingStar />
      <div className="absolute top-8 left-6 opacity-80" aria-hidden="true">
        <Saturn className="w-20 h-20 sm:w-28 sm:h-28" spin={!reducedMotion} />
      </div>
      <div className="absolute top-10 right-8 opacity-80" aria-hidden="true">
        <Moon className="w-14 h-14 sm:w-20 sm:h-20" />
      </div>

      <button
        type="button"
        onClick={onBack}
        className="relative z-10 inline-flex items-center gap-2 font-hand text-xl mb-8 rounded-full px-4 py-2 border"
        style={{ borderColor: 'var(--saturn-gold)', color: 'var(--moon-cream)' }}
      >
        <ArrowLeft className="w-4 h-4" aria-hidden="true" /> back to the scrapbook
      </button>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4 mb-10">
          {content.finalMessage.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reducedMotion ? 0 : i * 0.5, duration: 0.6 }}
              className="font-serif-heading text-xl sm:text-2xl leading-relaxed"
              style={{ color: 'var(--moon-cream)' }}
            >
              {line}
            </motion.p>
          ))}
        </motion.div>

        <ScrapbookImage
          src={content.heroPhoto}
          alt={content.heroPhotoAlt}
          className="w-64 h-64 sm:w-72 sm:h-72 object-cover mx-auto rounded-sm border-4 shadow-lifted"
          width={320}
          height={320}
        />

        <div className="mt-12">
          <Constellation
            stars={content.constellationStars}
            activatedIds={activatedStars}
            onActivate={onActivateStar}
            constellationName={content.constellationName}
          />
        </div>

        <div className="mt-10">
          <VoiceNotePlayer
            available={voiceNote.available}
            playing={voiceNote.playing}
            onPlay={voiceNote.onPlay}
            onPause={voiceNote.onPause}
          />
        </div>

        <div className="mt-10">
          <p className="font-hand text-lg text-center mb-3" style={{ color: 'rgba(243,230,200,0.75)' }}>tap a bead</p>
          <BraceletRow word={content.braceletWord} />
        </div>

        {!oneMore ? (
          <button
            type="button"
            onClick={() => setOneMore(true)}
            className="mt-12 font-body text-sm font-medium rounded-full px-6 py-3 border shadow-paper"
            style={{ background: 'var(--saturn-gold)', color: 'var(--paper-night)', borderColor: 'var(--saturn-gold)' }}
          >
            One more thing…
          </button>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 space-y-3 max-w-lg mx-auto"
            >
              <p className="font-hand text-2xl sm:text-3xl leading-snug" style={{ color: 'var(--moon-cream)' }}>
                {content.finalClosingLine}
              </p>
              <p className="font-body text-sm mt-6" style={{ color: 'rgba(243,230,200,0.75)' }}>
                Made with an unreasonable amount of love by {content.senderName}
              </p>
              <button
                type="button"
                onClick={onBack}
                className="mt-6 font-body text-sm font-medium rounded-full px-6 py-3 border"
                style={{ borderColor: 'var(--saturn-gold)', color: 'var(--moon-cream)' }}
              >
                Look through our universe again
              </button>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  )
}

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Shuffle } from 'lucide-react'
import { SectionShell } from './SectionShell'
import type { ReasonILoveYou } from '@/data/birthdayContent'

interface ReasonsSectionProps {
  reasons: ReasonILoveYou[]
  revealedIds: string[]
  onReveal: (id: string) => void
  onBack: () => void
}

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export function ReasonsSection({ reasons, revealedIds, onReveal, onBack }: ReasonsSectionProps) {
  const [order, setOrder] = useState<ReasonILoveYou[]>(reasons)
  const [index, setIndex] = useState(0)
  const [unfolded, setUnfolded] = useState(false)
  const [showAll, setShowAll] = useState(false)

  const current = order[index]

  const handleUnfold = () => {
    setUnfolded(true)
    onReveal(current.id)
  }

  const handleNext = () => {
    setUnfolded(false)
    setIndex((i) => (i + 1) % order.length)
  }

  const handleShuffle = () => {
    setOrder(shuffleArray(reasons))
    setIndex(0)
    setUnfolded(false)
  }

  return (
    <SectionShell
      title="Things I love about you"
      eyebrow="a jar of folded notes"
      subtitle="Unfold one at a time, or peek at everything you've revealed so far."
      onBack={onBack}
    >
      <div className="flex justify-center gap-3 mb-6">
        <button
          type="button"
          onClick={handleShuffle}
          className="inline-flex items-center gap-2 font-hand text-lg px-4 py-2 rounded-full border shadow-paper"
          style={{ borderColor: 'var(--saturn-gold)' }}
        >
          <Shuffle className="w-4 h-4" aria-hidden="true" /> shuffle
        </button>
        <button
          type="button"
          onClick={() => setShowAll((s) => !s)}
          className="font-hand text-lg px-4 py-2 rounded-full border shadow-paper"
          style={{ borderColor: 'var(--saturn-gold)' }}
        >
          {showAll ? 'back to one note' : `view revealed (${revealedIds.length})`}
        </button>
      </div>

      {!showAll ? (
        <div className="flex flex-col items-center gap-6">
          <AnimatePresence mode="wait">
            <motion.button
              key={current.id + (unfolded ? '-open' : '-closed')}
              type="button"
              onClick={unfolded ? undefined : handleUnfold}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
              className="w-64 min-h-[10rem] rounded-sm border shadow-lifted bg-[var(--moon-cream)] p-6 flex items-center justify-center text-center"
              style={{ borderColor: 'var(--saturn-gold)' }}
              aria-label={unfolded ? current.text : 'Unfold this note'}
            >
              {unfolded ? (
                <p className="font-hand text-2xl leading-snug" style={{ color: 'var(--midnight)' }}>{current.text}</p>
              ) : (
                <p className="font-hand text-xl" style={{ color: 'var(--midnight)', opacity: 0.6 }}>tap to unfold</p>
              )}
            </motion.button>
          </AnimatePresence>

          {unfolded && (
            <button
              type="button"
              onClick={handleNext}
              className="font-hand text-lg underline"
              style={{ color: 'var(--rose)' }}
            >
              next note
            </button>
          )}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-3">
          {reasons
            .filter((r) => revealedIds.includes(r.id))
            .map((r) => (
              <div key={r.id} className="rounded-sm border shadow-paper bg-[var(--moon-cream)] p-4" style={{ borderColor: 'var(--saturn-gold)' }}>
                <p className="font-hand text-xl leading-snug" style={{ color: 'var(--midnight)' }}>{r.text}</p>
              </div>
            ))}
          {revealedIds.length === 0 && (
            <p className="font-body text-sm col-span-2 text-center" style={{ color: 'var(--muted-ink)' }}>
              Nothing revealed yet — go unfold a note!
            </p>
          )}
        </div>
      )}
    </SectionShell>
  )
}

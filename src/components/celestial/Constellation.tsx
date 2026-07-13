import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import type { ConstellationStar } from '@/data/birthdayContent'

interface ConstellationProps {
  stars: ConstellationStar[]
  activatedIds: string[]
  onActivate: (id: string) => void
  constellationName: string
}

export function Constellation({ stars, activatedIds, onActivate, constellationName }: ConstellationProps) {
  const [messageStar, setMessageStar] = useState<ConstellationStar | null>(null)

  const sorted = useMemo(() => [...stars].sort((a, b) => a.order - b.order), [stars])

  const lines = useMemo(() => {
    const activatedSorted = sorted.filter((s) => activatedIds.includes(s.id))
    const segments: Array<{ from: ConstellationStar; to: ConstellationStar }> = []
    for (let i = 0; i < activatedSorted.length - 1; i++) {
      segments.push({ from: activatedSorted[i], to: activatedSorted[i + 1] })
    }
    return segments
  }, [sorted, activatedIds])

  const handleActivate = (star: ConstellationStar) => {
    onActivate(star.id)
    setMessageStar(star)
  }

  const complete = activatedIds.length === stars.length

  return (
    <div className="relative">
      <div
        className="relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-md border overflow-hidden"
        style={{ background: 'var(--paper-night)', borderColor: 'var(--saturn-gold)' }}
        role="group"
        aria-label={`${constellationName} constellation, ${activatedIds.length} of ${stars.length} stars activated`}
      >
        <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
          {lines.map((line) => (
            <line
              key={`${line.from.id}-${line.to.id}`}
              x1={`${line.from.x}%`}
              y1={`${line.from.y}%`}
              x2={`${line.to.x}%`}
              y2={`${line.to.y}%`}
              stroke="var(--star-glow)"
              strokeWidth={1.5}
              opacity={0.6}
            />
          ))}
        </svg>

        {sorted.map((star) => {
          const active = activatedIds.includes(star.id)
          return (
            <button
              key={star.id}
              type="button"
              onClick={() => handleActivate(star)}
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full focus-visible:outline-4"
              style={{ top: `${star.y}%`, left: `${star.x}%` }}
              aria-label={`${star.label} star${active ? ', activated' : ''}. Press to reveal its message.`}
            >
              <motion.span
                className="block rounded-full"
                animate={active ? { scale: [1, 1.4, 1] } : {}}
                transition={{ duration: 0.6 }}
                style={{
                  width: active ? 16 : 12,
                  height: active ? 16 : 12,
                  background: active ? 'var(--star-glow)' : 'rgba(243,230,200,0.35)',
                  boxShadow: active ? '0 0 12px 4px var(--star-glow)' : 'none',
                }}
              />
            </button>
          )
        })}
      </div>

      <AnimatePresence>
        {messageStar && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            role="status"
            className="mt-4 rounded-sm border shadow-paper bg-[var(--moon-cream)] p-4 text-center"
            style={{ borderColor: 'var(--saturn-gold)' }}
          >
            <p className="font-hand text-xl" style={{ color: 'var(--burgundy)' }}>{messageStar.label}</p>
            <p className="font-body text-sm mt-1" style={{ color: 'var(--midnight)' }}>{messageStar.message}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {complete && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 text-center">
          <p className="font-hand text-2xl" style={{ color: 'var(--rose)' }}>
            Somehow, every little moment led me to you.
          </p>
          <p className="font-serif-heading text-xl font-semibold mt-1" style={{ color: 'var(--ink)' }}>
            Two halves, one constellation.
          </p>
        </motion.div>
      )}
    </div>
  )
}

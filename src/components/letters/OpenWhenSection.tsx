import { useState } from 'react'
import { SectionShell } from '../scrapbook/SectionShell'
import { CelestialSeal } from '../celestial/CelestialSeal'
import { ResponsiveDialog } from '../common/ResponsiveDialog'
import type { OpenWhenLetter } from '@/data/birthdayContent'

interface OpenWhenSectionProps {
  letters: OpenWhenLetter[]
  openedIds: string[]
  onOpenLetter: (id: string) => void
  onBack: () => void
}

export function OpenWhenSection({ letters, openedIds, onOpenLetter, onBack }: OpenWhenSectionProps) {
  const [active, setActive] = useState<OpenWhenLetter | null>(null)

  const handleOpen = (letter: OpenWhenLetter) => {
    setActive(letter)
    onOpenLetter(letter.id)
  }

  return (
    <SectionShell
      title="Open when…"
      eyebrow="miniature envelopes"
      subtitle="For whenever you need one of these — no occasion required."
      onBack={onBack}
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {letters.map((letter) => {
          const opened = openedIds.includes(letter.id)
          return (
            <button
              key={letter.id}
              type="button"
              onClick={() => handleOpen(letter)}
              className="relative flex flex-col items-center gap-2 rounded-sm border shadow-paper bg-paper-texture p-4 hover:-translate-y-1 focus-visible:outline-4 transition-transform"
              style={{ borderColor: 'var(--tape)' }}
              aria-label={`${letter.label}${opened ? ' (opened)' : ''}`}
            >
              {opened && (
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full" style={{ background: 'var(--sage)' }} aria-hidden="true" />
              )}
              <CelestialSeal type={letter.seal} className="w-10 h-10" />
              <span className="font-hand text-base text-center leading-tight" style={{ color: 'var(--ink)' }}>
                {letter.label}
              </span>
            </button>
          )
        })}
      </div>

      <ResponsiveDialog
        open={active !== null}
        onOpenChange={(open) => !open && setActive(null)}
        title={active?.label ?? ''}
      >
        {active && (
          <div className="space-y-4 font-body leading-relaxed" style={{ color: 'var(--ink)' }}>
            {active.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}
      </ResponsiveDialog>
    </SectionShell>
  )
}

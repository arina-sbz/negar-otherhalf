import { RotateCcw } from 'lucide-react'
import { SectionShell } from '../scrapbook/SectionShell'
import { Constellation } from './Constellation'
import type { ConstellationStar } from '@/data/birthdayContent'

interface ConstellationSectionProps {
  constellationName: string
  constellationDescription: string
  stars: ConstellationStar[]
  activatedIds: string[]
  onActivate: (id: string) => void
  onReplay: () => void
  onBack: () => void
}

export function ConstellationSection({
  constellationName,
  constellationDescription,
  stars,
  activatedIds,
  onActivate,
  onReplay,
  onBack,
}: ConstellationSectionProps) {
  return (
    <SectionShell
      title={`Our constellation: "${constellationName}"`}
      eyebrow="two people, different places, one shared sky"
      subtitle={constellationDescription}
      onBack={onBack}
      night
    >
      <Constellation stars={stars} activatedIds={activatedIds} onActivate={onActivate} constellationName={constellationName} />
      <div className="text-center mt-6">
        <button
          type="button"
          onClick={onReplay}
          className="inline-flex items-center gap-2 font-hand text-lg px-4 py-2 rounded-full border"
          style={{ borderColor: 'var(--saturn-gold)', color: 'var(--moon-cream)' }}
        >
          <RotateCcw className="w-4 h-4" aria-hidden="true" /> replay the constellation
        </button>
      </div>
    </SectionShell>
  )
}

import { useMemo, useState } from 'react'
import { SectionShell } from '../scrapbook/SectionShell'
import { PolaroidCard } from './PolaroidCard'
import { ImageLightbox } from './ImageLightbox'
import type { Memory } from '@/data/birthdayContent'

interface MemoriesSectionProps {
  memories: Memory[]
  onBack: () => void
}

export function MemoriesSection({ memories, onBack }: MemoriesSectionProps) {
  const [selected, setSelected] = useState<Memory | null>(null)

  // a small, consistent per-photo tilt for scrapbook charm, without any overlap
  const rotations = useMemo(() => memories.map((_, i) => ((i * 37) % 11) - 5), [memories])

  return (
    <SectionShell
      title="Our memories"
      eyebrow="a wall of polaroids"
      subtitle="Tap a photo for a closer look."
      onBack={onBack}
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10 sm:gap-x-10 sm:gap-y-14 mt-6">
        {memories.map((memory, i) => (
          <PolaroidCard key={memory.id} memory={memory} rotate={rotations[i]} onSelect={() => setSelected(memory)} />
        ))}
      </div>

      <ImageLightbox
        open={selected !== null}
        onOpenChange={(open) => !open && setSelected(null)}
        imageSrc={selected?.image}
        imageAlt={selected?.imageAlt ?? ''}
      />
    </SectionShell>
  )
}

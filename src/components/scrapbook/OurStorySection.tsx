import { SectionShell } from './SectionShell'
import { TimelineItem } from './TimelineItem'
import { OrbitDivider } from '../common/OrbitDivider'
import { BraceletRow } from '../common/BraceletRow'
import type { TimelineEvent } from '@/data/birthdayContent'

interface OurStorySectionProps {
  timelineEvents: TimelineEvent[]
  braceletWord: string
  onBack: () => void
}

export function OurStorySection({ timelineEvents, braceletWord, onBack }: OurStorySectionProps) {
  return (
    <SectionShell
      title="Our story"
      eyebrow="a ribbon through the scrapbook"
      // subtitle="We met through a screen, but somehow you became one of the most real parts of my life."
      onBack={onBack}
    >
      <div className="relative space-y-10 before:content-[''] before:absolute before:left-[5px] sm:before:left-1/2 before:top-2 before:bottom-2 before:w-px before:bg-[var(--saturn-gold)]/40 sm:before:-translate-x-1/2">
        {timelineEvents.map((event, i) => (
          <TimelineItem key={event.id} event={event} align={i % 2 === 0 ? 'left' : 'right'} />
        ))}
      </div>

      <OrbitDivider />
      <p className="font-hand text-lg text-center mb-3" style={{ color: 'var(--muted-ink)' }}>tap a bead</p>
      <BraceletRow word={braceletWord} className="mb-8" />
      <p className="font-hand text-2xl text-center max-w-md mx-auto" style={{ color: 'var(--rose)' }}>
        Every version of me is grateful that every version of you became my other half.
      </p>
    </SectionShell>
  )
}

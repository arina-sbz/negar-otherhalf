import { Images, ScrollText, Mail, NotebookPen, Disc3, Star, Gift } from 'lucide-react'
import { ScrapbookObject } from '../scrapbook/ScrapbookObject'
import { SecretSticker } from '../common/SecretSticker'
import { ProgressBadge } from '../common/ProgressBadge'
import { FlipStamp } from '../common/FlipStamp'
import { StarField } from '../celestial/StarField'
import { ShootingStar } from '../celestial/ShootingStar'
import { SCRAPBOOK_SECTIONS, type ScrapbookSectionId } from '@/hooks/useProgress'
import type { BirthdayContent } from '@/data/birthdayContent'

interface ScrapbookHomeProps {
  content: BirthdayContent
  discoveredSections: ScrapbookSectionId[]
  secretFound: boolean
  onOpenSection: (section: ScrapbookSectionId) => void
  onFindSecret: () => void
}

export function ScrapbookHome({ content, discoveredSections, secretFound, onOpenSection, onFindSecret }: ScrapbookHomeProps) {
  const objects: Array<{
    id: ScrapbookSectionId
    label: string
    description: string
    icon: React.ReactNode
    rotate: number
  }> = [
    { id: 'memories', label: content.taylorInspiredSectionLabels.memories, description: 'A stack of our polaroid photographs.', icon: <Images className="w-full h-full" style={{ color: 'var(--rose)' }} />, rotate: -3 },
    { id: 'timeline', label: content.taylorInspiredSectionLabels.timeline, description: 'A folded paper timeline of our friendship.', icon: <ScrollText className="w-full h-full" style={{ color: 'var(--faded-blue)' }} />, rotate: 2 },
    { id: 'openWhen', label: content.taylorInspiredSectionLabels.openWhen, description: 'Miniature envelopes for whenever you need them.', icon: <Mail className="w-full h-full" style={{ color: 'var(--rose)' }} />, rotate: -2 },
    { id: 'reasons', label: content.taylorInspiredSectionLabels.reasons, description: 'A jar of notes about why I love you.', icon: <NotebookPen className="w-full h-full" style={{ color: 'var(--sage)' }} />, rotate: 3 },
    { id: 'soundtrack', label: content.taylorInspiredSectionLabels.soundtrack, description: 'Our lyrics and the playlist I made you.', icon: <Disc3 className="w-full h-full" style={{ color: 'var(--saturn-gold)' }} />, rotate: -1 },
    { id: 'constellation', label: content.taylorInspiredSectionLabels.constellation, description: 'Our own custom friendship constellation.', icon: <Star className="w-full h-full" style={{ color: 'var(--faded-blue)' }} />, rotate: 1 },
    { id: 'finalPage', label: content.taylorInspiredSectionLabels.finalPage, description: 'A sealed final page, for when you are ready.', icon: <Gift className="w-full h-full" style={{ color: 'var(--rose)' }} />, rotate: -2 },
  ]

  return (
    <div className="relative min-h-dvh w-full bg-paper-texture px-4 sm:px-6 py-10 pb-24 overflow-hidden">
      <StarField count={14} className="opacity-60" slow />
      <ShootingStar />
      <header className="relative z-10 max-w-3xl mx-auto text-center mb-8">
        <p className="font-hand text-2xl" style={{ color: 'var(--rose)' }}>{content.friendshipTagline}</p>
        <h1 className="font-serif-heading text-3xl sm:text-5xl font-semibold mt-1" style={{ color: 'var(--ink)' }}>
          {content.websiteTitle}
        </h1>
        <p className="font-body mt-3" style={{ color: 'var(--muted-ink)' }}>{content.introductoryMessage}</p>

        <div className="mt-5">
          <ProgressBadge discovered={discoveredSections.length} total={SCRAPBOOK_SECTIONS.length} />
        </div>
      </header>

      <div className="relative z-10 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
        {objects.map((obj) => (
          <ScrapbookObject
            key={obj.id}
            label={obj.label}
            description={obj.description}
            rotate={obj.rotate}
            visited={discoveredSections.includes(obj.id)}
            onClick={() => onOpenSection(obj.id)}
            icon={obj.icon}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto mt-10 flex justify-center">
        <FlipStamp label="a hidden note" revealText={content.hiddenStampMessage} />
      </div>

      <SecretSticker message={content.secretMessage} found={secretFound} onFound={onFindSecret} />
    </div>
  )
}

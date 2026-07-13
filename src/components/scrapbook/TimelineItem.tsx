import { motion } from 'motion/react'
import { ScrapbookImage } from '../common/ScrapbookImage'
import { PaperStar } from '../celestial/PaperStar'
import type { TimelineEvent } from '@/data/birthdayContent'

interface TimelineItemProps {
  event: TimelineEvent
  align: 'left' | 'right'
}

export function TimelineItem({ event, align }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative pl-10 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-8 items-center"
    >
      <span
        className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 top-1.5 w-3 h-3 rounded-full border-2"
        style={{ background: 'var(--saturn-gold)', borderColor: 'var(--paper)' }}
        aria-hidden="true"
      />
      <div className={align === 'left' ? 'sm:text-right sm:pr-4' : 'sm:col-start-2 sm:pl-4'}>
        <p className="font-hand text-xl" style={{ color: 'var(--rose)' }}>{event.date}</p>
        <h3 className="font-serif-heading text-xl sm:text-2xl font-semibold mt-0.5" style={{ color: 'var(--ink)' }}>
          {event.title}
        </h3>
        <p className="font-body mt-2 leading-relaxed" style={{ color: 'var(--muted-ink)' }}>{event.story}</p>
        {event.lyricExcerpt && (
          <p className="font-hand text-lg italic mt-2" style={{ color: 'var(--muted-ink)' }}>“{event.lyricExcerpt}”</p>
        )}
        {event.celestialNote && (
          <p className="font-hand text-lg mt-1 inline-flex items-center gap-1" style={{ color: 'var(--faded-blue)' }}>
            <PaperStar className="w-4 h-4" aria-hidden="true" /> {event.celestialNote}
          </p>
        )}
        {event.photo && (
          <ScrapbookImage
            src={event.photo}
            alt={event.photoAlt ?? ''}
            className="mt-3 w-full max-w-xs aspect-video object-cover rounded-sm sm:ml-auto"
            width={320}
            height={180}
          />
        )}
      </div>
    </motion.div>
  )
}

import { useState } from 'react'
import { motion } from 'motion/react'
import { ExternalLink } from 'lucide-react'
import type { FavoriteLyric } from '@/data/birthdayContent'

interface LyricNoteProps {
  lyric: FavoriteLyric
}

export function LyricNote({ lyric }: LyricNoteProps) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div layout className="rounded-sm border shadow-paper bg-[var(--moon-cream)] p-4" style={{ borderColor: 'var(--saturn-gold)' }}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full text-left"
      >
        <p className="font-hand text-xl leading-snug" style={{ color: 'var(--midnight)' }}>“{lyric.excerpt}”</p>
        <p className="font-body text-xs mt-2" style={{ color: 'var(--midnight)', opacity: 0.7 }}>
          {lyric.songTitle} — {lyric.artist}
        </p>
      </button>

      {open && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-3 pt-3 border-t border-[var(--saturn-gold)]/30 space-y-2">
          <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--midnight)' }}>{lyric.whyItMatters}</p>
          {lyric.memory && (
            <p className="font-body text-sm italic" style={{ color: 'var(--midnight)', opacity: 0.7 }}>{lyric.memory}</p>
          )}
          {lyric.celestialNote && (
            <p className="font-hand text-lg" style={{ color: 'var(--burgundy)' }}>{lyric.celestialNote}</p>
          )}
          {lyric.spotifyUrl && (
            <a
              href={lyric.spotifyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-body text-sm underline"
              style={{ color: 'var(--burgundy)' }}
            >
              Listen on Spotify <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          )}
        </motion.div>
      )}
    </motion.div>
  )
}

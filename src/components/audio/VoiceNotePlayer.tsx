import { Mic, Pause, Play } from 'lucide-react'

interface VoiceNotePlayerProps {
  available: boolean
  playing: boolean
  onPlay: () => void
  onPause: () => void
}

export function VoiceNotePlayer({ available, playing, onPlay, onPause }: VoiceNotePlayerProps) {
  if (!available) {
    return (
      <p className="font-hand text-lg text-center" style={{ color: 'var(--muted-ink)' }}>
        A voice note will live here once you add one.
      </p>
    )
  }

  return (
    <button
      type="button"
      onClick={playing ? onPause : onPlay}
      className="mx-auto flex items-center gap-3 rounded-full px-5 py-3 border shadow-paper hover:scale-105 active:scale-95 transition-transform"
      style={{ background: 'var(--moon-cream)', borderColor: 'var(--saturn-gold)', color: 'var(--midnight)' }}
      aria-pressed={playing}
    >
      <Mic className="w-4 h-4" aria-hidden="true" style={{ color: 'var(--burgundy)' }} />
      {playing ? <Pause className="w-4 h-4" aria-hidden="true" /> : <Play className="w-4 h-4" aria-hidden="true" />}
      <span className="font-hand text-lg">
        {playing ? 'Pause the voice note' : 'Play a little voice note'}
      </span>
    </button>
  )
}

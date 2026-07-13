import { Volume2, VolumeX } from 'lucide-react'
import { IconButton } from '../common/IconButton'

interface SoundToggleProps {
  muted: boolean
  onToggle: () => void
}

/** Persistent, unobtrusive sound toggle. Fixed to a corner once the gift is opened. */
export function SoundToggle({ muted, onToggle }: SoundToggleProps) {
  return (
    <div className="fixed bottom-4 right-4 z-30" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <IconButton label={muted ? 'Unmute background music' : 'Mute background music'} onClick={onToggle}>
        {muted ? <VolumeX className="w-5 h-5" aria-hidden="true" /> : <Volume2 className="w-5 h-5" aria-hidden="true" />}
      </IconButton>
    </div>
  )
}

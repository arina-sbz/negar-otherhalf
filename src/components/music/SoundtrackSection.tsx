import { SectionShell } from '../scrapbook/SectionShell'
import { LyricNote } from './LyricNote'
import { PlaylistCard } from './PlaylistCard'
import type { BirthdayContent } from '@/data/birthdayContent'

interface SoundtrackSectionProps {
  content: BirthdayContent
  onBack: () => void
}

export function SoundtrackSection({ content, onBack }: SoundtrackSectionProps) {
  return (
    <SectionShell
      title="The soundtrack of us"
      eyebrow="a handmade mixtape"
      subtitle="Some songs stopped belonging only to the artists because they became part of us."
      onBack={onBack}
    >
      <section aria-labelledby="lyrics-heading" className="mb-12">
        <h3 id="lyrics-heading" className="font-serif-heading text-2xl font-semibold text-center mb-5" style={{ color: 'var(--ink)' }}>
          My favourite lyrics that remind me of you (click on them)
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {content.favoriteLyrics.map((lyric) => (
            <LyricNote key={lyric.id} lyric={lyric} />
          ))}
        </div>
      </section>

      <section aria-labelledby="playlist-heading">
        <h3 id="playlist-heading" className="font-serif-heading text-2xl font-semibold text-center mb-5" style={{ color: 'var(--ink)' }}>
          The playlist I made for you
        </h3>
        <PlaylistCard
          spotifyPlaylistTitle={content.spotifyPlaylistTitle}
          spotifyPlaylistUrl={content.spotifyPlaylistUrl}
          spotifyPlaylistEmbedUrl={content.spotifyPlaylistEmbedUrl}
          spotifyPlaylistCover={content.spotifyPlaylistCover}
          spotifyPlaylistDedication={content.spotifyPlaylistDedication}
        />
      </section>
    </SectionShell>
  )
}

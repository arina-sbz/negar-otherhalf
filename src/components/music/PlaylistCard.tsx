import { ExternalLink, Disc3 } from 'lucide-react'
import { ScrapbookImage } from '../common/ScrapbookImage'
import type { BirthdayContent } from '@/data/birthdayContent'

type PlaylistFields = Pick<
  BirthdayContent,
  | 'spotifyPlaylistTitle'
  | 'spotifyPlaylistUrl'
  | 'spotifyPlaylistEmbedUrl'
  | 'spotifyPlaylistCover'
  | 'spotifyPlaylistDedication'
>

export function PlaylistCard(props: PlaylistFields) {
  const { spotifyPlaylistTitle, spotifyPlaylistUrl, spotifyPlaylistEmbedUrl, spotifyPlaylistCover, spotifyPlaylistDedication } = props

  return (
    <div className="rounded-sm border shadow-lifted bg-paper-texture p-5 sm:p-6" style={{ borderColor: 'var(--tape)' }}>
      <div className="flex flex-col sm:flex-row gap-5 items-start">
        <ScrapbookImage
          src={spotifyPlaylistCover}
          alt={`Cover art for the playlist "${spotifyPlaylistTitle}"`}
          className="w-32 h-32 shrink-0 rounded-sm object-cover shadow-paper"
          width={160}
          height={160}
        />
        <div className="flex-1">
          <p className="font-hand text-xl" style={{ color: 'var(--rose)' }}>a mixtape for you</p>
          <h3 className="font-serif-heading text-2xl font-semibold" style={{ color: 'var(--ink)' }}>{spotifyPlaylistTitle}</h3>
          <p className="font-body text-sm mt-2 leading-relaxed" style={{ color: 'var(--muted-ink)' }}>{spotifyPlaylistDedication}</p>
          {spotifyPlaylistUrl && (
            <a
              href={spotifyPlaylistUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-3 font-body text-sm font-medium rounded-full px-4 py-2 border shadow-paper"
              style={{ background: 'var(--sage)', color: 'var(--paper)', borderColor: 'var(--sage)' }}
            >
              Open in Spotify <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      <div className="mt-5">
        {spotifyPlaylistEmbedUrl ? (
          <div className="w-full overflow-hidden rounded-sm" style={{ aspectRatio: '16 / 9' }}>
            <iframe
              src={spotifyPlaylistEmbedUrl}
              title={`Spotify player for the playlist "${spotifyPlaylistTitle}"`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        ) : (
          <div
            className="w-full rounded-sm border border-dashed flex flex-col items-center justify-center gap-2 py-10"
            style={{ borderColor: 'var(--saturn-gold)', background: 'var(--paper-dark)' }}
          >
            <Disc3 className="w-8 h-8" style={{ color: 'var(--muted-ink)' }} aria-hidden="true" />
            <p className="font-hand text-xl" style={{ color: 'var(--muted-ink)' }}>Your playlist will live here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

import { useState } from 'react'
import { ImageOff } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ScrapbookImageProps {
  src?: string
  alt: string
  className?: string
  width?: number
  height?: number
}

/** Renders a photo, or a warm scrapbook-styled placeholder if it fails to load or is missing. */
export function ScrapbookImage({ src, alt, className, width = 480, height = 480 }: ScrapbookImageProps) {
  const [errored, setErrored] = useState(!src)

  if (!src || errored) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          'flex flex-col items-center justify-center gap-2 text-center px-4',
          'bg-[var(--paper-dark)] border border-dashed border-[var(--saturn-gold)]/50',
          className,
        )}
      >
        <ImageOff className="w-6 h-6" style={{ color: 'var(--muted-ink)' }} aria-hidden="true" />
        <span className="font-hand text-lg leading-snug" style={{ color: 'var(--muted-ink)' }}>
          a photo belongs here
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      className={className}
      onError={() => setErrored(true)}
    />
  )
}

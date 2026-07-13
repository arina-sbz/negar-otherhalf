import { useMemo } from 'react'
import { useReducedMotion } from '@/hooks/useLocalStorage'

interface StarFieldProps {
  count?: number
  className?: string
  slow?: boolean
}

/** Decorative, ARIA-hidden scattered twinkling stars for backgrounds. */
export function StarField({ count = 24, className = '', slow = false }: StarFieldProps) {
  const reducedMotion = useReducedMotion()
  const stars = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 1.5 + Math.random() * 2,
        delay: Math.random() * 4,
      })),
    [count],
  )

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {stars.map((star) => (
        <span
          key={star.id}
          className={reducedMotion ? '' : 'animate-twinkle'}
          style={{
            position: 'absolute',
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: star.size,
            height: star.size,
            borderRadius: '9999px',
            background: 'var(--star-glow)',
            animationDelay: `${star.delay}s`,
            animationDuration: slow ? '6s' : '3s',
          }}
        />
      ))}
    </div>
  )
}

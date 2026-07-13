interface MoonProps {
  className?: string
}

/** Hand-drawn crescent moon, plain SVG. */
export function Moon({ className = 'w-10 h-10' }: MoonProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" focusable="false">
      <path
        d="M62 15 A38 38 0 1 0 62 85 A30 30 0 1 1 62 15 Z"
        fill="var(--moon-cream)"
        stroke="var(--saturn-gold)"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="46" cy="40" r="1.6" fill="var(--saturn-gold)" opacity="0.4" />
      <circle cx="52" cy="58" r="1" fill="var(--saturn-gold)" opacity="0.3" />
    </svg>
  )
}

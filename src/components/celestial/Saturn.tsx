interface SaturnProps {
  className?: string
  spin?: boolean
}

/** A soft, hand-drawn-feeling Saturn built from plain SVG shapes — no external assets. */
export function Saturn({ className = 'w-16 h-16', spin = false }: SaturnProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g className={spin ? 'origin-center animate-orbit' : ''}>
        <ellipse
          cx="50"
          cy="52"
          rx="40"
          ry="10"
          fill="none"
          stroke="var(--saturn-gold)"
          strokeWidth="2.5"
          opacity="0.85"
        />
        <ellipse
          cx="50"
          cy="52"
          rx="34"
          ry="7.5"
          fill="none"
          stroke="var(--saturn-gold)"
          strokeWidth="1.5"
          opacity="0.6"
        />
      </g>
      <circle cx="50" cy="48" r="21" fill="var(--moon-cream)" stroke="var(--saturn-gold)" strokeWidth="2" />
      <path
        d="M35 40 Q50 34 65 40"
        stroke="var(--saturn-gold)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
        strokeLinecap="round"
      />
      <circle cx="42" cy="45" r="1.6" fill="var(--saturn-gold)" opacity="0.5" />
      <circle cx="58" cy="53" r="1.2" fill="var(--saturn-gold)" opacity="0.4" />
    </svg>
  )
}

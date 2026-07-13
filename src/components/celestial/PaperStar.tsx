interface PaperStarProps {
  className?: string
  filled?: boolean
}

/** A simple hand-cut paper-star shape. */
export function PaperStar({ className = 'w-5 h-5', filled = true }: PaperStarProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path
        d="M12 1.5 L14.6 8.8 L22.3 9.1 L16.2 13.9 L18.4 21.3 L12 16.9 L5.6 21.3 L7.8 13.9 L1.7 9.1 L9.4 8.8 Z"
        fill={filled ? 'var(--saturn-gold)' : 'none'}
        stroke="var(--saturn-gold)"
        strokeWidth="1"
        strokeLinejoin="round"
        opacity={filled ? 0.85 : 0.6}
      />
    </svg>
  )
}

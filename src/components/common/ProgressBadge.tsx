interface ProgressBadgeProps {
  discovered: number
  total: number
}

export function ProgressBadge({ discovered, total }: ProgressBadgeProps) {
  return (
    <p className="font-hand text-xl md:text-2xl text-center" style={{ color: 'var(--muted-ink)' }} aria-live="polite">
      {discovered} of {total} little pieces of our universe discovered
    </p>
  )
}

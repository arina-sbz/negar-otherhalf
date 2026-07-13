import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  children: ReactNode
}

/** Accessible icon-only button; `label` becomes the accessible name. */
export function IconButton({ label, children, className, ...props }: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={cn(
        'inline-flex items-center justify-center rounded-full w-11 h-11 border transition-transform active:scale-95 hover:scale-105',
        'bg-[var(--paper)] border-[var(--saturn-gold)]/40 shadow-paper',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

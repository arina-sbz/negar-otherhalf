import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

interface ScrapbookObjectProps {
  label: string
  description: string
  visited: boolean
  onClick: () => void
  rotate?: number
  icon: ReactNode
}

/** A single tactile, physical-looking object on the scrapbook home spread. */
export function ScrapbookObject({ label, description, visited, onClick, rotate = 0, icon }: ScrapbookObjectProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ rotate }}
      whileHover={{ rotate: 0, y: -4, scale: 1.03 }}
      whileFocus={{ rotate: 0, y: -4, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className={cn(
        'relative flex flex-col items-center justify-center gap-2 text-center',
        'w-full aspect-square rounded-sm border shadow-paper bg-paper-texture p-4',
        'focus-visible:outline-4',
      )}
      style={{ borderColor: 'var(--tape)' }}
      aria-label={`${label}${visited ? ' (visited)' : ''}. ${description}`}
    >
      {visited && (
        <span
          className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full"
          style={{ background: 'var(--sage)' }}
          aria-hidden="true"
        />
      )}
      <span aria-hidden="true" className="w-12 h-12 flex items-center justify-center">
        {icon}
      </span>
      <span className="font-hand text-xl leading-tight" style={{ color: 'var(--ink)' }}>
        {label}
      </span>
    </motion.button>
  )
}

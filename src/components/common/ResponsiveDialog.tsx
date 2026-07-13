import type { ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

interface ResponsiveDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description?: string
  children: ReactNode
}

/**
 * A single accessible modal primitive used across the scrapbook.
 * Behaves as a centered card on desktop and a comfortable full-height
 * sheet on small screens, so reading never feels cramped.
 */
export function ResponsiveDialog({ open, onOpenChange, title, description, children }: ResponsiveDialogProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-[1px] z-40" />
        <Dialog.Content
          className="fixed z-50 bg-paper-texture border border-[var(--tape)] shadow-lifted
            inset-x-0 bottom-0 top-[8dvh] rounded-t-2xl
            sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2
            sm:rounded-lg sm:w-full sm:max-w-lg sm:max-h-[85dvh]
            flex flex-col overflow-hidden focus:outline-none"
        >
          <div className="flex items-start justify-between gap-4 p-5 border-b border-[var(--tape)]">
            <div>
              <Dialog.Title className="font-serif-heading text-2xl font-semibold" style={{ color: 'var(--ink)' }}>
                {title}
              </Dialog.Title>
              {description && (
                <Dialog.Description className="font-body text-sm mt-1" style={{ color: 'var(--muted-ink)' }}>
                  {description}
                </Dialog.Description>
              )}
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Close"
                className="shrink-0 rounded-full w-10 h-10 flex items-center justify-center border border-[var(--saturn-gold)]/40 hover:scale-105 active:scale-95 transition-transform"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </Dialog.Close>
          </div>
          <div className="overflow-y-auto p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

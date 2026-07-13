import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { ScrapbookImage } from '../common/ScrapbookImage'

interface ImageLightboxProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  imageSrc?: string
  imageAlt: string
}

/** A minimal, image-only lightbox — no captions or story text, just a larger view of the photo. */
export function ImageLightbox({ open, onOpenChange, imageSrc, imageAlt }: ImageLightboxProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 backdrop-blur-[1px] z-40" />
        <Dialog.Content
          className="fixed z-50 inset-0 flex items-center justify-center p-4 sm:p-10 focus:outline-none"
          aria-describedby={undefined}
        >
          {/* Visually hidden — keeps the dialog accessible to screen readers without showing text on screen */}
          <Dialog.Title className="sr-only">{imageAlt}</Dialog.Title>
          <Dialog.Close asChild>
            <button
              type="button"
              aria-label="Close"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 rounded-full w-11 h-11 flex items-center justify-center border shadow-paper hover:scale-105 active:scale-95 transition-transform"
              style={{ background: 'var(--paper)', borderColor: 'var(--saturn-gold)', color: 'var(--ink)' }}
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </Dialog.Close>
          <ScrapbookImage
            src={imageSrc}
            alt={imageAlt}
            className="max-w-full max-h-[85dvh] object-contain rounded-sm shadow-lifted"
            width={1200}
            height={1200}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

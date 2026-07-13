import { useCallback } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const SCRAPBOOK_SECTIONS = [
  'memories',
  'timeline',
  'openWhen',
  'reasons',
  'soundtrack',
  'constellation',
  'finalPage',
] as const

export type ScrapbookSectionId = (typeof SCRAPBOOK_SECTIONS)[number]

interface ProgressState {
  giftOpened: boolean
  discoveredSections: ScrapbookSectionId[]
  openedLetters: string[]
  revealedNotes: string[]
  activatedStars: string[]
  soundMuted: boolean
  secretFound: boolean
}

const DEFAULT_PROGRESS: ProgressState = {
  giftOpened: false,
  discoveredSections: [],
  openedLetters: [],
  revealedNotes: [],
  activatedStars: [],
  soundMuted: true,
  secretFound: false,
}

export function useProgress() {
  const [progress, setProgress] = useLocalStorage<ProgressState>(
    'other-half:progress',
    DEFAULT_PROGRESS,
  )

  const markSectionDiscovered = useCallback(
    (section: ScrapbookSectionId) => {
      setProgress((prev) =>
        prev.discoveredSections.includes(section)
          ? prev
          : { ...prev, discoveredSections: [...prev.discoveredSections, section] },
      )
    },
    [setProgress],
  )

  const markLetterOpened = useCallback(
    (id: string) => {
      setProgress((prev) =>
        prev.openedLetters.includes(id)
          ? prev
          : { ...prev, openedLetters: [...prev.openedLetters, id] },
      )
    },
    [setProgress],
  )

  const markNoteRevealed = useCallback(
    (id: string) => {
      setProgress((prev) =>
        prev.revealedNotes.includes(id)
          ? prev
          : { ...prev, revealedNotes: [...prev.revealedNotes, id] },
      )
    },
    [setProgress],
  )

  const markStarActivated = useCallback(
    (id: string) => {
      setProgress((prev) =>
        prev.activatedStars.includes(id)
          ? prev
          : { ...prev, activatedStars: [...prev.activatedStars, id] },
      )
    },
    [setProgress],
  )

  const setGiftOpened = useCallback(() => {
    setProgress((prev) => ({ ...prev, giftOpened: true }))
  }, [setProgress])

  const setSecretFound = useCallback(() => {
    setProgress((prev) => ({ ...prev, secretFound: true }))
  }, [setProgress])

  const clearActivatedStars = useCallback(
    (ids: string[]) => {
      setProgress((prev) => ({
        ...prev,
        activatedStars: prev.activatedStars.filter((id) => !ids.includes(id)),
      }))
    },
    [setProgress],
  )

  const resetProgress = useCallback(() => {
    setProgress(DEFAULT_PROGRESS)
  }, [setProgress])

  return {
    progress,
    markSectionDiscovered,
    markLetterOpened,
    markNoteRevealed,
    markStarActivated,
    setGiftOpened,
    setSecretFound,
    clearActivatedStars,
    resetProgress,
  }
}

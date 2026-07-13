import { useCallback, useEffect, useRef, useState } from 'react'
import { safeLocalStorageGet, safeLocalStorageSet } from './useLocalStorage'

const MUTE_KEY = 'other-half:muted'
const DEFAULT_VOLUME = 0.35

/**
 * Reusable background-music + voice-note audio controller.
 * - Never plays until explicitly started by a user interaction.
 * - Pauses background music automatically while the voice note plays.
 * - Remembers muted state in localStorage; degrades gracefully without it.
 * - Cleans up all listeners and audio elements on unmount.
 */
export function useAudioController(backgroundSrc: string, voiceNoteSrc: string) {
  const bgRef = useRef<HTMLAudioElement | null>(null)
  const voiceRef = useRef<HTMLAudioElement | null>(null)

  const [muted, setMuted] = useState<boolean>(() => safeLocalStorageGet(MUTE_KEY) !== 'false')
  const [bgAvailable, setBgAvailable] = useState(true)
  const [voiceAvailable, setVoiceAvailable] = useState(true)
  const [voicePlaying, setVoicePlaying] = useState(false)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const bg = new Audio(backgroundSrc)
    bg.loop = true
    bg.volume = DEFAULT_VOLUME
    bg.preload = 'none'
    const onBgError = () => setBgAvailable(false)
    bg.addEventListener('error', onBgError)
    bgRef.current = bg

    const voice = new Audio(voiceNoteSrc)
    voice.volume = 0.9
    voice.preload = 'none'
    const onVoiceError = () => setVoiceAvailable(false)
    const onVoiceEnded = () => {
      setVoicePlaying(false)
      if (bgRef.current && !muted) {
        bgRef.current.play().catch(() => undefined)
      }
    }
    voice.addEventListener('error', onVoiceError)
    voice.addEventListener('ended', onVoiceEnded)
    voiceRef.current = voice

    return () => {
      bg.pause()
      bg.removeEventListener('error', onBgError)
      voice.pause()
      voice.removeEventListener('error', onVoiceError)
      voice.removeEventListener('ended', onVoiceEnded)
      bgRef.current = null
      voiceRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backgroundSrc, voiceNoteSrc])

  const startBackgroundMusic = useCallback(() => {
    setStarted(true)
    if (!muted && bgAvailable) {
      bgRef.current?.play().catch(() => undefined)
    }
  }, [muted, bgAvailable])

  const toggleMuted = useCallback(() => {
    setMuted((prev) => {
      const next = !prev
      safeLocalStorageSet(MUTE_KEY, String(next))
      if (next) {
        bgRef.current?.pause()
        voiceRef.current?.pause()
        setVoicePlaying(false)
      } else if (started && bgAvailable) {
        bgRef.current?.play().catch(() => undefined)
      }
      return next
    })
  }, [started, bgAvailable])

  const playVoiceNote = useCallback(() => {
    if (!voiceAvailable || muted) return
    bgRef.current?.pause()
    setVoicePlaying(true)
    voiceRef.current?.play().catch(() => setVoiceAvailable(false))
  }, [voiceAvailable, muted])

  const pauseVoiceNote = useCallback(() => {
    voiceRef.current?.pause()
    setVoicePlaying(false)
    if (started && !muted && bgAvailable) {
      bgRef.current?.play().catch(() => undefined)
    }
  }, [started, muted, bgAvailable])

  const duckBackgroundMusic = useCallback((duckedVolume = 0.08) => {
    if (bgRef.current) bgRef.current.volume = duckedVolume
  }, [])

  const restoreBackgroundMusic = useCallback(() => {
    if (bgRef.current) bgRef.current.volume = DEFAULT_VOLUME
  }, [])

  return {
    muted,
    toggleMuted,
    started,
    startBackgroundMusic,
    bgAvailable,
    voiceAvailable,
    voicePlaying,
    playVoiceNote,
    pauseVoiceNote,
    duckBackgroundMusic,
    restoreBackgroundMusic,
  }
}

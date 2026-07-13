import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useReducedMotion } from '@/hooks/useLocalStorage'

interface ShootingStarProps {
  intervalMs?: number
}

/** A shooting star that streaks fully across the page, left to right, then disappears. Skips under reduced motion. */
export function ShootingStar({ intervalMs = 9000 }: ShootingStarProps) {
  const reducedMotion = useReducedMotion()
  const [visible, setVisible] = useState(false)
  const [seed, setSeed] = useState(0)

  useEffect(() => {
    if (reducedMotion) return

    const fire = () => {
      setSeed((s) => s + 1)
      setVisible(true)
      window.setTimeout(() => setVisible(false), 2600)
    }

    const firstRun = window.setTimeout(fire, 1500)
    const interval = window.setInterval(fire, intervalMs)
    return () => {
      window.clearTimeout(firstRun)
      window.clearInterval(interval)
    }
  }, [reducedMotion, intervalMs])

  if (reducedMotion) return null

  const top = 15 + ((seed * 17) % 55)

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <AnimatePresence>
        {visible && (
          <motion.span
            key={seed}
            initial={{ opacity: 0, left: '-10%', top: `${top}%` }}
            animate={{ opacity: [0, 1, 1, 0], left: '110%', top: `${top + 8}%` }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.2, ease: 'linear' }}
            className="absolute w-24 h-[2px] rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent, var(--star-glow), var(--star-glow))',
              boxShadow: '0 0 8px 1px var(--star-glow)',
            }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

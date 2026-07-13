import { Moon } from '../celestial/Moon'
import { Saturn } from '../celestial/Saturn'

/** Decorative section divider using an orbit line with a small moon and Saturn. */
export function OrbitDivider() {
  return (
    <div className="relative flex items-center justify-center py-10" aria-hidden="true">
      <div className="h-px w-2/3 max-w-md" style={{ background: 'linear-gradient(90deg, transparent, var(--saturn-gold), transparent)' }} />
      <Moon className="w-6 h-6 absolute left-1/2 -translate-x-16" />
      <Saturn className="w-8 h-8 absolute left-1/2 translate-x-10" />
    </div>
  )
}

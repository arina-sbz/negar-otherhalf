/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        'paper-dark': 'var(--paper-dark)',
        'paper-night': 'var(--paper-night)',
        ink: 'var(--ink)',
        'muted-ink': 'var(--muted-ink)',
        rose: 'var(--rose)',
        burgundy: 'var(--burgundy)',
        sage: 'var(--sage)',
        'faded-blue': 'var(--faded-blue)',
        midnight: 'var(--midnight)',
        'saturn-gold': 'var(--saturn-gold)',
        'moon-cream': 'var(--moon-cream)',
        tape: 'var(--tape)',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Lora"', 'Georgia', 'serif'],
        hand: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        paper: '0 2px 10px rgba(0, 0, 0, 0.35), 0 1px 2px rgba(0, 0, 0, 0.25)',
        lifted: '0 12px 30px rgba(0, 0, 0, 0.5)',
      },
      keyframes: {
        'drift': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        },
        'twinkle': {
          '0%, 100%': { opacity: 0.35 },
          '50%': { opacity: 1 },
        },
        'orbit-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        drift: 'drift 6s ease-in-out infinite',
        twinkle: 'twinkle 3s ease-in-out infinite',
        orbit: 'orbit-spin 40s linear infinite',
      },
    },
  },
  plugins: [],
}

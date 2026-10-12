/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#070709',
          900: '#0b0c0e',
          850: '#101115',
          800: '#16171d',
          700: '#22232a',
          600: '#2e303a',
        },
        accent: {
          blue: '#3b82f6',
          sky: '#38bdf8',
          electric: '#2563eb',
          glow: 'rgba(59, 130, 246, 0.15)',
        },
        surface: {
          card: 'rgba(22, 23, 29, 0.7)',
          border: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(255, 255, 255, 0.04)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        headline: ['"Syne"', '"Plus Jakarta Sans"', '"Inter Tight"', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Inter Tight"', 'sans-serif'],
        syne: ['"Syne"', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        outfit: ['"Outfit"', 'sans-serif'],
        interTight: ['"Inter Tight"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        cursive: ['"Alex Brush"', '"Pinyon Script"', '"Great Vibes"', 'cursive'],
        script: ['"Pinyon Script"', '"Alex Brush"', 'cursive'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
      },
      boxShadow: {
        'glow-sm': '0 0 20px -5px rgba(59, 130, 246, 0.3)',
        'glow-lg': '0 0 45px -10px rgba(59, 130, 246, 0.25)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#050505",
        darker: "#030303",
        card: "#0a0a0a",
        accent: "#3b82f6",
        "accent-light": "#60a5fa",
        "accent-dark": "#1d4ed8",
        muted: "#666666",
        "muted-light": "#999999",
        border: "#1a1a1a",
        "border-light": "#2a2a2a",
      },
      fontFamily: {
        mono: ['"Fira Code"', '"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'grid-move': 'gridMove 20s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        gridMove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '50px 50px' },
        }
      }
    },
  },
  plugins: [],
}

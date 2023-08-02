/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bopUp: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-2px) scale(99%)' },
        }
      },
      animation: {
        'upHighlight': 'bopUp 0.1s linear forwards',
      }
    },
    fontFamily: {
      'serif': ['Inika', 'serif'],
    }
  },
  plugins: [],
}


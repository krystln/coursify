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
        },
        scaleUp: {
          '100%': { transform: 'scale(1.1)' },
        },
        scroll: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(-500%)' },
        }
      },
      animation: {
        'upHighlight': 'bopUp 0.1s linear forwards',
        'scaleUp': 'scaleUp 0.1s linear forwards',
        'infScroll': 'scroll 100s linear infinite',
        'negInfScroll': 'scroll reverse 110s linear infinite',
      }
    },
    fontFamily: {
      'serif': ['Inika', 'serif'],
    }
  },
  plugins: [],
}


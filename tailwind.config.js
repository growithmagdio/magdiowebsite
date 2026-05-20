/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:    '#1A22B8',
          yellow:  '#F2B300',
          lavender:'#D9D7FF',
          lightblue:'#BFD7FF',
          dark:    '#111111',
          white:   '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0a0d3d 0%, #0e1255 40%, #1A22B8 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(26,34,184,0.15) 0%, rgba(242,179,0,0.08) 100%)',
        'gold-gradient': 'linear-gradient(135deg, #F2B300 0%, #ffcd38 100%)',
        'blue-gradient': 'linear-gradient(135deg, #1A22B8 0%, #4a54e8 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'blob': 'blob 10s infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-x': 'gradientX 5s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(26,34,184,0.4)' },
          '50%':       { boxShadow: '0 0 50px rgba(26,34,184,0.8), 0 0 20px rgba(242,179,0,0.3)' },
        },
        blob: {
          '0%':   { transform: 'translate(0px, 0px) scale(1)' },
          '33%':  { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%':  { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':       { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-blue':   '0 0 30px rgba(26,34,184,0.5)',
        'glow-yellow': '0 0 30px rgba(242,179,0,0.5)',
        'glow-soft':   '0 8px 32px rgba(26,34,184,0.2)',
        'card':        '0 8px 32px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3d2b1f',
          hover: '#2c1e15',
          light: '#5a4030',
          subtle: 'rgba(61, 43, 31, 0.08)',
        },
        brand: {
          bg: '#E8E6DC',
          surface: '#FBF9EC',
          surfaceHover: '#FAF6E5',
          text: '#231F1C',
          muted: '#737063',
          border: '#DFDBCB',
          borderCard: '#E4DFCE',
        },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest2: '0.25em',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        'pill': '0 2px 10px rgba(45, 38, 30, 0.04)',
        'card': '0 4px 20px -2px rgba(45, 38, 30, 0.05)',
        'card-hover': '0 12px 32px -4px rgba(45, 38, 30, 0.12)',
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
      },
    },
  },
  plugins: [],
}

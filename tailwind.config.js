/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Plus Jakarta Sans"', '"Noto Sans"', 'system-ui', 'sans-serif'],
        'serif': ['"Instrument Serif"', 'serif'],
        'script': ['"Pacifico"', 'cursive'],
      },
      colors: {
        cream: {
          DEFAULT: '#F5F2E7',
          50: '#FDFCF8',
          100: '#FAF8F0',
          200: '#F5F2E7',
          300: '#E8E3D2',
          400: '#D4CDBA',
          500: '#B8B09C',
        },
        brand: {
          dark: '#1A1A1A',
          charcoal: '#2D2D2D',
          muted: '#6B6B6B',
        },
        neonGreen: {
          DEFAULT: '#C7EA46',
          hover: '#D4F060',
          muted: '#C7EA4640',
        },
        neonYellow: {
          DEFAULT: '#FFEC33',
          hover: '#FFF066',
          muted: '#FFEC3340',
        },
        electricBlue: {
          DEFAULT: '#3EAEFF',
          hover: '#5CBFFF',
          muted: '#3EAEFF40',
          deep: '#1A8FDF',
        },
        // Legacy aliases
        primary: '#DEDBC8',
        dark: '#1A1A1A',
        light: '#E1E0CC',
        muted: '#6B6B6B',
        beige: '#F5F2E7',
      },
      boxShadow: {
        'sticker': '0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)',
        'sticker-hover': '0 8px 40px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)',
        'sticker-float': '0 12px 48px rgba(0, 0, 0, 0.1)',
        'glow-green': '0 0 20px rgba(199, 234, 70, 0.3)',
        'glow-blue': '0 0 20px rgba(62, 174, 255, 0.3)',
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 6px 24px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.06), 0 12px 48px rgba(0,0,0,0.1)',
      },
      borderRadius: {
        'sticker': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'float': 'float-gentle 6s ease-in-out infinite',
        'float-slow': 'float-drift 8s ease-in-out infinite',
        'float-sticker': 'float-sticker 7s ease-in-out infinite',
        'wobble': 'wobble 3s ease-in-out infinite',
        'shine-sweep': 'shine-sweep 3s ease-in-out infinite',
        'peel': 'peel-corner 0.4s ease forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient-x': 'gradient-x 5s ease infinite',
        'marquee': 'marquee var(--duration) linear infinite',
      },
      keyframes: {
        'float-gentle': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-12px) rotate(2deg)' },
          '50%': { transform: 'translateY(-6px) rotate(-1deg)' },
          '75%': { transform: 'translateY(-16px) rotate(3deg)' },
        },
        'float-drift': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-20px) translateX(10px)' },
          '66%': { transform: 'translateY(-8px) translateX(-8px)' },
        },
        'float-sticker': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg) scale(1)' },
          '20%': { transform: 'translateY(-14px) rotate(4deg) scale(1.02)' },
          '40%': { transform: 'translateY(-8px) rotate(-2deg) scale(0.98)' },
          '60%': { transform: 'translateY(-18px) rotate(3deg) scale(1.01)' },
          '80%': { transform: 'translateY(-5px) rotate(-3deg) scale(0.99)' },
        },
        'wobble': {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        'shine-sweep': {
          '0%': { left: '-150%' },
          '50%': { left: '150%' },
          '100%': { left: '150%' },
        },
        'peel-corner': {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '100%': { transform: 'rotate(-5deg) scale(1.02)' },
        },
        shimmer: {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(100%)' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        marquee: {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    },
    container: {
      center: true,
      padding: '1rem',
    }
  },
  plugins: [],
}
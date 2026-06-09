/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Almarai"', '"Plus Jakarta Sans"', '"Noto Sans"', 'sans-serif'],
        'serif': ['"Instrument Serif"', 'serif'],
        'script': ['"Pacifico"', 'cursive'],
      },
      colors: {
        primary: '#DEDBC8',
        dark: '#101010',
        light: '#E1E0CC',
        muted: '#888888',
        beige: '#F5F2E7',
        neonGreen: '#C7EA46',
        neonYellow: '#FFEC33',
        electricBlue: '#3EAEFF',
      },
      gridTemplateRows: {
        '1': 'repeat(1, minmax(0, 1fr))',
        '2': 'repeat(2, minmax(0, 1fr))',
        '3': 'repeat(3, minmax(0, 1fr))',
        '4': 'repeat(4, minmax(0, 1fr))',
      },
      gridTemplateColumns: {
        '1': 'repeat(1, minmax(0, 1fr))',
        '2': 'repeat(2, minmax(0, 1fr))',
        '3': 'repeat(3, minmax(0, 1fr))',
        '4': 'repeat(4, minmax(0, 1fr))',
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        shimmer: "shimmer 2s linear infinite",
        "gradient-x": "gradient-x 5s ease infinite",
        "float": "float-gentle 6s ease-in-out infinite",
        "float-slow": "float-drift 8s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0%)" },
          to: { transform: "translateY(-100%)" },
        },
        shimmer: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(100%)" },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "float-gentle": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "25%": { transform: "translateY(-12px) rotate(3deg)" },
          "50%": { transform: "translateY(-6px) rotate(-2deg)" },
          "75%": { transform: "translateY(-18px) rotate(4deg)" },
        },
        "float-drift": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "33%": { transform: "translateY(-20px) translateX(10px)" },
          "66%": { transform: "translateY(-8px) translateX(-8px)" },
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
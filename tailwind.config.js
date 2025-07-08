/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Plus Jakarta Sans"', '"Noto Sans"', 'sans-serif'],
      },
      colors: {
        primary: '#e92932',
        dark: '#181111',
        light: '#f4f0f0',
        muted: '#886364',
      },
    },
    container: {
      center: true,
      padding: '1rem',
    }
  },
  plugins: [],
}
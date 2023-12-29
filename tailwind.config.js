/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: ['light'],
  },
  theme: {
    extend: {
      fontFamily: {
        popins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif",
        inter: "'Inter', sans-serif",
        crimson: "'Crimson Text', serif",
      },
    },
  },
  plugins: [require('daisyui')],
}

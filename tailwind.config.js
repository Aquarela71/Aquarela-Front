/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        diurno:'#CD3102',
        noturno:'#000128',
      }
    },
  },
  plugins: [],
}
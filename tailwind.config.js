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
        noturno:'#0a0b1f',
        eggnog:"#faedc3",
        bege:"#dad2a6",
        lar:"#d28c42",
        ros:"#b6485d",
        ver:"#2b5354",

      },
    },
  },
  plugins: [],
}
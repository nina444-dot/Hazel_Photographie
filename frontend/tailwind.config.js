/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hazel-light': '#FFE3D5',   // Ton "Light"
        'hazel-brown': '#735240',   // Ton "Marron Foncé"
        'hazel-btn': '#B6856B',     // Ton "Btn"
        'hazel-rust': '#8A3A3A',    // Ton "Rouille"
        'hazel-black': '#000000',   // Ton "Noir"
      },
      fontFamily: {
        'cormorant': ['"Cormorant Garamond"', 'serif'], 
      }
    },
  },
  plugins: [],
}
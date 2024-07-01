/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        customColor: '#E0A75E', 
      },
      fontFamily: {
        playwriteNGModern: ['"Playwrite NG Modern"', 'sans-serif'],
        playwriteNZ: ['"Playwrite NZ"', 'sans-serif'],
        playwriteRO: ['"Playwrite RO"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui:{
    themes:['light'],
  }
}
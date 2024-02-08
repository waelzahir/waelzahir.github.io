/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "Darkbg": "#000000",
        "Darkndbg": "#141414",
        "DarkText": "#fcfcfc",
        "Lightbg": "#FFFFFF",
        "Lightndbg": "#F9F9F9",
        "LightText": "#2D2D2D"
      },
      fontFamily:{
        'egoist': ['Cabin', 'sans-serif']
      }
    },
  },
  plugins: [],
}


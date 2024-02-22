/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "xpBarborder" : "#3c79e4",
        "XpBar": "#245edb",
        "openTab": "#3d7ff7",
        "StateBar": "#0b9bf3",
        "StartButton" : "#1b8c18",
        "contextMenu": "#F4F4F4",
        "Contextborder": "#8E8D8A",
        "ContextSelection": "#3997d4"
      },
      fontFamily:{
        'egoist': ['Cabin', 'sans-serif'],
        'tahoma': ['Tahoma', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


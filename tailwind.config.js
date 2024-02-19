/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "XpBar": "#81C046",
        "contextMenu": "#F4F4F4",
        "Contextborder": "#8E8D8A",
        "ContextSelection": "#3997d4",
        "PrimaryText": "#E85A4F"
      },
      fontFamily:{
        'egoist': ['Cabin', 'sans-serif'],
        'tahoma': ['Tahoma', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


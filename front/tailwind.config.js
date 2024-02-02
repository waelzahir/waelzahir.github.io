/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        '1Backround' : "#333a45",
        
        'BarsColor': "#f44c7f",






        
      }
    },
  },
  plugins: [ require('tailwind-scrollbar') ],
}


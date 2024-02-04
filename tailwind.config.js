/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "border": "#bbc7cb",
        "text": "#8eaca7"
      },
      fontFamily: {
        'pixelify': ['Pixelify Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}


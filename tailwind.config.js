/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "background": "#EAE7DC",
        "ndbackground": "#D8C3A5",
        "integrator": "#8E8D8A",
        "SecondaryText": "#E98074",
        "PrimaryText": "#E85A4F"
      },
      fontFamily:{
        'egoist': ['Cabin', 'sans-serif']
      }
    },
  },
  plugins: [],
}


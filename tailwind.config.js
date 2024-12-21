/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#F2C300"
      },
      fontFamily: {
        ruddy:['Ruddy','sans-serif']
      }
    },
  },
  plugins: [],
}


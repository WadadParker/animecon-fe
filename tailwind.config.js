/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          DEFAULT:"#F2C300",
          dark:"#FFCE00",
          blue:"#3590FF"
        },
        secondary:"#2E63A4",
        bg:{
          light:"#FFFCEC"
        }
      },
      fontFamily: {
        ruddy:['Ruddy','sans-serif']
      }
    },
  },
  plugins: [],
}


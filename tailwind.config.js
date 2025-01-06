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
          red:"#D70000",
          blue:"#3590FF",
          dark:"#FFCE00",
        },
        secondary:"#2E63A4",
        bg:{
          light:"#FFFCEC"
        },
        stroke:{
          DEFAULT:"#9C0000"
        }
      },
      fontFamily: {
        ruddy:['Ruddy','sans-serif']
      }
    },
  },
  plugins: [],
}


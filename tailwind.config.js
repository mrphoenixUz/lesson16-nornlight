import flowbite from "flowbite/plugin"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        first: "#F2F2F2",
        second: "#454545",
        third: "#2F4DA3",
        fourth: "#A2A2A2",
        fifth: "#C63C3C",
      }
    },
  },
  plugins: [flowbite],
}
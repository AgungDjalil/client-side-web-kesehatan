/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: '#50bfc3',
        secondaryBg: '#2C7693',
        threeRdBg: '#F7C323'
      }
    },
  },
  plugins: [],
}

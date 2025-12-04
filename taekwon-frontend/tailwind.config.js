/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        songmyung: ['Song Myung', 'serif'],
        publicsans: ['Public Sans', 'sans-serif'],
        postnobills: ['"Post No Bills Colombo"', 'serif'],
        saira: ['"Saira Stencil One"', 'cursive'],
      },
    },
  },
  plugins: [],
}


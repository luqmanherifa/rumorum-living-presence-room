/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Dela Gothic One'", "cursive"],
        body: ["'Happy Monkey'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        rumor: "#1F2A1C",
        whisper: "#D65CFF",
        echo: "#58CC02",
      },
      fontFamily: {
        heading: ["'Dela Gothic One'", "cursive"],
        body: ["'Happy Monkey'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

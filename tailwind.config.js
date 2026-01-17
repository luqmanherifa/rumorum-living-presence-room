/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        rumor: "#9A3DCC",
        whisper: "#43C000",
        echo: "#FF4F9A",
        spark: "#008FFF",
      },
      fontFamily: {
        heading: ["'Fredoka'", "cursive"],
        body: ["'Quicksand'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007BFF", // Blue
        background: "#FFFFFF", // White
        text: "#333333", // Dark grey for text
      },
      fontFamily: {
        sans: ["Verdana", "Geneva", "sans-serif"],
      },
    },
  },
  plugins: [],
};

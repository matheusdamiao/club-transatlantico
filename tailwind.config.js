/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amarelo: "#FFCC00",
        vermelhoEscuro: "#A90000",
        vermelhoClaro: "#FF0000",
        cinza: "#4F4F4F",
      },
      fontFamily: {
        title: ["MilExtraBold", "sans"],
        body: ["MilLight"],
      },
    },
  },
  plugins: [],
};

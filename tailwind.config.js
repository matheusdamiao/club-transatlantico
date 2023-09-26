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
      },
      fontFamily: {
        title: ["MilExtraBold", "sans"],
        body: ["MilLight"],
      },
    },
  },
  plugins: [],
};

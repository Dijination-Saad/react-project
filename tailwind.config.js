/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "curious-blue": "#3c8dbc",
        tangerine: "#f68d2d",
        lima: "#7ec347",
        "persian-green": "#20a595",
        grey: "#d8d8d8",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

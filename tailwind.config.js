/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#D4A373",
        primaryDark: "#9c6644",
        primary2: "#CCD5AE",
        secondary: "#FAEDCD",
        secondary2: "#E9EDC9",
        light: "#FEFAE0",
        dark: "#0f172a",
        semiDark: "#575c69",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#d00000",
          light: "#9d0208",
          dark: "#d00000",
        },
        secondary: {
          default: "#ffd700",
          dark: "#ffd700",
        },
        darkbackground: "#070416",
        darkbackgroundlight: "#0d072a",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

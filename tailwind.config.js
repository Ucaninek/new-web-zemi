/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        theme: {
          1: "#F52974",
          2: "#FFDA0A",
          3: "#0D95FD",
          dark: "#141414",
          light: "#EFEFEF",
        }
      },
    },
  },
  plugins: [],
}


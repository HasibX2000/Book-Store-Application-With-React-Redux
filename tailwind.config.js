/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: {
          100: "#fbdbdd",
          200: "#f9c9cc",
          300: "#f7b7bb",
          400: "#f6a5ab",
          500: "#f4929a",
          600: "#f28089",
          700: "#f06e78",
          800: "#ee5c67",
          900: "#ec4a56",
        },
      },
    },
  },
  plugins: [],
};

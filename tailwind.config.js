/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlack: "#161516",
        skyBlue: "#33B7BC",
        disabledBlue: "#246E71",
        white: "#fff",
        grey: "#ACAEB4",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      maxWidth: {
        base: "1440px",
      },
    },
  },
  plugins: [],
};

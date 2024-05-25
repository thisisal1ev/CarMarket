/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlack: "#161516",
        secondBlack: "#282728",
        skyBlueDarker: "#33B7BC",
        skyBlue: "#06f6ff",
        disabledBlue: "#246E71",
        white: "#fff",
        grey: "#ACAEB4",
        red: "#E31E36",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      maxWidth: {
        base: "1440px",
      },
      zIndex: {
        1: 1,
      },
    },
  },
  plugins: [],
};

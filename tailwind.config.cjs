/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { min: "640px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1500px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
    },
    colors: {
      deepgreen: "#76887D",
      green: "#4CA154",
      grey: "#E6E6E6",
      purple: "#4D4775",
      hoverknap: "#157A3B",
      white: "#FFFFFF",
      black: "#000000",
      blue: "#4D4775",
    },

    fontFamily: {
      poppins: "poppins",
      yesevaone: "yesevaone",
    },

    fontSize: {
      xs: ["13px"],
      sm: ["16px"],
      // BRØDTEKST
      lg: ["18px", { lineHeight: "30px" }],
      // H2
      base: ["30px"],
      // H1
      xl: ["70px", { lineHeight: "70px" }],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
  plugins: [require("daisyui")],
};

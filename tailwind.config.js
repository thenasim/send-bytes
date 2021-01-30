const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      green: colors.green,
      blue: colors.blue,
      red: colors.red,
      gray: colors.warmGray,
      emerald: colors.emerald,
      fuchsia: colors.fuchsia,
      rose: colors.rose,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

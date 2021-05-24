// @ts-check

/** @type {import("tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  mode: "jit",
  purge: ["./packages/**/*.{ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "PingFang SC",
          "Hiragino Sans GB",
          "Noto Sans CJK SC",
          "Microsoft YaHei",
          "Noto Sans",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      // colors: {

      // }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
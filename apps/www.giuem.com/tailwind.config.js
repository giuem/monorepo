// @ts-check

/** @type {import("tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'PT Sans',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'PingFang SC',
          'Hiragino Sans GB',
          'Noto Sans CJK SC',
          'Microsoft YaHei',
          'Noto Sans',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      colors: {
        black: '#121315',
      },
      container: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
        },
      },
    },
  },
  // variants: {
  //   extend: {
  //     margin: ['responsive', 'first'],
  //     typography: ['dark'],
  //   },
  // },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};

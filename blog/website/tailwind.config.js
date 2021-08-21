// @ts-check

/** @type {import("tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.{ts,tsx}'],
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
      // colors: {

      // }
      container: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            blockquote: {
              fontStyle: 'normal',
            },
          },
        },
      },
    },
    nightwind: {
      typography: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('nightwind')],
};

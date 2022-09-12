const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '350px',
      sm: '480px',
      md: '768px',
      lg: '1440px',
      xl: '1920px',
    },
    fontFamily: {
      main: ['Raleway', 'sans-serif'],
    },

    extend: {
      boxShadow: {
        bb1: '0px 4px 10px rgba(106, 161, 193, 0.25)',
        btnSh: 'inset 0px -1px 2px rgba(0, 0, 0, 0.32), inset -1px -2px 4px rgba(7, 33, 50, 0.16)',
      },
      fontSize: {
        qqBase: ['16px', '24px'],
        28: ['28px', '33px'],
        52: ['52px', '61px'],
      },
      colors: {
        main: '#00090E',
        accentTextColor: '#065A92',
      },
    },
  },
  variants: {},
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.footer': {
          color: '#fff',
          backgroundColor: '#065A92',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'left',
          justifyContent: 'space-between',
          fontSize: 14,
          fontWeight: 500,
          lineHeight: 1.5,
        },
      });
    }),
  ],
};

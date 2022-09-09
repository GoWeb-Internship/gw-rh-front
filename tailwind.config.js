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
      },
      fontSize: {
        qqBase: ['16px', '24px'],
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

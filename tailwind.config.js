const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1440px',
      xl: '1920px',
    },
    fontFamily: {
      main: ['Raleway', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        sm: '20px',
        md: '64px',
        lg: '152px',
        xl: '150px',
      },
    },

    extend: {
      boxShadow: {
        bb1: '0px 4px 10px rgba(106, 161, 193, 0.25)',
        sh2: 'inset 0px -1px 2px rgba(0, 0, 0, 0.32), inset -1px -2px 4px rgba(7, 33, 50, 0.16)',
        btnSh:
          'inset 0px -1px 2px rgba(0, 0, 0, 0.32), inset -1px -2px 4px rgba(7, 33, 50, 0.16)',
        accordion:
          'inset 0px -4px 8px rgba(7, 27, 77, 0.24), inset 0px -16px 24px rgba(7, 27, 77, 0.16)',
      },
      fontSize: {
        t1421: ['14px', '21px'],
        t1416: ['14px', '16px'],
        qqBase: ['16px', '24px'],
        28: ['28px', '33px'],
        t3642: ['36px', '42px'],
        t2444: ['24px', '44px'],
        52: ['52px', '61px'],
      },
      colors: {
        main: '#00090E',
        blue: '#3497D8',
        brand1: '#065A92',
        brand2: '#3497D8',
        light: '#FCFCFA',
        black: '#00090E',
        bgHero: '#E4F0F6',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    plugin(({ addComponents }) => {
      addComponents({
        '.footer': {
          color: '#fff',
          backgroundColor: '#065A92',
          textAlign: 'left',
          fontSize: 14,
          fontWeight: 500,
          lineHeight: 1.5,
        },
      });
    }),
  ],
};

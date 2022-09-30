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
      animation: {
        tree: 'tree 5s linear infinite',
      },
      keyframes: {
        tree: {
          '0%, 60%, 100%': { transform: 'scale(1)' },
          '80%': { transform: 'scale(1.05)' },
        },
      },
      boxShadow: {
        bb1: '0px 4px 10px rgba(106, 161, 193, 0.25)',
        sh2: 'inset 0px -1px 2px rgba(0, 0, 0, 0.32), inset -1px -2px 4px rgba(7, 33, 50, 0.16)',
        btnSh:
          'inset 0px -1px 2px rgba(7, 33, 50, 0.32), inset -1px -2px 4px rgba(7, 33, 50, 0.16)',
        accordion:
          'inset 0px -4px 8px rgba(7, 27, 77, 0.24), inset 0px -16px 24px rgba(7, 27, 77, 0.16)',
      },
      dropShadow: {
        arrow:
          'inset 0px -1px 2px rgba(7, 33, 50, 0.32), inset -1px -2px 4px rgba(7, 33, 50, 0.16)',
      },
      fontSize: {
        qqBase: ['16px', '24px'],
        t1421: ['14px', '21px'],
        t1416: ['14px', '16px'],
        t3642: ['36px', '42px'],
        t1821: ['18px', '21px'],
        t1824: ['18px', '24px'],
        t1828: ['18px', '28px'],
        t2444: ['24px', '44px'],
        28: ['28px', '33px'],
        52: ['52px', '61px'],
      },
      colors: {
        main: '#00090E',
        blue: '#3497D8',
        brand1: '#065A92',
        brand2: '#3497D8',
        brand3: '#FFB35B',
        light: '#FCFCFA',
        bgHero: '#E4F0F6',
        red: '#D11414',
        treeBtn: '#D9E1E8',
        treeBtnAccent: '#C9D2D9',
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: theme('colors.main'),
            fontWeight: 400,
            p: {
              marginTop: 0,
              marginBottom: '1.5rem',
            },
            ul: {
              marginTop: 0,
              marginBottom: '1.5rem',
              paddingLeft: '1.5rem',
              listStyle: 'none',
            },
            'ul > li': {
              padding: 0,
            },
            li: {
              position: 'relative',
              color: theme('colors.main'),
              marginTop: 0,
              marginBottom: '0.5rem',
              padding: 0,
              '&::after': {
                content: '*',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'green',
              },
            },
            'li:last-child': {
              marginTop: 0,
              marginBottom: 0,
            },
            hr: {
              border: 'none',
              margin: 0,
              height: '2rem',
            },
            pre: {
              marginTop: 0,
              marginBottom: '1.5rem',
              padding: 0,
              backgroundColor: 'transparent',
              color: theme('colors.brand2'),
              fontFamily: 'inherit',
              fontWeight: 500,
              fontSize: '1rem',
            },
            img: {
              display: 'block',
              marginTop: 0,
              marginBottom: '1.5rem',
            },
          },
        },
      }),
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    plugin(({ addComponents }) => {
      addComponents({
        '.footer': {
          color: '#fff',
          textAlign: 'left',
          fontSize: 14,
          fontWeight: 500,
          lineHeight: 1.5,
        },
      });
    }),
  ],
};

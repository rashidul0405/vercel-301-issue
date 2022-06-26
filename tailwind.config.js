/**
 * @type {import('tailwindcss').Config}
 **/
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      primary: '"Open Sans", sans-serif',
      patua: '"Patua One", sans-serif',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      primary: '#333333',
      yellow: '#FEC549',
      green: '#4CAF50',
      gray: {
        DEFAULT: '#7B7B7B',
        400: '#EDEDED',
      },
      'blue-gray': '#EEF2F6',
    },
    fontSize: {
      xs: ['0.75rem', '1rem'], // 12-16
      sm: ['0.875rem', '1.25rem'], // 14-20
      base: ['1rem', '1.625rem'], // 16-26
      lg: ['1.125rem', '1.625rem'], // 18-26
      xl: ['1.5rem', '2rem'], // 24-32
      '2xl': ['1.875rem', '2.5rem'], // 30-40
      '3xl': ['3.4375rem', '5rem'],
    },
    boxShadow: {
      box: '0px 6px 15px rgba(64, 79, 104, 0.05)',
      faq: '0px 1px 4px rgba(20, 3, 66, 0.07)',
      sidebar: '0px 20px 30px rgba(25, 25, 46, 0.04)',
      team: '0px 25px 70px rgba(1, 33, 58, 0.07)',
    },
    extend: {
      screens: {
        '3xl': '1920px',
      },
      spacing: {
        15: '3.75rem',
      },
      margin: {
        7.5: '30px',
      },
      borderWidth: {
        16: '16px',
      },
      padding: {
        7.5: '30px',
      },
      gap: {
        7.5: '30px',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.primary'),
            // a: {
            //   borderWidth: theme('borderWidth'),
            //   borderColor: theme('colors.black'),
            // },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}

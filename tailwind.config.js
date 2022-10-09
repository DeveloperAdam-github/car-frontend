/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        headline: ['F1-Regular'],
        boldHeadline: ['F1-Bold'],
      },
      transitionProperty: {
        position: 'position',
      },
    },
  },
  plugins: [require('daisyui')],
};

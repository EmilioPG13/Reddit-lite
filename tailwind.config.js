module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        reddit_dark: {
          DEFAULT: '#030303',
          brighter: '#272728',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

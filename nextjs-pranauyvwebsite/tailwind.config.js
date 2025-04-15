/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        waterfall: ['Waterfall', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/aspect-ratio')
  ],
};

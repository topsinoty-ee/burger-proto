/**
 * @format
 * @type {import('tailwindcss').Config}
 */

// add a font called abys from ./Assets/Abys-regualar.otf

module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        blue: '#003399',
        yellow: '#FFD700',
        brown: '#964B00',
        green: '#008000',
      },
      fontFamily:{
        'abys':['abys', 'sans-serif']
      },
      backgroundImage:{
        'burger-bg': "url('./Assets/Burger-bg.webp')"
      }
    },
  },
  plugins: [],
};

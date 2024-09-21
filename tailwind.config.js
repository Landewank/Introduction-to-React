/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors :{
        primary:'#004AAD',
        secondary:'#F17117'
      },
      screens: {
        's': '375px', // Menambahkan breakpoint untuk layar 375px
        'xs':'425px'
      }
    }
  },

  plugins: [],
}


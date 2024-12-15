/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
      screens: {
        'xs': '482px',
        'sm': '640px',
        'md': '768px',
        'lg': '1080px',
        'xl': '1280px',
        '2xl': '1440px',
      },
      extend: {
        fontFamily: {
          headerFont: ['Poppins'],
          bodyFont: ['Source Sans 3']
        },
        colors: {
          green: {
            '1' : '#A9BE97',
            '2' : '#7FE932',
            '3' : '#5ED012',
            '4' : '#367E0D'
          },
          blue: {
            '1' : '#7BA6BF',
            '2' : '#78DDFF',
            '3' : '#0092CF',
            '4' : '#084F6F'           
          }
        }
      },
    },
    plugins: [],
  }
  
  
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
        fontSize: {
          'h1': '48px',
          'h2': '36px',
          'h3': '20px',
          'b1': '18px',
          'b2': '16px',
          'b3': '14px',
          'b4': '12px'
        },
        colors: {
          silver: {
            '70' : '#B2B2B2'
          },
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
        },
        dropShadow: {
          'lg': '0 2px 3px rgba(127, 233, 50, 0.5)',
          'xl': '10px 10px 6px rgba(127, 233, 50, 0.3)',
        }
      },
    },
    plugins: [],
  }
  
  
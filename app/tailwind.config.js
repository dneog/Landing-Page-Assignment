/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      lineHeight: {
        'very-small': '85px',
        'mobile': '47px',
        
      },
      screens: {
        'twelve': '1200px',
        'one' : '1050px',
        'two' : '1027px',
        'three': '1090px',
        'up' : '764px',
      },
      backgroundImage: {
        'hero': "url('../public/bg.png')",
      },

    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '119': '26rem',
        '120': '28rem',
        '124': '30rem',
        '128': '32rem', // equivalent to 512px
        '130': '34rem',
        '144': '36rem', // equivalent to 576px
        '160': '40rem', // equivalent to 640px
        '176': '44rem', // equivalent to 704px
        '192': '48rem', // equivalent to 768px
        'full-screen': '100vh', // full viewport height
      },
      
      colors: {
        golden:"#977124",
        brandGreen:"#163029",
        gray: "#d1c9b4",
        gray1: "#302f2d",
        gray2: "#b0b3b8",
        gray3:"#a7a9ac",
        gray4: "#929496",
        gray5: "#ebebeb",
        lightgray:"#656661",
        offwhite: "#f0edea",
        primary: "#FFF0CC",
        brandYellow: "#FDC432",
        textColor: "#545454",
        adminPrimary: '#3c91e6',
        adminBlack: '#342e37',
        adminWhite: '#f9f9f9',
        adminGray: '#eeeeee',
        
      },
      height: {
        '119': '26rem',
        '120': '28rem',
        '124': '30rem',
        '128': '32rem', // equivalent to 512px
        '130': '34rem',
        '144': '36rem', // equivalent to 576px
        '160': '40rem', // equivalent to 640px
        '176': '44rem', // equivalent to 704px
        '192': '48rem', // equivalent to 768px
        '200': '50rem',
        'full-screen': '100vh', // full viewport height
      },
      
      fontFamily: {
        'Switzer-Light': ['Switzer-Light', 'sans-serif'],
        'Switzer-Medium': ['Switzer-Medium','sans-serif'],
        'Switzer-Regular': ['Switzer-Regular','sans-serif'],
        'Singolare-Layers': ['Singolare-Layers','sans-serif'],
      },

      fontSize: {
        'tiny': '0.7rem',
        'xs-plus': '0.8rem',
        'sm-plus': '0.95rem',
        '4.5xl': '3rem',
        '7xl-plus': '5.5rem',
      },

      fontWeight: {
        'extra-light': 200,
        'semi-bold': 600,
        'extra-bold': 800,
        'black': 900,
      },

      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 1s ease-out',
      },
    

    },
  },
  plugins: [],
}


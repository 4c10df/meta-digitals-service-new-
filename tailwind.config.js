/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': 'linear-gradient(3deg, rgba(22, 101, 52, 1), rgba(187, 247, 208, 0.505), rgba(255, 255, 255, 0))',
        'meta': 'rgb(187 185 185 / 69%)',
        
        
        
        
      },



      screens: {
        'smipx': '300px',
        // => @media (min-width: 640px) { ... }

        'ipx': '375px',
        // => @media (min-width: 640px) { ... }

        'ip8': '414px',
        // => @media (min-width: 640px) { ... }

        'ip8n': '400px',
        // => @media (min-width: 640px) { ... }

        'at500': '500px',
        // => @media (min-width: 640px) { ... }

        'at540': '540px',
        // => @media (min-width: 640px) { ... }

        'xlsm': '639px',
        // => @media (min-width: 640px) { ... }

        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'toy': '830px',
        // => @media (min-width: 1536px) { ... }

        'silver': '950px',
        // => @media (min-width: 1536px) { ... }
        
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        '3xl': '1536px',
        // => @media (min-width: 1536px) { ... }

        
      },

     


      animation: {
        fadeInLeft: 'fadeInLeft 1.5s ease-out ',
        fadeIn: 'fadeIn 1500ms ease 0ms',
        slides: 'slides 35s infinite linear ',
        slides2: 'slides 5s infinite alternate ',
        pulse: 'pulse 1s infinite ',
      },

      keyframes: {
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },

        slides: {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(-100%)',
          },
        },

        slides2: {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(-1080px)',
          },
        },

        pulse: {
          '0%' : {transform: 'scale(1)'},
          '50%' : {transform: 'scale(1.1)'},
          '100%' : {transform: 'scale(1)'},
        }

        
      },
      
      gridTemplateColumns: {
        'custom': '393px 393px',
        'custom2': '438px auto 1rem',
        'custom3': '264px auto 0rem',
        'custom4' : '223px auto 0rem',
      },

      
      




    }, 
  },
  plugins: [
    function ({ addUtilities }) {
        const newUtilities = {
            ".no-scrollbar::-webkit-scrollbar": {
                display: "none",
            },
            ".no-scrollbar": {
                "-ms-overflow-style": "none",
                "scrollbar-width": "none",
            },
        };
        addUtilities(newUtilities);
    },
],
}

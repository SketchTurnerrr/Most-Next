module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'hero-pattern': "url('/images/main-cover-2.jpg')",
      }),

      backgroundColor: (theme) => ({
        ...theme('colors'),
        almostWhite: '#fafafa',
        my_blue: '#E3F6F5',
      }),

      textColor: (theme) => theme('colors'),

      textColor: {
        my_blue: '#E3F6F5',
      },

      height: {
        xl: '800px',
        sm: '150px',
      },

      width: {
        md: '900px',
      },

      keyframes: {
        pulse: {
          '0%, 100%': {
            opacity: 0.2,
          },
          '50%': {
            opacity: 1,
          },
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};

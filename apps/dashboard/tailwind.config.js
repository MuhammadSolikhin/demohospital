/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  safelist: ['xl:', 'md:', 'sm:'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#333AD0',
          light: '#A2BEFF',
          dark: '#2B32A8',
          blue: '#3F4CEB'
        },
        secondary: {
          DEFAULT: '#F7F8F8',
          light: '#F1F3F3',
          semidark: '#F5F5F7',
          dark: '#707986'
        }
      },
      borderRadius: {
        primary: '10px',
      },
      padding: {
        primary: '10px',
      }
    },
  },
  plugins: [],
}


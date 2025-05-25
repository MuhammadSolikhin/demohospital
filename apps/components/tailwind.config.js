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
          semilight: '#E6ECFF',
          dark: '#2B32A8',
          blue: '#3F4CEB'
        },
        secondary: {
          DEFAULT: '#F7F8F8',
          light: '#F1F3F3',
          semidark: '#F5F5F7',
          dark: '#707986',
        },
        success: {
          DEFAULT: '#2F8F5A',
          light: '#C2E7D3'
        },
        warning: {
          DEFAULT: '#F48943',
          light: '#FAD3AD'
        },
        danger: {
          DEFAULT: '#FF6861',
          light: '#FFE8E7'
        },
        orange: {
          DEFAULT: '#FC8548',
          dark: '#FC6748'
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


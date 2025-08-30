/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'xl-2': '1.375rem',
      },
      colors: {
        // neutral colors
        neutral: {
          100: '#FDFDFD',
          200: '#F6F6F6',
          300: '#DDDDDD',
          400: '#C4C4C4',
          500: '#B3B3B3',
          550: '#B9BBBD',
          600: '#999999',
          700: '#8C8C8C',
          800: '#717171',
          900: '#4D4D4D',
          1000: '#212121',
          'gray-2': '#D7DCE0',
          'gray-3': '#ADB7C1',
          'gray-6': '#464255',
          'gray-7': '#1D242E',
          'gray-8': '#007bff',
          'gray-9': '#F3F8F8',
        },
        // primary
        primary: {
          100: '#EBF5F5',
          200: '#D1EBEB',
          300: '#B3D8D8',
          400: '#76C4C2',
          500: '#31A6A4',
          600: '#1A9C9A',
          700: '#007E7C',
          800: '#00605F',
          900: '#004343',
          1000: '#002929',
        },
      },
      fontFamily: {
        inter: 'Inter',
        poppins: 'Poppins',
        barlow: 'Barlow',
      },
    },
  },
  plugins: [],
};

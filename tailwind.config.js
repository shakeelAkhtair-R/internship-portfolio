/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#fefdfb',
          100: '#faf8f3',
          200: '#f4f1ea',
          300: '#ede8dc',
        },
        navy: {
          50: '#f0f3f8',
          100: '#d9e0ec',
          200: '#b3c1d9',
          300: '#8da1c6',
          400: '#5c77a3',
          500: '#3a5680',
          600: '#2a4066',
          700: '#1e3150',
          800: '#152540',
          900: '#0d1a31',
          950: '#070f1f',
        },
        gold: {
          50: '#fbf8ef',
          100: '#f5edd3',
          200: '#ebd9a5',
          300: '#dfc077',
          400: '#d4a84f',
          500: '#c69438',
          600: '#a8772c',
          700: '#855b25',
          800: '#6e4923',
          900: '#5d3e21',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.4s ease-out',
        'bar-grow': 'barGrow 1.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        barGrow: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--bar-width)' },
        },
      },
    },
  },
  plugins: [],
};

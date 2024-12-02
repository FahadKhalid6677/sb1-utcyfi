/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'gradient-shift-reverse': 'gradient-shift 8s ease infinite reverse',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(10px, 10px) rotate(1deg)' },
          '50%': { transform: 'translate(-5px, 5px) rotate(-1deg)' },
          '75%': { transform: 'translate(-10px, -10px) rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    'from-purple-900',
    'to-indigo-900',
    'from-blue-900',
    'to-purple-900',
    'from-pink-900',
    'to-purple-900',
    'from-indigo-900',
    'to-blue-900',
    'animate-gradient-shift',
    'animate-gradient-shift-reverse'
  ],
};
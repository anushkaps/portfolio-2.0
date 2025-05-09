/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: {
          primary: '#f080b2',
          light: '#F4BFD9',
          bright: '#FF8AC3',
          dark: '#8C4F6F',
          bg: '#febddb',
        },
        'mint-accent': 'var(--mint-accent)',
        'blue-accent': 'var(--blue-accent)',
        'purple-accent': 'var(--purple-accent)',
        'dark-contrast': 'var(--dark-contrast)'
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'float': 'float 3s ease-in-out infinite alternate',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'glow': '0 0 5px rgba(255, 138, 195, 0.5)',
      }
    },
  },
  plugins: [],
};
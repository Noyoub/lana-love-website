/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#FF6B6B',
        'brand-secondary': '#FFB6C1',
        'brand-accent': '#FF1493',
        'romantic-pink': '#FFE4E1',
        'romantic-red': '#FF69B4'
      },
      fontFamily: {
        'sans': ['Dancing Script', 'Inter', 'system-ui', 'sans-serif'],
        'romantic': ['Dancing Script', 'cursive']
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

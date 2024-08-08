/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'white': '#EEEEF0',
        'gray': '#B2B3BD',
        'violet': '#D29DFF',
        'bg-page': '#130F19',
        'bg-nav': 'rgba(17, 17, 19, 0.85)',
        'bg-card': '#1C1524',
        'bg-tech': '#747474',
        'border-colors': 'rgba(57, 58, 64, 0.50)',
        'shadow-nav': 'rgba(122, 63, 183, 0.10)',
        'green': '#37744E',
        'banner-purple': '#6D0094',
        'btn-purple': '#8E4EC6',
      },
      padding: {
        'marge': '5%'
      }
    },
  },
  plugins: [],
}
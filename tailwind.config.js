/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'custom-pulse': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      // Add more font families if needed
    },
  },
  plugins: [],
}


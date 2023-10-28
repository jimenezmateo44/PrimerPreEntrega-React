/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      'paytone': ['Paytone One', 'sans-serif'],
      'antonio': ['Antonio', 'sans-serif'],
    },
    },
  },
  plugins: [],
}


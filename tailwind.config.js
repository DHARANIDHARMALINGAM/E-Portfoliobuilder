/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsxS}"],
  darkMode:'class',
  theme: {
    extend: {},
    fontFamily: {
      heading: ["Poppins", "sans-serif"],
      body: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}


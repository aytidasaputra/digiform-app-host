/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'img-login': "url('./src/assets/images/svg/bg-login-digiform.svg')",
        'img-security': "url('./src/assets/images/svg/img-secure-login.svg')",
      },
      colors: {
        'blue-digi': '#3497FF',
        'orange-digi': 'rgb(255, 165, 0)'
      }
    },
  },
  plugins: [],
}

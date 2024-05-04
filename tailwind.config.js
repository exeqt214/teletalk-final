/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
      'monserat': ['Montserrat', 'sans-serif'],
      'eme' : ['Jacquard 12 Charted', 'system-ui']
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
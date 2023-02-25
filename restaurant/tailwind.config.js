/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
  ],
  theme: {
    extend: {
      colors: {
        'coumtai-green': '#253928',
        'coumtai-beige': '#dbc097',
        'white': '#FFFFFF',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

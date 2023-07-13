/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors:{
        'bg-nav':'rgb(77, 69, 93)',
        'bg-all': 'rgb(245, 233, 207)',
          customColor: 'rgb(84, 135, 200)',
          bgGreen : 'rgb(125, 185, 182)',
          bgLogin: 'rgb(17, 24, 39)'

      }
    },
  },
  plugins: [],
}

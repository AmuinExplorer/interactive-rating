/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/**/*.html"],
  theme: {
     screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: '1440px'
    },
    extend: {
      colors: {
        'Orange': 'hsl(25, 97%, 53%)',
        'LightGrey': 'hsl(217, 12%, 63%)',
        'MediumGrey': 'hsl(216, 12%, 54%)',
        'DarkBlue': 'hsl(213, 19%, 18%)',
        'VeryDarkBlue': 'hsl(216, 12%, 8%)',
        'White': 'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}
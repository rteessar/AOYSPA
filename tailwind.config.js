/** @type {import('tailwindcss').Config} */
module.exports = {
  // Every file that contains Tailwind class names. Classes that only appear
  // elsewhere will not end up in tailwind.css.
  content: ['./index.html', './script.js'],
  theme: {
    extend: {
      colors: {
        'brand-gray': '#f4f4f4',
        'brand-dark': '#333333',
        'brand-yellow': '#f1c50e',
        // Dark gold for small text on light backgrounds (the yellow itself is
        // too light to read as text: 1.7:1 contrast on white)
        'brand-gold': '#7a6200',
      },
    },
  },
  plugins: [],
};

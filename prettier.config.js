/** @type {import("prettier").Config} */
const config = {
  plugins: [require('prettier-plugin-tailwindcss')],
  singleQuote: true,
  arrowParens: 'avoid',
};

module.exports = config;

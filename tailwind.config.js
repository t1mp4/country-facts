/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'var(--ff-nunito-sans)', // Defined in root layout
    },
    fontWeight: {
      light: 300,
      normal: 400,
      semibold: 600,
      extrabold: 800,
    },
    colors: {
      text: {
        primary: 'var(--clr-text-primary)',
      },
      bg: {
        primary: 'var(--clr-bg-primary)',
        secondary: 'var(--clr-bg-secondary)',
      },
    },
    extend: {},
  },
  plugins: [],
};

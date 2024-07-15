/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './build/*.html'],
  theme: {
    extend: {
      colors: {
        'plt-primary': 'var(--main-dark)',
        'plt-secondary': 'var(--main-light)',
        'plt-accent': '#3b82f6',
      },
    },
  },
  plugins: [],
};

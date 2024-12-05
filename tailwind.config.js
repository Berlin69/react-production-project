/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './build/*.html'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        'plt-primary': 'var(--main-dark)',
        'plt-secondary': 'var(--main-light)',
        'plt-accent': '#3b82f6',
        'plt-white': '#ffffff',
        'plt-dark': 'var(--main-dark)',
        'plt-light': 'var(--main-light)'
      },
    },
  },
  plugins: [],
};

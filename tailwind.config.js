/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryone: '#903AFF',
        primarytwo: '#FE34B9',
        dark: '#150E28',
        purple: '#D434FE'
      }
    },
  },
  plugins: [],
}


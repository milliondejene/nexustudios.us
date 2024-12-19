/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        jersey: ['Jersey25Charted', 'sans-serif'], // 'jersey' is the font class name you'll use
      },
    },
  },
  darkMode: 'class', // Enable class-based dark mode
  plugins: [],
}

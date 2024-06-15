/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
 plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.mask-gradient': {
          maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
        },
      }

      addUtilities(newUtilities)
    }
  ],
}


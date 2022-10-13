/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'barlow': 'Barlow Regular',
        'barlow-cr': 'Barlow Condensed Bold',
        'barlow-cb': 'Barlow Condensed Regular',
        'bellefair': 'Bellefair Regular'
      },
      backgroundImage: {
        'home-desktop': 'url("./assets/home/background-home-desktop.jpg")',
        logo: 'url("./assets/shared/logo.svg")'
      },
      colors: {
        black: '#0B0D17',
        blue: '#D0D6F9'
      },
    },
  },
  plugins: [],
}
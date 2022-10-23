/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'barlow': 'Barlow Regular',
        'barlow-cb': 'Barlow Condensed Bold',
        'barlow-cr': 'Barlow Condensed Regular',
        'bellefair': 'Bellefair Regular'
      },
      backgroundImage: {
        'home-desktop': 'url("./assets/home/background-home-desktop.jpg")',
        'dest-desktop': 'url("./assets/destination/background-destination-desktop.jpg")',
        'crew-desktop': 'url("./assets/crew/background-crew-desktop.jpg")',
        'tech-desktop': 'url("./assets/technology/background-technology-desktop.jpg")',
        logo: 'url("./assets/shared/logo.svg")',
      },
      colors: {
        black: '#0B0D17',
        blue: '#D0D6F9'
      },
    },
  },
  plugins: [],
}
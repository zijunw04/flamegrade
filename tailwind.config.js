/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "UICRed": "#D50032",
        "UICBlue": "#001E62",
        "UICWhite": "#F2F7EB",
        "UICGray": "#333333",
        "ChicagoBlue": "#41B6E6",
        "ChampionGold": "#FFBF3F"
      },
    },
  },
  plugins: [],
}
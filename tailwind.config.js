/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  purge: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    colors: {
      mainBgChilledWhite: "#EDF3F8",
      primaryDarkPink: "#ba4270",
      primaryWaterWhite: "#fbfcfe",
      secondarySanJuanBlue: "#36536b",
      secondaryLightSanJuanBlue: "#6c8294",
      secondaryMirageBlue: "#1b262f",
      secondaryCharmPink: "#da6d97",
    },
    fontFamily: {
      dmDisplay: "DM Serif Display, serif",
      publicSans: "Public Sans, sans-serif",
    },
    extend: {
      gridTemplateColumns: {
        mobColumns: "24px repeat(10,1fr) 24px",
        tabColumns: "40px repeat(10,1fr) 40px",
        deskColumns: "165px repeat(10,1fr) 165px",
      },
      screens: {
        mob: "375px",
        tab: "680px",
        desk: "1150px",
      },
    },
  },
  plugins: [],
};

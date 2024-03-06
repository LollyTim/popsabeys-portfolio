/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        SatoshiBold: "Satoshi",
        SatoshiLight: "SatoshiLight",
      },
      colors: {
        light:
          "background: radial-gradient(71.64% 71.64% at 89.5% 19.75%, #64D3FE 0%, #589AF2 33.33%, #5483EE 66.67%, #484CE3 100%)",
      },
    },
  },

  plugins: [],
};

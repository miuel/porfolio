/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodoni: ["Bodoni Moda, serif"],
      },
      height: {
        "664": "41.5rem"
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};

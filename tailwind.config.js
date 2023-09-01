/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        haiti: "#0C1228",
        rhino: "#273250",
        sky: "#656E87",
        blue: "#515D88",
        manatee: "#848A9B",
        alto:"#D9D9D9",
        screamin:"#4DF85E"
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

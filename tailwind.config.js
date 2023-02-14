/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mid: "830px",
        xsm: "415px",
      },
    },
  },
  plugins: [],
};

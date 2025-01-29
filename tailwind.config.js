/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          default: "#4661e6",
          hover: "#7C91F9",
          light: "#62bcfa",
          dark: "#3a4374",
        },
        Purple: { default: "#AD1FEA", hover: "#C75AF6" },
        red: { default: "#D73737", hover: "#E98888" },
        orange: "#f49f85",
        gray: { default: "#647196", hover: "#656ea3", light: "#f7f8fd" },
        "off-white": "#f2f4ff",
      },
      keyframes: {
        transfer: {
          'from': { transform: 'translateX(100%)' },
          'to': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        transfer: 'transfer 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};

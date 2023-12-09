/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#dbd8c7",
        background: "#131311",
        primary: "#903e3c",
        secondary: "#90903c",
        accent: "#523c68",
      },
      colors2: {
        text: "#dbd8c7",
        background: "#131311",
        primary: "#050505",
        secondary: "#939389",
        accent: "#FFC8C7",
      },
    },
  },
  plugins: [],
};

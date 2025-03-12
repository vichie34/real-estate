/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#fff",
      secondary: "#53389E",
      black: "#101828",
      white: "#F9FAFB",
    },
    backgroundImage: {
      heroFrame: "url('/src/assets/heroFrame.png')",
    },
  },
  plugins: [],
};

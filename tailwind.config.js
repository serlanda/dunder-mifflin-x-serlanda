/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif']
      },
      animation: {
        "loop-scroll": "loop-scroll 160s linear infinite"
      },
      keyframes: {
        "loop-scroll": {
          from: {transform: "translateX(0)"},
          to: {transform: "translateX(-100%)"}
        }
      }
    },
  },
  plugins: [],
};

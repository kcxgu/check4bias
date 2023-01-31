/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      "guardianBlue": "#005689",
      "FT": "#F2DFCE",
      "red": "#ef4444",
      "orange": "#f97316",
      "pink": "#eb2563",
      "blue": "#3b82f6",
      "indigo": "#4C6AFD",
      "lightGrey": "#9ca3af",
      "GreyGoose": "#374151",
      "black": "#000000",
      "white": "#FFFFFF"
    },
    extend: {
      visibility: ['group-hover'],
    },
  },
  plugins: [],
}

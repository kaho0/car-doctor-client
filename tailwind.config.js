/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Lato"', "sans-serif"], // Modern and clean font for general use
        display: ['"Playfair Display"', "serif"], // Elegant font for headers
      },
    },
  },
  plugins: [require("daisyui")],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        brand: {
          blue: "#4A79FF"
        }
      },
      boxShadow: {
        card: "0 2px 12px rgba(0,0,0,0.06)"
      },
      borderRadius: {
        xl: "12px"
      }
    },
  },
  plugins: [],
}

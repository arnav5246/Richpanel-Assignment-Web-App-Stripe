/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          primaryBlue: "#1c4c94",
          primaryBlack: "#161616",
          primaryLightBlue: "#7994bc"
        
      }
    },
  },
  plugins: [],
}


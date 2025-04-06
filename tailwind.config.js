/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF5A3C",
        secondary: "#071C1F",
        accent: "#0066FF",
        light: "#F5F5F5",
        dark: "#071C1F",
      },
    },
  },
  plugins: [],
}

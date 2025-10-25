// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // CRITICAL: Tailwind must know where to look for used classes
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
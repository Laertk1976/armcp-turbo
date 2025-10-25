// postcss.config.cjs (Correct Way for newer versions)
module.exports = {
  plugins: {
    // 🛑 CHANGE THIS LINE: Use the new dedicated package
    "@tailwindcss/postcss": {}, 
    autoprefixer: {},
  },
}
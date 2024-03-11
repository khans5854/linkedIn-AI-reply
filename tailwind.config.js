/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./**/*.{ts,tsx}"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#3B82F6",
        "primary-dark": "#1a60d2",
        "primary-light": "#DBEAFE",
        paper: "#ffffff"
      }
    }
  }
}

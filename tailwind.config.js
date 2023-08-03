/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      textDark: "#f9fafb",
      textLight: "#030712",
      textSecond: "#71717a",
      bgDark: "#111827",
      hover: "#374151",
      contrast: "#047857",
    },
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      Primary: "#f9fafb",
      Secondary: "#4b5563",
      background: "#111827",
      hover: "#374151",
      contrast: "#047857"
    },
    extend: {},
  },
  plugins: [],
};

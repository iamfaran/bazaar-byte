/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A", // Deep blue for a bold base
        secondary: "#F97316", // Vibrant orange for accents
        background: "#0F172A", // Dark slate, less gray
        surface: "#1E293B", // Slightly lighter for cards or panels
        text: "#E2E8F0", // Soft off-white for contrast
        accent: "#22D3EE", // Cyan for pops of energy
      },
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"], // Modern, clean font
      },
      borderRadius: {
        xl: "1rem", // Softer corners
      },
      boxShadow: {
        glow: "0 0 15px rgba(34, 211, 238, 0.3)", // Subtle cyan glow
      },
    },
  },
  plugins: [],
};

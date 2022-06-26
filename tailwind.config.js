module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "medium-purple": {
          DEFAULT: "#916CE6",
          50: "#FFFFFF",
          100: "#F9F7FE",
          200: "#DFD5F8",
          300: "#C5B2F2",
          400: "#AB8FEC",
          500: "#916CE6",
          600: "#6D3CDE",
          700: "#5121C1",
          800: "#3D1991",
          900: "#291061",
        },
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "project-gallery-pattern": "url('/img/project_gallery_background.svg')",
      },
    },
  },
  plugins: [],
};

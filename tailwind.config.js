module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-heart": {
          DEFAULT: "#6941C6",
          50: "#D8CEF0",
          100: "#CCBFEC",
          200: "#B39FE2",
          300: "#9B80D9",
          400: "#8260CF",
          500: "#6941C6",
          600: "#51309F",
          700: "#3B2374",
          800: "#251649",
          900: "#0F091E",
        },
      },
      fontFamily: {
        display: ["Raleway", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
    },
  },
  plugins: [],
};

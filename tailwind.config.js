/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        siteBlue: "#0066FF",
      },
      keyframes: {
        slide: {
          "0%": {
            transform: "translateY(-600px)",
          },

          "100%": {
            transform: "translateY(80px)",
          },
        },
      },
      animation: {
        slide: "slide 2s ease",
      },
    },
  },
  plugins: [],
};

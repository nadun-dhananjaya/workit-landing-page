/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      screens: {
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        "dark-purple": "#24053E",
        eucaplyptus: "#44FFA1",
        "davys-grey": "#584D62",
        "ghost-white": "#FCF8FF",
        white: "#ffffff",
      },
      fontFamily: {
        fraunces: ['"Fraunces"', '"serif"'],
        manrope: ['"Manrope"', '"sans-serif"'],
      },
    },
  },
  plugins: [],
};

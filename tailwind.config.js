/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "0px",
      // => @media (min-width: 640px) { ... }
      sm: "600px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "992px",
      // => @media (min-width: 1024px) { ... }
      xl: "1200px",
      // => @media (min-width: 1024px) { ... }
      "2xl": "1280px",
      // => @media (min-width: 1280px) { ... }
      "3xl": "2000px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      primary: "#0089D5",
      "primary-soft": "#d3efff",
      secondary: "#FFD039",
      "secondary-soft": "#ffefb6",
      "secondary-darksoft": "#f5c62c",
      gray: "#c2c2c2",
      "gray-60": "#707070",
      "gray-70": "#4D4D4D",
      dark: "#29282b",
      darkTransparent: "rgba(23,23,23,0.98)",
      light: "#f2f2f2",
      red: "#E91010",
      "red-200": "#f8d6c9",
      "marine-dark": "#212A3B",
      "blue-light": "#cbe0f7",
      "blue-400": "#0088fa",
      "blue-500": "#0072CE",
      "gray-200": "#f2f2f2",
      "gray-300": "#C2C2C2",
      "yellow-300": "#ffe87b",
      "yellow-500": "#FFD923",
      "green-400": "#5CAC37",
      "green-200": "#a5d38f",
      "orange-200": "#fbd38d",
      "orange-600": "#c05621",
    },
    fontSize: {
      h1: ["32pt", "50pt"],
      h2: ["26pt", "40pt"],
      h3: ["22pt", "30pt"],
      h4: ["16pt", "25pt"],
      h5: ["13pt", "18pt"],
      h6: ["12pt", "20pt"],
      p: ["12pt", "20pt"],
      small: ["10pt", "10pt"],
      btn: ["15pt", "20pt"],
      btnsmall: ["10.5pt", "25pt"],
    },
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    extend: {
      fontFamily: {
        futura: ["Futura", "sans-serif"],
        avenir: ["Avenir", "sans-serif"],
      },
      spacing: {
        30: "7.2rem",
      },
      boxShadow: {
        playerShadow: "0 0 50px 10px rgba(23, 23, 23, 0.3)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

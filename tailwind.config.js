/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'xs': {'max': '600px'},
      // => @media (max-width: 600px) { ... }
      'sm': {'min': '600px'},
      // => @media (min-width: 600px) { ... }
      'md': {'min': '992px'},
      // => @media (min-width: 992px) { ... }
      'lg': {'min': '1280px'},
      // => @media (min-width: 1280px) { ... }
      "xl": {'min': '2000px'},
      // => @media (min-width: 2000px) { ... }
    },
    colors: {
      //Primary Colors
      solskinn: "#FFD039",
      paskeegg: "#FFEFB6",
      fred: "#FFFFFF",
      skumring: "#171717",
      //Secondary Colors - Bluetones
      bolge: "#0089D5",
      drape: "#00C9FF",
      krystall: "#D3EFFF",
      //Secondary Colors - Eatrhtones
      bark: "#C05621",
      gull: "#F5C62C",
      solnedgang: "#FBD38D",
      //Secondary Colors - Redtone
      rose: "#F5382C",
      //Helping Colors - Graytones
      mane: "#F2F2F2",
      stein: "#C2C2C2",
      metall: "#707070",
      kveld: "#4D4D4D",
      natt: "#000000",

      //Old
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
      // Overskrift 1
      'xsh1': ['18pt', {
        lineHeight: '2rem',
        letterSpacing: '0',
      }],
      'smh1': ['28pt', {
        lineHeight: '3rem',
        letterSpacing: '0',
      }],
      'xlh1': ['34pt', {
        lineHeight: '3.8rem',
        letterSpacing: '0',
      }],

      // Overskrift 2
      'xsh2': ['16.5pt', {
        lineHeight: '1.8rem',
        letterSpacing: '-0.01em',
      }],
      'smh2': ['23pt', {
        lineHeight: '2.5rem',
        letterSpacing: '-0.01em',
      }],
      'xlh2': ['30pt', {
        lineHeight: '3.2rem',
        letterSpacing: '-0.01em',
      }],

      // Overskrift 3
      'xsh3': ['14.5pt', {
        lineHeight: '1.6rem',
        letterSpacing: '-0.01em',
      }],
      'smh3': ['20pt', {
        lineHeight: '2.2rem',
        letterSpacing: '-0.01em',
      }],
      'xlh3': ['25pt', {
        lineHeight: '2.8rem',
        letterSpacing: '0.0em',
      }],

      // Overskrift 4
      'xsh4': ['13.5pt', {
        lineHeight: '1.9rem',
        letterSpacing: '0.01em',
      }],
      'smh4': ['18pt', {
        lineHeight: '2.5rem',
        letterSpacing: '0.01em',
      }],
      'xlh4': ['22pt', {
        lineHeight: '2.8rem',
        letterSpacing: '0.01em',
      }],

      // Overskrift 5
      'xsh5': ['12pt', {
        lineHeight: '1.4rem',
        letterSpacing: '0.01em',
      }],
      'smh5': ['15pt', {
        lineHeight: '1.6rem',
        letterSpacing: '0.01em',
      }],
      'xlh5': ['19pt', {
        lineHeight: '2rem',
        letterSpacing: '0.01em',
      }],

      // Overskrift 6
      'xsh6': ['11pt', {
        lineHeight: '1.3rem',
        letterSpacing: '0em',
      }],
      'smh6': ['13pt', {
        lineHeight: '1.45rem',
        letterSpacing: '0em',
      }],
      'xlh6': ['17pt', {
        lineHeight: '2.5rem',
        letterSpacing: '0em',
      }],

      // Paragrafer
      'xsp': ['11pt', {
        lineHeight: '1.8rem',
        letterSpacing: '-0.015em',
      }],
      'smp': ['13pt', {
        lineHeight: '2.1rem',
        letterSpacing: '0.01em',
      }],
      'xlp': ['13pt', {
        lineHeight: '2.1rem',
        letterSpacing: '0.01em',
      }],

      // Liten
      'xsliten': ['10pt', {
        lineHeight: '1.5rem',
        letterSpacing: '0.03em',
      }],
      'smliten': ['11pt', {
        lineHeight: '1.5rem',
        letterSpacing: '0.03em',
      }],
      'xlliten': ['11pt', {
        lineHeight: '1.5rem',
        letterSpacing: '0.03em',
      }],
      // Knapp
      'xsknapp': ['15pt', {
        lineHeight: '1',
        letterSpacing: '0rem',
      }],
      'smknapp': ['16pt', {
        lineHeight: '1',
        letterSpacing: '0rem',
      }],
      'xlknapp': ['16pt', {
        lineHeight: '1',
        letterSpacing: '0rem',
      }],
      // Knapp Liten
      'xsknappliten': ['11pt', {
        lineHeight: '1.2rem',
        letterSpacing: '0.01em',
      }],
      'smknappliten': ['12pt', {
        lineHeight: '1.2rem',
        letterSpacing: '0.01em',
      }],
      'xlknappliten': ['12pt', {
        lineHeight: '1.2rem',
        letterSpacing: '0.01em',
      }],
      //Old
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
      tynn: "100",
      harstra: "200",
      lett: "300",
      normal: "400",
      medium: "500",
      semifet: "600",
      fet: "700",
      ekstrafet: "800",
      feteste: "900",
    },
    extend: {
      fontFamily: {
        futura: ["Futura", "sans-serif"],
        avenir: ["Avenir", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

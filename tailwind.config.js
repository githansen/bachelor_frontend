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
      //PMC
      solskinn: "#FFD039",
      paskeegg: "#FFEFB6",
      fred: "#FFFFFF",
      skumring: "#171717",
      //SDC - Bluetones
      bolge: "#0089D5",
      drape: "#00C9FF",
      krystall: "#D3EFFF",
      //SDC - Eatrhtones
      bark: "#C05621",
      gull: "#F5C62C",
      solnedgang: "#FBD38D",
      //SDC - Redtone
      rose: "#F5382C",
      //HPC - Graytones
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
      'xsh1': ['20pt', {
        lineHeight: '3rem',
        letterSpacing: '-0.01em',
        fontWeight: '900',
      }],
      'mdh1': ['26pt', {
        lineHeight: '3rem',
        letterSpacing: '-0.01em',
        fontWeight: '900',
      }],
      'xlh1': ['30pt', {
        lineHeight: '3rem',
        letterSpacing: '-0.01em',
        fontWeight: '900',
      }],

      // Overskrift 2
      'xsh2': ['18pt', {
        lineHeight: '2.5rem',
        letterSpacing: '-0.01em',
        fontWeight: '900',
      }],
      'smh2': ['17pt', {
        lineHeight: '2.5rem',
        letterSpacing: '-0.01em',
        fontWeight: '900',
      }],
      'mdh2': ['23pt', {
        lineHeight: '2.5rem',
        letterSpacing: '-0.01em',
        fontWeight: '900',
      }],
      'lgh2': ['20pt', {
        lineHeight: '2.5rem',
        letterSpacing: '-0.01em',
        fontWeight: '900',
      }],
      'xlh2': ['25pt', {
        lineHeight: '2.5rem',
        letterSpacing: '-0.01em',
        fontWeight: '900',
      }],

      // Overskrift 3
      'xsh3': ['13pt', {
        lineHeight: '1.9rem',
        letterSpacing: '0.01em',
        fontWeight: '700',
      }],
      'smh3': ['15pt', {
        lineHeight: '2.5rem',
        letterSpacing: '-0.01em',
        fontWeight: '700',
      }],
      'mdh3': ['18pt', {
        lineHeight: '2.5rem',
        letterSpacing: '-0.01em',
        fontWeight: '700',
      }],
      'lgh3': ['18pt', {
        lineHeight: '2.5rem',
        letterSpacing: '-0.01em',
        fontWeight: '700',
      }],
      'xlh3': ['20pt', {
        lineHeight: '2.5rem',
        letterSpacing: '-0.01em',
        fontWeight: '700',
      }],

      // Overskrift 4
      'xsh4': ['13pt', {
        lineHeight: '1.9rem',
        letterSpacing: '0.01em',
        fontWeight: '400',
      }],
      'mdh4': ['14pt', {
        lineHeight: '1.9rem',
        letterSpacing: '0.01em',
        fontWeight: '400',
      }],

      // Overskrift 5
      'xsh5': ['13pt', {
        lineHeight: '1.9rem',
        letterSpacing: '0.01em',
        fontWeight: '400',
      }],
      'mdh5': ['15pt', {
        lineHeight: '1.5rem',
        letterSpacing: '0.01em',
        fontWeight: '400',
      }],
      'xlh5': ['15pt', {
        lineHeight: '1.5rem',
        letterSpacing: '0.01em',
        fontWeight: '400',
      }],

      // Overskrift 6

      // Paragrafer
      'xsp': ['10pt', {
        lineHeight: '1.9rem',
        letterSpacing: '0.01em',
        fontWeight: '400',
      }],
      'mdp': ['10pt', {
        lineHeight: '1.2rem',
        letterSpacing: '0.01em',
        fontWeight: '400',
      }],
      'lgp': ['12pt', {
        lineHeight: '1.9rem',
        letterSpacing: '0.01em',
        fontWeight: '400',
      }],
      'xlp': ['15pt', {
        lineHeight: '2.2rem',
        letterSpacing: '0.01em',
        fontWeight: '400',
      }],

      // Liten
      'xsliten': ['8pt', {
        lineHeight: '1.2rem',
        letterSpacing: '0.01em',
        fontWeight: '300',
      }],
      'mdliten': ['8pt', {
        lineHeight: '1.2rem',
        letterSpacing: '0.01em',
        fontWeight: '300',
      }],
      // Knapp Liten
      'xsknappliten': ['10.5pt', {
        lineHeight: '1.2rem',
        letterSpacing: '0.01em',
        fontWeight: '400',
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
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

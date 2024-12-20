import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        aurora: "aurora 60s linear infinite",
      },
      fontFamily: {
        manrope: "var(--font-manrope)",
        montserratAlt: "var(--font-montserrat-alt)",
        golosText: "var(--font-golos-text)",
        adineue: "var(--font-adineue)",
        neue: "var(--font-neue)",
      },

      backgroundImage: {
        stargrad: "linear-gradient(90deg, #DBB500 0%, #FFF299 100%)",
        bgGrad: "linear-gradient(180deg,#140931 50%,#4D0FE6 160.22%)",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          md: '2rem',
          lg: '3rem',
          xl: '4rem',
          '2xl': '8rem'
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1500px',
        },
      },
      colors: {
        card: "rgba(51, 65, 85, 0.2)",
        cardDark: "rgba(51, 65, 85, 0.4)",
        primary: "#4317FF",
        tpGreen: "#22c55e20",
        wcSlate: "#475569",
        wcSlate400: "#94A3B8",
        wcSlate700: "#334155",
        wcZinc700: "#3F3F46",
        wcBorder: "#334155",
        wcOrange: "#FF8500",
        wcRed: "#F0493E"

      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [
    addVariablesForColors,
    require("tailwindcss-animate"),
    // function ({ addComponents, theme }: any) {
    //   addComponents({
    //     '.container': {
    //       maxWidth: '100%',
    //       '@screen sm': { maxWidth: '640px' },
    //       '@screen md': { maxWidth: '768px' },
    //       '@screen lg': { maxWidth: '1024px' },
    //       '@screen xl': { maxWidth: '1280px' },
    //       '@screen 2xl': { maxWidth: '1440px' }, // Set the container to 1440px at 2xl
    //     },
    //   });
    // },
  ],
};
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
export default config;

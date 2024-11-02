import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
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
      },
      fontFamily: {
        manrope: "var(--font-manrope)",
        montserratAlt: "var(--font-montserrat-alt)",
        golosText: "var(--font-golos-text)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainblack: "var(--mainblack)",
      },
      backgroundImage: {
        "gradient-bg": "url('/assets/bg.png')",
        stargrad: "linear-gradient(90deg, #DBB500 0%, #FFF299 100%)",
        bgGrad: "linear-gradient(180deg,#140931 50%,#4D0FE6 160.22%)",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
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

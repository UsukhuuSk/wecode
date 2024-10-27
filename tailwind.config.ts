import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: "var(--font-manrope)",
        montserratAlt: "var(--font-montserrat-alt)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainblack: "var(--mainblack)",
      },
      backgroundImage: {
        "gradient-bg": "url('/assets/bg.png')",
        stargrad: "linear-gradient(90deg, #DBB500 0%, #FFF299 100%);",
      },
    },
  },
  plugins: [],
};
export default config;

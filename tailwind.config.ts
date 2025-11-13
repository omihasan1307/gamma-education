/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        basicColor: "#1C498E",
        secondaryColor: "#2C318D",
        grayColor: "#F7F8FA",
        customColor1: "#1C498E",
        customColor2: "#2C318D",
        customColor3: "#F8D5C1",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-custom": "linear-gradient(112deg, rgb(28,73,142) 50%, rgb(44,49,141) 100%)",
        "gradient-custom-light": "linear-gradient(90deg, rgba(223,246,255,1) 0%, rgba(250,251,255,1) 48%, rgba(243,240,255,1) 100%)",
        "gradient-custom-dark": "linear-gradient(90deg, #001524 0%,#0b0b0b 48%, #11001c 100%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;

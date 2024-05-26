import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "theme-yellow": {
          600: "#FEDB5A",
          500: "#FFF5DE",
          400: "#FFEBDE",
        },
        "theme-red": {
          600: "#FE5A5A",
          500: "#FFDEDE",
        },
      },
    },
  },
  plugins: [],
};
export default config;

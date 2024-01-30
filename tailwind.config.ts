import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "very-light-grayish-blue": "hsl(240,78%,98%)",
        "light-Grayish-Blue": "hsl(234,14%,74%)",
        "grayish-Blue": "hsl(233,13%,49%)",
        "dark-Grayish-Blue": "hsl(232, 13%, 33%)"
      }
    },
  },
  plugins: [],
};
export default config;
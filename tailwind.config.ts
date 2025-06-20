import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#F6F6F6",
        blue: '#052B47',
        "blue-white": '#D6EDFF',
        "blue-cyan": '#0E7178',
        "black-grey": '#1E1E1E',
      },
    },
  },
  plugins: [],
};

export default config;
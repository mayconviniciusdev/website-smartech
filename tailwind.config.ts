import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': "#F6F6F6",
        'blue': '#052B47',
        'blue-white': '#D6EDFF',
        'blue-cyan': '#0E7178',
        'black-grey': '#1E1E1E',
      },
    },
  },
  plugins: [],
} satisfies Config;

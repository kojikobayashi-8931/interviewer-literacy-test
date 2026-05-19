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
        main: "#2C3E50",
        accent: "#2D8B92",
        "accent-light": "#A8D8DC",
        text: "#4A4A4A",
        base: "#FFFFFF",
        surface: "#F7F9FA",
        border: "#E2E8ED",
        correct: "#27AE60",
        incorrect: "#E74C3C",
      },
      fontFamily: {
        display: ["Noto Sans JP", "sans-serif"],
        body: ["Noto Sans JP", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

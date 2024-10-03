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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      gridTemplateColumns: {
        "auto-1fr": "auto 1fr",
        "1fr-auto": "1fr auto",
      },
      keyframes: {
        slideInSlow: {
          "0%": { left: "100%" },
          "100%": { left: "0%" },
        },
      },
      animation: {
        slideInSlow: "slideInSlow 60s linear",
      },
    },
  },
  plugins: [],
};
export default config;

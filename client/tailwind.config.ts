import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["var(--font-Josefin)"],
      },
      colors: {
        secondary: "#0da5b5",
        tertiary: "#1e293b",
      },
    },
  },
  plugins: [],
};
export default config;

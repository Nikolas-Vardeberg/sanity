import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "7rem",
        "2xl": "8rem",
      }
    },
    extend: {
    backgroundImage: {},
     colors: {
      primary: {
        "50": "#f6fee7",
        "100": "#eafccb",
        "200": "#d7f99d",
        "300": "#bef264",
        "400": "#a5e635",
        "500": "#89cc16",
        "600": "#6ca30d",
        "700": "#547c0f",
        "800": "#456212",
        "900": "#3c5314",
        "950": "#1f2e05",
      },
      secondary: {
        "50": "#ecfdf9",
        "100": "#d1faf0",
        "200": "#a7f3el",
        "300": "#6ee7ca",
        "400": "#34d3ad",
        "500": "#10b991",
        "600": "#059673",
        "700": "#04785c",
        "800": "#065f4a",
        "900": "#064e3d",
        "950": "#022c22",
      },
    },
  },
  },
  plugins: [],
};
export default config;

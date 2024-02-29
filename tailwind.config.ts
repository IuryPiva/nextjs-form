import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "almost-black": "#201E1C",
        "fresh-orange": "#FA7921",
        "olive-green": "#465832",
        "warm-mid-gray": "#F0EDE5",
        "warm-light-gray": "#F7F3EE",
        "almost-white": "#FAF8F5",
        error: "#FF4141",
        "disabled-gray": "#CCCCCC",
        "gray-shade": "rgb(0, 0, 0, 0.2)",
        "figma-canvas-black": "#444444",
      },
      fontFamily: {
        sans: ["Switzer", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        shrine: {
          cream: "#FBF3E1",
          paper: "#FFFBF2",
          gold: "#C9A227",
          goldLight: "#E8C766",
          red: "#7A1128",
          redDark: "#4E0B1A",
          ink: "#2A1B12",
        },
      },
      fontFamily: {
        thai: [
          "'Leelawadee UI'",
          "'Noto Sans Thai'",
          "'Sarabun'",
          "Tahoma",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "Georgia",
          "'Times New Roman'",
          "'Leelawadee UI'",
          "serif",
        ],
      },
      backgroundImage: {
        "mandala": "radial-gradient(circle at center, rgba(201,162,39,0.15) 0%, rgba(201,162,39,0) 70%)",
      },
    },
  },
  plugins: [],
};
export default config;

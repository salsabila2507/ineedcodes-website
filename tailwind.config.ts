import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { ink: "#090b0b", panel: "#111414", line: "#252a28", purple: "#c27ad1", mist: "#a8b0ab" },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        mono: ["SFMono-Regular", "Consolas", "Liberation Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;

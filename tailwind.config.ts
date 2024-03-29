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
        "background": "var(--background)",
        "tile": "var(--tile)",
        "tileShadow": "var(--tileShadow)",
        "tileBlue": "var(--tileBlue)",
        "tileRed": "var(--tileRed)",
        "tileYellow": "var(--tileYellow)",
        "tileGreen": "var(--tileGreen)",
        "tilePurple": "var(--tilePurple)",
      },
      fontFamily: {
        defaultFont: "var(--font-inter)",
        decorFont: "var(--font-itim)"
      }
    },
  },
  plugins: [],
};
export default config;

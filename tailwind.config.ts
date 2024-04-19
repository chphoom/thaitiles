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
        inter: "var(--font-inter)",
        itim: "var(--font-itim)"
      },
      boxShadow: {
        ghostTile: '5px 0px 0px var(--tileBlue), inset -6px 0px 0px #f9d695',
      },
      fontSize: {
        '2xs': ['0.625rem', '0.875rem'],
        '3xs': ['0.469rem', '0.75rem'],
      },
      width: {
        '18.5': '4.625rem',
      }
    },
  },
  plugins: [],
};
export default config;

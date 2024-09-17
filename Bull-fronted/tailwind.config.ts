import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#9ECCF6",
        foreground: "var(--foreground)",
      },
      backgroundImage:{
        'menu':"url(../public/background-menu.png)",
        'home':"url(../public/background-home.png)",
        'dialog':"url(../public/background-dialog.png)",
        'play':"url(../public/background-play.png)",

        'common':"url(../public/background-common.png)",
      },
      height:{
        'playbox':'620px',
      }
    },
  },
  plugins: [],
};
export default config;

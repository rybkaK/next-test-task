import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#050315",
        background: "#fbfbfe",
        primary: "#27ce34",
        secondary: "#362d31",
        accent: "#06692f",
      },
    },
  },
  plugins: [],
} satisfies Config;

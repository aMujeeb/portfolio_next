import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'font-salsa' will now point to your Google Font variable
        salsa: ["var(--font-salsa)"],
        // 'font-sans' will use Geist
        sans: ["var(--font-geist-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;               
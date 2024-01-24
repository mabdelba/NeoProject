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
      fontFamily:{
        Montserrat : ['Montserrat', 'sans-serif'],
        Poppins : ['Poppins', 'sans-serif']
      },
      colors:{
        pallette: {yellow: '#DDFE02', indigo: '#632B8D', pink: '#9a1163'}
      }
    },
  },
  plugins: [],
};
export default config;

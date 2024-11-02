import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		boxShadow: {
  			custom: '2px 4px 30px rgba(0, 0, 0, 1)'
  		},
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  	}
  },
  plugins: [],
};
export default config;

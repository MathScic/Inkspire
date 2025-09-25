import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // si ton projet utilise /src (c’est ton cas) :
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: {
        ink: {
          black: "#0D0D0D",
          gold: "#C49B63",
          gray: "#737373",
          light: "#F5F5F4",
        },
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: { xl: "0.75rem", "2xl": "1rem" },
      boxShadow: { subtle: "0 4px 6px rgba(0,0,0,0.1)" },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2))",
      },
    },
  },
  plugins: [],
};
export default config;

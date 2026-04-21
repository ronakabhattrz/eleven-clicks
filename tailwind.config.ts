import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        brand: {
          blue: "#4F8EF7",
          purple: "#8B5CF6",
          cyan: "#06B6D4",
          dark: "#050510",
          card: "#0D0D1A",
          border: "#1A1A2E",
        },
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #4F8EF7 0%, #8B5CF6 50%, #06B6D4 100%)",
        "gradient-dark": "linear-gradient(135deg, #050510 0%, #0D0D1A 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          from: { boxShadow: "0 0 20px rgba(79, 142, 247, 0.3)" },
          to: { boxShadow: "0 0 40px rgba(139, 92, 246, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

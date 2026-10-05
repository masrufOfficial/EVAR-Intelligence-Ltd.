import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        evar: {
          dark: "#05070f",
          darker: "#030408",
          card: "rgba(15, 23, 42, 0.75)",
          border: "rgba(148, 163, 184, 0.12)",
          pink: "#d926aa",
          magenta: "#ec4899",
          violet: "#8b5cf6",
          blue: "#2563eb",
          cyan: "#06b6d4",
          orange: "#f97316",
          emerald: "#10b981",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "evar-gradient": "linear-gradient(135deg, #2563eb 0%, #d926aa 50%, #f97316 100%)",
        "evar-gradient-subtle": "linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(217,38,170,0.15) 50%, rgba(249,115,22,0.15) 100%)",
        "hero-glow": "radial-gradient(circle at 50% 30%, rgba(139, 92, 246, 0.25) 0%, rgba(6, 182, 212, 0.15) 40%, rgba(5, 7, 15, 0) 70%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulseGlow 4s ease-in-out infinite",
        scan: "scanline 8s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;

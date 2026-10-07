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
        background: "var(--stage-bg)",
        foreground: "var(--ink)",
        muted: "var(--muted)",
        border: "var(--border)",
        evar: {
          petrol: "#00212b",
          dark: "#00212b",
          darker: "#00161e",
          surface: "#002a36",
          surfaceLight: "#003444",
          card: "var(--card-bg)",
          border: "var(--border)",
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
        "evar-gradient": "linear-gradient(135deg, #06b6d4 0%, #3b82f6 30%, #d926aa 70%, #f97316 100%)",
        "evar-gradient-subtle": "linear-gradient(135deg, rgba(6,182,212,0.15) 0%, rgba(217,38,170,0.15) 50%, rgba(249,115,22,0.15) 100%)",
        "hero-glow": "radial-gradient(circle at 50% 30%, rgba(6, 182, 212, 0.22) 0%, rgba(217, 38, 170, 0.12) 40%, rgba(0, 33, 43, 0) 70%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.9" },
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

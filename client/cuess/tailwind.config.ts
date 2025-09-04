import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/components/**/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    container: { center: true, padding: "2rem", screens: { "2xl": "1280px" } },
    extend: {
      colors: {
        background: "#F9FAFB",
        foreground: "#1C1C1E",
        brand: {
          DEFAULT: "#0066FF",
          600: "#0053CC",
          700: "#003F99",
          blue: "#1E63FF", // electric blue
          mint: "#8AF2C8",
          ink: "#0E1320",
        },
        accent: { DEFAULT: "#00E6A8", lime: "#A3FF12" },
        muted: "#E5E7EB",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(1200px 600px at 10% 0%, rgba(138,242,200,.35), rgba(30,99,255,.12) 40%, transparent 70%)",
        "card-sheen":
          "radial-gradient(1200px 800px at 90% -10%, rgba(30,99,255,.08), transparent 60%)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        softpulse: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(30,99,255,.35)" },
          "50%": { boxShadow: "0 0 0 12px rgba(30,99,255,0)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        softpulse: "softpulse 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
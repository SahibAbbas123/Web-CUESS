import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "2rem", screens: { "2xl": "1280px" } },
    extend: {
      colors: {
        background: "#F9FAFB",
        foreground: "#1C1C1E",
        brand: { DEFAULT: "#0066FF", 600:"#0053CC", 700:"#003F99" },
        accent: { DEFAULT: "#00E6A8", lime:"#A3FF12" },
        muted: "#E5E7EB",
      },
      backdropBlur: { glass: "12px" },
      borderRadius: { xl: "1rem", "2xl": "1.5rem" },
      boxShadow: {
        glass: "0 10px 30px rgba(0,0,0,0.08)",
        card: "0 8px 20px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
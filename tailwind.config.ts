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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        border: "hsl(var(--border))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        gold: {
          DEFAULT: "hsl(var(--gold))",
          dim: "hsl(var(--gold-dim))",
        },
        wine: "hsl(var(--wine))",
        sand: "hsl(var(--sand))",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        arabic: ["var(--font-arabic)", "sans-serif"],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
      },
      boxShadow: {
        glow: "0 0 60px -15px hsl(var(--gold) / 0.45)",
        "glow-wine": "0 0 50px -12px hsl(var(--wine) / 0.55)",
        lift: "0 30px 80px -40px rgba(0, 0, 0, 0.85)",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(ellipse at 50% 0%, hsl(var(--gold) / 0.2), transparent 55%)",
        "mesh-gold":
          "radial-gradient(at 20% 30%, hsl(var(--gold) / 0.12), transparent 50%), radial-gradient(at 80% 20%, hsl(var(--wine) / 0.12), transparent 45%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;

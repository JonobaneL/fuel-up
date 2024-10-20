import containerQueries from "@tailwindcss/container-queries";
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  mode: "jit",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      sm: "641px",
      md: "769px",
      lg: "1025px",
      xl: "1280px",
    },
    container: {
      center: true,
      padding: "2rem",
    },
    fontFamily: {
      title: ["Russo One", "sans-serif"],
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "#C55D17",
        secondary: "#E6E5E5",
        back: "#FFFEFF",
        third: "#443F3B",
        text: "#1A0B1D",
        "light-gray": "#666666",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      boxShadow: {
        "header-shadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
        "product-cart": "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
        "nav-shadow": " -3px 0px 3px rgba(0,0,0,0.2);",
      },
      flex: {
        cover: "1 0 auto",
        fix: "0 0 auto",
      },
      maxWidth: {
        "screen-width": "1440px",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate, containerQueries],
} satisfies Config;

export default config;

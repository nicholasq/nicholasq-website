import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        primary: "var(--color1)",
        secondary: "var(--color2)",
        tertiary: "var(--color3)",
        quaternary: "var(--color4)",
        quinary: "var(--color5)",
        senary: "var(--color6)",
        septenary: "var(--color7)"
      },
      fontFamily: {
        ezread: ["Space Grotesk"]
      }
    }
  },

  plugins: []
} satisfies Config;

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Neon-marquee palette. "void"/"velvet" = dark mode surfaces,
        // "cream"/"paper" = light mode surfaces. Accents stay constant
        // across both themes so the brand reads the same either way.
        void: "#0A0A0F",
        velvet: "#141420",
        "velvet-light": "#1D1D2E",
        cream: "#FAF6EF",
        paper: "#EEF0EC",
        ink: "#14181F",
        mist: "#8A8FA3",
        "mist-light": "#6C7186",
        neon: {
          DEFAULT: "#3ED1F2",
          dim: "#2AA8C4",
        },
        ember: {
          DEFAULT: "#E8483C",
          dim: "#B8352B",
        },
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "film-strip":
          "repeating-linear-gradient(90deg, currentColor 0 6px, transparent 6px 18px)",
      },
      boxShadow: {
        neon: "0 0 24px 0 rgba(62, 209, 242, 0.4)",
      },
      keyframes: {
        neonGlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        neonGlow: "neonGlow 2.4s ease-in-out infinite",
        riseIn: "riseIn 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

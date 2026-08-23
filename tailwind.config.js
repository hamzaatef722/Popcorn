/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Neon-marquee palette. "void"/"velvet" = dark mode surfaces,
        // "cream"/"paper" = light mode surfaces.
        //
        // `neon` and `mist` are theme-aware: their RGB channels come from
        // CSS custom properties (defined in index.css) that swap value
        // between :root (light mode) and .dark (dark mode), so every
        // existing text-neon/bg-neon/text-mist/border-mist/40 class in the
        // app automatically gets a light-mode-legible shade instead of the
        // dark-mode-tuned one. `mist-light` and `neon-dim` stay fixed,
        // bright values for content that's always on a dark surface
        // regardless of site theme (e.g. the `.reel-stage` scope).
        void: "#0A0A0F",
        velvet: "#141420",
        "velvet-light": "#1D1D2E",
        cream: "#FAF6EF",
        paper: "#EEF0EC",
        ink: "#14181F",
        mist: {
          DEFAULT: "rgb(var(--mist) / <alpha-value>)",
          light: "#8A8FA3",
        },
        neon: {
          DEFAULT: "rgb(var(--neon) / <alpha-value>)",
          dim: "rgb(var(--neon-dim) / <alpha-value>)",
        },
        ember: {
          DEFAULT: "#E8483C",
          dim: "#B8352B",
        },
      },
      fontFamily: {
        display: ["Unbounded", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "film-strip":
          "repeating-linear-gradient(90deg, currentColor 0 6px, transparent 6px 18px)",
      },
      boxShadow: {
        neon: "0 0 24px 0 rgb(var(--neon) / 0.4)",
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
        posterDrift: {
          "0%, 100%": { transform: "scale(1.08) translateY(0)" },
          "50%": { transform: "scale(1.16) translateY(-12px)" },
        },
      },
      animation: {
        neonGlow: "neonGlow 2.4s ease-in-out infinite",
        riseIn: "riseIn 0.5s ease-out both",
        posterDrift: "posterDrift 34s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiPlay, FiBookmark } from "react-icons/fi";
import PosterCollage from "./PosterCollage";
import MarqueeLights from "./MarqueeLights";

function Hero({ posters }) {
  const shouldReduceMotion = useReducedMotion();

  // Shared entrance transition — collapses to an instant fade when the
  // person has requested reduced motion, instead of skipping animation
  // handling entirely.
  const rise = (delay = 0) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: shouldReduceMotion ? 0.2 : 0.6, delay: shouldReduceMotion ? 0 : delay },
  });

  return (
    // reel-stage + a fixed dark gradient: the poster wall, marquee bulbs and
    // neon glow are a "dark cinema lobby" moment by design, so the Hero
    // keeps that look even when the rest of the site is in light mode,
    // instead of the neon/posters washing out against a cream backdrop.
    <section className="reel-stage relative overflow-hidden h-[91dvh] bg-gradient-to-b from-velvet via-void to-void px-6 pb-16 pt-20 text-cream md:pt-28">
      {/* Poster wall — real cinema content standing in for the old flat glow */}
      <PosterCollage posters={posters} />

      {/* Ambient neon glow, kept subtle so the poster wall reads first */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-neon/10 blur-2xl motion-safe:animate-neonGlow"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div {...rise(0)} className="mb-4 flex flex-col items-center gap-2">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon">Now showing</p>
          <MarqueeLights />
        </motion.div>

        <motion.h1
          {...rise(0.1)}
          className="text-balance text-4xl font-semibold leading-tight md:text-6xl"
        >
          Every movie you watch,
          <br />
          <span className="text-neon">worth remembering.</span>
        </motion.h1>

        <motion.p
          {...rise(0.2)}
          className="text-pretty mx-auto mt-5 max-w-xl text-base text-mist md:text-lg"
        >
          Popcorn is where your watchlist lives. Search movies and shows, save what you want to
          watch next, and rate what you&rsquo;ve already seen — all kept right here, no account
          needed.
        </motion.p>

        <motion.div
          {...rise(0.3)}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Link to="/browse" className="btn-neon">
            <FiPlay size={16} aria-hidden="true" /> Start browsing
          </Link>
          <Link to="/profile" className="btn-ghost">
            <FiBookmark size={16} aria-hidden="true" /> My watchlist
          </Link>
        </motion.div>
      </div>

      <div aria-hidden="true" className="film-divider text-neon" />
    </section>
  );
}

export default Hero;

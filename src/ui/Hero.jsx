import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiPlay, FiBookmark } from "react-icons/fi";

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-20 md:pt-28">
      {/* Ambient neon glow behind the hero copy */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-neon/20 blur-3xl animate-neonGlow"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-neon"
        >
          Now showing
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-semibold leading-tight md:text-6xl"
        >
          Every movie you watch,
          <br />
          <span className="text-neon">worth remembering.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-xl text-base text-mist md:text-lg"
        >
          Popcorn is where your watchlist lives. Search movies and shows,
          save what you want to watch next, and rate what you've already
          seen — all kept right here, no account needed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Link to="/browse" className="btn-neon">
            <FiPlay size={16} /> Start browsing
          </Link>
          <Link to="/profile" className="btn-ghost">
            <FiBookmark size={16} /> My watchlist
          </Link>
        </motion.div>
      </div>

      <div className="film-divider text-neon" />
    </section>
  );
}

export default Hero;

import { FiFilm } from "react-icons/fi";

function Footer() {
  return (
    <footer className="mt-20 border-t border-mist/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center">
        <div className="flex items-center gap-2 font-display text-lg font-semibold">
          <FiFilm className="text-neon" />
          Popcorn
        </div>
        <p className="max-w-md text-sm text-mist">
          Track what you watch, build your watchlist, and rate every title —
          your personal reel, kept in one place.
        </p>
        <p className="font-mono text-xs text-mist/70">
          Data by TMDB · Built for learning, not affiliated with TMDB
        </p>
      </div>
    </footer>
  );
}

export default Footer;

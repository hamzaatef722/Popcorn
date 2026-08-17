import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FiFilm } from "react-icons/fi";
import SearchBar from "../features/search/SearchBar";
import ThemeToggle from "../features/theme/ThemeToggle";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/browse", label: "Browse" },
  { to: "/profile", label: "Profile" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-mist/10 bg-cream/80 backdrop-blur-md dark:bg-void/80">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-4">
        <NavLink to="/" className="flex shrink-0 items-center gap-2 font-display text-xl font-semibold">
          <motion.span
            initial={{ rotate: -8 }}
            animate={{ rotate: 8 }}
            transition={{ duration: 1.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            className="text-neon"
          >
            <FiFilm size={22} />
          </motion.span>
          Popcorn
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? "bg-neon/15 text-neon" : "text-current hover:text-neon"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <div className="hidden sm:block">
            <SearchBar compact />
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile nav */}
      <nav className="flex items-center justify-around border-t border-mist/10 py-2 md:hidden">
        {links.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `text-xs font-medium transition-colors ${isActive ? "text-neon" : "text-mist"}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;

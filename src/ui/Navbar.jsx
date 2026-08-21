import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FiFilm, FiHome, FiCompass, FiStar, FiUser } from "react-icons/fi";
import ThemeToggle from "../features/theme/ThemeToggle";

const links = [
  { to: "/", label: "Home", icon: FiHome, end: true },
  { to: "/browse", label: "Browse", icon: FiCompass },
  { to: "/top-rated/movie", label: "Top Rated", icon: FiStar },
  { to: "/profile", label: "Profile", icon: FiUser },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-mist/10 bg-cream/80 backdrop-blur-md dark:bg-void/80">
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-3 py-4">
        <NavLink
          to="/"
          className="flex shrink-0 items-center gap-2 font-display text-xl font-semibold"
        >
          <motion.span
            initial={{ rotate: -8 }}
            animate={{ rotate: 8 }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="text-neon"
          >
            <FiFilm size={22} />
          </motion.span>
          Popcorn
        </NavLink>

        <div className="ml-auto flex items-center gap-3">
          <nav className="hidden items-center gap-1 md:flex">
            {links.map(({ to, label, icon: Icon, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "bg-neon/15 text-neon" : "text-current hover:text-neon"
                  }`
                }
              >
                <Icon size={15} />
                {label}
              </NavLink>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile nav */}
      <nav className="flex items-center justify-around border-t border-mist/10 py-4 md:hidden">
        {links.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 text-sm font-medium transition-colors ${
                isActive ? "text-neon" : "text-mist"
              }`
            }
          >
            <Icon size={17} />
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;

import { useDispatch, useSelector } from "react-redux";
import { FiSun, FiMoon } from "react-icons/fi";
import { toggleTheme, selectTheme } from "./themeSlice";

function ThemeToggle() {
  const dispatch = useDispatch();
  const mode = useSelector(selectTheme);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-mist/30 text-current transition-colors hover:border-neon hover:text-neon"
    >
      {mode === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
    </button>
  );
}

export default ThemeToggle;

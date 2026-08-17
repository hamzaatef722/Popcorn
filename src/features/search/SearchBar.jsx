import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

function SearchBar({ initialValue = "", compact = false }) {
  const [query, setQuery] = useState(initialValue);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-sm">
      <FiSearch
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-mist"
        size={16}
      />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies & shows…"
        aria-label="Search movies and shows"
        className={`w-full rounded-full border border-mist/30 bg-transparent py-2 pl-9 pr-4 text-sm outline-none transition-colors placeholder:text-mist focus:border-neon ${
          compact ? "py-1.5" : "py-2"
        }`}
      />
    </form>
  );
}

export default SearchBar;

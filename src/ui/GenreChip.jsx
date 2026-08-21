import { NavLink } from "react-router-dom";

function GenreChip({ id, name }) {
  return (
    <NavLink
      to={`/browse/${id}`}
      className={({ isActive }) =>
        `whitespace-nowrap rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
          isActive
            ? "border-neon bg-neon text-void"
            : "border-mist/30 text-current hover:border-neon hover:text-neon"
        }`
      }
    >
      {name}
    </NavLink>
  );
}

export default GenreChip;

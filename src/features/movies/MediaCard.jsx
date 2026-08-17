import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiStar, FiBookmark, FiCheck } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWatchlist,
  removeFromWatchlist,
  selectIsInWatchlist,
} from "../watchlist/watchlistSlice";
import { selectIsWatched } from "../watched/watchedSlice";

function MediaCard({ item }) {
  const dispatch = useDispatch();
  const inWatchlist = useSelector(selectIsInWatchlist(item.id));
  const isWatched = useSelector(selectIsWatched(item.id));

  function handleWatchlistToggle(e) {
    e.preventDefault();
    if (inWatchlist) {
      dispatch(removeFromWatchlist(item.id));
    } else {
      dispatch(
        addToWatchlist({
          id: item.id,
          mediaType: item.media_type,
          title: item.title,
          poster: item.poster_path,
          year: item.year,
        }),
      );
    }
  }

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="ticket-card group w-40 shrink-0 md:w-48"
    >
      <Link to={`/title/${item.media_type}/${item.id}`} className="block">
        <div className="relative aspect-[2/3] w-full overflow-hidden bg-velvet">
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-velvet-light to-velvet text-center font-display text-sm text-mist">
            {item.title}
          </div>

          {/* Overlay on hover */}
          <div className="absolute  inset-0 flex flex-col justify-between bg-void/0 p-3 opacity-0 transition-all duration-300 group-hover:bg-void/60 group-hover:opacity-100">
            <div className="flex justify-end">
              <button
                onClick={handleWatchlistToggle}
                aria-label={inWatchlist ? "Remove from watchlist" : "Add to watchlist"}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-void/70 text-cream transition-colors hover:text-red-500"
              >
                <FiBookmark size={14} className={inWatchlist ? "fill-red-500 text-red-500" : ""} />
              </button>
            </div>
            <img src={`${item.poster_path}`} />
            {isWatched && (
              <span className="flex items-center gap-1 self-start rounded-full bg-neon px-2 py-1 font-mono text-[10px] font-semibold text-void">
                <FiCheck size={11} /> Watched
              </span>
            )}
          </div>

          {/* Rating badge, ticket-stub style */}
          <div className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-void/80 px-2 py-1 font-mono text-[11px] text-yellow-400">
            <FiStar size={11} className="fill-yellow-400" />
            {item.tmdbRating?.toFixed(1)}
          </div>
        </div>

        <div className="p-2.5">
          <h3 className="truncate font-body text-sm font-semibold">{item.title}</h3>
          <p className="font-mono text-xs text-mist">
            {item.year} · {item.mediaType === "tv" ? "Series" : "Film"}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export default MediaCard;

import { Link } from "react-router-dom";
import { FiCheck } from "react-icons/fi";
import StarRating from "../../ui/StarRating";
import { getPosterUrl } from "../../utils/tmdbHelpers";

function WatchedItem({ item }) {
  const posterUrl = getPosterUrl(item.poster_path, "w200");

  return (
    <Link to={`/title/${item.media_type}/${item.id}`} className="block">
      <div className="history-card mb-3">
        {posterUrl ? (
          <img
            src={posterUrl}
            alt={item.title}
            loading="lazy"
            className="h-24 w-16 shrink-0 rounded-md object-cover"
          />
        ) : (
          <div className="flex h-24 w-16 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-velvet-light to-velvet">
            <FiCheck className="text-cream/40" size={18} aria-hidden="true" />
          </div>
        )}

        <div className="min-w-0 flex-1">
          <h3 className="truncate font-body font-semibold">{item.title}</h3>
          <p className="mt-0.5 flex items-center justify-center gap-1.5 font-mono text-xs text-mist sm:justify-start">
            {item.year}
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1 text-neon">
              <FiCheck size={11} aria-hidden="true" /> Watched
            </span>
          </p>
        </div>

        <div className="history-card__rating">
          <StarRating value={item.userRating} readOnly size={15} />
        </div>
      </div>
    </Link>
  );
}

export default WatchedItem;

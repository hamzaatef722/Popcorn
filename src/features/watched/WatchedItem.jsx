import { Link } from "react-router-dom";
import StarRating from "../../ui/StarRating";
import { getPosterUrl } from "../../utils/tmdbHelpers";

function WatchedItem({ item }) {
  const posterUrl = getPosterUrl(item.poster_path, "w200");

  return (
    <Link to={`/title/${item.media_type}/${item.id}`} className="block">
      <div className="flex flex-col text-center sm:text-left sm:flex-row items-center gap-2 rounded-xl bg-velvet-light/40 p-4">
        {posterUrl ? (
          <img
            src={posterUrl}
            alt={item.title}
            loading="lazy"
            className="h-20 w-14 shrink-0 rounded-md object-cover"
          />
        ) : (
          <div className="h-20 w-14 shrink-0 rounded-md bg-gradient-to-br from-velvet-light to-velvet" />
        )}
        <div className="flex-1">
          <h3 className="font-semibold">{item.title}</h3>
          <p className="font-mono text-xs text-mist">{item.year}</p>
        </div>
        <StarRating value={item.userRating} readOnly size={14} />
      </div>
    </Link>
  );
}

export default WatchedItem;

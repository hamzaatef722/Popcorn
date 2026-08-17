import StarRating from "../../ui/StarRating";
import { Link } from "react-router-dom";

function WatchedItem({ item }) {
  return (
    <Link to={`/title/${item.mediaType}/${item.id}`} className="block">
      <div className="flex items-center gap-4 rounded-xl bg-velvet-light/40 p-4">
        <div className="h-20 w-14 shrink-0 rounded-md bg-gradient-to-br from-velvet-light to-velvet" />
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

import { useState } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiBookmark, FiCheck, FiArrowLeft, FiClock, FiStar } from "react-icons/fi";
import { IoCheckmarkDone } from "react-icons/io5";
import Loader from "../ui/Loader";
import StarRating from "../ui/StarRating";
import { getDetails } from "../services/tmdbApi";
import { getPosterUrl, getDisplayTitle, getReleaseYear } from "../utils/tmdbHelpers";
import {
  addToWatchlist,
  removeFromWatchlist,
  selectIsInWatchlist,
} from "../features/watchlist/watchlistSlice";
import { addToWatched, removeFromWatched, selectIsWatched } from "../features/watched/watchedSlice";

function DetailsPage() {
  const navigate = useNavigate();
  // Route is defined as "/title/:media_type/:id" in App.jsx, so the param
  // key here has to match "media_type" exactly, not "mediaType".
  const item = useLoaderData();
  console.log(item);
  // const { media_type, id } = useParams();
  // const [item, setItem] = useState(null);
  // const [notFound, setNotFound] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const dispatch = useDispatch();

  const inWatchlist = useSelector(selectIsInWatchlist(item.id));
  const isWatched = useSelector(selectIsWatched(item.id));

  // useEffect(() => {
  //   setItem(null);
  //   setNotFound(false);
  //   getDetails(media_type, id).then((data) => {
  //     if (!data) setNotFound(true);
  //     else setItem(data);
  //   });
  // }, [media_type, id]);

  const title = item ? getDisplayTitle(item) : "";
  const year = item ? getReleaseYear(item) : "";
  const posterUrl = item ? getPosterUrl(item.poster_path) : null;
  // Movies use "runtime" (minutes), TV shows use "number_of_seasons".
  const seasons = item?.media_type === "tv" ? item.number_of_seasons : null;

  function handleWatchlistToggle() {
    if (inWatchlist) {
      dispatch(removeFromWatchlist(item.id));
    } else {
      dispatch(
        addToWatchlist({
          id: item.id,
          media_type: item.media_type,
          title,
          poster_path: item.poster_path,
          year,
        }),
      );
    }
  }

  function handleMarkWatched() {
    if (isWatched) {
      dispatch(removeFromWatched(item.id));
    } else {
      dispatch(
        addToWatched({
          id: item.id,
          media_type: item.media_type,
          title,
          poster_path: item.poster_path,
          year,
          runtime: item.runtime,
          vote_average: item.vote_average,
          userRating,
        }),
      );
    }
  }

  if (!item) return <Loader />;

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center gap-2 text-sm text-mist hover:text-neon"
      >
        <FiArrowLeft size={14} /> Back
      </button>

      <div className="grid gap-8 md:grid-cols-[240px_1fr]">
        <div className="aspect-[2/3] w-full overflow-hidden rounded-xl bg-gradient-to-br from-velvet-light to-velvet">
          {posterUrl ? (
            <img src={posterUrl} alt={title} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full items-center justify-center px-4 text-center font-display text-mist">
              {title}
            </div>
          )}
        </div>

        <div>
          <h1 className="font-display text-3xl font-semibold md:text-4xl">{title}</h1>

          <div className="mt-3 flex flex-wrap items-center gap-4 font-mono text-sm text-mist">
            <span>{year}</span>
            {item.runtime && (
              <span className="flex items-center gap-1">
                <FiClock size={13} /> {item.runtime} min
              </span>
            )}
            {seasons && <span>{seasons} seasons</span>}
            <span className="flex items-center gap-1 text-yellow-300">
              <FiStar size={13} className="fill-yellow-400" /> {item.vote_average?.toFixed(1)}
            </span>
          </div>

          <p className="mt-5 leading-relaxed text-current/90">{item.overview}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={handleWatchlistToggle}
              className={inWatchlist ? "btn-neon" : "btn-ghost"}
            >
              <FiBookmark size={16} />
              {inWatchlist ? "In watchlist" : "Add to watchlist"}
            </button>

            {isWatched ? (
              <button onClick={handleMarkWatched}>
                <span className="flex items-center gap-1 rounded-full bg-neon/15 px-4 py-2.5 text-sm font-semibold text-neon">
                  <FiCheck size={16} /> Watched
                </span>
              </button>
            ) : (
              <button onClick={handleMarkWatched} className="flex items-center gap-1 btn-neon">
                <IoCheckmarkDone /> save as watched
              </button>
            )}
          </div>

          <div className="film-divider text-neon" />

          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-mist">
              Rate it {isWatched ? "again" : "and mark as watched"}
            </p>
            <div className="flex items-center gap-4">
              <StarRating value={userRating} onChange={setUserRating} />
              <button
                onClick={handleMarkWatched}
                disabled={!userRating}
                className="btn-ghost disabled:opacity-40"
              >
                Save rating
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const item = await getDetails(params.media_type, params.id);
  return item;
}

export default DetailsPage;

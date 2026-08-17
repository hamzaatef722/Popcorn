import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiBookmark, FiCheck, FiArrowLeft, FiClock, FiStar } from "react-icons/fi";
import { IoCheckmarkDone } from "react-icons/io5";
import Loader from "../ui/Loader";
import ErrorMessage from "../ui/ErrorMessage";
import StarRating from "../ui/StarRating";
import { getDetails } from "../services/tmdbApi";
import {
  addToWatchlist,
  removeFromWatchlist,
  selectIsInWatchlist,
} from "../features/watchlist/watchlistSlice";
import { addToWatched, selectIsWatched } from "../features/watched/watchedSlice";

function DetailsPage() {
  const navigate = useNavigate();
  const { mediaType, id } = useParams();
  const [item, setItem] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const dispatch = useDispatch();

  const inWatchlist = useSelector(selectIsInWatchlist(id));
  const isWatched = useSelector(selectIsWatched(id));

  useEffect(() => {
    setItem(null);
    setNotFound(false);
    getDetails(mediaType, id).then((data) => {
      if (!data) setNotFound(true);
      else setItem(data);
    });
  }, [mediaType, id]);

  function handleWatchlistToggle() {
    if (inWatchlist) {
      dispatch(removeFromWatchlist(id));
    } else {
      dispatch(
        addToWatchlist({
          id: item.id,
          mediaType: item.mediaType,
          title: item.title,
          poster: item.poster,
          year: item.year,
        }),
      );
    }
  }

  function handleMarkWatched() {
    dispatch(
      addToWatched({
        id: item.id,
        mediaType: item.mediaType,
        title: item.title,
        poster: item.poster,
        year: item.year,
        runtime: item.runtime,
        tmdbRating: item.tmdbRating,
        userRating,
      }),
    );
  }

  if (notFound) return <ErrorMessage message="This title doesn't exist." />;
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
          <div className="flex h-full items-center justify-center px-4 text-center font-display text-mist">
            {item.title}
          </div>
        </div>

        <div>
          <h1 className="font-display text-3xl font-semibold md:text-4xl">{item.title}</h1>

          <div className="mt-3 flex flex-wrap items-center gap-4 font-mono text-sm text-mist">
            <span>{item.year}</span>
            {item.runtime && (
              <span className="flex items-center gap-1">
                <FiClock size={13} /> {item.runtime} min
              </span>
            )}
            {item.seasons && <span>{item.seasons} seasons</span>}
            <span className="flex items-center gap-1 text-yellow-300">
              <FiStar size={13} className="fill-yellow-400" /> {item.tmdbRating?.toFixed(1)}
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
              <span className="flex items-center gap-1 rounded-full bg-neon/15 px-4 py-2.5 text-sm font-semibold text-neon">
                <FiCheck size={16} /> Watched
              </span>
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

export default DetailsPage;

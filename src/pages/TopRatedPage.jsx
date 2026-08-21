import { NavLink, useLoaderData, useNavigation } from "react-router-dom";
import { FiStar, FiFilm, FiTv } from "react-icons/fi";
import MediaGrid from "../features/movies/MediaGrid";
import Loader from "../ui/Loader";
import { getTopRated } from "../services/tmdbApi";

const TABS = [
  { mediaType: "movie", label: "Movies", icon: FiFilm },
  { mediaType: "tv", label: "TV Shows", icon: FiTv },
];

function TopRatedPage() {
  const { items, mediaType } = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="mb-2 flex items-center gap-2 font-display text-3xl font-semibold">
        <FiStar /> Top Rated
      </h1>
      <p className="mb-6 text-sm text-mist">The highest-rated titles, according to TMDB.</p>

      <div className="mb-8 flex gap-1 border-b border-mist/15">
        {TABS.map(({ mediaType: tabType, label, icon: Icon }) => (
          <NavLink
            key={tabType}
            to={`/top-rated/${tabType}`}
            className={() =>
              `relative flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                mediaType === tabType ? "text-neon" : "text-mist hover:text-current"
              }`
            }
          >
            <Icon size={15} />
            {label}
          </NavLink>
        ))}
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <MediaGrid items={items} emptyMessage="No top rated titles found." />
      )}
    </div>
  );
}

export async function loader({ params }) {
  const mediaType = params.mediaType === "tv" ? "tv" : "movie";
  const items = await getTopRated(mediaType);
  return { items, mediaType };
}

export default TopRatedPage;

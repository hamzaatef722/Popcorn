import { useSelector } from "react-redux";
import { selectWatchlist } from "../features/watchlist/watchlistSlice";
import { selectWatched } from "../features/watched/watchedSlice";
import ProfileTabs from "../ui/ProfileTabs";
import WatchList from "../features/watchlist/WatchList";
import Watched from "../features/watched/Watched";
import { useParams } from "react-router-dom";

function ProfilePage() {
  const { id } = useParams();
  console.log(id);
  const activeTab = id ? id : "watchlist";
  const watchlist = useSelector(selectWatchlist);
  const watched = useSelector(selectWatched);

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="mb-1 font-display text-3xl font-semibold">Profile</h1>
      <p className="mb-8 text-sm text-mist">Everything you've saved and watched, in one place.</p>

      <ProfileTabs activeTab={activeTab} />

      {activeTab === "watchlist" ? (
        <WatchList watchlist={watchlist} />
      ) : (
        <div className="space-y-6">
          {watched.length === 0 ? (
            <p className="py-10 text-center font-mono text-sm text-mist">
              Nothing marked as watched yet.
            </p>
          ) : (
            <Watched watched={watched} />
          )}
        </div>
      )}
    </div>
  );
}

export default ProfilePage;

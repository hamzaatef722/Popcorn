import { useEffect, useState } from "react";
import Hero from "../ui/Hero";
import MediaRow from "../features/movies/MediaRow";
import Loader from "../ui/Loader";
import { getTrending } from "../services/tmdbApi";

function Home() {
  const [movies, setMovies] = useState(null);
  const [shows, setShows] = useState(null);

  useEffect(() => {
    getTrending("movie").then(setMovies);
    getTrending("tv").then(setShows);
  }, []);

  return (
    <div>
      <Hero />

      {!movies || !shows ? (
        <Loader />
      ) : (
        <>
          <MediaRow title="Trending Movies" items={movies} />
          <MediaRow title="Trending Shows" items={shows} />
        </>
      )}
    </div>
  );
}

export default Home;

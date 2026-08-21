import Hero from "../ui/Hero";
import MediaRow from "../features/movies/MediaRow";
import Loader from "../ui/Loader";
import { getTrending } from "../services/tmdbApi";
import { useLoaderData } from "react-router-dom";

function Home() {
  // const [movies, setMovies] = useState(null);
  // const [shows, setShows] = useState(null);
  const { trendMovies, trendShows } = useLoaderData();

  // useEffect(() => {
  //   getTrending("movie").then(setMovies);
  //   getTrending("tv").then(setShows);
  // }, []);

  return (
    <div>
      <Hero
        posters={trendMovies.map((m) => ({
          id: m.id,
          posterPath: `https://image.tmdb.org/t/p/w342${m.poster_path}`,
          title: m.title,
        }))}
      />
      {!trendMovies || !trendShows ? (
        <Loader />
      ) : (
        <>
          <MediaRow title="Trending Movies" items={trendMovies} />
          <MediaRow title="Trending Shows" items={trendShows} />
        </>
      )}
    </div>
  );
}

export async function loader() {
  const trendMovies = await getTrending("movie");
  const trendShows = await getTrending("tv");
  return { trendMovies, trendShows };
}

export default Home;

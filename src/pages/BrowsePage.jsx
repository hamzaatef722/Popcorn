import { useLoaderData, useParams } from "react-router-dom";
import GenreChip from "../ui/GenreChip";
import MediaGrid from "../features/movies/MediaGrid";
import Loader from "../ui/Loader";
import { getGenres, getByGenre, getTrending } from "../services/tmdbApi";

function BrowsePage() {
  const { genreId } = useParams();
  const { genres, items } = useLoaderData();

  // const [genres, setGenres] = useState([]);
  // const [items, setItems] = useState(null);

  // useEffect(() => {
  //   getGenres().then(setGenres);
  //   // console.log(genres);
  // }, []);

  // useEffect(() => {
  //   setItems(null);
  //   if (genreId) {
  //     getByGenre(Number(genreId)).then(setItems);
  //     // console.log(items);
  //   } else {
  //     getTrending("movie").then(setItems);
  //   }
  // }, [genreId]);

  const activeGenreName = genres.find((g) => String(g.id) === genreId)?.name;

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="mb-2 font-display text-3xl font-semibold">Browse</h1>
      <p className="mb-6 text-sm text-mist">
        {activeGenreName
          ? `Titles in ${activeGenreName}`
          : "Explore everything, or filter by genre."}
      </p>

      <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
        {genres.map((genre) => (
          <GenreChip key={genre.id} id={genre.id} name={genre.name} />
        ))}
      </div>

      {items === null ? (
        <Loader />
      ) : (
        <MediaGrid items={items} emptyMessage="No titles in this genre yet." />
      )}
    </div>
  );

  // 1- we need to getGenres
}

export async function loader({ params }) {
  const [genres, items] = await Promise.all([
    getGenres(),
    params.genreId ? getByGenre(Number(params.genreId)) : getTrending("movie"),
  ]);

  return { genres, items };
}

export default BrowsePage;

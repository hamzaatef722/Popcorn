import { useLoaderData } from "react-router-dom";
import SearchBar from "../features/search/SearchBar";
import MediaGrid from "../features/movies/MediaGrid";
import Loader from "../ui/Loader";
import { searchMedia } from "../services/tmdbApi";

function SearchPage() {
  const { results, query } = useLoaderData();

  // const [searchParams] = useSearchParams();
  // const query = searchParams.get("q") || "";
  // const [results, setResults] = useState(null);

  // useEffect(() => {
  //   if (!query) {
  //     setResults([]);
  //     return;
  //   }
  //   setResults(null);
  //   searchMedia(query).then(setResults);
  // }, [query]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="mb-2 font-display text-3xl font-semibold">Search</h1>
      <p className="mb-6 text-sm text-mist">Find movies and shows by title.</p>

      <div className="mb-8 sm:hidden">
        <SearchBar initialValue={query} />
      </div>

      {query && (
        <p className="mb-6 font-mono text-xs uppercase tracking-widest text-mist">
          Results for "{query}"
        </p>
      )}

      {results === null ? (
        <Loader />
      ) : (
        <MediaGrid
          items={results}
          emptyMessage={
            query ? "No matches. Try a different title." : "Search for something to see results."
          }
        />
      )}
    </div>
  );
}

export async function loader({ request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") || "";
  const results = query ? await searchMedia(query) : [];
  return { results, query };
}

export default SearchPage;

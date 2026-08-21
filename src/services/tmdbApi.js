// TMDB API service layer.
//
// Every function here calls the real TMDB endpoints and returns data in
// TMDB's own shape (id, media_type, poster_path, backdrop_path, genre_ids,
// vote_average, title/name, release_date/first_air_date, ...). Components
// read that shape through the helpers in "../utils/tmdbHelpers" so the same
// field names are used everywhere instead of every screen inventing its own.
//
// Get a free TMDB API key at https://www.themoviedb.org/settings/api
// and store it in a .env file as VITE_TMDB_API_KEY (see .env.example).

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "f9f46da4fb985f0d08a36476cd4d2b80";

function buildUrl(path, params = {}) {
  const url = new URL(`${BASE_URL}${path}`);
  url.searchParams.set("api_key", API_KEY);
  Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));
  return url.toString();
}

// /trending/{media_type}/week already sends "media_type" back on every
// result, so nothing extra needs to be attached here.
export async function getTrending(mediaType = "movie") {
  const res = await fetch(buildUrl(`/trending/${mediaType}/week`));

  if (!res.ok) {
    throw new Error("Failed to fetch trending media");
  }

  const data = await res.json();

  return data.results;
}

// /search/multi also returns "person" results (actors, directors...) mixed
// in with movies/tv, so we filter those out — this app only shows titles.
export async function searchMedia(query) {
  const res = await fetch(buildUrl("/search/multi", { query }));

  if (!res.ok) {
    throw new Error("Failed to search media");
  }

  const data = await res.json();

  return data.results.filter((item) => item.media_type === "movie" || item.media_type === "tv");
}

// /movie/{id} and /tv/{id} don't send "media_type" back (we're the ones who
// know it, from the route), so we attach it ourselves for consistency with
// every other list in the app.
export async function getDetails(mediaType, id) {
  const res = await fetch(buildUrl(`/${mediaType}/${id}`));

  if (!res.ok) {
    throw new Error("Failed to fetch details");
  }

  const data = await res.json();

  return { ...data, media_type: mediaType };
}

// /discover/{media_type} doesn't send "media_type" back either, same fix.
export async function getByGenre(genreId, mediaType = "movie") {
  const res = await fetch(buildUrl(`/discover/${mediaType}`, { with_genres: genreId }));

  if (!res.ok) {
    throw new Error("Failed to fetch by genre");
  }

  const data = await res.json();

  return data.results.map((item) => ({ ...item, media_type: mediaType }));
}

export async function getGenres(mediaType = "movie") {
  const res = await fetch(buildUrl(`/genre/${mediaType}/list`));

  if (!res.ok) {
    throw new Error("Failed to fetch genres");
  }

  const data = await res.json();

  return data.genres;
}

export async function getTopRated(mediaType = "movie") {
  const pages = [1, 2, 3, 4, 5];

  const responses = await Promise.all(
    pages.map((page) =>
      fetch(buildUrl(`/${mediaType}/top_rated`, { page })).then((res) => {
        if (!res.ok) throw new Error("Failed to fetch top rated media");
        return res.json();
      }),
    ),
  );

  const results = responses.flatMap((data) => data.results);

  return results
    .slice(0, 100)
    .map((item) => ({ ...item, media_type: item.media_type || mediaType }));
}

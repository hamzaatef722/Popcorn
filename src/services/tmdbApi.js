// TMDB API service layer.
//
// This is a static/stub version: every function below is already shaped the
// way it should be called from components (same params, same return shape),
// but returns local mock data instead of hitting the real API. Swap the
// body of each function for a real `fetch` call when you're ready to wire
// up live data — the components using these won't need to change.
//
// Get a free TMDB API key at https://www.themoviedb.org/settings/api
// and store it in a .env file as VITE_TMDB_API_KEY.

import { MOCK_TRENDING_MOVIES, MOCK_TRENDING_TV, MOCK_GENRES } from "./mockData";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// eslint-disable-next-line no-unused-vars
function buildUrl(path, params = {}) {
  const url = new URL(`${BASE_URL}${path}`);
  url.searchParams.set("api_key", API_KEY);
  Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));
  return url.toString();
}

export async function getTrending(mediaType = "movie") {
  // TODO: return fetch(buildUrl(`/trending/${mediaType}/week`)).then(r => r.json())
  return mediaType === "tv" ? MOCK_TRENDING_TV : MOCK_TRENDING_MOVIES;
}

export async function searchMedia(query) {
  // TODO: return fetch(buildUrl("/search/multi", { query })).then(r => r.json())
  const all = [...MOCK_TRENDING_MOVIES, ...MOCK_TRENDING_TV];
  return all.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()),
  );
}

export async function getDetails(mediaType, id) {
  // TODO: return fetch(buildUrl(`/${mediaType}/${id}`)).then(r => r.json())
  const all = [...MOCK_TRENDING_MOVIES, ...MOCK_TRENDING_TV];
  return all.find((item) => String(item.id) === String(id));
}

export async function getByGenre(genreId) {
  // TODO: return fetch(buildUrl("/discover/movie", { with_genres: genreId })).then(r => r.json())
  const all = [...MOCK_TRENDING_MOVIES, ...MOCK_TRENDING_TV];
  return all.filter((item) => item.genreIds?.includes(genreId));
}

export async function getGenres() {
  // TODO: return fetch(buildUrl("/genre/movie/list")).then(r => r.json())
  return MOCK_GENRES;
}

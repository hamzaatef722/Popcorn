// Small helpers for reading data straight from TMDB's real response shape.
// Movies and TV shows don't use the same field names in TMDB (title vs name,
// release_date vs first_air_date), so every component reads through these
// instead of guessing which field applies.

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

// TMDB serves images as a base URL + size + the path it gives you
// (e.g. poster_path: "/rb94rKVIzLyfWufIN7WqLvadBDH.jpg").
export function getPosterUrl(posterPath, size = "w500") {
  if (!posterPath) return null;
  return `${IMAGE_BASE_URL}/${size}${posterPath}`;
}

export function getBackdropUrl(backdropPath, size = "w1280") {
  if (!backdropPath) return null;
  return `${IMAGE_BASE_URL}/${size}${backdropPath}`;
}

// Movies use "title", TV shows use "name".
export function getDisplayTitle(item) {
  return item?.title || item?.name || "";
}

// Movies use "release_date", TV shows use "first_air_date".
export function getReleaseYear(item) {
  const date = item?.release_date || item?.first_air_date;
  return date ? date.slice(0, 4) : "";
}

// Static placeholder data, shaped like TMDB responses, so every component
// can be built against realistic data now and swapped for live fetches later.

export const MOCK_GENRES = [
  { id: 28, name: "Action" },
  { id: 35, name: "Comedy" },
  { id: 18, name: "Drama" },
  { id: 27, name: "Horror" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Sci-Fi" },
  { id: 53, name: "Thriller" },
  { id: 16, name: "Animation" },
];

export const MOCK_TRENDING_MOVIES = [
  {
    id: "m1",
    mediaType: "movie",
    title: "Midnight Reel",
    year: 2025,
    runtime: 118,
    tmdbRating: 8.2,
    poster: "https://image.tmdb.org/t/p/w500/placeholder1.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/placeholder1-bg.jpg",
    overview:
      "A washed-up projectionist discovers a reel of film that predicts the future — one frame at a time.",
    genreIds: [878, 53],
  },
  {
    id: "m2",
    mediaType: "movie",
    title: "Marquee Lights",
    year: 2024,
    runtime: 104,
    tmdbRating: 7.6,
    poster: "https://image.tmdb.org/t/p/w500/placeholder2.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/placeholder2-bg.jpg",
    overview:
      "Two rival cinema owners on the same street fall for each other during a citywide blackout.",
    genreIds: [10749, 35],
  },
  {
    id: "m3",
    mediaType: "movie",
    title: "Static & Silence",
    year: 2025,
    runtime: 131,
    tmdbRating: 8.9,
    poster: "https://image.tmdb.org/t/p/w500/placeholder3.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/placeholder3-bg.jpg",
    overview:
      "After a signal jams every screen on Earth, a small crew of engineers race to find the source.",
    genreIds: [878, 18],
  },
  {
    id: "m4",
    mediaType: "movie",
    title: "The Last Matinee",
    year: 2023,
    runtime: 96,
    tmdbRating: 6.9,
    poster: "https://image.tmdb.org/t/p/w500/placeholder4.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/placeholder4-bg.jpg",
    overview:
      "A small-town theater screens its final film ever — and every regular has a secret to settle first.",
    genreIds: [18, 27],
  },
  {
    id: "m5",
    mediaType: "movie",
    title: "Reel to Reel",
    year: 2025,
    runtime: 109,
    tmdbRating: 7.1,
    poster: "https://image.tmdb.org/t/p/w500/placeholder5.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/placeholder5-bg.jpg",
    overview:
      "A heist crew must steal a film print before its only screening disappears forever.",
    genreIds: [28, 53],
  },
  {
    id: "m6",
    mediaType: "movie",
    title: "Popcorn Ceiling",
    year: 2024,
    runtime: 88,
    tmdbRating: 6.4,
    poster: "https://image.tmdb.org/t/p/w500/placeholder6.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/placeholder6-bg.jpg",
    overview:
      "A haunted apartment complex only reveals its secrets during the end credits.",
    genreIds: [27],
  },
];

export const MOCK_TRENDING_TV = [
  {
    id: "t1",
    mediaType: "tv",
    title: "Frame Rate",
    year: 2025,
    seasons: 2,
    tmdbRating: 8.5,
    poster: "https://image.tmdb.org/t/p/w500/placeholder7.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/placeholder7-bg.jpg",
    overview:
      "A detective who can only see thirty seconds into the future hunts a killer who knows it.",
    genreIds: [53, 878],
  },
  {
    id: "t2",
    mediaType: "tv",
    title: "Drive-In",
    year: 2023,
    seasons: 3,
    tmdbRating: 7.8,
    poster: "https://image.tmdb.org/t/p/w500/placeholder8.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/placeholder8-bg.jpg",
    overview:
      "Four friends running a struggling drive-in theater accidentally become town legends.",
    genreIds: [35, 18],
  },
  {
    id: "t3",
    mediaType: "tv",
    title: "Second Screening",
    year: 2025,
    seasons: 1,
    tmdbRating: 8.0,
    poster: "https://image.tmdb.org/t/p/w500/placeholder9.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/placeholder9-bg.jpg",
    overview:
      "An anthology series told entirely through the eyes of people sitting in the back row.",
    genreIds: [18, 16],
  },
  {
    id: "t4",
    mediaType: "tv",
    title: "Green Room",
    year: 2024,
    seasons: 2,
    tmdbRating: 7.3,
    poster: "https://image.tmdb.org/t/p/w500/placeholder10.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/placeholder10-bg.jpg",
    overview:
      "Backstage chaos at a fading film festival, one disastrous premiere at a time.",
    genreIds: [35],
  },
];

# Popcorn v3

نسخة موسّعة من مشروع [Popcorn الأصلي](https://github.com/hamzaatef722/Popcorn) — بتتبع أفلام ومسلسلات، بـ features أكتر وUI اتعمله focus خاص.

هي نفس الـ static version اللي في v2، بس الـ services وكل component بيقرأ الداتا دلوقتي بنفس الأسامي اللي الـ TMDB API الحقيقي بيرجعها (مش أسامي mock مختلفة).

## اللي اتبنى (Static version)

- **Pages**: Home (Hero + Trending rows), Search, Details, Browse (by genre), Profile (Watchlist + History tabs)
- **State**: Redux Toolkit — `watchlist`, `watched`, `theme` slices، كلهم متخزنين في localStorage
- **Styling**: Tailwind CSS بـ design tokens مخصصة (شوف `tailwind.config.js`)
- **Animations**: Framer Motion (hero, hover effects, tabs)
- **Carousel**: Swiper للـ Netflix-style rows في الـ Home
- **Icons**: react-icons
- **Data**: `src/services/tmdbApi.js` — كل الـ functions دلوقتي بتعمل fetch حقيقي على TMDB API. الشكل اللي بيرجع منها (id, media_type, poster_path, backdrop_path, genre_ids, vote_average, title/name, release_date/first_air_date...) هو نفسه شكل TMDB الأصلي، وكل component بيقراه من خلال `src/utils/tmdbHelpers.js` (بناء رابط البوستر، استخراج العنوان والسنة) عشان محدش يخترع اسم متغير جديد لنفس الحاجة

## Design system

- Palette: `void`/`velvet` (dark surfaces)، `cream`/`paper` (light surfaces)، `marquee` (gold accent)، `ember` (red accent للـ ratings)
- Typography: Fraunces (display) + Inter (body) + JetBrains Mono (data/labels)
- Signature elements: film-strip perforated divider (`.film-divider`)، وticket-stub hover على الـ media cards (`.ticket-card`)

## Getting started

```bash
npm install
cp .env.example .env   # ضيف TMDB API key بتاعك في VITE_TMDB_API_KEY
npm run dev
```

## اللي محتاج تكمله (الخطوة الجاية)

1. **Genre mapping للـ movies/tv**: TMDB بيدي genre IDs مختلفة شوية بين movie وtv (`getGenres`/`getByGenre` بياخدوا `mediaType` كـ parameter اختياري دلوقتي، افتراضيًا "movie")، هتحتاج تتأكد من الـ mapping لو عايز الـ Browse يغطي الاتنين
2. **Details page لـ TV shows**: التفاصيل بتاعت المسلسلات (seasons/episodes) لسه بسيطة، ممكن تتوسع
3. **Pagination** في الـ Search وBrowse لما البيانات تكبر
4. **mockData.js** لسه موجود في `services/` كمرجع لشكل الداتا القديم، مش مستخدم دلوقتي — احذفه لو مش محتاجه

## Structure

```
src/
├── features/       (movies, watchlist, watched, search, theme — كل واحد فيه الـ components والـ slice بتاعته)
├── pages/          (الصفحات = الـ routes)
├── services/       (tmdbApi.js — real API calls، mockData.js — مرجع قديم مش مستخدم)
├── ui/             (reusable components: Navbar, Footer, Hero, Loader...)
├── utils/          (localStorage.js، tmdbHelpers.js — قراءة شكل بيانات TMDB بشكل موحّد)
├── App.jsx         (routing)
├── main.jsx        (entry + Provider + Router)
└── store.js        (Redux store)
```

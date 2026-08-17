# Popcorn v2

نسخة موسّعة من مشروع [Popcorn الأصلي](https://github.com/hamzaatef722/Popcorn) — بتتبع أفلام ومسلسلات، بـ features أكتر وUI اتعمله focus خاص.

## اللي اتبنى (Static version)

- **Pages**: Home (Hero + Trending rows), Search, Details, Browse (by genre), Profile (Watchlist + History tabs)
- **State**: Redux Toolkit — `watchlist`, `watched`, `theme` slices، كلهم متخزنين في localStorage
- **Styling**: Tailwind CSS بـ design tokens مخصصة (شوف `tailwind.config.js`)
- **Animations**: Framer Motion (hero, hover effects, tabs)
- **Carousel**: Swiper للـ Netflix-style rows في الـ Home
- **Icons**: react-icons
- **Data**: `src/services/tmdbApi.js` — دلوقتي بيرجع mock data من `src/services/mockData.js`، لكن كل function مبنية بنفس الشكل اللي هتستخدمه مع الـ real TMDB API

## Design system

- Palette: `void`/`velvet` (dark surfaces)، `cream`/`paper` (light surfaces)، `marquee` (gold accent)، `ember` (red accent للـ ratings)
- Typography: Fraunces (display) + Inter (body) + JetBrains Mono (data/labels)
- Signature elements: film-strip perforated divider (`.film-divider`)، وticket-stub hover على الـ media cards (`.ticket-card`)

## Getting started

```bash
npm install
cp .env.example .env   # ضيف TMDB API key بتاعك
npm run dev
```

## اللي محتاج تكمله (الخطوة الجاية)

1. **TMDB integration**: افتح `src/services/tmdbApi.js` وبدّل كل function جوة الـ mock data بالـ `fetch` call الحقيقي (الـ URLs والـ params موجودين كـ comments جاهزين)
2. **Genre mapping للـ movies/tv**: TMDB بيدي genre IDs مختلفة شوية بين movie وtv، هتحتاج تتأكد من الـ mapping لما تدمج الـ real data
3. **Details page لـ TV shows**: التفاصيل بتاعت المسلسلات (seasons/episodes) لسه بسيطة، ممكن تتوسع
4. **Pagination** في الـ Search وBrowse لما البيانات تبقى حقيقية وكتير

## Structure

```
src/
├── features/       (movies, watchlist, watched, search, theme — كل واحد فيه الـ components والـ slice بتاعته)
├── pages/          (الصفحات = الـ routes)
├── services/       (tmdbApi.js + mockData.js)
├── ui/             (reusable components: Navbar, Footer, Hero, Loader...)
├── utils/          (localStorage helper)
├── App.jsx         (routing)
├── main.jsx        (entry + Provider + Router)
└── store.js        (Redux store)
```

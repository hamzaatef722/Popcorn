/**
 * PosterCollage — decorative "poster wall" behind the Hero copy.
 *
 * Pass real TMDB backdrops/posters once the API key is wired up:
 *   posters={trending.map(m => ({ id: m.id, posterPath: m.poster_path, title: m.title }))}
 *
 * Until then it falls back to blank duotone cards so the layout never looks broken.
 * Purely decorative — aria-hidden, no focus stops, no meaningful alt text needed.
 */
function PosterCollage({ posters = [] }) {
  // Fixed 10-slot grid with hand-tuned offsets/rotations so the wall reads as
  // loosely pinned rather than a perfect grid. Extra slots beyond `posters`
  // just render the duotone placeholder card.
  const slots = [
    { top: "-4%", left: "2%", rot: -6, size: "w-28 md:w-36" },
    { top: "10%", left: "18%", rot: 4, size: "w-24 md:w-32" },
    { top: "-8%", left: "34%", rot: -2, size: "w-28 md:w-36" },
    { top: "6%", left: "50%", rot: 5, size: "w-24 md:w-32" },
    { top: "-2%", left: "65%", rot: -5, size: "w-28 md:w-36" },
    { top: "12%", left: "81%", rot: 3, size: "w-24 md:w-32" },
    { top: "38%", left: "8%", rot: 3, size: "w-24 md:w-32" },
    { top: "42%", left: "42%", rot: -4, size: "w-28 md:w-36" },
    { top: "36%", left: "74%", rot: 5, size: "w-24 md:w-32" },
    { top: "40%", left: "90%", rot: -3, size: "w-20 md:w-28" },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_60%_60%_at_50%_35%,black_0%,transparent_75%)]"
    >
      <div className="motion-safe:animate-posterDrift relative h-full w-full opacity-[0.50] md:opacity-[1]">
        {slots.map((slot, i) => {
          const poster = posters[i];
          return (
            <div
              key={i}
              style={{
                top: slot.top,
                left: slot.left,
                transform: `rotate(${slot.rot}deg)`,
              }}
              className={`absolute aspect-[2/3] ${slot.size} overflow-hidden rounded-md border border-neon/20`}
            >
              {poster?.posterPath ? (
                <img
                  src={poster.posterPath}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover [filter:grayscale(1)_contrast(1.05)] mix-blend-luminosity"
                />
              ) : null}
              {/* Neon duotone wash — sits over the image (or the empty gradient) either way */}
              <div className="absolute inset-0 bg-gradient-to-t from-neon/25 via-transparent to-transparent" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PosterCollage;

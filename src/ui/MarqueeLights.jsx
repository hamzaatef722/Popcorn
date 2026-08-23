/**
 * MarqueeLights — a strip of chasing bulbs, like an old cinema marquee sign.
 * Wrap it around the "Now showing" badge. Purely decorative (aria-hidden).
 * Respects prefers-reduced-motion: bulbs stay lit softly with no chase.
 */
function MarqueeLights({ count = 14 }) {
  const bulbs = Array.from({ length: count });

  return (
    <div aria-hidden="true" className="mx-auto flex w-fit items-center gap-[6px] px-2">
      {bulbs.map((_, i) => (
        <span
          key={i}
          style={{ animationDelay: `${i * 0.12}s` }}
          className="motion-safe:animate-chase h-[5px] w-[5px] rounded-full bg-neon/40 shadow-[0_0_4px_1px_rgba(62,209,242,0.4)] motion-reduce:bg-neon/70"
        />
      ))}
    </div>
  );
}

export default MarqueeLights;

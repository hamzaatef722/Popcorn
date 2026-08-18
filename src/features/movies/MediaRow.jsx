import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import MediaCard from "./MediaCard";

function MediaRow({ title, items }) {
  if (!items?.length) return null;

  return (
    <section className="py-6">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-4 font-display text-2xl font-semibold">{title}</h2>
      </div>

      <Swiper
        modules={[FreeMode]}
        freeMode
        slidesPerView="auto"
        spaceBetween={16}
        className="!px-6 md:!px-[calc((100vw-72rem)/2+1.5rem)]"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="!w-40 md:!w-48">
            <MediaCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default MediaRow;

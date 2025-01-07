import { getUpcomingAnime } from "@/api/anime";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "../../styles.css";
import { AnimeProps } from "@/types/anime";
import { useQuery } from "@tanstack/react-query";
import AnimeCard from "./animeCard";
import AnimeLoader from "../ui/loader";

export default function UpcomingAnime() {
  const { data, isLoading } = useQuery(["upcoming-anime"], getUpcomingAnime, {
    refetchOnWindowFocus: false,
  });
  if (isLoading) {
    return <AnimeLoader />;
  }
  return (
    <div>
      <Swiper
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
        breakpoints={{
          // Settings for smaller screens
          320: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          // Settings for tablets
          501: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          // Settings for desktops
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          // Settings for larger screens
          1280: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {data &&
          data.length > 0 &&
          data.map((animeItem: AnimeProps) => {
            return (
              <SwiperSlide key={Math.random().toString()}>
                <AnimeCard animeDetail={animeItem} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}

import { getCurrentAiredAnime } from "@/api/anime";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "../../styles.css";
import { AnimeProps } from "@/types/anime";
import { useQuery } from "@tanstack/react-query";
import AnimeCard from "./animeCard";
import AnimeLoader from "../ui/loader";

export default function CurrentAiredAnime() {
  const { data, isLoading } = useQuery(
    ["current-aired-anime"],
    getCurrentAiredAnime,
    {
      refetchOnWindowFocus: false,
    }
  );
  if (isLoading) {
    return <AnimeLoader />;
  }
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={5}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
        breakpoints={{
          500: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
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

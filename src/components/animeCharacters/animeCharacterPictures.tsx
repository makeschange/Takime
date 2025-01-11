import { useQuery } from "@tanstack/react-query";
import AnimeLoader from "../ui/loader";
import { getAnimeCharacterPictures } from "@/api/anime";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "../../styles.css";
import { EffectCards } from "swiper/modules";

export default function AnimeCharacterPictures({ id }: { id: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ["anime-character-pictures", id],
    queryFn: () => getAnimeCharacterPictures(id as string),
    refetchOnWindowFocus: false,
  });
  if (isLoading) {
    return <AnimeLoader />;
  }
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      {data &&
        data.map((picture) => {
          return (
            <SwiperSlide>
              <img
                className="rounded"
                src={picture?.jpg.image_url}
                alt="character"
              />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}

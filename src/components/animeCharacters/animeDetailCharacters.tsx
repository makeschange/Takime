import { getAnimeCharacters } from "@/api/anime";
import { AnimeCharacters } from "@/types/anime";
import { useQuery } from "@tanstack/react-query";
import AnimeLoader from "../ui/loader";
import "swiper/swiper-bundle.css";
import "../../styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AnimeCharacterPictures from "./animeCharacterPictures";

import { Navigation } from "swiper/modules";

export default function AnimeDetailCharacters({
  id,
  animeInfo,
}: {
  id: string;
  animeInfo: { title: string };
}) {
  const { data, isLoading } = useQuery({
    queryKey: ["anime-characters", id],
    queryFn: () => getAnimeCharacters(id as string),
    refetchOnWindowFocus: false,
  });
  if (isLoading) {
    return <AnimeLoader />;
  }
  return (
    <>
      <h2 className="text-custom-red text-lg border-b border-b-neutral-800 pb-2">
        {animeInfo?.title ? animeInfo?.title : "Anime"} Characters
      </h2>
      <Swiper
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={10}
        grabCursor={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {data &&
          data.map((animeItem: AnimeCharacters) => {
            return (
              <SwiperSlide key={animeItem?.character.mal_id}>
                <Dialog>
                  <DialogTrigger className=" absolute inset-0 w-full h-full"></DialogTrigger>
                  <div>
                    <img
                      className="mb-1"
                      src={animeItem?.character.images.webp.image_url}
                      alt={animeItem?.character.name}
                    />
                    <h5 className="text-neutral-600 leading-4 text-center text-sm group-hover:text-neutral-300 transition-all duration-150 ease-linear">
                      {animeItem?.character.name}
                    </h5>
                  </div>
                  <DialogContent className="bg-neutral-900 border-0 max-w-lg pt-8">
                    <AnimeCharacterPictures id={animeItem?.character?.mal_id} />
                  </DialogContent>
                </Dialog>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}

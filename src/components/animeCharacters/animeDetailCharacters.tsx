import { getAnimeCharacters } from "@/api/anime";
import { AnimeCharacters } from "@/types/anime";
import { useQuery } from "@tanstack/react-query";
import AnimeLoader from "../ui/loader";
import "swiper/swiper-bundle.css";
import "../../styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import AnimeCharacterPictures from "./animeCharacterPictures";

import { Navigation } from "swiper/modules";
import AnimeDetailCharactersActor from "./animeDetailCharactersActor";
import { Button } from "../ui/button";
import { useState } from "react";

export default function AnimeDetailCharacters({
  id,
  animeInfo,
}: {
  id: string;
  animeInfo: { title: string };
}) {
  const [showDialog, setShowDialog] = useState<"pictures" | "actors">(
    "pictures"
  );
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
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={10}
        grabCursor={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          600: {
            slidesPerView: 5,
          },
        }}
      >
        {data &&
          data.map((animeItem: AnimeCharacters) => {
            return (
              <SwiperSlide key={animeItem?.character.mal_id} className="group">
                <div className="h-60 md:h-[350px]">
                  <img
                    className="mb-1 h-full"
                    src={animeItem?.character.images.webp.image_url}
                    alt={animeItem?.character.name}
                  />
                </div>
                <div className="absolute inset-0 w-full h-full justify-center items-center flex-col gap-2 p-2 md:p-4 bg-neutral-950/75 hidden group-hover:flex">
                  <Dialog>
                    <DialogHeader>
                      <h5 className="text-neutral-300 leading-4 text-center text-sm md:text-lg mb-4 transition-all duration-150 ease-linear">
                        {animeItem?.character.name}
                      </h5>
                    </DialogHeader>
                    <DialogTrigger asChild>
                      <Button
                        className="w-full bg-custom-red hover:bg-neutral-950 text-xs md:text-sm  gap-0 flex-col md:flex-row md:flex-wrap"
                        onClick={() => setShowDialog("pictures")}
                      >
                        Character{" "}
                        <span className="block md:inline">Photos</span>
                      </Button>
                    </DialogTrigger>
                    <DialogTrigger asChild>
                      <Button
                        className="w-full bg-custom-red hover:bg-neutral-950 text-xs md:text-sm gap-0 flex-col md:flex-row md:flex-wrap"
                        onClick={() => setShowDialog("actors")}
                      >
                        Voice <span className="block md:inline">Actors</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-neutral-900 border-0 max-w-lg pt-8">
                      <>
                        {showDialog && showDialog === "pictures" ? (
                          <AnimeCharacterPictures
                            id={animeItem?.character?.mal_id}
                          />
                        ) : (
                          <AnimeDetailCharactersActor
                            voice_actors={animeItem?.voice_actors}
                          />
                        )}
                      </>
                    </DialogContent>
                  </Dialog>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}

import { AnimeCharactersActor } from "@/types/anime";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "../../styles.css";
import { EffectCreative } from "swiper/modules";
import { Card } from "../ui/card";

export default function AnimeDetailCharactersActor({
  voice_actors,
}: AnimeCharactersActor) {
  return (
    <Swiper
      grabCursor={true}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      modules={[EffectCreative]}
      className="mySwiper"
    >
      {voice_actors &&
        voice_actors?.map((actor) => {
          return (
            <SwiperSlide>
              <div className="bg-neutral-800 rounded overflow-hidden">
                <img
                  src={actor?.person?.images?.jpg.image_url}
                  alt={actor.person.name}
                />
                <div className="p-1">
                  <p className="text-neutral-300">{actor.person.name}</p>
                  <p className="text-neutral-500">{actor?.language}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}

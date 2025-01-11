import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import "../../styles.css";
import { AnimeProps } from "@/types/anime";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useQuery } from "@tanstack/react-query";
import { getPopularAnime } from "@/api/anime";
import { useState } from "react";
import { Badge } from "../ui/badge";
import PopAnimeDetail from "../anime/popAnimeDetail";
import AnimeLoader from "../ui/loader";

import { Autoplay } from "swiper/modules";
import BannerRecommendedAnime from "../anime/bannerRecommended";

export default function Banner() {
  const [expanded, setExpanded] = useState<boolean>(false);
  const { data, isLoading } = useQuery(["top-anime"], getPopularAnime, {
    refetchOnWindowFocus: false,
  });

  const toggleExpanded = () => {
    setExpanded((preValue) => !preValue);
  };

  if (isLoading) {
    return <AnimeLoader />;
  }

  return (
    <div className="wrapper pl-0 md:pl-24">
      <h1 className="text-custom-red text-xl md:text-5xl lg:text-8xl font-semibold md:font-bold relative md:absolute left-20 rotate-0 md:-rotate-90 top-[44%] translate-x-0 md:-translate-x-1/2 z-40">
        Top Anime
      </h1>
      <Swiper
        onSlideChange={() => setExpanded(false)}
        autoplay={{
          delay: 2500,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        className="mySwiper overflow-hidden"
      >
        {data &&
          data.length > 0 &&
          data.map((animeItem: AnimeProps) => {
            const sypnosis = expanded
              ? animeItem?.synopsis
              : animeItem?.synopsis.slice(0, 150);
            return (
              <SwiperSlide
                key={animeItem?.mal_id}
                className="p-2 md:p-12 rounded-md"
              >
                <div className="grid grid-cols-4">
                  <div className="block md:flex justify-center gap-8 mx-auto  p-4 rounded col-span-3">
                    <img
                      className="w-full rounded max-w-full md:max-w-sm md:!h-[565px]"
                      src={animeItem?.images?.webp?.large_image_url}
                      alt={animeItem?.title}
                    />
                    <ScrollArea className="h-[565px] w-full pr-2">
                      <div className="w-full text-left space-y-2">
                        <h2 className="text-4xl font-bold mb-4 ">
                          {animeItem?.title}
                        </h2>
                        {animeItem?.synopsis && (
                          <div className="text-sm">
                            <span className="font-bold leading-relaxed  text-neutral-400">
                              Synopsis
                            </span>
                            : {sypnosis}
                            {!expanded && <span>...</span>}
                            <Badge
                              className="cursor-pointer ml-2"
                              onClick={toggleExpanded}
                            >
                              {expanded ? "Read less" : "Read more"}
                            </Badge>
                          </div>
                        )}
                        {animeItem?.genres && (
                          <p>
                            <span className="font-bold leading-relaxed text-neutral-400">
                              {animeItem?.genres.length > 1
                                ? "Genres"
                                : "Genre"}
                              :{" "}
                            </span>
                            {animeItem?.genres
                              .map((genre) => genre.name)
                              .join(", ")}
                          </p>
                        )}
                        {animeItem?.duration && (
                          <p>
                            <span className="font-bold leading-relaxed text-neutral-400">
                              Duration:
                            </span>{" "}
                            {animeItem?.duration}
                          </p>
                        )}
                        {animeItem?.episodes && (
                          <p>
                            <span className="font-bold leading-relaxed text-neutral-400">
                              Episodes:
                            </span>{" "}
                            {animeItem?.episodes}
                          </p>
                        )}

                        {animeItem?.studios && (
                          <p>
                            <span className="font-bold leading-relaxed text-neutral-400">
                              {animeItem?.studios.length > 1
                                ? "Studios"
                                : "Studio"}
                              :{" "}
                            </span>
                            {animeItem?.studios
                              .map((genre) => genre.name)
                              .join(", ")}
                          </p>
                        )}
                        {animeItem?.status && (
                          <p>
                            <span className="font-bold leading-relaxed text-neutral-400">
                              Status:
                            </span>{" "}
                            {animeItem?.status}
                          </p>
                        )}
                        {animeItem?.aired && (
                          <p>
                            <span className="font-bold leading-relaxed text-neutral-400">
                              Aired:
                            </span>{" "}
                            {animeItem?.aired.string}
                          </p>
                        )}
                        <div className="pt-4">
                          <PopAnimeDetail animeDetail={animeItem} />
                        </div>
                      </div>
                    </ScrollArea>
                  </div>
                  <BannerRecommendedAnime id={animeItem?.mal_id} />
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}

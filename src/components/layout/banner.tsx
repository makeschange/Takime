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
    <div className="wrapper lg:pl-24 px-2 lg:px-0 -mt-8 md:mt-0">
      <h1 className="hidden md:block text-custom-red  text-lg sm:text-xl md:text-2xl lg:text-8xl font-semibold lg:font-bold static lg:absolute left-20 rotate-0 lg:-rotate-90 top-[44%] translate-x-0  lg:-translate-x-1/2 z-40 border-b border-b-neutral-800 pb-4 lg:pb-0 lg:border-b-0">
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
                className="p-4 md:p-2 lg:p-12 rounded-md before:content-[''] before:bg-black/75  before:z-10 before:inset-0 before:w-full before:h-full before:absolute"
              >
                <img
                  className="absolute inset-0 w-full h-full blur-sm rounded"
                  src={animeItem?.images?.webp?.large_image_url}
                  alt={animeItem?.title}
                />
                <div className="block md:grid md:grid-cols-4 relative z-10">
                  <div className="block md:flex justify-center gap-8 mx-auto  p-0 md:p-2 lg:p-4 rounded col-span-3">
                    <div className="shadow-sm shadow-neutral-500 relative w-[230px] md:w-full rounded max-w-full md:max-w-lg h-[300px] md:h-[400px] lg:h-[565px] overflow-hidden">
                      <img
                        className="w-full h-full"
                        src={animeItem?.images?.webp?.large_image_url}
                        alt={animeItem?.title}
                      />
                      <div className="md:hidden block pt-4">
                        <PopAnimeDetail
                          isBanner={false}
                          animeDetail={animeItem}
                        />
                      </div>
                    </div>

                    <ScrollArea className="h-[400px] lg:h-[565px] w-full pr-2 md:block hidden">
                      <div className="w-full text-left space-y-2 text-white">
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
                              className="cursor-pointer ml-2 text-xs"
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
                          <PopAnimeDetail
                            isBanner={true}
                            animeDetail={animeItem}
                          />
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

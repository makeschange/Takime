import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { AnimeProps } from "@/types/anime";
import { CirclePlay } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router";

export default function AnimeCard({
  animeDetail,
}: {
  animeDetail: AnimeProps;
}) {
  const [iframe, setIframe] = useState<string | null>(null);

  const openTrailer = () => {
    if (animeDetail?.trailer?.embed_url)
      setIframe(animeDetail?.trailer?.embed_url);
  };

  const closeTrailer = () => {
    setIframe(null);
  };

  return (
    <div className="group w-36 sm:w-[250px] md:w-[280px] lg:w-[350px] ">
      <div
        style={{
          backgroundImage: `url('${animeDetail?.images.webp.large_image_url}')`,
        }}
        className="bg-no-repeat bg-cover h-40 sm:h-[280px] md:h-[300px] lg:h-[350px] relative rounded-md  mb-2"
      >
        <div className="group-hover:block  transition-all duration-150 ease-linear hidden">
          <HoverCard
            onOpenChange={(open) => (open ? openTrailer() : closeTrailer())}
          >
            <HoverCardTrigger className="w-full h-full absolute inset-0 bg-black/50 flex justify-center items-center ">
              <CirclePlay size={50} />
            </HoverCardTrigger>
            <HoverCardContent
              side="right"
              className="space-y-1 bg-neutral-800 border-neutral-900 p-2"
            >
              {iframe && (
                <iframe
                  src={iframe}
                  width="100%"
                  height="150"
                  title={animeDetail?.title}
                ></iframe>
              )}
              <div className="bg-neutral-950 p-1 py-3 rounded space-y-1 text-left">
                {animeDetail?.duration && (
                  <p className=" text-neutral-300 text-xs">
                    <span className="font-semibold text-neutral-400">
                      Duration:
                    </span>{" "}
                    {animeDetail?.duration}
                  </p>
                )}
                {animeDetail?.episodes && (
                  <p className=" text-neutral-300 text-xs">
                    <span className="font-semibold text-neutral-400">
                      Episodes:
                    </span>{" "}
                    {animeDetail?.episodes}
                  </p>
                )}
                {animeDetail?.studios && (
                  <p className="text-neutral-300 text-xs">
                    <span className="font-semibold text-neutral-400">
                      {animeDetail?.studios.length > 1 ? "Studios" : "Studio"}:{" "}
                    </span>
                    {animeDetail?.studios.map((genre) => genre.name).join(", ")}
                  </p>
                )}
              </div>
              <Button
                className="font-semibold w-full bg-neutral-950 hover:bg-custom-red"
                asChild
              >
                <a href={animeDetail?.url} target="_blank">
                  Go to Watch
                </a>
              </Button>
              <Button
                className="font-semibold w-full bg-neutral-950 hover:bg-custom-red"
                asChild
              >
                <Link to={`/anime/${animeDetail?.mal_id}`}> Explore Anime</Link>
              </Button>
              <Button className="font-semibold w-full bg-neutral-950 hover:bg-custom-red">
                Add to My List
              </Button>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
      <h5 className="text-neutral-600 leading-4 text-center text-xs sm:text-sm group-hover:text-neutral-300 transition-all duration-150 ease-linear">
        {animeDetail?.title}
      </h5>
    </div>
  );
}

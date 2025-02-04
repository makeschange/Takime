import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { AnimeRecommendationProps } from "@/types/anime";
import { CirclePlay } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router";
import AnimeRecommendedCardMobile from "./animeRecommendedCardMobile";

export default function AnimeRecommendedCard({
  animeDetail,
}: {
  animeDetail: AnimeRecommendationProps;
}) {
  return (
    <div className="group">
      <div
        style={{
          backgroundImage: `url('${animeDetail?.entry?.images?.webp?.large_image_url}')`,
        }}
        className="bg-no-repeat bg-cover h-60 sm:h-[250px] md:h-[300px] lg:h-[350px] relative rounded-md  mb-2"
      >
        <div className="md:group-hover:block hidden md:hidden  transition-all duration-150 ease-linear">
          <HoverCard>
            <HoverCardTrigger className="w-full h-full absolute inset-0 bg-black/30 flex justify-center items-center ">
              <CirclePlay className="text-neutral-100" size={50} />
            </HoverCardTrigger>
            <HoverCardContent
              side="right"
              className="space-y-1 bg-neutral-800 border-neutral-900 p-2"
            >
              <Button
                className="font-semibold w-full bg-neutral-950 hover:bg-custom-red"
                asChild
              >
                <a href={animeDetail?.entry?.url} target="_blank">
                  Go to Watch
                </a>
              </Button>
              <Button
                className="font-semibold w-full bg-neutral-950 hover:bg-custom-red"
                asChild
              >
                <Link to={`/anime/${animeDetail?.entry?.mal_id}`}>
                  Explore Anime
                </Link>
              </Button>
            </HoverCardContent>
          </HoverCard>
        </div>
        <div className="md:hidden block">
          <AnimeRecommendedCardMobile animeDetail={animeDetail} />
        </div>
      </div>
    </div>
  );
}

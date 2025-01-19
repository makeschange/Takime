import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CirclePlay } from "lucide-react";
import { Button } from "../ui/button";
import { AnimeRecommendationProps } from "@/types/anime";
import { Link } from "react-router";

export default function AnimeRecommendedCardMobile({
  animeDetail,
}: {
  animeDetail: AnimeRecommendationProps;
}) {
  return (
    <Popover>
      <PopoverTrigger className="w-full h-full absolute inset-0 hover:bg-black/30 flex justify-center items-center ">
        <CirclePlay
          className="group-hover:block hidden text-neutral-100"
          size={50}
        />
      </PopoverTrigger>
      <PopoverContent
        side="right"
        className="space-y-2 bg-neutral-800 border-neutral-900 p-2"
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
          <Link to={`/anime/${animeDetail?.entry?.mal_id}`}>Explore Anime</Link>
        </Button>
      </PopoverContent>
    </Popover>
  );
}

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TvMinimalPlay, CirclePlay } from "lucide-react";
import { Button } from "../ui/button";
import { AnimeProps } from "@/types/anime";
import { Link } from "react-router";
import { useMediaQuery } from "react-responsive";

export default function PopAnimeDetail({
  animeDetail,
  isBanner,
}: {
  animeDetail: AnimeProps;
  isBanner: boolean;
}) {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <Popover>
      {isBanner ? (
        <PopoverTrigger asChild>
          <Button className="bg-custom-red font-bold hover:bg-custom-red/75">
            <TvMinimalPlay />
            Watch Now
          </Button>
        </PopoverTrigger>
      ) : (
        <PopoverTrigger className="md:hidden w-full h-full absolute inset-0 hover:bg-black/30 flex justify-center items-center group">
          <CirclePlay
            className="group-hover:block hidden text-neutral-100"
            size={50}
          />
        </PopoverTrigger>
      )}

      <PopoverContent
        side={isDesktop ? "right" : "bottom"}
        className="space-y-2 bg-neutral-800 border-neutral-900 p-2"
      >
        {animeDetail?.trailer && (
          <iframe
            src={animeDetail?.trailer?.embed_url}
            width="100%"
            height="150"
            title={animeDetail?.title}
          ></iframe>
        )}
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
          <Link to={`/anime/${animeDetail?.mal_id}`}>Explore Anime</Link>
        </Button>
      </PopoverContent>
    </Popover>
  );
}

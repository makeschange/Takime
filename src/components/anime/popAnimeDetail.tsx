import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TvMinimalPlay } from "lucide-react";
import { Button } from "../ui/button";
import { AnimeProps } from "@/types/anime";
import { Link } from "react-router";

export default function PopAnimeDetail({
  animeDetail,
}: {
  animeDetail: AnimeProps;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="bg-custom-red font-bold hover:bg-custom-red/75">
          <TvMinimalPlay />
          Watch Now
        </Button>
      </PopoverTrigger>
      <PopoverContent className="space-y-2 bg-neutral-800 border-neutral-900 p-2">
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

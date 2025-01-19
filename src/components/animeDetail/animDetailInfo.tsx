import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import AnimeDetailParagraph from "@/components/animeDetail/animeDetailParagraph";
import { AnimeProps } from "@/types/anime";
import { useState } from "react";

export default function AnimeDetailInfo({
  animeInfo,
}: {
  animeInfo: AnimeProps;
}) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const toggleExpanded = () => {
    setExpanded((preValue) => !preValue);
  };
  const sypnosis = expanded
    ? animeInfo?.synopsis
    : animeInfo?.synopsis.slice(0, 150);

  return (
    <ScrollArea className="h-[600px] w-full pr-2">
      <div className="w-full text-left space-y-2">
        <h2 className="text-4xl font-bold ">{animeInfo?.title}</h2>
        {animeInfo?.synopsis && (
          <div className="text-sm">
            <span className="font-bold leading-relaxed text-neutral-400">
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
        {animeInfo?.genres && (
          <AnimeDetailParagraph
            label={animeInfo?.genres.length > 1 ? "Genres" : "Genre"}
            value={animeInfo?.genres.map((genre) => genre.name).join(", ")}
          />
        )}

        {animeInfo?.duration && (
          <AnimeDetailParagraph label="Duration" value={animeInfo?.duration} />
        )}
        {animeInfo?.episodes && (
          <AnimeDetailParagraph label="Episodes" value={animeInfo?.episodes} />
        )}
        {animeInfo?.broadcast && (
          <AnimeDetailParagraph
            label="Broadcast"
            value={animeInfo?.broadcast.string}
          />
        )}
        {animeInfo?.studios && (
          <AnimeDetailParagraph
            label={animeInfo?.studios.length > 1 ? "Studios" : "Studio"}
            value={animeInfo?.studios.map((genre) => genre.name).join(", ")}
          />
        )}
        {animeInfo?.status && (
          <AnimeDetailParagraph label="Status" value={animeInfo?.status} />
        )}

        {animeInfo?.aired && (
          <AnimeDetailParagraph label="Aired" value={animeInfo?.aired.string} />
        )}

        {animeInfo?.source && (
          <AnimeDetailParagraph label="Source" value={animeInfo?.source} />
        )}
        {animeInfo?.season && (
          <AnimeDetailParagraph label="Season" value={animeInfo?.season} />
        )}
        {animeInfo?.year && (
          <AnimeDetailParagraph label="Year" value={animeInfo?.year} />
        )}
        {animeInfo?.rating && (
          <AnimeDetailParagraph label="Rating" value={animeInfo?.rating} />
        )}
        {animeInfo?.type && (
          <AnimeDetailParagraph label="Type" value={animeInfo?.type} />
        )}

        {animeInfo?.producers && (
          <p>
            <span className="font-bold leading-relaxed text-neutral-400">
              Producers:{" "}
            </span>
            {animeInfo?.producers.map((producer) => {
              return <span key={producer.mal_id}>{producer.name}, </span>;
            })}
          </p>
        )}

        {animeInfo?.popularity && (
          <AnimeDetailParagraph
            label="Popularity"
            value={animeInfo?.popularity}
          />
        )}

        {animeInfo?.rank && (
          <AnimeDetailParagraph label="Rank" value={animeInfo?.rank} />
        )}
        {animeInfo?.favorites && (
          <AnimeDetailParagraph
            label="Favorites"
            value={animeInfo?.favorites}
          />
        )}

        {animeInfo?.score && (
          <AnimeDetailParagraph label="Score" value={animeInfo?.score} />
        )}
        {animeInfo?.scored_by && (
          <AnimeDetailParagraph
            label="Scored By"
            value={animeInfo?.scored_by}
          />
        )}
      </div>
    </ScrollArea>
  );
}

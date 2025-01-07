import { getAnimeRecommendations } from "@/api/anime";
import { useQuery } from "@tanstack/react-query";
import AnimeLoader from "../ui/loader";
import AnimeRecommendedCard from "./animeRecommendedCard";
import { AnimeRecommendationProps } from "@/types/anime";

export default function RecommendedAnime({ id }: { id: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ["recommended-anime", id],
    queryFn: () => getAnimeRecommendations(id),
    refetchOnWindowFocus: false,
  });
  if (isLoading) {
    return <AnimeLoader />;
  }
  return (
    <>
      {data && data.length > 0 && (
        <h2 className="text-custom-red text-lg border-b border-b-neutral-800 pb-2">
          You Might Also Like
        </h2>
      )}

      <div className="grid grid-cols-4 gap-4">
        {data &&
          data.length > 0 &&
          data.map((animeItem: AnimeRecommendationProps) => {
            return (
              <AnimeRecommendedCard
                key={animeItem.entry.mal_id}
                animeDetail={animeItem}
              />
            );
          })}
      </div>
    </>
  );
}

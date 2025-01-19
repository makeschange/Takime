import { getAnimeRecommendations } from "@/api/anime";
import { useQuery } from "@tanstack/react-query";
import AnimeLoader from "../ui/loader";
import { AnimeRecommendationProps } from "@/types/anime";
import { ScrollArea } from "../ui/scroll-area";
import { Link } from "react-router";

export default function BannerRecommendedAnime({ id }: { id: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ["recommended-anime", id],
    queryFn: () => getAnimeRecommendations(id),
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <AnimeLoader />;
  }
  return (
    <div className="hidden md:block">
      <h2 className="text-custom-red text-md text-left pb-2">Related Anime</h2>
      <ScrollArea className="h-[400px] lg:h-[565px]">
        <div className={`flex flex-col space-y-2 px-2`}>
          {data && data.length > 0 ? (
            data.map((animeItem: AnimeRecommendationProps) => {
              return (
                <div className="flex items-center gap-3 relative text-white">
                  <img
                    className="max-w-[80px] rounded aspect-video w-full object-cover"
                    src={animeItem?.entry?.images?.webp?.large_image_url}
                    alt={animeItem?.entry?.title}
                  />
                  <p className="text-left text-xs">{animeItem?.entry?.title}</p>
                  <Link
                    className="absolute inset-0 w-full h-full hover:bg-neutral-950/10 dark:hover:bg-neutral-950/50 cursor-pointer"
                    to={`/anime/${animeItem?.entry?.mal_id}`}
                  />
                </div>
              );
            })
          ) : (
            <p>No Related Anime</p>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}

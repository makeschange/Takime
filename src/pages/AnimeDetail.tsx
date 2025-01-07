import { getAnime } from "@/api/anime";
import AnimeDetailInfo from "@/components/animeDetail/animDetailInfo";
import AnimeDetailCharacters from "@/components/animeCharacters/animeDetailCharacters";
import AnimeDetailTrailer from "@/components/animeDetail/animeDetailTrailer";
import AnimeLoader from "@/components/ui/loader";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import RecommendedAnime from "@/components/animeDetail/animeRecommended";

export default function AnimeDetail() {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["anime-detail", id],
    queryFn: () => getAnime(id as string),
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <AnimeLoader />;
  }

  return (
    <div className="wrapper max-w-[1200px] space-y-20">
      <div className="flex justify-center gap-8  p-4 ">
        <img
          className="max-w-lg rounded"
          src={data?.images?.webp?.large_image_url}
          alt={data?.title}
        />
        {data && <AnimeDetailInfo animeInfo={data} />}
      </div>
      {data?.trailer && <AnimeDetailTrailer trailerData={data} />}
      {id && data && (
        <AnimeDetailCharacters animeInfo={{ title: data?.title }} id={id} />
      )}
      {id && <RecommendedAnime id={id} />}
    </div>
  );
}

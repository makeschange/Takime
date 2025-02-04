import { AnimeProps } from "@/types/anime";

export default function AnimeDetailTrailer({
  trailerData,
}: {
  trailerData: AnimeProps;
}) {
  return (
    <>
      <h2 className="text-custom-red text-lg border-b border-b-neutral-800 pb-2">
        {trailerData?.title ? trailerData?.title : "Anime"} Trailer
      </h2>
      <iframe
        src={trailerData?.trailer?.embed_url}
        className=" aspect-video md:h-[400px] w-full"
        title={trailerData?.title}
      ></iframe>
    </>
  );
}

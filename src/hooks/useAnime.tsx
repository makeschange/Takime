import { AnimeContext } from "@/context/anime/animeContext";
import { useContext } from "react";

export default function useAnime() {
  const context = useContext(AnimeContext);
  if (!context) {
    throw new Error("useAnime must be used within a AnimeContextProvider");
  }
  return context;
}

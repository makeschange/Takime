import {
  AnimeCharacterPictureProps,
  AnimeCharactersProps,
  AnimeProps,
  AnimeRecommendationPropsArray,
} from "@/types/anime";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_ANIME_API_URL || "http://localhost:5173",
});

export const getPopularAnime = async (): Promise<AnimeProps> => {
  const response = await axiosInstance.get("/v4/top/anime?filter=bypopularity");
  return response.data.data;
};

export const getCurrentAiredAnime = async (): Promise<AnimeProps> => {
  const response = await axiosInstance.get("/v4/top/anime?filter=airing");
  return response.data.data;
};

export const getUpcomingAnime = async (): Promise<AnimeProps> => {
  const response = await axiosInstance.get("/v4/top/anime?filter=upcoming");
  return response.data.data;
};

export const getAnime = async (id: string): Promise<AnimeProps> => {
  const response = await axiosInstance.get(`/v4/anime/${id}/full`);
  return response.data.data;
};

export const getAnimeCharacters = async (
  id: string
): Promise<AnimeCharactersProps> => {
  const response = await axiosInstance.get(`/v4/anime/${id}/characters`);
  return response.data.data;
};

export const getAnimeCharacterPictures = async (
  id: string
): Promise<AnimeCharacterPictureProps> => {
  const response = await axiosInstance.get(`/v4/characters/${id}/pictures`);
  return response.data.data;
};

export const getAnimeRecommendations = async (
  id: string
): Promise<AnimeRecommendationPropsArray> => {
  const response = await axiosInstance.get(`/v4/anime/${id}/recommendations`);
  return response.data.data;
};

export const getSearchAnime = async (query: string): Promise<AnimeProps> => {
  const response = await axiosInstance.get(`/v4/anime?q=${query}`);
  return response.data.data;
};

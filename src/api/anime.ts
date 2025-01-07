import {
  AnimeCharacterPictureProps,
  AnimeCharactersProps,
  AnimeProps,
  AnimeRecommendationPropsArray,
} from "@/types/anime";
import axios from "axios";

// Make sure to prepend '/api' to route the request to the proxy
const apiBaseUrl = "/api/v4"; // This is your proxy base URL

export const getPopularAnime = async (): Promise<AnimeProps> => {
  const response = await axios.get(
    `${apiBaseUrl}/top/anime?filter=bypopularity`
  );
  return response.data.data;
};

export const getCurrentAiredAnime = async (): Promise<AnimeProps> => {
  const response = await axios.get(`${apiBaseUrl}/top/anime?filter=airing`);
  return response.data.data;
};

export const getUpcomingAnime = async (): Promise<AnimeProps> => {
  const response = await axios.get(`${apiBaseUrl}/top/anime?filter=upcoming`);
  return response.data.data;
};

export const getAnime = async (id: string): Promise<AnimeProps> => {
  const response = await axios.get(`${apiBaseUrl}/anime/${id}/full`);
  return response.data.data;
};

export const getAnimeCharacters = async (
  id: string
): Promise<AnimeCharactersProps> => {
  const response = await axios.get(`${apiBaseUrl}/anime/${id}/characters`);
  return response.data.data;
};

export const getAnimeCharacterPictures = async (
  id: string
): Promise<AnimeCharacterPictureProps> => {
  const response = await axios.get(`${apiBaseUrl}/characters/${id}/pictures`);
  return response.data.data;
};

export const getAnimeRecommendations = async (
  id: string
): Promise<AnimeRecommendationPropsArray> => {
  const response = await axios.get(`${apiBaseUrl}/anime/${id}/recommendations`);
  return response.data.data;
};

export const getSearchAnime = async (query: string): Promise<AnimeProps> => {
  const response = await axios.get(`${apiBaseUrl}/anime?q=${query}`);
  return response.data.data;
};

export interface AnimeProps {
  mal_id: string;
  title: string;
  url: string;
  synopsis: string;
  episodes: string;
  duration: string;
  type: string;
  source: string;
  rating: string;
  score: string;
  scored_by: string;
  rank: string;
  popularity: string;
  favorites: string;
  background: string;
  season: string;
  year: string;
  broadcast: {
    day: string;
    time: string;
    timezone: string;
    string: string;
  };
  producers: [
    {
      mal_id: string;
      type: string;
      name: string;
      url: string;
    }
  ];
  images: {
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  genres: [
    {
      mal_id: string;
      type: string;
      name: string;
      url: string;
    }
  ];
  studios: [
    {
      mal_id: string;
      type: string;
      name: string;
      url: string;
    }
  ];
  aired: {
    from: string;
    to: string;
    prop: {
      from: {
        day: number;
        month: number;
        year: number;
      };
      to: {
        day: number;
        month: number;
        year: number;
      };
    };
    string: string;
  };
  trailer: {
    youtube_id: string;
    url: string;
    embed_url: string;
    images: {
      image_url: string;
      small_image_url: string;
      medium_image_url: string;
      large_image_url: string;
      maximum_image_url: string;
    };
  };
  [key: string]: any;
}

export interface AnimeCharacters {
  character: {
    mal_id: string;
    url: string;
    images: {
      webp: {
        image_url: string;
        small_image_url: string;
      };
    };
    name: string;
  };
  role: string;
  voice_actors: [
    {
      person: {
        mal_id: string;
        url: string;
        images: {
          jpg: {
            image_url: string;
          };
        };
        name: string;
      };
      language: string;
    }
  ];
}

export type AnimeCharactersProps = AnimeCharacters[];

export interface AnimePictureProps {
  jpg: {
    image_url: string;
  };
}

export type AnimeCharacterPictureProps = AnimePictureProps[];

export interface AnimeRecommendationProps {
  entry: {
    mal_id: string;
    url: string;
    images: {
      webp: {
        image_url: string;
        small_image_url: string;
        large_image_url: string;
      };
    };
    title: string;
  };
  url: string;
  votes: number;
}

export type AnimeRecommendationPropsArray = AnimeRecommendationProps[];

import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getSearchAnime } from "@/api/anime";
import { useNavigate } from "react-router";
import { ScrollArea } from "../ui/scroll-area";

export default function SearchAnime() {
  const navigate = useNavigate();
  const [query, setQuery] = useState<string>("");
  const [debounce, setDebounce] = useState<string | undefined>(undefined);
  const [showResults, setShowResults] = useState<boolean>(false);

  const { data, isLoading } = useQuery({
    queryKey: ["search-anime", query],
    queryFn: () => getSearchAnime(query),
    refetchOnWindowFocus: false,
    enabled: !!debounce && debounce.length > 0,
  });

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounce(query.trim() || undefined);
    }, 2000);
    return () => clearTimeout(handler);
  }, [query]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setShowResults(true);
  };

  const searchResults = () => {
    if (isLoading) {
      return <p className="text-custom-red text-xs">Searching...</p>;
    }

    if (data && data.length > 0) {
      return data.map((item: any) => {
        const routeToPage = () => {
          navigate(`/anime/${item.mal_id}`);
          setQuery("");
          setShowResults(false);
        };

        return (
          <div
            key={item.mal_id}
            className="flex gap-2 items-center mb-1 relative"
          >
            <img
              className="h-10 aspect-square object-cover"
              src={item?.images?.webp?.small_image_url}
              alt={item?.title}
            />
            <p className="text-xs">{item?.title}</p>
            <div
              className="absolute inset-0 w-full h-full hover:bg-neutral-950/10 dark:hover:bg-neutral-950/50 cursor-pointer"
              onClick={routeToPage}
            />
          </div>
        );
      });
    }

    return <p className="text-custom-red text-xs">No result found.</p>;
  };

  return (
    <div className="relative w-[400px] flex gap-1">
      <div className="w-full">
        <Search className="absolute left-1 top-1 text-custom-red" />
        <Input
          className="pl-8 w-full border-neutral-700"
          type="search"
          placeholder="Enter anime name"
          value={query}
          onChange={handleSearch}
        />
      </div>
      {showResults && (
        <div className="rounded-b bg-neutral-100 shadow dark:bg-neutral-900 p-4 absolute top-[100%] w-full min-h-5 z-50">
          <ScrollArea
            className={`${data && data.length > 0 ? "h-[200px]" : "h-auto"}`}
          >
            {searchResults()}
          </ScrollArea>
        </div>
      )}
    </div>
  );
}

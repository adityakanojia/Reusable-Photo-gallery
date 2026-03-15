import { useCallback, useMemo, useState } from "react";
import SearchBar from "../SearchBar/search-bar-component.tsx";
import useFetchPhotos from "../../hooks/useFetchPhotos.ts";
import Card from "../Card/card-component.tsx";

const Gallery = () => {
  const [query, setQuery] = useState<string>("");
  const { photos, isLoading, error } = useFetchPhotos(
    "https://picsum.photos/v2/list?limit=30",
  );

  const handleSearchQuery = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
    },
    [],
  );

  const memoizedPhotos = useMemo(
    () =>
      photos.filter((photo) =>
        photo.author.toLowerCase().includes(query.toLowerCase()),
      ),
    [photos, query],
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <SearchBar query={query} setQuery={handleSearchQuery} />
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {memoizedPhotos.map((photo) => (
          <Card
            key={photo.id}
            photo={photo}
            isFavourite={false}
            toggleFavourite={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

import { useQuery } from "react-query";
import { useImagesContext } from "../context/ImagesContext";
import { searchCategory } from "../API/images";

const useSearch = () => {
  const { search, page } = useImagesContext();

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["searchPhotos", page],
    queryFn: () => searchCategory(search, page),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  return {
    data,
    error,
    isLoading,
    refetch,
  };
};

export default useSearch;

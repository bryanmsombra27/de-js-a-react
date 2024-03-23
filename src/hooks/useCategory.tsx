import { useQuery } from "react-query";
import { getCategories } from "../API/categories";

const useCategory = () => {
  const {
    data: categories,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    refetchOnWindowFocus: false,
  });

  return {
    categories,
    error,
    isLoading,
  };
};

export default useCategory;

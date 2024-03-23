import { filterByCategory } from "../API/categories";
import { useQuery } from "react-query";
import { useAppSelector } from "../store/hooks";

const useFilterByCategory = () => {
  const { category } = useAppSelector((state) => state.categories);

  const {
    data: categoryById,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["categoryById", category],
    queryFn: () => filterByCategory(category),
    refetchOnWindowFocus: false,
  });

  return {
    categoryById,
    error,
    isLoading,
  };
};

export default useFilterByCategory;

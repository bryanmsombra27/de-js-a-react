import { useQuery } from "react-query";
import { getRecipe } from "../API/categories";
import { useAppSelector } from "../store/hooks";
import { queryClient } from "../App";

const useRecipe = () => {
  const { id } = useAppSelector((state) => state.recipes);
  //   getRecipe();
  const {
    data: recipe,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["recipe", id],

    queryFn: () => {
      return getRecipe(id);
    },
    refetchOnWindowFocus: false,
    // enabled: !!id,
  });

  return {
    recipe,
    error,
    isLoading,
    refetch,
  };
};

export default useRecipe;

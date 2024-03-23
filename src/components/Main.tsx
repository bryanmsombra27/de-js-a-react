import { FC, useEffect } from "react";
import Navbar from "./Navbar";
import { filterByCategory, getCategories } from "../API/categories";
import Categories from "./Categories";
import useFilterByCategory from "../hooks/useFilterByCategory";
import Toast from "./Toast";
import CategoriesByIds from "./CategoriesByIds";
import { useAppSelector } from "../store/hooks";
import RecipeModal from "./RecipeModal";
import Spinner from "./Spinner";

interface MainProps {}
const Main: FC<MainProps> = ({}) => {
  useEffect(() => {
    getCategories();
  }, []);
  const { categoryById, isLoading } = useFilterByCategory();
  const { showToast } = useAppSelector((state) => state.recipes);

  return (
    <>
      <Navbar />

      <main className="mt-5 container-lg">
        <h2 className="text-center fs-1">Inicio</h2>
        <Categories />
        <div
          id="resultado"
          className="mt-5 row"
        >
          {isLoading ? (
            <div className="d-flex justify-content-center align-center">
              <Spinner />
            </div>
          ) : (
            categoryById?.map((item) => (
              <>
                <CategoriesByIds item={item} />
              </>
            ))
          )}
        </div>
      </main>
      <RecipeModal favoriteMode={false} />
      {showToast && (
        <Toast message="Receta agregada a favoritos exitosamente!" />
      )}
    </>
  );
};

export default Main;
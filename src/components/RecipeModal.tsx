import { FC, useEffect, useRef } from "react";
import Modal from "./Modal";
import { useAppDispatch } from "../store/hooks";
import useRecipe from "../hooks/useRecipe";
import {
  removeFromFavorites,
  setFavorites,
  setRecipe,
} from "../slices/RecipeSlice";
import { Meal } from "../interfaces/FilterCategories.interface";

interface RecipeModalProps {
  favoriteMode: boolean;
}
const RecipeModal: FC<RecipeModalProps> = ({ favoriteMode }) => {
  const { recipe, isLoading } = useRecipe();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!isLoading) {
      if (recipe) {
        dispatch(setRecipe({ recipe: recipe as any }));
      }
    }
  }, [recipe, isLoading]);

  const addRecipeToFavorites = () => {
    const item: Meal = {
      idMeal: recipe?.idMeal,
      strMealThumb: recipe?.strMealThumb,
      strMeal: recipe?.strMeal,
    };
    dispatch(setFavorites({ recipe: item }));
    document.querySelector<any>("#saveFav")?.click();
  };

  const deleteFromFavorites = () => {
    dispatch(
      removeFromFavorites({
        id: recipe?.idMeal,
      })
    );
    document.querySelector<any>("#saveFav")?.click();
  };

  return (
    <Modal
      title={recipe?.strMeal!}
      body={
        <>
          <img
            src={recipe?.strMealThumb}
            className="img-fluid"
            alt="meal image"
          />
          <p className="mt-3">{recipe?.strInstructions}</p>
          <h4 className="text-center mb-3">Ingredientes y cantidades</h4>
          <ul className="list-group">
            {Array.from(
              { length: 20 },
              (_, index) =>
                recipe &&
                recipe[`strIngredient${index + 1}`] &&
                recipe[`strMeasure${index + 1}`] && (
                  <li className="list-group-item d-flex justify-content-around">
                    <span>{recipe[`strIngredient${index + 1}`]}</span>
                    <span>{recipe[`strMeasure${index + 1}`]}</span>
                  </li>
                )
            )}
          </ul>
          <div className="d-flex w-100 gap-3 mt-4">
            <button
              type="button"
              className="btn btn-secondary w-50"
              data-bs-dismiss="modal"
              id="saveFav"
              aria-label="Close"
            >
              Cerrar
            </button>
            {!favoriteMode ? (
              <button
                className="btn btn-danger w-50"
                onClick={addRecipeToFavorites}
              >
                Guardar Favorito
              </button>
            ) : (
              <button
                className="btn btn-danger w-50"
                onClick={deleteFromFavorites}
              >
                Eliminar del listado
              </button>
            )}
          </div>
        </>
      }
    />
  );
};

export default RecipeModal;

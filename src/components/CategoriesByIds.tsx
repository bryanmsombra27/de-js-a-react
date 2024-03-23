import { FC, useEffect } from "react";
import { Meal } from "../interfaces/FilterCategories.interface";
import { useAppDispatch } from "../store/hooks";
import { setRecipeId } from "../slices/RecipeSlice";

interface CategoriesByIdsProps {
  item: Meal;
}
const CategoriesByIds: FC<CategoriesByIdsProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const getRecipeById = async (id: string) => {
    dispatch(setRecipeId({ id }));
  };

  return (
    <div
      className="col-3 my-3"
      key={item.idMeal}
    >
      <div className="card">
        <img
          src={item.strMealThumb}
          alt={item.strMeal}
          className="card-img-top"
        />
        <div className="card-body">
          <div className="card-title">{item.strMeal}</div>
        </div>
        <button
          className="btn btn-danger mb-2"
          data-bs-toggle="modal"
          data-bs-target="#modal"
          onClick={() => getRecipeById(item.idMeal!)}
        >
          Ver mas
        </button>
        {/* <button className="btn btn-secondary">Añadir a favoritos</button> */}
      </div>
    </div>
  );
};

export default CategoriesByIds;

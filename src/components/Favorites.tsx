import { FC, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import CategoriesByIds from "./CategoriesByIds";
import RecipeModal from "./RecipeModal";
import { Meal } from "../interfaces/FilterCategories.interface";
import { setFavoritesWitLocalStorage } from "../slices/RecipeSlice";

interface FavoritesProps {}
const Favorites: FC<FavoritesProps> = ({}) => {
  const { favorites } = useAppSelector((state) => state.recipes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("favoritos")!));
    const items = localStorage.getItem("favoritos")
      ? JSON.parse(localStorage.getItem("favoritos")!)
      : favorites;
    dispatch(
      setFavoritesWitLocalStorage({
        recipes: items,
      })
    );
  }, []);

  return (
    <>
      <Navbar />
      <main className="mt-5 container-lg">
        <h2 className="text-center fs-1">Favoritos</h2>
        <div
          id="resultado"
          className="favoritos row"
        >
          {favorites.map((item) => (
            <CategoriesByIds item={item} />
          ))}
        </div>
      </main>
      <RecipeModal favoriteMode={true} />
    </>
  );
};

export default Favorites;

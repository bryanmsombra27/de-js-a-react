import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ReceiptDetails } from "../interfaces/ReceiptDetails.interface";
import { Meal } from "../interfaces/FilterCategories.interface";

interface InitialState {
  id: string;
  recipe: ReceiptDetails;
  recipes: ReceiptDetails[];
  favorites: Meal[];
  showToast: boolean;
}

const initialState: InitialState = {
  id: "",
  recipe: {},
  recipes: [],
  favorites: [],
  showToast: false,
};

export const RecipeSliceSlice = createSlice({
  name: "receipt",
  initialState,
  reducers: {
    setRecipeId: (state, action: PayloadAction<{ id: string }>) => {
      state.id = action.payload.id;
    },
    setRecipe: (state, action: PayloadAction<{ recipe: ReceiptDetails }>) => {
      state.recipe = action.payload.recipe;
    },
    setFavorites: (state, action: PayloadAction<{ recipe: Meal }>) => {
      const addToFavorite = action.payload.recipe;
      const findItem = state.favorites.find(
        (item) => item.idMeal === addToFavorite.idMeal
      );
      if (findItem) {
        return state;
      } else {
        state.showToast = true;
        state.favorites.push(addToFavorite);
        localStorage.setItem("favoritos", JSON.stringify(state.favorites));
        state.showToast = false;
      }
    },
    setFavoritesWitLocalStorage: (
      state,
      action: PayloadAction<{ recipes: Meal[] }>
    ) => {
      state.favorites = action.payload.recipes;
    },
    removeFromFavorites: (state, action: PayloadAction<{ id: string }>) => {
      state.showToast = true;
      state.favorites = state.favorites.filter(
        (item) => item.idMeal !== action.payload.id
      );
      localStorage.setItem("favoritos", JSON.stringify(state.favorites));
      state.showToast = false;
    },
  },
});

export const {
  setRecipe,
  setRecipeId,
  setFavorites,
  removeFromFavorites,
  setFavoritesWitLocalStorage,
} = RecipeSliceSlice.actions;

export default RecipeSliceSlice.reducer;

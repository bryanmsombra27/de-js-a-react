import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "../slices/CategorySlice";
import RecipesReducer from "../slices/RecipeSlice";

export const store = configureStore({
  reducer: {
    categories: CategoryReducer,
    recipes: RecipesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import BudgetReducer from "./BudgetSlice";
import CostsReducer from "./ListSlice";

export const store = configureStore({
  reducer: {
    budget: BudgetReducer,
    costs: CostsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

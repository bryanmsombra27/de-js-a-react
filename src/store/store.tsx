import { configureStore } from "@reduxjs/toolkit";
import CitasReducer from "./ListSlice";

export const store = configureStore({
  reducer: {
    citas: CitasReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./carritoSlice";
import courseReducer from "./cursosSlice";
export const store = configureStore({
  reducer: {
    carrito: cartReducer,
    cursos: courseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

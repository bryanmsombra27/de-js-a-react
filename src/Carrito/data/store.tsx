import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./carritoSlice";
import courseReducer from "./cursosSlice";
import myCoursesReducer from "./myCoursesSlice";
export const store = configureStore({
  reducer: {
    carrito: cartReducer,
    cursos: courseReducer,
    misCursos: myCoursesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

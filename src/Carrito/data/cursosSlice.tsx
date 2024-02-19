import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import courses from "../data/courses.json";

export interface Curso {
  id: number;
  title: string;
  author: string;
  stars: string;
  courseImage: string;
  stock: number;
  totalPrice: number;
  discountPrice: number;
}

const initialState: Curso[] = courses;

export const cursosSlice = createSlice({
  name: "cursos",
  initialState,
  reducers: {
    removeSpaceCourse: (state, action: PayloadAction<{ id: number }>) => {
      state.map((item) => {
        if (item.id === action.payload.id && item.stock > 0) {
          item.stock--;
        } else {
          return item;
        }
      });
    },
    addSpaceCourse: (state, action: PayloadAction<{ id: number }>) => {
      state.map((item) => {
        if (item.id === action.payload.id && item.stock < 9) {
          item.stock++;
        } else {
          return item;
        }
      });
    },
  },
});

export const { removeSpaceCourse, addSpaceCourse } = cursosSlice.actions;

export default cursosSlice.reducer;

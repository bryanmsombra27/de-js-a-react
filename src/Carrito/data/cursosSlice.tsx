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
        if (item.id === action.payload.id) {
          item.stock++;
        } else {
          return item;
        }
      });
    },
    resetSpaceCourse: (state, action: PayloadAction<{ id: number }>) => {
      state = state.map((item) => {
        if (item.id == action.payload.id) {
          item.stock = 10;
          return item;
        } else return item;
      });
    },
    resetAllSpaceCourse: (state) => {
      state = state.map((item) => {
        item.stock = 10;
        return item;
      });
    },
    searchCourse: (state, action) => {
      state = state.filter((item) => {
        if (
          item.title.toLowerCase().includes(action.payload.search.toLowerCase())
        ) {
          return item;
        }
      });
      if (action.payload.search.length == 0) {
        state = initialState;
      }

      return state;
    },
  },
});

export const {
  removeSpaceCourse,
  addSpaceCourse,
  resetSpaceCourse,
  resetAllSpaceCourse,
  searchCourse,
} = cursosSlice.actions;

export default cursosSlice.reducer;

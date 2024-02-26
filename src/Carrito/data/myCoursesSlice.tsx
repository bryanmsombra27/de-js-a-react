import { createSlice } from "@reduxjs/toolkit";
import { Curso } from "./cursosSlice";

const initialState: Curso[] = [];

export const myCoursesSlice = createSlice({
  name: "mis-cursos",
  initialState,
  reducers: {
    courses: (state, action) => {
      const newCourses: Curso[] = [];
      if (state.length == 0) {
        state = action.payload.courses;
      } else {
        for (const course of action.payload.courses) {
          const courseFound = state.find((item) => course.id == item.id);
          if (!courseFound) {
            newCourses.push(course);
          }
        }
      }
      state = [...state, ...newCourses];

      return state;
    },
  },
});
export const { courses } = myCoursesSlice.actions;

export default myCoursesSlice.reducer;

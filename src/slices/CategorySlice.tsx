import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CategoryState {
  category: string;
}

const initialState: CategoryState = {
  category: "",
};

export const CategorySliceSlice = createSlice({
  name: "categorias",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<{ id: string }>) => {
      state.category = action.payload.id;
    },
  },
});

export const { setCategory } = CategorySliceSlice.actions;

export default CategorySliceSlice.reducer;

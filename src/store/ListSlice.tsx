import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface List {
  id?: string;
  name: string;
  price: number;
}

const initialState: List[] = [];

export const ListSliceSlice = createSlice({
  name: "costs",
  initialState,
  reducers: {
    addCost: (state, action: PayloadAction<List>) => {
      state.push({
        name: action.payload.name,
        price: action.payload.price,
        id: (new Date().getMilliseconds() * Math.random()).toString(),
      });
    },
    deleteCost: (state, action: PayloadAction<{ id: string }>) => {
      return state.filter((cost) => cost.id !== action.payload.id);
    },
    resetCosts: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const { addCost, deleteCost, resetCosts } = ListSliceSlice.actions;

export default ListSliceSlice.reducer;

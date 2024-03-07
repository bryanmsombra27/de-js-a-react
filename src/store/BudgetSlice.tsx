import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export interface Budget {
  budget: number;
  isBudget: boolean;
}

const initialState: Budget = {
  budget: 0,
  isBudget: false,
};

export const BudgetSliceSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    addBudget: (state, action: PayloadAction<Budget>) => {
      state.budget = action.payload.budget;
      state.isBudget = action.payload.isBudget;
      return state;
    },
    newBudget: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const { addBudget, newBudget } = BudgetSliceSlice.actions;

export default BudgetSliceSlice.reducer;

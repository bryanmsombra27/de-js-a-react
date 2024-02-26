import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Course } from "../components/Course";
import { removeSpaceCourse } from "./cursosSlice";
export interface Carrito {
  image: string;
  name: string;
  price: number;
  quantity: number;
  id: number;
  stock: number;
}

const initialState: Carrito[] = [];

export const carritoSlice = createSlice({
  name: "carrito",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Course>) => {
      const findItem = state.find((item) => item.id === action.payload.id);

      if (findItem) {
        state.map((item) => {
          if (findItem.id == item.id) {
            item.quantity++;
          } else {
            return item;
          }
        });
      } else {
        const item: Carrito = {
          id: action.payload.id,
          image: action.payload.courseImage,
          name: action.payload.title,
          price: action.payload.discountPrice,
          quantity: 1,
          stock: action.payload.stock,
        };
        state.push(item);
      }
    },
    lessToCart: (state, action: PayloadAction<{ id: number }>) => {
      const findItem = state.find((item) => item.id === action.payload.id);

      if (findItem) {
        state.map((item) => {
          if (findItem.id == item.id && item.quantity > 1) {
            item.quantity--;
          } else {
            return item;
          }
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      state = state.filter((item) => item.id != action.payload.id);
      return state;
    },
    clearCart: (state) => {
      state = [];
      return state;
    },
  },
});

export const { addToCart, clearCart, lessToCart, removeFromCart } =
  carritoSlice.actions;

export default carritoSlice.reducer;

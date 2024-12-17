import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addToCart, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart";

const store = configureStore({
  reducer: {
    carts: cartSlice,
  },
});

export default store;

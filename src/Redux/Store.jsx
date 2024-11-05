import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices"; // Use the correct path to your slice file

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Use the reducer from your slice
  },
});

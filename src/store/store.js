import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import mobileReducer from "./mobileSlice";
export const store = configureStore({
  reducer: {
    miniCart: cartReducer,
    mobile: mobileReducer,
  },
});

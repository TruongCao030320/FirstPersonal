import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import mobileReducer from "./mobileSlice";
import shoppingSlice from "./shoppingSlice";
export const store = configureStore({
  reducer: {
    miniCart: cartReducer,
    mobile: mobileReducer,
    shopping: shoppingSlice,
  },
});

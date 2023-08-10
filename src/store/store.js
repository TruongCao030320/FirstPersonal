import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import mobileReducer from "./mobileSlice";
import shoppingSlice from "./shoppingSlice";
import toastToggleSlice from "./toastToggleSlice";
export const store = configureStore({
  reducer: {
    miniCart: cartReducer,
    mobile: mobileReducer,
    shopping: shoppingSlice,
    toast: toastToggleSlice,
  },
});

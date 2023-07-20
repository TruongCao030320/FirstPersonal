import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    toggleMiniCart: (state) => {
      state.toggle = !state.toggle;
    },
  },
});
export const { toggleMiniCart } = cartSlice.actions;
export default cartSlice.reducer;

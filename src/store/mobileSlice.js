import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  mobile: false,
};
const mobileSlice = createSlice({
  name: "mobile",
  initialState: initialState,
  reducers: {
    toggleNavbarMobile: (state) => {
      state.mobile = !state.mobile;
    },
  },
});
export const { toggleNavbarMobile } = mobileSlice.actions;
export default mobileSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
const initial = {
  toggle: false,
};
const toastSlice = createSlice({
  name: "toast",
  initialState: initial,
  reducers: {
    toggleToast: (state, action) => {
      state.toggle = !state.toggle;
    },
  },
});
export const { toggleToast } = toastSlice.actions;
export default toastSlice.reducer;

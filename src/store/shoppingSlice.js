import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [],
  quantity: 0,
  totalAmount: 0,
};
const shoppingSlice = createSlice({
  name: "shopping",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.item.find((item) => item.id === newItem.id);
      state.quantity++;

      if (!existingItem) {
        state.item.push({
          id: newItem.id,
          title: newItem.title,
          image: newItem.image,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }
      state.totalAmount = state.item.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),

        0
      );
    },
    minusItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.item.find((item) => item.id === id);
      state.quantity--;

      if (existingItem.quantity === 1) {
        state.item = state.item.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) - Number(existingItem.price);
      }

      state.totalAmount = state.item.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      const item = state.item.find((item) => item.id === id);
      if (item) {
        state.item = state.item.filter((item) => item.id !== id);
        state.quantity = state.quantity - Number(item.quantity);
        state.totalAmount = Number(state.totalAmount) - Number(item.price);
      }
    },
  },
});
export const { addItem, minusItem, deleteItem } = shoppingSlice.actions;
export default shoppingSlice.reducer;

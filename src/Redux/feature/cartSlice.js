import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //   const isExist = state.items.filter((item) => item.idMeal !== action.payload.idMeal);

      //   if (isExist) {
      //     state.items.push(action.payload);
      //   }
      const isExist = state.items.some((item) => item.idMeal === action.payload.idMeal);

      if (!isExist) {
        state.items.push(action.payload);
      }
    },
  },
});
export const { addToCart } = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;

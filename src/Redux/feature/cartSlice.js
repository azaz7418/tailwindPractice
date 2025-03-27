import { createSlice } from "@reduxjs/toolkit"

const initialState={
    items:[]
}

const cartSlice= createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state, action)=>{
            state.items.push(action.payload)
        }
    }
})
export const { addToCart } = cartSlice.actions;
const cartReducer= cartSlice.reducer
export default cartReducer;

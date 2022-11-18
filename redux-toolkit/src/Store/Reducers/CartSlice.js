import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
    name:"cart",
    initialState:{
        cart: []
    },
    reducers:{
        addToCart(state, action) {
            state.cart.push(action.payload.cart) 
            console.log('addToCart:', action.payload)
        }

    }
})

const {actions, reducer} = cart;
export const {addToCart} = actions;
export default reducer;

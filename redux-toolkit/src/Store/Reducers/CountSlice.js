import { createSlice } from "@reduxjs/toolkit";

export const countReducer = createSlice({
    name:"Count",
    initialState:{
        count:0
    },
    reducers:{
        increment(state) { state.count+=1 },
        decrement(state) { state.count-=1 }
    }
})

console.log(countReducer);

const {actions, reducer} = countReducer;

export const {increment, decrement} = actions;

export default reducer;

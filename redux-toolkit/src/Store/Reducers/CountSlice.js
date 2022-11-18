import { createSlice } from "@reduxjs/toolkit";

export const countReducer = createSlice({
    name:"Count",
    initialState:{
        count:0
    },
    reducers:{
        increment(state) { state.count+=1 },
        decrement(state) { state.count-=1 },
        incrementBy(state, action) { 
            console.log(action)
            state.count+=action.payload 
        },
        decrementBy(state, action) { state.count-=action.payload }

    }
})

// console.log(countReducer);

const {actions, reducer} = countReducer;

export const {increment, decrement, incrementBy, decrementBy} = actions;

export default reducer;

import { createSlice } from "@reduxjs/toolkit";

export const inputText = createSlice({
    name:"text",
    initialState:{
        username: ""
    },
    reducers:{
        changeText(store,action) {
            console.log('changeText reducer payload', action.payload)
            store.username = action.payload
        }

    }
})

const {actions, reducer} = inputText;
export const {changeText} = actions;
export default reducer;

import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name:"post",
    initialState:{
        posts: [],
        loading: false,
        error: null
    },
    reducers:{
        postLoading(state,action) {
            state.loading = action.payload
        },
        postError(state,action) {
            state.error = action.payload
        },
        postSucces(state,action) {
            state.posts = action.payload
        },

    }
})

const {actions, reducer} = postSlice;
export  const {postLoading, postError, postSucces} = actions;
export default reducer;
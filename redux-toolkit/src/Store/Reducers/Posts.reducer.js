import { createReducer } from "@reduxjs/toolkit";

export const POSTS_SUCCESS = "POSTS_SUCCESS";
export const POSTS_LOADING = "POSTS_LOADING";
export const POSTS_ERROR = "POSTS_ERROR";


const initialState = {
  posts: [],
  loading: false,
  error: null
}

const postsReducer = createReducer(initialState, (builder)=>{
  builder
  .addCase(POSTS_SUCCESS, (state,action)=>{
    return {
      ...state,
      loading: action.payload
    }
  })
  .addCase(POSTS_LOADING, (state,action)=>{
    return {
      ...state,
      error: action.payload
    }
  })
  .addCase(POSTS_ERROR, (state,action)=>{
    return {
      ...state,
      posts: action.payload
    }
  })
  .addDefaultCase((state, action)=>state)
})

/* const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case POSTS_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload
      }
    default:
      return state
  }
} */


export default postsReducer;
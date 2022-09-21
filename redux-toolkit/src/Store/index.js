import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./Reducers/count.reducer";
import postsReducer from "./Reducers/Posts.reducer";
import textReducer from "./Reducers/Text.reducer";


const store = configureStore({
    reducer: {
        count: countReducer,
        posts: postsReducer,
        text: textReducer
    }
});

export default store;
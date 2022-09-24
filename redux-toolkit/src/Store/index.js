import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./Reducers/CountSlice";
import postsSlice from "./Reducers/PostSlice";
import textSlice from "./Reducers/TextSlice";


const store = configureStore({
    reducer: {
        counts: countSlice,
        posts: postsSlice,
        texts: textSlice
    }
});

export default store;
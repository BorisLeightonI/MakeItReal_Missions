import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./Reducers/CountSlice";
import postsSlice from "./Reducers/PostSlice";
import textSlice from "./Reducers/TextSlice";
import cartSlice from './Reducers/CartSlice';


const store = configureStore({
    reducer: {
        counts: countSlice,
        posts: postsSlice,
        texts: textSlice,
        cart: cartSlice
    }
});

export default store;
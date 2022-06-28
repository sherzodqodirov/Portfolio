import {configureStore} from "@reduxjs/toolkit";
import productReducer from './apiSlice/reducer';

export const store = configureStore({
    reducer: {
        product: productReducer,
    }
})

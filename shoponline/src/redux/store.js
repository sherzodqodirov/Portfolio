import {configureStore} from "@reduxjs/toolkit";
import categorReducer from "./categorySlice.js"
import productIdReducer from "./productidSlice.js"
import productStatusReducer from "./productStatusSlice.js"

export const store=configureStore({
    reducer:{
        categorTitle:categorReducer,
        productId:productIdReducer,
        productstatus:productStatusReducer,
    }
})
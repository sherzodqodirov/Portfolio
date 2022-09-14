import { configureStore } from "@reduxjs/toolkit";
import categorReducer from "./Categorcar/reducer"
export const store=configureStore({
    reducer:{
       categor:categorReducer 
    }
})
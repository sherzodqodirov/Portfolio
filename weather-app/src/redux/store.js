import {configureStore} from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice/reducer"
export const store=configureStore({
    reducer:{
        weather:weatherReducer,
    }
})
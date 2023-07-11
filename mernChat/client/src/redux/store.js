import {configureStore} from "@reduxjs/toolkit";
import btnState from "./btnSlice.js"

export const store=configureStore({
    reducer:{
        btnState
    }
})
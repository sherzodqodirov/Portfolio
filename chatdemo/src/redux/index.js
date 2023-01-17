import {configureStore} from "@reduxjs/toolkit";
import messageReducer from './messagetext/reducer'
export const store=configureStore({
    reducer:{
        messagetext:messageReducer
    }
})
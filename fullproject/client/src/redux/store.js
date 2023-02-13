import { configureStore } from "@reduxjs/toolkit";
import  userReduce  from "./authuser/reducer.js";
export const store=configureStore({
    reducer:{
       userdata:userReduce,
    }
})
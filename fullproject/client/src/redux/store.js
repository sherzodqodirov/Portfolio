import { configureStore } from "@reduxjs/toolkit";
import  userReduce  from "./authuser/registslice.js";
export const store=configureStore({
    reducer:{
       userdata:userReduce,
    }
})
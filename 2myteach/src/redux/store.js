import {configureStore} from "@reduxjs/toolkit";
import adminReduce from "./adminSlice.js";
import clienReduce from "./clientSlice.js";
export const store=configureStore({
    reducer:{
        admindata:adminReduce,
        clientdata:clienReduce
    }
})
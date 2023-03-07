import { configureStore } from "@reduxjs/toolkit";
import  userReduce  from "./authuser/registslice.js";
import productReduce from './getallproduct/productallslice.js'

export const store=configureStore({
    reducer:{
       userdata:userReduce,
       productdata:productReduce
    }
})
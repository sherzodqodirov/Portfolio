import { createSlice } from "@reduxjs/toolkit";
import { loadstop } from "../authuser/registslice";

const productallSlice=createSlice({
    name:"allproduct",
    initialState:{
     allproduct:[],
     isloading:false,
     error:null   
    },
    reducers:{
        loadstart:(state)=>{
            state.isloading=true
        },
        loadstop:(state)=>{
             state.isloading=false
        },
        fetchproduct:(state,actions)=>{
            state.state=false
            state.error=null
            state.allproduct=actions.payload
        },
        fetcherrorallproduct:(state,actions)=>{
            state.error=actions.payload
        }
    }
})
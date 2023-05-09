import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetAllcategory } from "../service/api";

export const getAllCategorythunk=createAsyncThunk("GET_ALLCATEGORY", async (_,thunkAPI)=>{
    try {
        return await GetAllcategory()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response)
    }
})


const categorSlice=createSlice({
    name:"categorAll",
    initialState:{
        data:null,
        isloading:false,
        error:false
    },
      extraReducers:(builder)=>{
            builder.addCase(getAllCategorythunk.pending,(state=>{
                state.isloading=true
            }))
           builder.addCase(getAllCategorythunk.fulfilled,((state,{payload})=>{
                state.isloading=false
                state.error=false
                state.data=payload
            }))
           builder.addCase(getAllCategorythunk.rejected,((state,{payload})=>{
                state.isloading=false
                state.error=true
                state.data=null
            }))
            
      }

})

const {actions,reducer}=categorSlice

export default reducer
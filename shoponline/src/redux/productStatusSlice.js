import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetProductId } from "../service/api";

export const getProductStatusthunk=createAsyncThunk("GET_PRODUCTSTATUS", async (_,thunkAPI)=>{
    try {
        return await GetProductId()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response)
    }
})


const productStatusSlice=createSlice({
    name:"productid",
    initialState:{
        data:null,
        isloading:false,
        error:false
    },
      extraReducers:(builder)=>{
            builder.addCase(getProductStatusthunk.pending,(state=>{
                state.isloading=true
            }))
           builder.addCase(getProductStatusthunk.fulfilled,((state,{payload})=>{
                state.isloading=false
                state.error=false
                state.data=payload
            }))
           builder.addCase(getProductStatusthunk.rejected,((state,{payload})=>{
                state.isloading=false
                state.error=true
                state.data=null
            }))
            
      }

})

const {actions,reducer}=productStatusSlice

export default reducer
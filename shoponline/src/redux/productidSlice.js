import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetProductId } from "../service/api";

export const getProductIdthunk=createAsyncThunk("GET_PRODUCTID", async (id,thunkAPI)=>{
    try {
        return await GetProductId(id)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response)
    }
})


const productidSlice=createSlice({
    name:"productid",
    initialState:{
        data:null,
        isloading:false,
        error:false
    },
      extraReducers:(builder)=>{
            builder.addCase(getProductIdthunk.pending,(state=>{
                state.isloading=true
            }))
           builder.addCase(getProductIdthunk.fulfilled,((state,{payload})=>{
                state.isloading=false
                state.error=false
                state.data=payload
            }))
           builder.addCase(getProductIdthunk.rejected,((state,{payload})=>{
                state.isloading=false
                state.error=true
                state.data=null
            }))
            
      }

})

const {actions,reducer}=productidSlice

export default reducer
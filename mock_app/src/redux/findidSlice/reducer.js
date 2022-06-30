import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getfindid=createAsyncThunk(
    "productid/getfindid",
    async (id)=> {
        const res = await fetch(`http://localhost:3001/api/product/${id}`)
        const formatdata= await res.json()
        return formatdata
    }
)

const findidSlice=createSlice({
    name:"findid",
    initialState:{
        productid:null,
        isloading:false
    },
    extraReducers:{
        [getfindid.pending]:(state)=>{
            state.isloading=true
        },
     [getfindid.fulfilled]:(state,actions)=>{
         state.isloading=false
         state.productid=actions.payload
        },
    [getfindid.rejected]:(state)=>{
            state.isloading=false
        },
    }

})

export default findidSlice.reducer;
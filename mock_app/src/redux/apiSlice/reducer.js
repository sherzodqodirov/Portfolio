import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";


export const getallproduct=createAsyncThunk(
    "allproduct/getallproduct",
    async ()=>{
        const res= await fetch("http://localhost:3001/api/product")
        const formatdata= await res.json()
        return formatdata;
    }
)

 const apiSlise=createSlice({
    name:'product',
    initialState:{
        allproduct:[],
        isloading:false
    },
    extraReducers:{
        [getallproduct.pending]:(state)=>{
            state.isloading=true
        },
    [getallproduct.fulfilled]:(state,actions)=>{
            state.allproduct=actions.payload
            state.isloading=false
        },
    [getallproduct.rejected]:(state,actions)=>{
            state.isloading=false
        },

    }
})

export default apiSlise.reducer;
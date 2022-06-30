import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";


export const getallproduct = createAsyncThunk(
    "allproduct/getallproduct",
    async () => {
        const res = await fetch("http://localhost:3001/api/product")
        const formatdata = await res.json()
        return formatdata.products;
    }
)

export const  getselectedproduct=createAsyncThunk(
    "allproduct/ getselectedproduct",
    async (valcategoriy)=>{
        const res=await fetch(`http://localhost:3001/api/product?category=${valcategoriy}`)
        const formatdata=await res.json()
        return formatdata.products

    }
)

export const getsearch=createAsyncThunk(
    "allproduct/getsearch",
    async (searchval)=>{
        const res=await fetch(`http://localhost:3001/api/product?name=${searchval}`)
        const formatdata= await res.json()
        return  formatdata.products

    }
)


const allproductSlise = createSlice({
    name: 'product',
    initialState: {
        allproduct:[],
        isloading: false
    },
    extraReducers: {
        [getallproduct.pending]: (state) => {
            state.isloading = true
        },
        [getallproduct.fulfilled]: (state, actions) => {
            state.allproduct = actions.payload
            state.isloading = false
        },
        [getallproduct.rejected]: (state, actions) => {
            state.isloading = false
        },


        [getselectedproduct.pending]: (state) => {
            state.isloading = true
        },
        [getselectedproduct.fulfilled]: (state, actions) => {
            state.allproduct = actions.payload
            state.isloading = false
        },
        [getselectedproduct.rejected]: (state, actions) => {
            state.isloading = false
        },


        [getsearch.pending]: (state) => {
            state.isloading = true
        },
        [getsearch.fulfilled]: (state, actions) => {
            state.allproduct = actions.payload
            state.isloading = false
        },
        [getsearch.rejected]: (state, actions) => {
            state.isloading = false
        },




    }
})

export default allproductSlise.reducer;
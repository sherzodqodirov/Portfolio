import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";


export const getallproduct = createAsyncThunk(
    "allproduct/getallproduct",
    async () => {
        const res = await fetch("http://localhost:3001/api/product")
        const formatdata = await res.json()
        return formatdata;
    }
)

export const getcategry = createAsyncThunk(
    "categoty/getcategry",
    async () => {
        const res = await fetch("http://localhost:3001/api/category")
        const formatdata = await res.json()
        return formatdata
    }
)

const apiSlise = createSlice({
    name: 'product',
    initialState: {
        allproduct:[],
        categoty: [],
        selectedcatigory:[],
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


        [getcategry.pending]: (state) => {
            state.isloading = true
        },
        [getcategry.fulfilled]: (state, actions) => {
            state.categoty = actions.payload
            state.isloading = false
        },
        [getcategry.rejected]: (state, actions) => {
            state.isloading = false
        },

    }
})

export default apiSlise.reducer;
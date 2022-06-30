import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";


export const getcategry = createAsyncThunk(
    "categoty/getcategry",
    async () => {
        const res = await fetch("http://localhost:3001/api/category")
        const formatdata = await res.json()
        return formatdata
    }
)

const categorySlise = createSlice({
    name: 'namecategory',
    initialState: {
        category: [],
        isloading: false
    },
    extraReducers: {

        [getcategry.pending]: (state) => {
            state.isloading = true
        },
        [getcategry.fulfilled]: (state, actions) => {
            state.category = actions.payload
            state.isloading = false
        },
        [getcategry.rejected]: (state, actions) => {
            state.isloading = false
        },

    }
})

export default categorySlise.reducer;
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getcarall = createAsyncThunk(
    "admincar/getcarall",
    async (num, {rejectWithValue}) => {
        try {
            const res = await axios.get(`https://cartestwebapp.herokuapp.com/car?limit=6&page=${num}`);
            return res.data.data
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const admincarSlice = createSlice({
    name: "carall",
    initialState: {
        caralldata: [],
        total: null,
        isloading: false,
        error: null,
    },
    extraReducers: {
        [getcarall.pending]: (state) => {
            state.isloading=true;
        },
        [getcarall.fulfilled]:(state,actions)=>{
            state.isloading=false;
            state.caralldata=actions.payload.data;
            state.total=actions.payload.total;
        },
        [getcarall.rejected]:(state,actions)=>{
            state.isloading=false;
            state.error=actions.payload
        }

    }
})
export default admincarSlice.reducer
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export  const getcarinfo=createAsyncThunk(
    "carinfo/getcarinfo",
    async (carid,{rejectWithValue})=>{
        try{
            const res= await axios.get(`https://cartestwebapp.herokuapp.com/car/${carid}`)
            return  res.data.data
        }
        catch (er){
            return rejectWithValue(er.message)
        }
        }
)
const carinfoSlice=createSlice({
    name:"carinfo",
    initialState:{
        carinfodat:[],
        isloading:false,
        error:null
    },
    extraReducers:{
        [getcarinfo.pending]:(state)=>{
            state.isloading=true;
        },
        [getcarinfo.fulfilled]: (state,actions) => {
            state.carinfodat=actions.payload;
            state.isloading = false;
        },
        [getcarinfo.rejected]: (state, actions) => {
            state.error = actions.payload;
            state.isloading = false;
        },

    }
})

export  default carinfoSlice.reducer
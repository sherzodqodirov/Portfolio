import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getClient} from "../service/api";

export const GetClientthunk=createAsyncThunk("GET_CLIEN",async (_,thunkAPI)=>{
    try{
        return await getClient()
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.response.data)
    }

})

const clientSlice= createSlice({
    name:"adminData",
    initialState: {
        data: null,
        isloading: false,
        iserror:false
    },
    extraReducers:(builder)=>{
        builder.addCase(GetClientthunk.pending,(state)=>{
            state.isloading=true;
        })
        builder.addCase(GetClientthunk.fulfilled,(state,action)=>{
            state.isloading=false
            state.data=action.payload
            state.iserror=false
        })
        builder.addCase(GetClientthunk.rejected,(state,action)=>{
            state.isloading=false
            state.data=null
            state.iserror=true
        })
    }
})

const {reducer, actions} = clientSlice


export default reducer;

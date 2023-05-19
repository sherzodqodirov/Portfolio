import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getAdmin, postAdmin} from "../service/api";

export const GetAdminthunk = createAsyncThunk("GET_ADMIN", async (_, thunkAPI) => {
    try {
        return await getAdmin()
    } catch (e) {
        return thunkAPI.rejectWithValue(e.response.data)
    }

})
export const PostAdminthunk = createAsyncThunk("POST_ADMIN", async (data, thunkAPI) => {
    try {
        return await postAdmin(data)
    } catch (e) {
        return thunkAPI.rejectWithValue(e.response.data)
    }

})

const adminSlice = createSlice({
    name: "adminData",
    initialState: {
        data: null,
        isloading: false,
        iserror: false
    },
    extraReducers: (builder) => {
        builder.addCase(GetAdminthunk.pending, (state) => {
            state.isloading = true;
        })
        builder.addCase(GetAdminthunk.fulfilled, (state, action) => {
            state.isloading = false
            state.data = action.payload
            state.iserror = false
        })
        builder.addCase(GetAdminthunk.rejected, (state, action) => {
            state.isloading = false
            state.data = null
            state.iserror = true
        })

    }
})

const {reducer, actions} = adminSlice


export default reducer;

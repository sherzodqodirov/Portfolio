import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getweather = createAsyncThunk(
    "weatherdata/getweather",
    async (val,{rejectWithValue}) => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=40eb3a341fd529deefb159764e70f0b0`);
            return await response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        weatherdata: [],
        isloading: false,
        error:null,
    },
    extraReducers: {
        [getweather.pending]: (state) => {
            state.isloading = true;
            state.error=null;
        },
        [getweather.fulfilled]: (state, actions) => {
            state.isloading = false;
            state.weatherdata = actions.payload
        },
    [getweather.rejected]: (state,actions) => {
            state.isloading = false;
            state.error=actions.payload;
        },
    }
})

export default weatherSlice.reducer;
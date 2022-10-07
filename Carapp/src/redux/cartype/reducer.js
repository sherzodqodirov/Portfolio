import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getbyidcar = createAsyncThunk(
  "cartype/getbyidcar",
  async (idcar, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `https://cartestwebapp.herokuapp.com/car?limit=30&page=${idcar}`
      );
      return await res.data.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const cartypeSlice = createSlice({
  name: "cartype",
  initialState: {
    cartypedata: [],
    isloading: false,
    error: null,
  },
  extraReducers: {
    [getbyidcar.pending]: (state) => {
      state.isloading = true;
    },
    [getbyidcar.fulfilled]: (state, actions) => {
      state.cartypedata = actions.payload;
      state.isloading = false;
    },
    [getbyidcar.rejected]: (state, actions) => {
      state.isloading = false;
      state.error = actions.payload;
    },
  },
});

export default cartypeSlice.reducer;

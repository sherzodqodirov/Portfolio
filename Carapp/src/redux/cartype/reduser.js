import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getbyidcar = createAsyncThunk(
  "cartype/getbyidcar",
  async (idcar, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `https://cartestwebapp.herokuapp.com/category/${idcar}`
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const cartypeSlice = createSlice({
  name: "cartype",
  initialState: {
    cartype: [],
    isloading: false,
    error: null,
  },
  extraReducers: {
    [getbyidcar.pending]: (state) => {
      state.isloading = true;
    },
    [getbyidcar.fulfilled]: (state, actions) => {
      state.cartype = actions.payload;
      state.isloading = false;
    },
    [getbyidcar.rejected]: (state, actions) => {
      state.isloading = false;
      state.error = actions.payload;
    },
  },
});

export default cartypeSlice.reducer;

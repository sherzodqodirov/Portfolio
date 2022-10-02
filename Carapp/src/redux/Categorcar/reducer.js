import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getmarkapaging = createAsyncThunk(
  "categorcar/getmarkapaging",
  async (num, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `https://cartestwebapp.herokuapp.com/category/marka?limit=5&page=${num}`
      );
      return res.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const categorcarSlice = createSlice({
  name: "categor",
  initialState: {
    categorcar: [],
    total: null,
    isloading: false,
    error: null,
  },
  extraReducers: {
    [getmarkapaging.pending]: (state) => {
      state.isloading = true;
      state.error = null;
    },
    [getmarkapaging.fulfilled]: (state, actions) => {
      state.categorcar = actions.payload.data;
      state.total = actions.payload.total;
      state.isloading = false;
      state.error = null;
    },
    [getmarkapaging.rejected]: (state, actions) => {
      state.isloading = false;
      state.error = actions.payload;
    },
  },
});

export default categorcarSlice.reducer;

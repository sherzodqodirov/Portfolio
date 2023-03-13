import { createSlice } from "@reduxjs/toolkit";

const productallSlice = createSlice({
  name: "allproduct",
  initialState: {
    product: [],
    isloading: true,
    error: null,
  },
  reducers: {
    fetchloadstart:(state)=>{
     state.isloading=true
    },
    fetchallproduct: (state, actions) => {
      state.isloading = false;
      state.error = null;
      state.product = actions.payload;
    },
    fetcherrorallproduct: (state, actions) => {
      state.isloading = false;
      state.error = actions.payload;
    },
  },
});

const { actions, reducer } = productallSlice;

export const {loadstop, fetcherrorallproduct, fetchallproduct,fetchloadstart }=actions;

export default reducer;

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "users",
  initialState: {
    user: {},
    isLogget: false,
    error: null,
    isloading: false,
  },
  reducers: {
    loadstart: (state) => {
      state.isloading = true;
    },
    signinsuccess: (state, actions) => {
      state.error = null;
      state.user = actions.payload;
    },
    signinerror: (state, actions) => {
      state.error = actions.payload;
    },
    loggetuser:(state,actions)=>{
      state.isLogget=actions.payload
    },
    loadstop: (state) => {
      state.isloading = false;
    },
  },
});

const { actions, reducer } = authSlice;

export const { loadstart, loadstop,loggetuser,signinerror,signinsuccess } = actions;

export default reducer;

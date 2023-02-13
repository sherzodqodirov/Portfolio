import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASEURL, authurl } from "../../utils/apiurl.js";

export const authulogin = createAsyncThunk(
  "user/authulogin",
 
  async(userobj,{ rejectWithValue })=>{
    try {
      const res=await axios.post(BASEURL+authurl.LOGIN,userobj)
      localStorage.setItem(`TOKENUSER`,res.data.token)
      return res.data
    } catch (error) {
      return  rejectWithValue(error.response.data.message);
    }
  }

);

const authSlice = createSlice({
  name: "users",
  initialState: {
    user: {},
    error: null,
    isloading: false,
  },
reducers:{
 fetchtoken:(state,actions)=>{
  state.user.token=actions.payload
 },
 remuvtoken:(state)=>{
  state.user.token=null
 }
},
  extraReducers: (builder) => {
    builder
      .addCase(authulogin.pending, (state) => {
        state.isloading = true;
      })
      .addCase(authulogin.fulfilled, (state, actions) => {
        state.isloading = false;
        state.user=actions.payload;
        
      })
      .addCase(authulogin.rejected, (state, actions) => {
        state.isloading = false;
        state.error = actions.payload;
      });
  },
});
export const {remuvtoken,fetchtoken}=authSlice.actions;

export default authSlice.reducer;

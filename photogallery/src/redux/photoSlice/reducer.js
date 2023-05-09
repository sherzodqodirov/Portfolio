// import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

// export const getphotos = createAsyncThunk("photodata/getphotos", async () => {
//     const res = await fetch("https://picsum.photos/v2/list?page=3&limit=20");
//     const formatRes = await res.json();
//     return formatRes;
// });

// const photoSlice = createSlice({
//     name: "gallery",
//     initialState: {
//         photodata: [],
//         isloading: false,
//     },
//     extraReducers: {
//         [getphotos.pending]: (state) => {
//             state.isloading = true;
//         },
//         [getphotos.fulfilled]: (state, actions) => {
//             state.photodata = actions.payload;
//             state.isloading = false;
//         },
//         [getphotos.rejected]: (state) => {
//             state.isloading = false;
//         },
//     },
// });

// export default photoSlice.reducer;

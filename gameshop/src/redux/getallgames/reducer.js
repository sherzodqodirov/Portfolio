import {createSlice} from "@reduxjs/toolkit";

const getallgamesSlice=createSlice({
    name:"gamesall",
    initialState: {
        itemsgamesall: null
    },
    reducers:{
        allgames:(state,action)=>{
            state.itemsgamesall=action.payload
        }
    }
})
export const {allgames}=getallgamesSlice.actions;
export default getallgamesSlice.reducer;
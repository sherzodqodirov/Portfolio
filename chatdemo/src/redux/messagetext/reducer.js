import {createSlice} from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name:"messagetext",
    initialState:{
        messages:[
            {text:"salom !"}
        ]
    },
    reducers:{
        addmessage:(state,action)=>{
            state.messages.push(action.payload)
        }
    }
})
export const {addmessage}=messageSlice.actions
export default messageSlice.reducer
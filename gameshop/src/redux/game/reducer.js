import {createSlice} from "@reduxjs/toolkit";

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        currentgame:null,
    },
    reducers: {
        setcurrentGame: (state, action) => {
            state.currentgame=action.payload
        },
    }
})

export const {setcurrentGame} = gameSlice.actions;
export default gameSlice.reducer;


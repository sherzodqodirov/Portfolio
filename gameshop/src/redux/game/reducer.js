import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsCarts: []
    },
    reducers: {
        additemCartpush: (state, action) => {
            state.itemsCarts.push(action.payload);
        },
        deleteCart: (state, action) => {
            state.itemsCarts = state.itemsCarts.filter(game => game.id !== action.payload)
        }

    }
})

export const {additemCartpush, deleteCart} = cartSlice.actions;
export default cartSlice.reducer;


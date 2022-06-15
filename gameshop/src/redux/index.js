import {configureStore} from "@reduxjs/toolkit";
import cartReducer from './cart/reducer';
import gameReducer from './game/reducer';
import allgamesReducer from './getallgames/reducer'

export const store = configureStore({
    reducer:{
        cart:cartReducer,
        game:gameReducer,
        gamesall:allgamesReducer
    }
})
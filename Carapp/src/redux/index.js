import {configureStore} from "@reduxjs/toolkit";
import categorReducer from "./Categorcar/reducer";
import cartypeReducer from "./cartype/reducer";
import carinfoReducer from "./carinfo/reducer";
import carallReducer from './admincarall/reducer'

export const store = configureStore({
    reducer: {
        categor: categorReducer,
        cartype: cartypeReducer,
        carinfo: carinfoReducer,
        carall: carallReducer
    },
});

import { configureStore } from "@reduxjs/toolkit";
import categorReducer from "./Categorcar/reducer";
import cartypeReducer from "./cartype/reduser";
export const store = configureStore({
  reducer: {
    categor: categorReducer,
    cartype: cartypeReducer,
  },
});

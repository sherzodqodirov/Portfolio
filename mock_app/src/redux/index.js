import {configureStore} from "@reduxjs/toolkit";
import productReducer from './allproductSlice/reducer';
import categoryReducer from "./categoriySlice/reducer"
import productidReducer from "./findidSlice/reducer"
export const store = configureStore({
    reducer: {
        product: productReducer,
        namecategory:categoryReducer,
        findid:productidReducer
    }
})

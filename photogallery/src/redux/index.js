import {configureStore} from "@reduxjs/toolkit";
import photoReduser from "./photoSlice/reducer"

export const store = configureStore({
  reducer:{
    gallery: photoReduser,
  }
  
})

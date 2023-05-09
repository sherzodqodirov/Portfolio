import {configureStore} from "@reduxjs/toolkit";
import { photoApi } from "./api/api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer:{
    [photoApi.reducerPath]:photoApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(photoApi.middleware),
})
setupListeners(store.dispatch)
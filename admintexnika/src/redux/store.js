import {configureStore} from "@reduxjs/toolkit"
import {texnikApi} from "./Api";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [texnikApi.reducerPath]: texnikApi.reducer,
    },



    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(texnikApi.middleware),
})
setupListeners(store.dispatch)
import { configureStore } from "@reduxjs/toolkit";
import qrcodeReducer from './qrcodeSlice'

export const store = configureStore({
    reducer:{
        qr:qrcodeReducer,
    },
})
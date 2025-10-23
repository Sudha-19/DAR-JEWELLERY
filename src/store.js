import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";




export const store = configureStore({




    // creats and exports redux store stance for name withstore
    reducer: {
        cart: cartSlice,
    },
    devTools: true,
    //  extension toll for debugging
});



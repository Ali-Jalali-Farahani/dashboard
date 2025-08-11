import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/loginParams"

const store=configureStore({
    reducer:loginReducer
})

export default store;
import { configureStore } from "@reduxjs/toolkit";
import loginStatusReducer from "./loginSlice";


export default configureStore({
    reducer: {
        loginStatus: loginStatusReducer
    }
})


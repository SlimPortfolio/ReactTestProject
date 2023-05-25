import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'loginStatus',
    initialState: {
        value: false
    },
    reducers: {
        loginSuccess: state => {
            state.value = true;
            console.log("state has been updated")
        },

        loginFailure: state => {
            state.value = false;  
        },

        logoutUser: state => {
            state.value = false;
        }
    }
})

export const {loginSuccess, loginFailure, logoutUser} = loginSlice.actions
export default loginSlice.reducer;
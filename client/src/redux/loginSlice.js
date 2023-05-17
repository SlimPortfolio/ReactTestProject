import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'loginStatus',
    initialState: {
        value: false
    },
    reducers: {
        loginTrue: state => {
            state.value = true;
        },

        loginFalse: state => {
            state.value = false;
        }
    }
})

export const {loginTrue, loginFalse} = loginSlice.actions
export default loginSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'loginStatus',
    initialState: {
        value: false
    },
    reducers: {
        loginSuccess: state => {
            state.value = true;
        },

        loginFailure: state => {
            state.value = false;  
        }
    }
})

export const {loginSuccess, loginFailure} = loginSlice.actions
export default loginSlice.reducer;
import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
    name: 'buttonDisplay',
    initialState: {
        loginClicked: false,
        loginShow : true,
        logoutShow : false,
        bookShow : false
    },
    reducers: {
        LOGIN : (state , action) => {
            state.loginClicked = action.payload;
        },
        LOGINSHOW : (state , action) => {
            state.loginShow = action.payload;
        },
        LOGOUTSHOW : (state,action) => {
            state.logoutShow = action.payload;
        },
        BOOKSHOW : (state,action) => {
            state.bookShow = action.payload;
        }

    }
})  
export const dataActions = dataSlice.actions
// const {actions,reducer} = dataSlice;
// export const { LOGIN, LOGINSHOW, LOGOUTSHOW,BOOKSHOW } = actions;
// export default reducer ;
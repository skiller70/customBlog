import { createReducer } from "@reduxjs/toolkit";


const initialState = {
ERROR : false,
ERROR_STATUS : '',
TOAST_ERROR : "",
TOAST_MESSAGE : "",
TOAST_OPEN : false

}


export const Error_handler = createReducer(initialState,{
setGlobalError : (state,action)=>{
state.ERROR = action.payload.error
state.ERROR_STATUS = action.payload.error_status
},
setToastError : (state,action)=>{
    state.TOAST_ERROR = action.payload.error_status
    state.TOAST_MESSAGE = action.payload.toast_msg
    state.TOAST_OPEN = action.payload.toast_open
}
})
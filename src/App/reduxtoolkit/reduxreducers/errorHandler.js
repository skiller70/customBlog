import { createReducer } from "@reduxjs/toolkit";


const initialState = {
ERROR : false,
ERROR_STATUS : ''


}


export const Error_handler = createReducer(initialState,{
setGlobalError : (state,action)=>{
state.ERROR = action.payload.error
state.ERROR_STATUS = action.payload.error_status
}

})
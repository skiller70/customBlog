import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    LOADING : false,
    PROFILE : {},
    ERROR : false
}
export const USER_PROFILE = createReducer(initialState,{

setLoading : (state,action)=>{
state.LOADING = action.payload
},
setProfile: (state,action)=>{
state.PROFILE = action.payload
},
setError :(state,action)=>{
    state.ERROR = action.payload
}


})
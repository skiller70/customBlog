import {createReducer} from "@reduxjs/toolkit"


const initialState = {
LOADING : false,
USERNAME : null,
ERROR : ""

}
export const searchData = createReducer(initialState,{
    searchUsername : (state,action)=>{
        state.USERNAME = action.payload
        if(action.payload){
            state.ERROR = "user already exist"
        }


    },
    searchLoading : (state,action)=>{
        state.LOADING = action.payload
    }
})
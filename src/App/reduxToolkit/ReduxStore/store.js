import { configureStore } from "@reduxjs/toolkit";
import dialogReducers from "../ReduxReducers/dialogReducers";


export const store = configureStore({

reducer : {isRegisterOpen : dialogReducers }


})


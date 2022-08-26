import { configureStore } from "@reduxjs/toolkit";
import dialogReducers from "../ReduxReducers/dialogReducers";


export const Store = configureStore({

reducer : {isRegisterOpen : dialogReducers }


})


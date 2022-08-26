import { configureStore } from "@reduxjs/toolkit";
import dialogReducers from "../reduxreducers/dialogReducers"

export const Store = configureStore({

reducer : {isRegisterOpen : dialogReducers }


})


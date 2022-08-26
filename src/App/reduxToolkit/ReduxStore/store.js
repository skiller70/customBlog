import { configureStore } from "@reduxjs/toolkit";
import dialogReducers from "../reduxreducers/dialogReducers"

 export const store = configureStore({

reducer : {isRegisterOpen : dialogReducers }


})


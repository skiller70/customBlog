import { configureStore } from "@reduxjs/toolkit";
import dialogReducers from "./dialogReducers"

 export const store = configureStore({

reducer : {isRegisterOpen : dialogReducers }


})


import { configureStore } from "@reduxjs/toolkit";
import dialogReducers from "../reduxreducers/dialogReducers"

 const store = configureStore({

reducer : {isRegisterOpen : dialogReducers }


})

export default store;
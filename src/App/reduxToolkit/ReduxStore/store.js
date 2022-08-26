import { configureStore } from "@reduxjs/toolkit";
import dialogReducers from "../ReduxReducers/dialogReducers";


const store = configureStore({

reducer : {isRegisterOpen : dialogReducers }


})

export default store;
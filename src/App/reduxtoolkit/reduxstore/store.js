import { configureStore} from "@reduxjs/toolkit";
import dialogReducers from "../reduxreducers/dialogReducers"
import createSagaMiddleware from "@redux-saga/core";
import sagaWatcher from "../reduxsaga/sagawatch/sagaWatcher";
const saga = createSagaMiddleware()

 export const store = configureStore({

reducer : {isRegisterOpen : dialogReducers },
middleware : (getDefaultMiddleware)=>getDefaultMiddleware().concat(saga)


})

saga.run(sagaWatcher);
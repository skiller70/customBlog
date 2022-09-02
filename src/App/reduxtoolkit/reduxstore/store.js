import { configureStore} from "@reduxjs/toolkit";
import dialogReducers from "../reduxreducers/dialogReducers"
import createSagaMiddleware from 'redux-saga'
import sagaWatcher from "../reduxsaga/sagawatch/sagaWatcher";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";
import {USER_PROFILE} from "../reduxreducers/userProfile"
import { allPopup } from "../reduxreducers/popUp";
const {
    createReduxHistory,
    routerMiddleware,
    routerReducer
  } = createReduxHistoryContext({ history: createBrowserHistory() });


const saga = createSagaMiddleware()


 export const store = configureStore({

reducer : {isRegisterOpen : dialogReducers,userProfile : USER_PROFILE, popup:allPopup,router: routerReducer },
middleware : (getDefaultMiddleware)=>getDefaultMiddleware().concat(saga,routerMiddleware)


})
export const history = createReduxHistory(store);

saga.run(sagaWatcher);
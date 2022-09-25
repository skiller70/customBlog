import { configureStore} from "@reduxjs/toolkit";
import dialogReducers from "../reduxreducers/dialogReducers"
import createSagaMiddleware from 'redux-saga'
import sagaWatcher from "../reduxsaga/sagawatch/sagaWatcher";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";
import {USER_PROFILE} from "../reduxreducers/userProfile"
import { allPopup } from "../reduxreducers/popUp";
import {searchData} from "../reduxreducers/searchData"
import { Error_handler } from "../reduxreducers/errorHandler";
import {post_comment} from "../reduxreducers/postComments"
const {
    createReduxHistory,
    routerMiddleware,
    routerReducer
  } = createReduxHistoryContext({ history: createBrowserHistory() });


const saga = createSagaMiddleware()


 export const store = configureStore({

reducer : {isRegisterOpen : dialogReducers,userProfile : USER_PROFILE, popup:allPopup,errorHandler : Error_handler,searchUser : searchData,router: routerReducer,postingComment:post_comment },
middleware : (getDefaultMiddleware)=>getDefaultMiddleware().concat(saga,routerMiddleware)


})
export const history = createReduxHistory(store);

saga.run(sagaWatcher);
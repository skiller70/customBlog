import {         put } from "redux-saga/effects";


export function* after_post_blog (){
yield put({ type: "setLoading", payload: false });
  yield put({ type: "setUploadPop", payload: {isOpen:false} });

}
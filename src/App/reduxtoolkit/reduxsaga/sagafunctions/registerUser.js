import axios from "axios";
import { call, takeLatest, takeEvery, put } from "redux-saga/effects";
import { REGISTER_END_POINT } from "../../../components/api/ApiEndpoint";
import { push } from "redux-first-history";
import jwt from "jwt-decode";
export function* register_users(action) {
  console.log(action.payload);
  
  try {
    yield put({ type: "setLoading", payload: true });
    const result = yield call(axios.post,REGISTER_END_POINT, action.payload);
    console.log(result.data)
    yield localStorage.setItem("token", result.data);
    yield put({ type: "setLoading", payload: false });
    yield push("/");
  } catch (error) {
    yield put({ type: "setError", payload: true });
    yield put({ type: "setLoading", payload: false });
  }

  // yield console.log("register")
}

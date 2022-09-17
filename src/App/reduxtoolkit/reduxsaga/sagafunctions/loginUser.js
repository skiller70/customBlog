import { LOGIN_END_POINT } from "../../../components/api/ApiEndpoint";
import { put, call } from "redux-saga/effects";
import axios from "axios";
export function* login_users(action) {
  try {
    yield put({ type: "setLoading", payload: true });
    const result = yield call(axios.post, LOGIN_END_POINT, action.payload);
 if(result.status === 200){
  localStorage.setItem("token", result.data);
  yield put({ type: "@@router/LOCATION_CHANGE" });
  yield put({ type: "setLoading", payload: false });
  yield put({ type: "setLoginPop", payload: { isOpen: false } });
 }else {
  yield put({type:"setGlobalError",payload:{error:true,error_status : result.data}})
  yield put({ type: "setLoading", payload: false });
  
 }
   

  } catch (error) {
    if (error) console.log("login failed");

    yield put({ type: "setLoading", payload: false });
  }
}

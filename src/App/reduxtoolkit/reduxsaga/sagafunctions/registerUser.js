import axios from "axios";
import { call, delay, put } from "redux-saga/effects";
import { REGISTER_END_POINT } from "../../../components/api/ApiEndpoint";

export function* register_users(action) {
  console.log(action.payload);

  try {
    yield put({ type: "setLoading", payload: true });

    const result = yield call(axios.post, REGISTER_END_POINT, action.payload);
    console.log(result.data);
    yield localStorage.setItem("token", result.data);
    yield put({ type: "@@router/LOCATION_CHANGE" });
    yield put({ type: "setRegisterPop", payload: {isOpen:false} });
    yield put({ type: "setDrawerPop", payload: {isOpen:false} });
    yield put({ type: "setLoading", payload: false });
    yield put({ type: "setToastError", payload: { error_status: "success",toast_msg : "register successfully",toast_open:true } });
    yield delay(5000)
    yield put({ type: "setToastError", payload: { error_status: "",toast_msg : "",toast_open:false} });
  } catch (error) {
    // yield put({ type: "setError", payload: true });
    yield put({ type: "setLoading", payload: false });
    yield put({ type: "setToastError", payload: { error_status: "error",toast_msg : "server error failed to register please try again ",toast_open:true } });
    yield delay(5000)
    yield put({ type: "setToastError", payload: { error_status: "",toast_msg : "",toast_open:false} });
  }

  // yield console.log("register")
}

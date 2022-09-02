import { put } from "redux-saga/effects";

export function* user_logout() {
  try {
    yield put({ type: "setLoading", payload: true });
    yield localStorage.removeItem("token")
    yield put({ type: "setProfile", payload: "" });
    yield put({ type: "setLoading", payload: false });
  } catch (error) {
    if (error) {
      console.log("failed to logout");
      yield put({ type: "setLoading", payload: false });
    }
  }
}

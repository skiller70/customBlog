import { put,delay } from "redux-saga/effects";

export function* user_logout() {
  try {
    yield put({ type: "setLoading", payload: true });
    yield localStorage.removeItem("token");
    yield put({ type: "setProfile", payload: "" });
    yield put({ type: "setLoading", payload: false });
    yield put({
      type: "setToastError",
      payload: {
        error_status: "success",
        toast_msg: "logout successfully",
        toast_open: true,
      },
    });
    yield delay(2000);
    yield put({
      type: "setToastError",
      payload: { error_status: "", toast_msg: "", toast_open: false },
    });
  } catch (error) {
    if (error) {
      yield put({ type: "setLoading", payload: false });
      yield put({
        type: "setToastError",
        payload: {
          error_status: "error",
          toast_msg: "failed to logout",
          toast_open: true,
        },
      });
      yield delay(2000);
      yield put({
        type: "setToastError",
        payload: { error_status: "", toast_msg: "", toast_open: false },
      });
    }
  }
}

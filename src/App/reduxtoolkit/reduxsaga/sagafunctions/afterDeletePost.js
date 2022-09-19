import { put, delay } from "redux-saga/effects";

export function* after_delete_post(action) {
    yield console.log(action.payload)
  try {
    if (action.payload) {
        yield put({
          type: "setToastError",
          payload: {
            error_status: "error",
            toast_msg: "failed to delete post please try again later",
            toast_open: true,
          },
        });
        yield delay(3000);
        yield put({
          type: "setToastError",
          payload: { error_status: "", toast_msg: "", toast_open: false },
        });
      } else {
        yield put({
          type: "setToastError",
          payload: {
            error_status: "success",
            toast_msg: "post delete successfully",
            toast_open: true,
          },
        });
        yield delay(3000);
        yield put({
          type: "setToastError",
          payload: { error_status: "", toast_msg: "", toast_open: false },
        });
      }




  } catch (error) {
    

    yield put({
        type: "setToastError",
        payload: {
          error_status: "error",
          toast_msg: "server error failed to delete post please try again later",
          toast_open: true,
        },
      });
      yield delay(3000);
      yield put({
        type: "setToastError",
        payload: { error_status: "", toast_msg: "", toast_open: false },
      });


  }
}

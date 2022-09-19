import { put, call } from "redux-saga/effects";
import { MAIN_END_POINT } from "../../../components/api/ApiEndpoint";
import axios from "axios";
export function* search_username(action) {
  try {
    yield put({ type: "searchLoading", payload: true });

    const result = yield call(
      axios.get,
      `${MAIN_END_POINT}/searchUsername${action.payload}`
    );

    yield put({ type: "searchUsername", payload: result.data });
    yield put({ type: "searchLoading", payload: false });
    
  } catch (error) {
    yield put({ type: "searchLoading", payload: false });
  }
}

import {takeLatest} from "redux-saga/effects"
import saga_test from "../sagafunctions/test";
function* sagaWatcher(){

   yield takeLatest("testSaga",saga_test)
}

export default sagaWatcher;
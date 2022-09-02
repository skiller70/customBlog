import { takeLatest} from "redux-saga/effects"
import saga_test from "../sagafunctions/test";
import { route_actions } from "../sagafunctions/routeActions";
import {register_users} from "../sagafunctions/registerUser"
import {login_users} from "../sagafunctions/loginUser"
function* sagaWatcher(){

   yield takeLatest("testSaga",saga_test)
   yield takeLatest("@@router/LOCATION_CHANGE",route_actions)
   yield takeLatest("REGISTER_USER",register_users)
   yield takeLatest("LOGIN_USER",login_users)
}

export default sagaWatcher;
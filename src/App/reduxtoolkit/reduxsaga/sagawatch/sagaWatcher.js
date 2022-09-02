import { takeLatest} from "redux-saga/effects"
import saga_test from "../sagafunctions/test";
import { route_actions } from "../sagafunctions/routeActions";
import {register_users} from "../sagafunctions/registerUser"
import {login_users} from "../sagafunctions/loginUser"
import {user_logout} from "../sagafunctions/logoutUser"
function* sagaWatcher(){

   yield takeLatest("testSaga",saga_test)
   yield takeLatest("@@router/LOCATION_CHANGE",route_actions)
   yield takeLatest("REGISTER_USER",register_users)
   yield takeLatest("LOGIN_USER",login_users)
   yield takeLatest("LOGOUT_USER",user_logout)
}

export default sagaWatcher;
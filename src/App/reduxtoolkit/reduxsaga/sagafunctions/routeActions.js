import jwt from "jwt-decode";
import { put ,select} from "redux-saga/effects";

 export function* route_actions(action) {

try {
  const profile = yield select((state)=>state.userProfile.PROFILE.id)
const initialToken = yield localStorage.getItem("token")
console.log(profile)
  if(profile === undefined && initialToken !==  null){

    const token = yield localStorage.getItem("token");
    const decode = jwt(token);
    yield put({ type: "setProfile", payload: decode});
  }
 
  
} catch (error) {
  
 if(error)console.log("failed to login")
}
 

    
 
  
  
}


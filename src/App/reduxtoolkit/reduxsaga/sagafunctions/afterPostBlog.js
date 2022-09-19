import {put,delay} from "redux-saga/effects";


export function* after_post_blog (action){
try {
  if(action.payload){
    yield put({ type: "setToastError", payload: { error_status: "error",toast_msg : "failed to post please try again ",toast_open:true } });
    yield put({type :"setBlogPosting",payload : {blog_posting :false}})
    yield delay(4000)
    yield put({ type: "setToastError", payload: { error_status: "",toast_msg : "",toast_open:false} });


  }else{
    yield put({ type: "setToastError", payload: { error_status: "success",toast_msg : "blog post successfully ",toast_open:true } });
    yield delay(4000)
    yield put({ type: "setToastError", payload: { error_status: "",toast_msg : "",toast_open:false } });

  }
  yield put({ type: "setLoading", payload: false });
  yield put({ type: "setUploadPop", payload: {isOpen:false} });
  
} catch (error) {
  if(error){

  }
}
 


}
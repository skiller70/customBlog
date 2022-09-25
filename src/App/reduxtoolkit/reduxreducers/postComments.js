
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
POSTING_COMMENT : false,
POSTING_COMMENT_DETAIL : {}

}

export const post_comment = createReducer(initialState,{

setPostingComment : (state,action)=>{


state.POSTING_COMMENT = action.payload.postingComment
state.POSTING_COMMENT_DETAIL = action.payload.postingCommentDetail

    
}
    


})
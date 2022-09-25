import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  REGISTER_POP: false,
  EDIT_BLOG_POP: false,
  LOGIN_POP: false,
  UPDATING_BLOG: false,
  UPLOAD_POP: false,
  DRAWER_POP: false,
  deletePost_pop: false,
  deleteProps: "",
  BLOG_POST_LOADING : false, 
  BLOG_POSTING: false,
  BLOG_POSTING_DETAILS: {},
  GET_COMMENTS: false,
  GET_COMMENTS_PAGES: 0,
  COMMENT_POST_ID: "",
  GET_COMMENTS_PAGE_NUMBERS: 1,
  EDIT_BLOG_ID:"",
  EDIT_BLOG: {
    title: "",
    subject: "",
    content: "",
  },
};
export const allPopup = createReducer(initialState, {
  setRegisterPop: (state, action) => {
    state.REGISTER_POP = action.payload.isOpen;
  },
  setLoginPop: (state, action) => {
    state.LOGIN_POP = action.payload.isOpen;
  },
  setUploadPop: (state, action) => {
    state.UPLOAD_POP = action.payload.isOpen;
  },
  setDrawerPop: (state, action) => {
    state.DRAWER_POP = action.payload.isOpen;
  },
  setConfirmDelete: (state, action) => {
    state.deletePost_pop = action.payload.isOpen;
    state.deleteProps = action.payload.postId;
  },
  setBlogPosting: (state, action) => {
    state.BLOG_POSTING = action.payload.blog_posting;
    state.BLOG_POST_LOADING = action.payload.blog_post_loading;
   
    state.BLOG_POSTING_DETAILS = action.payload.blog_details;
  },
  setEditBlog: (state, action) => {
    state.EDIT_BLOG_POP = action.payload.isOpen;
    state.EDIT_BLOG.title = action.payload.title;
    state.EDIT_BLOG.subject = action.payload.subject;
    state.EDIT_BLOG.content = action.payload.content;
   state.EDIT_BLOG_ID = action.payload.postId
  },

  setGetComments: (state, action) => {
    state.GET_COMMENTS = action.payload.isOpen;
    state.COMMENT_POST_ID = action.payload.postId;
    state.GET_COMMENTS_PAGES = action.payload.pages;
  },
  nextPage: (state, action) => {
    state.GET_COMMENTS_PAGE_NUMBERS = action.payload.pageNumber;
  },
  setUpdatingBlog : (state,action)=>{
    state.UPDATING_BLOG = action.payload.updatingBlog
  }
});

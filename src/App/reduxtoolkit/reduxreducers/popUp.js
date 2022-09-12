import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  REGISTER_POP: false,
  LOGIN_POP: false,
  UPLOAD_POP: false,
  DRAWER_POP: false,
  deletePost_pop :false,
  deleteProps : ""
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
    state.deleteProps = action.payload.postId
  },
});

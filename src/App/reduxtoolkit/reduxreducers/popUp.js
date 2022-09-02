import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  REGISTER_POP: false,
  LOGIN_POP: false,
  UPLOAD_POP: false,
};
export const allPopup = createReducer(initialState, {
  setRegisterPop: (state, action) => {
    state.REGISTER_POP = action.payload;
  },
  setLoginPop: (state, action) => {
    state.LOGIN_POP = action.payload;
  },
  setUploadPop: (state, action) => {
    state.UPLOAD_POP = action.payload;
  },
});

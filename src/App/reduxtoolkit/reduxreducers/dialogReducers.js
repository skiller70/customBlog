import {createReducer} from "@reduxjs/toolkit";

const initialState = {
  register_isOpen: false,
};
const dialogReducers = createReducer(initialState, {
  REGISTER_DIALOG: (state, action) => {
    state.register_isOpen = action.payload;
  },
});


export default dialogReducers;
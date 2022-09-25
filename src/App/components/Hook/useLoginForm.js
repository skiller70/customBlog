import { useState } from "react";
import {useDispatch} from "react-redux"

// CUSTOM FORM HOOKS *******************************************************************************************
export const useLoginForm = (initialFValue) => {
  const dispatch = useDispatch()
  const [canSubmit, setCanSubmit] = useState(false);

  
  const onValid = () => {
    setCanSubmit(true);
  };
  const onInvalid = () => {
    setCanSubmit(false);
  };
  const onValidSubmit = (model) => {
    //REDUX DISPATCH
   dispatch({type:"LOGIN_USER",payload : model})

  };

  return { onValid, onInvalid, onValidSubmit, canSubmit };
};

import { useState } from "react";

// CUSTOM FORM HOOKS *******************************************************************************************
export const useLoginForm = (initialFValue) => {
  const [canSubmit, setCanSubmit] = useState(false);

  console.log(canSubmit)
  const onValid = () => {
    setCanSubmit(true);
  };
  const onInvalid = () => {
    setCanSubmit(false);
  };
  const onValidSubmit = (model) => {
    //REDUX DISPATCH
    console.log(model)
  };

  return { onValid, onInvalid, onValidSubmit, canSubmit };
};

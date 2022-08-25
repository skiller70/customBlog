import  { useState } from "react";
import { addValidationRule } from "formsy-react";



// CUSTOM FORM HOOKS *******************************************************************************************
export const useForm = (initialFValue) => {
  const [canSubmit, setCanSubmit] = useState(false);

  addValidationRule("isDate", (values, value) => {
    if (value) {
      const dateOfYear = value.getFullYear();
      return dateOfYear <= 2004;
    }
  });


  const onValid = () => {
    setCanSubmit(true);
  };
  const onInvalid = () => {
    setCanSubmit(false);
  };
  const onValidSubmit = (model) => {
    //REDUX DISPATCH
  };

  return { onValid, onInvalid, onValidSubmit, canSubmit };
};



import  { useState } from "react";
import { addValidationRule } from "formsy-react";
import {useDispatch} from "react-redux"


// CUSTOM FORM HOOKS *******************************************************************************************
export const useForm = (initialFValue) => {
  const dispatch = useDispatch()
 
  const [canSubmit, setCanSubmit] = useState(false);


  addValidationRule("isDate", (values, value) => {
    if (value) {
      const dateOfYear = value.getFullYear();
      return dateOfYear <= 2015;
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
    const dob = model.DateOfBirth.toDateString()
    const {name,username,email,password} = model
   dispatch({type:"REGISTER_USER",payload:{name,username,email,password,dob}})
  };

  return { onValid, onInvalid, onValidSubmit, canSubmit };
};



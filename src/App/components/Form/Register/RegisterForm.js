import { Grid, Button } from "@mui/material";
import Formsy from "formsy-react";
import InputController from "../InputController";
import useErrors from "../../Hook/useErrors";

import { useForm } from "../../Hook/useForm";
import { makeStyles } from "@mui/styles";
import DateOFBirth from "../DateOfBirth";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& .MuiFormControl-root": {
      margin: theme.spacing(1.5),
      width: "80%",
    },
  },
}));

function RegisterForm(props) {
  const classes = useStyles();
  const { commonMessage, passwordError, usernameError } = useErrors();
  const { onValid, onInvalid, onValidSubmit, canSubmit } = useForm();


  return (
    <Formsy
      autoComplete="off"
      className={classes.root}
      onValid={onValid}
      onValidSubmit={onValidSubmit}
      onInvalid={onInvalid}
    >
      <Grid container>
        <Grid item xs={12} md={6}>
          <InputController
            validations="minLength:3,maxLength:12,isAlpha"
            validationErrors={commonMessage}
            name="name"
            label="Name"
            required
          />
          <InputController
            name="username"
            label="User Name"
            validations="minLength:6,isAlphanumeric,maxLength:16 "
            validationErrors={usernameError}
          />

          <InputController
            name="email"
            label="User Email"
            validations="isEmail"
            validationErrors={commonMessage}
            type="email"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <InputController
            name="password"
            label="Password"
            validations="minLength:8,maxLength:25 "
            validationErrors={passwordError}
            type="password"
          />
          <InputController  
            name="password"
            label="Your confirm password"
            validations="equalsField:password,minLength:8"
            validationErrors={passwordError}
            type="password"
          />
          <DateOFBirth name="DateOfBirth"validations="isDate"
            validationErrors={commonMessage}/>
        </Grid>
        <Grid item xs={4} md={5}></Grid>
        <Grid item xs={8} md={3}>
          <Button type="submit" disabled={!canSubmit} sx={{ marginTop: "20px" }} variant="contained">
            
            Register
          </Button>
        </Grid>
        <Grid item xs={0} md={4}></Grid>
      </Grid>
    </Formsy>
  );
}

export default RegisterForm;

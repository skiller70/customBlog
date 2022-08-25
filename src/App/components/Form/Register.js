import { Paper } from "@mui/material";
import React from "react";
import RegisterForm from "./RegisterForm";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  customBox: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
}));
function Register(props) {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.customBox}>
        <RegisterForm />
      </Paper>
    </>
  );
}

export default Register;

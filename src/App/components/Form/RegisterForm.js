import { FormControl, Grid } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    "& .MuiFormControl-root": {
      margin: theme.spacing(1),
      width: "80%",
    },
  },
}));
const initialFValue = {
  name: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const fool = "rahul"
const testObj = {
name : "fully",
passion: "baka"

}





function RegisterForm(props) {
  const classes = useStyles();
  const [values, SetValues] = useState(initialFValue);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    SetValues({
        ...values,
        [name] : value
    });
  };




  return (
    <>
      <FormControl className={classes.root}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <TextField
              onChange={handleInputChange}
              value={values.name}
              name="name"
              variant="outlined"
              label="Name"
            ></TextField>

            <TextField
              value={values.username}
              name="username"
              label="User name"
              variant="outlined"
              onChange={handleInputChange}
            ></TextField>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </FormControl>
    </>
  );
}

export default RegisterForm;

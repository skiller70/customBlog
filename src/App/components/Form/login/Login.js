import React from "react";
import Formsy from "formsy-react";
import InputController from "../InputController";
import { makeStyles } from "@mui/styles";
import Control from "../../ReuseComponents/Control";
import { Grid } from "@mui/material";
import { Stack } from "@mui/system";
import { useLoginForm } from "../../Hook/useLoginForm";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      margin: theme.spacing(1.5),
      width: "85%",
    },
  },
}));
function Login(props) {
  const classes = useStyles();

  const { onValid, onInvalid, onValidSubmit, canSubmit } = useLoginForm();

  return (
    <Formsy
    className={classes.root}
      onValid={onValid}
      onValidSubmit={onValidSubmit}
      onInvalid={onInvalid}
      
    >
      <Grid container>
        <Grid md={12} xs={12} item>
          <InputController
            type="text"
            name="username"
            label="Username"
            required
          />
        </Grid>

        <Grid md={12} xs={12} item>
          {" "}
          <InputController
            type="password"
            name="password"
            label="Password"
            required
          />{" "}
        </Grid>

        <Grid item md={12} xs={12}>
          <Stack
            sx={{ paddingLeft: "35%" }}
            direction="row"
            alignItems="center"
          >
            <Control.Button
              type="submit"
            disabled={!canSubmit}
              color="primary"
              variant="outlined"
              text="login"
              sx={{ paddingX: "10%" }}
            />
          </Stack>
        </Grid>
      </Grid>
    </Formsy>
  );
}

export default Login;

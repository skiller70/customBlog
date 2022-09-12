import React from "react";
import RegisterForm from "../Form/Register/RegisterForm";
import Control from "../ReuseComponents/Control";
import { makeStyles } from "@mui/styles";
import { Grid, Toolbar } from "@mui/material";
import Login from "../Form/login/Login";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import { useDispatch, useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    [theme.breakpoints.only("md")]: {
      display: "none",
    },
  },
}));

function Navbar(props) {
  const dispatch = useDispatch();
  const POPUP = useSelector((state) => state.popup);
  const USER_STATUS = useSelector((state) => state.userProfile.PROFILE.id);


  const classes = useStyles();
 

  return (
    <>
      <AppBar position="fixed" elevation={2}>
        <Toolbar className={classes.root}>
          <Grid container>
            <Grid sx={{ display: { xs: "block", md: "none" } }} item>
           
              <Control.IconButton onClick={()=>{
                dispatch({type:"setDrawerPop",payload : {isOpen : true}})
              }}>
                <MenuIcon color="primary" fontSize="large" />
              </Control.IconButton>
            </Grid>
            <Grid item sm>
            <img style={{width : 50}} src={require("./image/mylogo.png")} alt="" />
            </Grid>
            <Grid sx={{ display: { xs: "none", md: "block" } }} item>
              {USER_STATUS ? null : (
                <Control.Button
                  onClick={() =>
                    dispatch({ type: "setLoginPop", payload : {isOpen : true} })
                  }
                  sx={{ margin: "6px" }}
                  variant="outlined"
                  text="Login"
                />
              )}

              {USER_STATUS ? (
                <Control.Button
                  onClick={() => {
                    localStorage.removeItem("token");
                    dispatch({type:"LOGOUT_USER"})
                  }}
                  sx={{ margin: "6px" }}
                  variant="outlined"
                  text="Logout"
                />
              ) : (
                <Control.Button
                  text="  Sign Up"
                  onClick={() =>
                    dispatch({ type: "setRegisterPop", payload : {isOpen : true} })
                  }
                  variant="outlined"
                />
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Control.Popup
        maxWidth="sm"
        title="Login"
        isOpen={POPUP.LOGIN_POP}
        setIsOpen="setLoginPop"
      >
        <Login />
      </Control.Popup>

      <Control.Popup
        title="Sign Up"
        isOpen={POPUP.REGISTER_POP}
        setIsOpen="setRegisterPop"
      >
        <RegisterForm />
      </Control.Popup>

      <Control.Drawer setOpenDrawer="setDrawerPop" openDrawer={POPUP.DRAWER_POP}>
        {USER_STATUS ? null : (
          <Control.Button
            onClick={() => dispatch({ type: "setLoginPop", payload: true })}
            sx={{ margin: "6px" }}
            variant="outlined"
            text="Login"
          />
        )}

        <br />

        {USER_STATUS ? (
          <Control.Button
            onClick={() => {
              localStorage.removeItem("token");
              dispatch({type:"LOGOUT_USER"})
            }}
            sx={{ margin: "6px" }}
            variant="outlined"
            text="Logout"
          />
        ) : (
          <Control.Button
            text="  Sign Up"
            onClick={() =>  dispatch({ type: "setRegisterPop", payload: true })}
            variant="outlined"
          />
        )}
        <br />
      </Control.Drawer>
    </>
  );
}

export default Navbar;

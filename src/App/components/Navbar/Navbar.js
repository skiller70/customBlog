import React, { useState } from "react";
import RegisterForm from "../Form/Register/RegisterForm";
import Control from "../ReuseComponents/Control";
import { makeStyles } from "@mui/styles";
import { Grid, Toolbar } from "@mui/material";
import Login from "../Form/login/Login";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor : "white",
    [theme.breakpoints.only("md")]: {
      display: "none",
    },
  },

}));

function Navbar(props) {
  const classes = useStyles();
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isOpenLogin,setIsOpenLogin] = useState(false)
  return (
    <>
      <AppBar  position="fixed"   elevation={2}>
        <Toolbar className={classes.root} >
          <Grid container>
            <Grid sx={{ display: { xs: "block", md: "none" } }} item>
              <Control.IconButton onClick={() => setOpenDrawer(true)}>
                <MenuIcon color="primary" fontSize="large" />
              </Control.IconButton>
            </Grid>
            <Grid item sm>
             
       
            </Grid>
            <Grid sx={{ display: { xs: "none", md: "block" } }} item>
              <Control.Button
              onClick={() => setIsOpenLogin(true)}
                sx={{ margin: "6px" }}
                variant="outlined"
                text="Login"
              />

              <Control.Button
                text="  Sign Up"
                onClick={() => setIsOpenSignUp(true)}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>


      <Control.Popup   maxWidth="sm" title="Login" isOpen={isOpenLogin} setIsOpen={setIsOpenLogin}>
        <Login/>
      </Control.Popup>

      
      <Control.Popup title="Sign Up" isOpen={isOpenSignUp} setIsOpen={setIsOpenSignUp}>
        <RegisterForm />
      </Control.Popup>

      <Control.Drawer setOpenDrawer={setOpenDrawer} openDrawer={openDrawer}>
        <Control.Button
          text="  Sign Up"
          onClick={() => setIsOpenSignUp(true)}
          variant="outlined"
        />
        <br/>
         <Control.Button
              onClick={() => setIsOpenLogin(true)}
                sx={{ margin: "6px" }}
                variant="outlined"
                text="Login"
              />
      </Control.Drawer>
    </>
  );
}

export default Navbar;

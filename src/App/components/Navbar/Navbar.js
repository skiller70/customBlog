import React, { useState } from "react";
import RegisterForm from "../Form/Register/RegisterForm";
import Control from "../ReuseComponents/Control";
import { makeStyles } from "@mui/styles";
import { Grid, Toolbar } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.only("md")]: {
      display: "none",
    },
  },
  responsiveContainer: {
    display: "none",
  },
}));

function Navbar(props) {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <AppBar position="static" elevation={2}>
        <Toolbar className={classes.root}>
          <Grid container>
            <Grid sx={{ display: { xs: "block", md: "none" } }} item>
              <Control.IconButton onClick={() => setOpenDrawer(true)}>
                <MenuIcon color="primary" fontSize="large" />
              </Control.IconButton>
            </Grid>
            <Grid item sm></Grid>
            <Grid sx={{ display: { xs: "none", md: "block" } }} item>
              <Control.Button
                sx={{ margin: "6px" }}
                variant="outlined"
                text="Login"
              />

              <Control.Button
                text="  Sign Up"
                onClick={() => setIsOpen(true)}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Control.Popup
        title="Register User Form"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <RegisterForm />
      </Control.Popup>

      <Control.Drawer setOpenDrawer={setOpenDrawer} openDrawer={openDrawer}>
        <Control.Button
          text="  Sign Up"
          onClick={() => setIsOpen(true)}
          variant="outlined"
        />
      </Control.Drawer>
    </>
  );
}

export default Navbar;

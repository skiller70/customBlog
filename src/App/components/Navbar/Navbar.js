import React from "react";
import Button from "@mui/material/Button";

import { makeStyles } from "@mui/styles";
import { Grid, InputBase, Toolbar, } from "@mui/material";

import AppBar from "@mui/material/AppBar";

const useStyles = makeStyles(theme=>({
  root: {
  
  }

}));

function Navbar(props) {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" >
        <Toolbar>
          <Grid  className={classes.root}container>
            <Grid item>
              <InputBase />
            </Grid>
            <Grid item sm></Grid>
            <Grid item   >
            
             

              <Button sx={{ mr: "1rem" }} variant="outlined">Login</Button>
              <Button   variant="outlined">Sign Up</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;

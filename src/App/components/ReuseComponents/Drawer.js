import React from "react";
import { Drawer as MuiDrawer, Box, Typography, Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import Control from "./Control";
import { useDispatch } from "react-redux";

function Drawer(props) {
  const dispatch = useDispatch();
  const { openDrawer, setOpenDrawer, children } = props;
  return (
    <MuiDrawer
      onClose={() => {
        ;
      }}
      variant="temporary"
      open={openDrawer}
      anchor="left"
    >
      <Grid alignContent="center" style={{ minHeight: "15%" }} container>
        <Grid xs={8} item>
          <Typography textAlign="center" component="div" variant="h5">
            App Menu
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Control.Button
            onClick={() => {
              dispatch({type :`${setOpenDrawer}`, payload : false});
            }}
            text="X"
            variant="contained"
            color="secondary"
            size="large"
          />
        </Grid>
      </Grid>

      <Divider />
      <Box p={2} width="270px" textAlign="center" role="presentation">
        <Typography component="div" variant="h5">
          {children}
        </Typography>
      </Box>
    </MuiDrawer>
  );
}

export default Drawer;

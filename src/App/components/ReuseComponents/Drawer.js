import React from "react";
import { Drawer as MuiDrawer, Box, Typography, Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import Control from "./Control";

function Drawer(props) {
  const { openDrawer, setOpenDrawer, children } = props;
  return (
    <MuiDrawer
      onClose={() => {
        setOpenDrawer(false);
      }}
      variant="temporary"
      open={openDrawer}
      anchor="left"
    >
      <Grid alignContent="center" style={{ minHeight: "15%" }} container>
        <Grid xs={9} item>
          <Typography textAlign="center" component="div" variant="h5">
            App Menu
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Control.Button
            onClick={() => {
              setOpenDrawer(false);
            }}
            text="X"
            variant="contained"
            color="secondary"
            size="small"
          />
        </Grid>
      </Grid>

      <Divider />
      <Box p={2} width="320px" textAlign="center" role="presentation">
        <Typography component="div" variant="h5">
          {children}
        </Typography>
      </Box>
    </MuiDrawer>
  );
}

export default Drawer;
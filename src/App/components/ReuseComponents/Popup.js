import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Control from "../ReuseComponents/Control";

function Popup(props) {
  const { title, children, isOpen, setIsOpen } = props;
  return (
    <>
      <Dialog maxWidth="md" open={isOpen}>
        <DialogTitle>
          <div>
            <Grid container>
              <Grid  xs={9} md={11} item> 
                <Typography variant="h5" component="div">
                  {title}
                </Typography>
              </Grid>
            
              <Grid md={1} xs={3} item>
                <Control.Button
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  variant="contained"
                  color="secondary"
                  text="X"
                />
              </Grid>
            </Grid>
          </div>
        </DialogTitle>

        <DialogContent dividers>{children}</DialogContent>
      </Dialog>
    </>
  );
}

export default Popup;

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
  const { title, children, isOpen, setIsOpen,maxWidth } = props;
  return (
    <>
      <Dialog maxWidth={maxWidth || "md"} open={isOpen}>
        <DialogTitle>
         
            <Grid container>  
              <Grid  xs={9} md={10} item> 
                <Typography variant="h5" component="div">
                  {title}
                </Typography>
              </Grid>
            
              <Grid md={2} xs={2} item>
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
          
        </DialogTitle>

        <DialogContent dividers>{children}</DialogContent>
      </Dialog>
    </>
  );
}

export default Popup;

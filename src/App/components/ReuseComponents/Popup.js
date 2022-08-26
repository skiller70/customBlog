import { Dialog, DialogContent, DialogTitle, FormControl, Typography } from "@mui/material";
import React from "react";
import Control from "../ReuseComponents/Control"
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
   
  
  
  dialogTitle: {
      margin : theme.spacing(1.2),
      display : "flex"

    },
  }));
  
function Popup(props) {
    const classes = useStyles();
  const { title, children, isOpen,setIsOpen } = props;
  return (
    <>
      <Dialog maxWidth="md" open={isOpen}>
        <DialogTitle >
          <div className={classes.dialogTitle}>
            <Typography variant="h5" component="div"style={{flexGrow : 1,paddingLeft:15}}>
              {title}
            </Typography>
            
            <Control.Button onClick={()=>{setIsOpen(false)}} variant="contained" color="secondary" text="X"/>

            
          </div>
        </DialogTitle>

        <DialogContent dividers>{children}</DialogContent>
      </Dialog>
    </>
  );
}

export default Popup;

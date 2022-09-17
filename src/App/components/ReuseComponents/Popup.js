import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Control from "../ReuseComponents/Control";
import LoadingSpinner from "./LoadingSpinner";
import Backdrop from '@mui/material/Backdrop';

function Popup(props) {
  const LOADING = useSelector(state=>state.userProfile.LOADING)
  const dispatch = useDispatch()
  const { title, children, isOpen, setIsOpen,maxWidth ,closeBtnColor,closeBtnVariant } = props;
  return (
    <>

      <Dialog maxWidth={maxWidth || "md"} open={isOpen}>
        <DialogTitle>
     
            <Grid container>  
              <Grid  xs={9} sm={10} md={11} item> 
                <Typography variant="h5" component="div">
                  {title}
                </Typography>
              </Grid>
              
              <Grid md={1} sm={2} xs={3} item>
                <Control.Button
                  onClick={() => {
                    dispatch({type:setIsOpen,payload : {isOpen : false}});
                    dispatch({type:"searchUsername",payload : null});
                    dispatch({type:"setGlobalError",payload : {error : false,error_status : ""}});
                
                  }}
                  variant={closeBtnVariant || "contained"}
                  color={closeBtnColor || "secondary"}
                  text="X"
                />
              </Grid>
            </Grid>
          
        </DialogTitle>
     
        <DialogContent dividers>{children}</DialogContent>


        {LOADING?<Backdrop sx={{color:"#fff"}} open={true}><LoadingSpinner/></Backdrop>:null}
  
      </Dialog>
    </>
  );
}

export default Popup;

import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import React from "react";
import Control from "../ReuseComponents/Control";

function Popup(props) {
  const { title, children, isOpen, setIsOpen } = props;
  return (
    <>
      <Dialog maxWidth="md" open={isOpen}>
        <DialogTitle>
          <div>
            <Typography
              variant="h5"
              component="div"
              style={{ flexGrow: 1, paddingLeft: 15 }}
            >
              {title}
            </Typography>

            <Control.Button
              onClick={() => {
                setIsOpen(false);
              }}
              variant="contained"
              color="secondary"
              text="X"
            />
          </div>
        </DialogTitle>

        <DialogContent dividers>{children}</DialogContent>
      </Dialog>
    </>
  );
}

export default Popup;

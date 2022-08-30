import React from "react";
import { Button as MuiButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: theme.spacing(1),
  },
  label: {
    textTransform: "none",
  },
}));
function Button(props) {
  const classes = useStyles();
  const { sx, variant, children, onClick, color, size,text,...other } = props;
  return (
    <MuiButton
      classes={{ root: classes.root, label: classes.label }}
      sx={sx}
      color={color || "primary"}
      variant={variant || "contented"}
      size={size || "large"}
      onClick={onClick}
      {...other}
    >
      {text} 
    </MuiButton>
  );
}

export default Button;

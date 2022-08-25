import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0",
    height: "100%",
    width: "320px",
    backgroundColor : "#1A237E"
  },
}));

function SideBar(props) {
    const classes =useStyles()
  return <div className={classes.root}></div>;
}

export default SideBar;

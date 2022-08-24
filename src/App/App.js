import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import { theme } from "./components/customMaterialUI/createTheme/customTheme";
import { ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Register from "./components/Form/Register";
import { CssBaseline } from "@mui/material";
import React from "react";
import SideMenu from "./components/sideMenu/SideMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft : "320px",
    width : "100%"
  },
}));
function App() {
  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <SideMenu />
        <div className={classes.root}>
        <Navbar />

          <Register />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;

import React from "react";
import Navbar from "./components/Navbar/Navbar";
import customTheme from "./components/CustomMaterialUI/createTheme/customTheme";
import { ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Register from "./components/Form/Register";
import { CssBaseline } from "@mui/material";
import SideBar from "./components/SideMenu/SideBar";

const useStyles = makeStyles(() => ({
  root: {
    paddingLeft: "320px",
    width: "100%",
  },
}));
function App() {
  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />

        <SideBar />
        <div className={classes.root}>
          <Navbar />

          <Register />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;

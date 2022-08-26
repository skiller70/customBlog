import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { colors, CssBaseline } from "@mui/material";
import SideBar from "./components/SideMenu/SideBar";
import store from "./ReduxToolkit/ReduxStore/store";
import {Provider} from "react-redux"

const customTheme = createTheme({
  palette: {
    background: {
      default: "#E8EAF6",
    },
    secondary : {
      main : colors.red[500]
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
        },
      },
    },
  },
});

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
   <Provider  store={store}>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />

        <div >
          <Navbar />

        
        </div>
      </ThemeProvider>
      </Provider>
 
    </>
  );
}

export default App;

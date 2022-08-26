import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { colors, CssBaseline } from "@mui/material";
import {Provider} from "react-redux"
import {Store} from "./ReduxToolkit/ReduxStore/Store";

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


function App() {
  

  return (
    <>
  
      <ThemeProvider theme={customTheme}>
            <Provider store={Store}>
        <CssBaseline />

        <div >
          <Navbar />

        
        </div>
        </Provider>
      </ThemeProvider>
    
 
    </>
  );
}

export default App;

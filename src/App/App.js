import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { colors, CssBaseline } from "@mui/material";


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
            
        <CssBaseline />

        <div >
          <Navbar />

        
        </div>
       
      </ThemeProvider>
    
 
    </>
  );
}

export default App;

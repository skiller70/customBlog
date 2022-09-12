import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { colors, Paper } from "@mui/material";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MainMenu from "./components/mainmenu/MainMenu";
import { useDispatch } from "react-redux";

const queryClient = new QueryClient();
const customTheme = createTheme({
  palette: {
    background: {
      default: "#E8EAF6",
    },
    secondary: {
      main: colors.red[500],
    },
    dark: {
      main: "#E8EAF6",
    },
  },
  // components: {
  //   MuiAppBar: {
  //     styleOverrides: {
  //       root: {
  //         backgroundColor: "white",
  //       },
  //     },
  //   },
  // },
});

function App() {
  const dispatch = useDispatch();
  dispatch({ type: "@@router/LOCATION_CHANGE" });
  return (
    <React.Fragment>
      <CssBaseline />

      <ThemeProvider theme={customTheme}>
        <QueryClientProvider client={queryClient}>
          <Paper>
            <Navbar />
          </Paper>

          <Paper elevation={0} sx={{ marginTop: 10, height: "100%" }}>
            <MainMenu />
          </Paper>
     
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;

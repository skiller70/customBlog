import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { colors, Paper } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./reduxtoolkit/reduxstore/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MainMenu from "./components/mainmenu/MainMenu";

const queryClient = new QueryClient();
const customTheme = createTheme({
  palette: {
    background: {
      default: "#E8EAF6",
    },
    secondary: {
      main: colors.red[500],
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
  return (
    <React.Fragment>
      <CssBaseline />

      <Provider store={store}>
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
      </Provider>
    </React.Fragment>
  );
}

export default App;

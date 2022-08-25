import { createTheme } from "@mui/system"

export const customTheme = createTheme({
  palette : {
    background  :{
        default : "#E8EAF6"
    }
},
components: {
    MuiAppBar : {
        styleOverrides :{
            root : {
                backgroundColor : "white"
            }
        }
    }
}

})
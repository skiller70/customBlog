import { createTheme } from '@mui/material/styles';

export default customTheme = createTheme({
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
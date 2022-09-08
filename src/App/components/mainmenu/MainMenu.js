import { Grid,  } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Control from "../ReuseComponents/Control";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { Box } from "@mui/system";
import CreateBlog from "../createblog/CreateBlog";
import { useDispatch, useSelector } from "react-redux";
import AllBLogPosts from "./AllBLogPosts";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
  },

  addButton: {
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(10),
    },
  },
}));

//*****************************************************************************

function MainMenu(props) {




  const dispatch = useDispatch();
  const profile = useSelector((state) => state.userProfile.PROFILE);
  const POPUP = useSelector((state) => state.popup);
  const classes = useStyles();

  return (


    <Grid container>

      <Control.Popup isOpen={POPUP.UPLOAD_POP} setIsOpen="setUploadPop" title="Create Blog" >
      <CreateBlog/>
      </Control.Popup>
      
{console.log("render")}
      <Grid sm={0} md={2} item></Grid>
      <Grid sm={12} md={7} item>
        {/* UPLOAD BUTTON */}
        <Box
          sx={(theme) => ({
            position: "fixed",

            paddingLeft: 1,
            top: 480,
            zIndex: 1,
          })}
        >
          <Fab
            onClick={() => {
              if (profile.id) {
                dispatch({ type: "setUploadPop", payload: true });
              } else {
                dispatch({ type: "setLoginPop", payload: true });
              }
            }}
            className={classes.addButton}
            color="primary"
            aria-label="add"
          >
            <AddIcon />
          </Fab>
        </Box>
        {/* BLOGS CARDS        */}
        <AllBLogPosts/>

       


      </Grid>





      <Grid sm={0} md={3} item></Grid>
    </Grid>
   
  );
}

export default MainMenu;

import { Alert, Grid, Paper, Snackbar  } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Control from "../ReuseComponents/Control";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { Box } from "@mui/system";
import CreateBlog from "../createblog/CreateBlog";
import { useDispatch, useSelector } from "react-redux";
import AllBLogPosts from "./AllBLogPosts";
import DeletePost from "./DeletePost";

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
  const classes = useStyles();



  const dispatch = useDispatch();
  const profile = useSelector((state) => state.userProfile.PROFILE);
  const POPUP = useSelector((state) => state.popup);
  const ERRORS = useSelector((state) => state.errorHandler);

  // if(ERRORS.TOAST_OPEN){
  //   return setTimeout(()=>{
  //     dispatch({ type: "setToastError", payload: { error_status: "",toast_msg : "",toast_open:false } })
  //   },3000)
  // }
 
  

  return (
    <>
   
     <Paper elevation={0} sx={{ marginTop: 10, height: "100%" }}>
     <Box
          sx={(theme) => ({
            position: "fixed",

            marginLeft:"70%" ,
            top: "75%",
            zIndex: 1,
          })}
        >
          <Fab color='secondary'
            onClick={() => {
              if (profile.id) {
                dispatch({ type: "setUploadPop",payload : {isOpen : true}});
              } else {
                dispatch({ type: "setLoginPop", payload :{isOpen : true}});
              }
            }}
            className={classes.addButton}
            
            aria-label="add"
          >
            <AddIcon />
          </Fab>
        </Box>

        <Snackbar autoHideDuration={3000} sx={{marginTop:"4%"}} anchorOrigin={{ vertical: "top",horizontal: "right"}} open={ERRORS.TOAST_OPEN}>
      <Alert severity={ERRORS.TOAST_ERROR || "success"} sx={{ width: '100%' }}> {ERRORS.TOAST_MESSAGE}</Alert>
      </Snackbar>





      


      {/* UPLOAD POPUP */}
      <Control.Popup isOpen={POPUP.UPLOAD_POP} setIsOpen="setUploadPop" title="Create Blog" >
      <CreateBlog/>
      </Control.Popup>
      
    {/* DELETE POPUP */}


    <Control.Popup title="Delete Post"  closeBtnColor="dark"  setIsOpen="setConfirmDelete" isOpen={POPUP.deletePost_pop}>
    <DeletePost/>
    </Control.Popup>

 {/* POSTING POPUP */}
    <Control.Popup title="Blog posting..." setIsOpen="setBlogPosting" isOpen={POPUP.BLOG_POSTING}>
    <Control.BlogCard author={{_id : 23231}} />
    </Control.Popup>

    {/* TOAST MSG */}

  

    <Grid container>
      
   


      <Grid sm={0} md={2} item></Grid>
      <Grid sm={11} md={7} item>
        {/* UPLOAD BUTTON */}
       
        {/* BLOGS CARDS        */}
        <AllBLogPosts/> 



      </Grid>





      <Grid sm={0} md={3} item></Grid>
    </Grid>
    </Paper>
    </>
  );
}

export default MainMenu;

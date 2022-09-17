import { Grid,  } from "@mui/material";
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




  const dispatch = useDispatch();
  const profile = useSelector((state) => state.userProfile.PROFILE);
  const POPUP = useSelector((state) => state.popup);
  const classes = useStyles();

  return (
    <Grid container>
      
    {/* {console.log("main menu render")} */}

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
                dispatch({ type: "setUploadPop",payload : {isOpen : true}});
              } else {
                dispatch({ type: "setLoginPop", payload :{isOpen : true}});
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

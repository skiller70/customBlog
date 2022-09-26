import { Alert, Grid, Paper, Snackbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Control from "../ReuseComponents/Control";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { Box } from "@mui/system";
import CreateBlog from "../createblog/CreateBlog";
import { useDispatch, useSelector } from "react-redux";
import AllBLogPosts from "./AllBLogPosts";
import DeletePost from "./DeletePost";
import Comments from "../ReuseComponents/Comments";
import { useBlogForm } from "../Hook/useBlogForm";
import { useEditBlogForm } from "../Hook/useEditBlogForm";


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
  const POSTING = useSelector((state) => state.popup);
  const ERRORS = useSelector((state) => state.errorHandler);

  return (
    <>
      <Paper elevation={0} sx={{ marginTop: 10, height: "100%" }}>
        <Comments />

        {/* CREATE_BLOG */}
        <Control.Popup isOpen={POPUP.EDIT_BLOG_POP} title="Update Blog" setIsOpen="setEditBlog">
          <CreateBlog hook={useEditBlogForm} />
         </Control.Popup>

  {/* UPDATING BLOG_BLOG */}
         <Control.Popup isOpen={POPUP.UPDATING_BLOG} title="Updating..." setIsOpen="setUpdatingBlog" >
          <Control.BlogCard  like={[]} loading={true}/>
         </Control.Popup>
  
      
          













        <Box
          sx={(theme) => ({
            position: "fixed",

            marginLeft: "70%",
            top: "75%",
            zIndex: 1,
          })}
        >
          <Fab
            color="secondary"
            onClick={() => {
              if (profile.id) {
                dispatch({ type: "setUploadPop", payload: { isOpen: true } });
              } else {
                dispatch({ type: "setLoginPop", payload: { isOpen: true } });
              }
            }}
            className={classes.addButton}
            aria-label="add"
          >
            <AddIcon />
          </Fab>
        </Box>
        <Snackbar
          open={ERRORS.TOAST_OPEN}
          sx={{ marginTop: "4%" }}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            severity={ERRORS.TOAST_ERROR || "success"}
            sx={{ width: "100%" }}
          >
            {" "}
            {ERRORS.TOAST_MESSAGE}
          </Alert>
        </Snackbar>
        {/* UPLOAD POPUP */}
        <Control.Popup
          isOpen={POPUP.UPLOAD_POP}
          setIsOpen="setUploadPop"
          title="Create Blog"
        >
          <CreateBlog hook={useBlogForm} />
        </Control.Popup>
        {/* DELETE POPUP */}
        <Control.Popup
          title="Delete Post"
          closeBtnColor="dark"
          setIsOpen="setConfirmDelete"
          isOpen={POPUP.deletePost_pop}
        >
          <DeletePost />
        </Control.Popup>
        {/* POSTING POPUP */}
        
        
        <Control.Popup
          title="Blog posting..."
          setIsOpen="setBlogPosting"
           sx={{width : "100%"}}
          isOpen={POPUP.BLOG_POSTING}    
      
        >
          <Control.BlogCard
          loading={POSTING.BLOG_POST_LOADING}
         
          author={{_id:"dummy"}}
          like={[]}
          
           
        
          />
         
        </Control.Popup>
        {/* TOAST MSG */}

        <Grid container>
          <Grid xs={0.5} md={2} item></Grid>
          <Grid xs={11} md={7} item>
            {/* UPLOAD BUTTON */}

            {/* BLOGS CARDS        */}
            <AllBLogPosts />
           
          </Grid>

          <Grid xs={0} md={3} item></Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default MainMenu;

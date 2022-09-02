import { Grid } from "@mui/material";
import { END_POINT } from "../api/ApiEndpoint";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import Control from "../ReuseComponents/Control";
import BlogCard from "../ReuseComponents/Card";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { Box } from "@mui/system";
import CreateBlog from "../createblog/CreateBlog";
import {useDispatch, useSelector} from "react-redux"
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
  const profile = useSelector((state)=>state.userProfile.PROFILE);
  
  const classes = useStyles();
  const [blogPage, setBlogPage] = useState(1);
  const [lastPage, setLastPage] = useState(false);
  const [isOpenPost, setIsOpenPost] = useState(false);
  useEffect(() => {
    END_POINT.get("/pages").then((data) => {
      setLastPage(data.data.pages);
    });
  }, [blogPage]);
console.log(lastPage)
console.log(setBlogPage)
  return (
    <>
      <Control.Popup
        maxWidth="sm"
        title="Blog Post"
        isOpen={isOpenPost}
        setIsOpen={setIsOpenPost}
      >
        <CreateBlog></CreateBlog>
      </Control.Popup>
      <Grid container>
        <Grid sm={0} md={2} item></Grid>
        <Grid sm={12} md={7} item>
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
                setIsOpenPost(true);
              }}
              className={classes.addButton}
              color="primary"
              aria-label="add"
            >
              <AddIcon />
            </Fab>
          </Box>
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
        </Grid>
        <Grid sm={0} md={3} item>
          <h1>asdasdasd</h1>
          <h1>asdasdasd</h1>
          <h1>{profile.name}</h1>

          <button onClick={()=>{dispatch({type:"@@router/LOCATION_CHANGE"})}}> checkRoute</button>
          <h1>asdasdasd</h1>
        </Grid>
      </Grid>
    </>
  );
}

export default MainMenu;

import { Grid } from "@mui/material";
import { END_POINT } from "../api/ApiEndpoint";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";

import { useBlogs } from "../api/useFetch";
import BlogCard from "../ReuseComponents/Card";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { Box } from "@mui/system";

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
  const [blogPage, setBlogPage] = useState(1);
  const [lastPage, setLastPage] = useState(false);

 
  useEffect(() => {
    END_POINT.get("/pages").then((data) => {
      setLastPage(data.data.pages);
    });
  }, [blogPage]);
  console.log(lastPage);
  console.log(setBlogPage);

  return (
    <>
      <Grid container>
        <Grid sm={0} md={2} item></Grid>
        <Grid sm={12} md={7} item>
          <Box
            sx={(theme) => ({
              position: "fixed",

              paddingLeft: 1,
              top: 420,
              zIndex: 1,
            })}
          >
            <Fab className={classes.addButton} color="primary" aria-label="add">
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
          <h1>asdasdasd</h1>
          <h1>asdasdasd</h1>
        </Grid>
      </Grid>
    </>
  );
}

export default MainMenu;

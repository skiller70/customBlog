import { Button, Grid, Typography } from "@mui/material";

import React from "react";
import { useDeletePost } from "../api/blogPostOperation";
import LoadingSpinner from "../ReuseComponents/LoadingSpinner";
import Backdrop from "@mui/material/Backdrop";
import { useSelector, useDispatch } from "react-redux";
function DeletePost(props) {
  const dispatch = useDispatch();
  const { mutate, isLoading } = useDeletePost();

  const postId = useSelector((state) => state.popup.deleteProps);

  return (
    <>
      {isLoading ? (
        <Backdrop sx={{ color: "#fff" }} open={true}>
          <LoadingSpinner />
        </Backdrop>
      ) : null}

      <Grid container gap={1}>
        <Grid xs={12} item>
          <Typography variant="h5" component="div">
            Are you sure you want to delete this post ?
          </Typography>
        </Grid>

        <Grid xs={0} sm={3} md={8} item>
          {" "}
        </Grid>

        <Grid xs={4} sm={3} md={1} item>
          <Button
            onClick={() => {
              dispatch({
                type: "setConfirmDelete",
                payload: { postId: "", isOpen: false },
              });
            }}
            variant="contained"
            color="primary"
          >
            Cancel
          </Button>
        </Grid>
        {/* EMPTY GRID */}
        <Grid xs={2} sm={1} item md={1}></Grid>

        <Grid xs={4} sm={3} md={1} item>
          <Button
            onClick={() => {
              mutate(postId);
            }}
            variant="contained"
            color="secondary"
          >
            Confirm
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default DeletePost;

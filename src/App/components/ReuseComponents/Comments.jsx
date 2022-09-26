import React from "react";
import Paper from "@mui/material/Paper";
import LoadingSpinner from "./LoadingSpinner";
import { Button, DialogContent, Grid, TextField } from "@mui/material";
import { Stack } from "@mui/system";

import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { useGetComments, usePostComments } from "../api/blogPostOperation";


import CommentCard from "./CommentCard";
import { useState } from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiDialog-root": {
      border: 0,
    },
    "& .MuiDialog-paper": {},
    "& .MuiCardHeader-title": {
      fontSize: 9,
    },
    "& .MuiCardHeader-subheader": {
      fontSize: 9,
    },
    "& .MuiCardContent-root": {
      fontSize: 12,
    },
  },
}));

const Comments = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.userProfile.PROFILE);
  const commentPosting = useSelector((state) => state.postingComment);

  const [pages, setPages] = useState(1);
  const POPUP = useSelector((state) => state.popup);
  const { data, isLoading, fetchNextPage } = useGetComments();
  const { mutate} = usePostComments();
  const [userComment, setUserComment] = useState("");
  const [inputError,setInputError] = useState(false)
  const nextPage = () => {
    setPages(pages + 1);
    dispatch({
      type: "nextPage",
      payload: {
        pageNumber: pages,
        isOpen: true,
      },
    });
    fetchNextPage();
  };

  const postComment = () => {
    if(profile.id){
      if(userComment){
        const postData = {
          idOfBlog: POPUP.COMMENT_POST_ID,
          author: profile.id,
          comment: userComment,
        };
    
        mutate(postData);
    
        setUserComment("");
      }else{
        setInputError(true)
      }
     
    }else{
      dispatch({type:"setLoginPop",payload: {isOpen:true}})
    }
    
  };

  // useEffect(() => {

  //  if(POPUP.COMMENT_POST_ID){
  //   refetch();
  //  }

  // }, [POPUP,pages]);
  return (
    <Paper>
      <Dialog className={classes.root} open={POPUP.GET_COMMENTS}>
        <DialogTitle>
          <Grid container>
            <Grid item xs={3}>
              Comments
            </Grid>
            <Grid item xs></Grid>

            <Grid item xs={2}>
              <Button
                onClick={() => {
                  dispatch({
                    type: "setGetComments",
                    payload: { isOpen: false, postId: "", pages: 0 },
                  });
                }}
                variant="contained"
              >
                X
              </Button>
            </Grid>
          </Grid>
        </DialogTitle>

        {/* DIALOG CONTENT */}
        <DialogContent dividers>
          {commentPosting.POSTING_COMMENT ? (
            <CommentCard author="posting" date="posting" comments="posting" />
          ) : null}

          {data ? (
            data.pages.map((item, pageIndex) => {
              console.log(item)
              return (
                <div key={pageIndex}>
                  {item.map((i, index) => {
                    return (
                      <div key={index}>
                        <CommentCard
                          author={i.author || ""}
                          date={i.date || ""}
                          comments={i.comment || ""}
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })
          ) : (
            <LoadingSpinner />
          )}
       
          {POPUP.GET_COMMENTS_PAGES <= pages ? null : (
            <Stack direction="row" justifyContent="center">
              {isLoading ? (
                <LoadingSpinner />
              ) : (
                <Button onClick={nextPage} size="small" variant="contained">
                  Load more
                </Button>
              )}
            </Stack>
          )}
        </DialogContent>

        <div>
          <Grid container>
            <Grid item xs={9}>
              {" "}
              <TextField
                value={userComment}
                onChange={(e) => {
                  setUserComment(e.target.value);
                  setInputError(false)
                }}
                error={inputError}
           
                size="small"
                sx={{ width: "100%", borderRadius: "0px" }}
              ></TextField>
            </Grid>
            <Grid item xs={3}>
              <Button
                onClick={postComment}
                sx={{ width: "100%", height: "100%", borderRadius: "0px" }}
                variant="contained"
              >
                Post
              </Button>
            </Grid>
          </Grid>
        </div>
      </Dialog>
    </Paper>
  );
};

export default Comments;

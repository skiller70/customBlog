import React, { useState } from "react";
import { Typography, Avatar, IconButton, Collapse } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import Skeleton from "@mui/material/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { useLikePost } from "../api/blogPostOperation";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Comments from "./Comments";
import moment from "moment";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiCardActions-root": {},
  },
}));

function BlogCard(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState();
  const { mutate } = useLikePost();
  const PROFILE = useSelector((state) => state.userProfile.PROFILE);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { img, loading, author, postId, like, date, username,comments,title,subject,content } = props;
 
  const alreadyLike = like?like.find((item) => item.includes(PROFILE.id)):[]


  return (
    <> 
    <Card className={classes.root}>

      <CardHeader
        avatar={
          loading ? (
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          ) : (
            <Avatar sx={{ backgroundColor: "red" }} aria-label="recipe">
              R
            </Avatar>
          )
        }
        action={
          loading ? null : author._id === PROFILE.id ? (
            <div>
              <IconButton
                onClick={() => {
                  dispatch({
                    type: "setConfirmDelete",
                    payload: { isOpen: true, postId },
                  });
                }}
              >
                <DeleteIcon />
              </IconButton>

              <IconButton onClick={()=>{
                    dispatch({
                      type: "setEditBlog",
                      payload: { isOpen: true, title,content,postId,subject},
                    });
              }}>
                <EditIcon />
              </IconButton>
            </div>
          ) : null
        }
        title={
          loading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            username
          )
        }
        subheader={
          loading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            moment(date).fromNow()
          )
        }
      />

      {loading ? (
        <Skeleton sx={{ height: 194 }} animation="wave" variant="rectangular" />
      ) : img === undefined ? (
        <Skeleton
          sx={{ height: 194 }}
          width={1100}
          animation="wave"
          variant="rectangular"
        />
      ) : (
        <CardMedia
          onDoubleClick={() => {
          
          }}
          width="100%"
          component="img"
          height="194"
          image={img || "/static/images/cards/paella.jpg"}
          alt="Paella dish"
        />
      )}

      {loading ? (
        <React.Fragment>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </React.Fragment>
      ) : (
        <CardContent>
          <Typography variant="body2" color="text.secondary">
       {title?title:null}
          </Typography>
        </CardContent>
      )}

      <CardActions disableSpacing>
        {alreadyLike !== undefined ? (
          <IconButton
            onClick={() => {
              if (PROFILE.id) {
                mutate({ postId, author: PROFILE.id, remove: "true" });
              } else {
                dispatch({ type: "setLoginPop", payload: { isOpen: true } });
              }
            }}
            sx={{ marginLeft: "15px" }}
            aria-label="add to favorites"
          >
            {PROFILE.id ? (
              <FavoriteIcon color="secondary" />
            ) : (
              <FavoriteBorderOutlinedIcon />
            )}
          </IconButton>
        ) : (
          <IconButton
            onClick={() => {
              if (PROFILE.id) {
                mutate({ postId, author: PROFILE.id, remove: "false" });
              } else {
                dispatch({ type: "setLoginPop", payload: { isOpen: true } });
              }
            }}
            sx={{ marginLeft: "15px" }}
            aria-label="add to favorites"
          >
            {PROFILE.id ? (
              <FavoriteBorderOutlinedIcon />
            ) : (
              <FavoriteBorderOutlinedIcon />
            )}
          </IconButton>
        )}
        {like?like.length:0}
        <IconButton onClick={()=>{

          let pages = Math.ceil(comments.length / 4 )
//           // if(comments.length>1){
//           // pages = Math.ceil(comments.length / 3 )
//           // }else{
//           //   pages =  0
//           // }
   
// // commentPage

          dispatch({type:"setGetComments",payload : {isOpen : true ,postId,pages}})

        }}>
          <ModeCommentOutlinedIcon />
        </IconButton>
       {comments?comments.length:0}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{ marginLeft: "auto" }}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
       
          <Typography paragraph>
          {content?content:null}
          </Typography>
         
        </CardContent>
      </Collapse>
    </Card>
    </>
  );
}

export default BlogCard;
